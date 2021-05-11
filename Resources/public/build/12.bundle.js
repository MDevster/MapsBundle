(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/dom-to-image-more/src/dom-to-image-more.js":
/*!*****************************************************************!*\
  !*** ./node_modules/dom-to-image-more/src/dom-to-image-more.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function(global) {
    'use strict';

    var util = newUtil();
    var inliner = newInliner();
    var fontFaces = newFontFaces();
    var images = newImages();

    // Default impl options
    var defaultOptions = {
        // Default is to fail on error, no placeholder
        imagePlaceholder: undefined,
        // Default cache bust is false, it will use the cache
        cacheBust: false,
        // Use (existing) authentication credentials for external URIs (CORS requests)
        useCredentials: false
    };

    var domtoimage = {
        toSvg: toSvg,
        toPng: toPng,
        toJpeg: toJpeg,
        toBlob: toBlob,
        toPixelData: toPixelData,
        toCanvas: toCanvas,
        impl: {
            fontFaces: fontFaces,
            images: images,
            util: util,
            inliner: inliner,
            options: {}
        }
    };

    if (true)
        module.exports = domtoimage;
    else
        {}

    /**
     * @param {Node} node - The DOM Node object to render
     * @param {Object} options - Rendering options
     * @param {Function} options.filter - Should return true if passed node should be included in the output
     *          (excluding node means excluding it's children as well). Not called on the root node.
     * @param {String} options.bgcolor - color for the background, any valid CSS color value.
     * @param {Number} options.width - width to be applied to node before rendering.
     * @param {Number} options.height - height to be applied to node before rendering.
     * @param {Object} options.style - an object whose properties to be copied to node's style before rendering.
     * @param {Number} options.quality - a Number between 0 and 1 indicating image quality (applicable to JPEG only),
                defaults to 1.0.
     * @param {Number} options.scale - a Number multiplier to scale up the canvas before rendering to reduce fuzzy images, defaults to 1.0.
     * @param {String} options.imagePlaceholder - dataURL to use as a placeholder for failed images, default behaviour is to fail fast on images we can't fetch
     * @param {Boolean} options.cacheBust - set to true to cache bust by appending the time to the request url
     * @return {Promise} - A promise that is fulfilled with a SVG image data URL
     * */
    function toSvg(node, options) {
        options = options || {};
        copyOptions(options);
        return Promise.resolve(node)
            .then(function(node) {
                return cloneNode(node, options.filter, true);
            })
            .then(embedFonts)
            .then(inlineImages)
            .then(applyOptions)
            .then(function(clone) {
                return makeSvgDataUri(clone,
                    options.width || util.width(node),
                    options.height || util.height(node)
                );
            });

        function applyOptions(clone) {
            if (options.bgcolor) clone.style.backgroundColor = options.bgcolor;
            if (options.width) clone.style.width = options.width + 'px';
            if (options.height) clone.style.height = options.height + 'px';

            if (options.style)
                Object.keys(options.style).forEach(function(property) {
                    clone.style[property] = options.style[property];
                });

            return clone;
        }
    }

    /**
     * @param {Node} node - The DOM Node object to render
     * @param {Object} options - Rendering options, @see {@link toSvg}
     * @return {Promise} - A promise that is fulfilled with a Uint8Array containing RGBA pixel data.
     * */
    function toPixelData(node, options) {
        return draw(node, options || {})
            .then(function(canvas) {
                return canvas.getContext('2d').getImageData(
                    0,
                    0,
                    util.width(node),
                    util.height(node)
                ).data;
            });
    }

    /**
     * @param {Node} node - The DOM Node object to render
     * @param {Object} options - Rendering options, @see {@link toSvg}
     * @return {Promise} - A promise that is fulfilled with a PNG image data URL
     * */
    function toPng(node, options) {
        return draw(node, options || {})
            .then(function(canvas) {
                return canvas.toDataURL();
            });
    }

    /**
     * @param {Node} node - The DOM Node object to render
     * @param {Object} options - Rendering options, @see {@link toSvg}
     * @return {Promise} - A promise that is fulfilled with a JPEG image data URL
     * */
    function toJpeg(node, options) {
        options = options || {};
        return draw(node, options)
            .then(function(canvas) {
                return canvas.toDataURL('image/jpeg', options.quality || 1.0);
            });
    }

    /**
     * @param {Node} node - The DOM Node object to render
     * @param {Object} options - Rendering options, @see {@link toSvg}
     * @return {Promise} - A promise that is fulfilled with a PNG image blob
     * */
    function toBlob(node, options) {
        return draw(node, options || {})
            .then(util.canvasToBlob);
    }

    /**
     * @param {Node} node - The DOM Node object to render
     * @param {Object} options - Rendering options, @see {@link toSvg}
     * @return {Promise} - A promise that is fulfilled with a canvas object
     * */
    function toCanvas(node, options) {
        return draw(node, options || {});
    }

    function copyOptions(options) {
        // Copy options to impl options for use in impl
        if (typeof(options.imagePlaceholder) === 'undefined') {
            domtoimage.impl.options.imagePlaceholder = defaultOptions.imagePlaceholder;
        } else {
            domtoimage.impl.options.imagePlaceholder = options.imagePlaceholder;
        }

        if (typeof(options.cacheBust) === 'undefined') {
            domtoimage.impl.options.cacheBust = defaultOptions.cacheBust;
        } else {
            domtoimage.impl.options.cacheBust = options.cacheBust;
        }

        if(typeof(options.useCredentials) === 'undefined') {
            domtoimage.impl.options.useCredentials = defaultOptions.useCredentials;
        } else {
            domtoimage.impl.options.useCredentials = options.useCredentials;
        }
    }

    function draw(domNode, options) {
        return toSvg(domNode, options)
            .then(util.makeImage)
            .then(util.delay(100))
            .then(function(image) {
                var scale = typeof(options.scale) !== 'number' ? 1 : options.scale;
                var canvas = newCanvas(domNode, scale);
                var ctx = canvas.getContext('2d');
                if (image) {
                    ctx.scale(scale, scale);
                    ctx.drawImage(image, 0, 0);
                }
                return canvas;
            });

        function newCanvas(domNode, scale) {
            var canvas = document.createElement('canvas');
            canvas.width = (options.width || util.width(domNode)) * scale;
            canvas.height = (options.height || util.height(domNode)) * scale;

            if (options.bgcolor) {
                var ctx = canvas.getContext('2d');
                ctx.fillStyle = options.bgcolor;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }

            return canvas;
        }
    }

    function cloneNode(node, filter, root) {
        if (!root && filter && !filter(node)) return Promise.resolve();

        return Promise.resolve(node)
            .then(makeNodeCopy)
            .then(function(clone) {
                return cloneChildren(node, clone, filter);
            })
            .then(function(clone) {
                return processClone(node, clone);
            });

        function makeNodeCopy(node) {
            if (node instanceof HTMLCanvasElement) return util.makeImage(node.toDataURL());
            return node.cloneNode(false);
        }

        function cloneChildren(original, clone, filter) {
            var children = original.childNodes;
            if (children.length === 0) return Promise.resolve(clone);

            return cloneChildrenInOrder(clone, util.asArray(children), filter)
                .then(function() {
                    return clone;
                });

            function cloneChildrenInOrder(parent, children, filter) {
                var done = Promise.resolve();
                children.forEach(function(child) {
                    done = done
                        .then(function() {
                            return cloneNode(child, filter);
                        })
                        .then(function(childClone) {
                            if (childClone) parent.appendChild(childClone);
                        });
                });
                return done;
            }
        }

        function processClone(original, clone) {
            if (!(clone instanceof Element)) return clone;

            return Promise.resolve()
                .then(cloneStyle)
                .then(clonePseudoElements)
                .then(copyUserInput)
                .then(fixSvg)
                .then(function() {
                    return clone;
                });

            function cloneStyle() {
                copyStyle(window.getComputedStyle(original), clone.style);

                function copyStyle(source, target) {
                    if (source.cssText) {
                        target.cssText = source.cssText;
                        target.font = source.font; // here, we re-assign the font prop.
                    } else copyProperties(source, target);

                    function copyProperties(source, target) {
                        util.asArray(source).forEach(function(name) {
                            target.setProperty(
                                name,
                                source.getPropertyValue(name),
                                source.getPropertyPriority(name)
                            );
                        });
                    }
                }
            }

            function clonePseudoElements() {
                [':before', ':after'].forEach(function(element) {
                    clonePseudoElement(element);
                });

                function clonePseudoElement(element) {
                    var style = window.getComputedStyle(original, element);
                    var content = style.getPropertyValue('content');

                    if (content === '' || content === 'none') return;

                    var className = util.uid();
                    var currentClass = clone.getAttribute('class');
                    if (currentClass) {
                        clone.setAttribute('class', currentClass + ' ' + className);
                    }

                    var styleElement = document.createElement('style');
                    styleElement.appendChild(formatPseudoElementStyle(className, element, style));
                    clone.appendChild(styleElement);

                    function formatPseudoElementStyle(className, element, style) {
                        var selector = '.' + className + ':' + element;
                        var cssText = style.cssText ? formatCssText(style) : formatCssProperties(style);
                        return document.createTextNode(selector + '{' + cssText + '}');

                        function formatCssText(style) {
                            var content = style.getPropertyValue('content');
                            return style.cssText + ' content: ' + content + ';';
                        }

                        function formatCssProperties(style) {

                            return util.asArray(style)
                                .map(formatProperty)
                                .join('; ') + ';';

                            function formatProperty(name) {
                                return name + ': ' +
                                    style.getPropertyValue(name) +
                                    (style.getPropertyPriority(name) ? ' !important' : '');
                            }
                        }
                    }
                }
            }

            function copyUserInput() {
                if (original instanceof HTMLTextAreaElement) clone.innerHTML = original.value;
                if (original instanceof HTMLInputElement) clone.setAttribute("value", original.value);
            }

            function fixSvg() {
                if (!(clone instanceof SVGElement)) return;
                clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

                if (!(clone instanceof SVGRectElement)) return;
                ['width', 'height'].forEach(function(attribute) {
                    var value = clone.getAttribute(attribute);
                    if (!value) return;

                    clone.style.setProperty(attribute, value);
                });
            }
        }
    }

    function embedFonts(node) {
        return fontFaces.resolveAll()
            .then(function(cssText) {
                var styleNode = document.createElement('style');
                node.appendChild(styleNode);
                styleNode.appendChild(document.createTextNode(cssText));
                return node;
            });
    }

    function inlineImages(node) {
        return images.inlineAll(node)
            .then(function() {
                return node;
            });
    }

    function makeSvgDataUri(node, width, height) {
        return Promise.resolve(node)
            .then(function(node) {
                node.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
                return new XMLSerializer().serializeToString(node);
            })
            .then(util.escapeXhtml)
            .then(function(xhtml) {
                return '<foreignObject x="0" y="0" width="100%" height="100%">' + xhtml + '</foreignObject>';
            })
            .then(function(foreignObject) {
                return '<svg xmlns="http://www.w3.org/2000/svg" width="' + width + '" height="' + height + '">' +
                    foreignObject + '</svg>';
            })
            .then(function(svg) {
                return 'data:image/svg+xml;charset=utf-8,' + svg;
            });
    }

    function newUtil() {
        return {
            escape: escape,
            parseExtension: parseExtension,
            mimeType: mimeType,
            dataAsUrl: dataAsUrl,
            isDataUrl: isDataUrl,
            canvasToBlob: canvasToBlob,
            resolveUrl: resolveUrl,
            getAndEncode: getAndEncode,
            uid: uid(),
            delay: delay,
            asArray: asArray,
            escapeXhtml: escapeXhtml,
            makeImage: makeImage,
            width: width,
            height: height
        };

        function mimes() {
            /*
             * Only WOFF and EOT mime types for fonts are 'real'
             * see http://www.iana.org/assignments/media-types/media-types.xhtml
             */
            var WOFF = 'application/font-woff';
            var JPEG = 'image/jpeg';

            return {
                'woff': WOFF,
                'woff2': WOFF,
                'ttf': 'application/font-truetype',
                'eot': 'application/vnd.ms-fontobject',
                'png': 'image/png',
                'jpg': JPEG,
                'jpeg': JPEG,
                'gif': 'image/gif',
                'tiff': 'image/tiff',
                'svg': 'image/svg+xml'
            };
        }

        function parseExtension(url) {
            var match = /\.([^\.\/]*?)(\?|$)/g.exec(url);
            if (match) return match[1];
            else return '';
        }

        function mimeType(url) {
            var extension = parseExtension(url).toLowerCase();
            return mimes()[extension] || '';
        }

        function isDataUrl(url) {
            return url.search(/^(data:)/) !== -1;
        }

        function toBlob(canvas) {
            return new Promise(function(resolve) {
                var binaryString = window.atob(canvas.toDataURL().split(',')[1]);
                var length = binaryString.length;
                var binaryArray = new Uint8Array(length);

                for (var i = 0; i < length; i++)
                    binaryArray[i] = binaryString.charCodeAt(i);

                resolve(new Blob([binaryArray], {
                    type: 'image/png'
                }));
            });
        }

        function canvasToBlob(canvas) {
            if (canvas.toBlob)
                return new Promise(function(resolve) {
                    canvas.toBlob(resolve);
                });

            return toBlob(canvas);
        }

        function resolveUrl(url, baseUrl) {
            var doc = document.implementation.createHTMLDocument();
            var base = doc.createElement('base');
            doc.head.appendChild(base);
            var a = doc.createElement('a');
            doc.body.appendChild(a);
            base.href = baseUrl;
            a.href = url;
            return a.href;
        }

        function uid() {
            var index = 0;

            return function() {
                return 'u' + fourRandomChars() + index++;

                function fourRandomChars() {
                    /* see http://stackoverflow.com/a/6248722/2519373 */
                    return ('0000' + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4);
                }
            };
        }

        function makeImage(uri) {
            if (uri === 'data:,') return Promise.resolve();
            return new Promise(function(resolve, reject) {
                var image = new Image();
                if(domtoimage.impl.options.useCredentials) {
                    image.crossOrigin = 'use-credentials';
                }
                image.onload = function() {
                    resolve(image);
                };
                image.onerror = reject;
                image.src = uri;
            });
        }

        function getAndEncode(url) {
            var TIMEOUT = 30000;
            if (domtoimage.impl.options.cacheBust) {
                // Cache bypass so we dont have CORS issues with cached images
                // Source: https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Bypassing_the_cache
                url += ((/\?/).test(url) ? "&" : "?") + (new Date()).getTime();
            }

            return new Promise(function(resolve) {
                var request = new XMLHttpRequest();

                request.onreadystatechange = done;
                request.ontimeout = timeout;
                request.responseType = 'blob';
                request.timeout = TIMEOUT;
                if(domtoimage.impl.options.useCredentials) {
                    request.withCredentials = true;
                }
                request.open('GET', url, true);
                request.send();

                var placeholder;
                if (domtoimage.impl.options.imagePlaceholder) {
                    var split = domtoimage.impl.options.imagePlaceholder.split(/,/);
                    if (split && split[1]) {
                        placeholder = split[1];
                    }
                }

                function done() {
                    if (request.readyState !== 4) return;

                    if (request.status !== 200) {
                        if (placeholder) {
                            resolve(placeholder);
                        } else {
                            fail('cannot fetch resource: ' + url + ', status: ' + request.status);
                        }

                        return;
                    }

                    var encoder = new FileReader();
                    encoder.onloadend = function() {
                        var content = encoder.result.split(/,/)[1];
                        resolve(content);
                    };
                    encoder.readAsDataURL(request.response);
                }

                function timeout() {
                    if (placeholder) {
                        resolve(placeholder);
                    } else {
                        fail('timeout of ' + TIMEOUT + 'ms occured while fetching resource: ' + url);
                    }
                }

                function fail(message) {
                    console.error(message);
                    resolve('');
                }
            });
        }

        function dataAsUrl(content, type) {
            return 'data:' + type + ';base64,' + content;
        }

        function escape(string) {
            return string.replace(/([.*+?^${}()|\[\]\/\\])/g, '\\$1');
        }

        function delay(ms) {
            return function(arg) {
                return new Promise(function(resolve) {
                    setTimeout(function() {
                        resolve(arg);
                    }, ms);
                });
            };
        }

        function asArray(arrayLike) {
            var array = [];
            var length = arrayLike.length;
            for (var i = 0; i < length; i++) array.push(arrayLike[i]);
            return array;
        }

        function escapeXhtml(string) {
            return string.replace(/#/g, '%23').replace(/\n/g, '%0A');
        }

        function width(node) {
            var leftBorder = px(node, 'border-left-width');
            var rightBorder = px(node, 'border-right-width');
            return node.scrollWidth + leftBorder + rightBorder;
        }

        function height(node) {
            var topBorder = px(node, 'border-top-width');
            var bottomBorder = px(node, 'border-bottom-width');
            return node.scrollHeight + topBorder + bottomBorder;
        }

        function px(node, styleProperty) {
            var value = window.getComputedStyle(node).getPropertyValue(styleProperty);
            return parseFloat(value.replace('px', ''));
        }
    }

    function newInliner() {
        var URL_REGEX = /url\(['"]?([^'"]+?)['"]?\)/g;

        return {
            inlineAll: inlineAll,
            shouldProcess: shouldProcess,
            impl: {
                readUrls: readUrls,
                inline: inline
            }
        };

        function shouldProcess(string) {
            return string.search(URL_REGEX) !== -1;
        }

        function readUrls(string) {
            var result = [];
            var match;
            while ((match = URL_REGEX.exec(string)) !== null) {
                result.push(match[1]);
            }
            return result.filter(function(url) {
                return !util.isDataUrl(url);
            });
        }

        function inline(string, url, baseUrl, get) {
            return Promise.resolve(url)
                .then(function(url) {
                    return baseUrl ? util.resolveUrl(url, baseUrl) : url;
                })
                .then(get || util.getAndEncode)
                .then(function(data) {
                    return util.dataAsUrl(data, util.mimeType(url));
                })
                .then(function(dataUrl) {
                    return string.replace(urlAsRegex(url), '$1' + dataUrl + '$3');
                });

            function urlAsRegex(url) {
                return new RegExp('(url\\([\'"]?)(' + util.escape(url) + ')([\'"]?\\))', 'g');
            }
        }

        function inlineAll(string, baseUrl, get) {
            if (nothingToInline()) return Promise.resolve(string);

            return Promise.resolve(string)
                .then(readUrls)
                .then(function(urls) {
                    var done = Promise.resolve(string);
                    urls.forEach(function(url) {
                        done = done.then(function(string) {
                            return inline(string, url, baseUrl, get);
                        });
                    });
                    return done;
                });

            function nothingToInline() {
                return !shouldProcess(string);
            }
        }
    }

    function newFontFaces() {
        return {
            resolveAll: resolveAll,
            impl: {
                readAll: readAll
            }
        };

        function resolveAll() {
            return readAll(document)
                .then(function(webFonts) {
                    return Promise.all(
                        webFonts.map(function(webFont) {
                            return webFont.resolve();
                        })
                    );
                })
                .then(function(cssStrings) {
                    return cssStrings.join('\n');
                });
        }

        function readAll() {
            return Promise.resolve(util.asArray(document.styleSheets))
                .then(getCssRules)
                .then(selectWebFontRules)
                .then(function(rules) {
                    return rules.map(newWebFont);
                });

            function selectWebFontRules(cssRules) {
                return cssRules
                    .filter(function(rule) {
                        return rule.type === CSSRule.FONT_FACE_RULE;
                    })
                    .filter(function(rule) {
                        return inliner.shouldProcess(rule.style.getPropertyValue('src'));
                    });
            }

            function getCssRules(styleSheets) {
                var cssRules = [];
                styleSheets.forEach(function(sheet) {
                    if (sheet.hasOwnProperty("cssRules")) {
                        try {
                            util.asArray(sheet.cssRules || []).forEach(cssRules.push.bind(cssRules));
                        } catch (e) {
                            console.log('Error while reading CSS rules from ' + sheet.href, e.toString());
                        }
                    }
                });
                return cssRules;
            }

            function newWebFont(webFontRule) {
                return {
                    resolve: function resolve() {
                        var baseUrl = (webFontRule.parentStyleSheet || {}).href;
                        return inliner.inlineAll(webFontRule.cssText, baseUrl);
                    },
                    src: function() {
                        return webFontRule.style.getPropertyValue('src');
                    }
                };
            }
        }
    }

    function newImages() {
        return {
            inlineAll: inlineAll,
            impl: {
                newImage: newImage
            }
        };

        function newImage(element) {
            return {
                inline: inline
            };

            function inline(get) {
                if (util.isDataUrl(element.src)) return Promise.resolve();

                return Promise.resolve(element.src)
                    .then(get || util.getAndEncode)
                    .then(function(data) {
                        return util.dataAsUrl(data, util.mimeType(element.src));
                    })
                    .then(function(dataUrl) {
                        return new Promise(function(resolve, reject) {
                            element.onload = resolve;
                            // for any image with invalid src(such as <img src />), just ignore it
                            element.onerror = resolve;
                            element.src = dataUrl;
                        });
                    });
            }
        }

        function inlineAll(node) {
            if (!(node instanceof Element)) return Promise.resolve(node);

            return inlineBackground(node)
                .then(function() {
                    if (node instanceof HTMLImageElement)
                        return newImage(node).inline();
                    else
                        return Promise.all(
                            util.asArray(node.childNodes).map(function(child) {
                                return inlineAll(child);
                            })
                        );
                });

            function inlineBackground(node) {
                var background = node.style.getPropertyValue('background');

                if (!background) return Promise.resolve(node);

                return inliner.inlineAll(background)
                    .then(function(inlined) {
                        node.style.setProperty(
                            'background',
                            inlined,
                            node.style.getPropertyPriority('background')
                        );
                    })
                    .then(function() {
                        return node;
                    });
            }
        }
    }
})(this);


/***/ }),

/***/ "./node_modules/file-saver/dist/FileSaver.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){g(d.response,b,c)},d.onerror=function(){console.error("could not download file")},d.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(b,d,e,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return c(b,d,e);var h="application/octet-stream"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&"undefined"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null},k.readAsDataURL(b)}else{var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m)},4E4)}});f.saveAs=g.saveAs=g, true&&(module.exports=g)});

//# sourceMappingURL=FileSaver.min.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLXRvLWltYWdlLW1vcmUvc3JjL2RvbS10by1pbWFnZS1tb3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9maWxlLXNhdmVyL2Rpc3QvRmlsZVNhdmVyLm1pbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxJQUF5RDtBQUNqRTtBQUNBO0FBQ0EsUUFBUSxFQUErQjs7QUFFdkM7QUFDQSxlQUFlLEtBQUs7QUFDcEIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsU0FBUztBQUN4QjtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEI7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsS0FBSztBQUNwQixlQUFlLE9BQU8sb0NBQW9DO0FBQzFELGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7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LHFCQUFxQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ3R5QkQsNkpBQWUsR0FBRyxJQUFxQyxDQUFDLGlDQUFPLEVBQUUsb0NBQUMsQ0FBQztBQUFBO0FBQUE7QUFBQSxvR0FBQyxDQUFDLEtBQUssRUFBNkUsQ0FBQyxrQkFBa0IsYUFBYSxnQkFBZ0IsK0JBQStCLFdBQVcsNEZBQTRGLFdBQVcsa0VBQWtFLDREQUE0RCxZQUFZLElBQUksa0JBQWtCLHlCQUF5QiwwREFBMEQsa0JBQWtCLHNCQUFzQix5Q0FBeUMsVUFBVSxjQUFjLHlCQUF5QixvQkFBb0IsSUFBSSxTQUFTLFVBQVUsb0NBQW9DLGNBQWMsSUFBSSx5Q0FBeUMsU0FBUywwQ0FBMEMsMEZBQTBGLHdXQUF3Vyw4REFBOEQsdURBQXVELGlOQUFpTiwwQkFBMEIsNEJBQTRCLEtBQUssS0FBSyxnREFBZ0QsbUZBQW1GLHNCQUFzQixLQUFLLGtDQUFrQyxpREFBaUQsS0FBSyxHQUFHLG1CQUFtQiw4SEFBOEgsb0lBQW9JLGlEQUFpRCxxQkFBcUIsdUJBQXVCLGVBQWUsMEJBQTBCLEdBQUcsd0JBQXdCLHlDQUF5QyxvQkFBb0IsS0FBSyxnREFBZ0QsNERBQTRELHFCQUFxQixPQUFPLEVBQUUsb0JBQW9CLEtBQTBCLHFCQUFxQjs7QUFFaHBGLHlDIiwiZmlsZSI6IjEyLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbihnbG9iYWwpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgdXRpbCA9IG5ld1V0aWwoKTtcbiAgICB2YXIgaW5saW5lciA9IG5ld0lubGluZXIoKTtcbiAgICB2YXIgZm9udEZhY2VzID0gbmV3Rm9udEZhY2VzKCk7XG4gICAgdmFyIGltYWdlcyA9IG5ld0ltYWdlcygpO1xuXG4gICAgLy8gRGVmYXVsdCBpbXBsIG9wdGlvbnNcbiAgICB2YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAgIC8vIERlZmF1bHQgaXMgdG8gZmFpbCBvbiBlcnJvciwgbm8gcGxhY2Vob2xkZXJcbiAgICAgICAgaW1hZ2VQbGFjZWhvbGRlcjogdW5kZWZpbmVkLFxuICAgICAgICAvLyBEZWZhdWx0IGNhY2hlIGJ1c3QgaXMgZmFsc2UsIGl0IHdpbGwgdXNlIHRoZSBjYWNoZVxuICAgICAgICBjYWNoZUJ1c3Q6IGZhbHNlLFxuICAgICAgICAvLyBVc2UgKGV4aXN0aW5nKSBhdXRoZW50aWNhdGlvbiBjcmVkZW50aWFscyBmb3IgZXh0ZXJuYWwgVVJJcyAoQ09SUyByZXF1ZXN0cylcbiAgICAgICAgdXNlQ3JlZGVudGlhbHM6IGZhbHNlXG4gICAgfTtcblxuICAgIHZhciBkb210b2ltYWdlID0ge1xuICAgICAgICB0b1N2ZzogdG9TdmcsXG4gICAgICAgIHRvUG5nOiB0b1BuZyxcbiAgICAgICAgdG9KcGVnOiB0b0pwZWcsXG4gICAgICAgIHRvQmxvYjogdG9CbG9iLFxuICAgICAgICB0b1BpeGVsRGF0YTogdG9QaXhlbERhdGEsXG4gICAgICAgIHRvQ2FudmFzOiB0b0NhbnZhcyxcbiAgICAgICAgaW1wbDoge1xuICAgICAgICAgICAgZm9udEZhY2VzOiBmb250RmFjZXMsXG4gICAgICAgICAgICBpbWFnZXM6IGltYWdlcyxcbiAgICAgICAgICAgIHV0aWw6IHV0aWwsXG4gICAgICAgICAgICBpbmxpbmVyOiBpbmxpbmVyLFxuICAgICAgICAgICAgb3B0aW9uczoge31cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIilcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBkb210b2ltYWdlO1xuICAgIGVsc2VcbiAgICAgICAgZ2xvYmFsLmRvbXRvaW1hZ2UgPSBkb210b2ltYWdlO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtOb2RlfSBub2RlIC0gVGhlIERPTSBOb2RlIG9iamVjdCB0byByZW5kZXJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFJlbmRlcmluZyBvcHRpb25zXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gb3B0aW9ucy5maWx0ZXIgLSBTaG91bGQgcmV0dXJuIHRydWUgaWYgcGFzc2VkIG5vZGUgc2hvdWxkIGJlIGluY2x1ZGVkIGluIHRoZSBvdXRwdXRcbiAgICAgKiAgICAgICAgICAoZXhjbHVkaW5nIG5vZGUgbWVhbnMgZXhjbHVkaW5nIGl0J3MgY2hpbGRyZW4gYXMgd2VsbCkuIE5vdCBjYWxsZWQgb24gdGhlIHJvb3Qgbm9kZS5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb3B0aW9ucy5iZ2NvbG9yIC0gY29sb3IgZm9yIHRoZSBiYWNrZ3JvdW5kLCBhbnkgdmFsaWQgQ1NTIGNvbG9yIHZhbHVlLlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBvcHRpb25zLndpZHRoIC0gd2lkdGggdG8gYmUgYXBwbGllZCB0byBub2RlIGJlZm9yZSByZW5kZXJpbmcuXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG9wdGlvbnMuaGVpZ2h0IC0gaGVpZ2h0IHRvIGJlIGFwcGxpZWQgdG8gbm9kZSBiZWZvcmUgcmVuZGVyaW5nLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLnN0eWxlIC0gYW4gb2JqZWN0IHdob3NlIHByb3BlcnRpZXMgdG8gYmUgY29waWVkIHRvIG5vZGUncyBzdHlsZSBiZWZvcmUgcmVuZGVyaW5nLlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBvcHRpb25zLnF1YWxpdHkgLSBhIE51bWJlciBiZXR3ZWVuIDAgYW5kIDEgaW5kaWNhdGluZyBpbWFnZSBxdWFsaXR5IChhcHBsaWNhYmxlIHRvIEpQRUcgb25seSksXG4gICAgICAgICAgICAgICAgZGVmYXVsdHMgdG8gMS4wLlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBvcHRpb25zLnNjYWxlIC0gYSBOdW1iZXIgbXVsdGlwbGllciB0byBzY2FsZSB1cCB0aGUgY2FudmFzIGJlZm9yZSByZW5kZXJpbmcgdG8gcmVkdWNlIGZ1enp5IGltYWdlcywgZGVmYXVsdHMgdG8gMS4wLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvcHRpb25zLmltYWdlUGxhY2Vob2xkZXIgLSBkYXRhVVJMIHRvIHVzZSBhcyBhIHBsYWNlaG9sZGVyIGZvciBmYWlsZWQgaW1hZ2VzLCBkZWZhdWx0IGJlaGF2aW91ciBpcyB0byBmYWlsIGZhc3Qgb24gaW1hZ2VzIHdlIGNhbid0IGZldGNoXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvcHRpb25zLmNhY2hlQnVzdCAtIHNldCB0byB0cnVlIHRvIGNhY2hlIGJ1c3QgYnkgYXBwZW5kaW5nIHRoZSB0aW1lIHRvIHRoZSByZXF1ZXN0IHVybFxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gQSBwcm9taXNlIHRoYXQgaXMgZnVsZmlsbGVkIHdpdGggYSBTVkcgaW1hZ2UgZGF0YSBVUkxcbiAgICAgKiAqL1xuICAgIGZ1bmN0aW9uIHRvU3ZnKG5vZGUsIG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIGNvcHlPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5vZGUpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNsb25lTm9kZShub2RlLCBvcHRpb25zLmZpbHRlciwgdHJ1ZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZW1iZWRGb250cylcbiAgICAgICAgICAgIC50aGVuKGlubGluZUltYWdlcylcbiAgICAgICAgICAgIC50aGVuKGFwcGx5T3B0aW9ucylcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKGNsb25lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ha2VTdmdEYXRhVXJpKGNsb25lLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLndpZHRoIHx8IHV0aWwud2lkdGgobm9kZSksXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuaGVpZ2h0IHx8IHV0aWwuaGVpZ2h0KG5vZGUpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGZ1bmN0aW9uIGFwcGx5T3B0aW9ucyhjbG9uZSkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuYmdjb2xvcikgY2xvbmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gb3B0aW9ucy5iZ2NvbG9yO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMud2lkdGgpIGNsb25lLnN0eWxlLndpZHRoID0gb3B0aW9ucy53aWR0aCArICdweCc7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5oZWlnaHQpIGNsb25lLnN0eWxlLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0ICsgJ3B4JztcblxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucy5zdHlsZSkuZm9yRWFjaChmdW5jdGlvbihwcm9wZXJ0eSkge1xuICAgICAgICAgICAgICAgICAgICBjbG9uZS5zdHlsZVtwcm9wZXJ0eV0gPSBvcHRpb25zLnN0eWxlW3Byb3BlcnR5XTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGNsb25lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtOb2RlfSBub2RlIC0gVGhlIERPTSBOb2RlIG9iamVjdCB0byByZW5kZXJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFJlbmRlcmluZyBvcHRpb25zLCBAc2VlIHtAbGluayB0b1N2Z31cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIEEgcHJvbWlzZSB0aGF0IGlzIGZ1bGZpbGxlZCB3aXRoIGEgVWludDhBcnJheSBjb250YWluaW5nIFJHQkEgcGl4ZWwgZGF0YS5cbiAgICAgKiAqL1xuICAgIGZ1bmN0aW9uIHRvUGl4ZWxEYXRhKG5vZGUsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGRyYXcobm9kZSwgb3B0aW9ucyB8fCB7fSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKGNhbnZhcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5nZXRJbWFnZURhdGEoXG4gICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgIHV0aWwud2lkdGgobm9kZSksXG4gICAgICAgICAgICAgICAgICAgIHV0aWwuaGVpZ2h0KG5vZGUpXG4gICAgICAgICAgICAgICAgKS5kYXRhO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtOb2RlfSBub2RlIC0gVGhlIERPTSBOb2RlIG9iamVjdCB0byByZW5kZXJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFJlbmRlcmluZyBvcHRpb25zLCBAc2VlIHtAbGluayB0b1N2Z31cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIEEgcHJvbWlzZSB0aGF0IGlzIGZ1bGZpbGxlZCB3aXRoIGEgUE5HIGltYWdlIGRhdGEgVVJMXG4gICAgICogKi9cbiAgICBmdW5jdGlvbiB0b1BuZyhub2RlLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBkcmF3KG5vZGUsIG9wdGlvbnMgfHwge30pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihjYW52YXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FudmFzLnRvRGF0YVVSTCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtOb2RlfSBub2RlIC0gVGhlIERPTSBOb2RlIG9iamVjdCB0byByZW5kZXJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFJlbmRlcmluZyBvcHRpb25zLCBAc2VlIHtAbGluayB0b1N2Z31cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIEEgcHJvbWlzZSB0aGF0IGlzIGZ1bGZpbGxlZCB3aXRoIGEgSlBFRyBpbWFnZSBkYXRhIFVSTFxuICAgICAqICovXG4gICAgZnVuY3Rpb24gdG9KcGVnKG5vZGUsIG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIHJldHVybiBkcmF3KG5vZGUsIG9wdGlvbnMpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihjYW52YXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvanBlZycsIG9wdGlvbnMucXVhbGl0eSB8fCAxLjApO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtOb2RlfSBub2RlIC0gVGhlIERPTSBOb2RlIG9iamVjdCB0byByZW5kZXJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFJlbmRlcmluZyBvcHRpb25zLCBAc2VlIHtAbGluayB0b1N2Z31cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIEEgcHJvbWlzZSB0aGF0IGlzIGZ1bGZpbGxlZCB3aXRoIGEgUE5HIGltYWdlIGJsb2JcbiAgICAgKiAqL1xuICAgIGZ1bmN0aW9uIHRvQmxvYihub2RlLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBkcmF3KG5vZGUsIG9wdGlvbnMgfHwge30pXG4gICAgICAgICAgICAudGhlbih1dGlsLmNhbnZhc1RvQmxvYik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtOb2RlfSBub2RlIC0gVGhlIERPTSBOb2RlIG9iamVjdCB0byByZW5kZXJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFJlbmRlcmluZyBvcHRpb25zLCBAc2VlIHtAbGluayB0b1N2Z31cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIEEgcHJvbWlzZSB0aGF0IGlzIGZ1bGZpbGxlZCB3aXRoIGEgY2FudmFzIG9iamVjdFxuICAgICAqICovXG4gICAgZnVuY3Rpb24gdG9DYW52YXMobm9kZSwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gZHJhdyhub2RlLCBvcHRpb25zIHx8IHt9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb3B5T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICAgIC8vIENvcHkgb3B0aW9ucyB0byBpbXBsIG9wdGlvbnMgZm9yIHVzZSBpbiBpbXBsXG4gICAgICAgIGlmICh0eXBlb2Yob3B0aW9ucy5pbWFnZVBsYWNlaG9sZGVyKSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGRvbXRvaW1hZ2UuaW1wbC5vcHRpb25zLmltYWdlUGxhY2Vob2xkZXIgPSBkZWZhdWx0T3B0aW9ucy5pbWFnZVBsYWNlaG9sZGVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9tdG9pbWFnZS5pbXBsLm9wdGlvbnMuaW1hZ2VQbGFjZWhvbGRlciA9IG9wdGlvbnMuaW1hZ2VQbGFjZWhvbGRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2Yob3B0aW9ucy5jYWNoZUJ1c3QpID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgZG9tdG9pbWFnZS5pbXBsLm9wdGlvbnMuY2FjaGVCdXN0ID0gZGVmYXVsdE9wdGlvbnMuY2FjaGVCdXN0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9tdG9pbWFnZS5pbXBsLm9wdGlvbnMuY2FjaGVCdXN0ID0gb3B0aW9ucy5jYWNoZUJ1c3Q7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0eXBlb2Yob3B0aW9ucy51c2VDcmVkZW50aWFscykgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBkb210b2ltYWdlLmltcGwub3B0aW9ucy51c2VDcmVkZW50aWFscyA9IGRlZmF1bHRPcHRpb25zLnVzZUNyZWRlbnRpYWxzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9tdG9pbWFnZS5pbXBsLm9wdGlvbnMudXNlQ3JlZGVudGlhbHMgPSBvcHRpb25zLnVzZUNyZWRlbnRpYWxzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhdyhkb21Ob2RlLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0b1N2Zyhkb21Ob2RlLCBvcHRpb25zKVxuICAgICAgICAgICAgLnRoZW4odXRpbC5tYWtlSW1hZ2UpXG4gICAgICAgICAgICAudGhlbih1dGlsLmRlbGF5KDEwMCkpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihpbWFnZSkge1xuICAgICAgICAgICAgICAgIHZhciBzY2FsZSA9IHR5cGVvZihvcHRpb25zLnNjYWxlKSAhPT0gJ251bWJlcicgPyAxIDogb3B0aW9ucy5zY2FsZTtcbiAgICAgICAgICAgICAgICB2YXIgY2FudmFzID0gbmV3Q2FudmFzKGRvbU5vZGUsIHNjYWxlKTtcbiAgICAgICAgICAgICAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICAgICAgaWYgKGltYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5zY2FsZShzY2FsZSwgc2NhbGUpO1xuICAgICAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlLCAwLCAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbnZhcztcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGZ1bmN0aW9uIG5ld0NhbnZhcyhkb21Ob2RlLCBzY2FsZSkge1xuICAgICAgICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gKG9wdGlvbnMud2lkdGggfHwgdXRpbC53aWR0aChkb21Ob2RlKSkgKiBzY2FsZTtcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSAob3B0aW9ucy5oZWlnaHQgfHwgdXRpbC5oZWlnaHQoZG9tTm9kZSkpICogc2NhbGU7XG5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLmJnY29sb3IpIHtcbiAgICAgICAgICAgICAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IG9wdGlvbnMuYmdjb2xvcjtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNhbnZhcztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsb25lTm9kZShub2RlLCBmaWx0ZXIsIHJvb3QpIHtcbiAgICAgICAgaWYgKCFyb290ICYmIGZpbHRlciAmJiAhZmlsdGVyKG5vZGUpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShub2RlKVxuICAgICAgICAgICAgLnRoZW4obWFrZU5vZGVDb3B5KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oY2xvbmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2xvbmVDaGlsZHJlbihub2RlLCBjbG9uZSwgZmlsdGVyKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihjbG9uZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9jZXNzQ2xvbmUobm9kZSwgY2xvbmUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgZnVuY3Rpb24gbWFrZU5vZGVDb3B5KG5vZGUpIHtcbiAgICAgICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQpIHJldHVybiB1dGlsLm1ha2VJbWFnZShub2RlLnRvRGF0YVVSTCgpKTtcbiAgICAgICAgICAgIHJldHVybiBub2RlLmNsb25lTm9kZShmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjbG9uZUNoaWxkcmVuKG9yaWdpbmFsLCBjbG9uZSwgZmlsdGVyKSB7XG4gICAgICAgICAgICB2YXIgY2hpbGRyZW4gPSBvcmlnaW5hbC5jaGlsZE5vZGVzO1xuICAgICAgICAgICAgaWYgKGNoaWxkcmVuLmxlbmd0aCA9PT0gMCkgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjbG9uZSk7XG5cbiAgICAgICAgICAgIHJldHVybiBjbG9uZUNoaWxkcmVuSW5PcmRlcihjbG9uZSwgdXRpbC5hc0FycmF5KGNoaWxkcmVuKSwgZmlsdGVyKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2xvbmU7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNsb25lQ2hpbGRyZW5Jbk9yZGVyKHBhcmVudCwgY2hpbGRyZW4sIGZpbHRlcikge1xuICAgICAgICAgICAgICAgIHZhciBkb25lID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICBkb25lID0gZG9uZVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNsb25lTm9kZShjaGlsZCwgZmlsdGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbihjaGlsZENsb25lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkQ2xvbmUpIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZENsb25lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBkb25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcHJvY2Vzc0Nsb25lKG9yaWdpbmFsLCBjbG9uZSkge1xuICAgICAgICAgICAgaWYgKCEoY2xvbmUgaW5zdGFuY2VvZiBFbGVtZW50KSkgcmV0dXJuIGNsb25lO1xuXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgICAgICAgICAgICAudGhlbihjbG9uZVN0eWxlKVxuICAgICAgICAgICAgICAgIC50aGVuKGNsb25lUHNldWRvRWxlbWVudHMpXG4gICAgICAgICAgICAgICAgLnRoZW4oY29weVVzZXJJbnB1dClcbiAgICAgICAgICAgICAgICAudGhlbihmaXhTdmcpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjbG9uZTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gY2xvbmVTdHlsZSgpIHtcbiAgICAgICAgICAgICAgICBjb3B5U3R5bGUod2luZG93LmdldENvbXB1dGVkU3R5bGUob3JpZ2luYWwpLCBjbG9uZS5zdHlsZSk7XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBjb3B5U3R5bGUoc291cmNlLCB0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNvdXJjZS5jc3NUZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuY3NzVGV4dCA9IHNvdXJjZS5jc3NUZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmZvbnQgPSBzb3VyY2UuZm9udDsgLy8gaGVyZSwgd2UgcmUtYXNzaWduIHRoZSBmb250IHByb3AuXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBjb3B5UHJvcGVydGllcyhzb3VyY2UsIHRhcmdldCk7XG5cbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gY29weVByb3BlcnRpZXMoc291cmNlLCB0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHV0aWwuYXNBcnJheShzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5zZXRQcm9wZXJ0eShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlLmdldFByb3BlcnR5VmFsdWUobmFtZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZS5nZXRQcm9wZXJ0eVByaW9yaXR5KG5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjbG9uZVBzZXVkb0VsZW1lbnRzKCkge1xuICAgICAgICAgICAgICAgIFsnOmJlZm9yZScsICc6YWZ0ZXInXS5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xvbmVQc2V1ZG9FbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gY2xvbmVQc2V1ZG9FbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUob3JpZ2luYWwsIGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29udGVudCA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2NvbnRlbnQnKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY29udGVudCA9PT0gJycgfHwgY29udGVudCA9PT0gJ25vbmUnKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGNsYXNzTmFtZSA9IHV0aWwudWlkKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50Q2xhc3MgPSBjbG9uZS5nZXRBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Q2xhc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb25lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjdXJyZW50Q2xhc3MgKyAnICcgKyBjbGFzc05hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChmb3JtYXRQc2V1ZG9FbGVtZW50U3R5bGUoY2xhc3NOYW1lLCBlbGVtZW50LCBzdHlsZSkpO1xuICAgICAgICAgICAgICAgICAgICBjbG9uZS5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGZvcm1hdFBzZXVkb0VsZW1lbnRTdHlsZShjbGFzc05hbWUsIGVsZW1lbnQsIHN0eWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2VsZWN0b3IgPSAnLicgKyBjbGFzc05hbWUgKyAnOicgKyBlbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNzc1RleHQgPSBzdHlsZS5jc3NUZXh0ID8gZm9ybWF0Q3NzVGV4dChzdHlsZSkgOiBmb3JtYXRDc3NQcm9wZXJ0aWVzKHN0eWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShzZWxlY3RvciArICd7JyArIGNzc1RleHQgKyAnfScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBmb3JtYXRDc3NUZXh0KHN0eWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdjb250ZW50Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0eWxlLmNzc1RleHQgKyAnIGNvbnRlbnQ6ICcgKyBjb250ZW50ICsgJzsnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBmb3JtYXRDc3NQcm9wZXJ0aWVzKHN0eWxlKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXRpbC5hc0FycmF5KHN0eWxlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZvcm1hdFByb3BlcnR5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuam9pbignOyAnKSArICc7JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGZvcm1hdFByb3BlcnR5KG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5hbWUgKyAnOiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHN0eWxlLmdldFByb3BlcnR5UHJpb3JpdHkobmFtZSkgPyAnICFpbXBvcnRhbnQnIDogJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY29weVVzZXJJbnB1dCgpIHtcbiAgICAgICAgICAgICAgICBpZiAob3JpZ2luYWwgaW5zdGFuY2VvZiBIVE1MVGV4dEFyZWFFbGVtZW50KSBjbG9uZS5pbm5lckhUTUwgPSBvcmlnaW5hbC52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAob3JpZ2luYWwgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSBjbG9uZS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBvcmlnaW5hbC52YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGZpeFN2ZygpIHtcbiAgICAgICAgICAgICAgICBpZiAoIShjbG9uZSBpbnN0YW5jZW9mIFNWR0VsZW1lbnQpKSByZXR1cm47XG4gICAgICAgICAgICAgICAgY2xvbmUuc2V0QXR0cmlidXRlKCd4bWxucycsICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCEoY2xvbmUgaW5zdGFuY2VvZiBTVkdSZWN0RWxlbWVudCkpIHJldHVybjtcbiAgICAgICAgICAgICAgICBbJ3dpZHRoJywgJ2hlaWdodCddLmZvckVhY2goZnVuY3Rpb24oYXR0cmlidXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGNsb25lLmdldEF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbHVlKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICAgICAgY2xvbmUuc3R5bGUuc2V0UHJvcGVydHkoYXR0cmlidXRlLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbWJlZEZvbnRzKG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIGZvbnRGYWNlcy5yZXNvbHZlQWxsKClcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKGNzc1RleHQpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3R5bGVOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICAgICAgICBub2RlLmFwcGVuZENoaWxkKHN0eWxlTm9kZSk7XG4gICAgICAgICAgICAgICAgc3R5bGVOb2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzc1RleHQpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlubGluZUltYWdlcyhub2RlKSB7XG4gICAgICAgIHJldHVybiBpbWFnZXMuaW5saW5lQWxsKG5vZGUpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VTdmdEYXRhVXJpKG5vZGUsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShub2RlKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKCd4bWxucycsICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBYTUxTZXJpYWxpemVyKCkuc2VyaWFsaXplVG9TdHJpbmcobm9kZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4odXRpbC5lc2NhcGVYaHRtbClcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHhodG1sKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICc8Zm9yZWlnbk9iamVjdCB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiPicgKyB4aHRtbCArICc8L2ZvcmVpZ25PYmplY3Q+JztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihmb3JlaWduT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIicgKyB3aWR0aCArICdcIiBoZWlnaHQ9XCInICsgaGVpZ2h0ICsgJ1wiPicgK1xuICAgICAgICAgICAgICAgICAgICBmb3JlaWduT2JqZWN0ICsgJzwvc3ZnPic7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oc3ZnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwnICsgc3ZnO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbmV3VXRpbCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVzY2FwZTogZXNjYXBlLFxuICAgICAgICAgICAgcGFyc2VFeHRlbnNpb246IHBhcnNlRXh0ZW5zaW9uLFxuICAgICAgICAgICAgbWltZVR5cGU6IG1pbWVUeXBlLFxuICAgICAgICAgICAgZGF0YUFzVXJsOiBkYXRhQXNVcmwsXG4gICAgICAgICAgICBpc0RhdGFVcmw6IGlzRGF0YVVybCxcbiAgICAgICAgICAgIGNhbnZhc1RvQmxvYjogY2FudmFzVG9CbG9iLFxuICAgICAgICAgICAgcmVzb2x2ZVVybDogcmVzb2x2ZVVybCxcbiAgICAgICAgICAgIGdldEFuZEVuY29kZTogZ2V0QW5kRW5jb2RlLFxuICAgICAgICAgICAgdWlkOiB1aWQoKSxcbiAgICAgICAgICAgIGRlbGF5OiBkZWxheSxcbiAgICAgICAgICAgIGFzQXJyYXk6IGFzQXJyYXksXG4gICAgICAgICAgICBlc2NhcGVYaHRtbDogZXNjYXBlWGh0bWwsXG4gICAgICAgICAgICBtYWtlSW1hZ2U6IG1ha2VJbWFnZSxcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0XG4gICAgICAgIH07XG5cbiAgICAgICAgZnVuY3Rpb24gbWltZXMoKSB7XG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgICogT25seSBXT0ZGIGFuZCBFT1QgbWltZSB0eXBlcyBmb3IgZm9udHMgYXJlICdyZWFsJ1xuICAgICAgICAgICAgICogc2VlIGh0dHA6Ly93d3cuaWFuYS5vcmcvYXNzaWdubWVudHMvbWVkaWEtdHlwZXMvbWVkaWEtdHlwZXMueGh0bWxcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdmFyIFdPRkYgPSAnYXBwbGljYXRpb24vZm9udC13b2ZmJztcbiAgICAgICAgICAgIHZhciBKUEVHID0gJ2ltYWdlL2pwZWcnO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICd3b2ZmJzogV09GRixcbiAgICAgICAgICAgICAgICAnd29mZjInOiBXT0ZGLFxuICAgICAgICAgICAgICAgICd0dGYnOiAnYXBwbGljYXRpb24vZm9udC10cnVldHlwZScsXG4gICAgICAgICAgICAgICAgJ2VvdCc6ICdhcHBsaWNhdGlvbi92bmQubXMtZm9udG9iamVjdCcsXG4gICAgICAgICAgICAgICAgJ3BuZyc6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgICAgICAgICdqcGcnOiBKUEVHLFxuICAgICAgICAgICAgICAgICdqcGVnJzogSlBFRyxcbiAgICAgICAgICAgICAgICAnZ2lmJzogJ2ltYWdlL2dpZicsXG4gICAgICAgICAgICAgICAgJ3RpZmYnOiAnaW1hZ2UvdGlmZicsXG4gICAgICAgICAgICAgICAgJ3N2Zyc6ICdpbWFnZS9zdmcreG1sJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHBhcnNlRXh0ZW5zaW9uKHVybCkge1xuICAgICAgICAgICAgdmFyIG1hdGNoID0gL1xcLihbXlxcLlxcL10qPykoXFw/fCQpL2cuZXhlYyh1cmwpO1xuICAgICAgICAgICAgaWYgKG1hdGNoKSByZXR1cm4gbWF0Y2hbMV07XG4gICAgICAgICAgICBlbHNlIHJldHVybiAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG1pbWVUeXBlKHVybCkge1xuICAgICAgICAgICAgdmFyIGV4dGVuc2lvbiA9IHBhcnNlRXh0ZW5zaW9uKHVybCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIHJldHVybiBtaW1lcygpW2V4dGVuc2lvbl0gfHwgJyc7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBpc0RhdGFVcmwodXJsKSB7XG4gICAgICAgICAgICByZXR1cm4gdXJsLnNlYXJjaCgvXihkYXRhOikvKSAhPT0gLTE7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB0b0Jsb2IoY2FudmFzKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuICAgICAgICAgICAgICAgIHZhciBiaW5hcnlTdHJpbmcgPSB3aW5kb3cuYXRvYihjYW52YXMudG9EYXRhVVJMKCkuc3BsaXQoJywnKVsxXSk7XG4gICAgICAgICAgICAgICAgdmFyIGxlbmd0aCA9IGJpbmFyeVN0cmluZy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgdmFyIGJpbmFyeUFycmF5ID0gbmV3IFVpbnQ4QXJyYXkobGVuZ3RoKTtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspXG4gICAgICAgICAgICAgICAgICAgIGJpbmFyeUFycmF5W2ldID0gYmluYXJ5U3RyaW5nLmNoYXJDb2RlQXQoaSk7XG5cbiAgICAgICAgICAgICAgICByZXNvbHZlKG5ldyBCbG9iKFtiaW5hcnlBcnJheV0sIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZydcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGNhbnZhc1RvQmxvYihjYW52YXMpIHtcbiAgICAgICAgICAgIGlmIChjYW52YXMudG9CbG9iKVxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbnZhcy50b0Jsb2IocmVzb2x2ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiB0b0Jsb2IoY2FudmFzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlc29sdmVVcmwodXJsLCBiYXNlVXJsKSB7XG4gICAgICAgICAgICB2YXIgZG9jID0gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KCk7XG4gICAgICAgICAgICB2YXIgYmFzZSA9IGRvYy5jcmVhdGVFbGVtZW50KCdiYXNlJyk7XG4gICAgICAgICAgICBkb2MuaGVhZC5hcHBlbmRDaGlsZChiYXNlKTtcbiAgICAgICAgICAgIHZhciBhID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICAgIGRvYy5ib2R5LmFwcGVuZENoaWxkKGEpO1xuICAgICAgICAgICAgYmFzZS5ocmVmID0gYmFzZVVybDtcbiAgICAgICAgICAgIGEuaHJlZiA9IHVybDtcbiAgICAgICAgICAgIHJldHVybiBhLmhyZWY7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB1aWQoKSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSAwO1xuXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd1JyArIGZvdXJSYW5kb21DaGFycygpICsgaW5kZXgrKztcblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGZvdXJSYW5kb21DaGFycygpIHtcbiAgICAgICAgICAgICAgICAgICAgLyogc2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzYyNDg3MjIvMjUxOTM3MyAqL1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCcwMDAwJyArIChNYXRoLnJhbmRvbSgpICogTWF0aC5wb3coMzYsIDQpIDw8IDApLnRvU3RyaW5nKDM2KSkuc2xpY2UoLTQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBtYWtlSW1hZ2UodXJpKSB7XG4gICAgICAgICAgICBpZiAodXJpID09PSAnZGF0YTosJykgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgIHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgICAgIGlmKGRvbXRvaW1hZ2UuaW1wbC5vcHRpb25zLnVzZUNyZWRlbnRpYWxzKSB7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlLmNyb3NzT3JpZ2luID0gJ3VzZS1jcmVkZW50aWFscyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGltYWdlKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGltYWdlLm9uZXJyb3IgPSByZWplY3Q7XG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gdXJpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRBbmRFbmNvZGUodXJsKSB7XG4gICAgICAgICAgICB2YXIgVElNRU9VVCA9IDMwMDAwO1xuICAgICAgICAgICAgaWYgKGRvbXRvaW1hZ2UuaW1wbC5vcHRpb25zLmNhY2hlQnVzdCkge1xuICAgICAgICAgICAgICAgIC8vIENhY2hlIGJ5cGFzcyBzbyB3ZSBkb250IGhhdmUgQ09SUyBpc3N1ZXMgd2l0aCBjYWNoZWQgaW1hZ2VzXG4gICAgICAgICAgICAgICAgLy8gU291cmNlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9kb2NzL1dlYi9BUEkvWE1MSHR0cFJlcXVlc3QvVXNpbmdfWE1MSHR0cFJlcXVlc3QjQnlwYXNzaW5nX3RoZV9jYWNoZVxuICAgICAgICAgICAgICAgIHVybCArPSAoKC9cXD8vKS50ZXN0KHVybCkgPyBcIiZcIiA6IFwiP1wiKSArIChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgICAgICAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZG9uZTtcbiAgICAgICAgICAgICAgICByZXF1ZXN0Lm9udGltZW91dCA9IHRpbWVvdXQ7XG4gICAgICAgICAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSAnYmxvYic7XG4gICAgICAgICAgICAgICAgcmVxdWVzdC50aW1lb3V0ID0gVElNRU9VVDtcbiAgICAgICAgICAgICAgICBpZihkb210b2ltYWdlLmltcGwub3B0aW9ucy51c2VDcmVkZW50aWFscykge1xuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlcXVlc3Qub3BlbignR0VUJywgdXJsLCB0cnVlKTtcbiAgICAgICAgICAgICAgICByZXF1ZXN0LnNlbmQoKTtcblxuICAgICAgICAgICAgICAgIHZhciBwbGFjZWhvbGRlcjtcbiAgICAgICAgICAgICAgICBpZiAoZG9tdG9pbWFnZS5pbXBsLm9wdGlvbnMuaW1hZ2VQbGFjZWhvbGRlcikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3BsaXQgPSBkb210b2ltYWdlLmltcGwub3B0aW9ucy5pbWFnZVBsYWNlaG9sZGVyLnNwbGl0KC8sLyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzcGxpdCAmJiBzcGxpdFsxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSBzcGxpdFsxXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHJldHVybjtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocmVxdWVzdC5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBsYWNlaG9sZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShwbGFjZWhvbGRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWwoJ2Nhbm5vdCBmZXRjaCByZXNvdXJjZTogJyArIHVybCArICcsIHN0YXR1czogJyArIHJlcXVlc3Quc3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGVuY29kZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgICAgICAgICBlbmNvZGVyLm9ubG9hZGVuZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBlbmNvZGVyLnJlc3VsdC5zcGxpdCgvLC8pWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShjb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgZW5jb2Rlci5yZWFkQXNEYXRhVVJMKHJlcXVlc3QucmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHRpbWVvdXQoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwbGFjZWhvbGRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShwbGFjZWhvbGRlcik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmYWlsKCd0aW1lb3V0IG9mICcgKyBUSU1FT1VUICsgJ21zIG9jY3VyZWQgd2hpbGUgZmV0Y2hpbmcgcmVzb3VyY2U6ICcgKyB1cmwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZmFpbChtZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoJycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZGF0YUFzVXJsKGNvbnRlbnQsIHR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybiAnZGF0YTonICsgdHlwZSArICc7YmFzZTY0LCcgKyBjb250ZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZXNjYXBlKHN0cmluZykge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC8oWy4qKz9eJHt9KCl8XFxbXFxdXFwvXFxcXF0pL2csICdcXFxcJDEnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGRlbGF5KG1zKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoYXJnKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgbXMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGFzQXJyYXkoYXJyYXlMaWtlKSB7XG4gICAgICAgICAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICAgICAgICAgIHZhciBsZW5ndGggPSBhcnJheUxpa2UubGVuZ3RoO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykgYXJyYXkucHVzaChhcnJheUxpa2VbaV0pO1xuICAgICAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZXNjYXBlWGh0bWwoc3RyaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoLyMvZywgJyUyMycpLnJlcGxhY2UoL1xcbi9nLCAnJTBBJyk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB3aWR0aChub2RlKSB7XG4gICAgICAgICAgICB2YXIgbGVmdEJvcmRlciA9IHB4KG5vZGUsICdib3JkZXItbGVmdC13aWR0aCcpO1xuICAgICAgICAgICAgdmFyIHJpZ2h0Qm9yZGVyID0gcHgobm9kZSwgJ2JvcmRlci1yaWdodC13aWR0aCcpO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGUuc2Nyb2xsV2lkdGggKyBsZWZ0Qm9yZGVyICsgcmlnaHRCb3JkZXI7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBoZWlnaHQobm9kZSkge1xuICAgICAgICAgICAgdmFyIHRvcEJvcmRlciA9IHB4KG5vZGUsICdib3JkZXItdG9wLXdpZHRoJyk7XG4gICAgICAgICAgICB2YXIgYm90dG9tQm9yZGVyID0gcHgobm9kZSwgJ2JvcmRlci1ib3R0b20td2lkdGgnKTtcbiAgICAgICAgICAgIHJldHVybiBub2RlLnNjcm9sbEhlaWdodCArIHRvcEJvcmRlciArIGJvdHRvbUJvcmRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHB4KG5vZGUsIHN0eWxlUHJvcGVydHkpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpLmdldFByb3BlcnR5VmFsdWUoc3R5bGVQcm9wZXJ0eSk7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZS5yZXBsYWNlKCdweCcsICcnKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBuZXdJbmxpbmVyKCkge1xuICAgICAgICB2YXIgVVJMX1JFR0VYID0gL3VybFxcKFsnXCJdPyhbXidcIl0rPylbJ1wiXT9cXCkvZztcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW5saW5lQWxsOiBpbmxpbmVBbGwsXG4gICAgICAgICAgICBzaG91bGRQcm9jZXNzOiBzaG91bGRQcm9jZXNzLFxuICAgICAgICAgICAgaW1wbDoge1xuICAgICAgICAgICAgICAgIHJlYWRVcmxzOiByZWFkVXJscyxcbiAgICAgICAgICAgICAgICBpbmxpbmU6IGlubGluZVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGZ1bmN0aW9uIHNob3VsZFByb2Nlc3Moc3RyaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nLnNlYXJjaChVUkxfUkVHRVgpICE9PSAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlYWRVcmxzKHN0cmluZykge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICAgICAgdmFyIG1hdGNoO1xuICAgICAgICAgICAgd2hpbGUgKChtYXRjaCA9IFVSTF9SRUdFWC5leGVjKHN0cmluZykpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobWF0Y2hbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5maWx0ZXIoZnVuY3Rpb24odXJsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICF1dGlsLmlzRGF0YVVybCh1cmwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBpbmxpbmUoc3RyaW5nLCB1cmwsIGJhc2VVcmwsIGdldCkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh1cmwpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24odXJsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiYXNlVXJsID8gdXRpbC5yZXNvbHZlVXJsKHVybCwgYmFzZVVybCkgOiB1cmw7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbihnZXQgfHwgdXRpbC5nZXRBbmRFbmNvZGUpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXRpbC5kYXRhQXNVcmwoZGF0YSwgdXRpbC5taW1lVHlwZSh1cmwpKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKGRhdGFVcmwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKHVybEFzUmVnZXgodXJsKSwgJyQxJyArIGRhdGFVcmwgKyAnJDMnKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gdXJsQXNSZWdleCh1cmwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cCgnKHVybFxcXFwoW1xcJ1wiXT8pKCcgKyB1dGlsLmVzY2FwZSh1cmwpICsgJykoW1xcJ1wiXT9cXFxcKSknLCAnZycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaW5saW5lQWxsKHN0cmluZywgYmFzZVVybCwgZ2V0KSB7XG4gICAgICAgICAgICBpZiAobm90aGluZ1RvSW5saW5lKCkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoc3RyaW5nKTtcblxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzdHJpbmcpXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVhZFVybHMpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24odXJscykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZG9uZSA9IFByb21pc2UucmVzb2x2ZShzdHJpbmcpO1xuICAgICAgICAgICAgICAgICAgICB1cmxzLmZvckVhY2goZnVuY3Rpb24odXJsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb25lID0gZG9uZS50aGVuKGZ1bmN0aW9uKHN0cmluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbmxpbmUoc3RyaW5nLCB1cmwsIGJhc2VVcmwsIGdldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkb25lO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBub3RoaW5nVG9JbmxpbmUoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICFzaG91bGRQcm9jZXNzKHN0cmluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBuZXdGb250RmFjZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXNvbHZlQWxsOiByZXNvbHZlQWxsLFxuICAgICAgICAgICAgaW1wbDoge1xuICAgICAgICAgICAgICAgIHJlYWRBbGw6IHJlYWRBbGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBmdW5jdGlvbiByZXNvbHZlQWxsKCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlYWRBbGwoZG9jdW1lbnQpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24od2ViRm9udHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFxuICAgICAgICAgICAgICAgICAgICAgICAgd2ViRm9udHMubWFwKGZ1bmN0aW9uKHdlYkZvbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gd2ViRm9udC5yZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oY3NzU3RyaW5ncykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3NzU3RyaW5ncy5qb2luKCdcXG4nKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlYWRBbGwoKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHV0aWwuYXNBcnJheShkb2N1bWVudC5zdHlsZVNoZWV0cykpXG4gICAgICAgICAgICAgICAgLnRoZW4oZ2V0Q3NzUnVsZXMpXG4gICAgICAgICAgICAgICAgLnRoZW4oc2VsZWN0V2ViRm9udFJ1bGVzKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHJ1bGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBydWxlcy5tYXAobmV3V2ViRm9udCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHNlbGVjdFdlYkZvbnRSdWxlcyhjc3NSdWxlcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBjc3NSdWxlc1xuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uKHJ1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBydWxlLnR5cGUgPT09IENTU1J1bGUuRk9OVF9GQUNFX1JVTEU7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24ocnVsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlubGluZXIuc2hvdWxkUHJvY2VzcyhydWxlLnN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3NyYycpKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldENzc1J1bGVzKHN0eWxlU2hlZXRzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNzc1J1bGVzID0gW107XG4gICAgICAgICAgICAgICAgc3R5bGVTaGVldHMuZm9yRWFjaChmdW5jdGlvbihzaGVldCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2hlZXQuaGFzT3duUHJvcGVydHkoXCJjc3NSdWxlc1wiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dGlsLmFzQXJyYXkoc2hlZXQuY3NzUnVsZXMgfHwgW10pLmZvckVhY2goY3NzUnVsZXMucHVzaC5iaW5kKGNzc1J1bGVzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHdoaWxlIHJlYWRpbmcgQ1NTIHJ1bGVzIGZyb20gJyArIHNoZWV0LmhyZWYsIGUudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3NzUnVsZXM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIG5ld1dlYkZvbnQod2ViRm9udFJ1bGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJhc2VVcmwgPSAod2ViRm9udFJ1bGUucGFyZW50U3R5bGVTaGVldCB8fCB7fSkuaHJlZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbmxpbmVyLmlubGluZUFsbCh3ZWJGb250UnVsZS5jc3NUZXh0LCBiYXNlVXJsKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc3JjOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB3ZWJGb250UnVsZS5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdzcmMnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBuZXdJbWFnZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbmxpbmVBbGw6IGlubGluZUFsbCxcbiAgICAgICAgICAgIGltcGw6IHtcbiAgICAgICAgICAgICAgICBuZXdJbWFnZTogbmV3SW1hZ2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBmdW5jdGlvbiBuZXdJbWFnZShlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlubGluZTogaW5saW5lXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBpbmxpbmUoZ2V0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHV0aWwuaXNEYXRhVXJsKGVsZW1lbnQuc3JjKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbGVtZW50LnNyYylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZ2V0IHx8IHV0aWwuZ2V0QW5kRW5jb2RlKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXRpbC5kYXRhQXNVcmwoZGF0YSwgdXRpbC5taW1lVHlwZShlbGVtZW50LnNyYykpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbihkYXRhVXJsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5vbmxvYWQgPSByZXNvbHZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZvciBhbnkgaW1hZ2Ugd2l0aCBpbnZhbGlkIHNyYyhzdWNoIGFzIDxpbWcgc3JjIC8+KSwganVzdCBpZ25vcmUgaXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50Lm9uZXJyb3IgPSByZXNvbHZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3JjID0gZGF0YVVybDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGlubGluZUFsbChub2RlKSB7XG4gICAgICAgICAgICBpZiAoIShub2RlIGluc3RhbmNlb2YgRWxlbWVudCkpIHJldHVybiBQcm9taXNlLnJlc29sdmUobm9kZSk7XG5cbiAgICAgICAgICAgIHJldHVybiBpbmxpbmVCYWNrZ3JvdW5kKG5vZGUpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXdJbWFnZShub2RlKS5pbmxpbmUoKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0aWwuYXNBcnJheShub2RlLmNoaWxkTm9kZXMpLm1hcChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5saW5lQWxsKGNoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gaW5saW5lQmFja2dyb3VuZChub2RlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJhY2tncm91bmQgPSBub2RlLnN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2JhY2tncm91bmQnKTtcblxuICAgICAgICAgICAgICAgIGlmICghYmFja2dyb3VuZCkgcmV0dXJuIFByb21pc2UucmVzb2x2ZShub2RlKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBpbmxpbmVyLmlubGluZUFsbChiYWNrZ3JvdW5kKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbihpbmxpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmxpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc3R5bGUuZ2V0UHJvcGVydHlQcmlvcml0eSgnYmFja2dyb3VuZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pKHRoaXMpO1xuIiwiKGZ1bmN0aW9uKGEsYil7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kKWRlZmluZShbXSxiKTtlbHNlIGlmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBleHBvcnRzKWIoKTtlbHNle2IoKSxhLkZpbGVTYXZlcj17ZXhwb3J0czp7fX0uZXhwb3J0c319KSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gYihhLGIpe3JldHVyblwidW5kZWZpbmVkXCI9PXR5cGVvZiBiP2I9e2F1dG9Cb206ITF9Olwib2JqZWN0XCIhPXR5cGVvZiBiJiYoY29uc29sZS53YXJuKFwiRGVwcmVjYXRlZDogRXhwZWN0ZWQgdGhpcmQgYXJndW1lbnQgdG8gYmUgYSBvYmplY3RcIiksYj17YXV0b0JvbTohYn0pLGIuYXV0b0JvbSYmL15cXHMqKD86dGV4dFxcL1xcUyp8YXBwbGljYXRpb25cXC94bWx8XFxTKlxcL1xcUypcXCt4bWwpXFxzKjsuKmNoYXJzZXRcXHMqPVxccyp1dGYtOC9pLnRlc3QoYS50eXBlKT9uZXcgQmxvYihbXCJcXHVGRUZGXCIsYV0se3R5cGU6YS50eXBlfSk6YX1mdW5jdGlvbiBjKGEsYixjKXt2YXIgZD1uZXcgWE1MSHR0cFJlcXVlc3Q7ZC5vcGVuKFwiR0VUXCIsYSksZC5yZXNwb25zZVR5cGU9XCJibG9iXCIsZC5vbmxvYWQ9ZnVuY3Rpb24oKXtnKGQucmVzcG9uc2UsYixjKX0sZC5vbmVycm9yPWZ1bmN0aW9uKCl7Y29uc29sZS5lcnJvcihcImNvdWxkIG5vdCBkb3dubG9hZCBmaWxlXCIpfSxkLnNlbmQoKX1mdW5jdGlvbiBkKGEpe3ZhciBiPW5ldyBYTUxIdHRwUmVxdWVzdDtiLm9wZW4oXCJIRUFEXCIsYSwhMSk7dHJ5e2Iuc2VuZCgpfWNhdGNoKGEpe31yZXR1cm4gMjAwPD1iLnN0YXR1cyYmMjk5Pj1iLnN0YXR1c31mdW5jdGlvbiBlKGEpe3RyeXthLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJjbGlja1wiKSl9Y2F0Y2goYyl7dmFyIGI9ZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJNb3VzZUV2ZW50c1wiKTtiLmluaXRNb3VzZUV2ZW50KFwiY2xpY2tcIiwhMCwhMCx3aW5kb3csMCwwLDAsODAsMjAsITEsITEsITEsITEsMCxudWxsKSxhLmRpc3BhdGNoRXZlbnQoYil9fXZhciBmPVwib2JqZWN0XCI9PXR5cGVvZiB3aW5kb3cmJndpbmRvdy53aW5kb3c9PT13aW5kb3c/d2luZG93Olwib2JqZWN0XCI9PXR5cGVvZiBzZWxmJiZzZWxmLnNlbGY9PT1zZWxmP3NlbGY6XCJvYmplY3RcIj09dHlwZW9mIGdsb2JhbCYmZ2xvYmFsLmdsb2JhbD09PWdsb2JhbD9nbG9iYWw6dm9pZCAwLGE9Zi5uYXZpZ2F0b3ImJi9NYWNpbnRvc2gvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkmJi9BcHBsZVdlYktpdC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSYmIS9TYWZhcmkvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCksZz1mLnNhdmVBc3x8KFwib2JqZWN0XCIhPXR5cGVvZiB3aW5kb3d8fHdpbmRvdyE9PWY/ZnVuY3Rpb24oKXt9OlwiZG93bmxvYWRcImluIEhUTUxBbmNob3JFbGVtZW50LnByb3RvdHlwZSYmIWE/ZnVuY3Rpb24oYixnLGgpe3ZhciBpPWYuVVJMfHxmLndlYmtpdFVSTCxqPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2c9Z3x8Yi5uYW1lfHxcImRvd25sb2FkXCIsai5kb3dubG9hZD1nLGoucmVsPVwibm9vcGVuZXJcIixcInN0cmluZ1wiPT10eXBlb2YgYj8oai5ocmVmPWIsai5vcmlnaW49PT1sb2NhdGlvbi5vcmlnaW4/ZShqKTpkKGouaHJlZik/YyhiLGcsaCk6ZShqLGoudGFyZ2V0PVwiX2JsYW5rXCIpKTooai5ocmVmPWkuY3JlYXRlT2JqZWN0VVJMKGIpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtpLnJldm9rZU9iamVjdFVSTChqLmhyZWYpfSw0RTQpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtlKGopfSwwKSl9OlwibXNTYXZlT3JPcGVuQmxvYlwiaW4gbmF2aWdhdG9yP2Z1bmN0aW9uKGYsZyxoKXtpZihnPWd8fGYubmFtZXx8XCJkb3dubG9hZFwiLFwic3RyaW5nXCIhPXR5cGVvZiBmKW5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKGIoZixoKSxnKTtlbHNlIGlmKGQoZikpYyhmLGcsaCk7ZWxzZXt2YXIgaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtpLmhyZWY9ZixpLnRhcmdldD1cIl9ibGFua1wiLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtlKGkpfSl9fTpmdW5jdGlvbihiLGQsZSxnKXtpZihnPWd8fG9wZW4oXCJcIixcIl9ibGFua1wiKSxnJiYoZy5kb2N1bWVudC50aXRsZT1nLmRvY3VtZW50LmJvZHkuaW5uZXJUZXh0PVwiZG93bmxvYWRpbmcuLi5cIiksXCJzdHJpbmdcIj09dHlwZW9mIGIpcmV0dXJuIGMoYixkLGUpO3ZhciBoPVwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCI9PT1iLnR5cGUsaT0vY29uc3RydWN0b3IvaS50ZXN0KGYuSFRNTEVsZW1lbnQpfHxmLnNhZmFyaSxqPS9DcmlPU1xcL1tcXGRdKy8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtpZigoanx8aCYmaXx8YSkmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBGaWxlUmVhZGVyKXt2YXIgaz1uZXcgRmlsZVJlYWRlcjtrLm9ubG9hZGVuZD1mdW5jdGlvbigpe3ZhciBhPWsucmVzdWx0O2E9aj9hOmEucmVwbGFjZSgvXmRhdGE6W147XSo7LyxcImRhdGE6YXR0YWNobWVudC9maWxlO1wiKSxnP2cubG9jYXRpb24uaHJlZj1hOmxvY2F0aW9uPWEsZz1udWxsfSxrLnJlYWRBc0RhdGFVUkwoYil9ZWxzZXt2YXIgbD1mLlVSTHx8Zi53ZWJraXRVUkwsbT1sLmNyZWF0ZU9iamVjdFVSTChiKTtnP2cubG9jYXRpb249bTpsb2NhdGlvbi5ocmVmPW0sZz1udWxsLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtsLnJldm9rZU9iamVjdFVSTChtKX0sNEU0KX19KTtmLnNhdmVBcz1nLnNhdmVBcz1nLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUmJihtb2R1bGUuZXhwb3J0cz1nKX0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1GaWxlU2F2ZXIubWluLmpzLm1hcCJdLCJzb3VyY2VSb290IjoiIn0=