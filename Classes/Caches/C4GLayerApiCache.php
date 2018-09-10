<?php
/**
 * Created by PhpStorm.
 * User: cro
 * Date: 08.09.18
 * Time: 15:02
 */

namespace con4gis\MapsBundle\Classes\Caches;


use con4gis\CoreBundle\Resources\contao\classes\C4GApiCache;
use Contao\System;
use Symfony\Component\Cache\Adapter\FilesystemAdapter;

class C4GLayerApiCache extends C4GApiCache
{
    /**
     * @var C4GLayerApiCache
     */
    protected static $instance = null;

    public static function getInstance() {
        if (!static::$instance) {
            static::$instance = new self();
        }
        return static::$instance;
    }

    /**
     * C4GLayerApiCache constructor.
     */
    protected function __construct()
    {
        $container = System::getContainer();
        $this->cacheInstance = new FilesystemAdapter(
            $namespace = 'con4gis_layerService',
            $defaultLifetime = 0,
            $directory = $container->getParameter('kernel.cache_dir')
        );
    }
}