<?php
/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package    con4gis
 * @version    6
 * @author     con4gis contributors (see "authors.txt")
 * @license    LGPL-3.0-or-later
 * @copyright  Küstenschmiede GmbH Software & Design
 * @link       https://www.con4gis.org
 */
namespace con4gis\MapsBundle\Resources\contao\classes;

/**
 * Class Utils
 * @package con4gis\MapsBundle\Resources\contao\classes
 */
class Utils
{
    private static $allLocstyles = false;

    /**
     * Validate a longitude coordinate
     * @param  [type] $value [description]
     * @return [type]        [description]
     */
    public static function validateLon($value)
    {
        if (strpos($value, '{{') !== -1) {
            return true;
        }
        if (self::validateGeo($value)) {
            return (($value >= -180.0) && ($value <= 180.0));
        }
        return false;
    }

    /**
     * Validate a latitude coordinate
     * @param  [type] $value [description]
     * @return [type]        [description]
     */
    public static function validateLat($value)
    {
        if (strpos($value, '{{') !== -1) {
          return true;
        }
        if (self::validateGeo($value)) {
            return (($value >= -90.0) && ($value <= 90.0));
        }
        return false;
    }

    /**
     * Validate a Geo Coordinate
     * @param  [type] $value [description]
     * @return [type]        [description]
     */
    public static function validateGeo($value)
    {
        if (!isset($value)) {
            return false;
        }
        $value = floatval($value);
        if ($value == 0) {
            return false;
        }
        return true;
    }
    
    /**
     * Custom implementation of the replaceInsertTags function for the iflng and ifnlng tags to workaround
     * the issue that the global page object is null in the baselayer request.
     * @param $toReplace
     * @return string
     */
    public static function replaceInsertTags(string $toReplace)
    {
        $language = $GLOBALS['TL_LANGUAGE'];
        // convert string into a more parsable form
        $toReplace = str_replace("{{", "/", $toReplace);
        $toReplace = str_replace("}}", "/", $toReplace);
        $toReplace = str_replace("//", "/", $toReplace);
        $arrReplace = explode("/", $toReplace);
        $result = "";
        foreach ($arrReplace as $key => $value) {
            if (strlen($value) > 6) {
                // check if the value contains a language tag
                if (substr($value, 0, 6) === "ifnlng") {
                    $arrLang = explode("::", $value);
                    if ($arrLang[1] !== $language) {
                        // language does not match, so get the value
                        $result = $arrReplace[$key + 1];
                    }
                } else if (substr($value, 0, 6) === "iflng:") {
                    $arrLang = explode("::", $value);
                    if ($arrLang[1] === $language) {
                        // language does match, so get the value
                        $result = $arrReplace[$key + 1];
                    }
                }
            }
        }
        if ($result === "") {
            $result = $toReplace;
        }
        return $result;
    }
    
    /**
     * Returns an array of location types that are supported by maps per default.
     * @return array
     */
    public static function getLocationTypes()
    {
        return ['none','single','table','gpx','kml','geojson','osm','folder','overpass','link', 'startab'];
    }
}
