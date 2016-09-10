<?php
/*
  Created on Sep 3, 2016
  Plugin Name: Scale to Fit
  Description: Plugin for scaling components to fit the container
  Version: 0.1
  Author: Antti Leppä / Metatavu Oy
*/

defined( 'ABSPATH' ) || die( 'No script kiddies please!' );

wp_enqueue_script('jquery');
wp_enqueue_script('scale-to-fi', plugin_dir_url(__FILE__) . 'javascript/scale-to-fit.js');

?>