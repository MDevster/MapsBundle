<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2022, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */


$cbClass = \con4gis\MapsBundle\Classes\Contao\Callbacks\TlC4gMapBaselayers::class;
$GLOBALS['TL_DCA']['tl_c4g_map_baselayers'] =
    [
    'config' =>
        [
        'label'                       => &$GLOBALS['TL_LANG']['MOD']['c4g_map_baselayers'][0],
        'dataContainer'               => 'Table',
        'ctable'                      => ['tl_c4g_map_overlays'],
        'enableVersioning'            => true,
        'markAsCopy'                  => 'name',
        'onsubmit_callback'           => [
            [\con4gis\MapsBundle\Classes\Caches\C4GMapsAutomator::class, 'purgeBaselayerApiCache']
        ],
        'onload_callback' => [[$cbClass, 'showInfoMessage']],
        'sql' =>
            [
            'keys' =>
                [
                'id' => 'primary',
                'pid' => 'index'
                ]
            ],
        ],
    'list' =>
        [
        'sorting' =>
            [
                'mode'                    => 5,
                'icon'                    => 'bundles/con4giscore/images/be-icons/con4gis_blue.svg',
                'panelLayout'             => 'search',
                'paste_button_callback'   => [$cbClass, 'pasteElement']
            ],
        'label' =>
            [
                'fields'                  => ['name','display_name','minzoomlevel','maxzoomlevel'],
                'format'                  => '<span style="color:#303E4D"><b>%s</b></span> -> %s [˅%s,˄%s]',
                'label_callback'          => [$cbClass, 'addIcon']
            ],
        'global_operations' =>
            [
            'all' => [
                'label'               => &$GLOBALS['TL_LANG']['MSC']['all'],
                'href'                => 'act=select',
                'class'               => 'header_edit_all',
                'attributes'          => 'onclick="Backend.getScrollOffset();" accesskey="e"'
                ],
            'back' => [
                'href'                => 'key=back',
                'class'               => 'header_back',
                'button_callback'     => ['\con4gis\CoreBundle\Classes\Helper\DcaHelper', 'back'],
                'icon'                => 'back.svg',
                'label'               => &$GLOBALS['TL_LANG']['MSC']['backBT'],
                ],
            ],
        'operations' =>
            [
            'edit' =>
                [
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['edit'],
                'href'                => 'act=edit',
                'icon'                => 'edit.svg',
                ],
            'copy' =>
                [
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['copy'],
                'href'                => 'act=paste&amp;mode=copy',
                'icon'                => 'copy.svg',
                'attributes'          => 'onclick="Backend.getScrollOffset();"',
                ],
            'cut' =>
                [
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['cut'],
                'href'                => 'act=paste&amp;mode=cut',
                'icon'                => 'cut.svg',
                'attributes'          => 'onclick="Backend.getScrollOffset();"',
                ],
            'delete' =>
                [
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['delete'],
                'href'                => 'act=delete',
                'icon'                => 'delete.svg',
                'attributes'          => 'onclick="if (!confirm(\'' . $GLOBALS['TL_LANG']['MSC']['deleteConfirm'] . '\')) return false; Backend.getScrollOffset();"'
                ],
            'toggle' =>
                [
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_maps']['toggle'],
                'icon'                => 'visible.svg',
                'attributes'          => 'onclick="Backend.getScrollOffset(); return AjaxRequest.toggleVisibility(this, %s);"',
                'button_callback'     => [$cbClass, 'toggleIcon']
                ],
            'show' =>
                [
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['show'],
                'href'                => 'act=show',
                'icon'                => 'show.svg'
                ],
            'overlays' =>
                [
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['overlays'],
                'href'                => 'table=tl_c4g_map_overlays',
                'icon'                => 'bundles/con4gismaps/images/be-icons/overlays.svg'
                ],
            ]
        ],
    'palettes' =>
        [
        '__selector__'                => ['provider','osm_style','protect_baselayer','klokan_type'],
        'default'                     => '{general_legend},name,display_name,provider,attribution,minzoomlevel,maxzoomlevel,preview_image;{cesium_legend:hide},cesium;'.
                                         '{protection_legend:hide},protect_baselayer,published,consentId;',
        'osm'                         => '{general_legend},name,display_name,provider,osm_style,attribution,minzoomlevel,maxzoomlevel,preview_image;{cesium_legend:hide},cesium;'.
                                         '{protection_legend:hide},protect_baselayer,published,consentId;',
        'opentopomap'                 => '{general_legend},name,display_name,provider,attribution,minzoomlevel,maxzoomlevel,preview_image;{cesium_legend:hide},cesium;'.
                                         '{protection_legend:hide},protect_baselayer,published,consentId;',
        'stamen'                      => '{general_legend},name,display_name,provider,stamen_style,attribution,minzoomlevel,maxzoomlevel,preview_image;{cesium_legend:hide},cesium;'.
                                         '{protection_legend:hide},protect_baselayer,published,consentId;',
        'con4gisIo'                   => '{general_legend},name,display_name,provider,con4gisIo,attribution,minzoomlevel,maxzoomlevel,preview_image;{cesium_legend:hide},cesium;'.
                                         '{protection_legend:hide},protect_baselayer,published,consentId;',
        'mapbox'                      => '{general_legend},name,display_name,provider,mapbox_type,app_id,api_key,attribution,minzoomlevel,maxzoomlevel,preview_image;{cesium_legend:hide},cesium;'.
                                         '{protection_legend:hide},protect_baselayer,published,consentId;',
        'mapz'                        => '{general_legend},name,display_name,provider,mapz_type,api_key,attribution,minzoomlevel,maxzoomlevel,preview_image;{cesium_legend:hide},cesium;'.
                                         '{protection_legend:hide},protect_baselayer,published,consentId;',
        'here'                        => '{general_legend},name,display_name,provider,here_type,app_id,api_key,attribution,minzoomlevel,maxzoomlevel,preview_image;{cesium_legend:hide},cesium;'.
                                         '{protection_legend:hide},protect_baselayer,published,consentId;',
        'thunder'                     => '{general_legend},name,display_name,provider,thunderforest_type,api_key,attribution,minzoomlevel,maxzoomlevel,preview_image;{cesium_legend:hide},cesium;'.
                                         '{protection_legend:hide},protect_baselayer,published,consentId;',
        'bing'                        => '{general_legend},name,display_name,provider,bing_style,bing_key,attribution,minzoomlevel,maxzoomlevel,preview_image;{cesium_legend:hide},cesium;'.
                                         '{protection_legend:hide},protect_baselayer,published,consentId;',
        'klokan'                      => '{general_legend},name,display_name,provider,klokan_type,url,attribution,minzoomlevel,maxzoomlevel,preview_image;{cesium_legend:hide},cesium;'.
                                         '{protection_legend:hide},protect_baselayer,published,consentId;',
        'wms'                         => '{general_legend},name,display_name,provider,wms_url,wms_params_layers,wms_params_version,wms_params_format,wms_params_transparent,wms_gutter,attribution,minzoomlevel,maxzoomlevel,preview_image;{cesium_legend:hide},cesium;'.
                                         '{protection_legend:hide},protect_baselayer,published,consentId;',
        'geoimage'                    => '{general_legend},name,display_name,provider,image_src,geoimage_json,attribution,minzoomlevel,maxzoomlevel,preview_image;{cesium_legend:hide},cesium;'.
                                         '{protection_legend:hide},protect_baselayer,published,consentId;',
        'owm'                         => '{general_legend},name,display_name,provider,app_id,api_key,attribution,minzoomlevel,maxzoomlevel,preview_image;{cesium_legend:hide},cesium;'.
                                         '{protection_legend:hide},protect_baselayer,published,consentId;',
        'group'                       => '{general_legend},name,display_name,provider,attribution,layerGroup,preview_image;'.
                                         '{protection_legend:hide},protect_baselayer,published,consentId;',
        'custom'                      => '{general_legend},name,display_name,provider,osm_style_url1,osm_style_url2,osm_style_url3,osm_style_url4,extend,osm_keyname,attribution,minzoomlevel,maxzoomlevel,preview_image;{cesium_legend:hide},cesium;'.
                                         '{protection_legend:hide},protect_baselayer,published,consentId;'
        ],
    'subpalettes' =>
        [
        'protect_baselayer' => 'permitted_groups',
        'osm_style_Mapnik' => '',
        'osm_style_German' => '',
        'stamen_style_Toner'=> '',
        'stamen_style_Terrain'=> '',
        'stamen_style_Watercolor'=> '',
        'klokan_type_OpenMapTiles' => 'style_url',
        'klokan_type_basic'      => 'api_key',
        'klokan_type_bright'      => 'api_key',
        'klokan_type_darkmatter'      => 'api_key',
        'klokan_type_positron'      => 'api_key',
        'klokan_type_voyager'      => 'api_key',
        'klokan_type_streets'      => 'api_key',
        'klokan_type_topo'      => 'api_key',
        'klokan_type_hybrid'      => 'api_key',
        ],
    'fields' =>
        [
        'id' =>
            [
            'sql'                     => "int(10) unsigned NOT NULL auto_increment"
            ],
        'pid' =>
            [
            'sql'                     => "int(10) unsigned NOT NULL default '0'"
            ],
        'importId' =>
            [
            'sql'                     => "bigint(20) unsigned NOT NULL default '0'",
            'eval'                    => ['doNotCopy' => true]
            ],
        'sorting' =>
            [
            'sql'                     => "int(10) unsigned NOT NULL default '0'"
            ],
        'tstamp' =>
            [
            'sql'                     => "int(10) unsigned NOT NULL default '0'"
            ],
        'name' =>
            [
            'exclude'                 => true,
            'search'                  => true,
            'sorting'                 => true,
            'filter'                  => true,
            'flag'                    => 1,
            'inputType'               => 'text',
            'eval'                    => ['mandatory'=>true, 'maxlength'=>254, 'tl_class'=>'w50'],
            'sql'                     => "varchar(254) NOT NULL default ''"
            ],
        'display_name' =>
            [
            'exclude'                 => true,
            'search'                  => true,
            'inputType'               => 'text',
            'eval'                    => ['maxlength'=>254, 'tl_class'=>'w50'],
            'sql'                     => "varchar(254) NOT NULL default ''"
            ],

        'provider' =>
            [
            'exclude'                 => true,
            'filter'                  => true,
            'inputType'               => 'radio',
            'default'                 => 'con4gisIo',
            'options'                 => [
                'con4gisIo' => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_con4gisIo'],
                'osm' => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm'],
                'bing' => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_bing'],
                'here' => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_here'],
                'klokan' => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_klokan'],
                'mapbox' => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_mapbox'],
                'mapz' => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_mapz'],
                'otm' => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_otm'],
                'stamen' => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_stamen'],
                'thunder' => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_thunderforest'],
                'wms' => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_wms'],
                'geoimage' => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_geoimage'],
                'group' => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_group'],
                'custom' => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_custom'],
            ],
            'eval'                    => ['submitOnChange'=>true, 'tl_class'=>'clr'],
            'sql'                     => "varchar(10) NOT NULL default ''"
            ],
        'con4gisIo' =>
            [
                'exclude'                 => true,
                'filter'                  => false,
                'inputType'               => 'select',
                'options_callback'        => [$cbClass, 'getCon4gisIoBaselayers'],
                'sql'                     => "int NOT NULL default 0"
            ],
        'osm_style' =>
            [
                'exclude'                 => true,
                'filter'                  => false,
                'inputType'               => 'select',
                'default'                 => 'Mapnik',
                'options'                 => [
                    'Mapnik'          => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_mapnik'],
                    'German'          => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_german']
                ],
                'eval'                    => ['submitOnChange'=>true, 'tl_class'=>'clr'],
                'sql'                     => "varchar(30) NOT NULL default ''"
            ],
        'bing_style' =>
            [
                'exclude'                 => true,
                'filter'                  => false,
                'inputType'               => 'select',
                'default'                 => 'Road',
                'options'                 => ['Road' => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_bing_road'],
                    'AerialWithLabels' => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_bing_hybrid'],
                    'Aerial' => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_bing_aerial']
                ],
                'sql'                     => "varchar(30) NOT NULL default ''"
            ],
        'bing_key' =>
            [
                'exclude'                 => true,
                'filter'                  => false,
                'inputType'               => 'text',
                'eval'                    => ['decodeEntities'=>true, 'maxlength'=>100, 'tl_class'=>'long', 'mandatory'=>'true'],
                'sql'                     => "varchar(100) NOT NULL default ''"
            ],
        'here_type' =>
            [
                'exclude'                 => true,
                'filter'                  => false,
                'inputType'               => 'select',
                'default'                 => 'normal',
                'options'                 => [
                    'normal'              => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_here_normal'],
                    'transit'             => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_here_transit'],
                    'pedestrian'          => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_here_pedestrian'],
                    'terrain'             => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_here_terrain'],
                    'satellite'           => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_here_satellite'],
                    'hybrid'              => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_here_hybrid'],
                ],
                'eval'                    => ['submitOnChange' => false],
                'sql'                     => "varchar(30) NOT NULL default ''"
            ],
        'klokan_type' =>
            [
                'exclude'                 => true,
                'filter'                  => false,
                'inputType'               => 'select',
                'default'                 => 'OpenMapTiles',
                'options'                 => [
                    'OpenMapTiles'        => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_klokan_openmaptiles'],
                    'basic'               => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_klokan_tilehosting_basic'],
                    'bright'              => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_klokan_tilehosting_bright'],
                    'darkmatter'          => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_klokan_tilehosting_darkmatter'],
                    'positron'            => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_klokan_tilehosting_positron'],
                    'voyager'             => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_klokan_tilehosting_voyager'],
                    'streets'             => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_klokan_tilehosting_streets'],
                    'topo'                => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_klokan_tilehosting_topo'],
                    'hybrid'              => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_klokan_tilehosting_hybrid'],
                ],
                'eval'                    => ['submitOnChange' => true],
                'sql'                     => "varchar(30) NOT NULL default ''"
            ],
        'mapz_type' =>
            [
                'exclude'                 => true,
                'filter'                  => false,
                'inputType'               => 'select',
                'default'                 => 'mapz_multicolor_base',
                'options'                 => [
                    'mapz_softcolor_transport'        => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_mapz_softcolor_transport'],
                    'mapz_multicolor_blind'           => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_mapz_multicolor_blind'],
                    'mapz_shades_of_gray_blind'       => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_mapz_shades_of_gray_blind'],
                    'mapz_highlander'                 => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_mapz_highlander'],
                    'mapz_multicolor_base'            => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_mapz_multicolor_base'],
                    'mapz_multicolor_poi'             => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_mapz_multicolor_poi'],
                    'mapz_shades_of_gray'             => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_mapz_shades_of_gray']
                ],
                'eval'                    => ['submitOnChange' => true],
                'sql'                     => "varchar(30) NOT NULL default ''"
            ],
        'style_url' =>
            [
                'exclude'                 => true,
                'inputType'               => 'text',
                'default'                 => 'dark-matter',
                'sql'                     => "varchar(30) NOT NULL default ''"
            ],
        'mapbox_type' =>
            [
                'exclude'                 => true,
                'filter'                  => false,
                'inputType'               => 'select',
                'default'                 => 'Mapbox',
                'options'                 => [
                    'Mapbox'              => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_mapbox_studio'],
                    'MapboxClassic'       => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_mapbox_classic'],
                ],
                'eval'                    => ['submitOnChange' => true],
                'sql'                     => "varchar(30) NOT NULL default ''"
            ],
        'stamen_style' =>
            [
                'exclude'                 => true,
                'filter'                  => false,
                'inputType'               => 'select',
                'default'                 => 'Toner',
                'options'                 => [
                    'Toner'           => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_toner'],
                    'Terrain'         => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_terrain'],
                    'Watercolor'      => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_watercolor'],
                ],
                'eval'                    => ['submitOnChange'=>true, 'tl_class'=>'clr'],
                'sql'                     => "varchar(30) NOT NULL default ''"
            ],
        'thunderforest_type' =>
            [
                'exclude'                 => true,
                'filter'                  => false,
                'inputType'               => 'select',
                'default'                 => 'cycle',
                'options'                 => [
                    'cycle'               => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_thunderforest_opencyclemap'],
                    'transport'           => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_thunderforest_transport'],
                    'landscape'           => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_thunderforest_landscape'],
                    'outdoors'            => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_thunderforest_outdoors'],
                    'transport-dark'      => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_thunderforest_transport_dark'],
                    'spinal-map'          => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_thunderforest_spinal_map'],
                    'pioneer'             => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_thunderforest_pioneer'],
                    'mobile-atlas'        => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_thunderforest_mobile_atlas'],
                    'neighbourhood'       => &$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_thunderforest_neighbourhood'],
                ],
                'eval'                    => ['submitOnChange' => false],
                'sql'                     => "varchar(30) NOT NULL default ''"
            ],
        'wms_url' =>
            [
                'exclude'                 => true,
                'filter'                  => false,
                'inputType'               => 'text',
                'eval'                    => ['maxlength'=>255, 'tl_class'=>'long', 'allowHtml' => true],
                'sql'                     => "varchar(255) NOT NULL default ''"
            ],
        'wms_params_layers' =>
            [
                'exclude'                 => true,
                'filter'                  => false,
                'inputType'               => 'text',
                'eval'                    => ['maxlength'=>255, 'tl_class'=>'w50', 'allowHtml' => true],
                'sql'                     => "varchar(255) NOT NULL default ''"
            ],
        'wms_params_version' =>
            [
                'exclude'                 => true,
                'filter'                  => false,
                'inputType'               => 'text',
                'eval'                    => ['maxlength'=>255, 'tl_class'=>'w50', 'allowHtml' => true],
                'sql'                     => "varchar(255) NOT NULL default ''"
            ],
        'wms_params_format' =>
            [
                'exclude'                 => true,
                'filter'                  => false,
                'inputType'               => 'text',
                'eval'                    => ['maxlength'=>255, 'tl_class'=>'w50', 'allowHtml' => true],
                'sql'                     => "varchar(255) NOT NULL default ''"
            ],
        'wms_params_transparent' =>
            [
                'exclude'                 => true,
                'default'                 => false,
                'inputType'               => 'checkbox',
                'eval'                    => ['submitOnChange' => false, 'tl_class'=>'w50 m12'],
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'wms_params_srs' =>
            [
                'exclude'                 => true,
                'filter'                  => false,
                'inputType'               => 'text',
                'eval'                    => ['maxlength'=>255, 'tl_class'=>'w50', 'allowHtml' => true],
                'sql'                     => "varchar(255) NOT NULL default ''"
            ],
        'wms_gutter' =>
            [
                'exclude'                 => true,
                'filter'                  => false,
                'inputType'               => 'text',
                'eval'                    => ['maxlength'=>255, 'tl_class'=>'w50', 'allowHtml' => true],
                'sql'                     => "varchar(255) NOT NULL default ''"
            ],
        'image_src' =>
            [
                'exclude'                 => true,
                'inputType'               => 'fileTree',
                'eval'                    => ['fieldType'=>'radio', 'files'=>true, 'extensions'=>'gif,jpg,jpeg,png', 'tl_class'=>'clr', 'mandatory'=>true,'submitOnChange' => true],
                'sql'                     => "binary(16) NULL"
            ],
        'geoimage_json' =>
            [
                'exclude'                 => true,
                'inputType'               => 'textarea',
                'eval'                    => ['style'=>'height:120px;', 'preserveTags'=>true],
                'sql'                     => "text NULL"
            ],
        'layerGroup' =>
            [
            'exclude'                 => true,
            'inputType'               => 'multiColumnWizard',
            'eval'                    => [
                'columnsCallback'        => ['tl_c4g_map_baselayers','groupColumns']
            ],
            'sql'                     => 'blob NULL'

            ],
        'osm_style_url1' =>
            [
            'exclude'                 => true,
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => ['decodeEntities'=>true, 'maxlength'=>255, 'tl_class'=>'long'],
            'sql'                     => "varchar(255) NOT NULL default ''"
            ],
        'osm_style_url2' =>
            [
            'exclude'                 => true,
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => ['decodeEntities'=>true, 'maxlength'=>255, 'tl_class'=>'long'],
            'sql'                     => "varchar(255) NOT NULL default ''"
            ],
        'osm_style_url3' =>
            [
            'exclude'                 => true,
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => ['decodeEntities'=>true, 'maxlength'=>255, 'tl_class'=>'long'],
            'sql'                     => "varchar(255) NOT NULL default ''"
            ],
        'osm_style_url4' =>
            [
            'exclude'                 => true,
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => ['decodeEntities'=>true, 'maxlength'=>255, 'tl_class'=>'long'],
            'sql'                     => "varchar(255) NOT NULL default ''"
            ],
        'extend' =>
            [
            'exclude'                 => true,
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => ['decodeEntities'=>true, 'maxlength'=>255, 'tl_class'=>'long'],
            'sql'                     => "varchar(255) NOT NULL default ''"
            ],
        'osm_keyname' =>
            [
            'exclude'                 => true,
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => ['maxlength'=>30],
            'sql'                     => "varchar(30) NOT NULL default ''"
            ],
        'url' =>
            [
                'exclude'                 => true,
                'filter'                  => false,
                'inputType'               => 'text',
                'eval'                    => ['decodeEntities'=>true, 'maxlength'=>255, 'tl_class'=>'long'],
                'sql'                     => "varchar(255) NOT NULL default ''"
            ],
        'api_key' =>
            [
                'exclude'                 => true,
                'filter'                  => false,
                'inputType'               => 'text',
                'eval'                    => ['decodeEntities'=>true, 'maxlength'=>100, 'tl_class'=>'long', 'mandatory'=>'true'],
                'sql'                     => "varchar(100) NOT NULL default ''"
            ],

        'app_id' =>
            [
                'exclude'                 => true,
                'filter'                  => false,
                'inputType'               => 'text',
                'eval'                    => ['decodeEntities'=>true, 'maxlength'=>100, 'tl_class'=>'long', 'mandatory'=>'true'],
                'sql'                     => "varchar(100) NOT NULL default ''"
            ],
        'attribution' =>
            [
                'exclude'                 => true,
                'filter'                  => false,
                'inputType'               => 'text',
                'eval'                    => ['maxlength'=>255, 'tl_class'=>'long clr', 'allowHtml' => true],
                'sql'                     => "varchar(255) NOT NULL default ''"
            ],
        'minzoomlevel' =>
            [
                'exclude'                 => true,
                'filter'                  => false,
                'inputType'               => 'text',
                'default'                 => '0',
                'eval'                    => ['tl_class'=>'w50', 'rgxp'=>'digit'],
                'sql'                     => "int(10) NOT NULL default '0'"
            ],
        'maxzoomlevel' =>
            [
                'exclude'                 => true,
                'filter'                  => false,
                'inputType'               => 'text',
                'default'                 => '19',
                'eval'                    => ['tl_class'=>'w50', 'rgxp'=>'digit'],
                'sql'                     => "int(10) NOT NULL default '19'"
            ],
        'preview_image' =>
            [
                'exclude'                 => true,
                'inputType'               => 'fileTree',
                'eval'                    => ['fieldType'=>'radio', 'files'=>true, 'extensions'=>'gif,jpg,jpeg,png', 'tl_class'=>'clr', 'mandatory'=>false,'submitOnChange' => true],
                'sql'                     => "binary(16) NULL"
            ],
        'cesium' =>
            [
                'exclude'                 => true,
                'default'                 => '',
                'inputType'               => 'checkbox',
                'eval'                    => [],
                'sql'                     => "char(1) NOT NULL default ''"
            ],
        'protect_baselayer' =>
            [
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
            'eval'                    => ['submitOnChange' => true],
            'sql'                     => "char(1) NOT NULL default ''"
            ],
        'permitted_groups' =>
            [
                'exclude'                 => true,
                'inputType'               => 'checkbox',
                'foreignKey'              => 'tl_member_group.name',
                'eval'                    => ['mandatory'=>false, 'multiple'=>true],
                'sql'                     => "blob NULL"
            ],
        'published' =>
            [
            'exclude'                 => true,
            'default'                 => true,
            'inputType'               => 'checkbox',
            'eval'                    => ['tl_class'=>'clr'],
            'sql'                     => "char(1) NOT NULL default '1'"
            ],
        'consentId' =>
            [
                'exclude'                 => true,
                'filter'                  => false,
                'inputType'               => 'text',
                'sql'                     => "varchar(255) NOT NULL default ''"
            ],
    ]
];


