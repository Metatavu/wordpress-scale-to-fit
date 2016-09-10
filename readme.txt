=== Plugin Name ===
Contributors: metatavu
Tags: utilities
Requires at least: 4.6
Tested up to: 4.6
Stable tag: 0.0.1
License: GPLv2 or later.

== Description ==

wordpress-scale-to-fit plugin allows developers to force some elements to fit inside other. This can be useful when developers need to make 
some non-responsive components (e.g. iframes) to scale with the rest of the page.

Key Features:

  * Allows developers to force elements to fit inside others
 
== Installation ==

  * Upload folder into /wp-content/plugins -directory
  * Activate the plugin in 'Plugins' menu

== Configuration ==

Add css class "scale-to-fit" to element you wish to initialize scale-to-fit.

You can use following data -attributes to control scaling:

  * data-element-method: Method to find scaled element. Allowed values: 
    - self - element it self (default)
    - parent - reference element
    - closest - closest ancestor of reference element matching data-element -attribute selector
    - find - closest descendant of reference element matching data-element -attribute selector
  * data-element: CSS Selector for closest and find methods 
  * data-container-method: Method to find container element. Allowed values: 
    - self - reference element
    - parent - parent of reference element (default)
    - closest - closest ancestor of reference element matching data-element -attribute selector
    _ find - closest descendant of reference element matching data-element -attribute selector
  * data-container: CSS Selector for closest and find methods
  
== Changelog ==

= 0.1 =
* Initial version