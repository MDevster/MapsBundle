/*! For license information please see CoreBundle_Resources_public_vendor_js_AlertHandler_js.bundle.55f8373bf6b610d66664.js.LICENSE.txt */
"use strict";(self.webpackChunkmapsbundle=self.webpackChunkmapsbundle||[]).push([["CoreBundle_Resources_public_vendor_js_AlertHandler_js"],{"../CoreBundle/Resources/public/vendor/js/AlertHandler.js":(e,t,o)=>{o.r(t),o.d(t,{AlertHandler:()=>s});var n=o("../CoreBundle/node_modules/sweetalert2/dist/sweetalert2.all.js"),l=o.n(n);class s{showErrorDialog(e,t,o){l().fire({title:e,text:t,type:"error",customClass:o||""})}showInfoDialog(e,t,o){l().fire({title:e,text:t,type:"info",customClass:o||""})}showInfoActionDialog(e,t,o,n){l().fire({title:e,text:t,type:"info",customClass:n||""}).then((function(){o()}))}showInfoActionDialog2(e,t,o,n){l().fire({title:e,text:t,type:"info",showLoaderOnConfirm:!0,customClass:n||"",preConfirm:e=>{o()}})}showConfirmDialog(e,t,o,n,s,i,r){l().fire({title:e,text:t,type:"warning",showCancelButton:!0,confirmButtonText:s||"Confirm",cancelButtonText:i||"Cancel",dangerMode:!0,customClass:r||""}).then((e=>{e.value?o():n()}))}showConfirmDialogHTML(e,t,o,n,s,i,r){l().fire({title:e,html:t,type:"warning",showCancelButton:!0,confirmButtonText:s||"Confirm",cancelButtonText:i||"Cancel",dangerMode:!0,customClass:r||""}).then((e=>{e.value?o():n()}))}showPreConfirmDialog(e,t,o,n,s,i,r){l().fire({title:e,text:t,type:"warning",showCancelButton:!0,confirmButtonText:n||"Confirm",cancelButtonText:s||"Cancel",showLoaderOnConfirm:r||!0,preConfirm:function(){return new Promise((function(e){o()}))},allowOutsideClick:()=>!l().isLoading(),dangerMode:!0,customClass:i||""})}showLoadingDialog(e,t,o,n){l().fire({title:e,text:t,showCancelButton:!1,allowEscapeKey:!1,allowOutsideClick:!1,showLoaderOnConfirm:!0,onBeforeOpen:()=>{l().clickConfirm()},customClass:n||"",preConfirm:()=>new Promise((function(e){o()}))})}async showSelectDialog(e,t,o,n,s){const{value:i}=await l().fire({title:e,input:"select",inputOptions:t,inputPlaceholder:"-",showCancelButton:!0,confirmButtonText:o,cancelButtonText:n,customClass:s||""});return i}}}}]);