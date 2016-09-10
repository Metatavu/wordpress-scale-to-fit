(function() {
  'use strict';
  
  var watching = [];
  
  function watch(element, options) {
    watching.push({
      element: element,
      options: options
    });
    
    scaleToFit(element, options);
  };
  
  function refreshAll() {
    for (var i = 0, l = watching.length; i < l; i++) {
      scaleToFit(watching[i].element, watching[i].options);
    }
  }
  
  function findElement(element, options) {
    var $element = jQuery(element);
    
    switch (options.method) {
      case 'parent':
        return $element.parent();
      case 'find':
        if (options.selector) {
          return $element.find(options.selector);
        }
      break;
      case 'closest':
        if (options.selector) {
          return $element.closest(options.selector);
        }
      break;
      default:
      break;
    }
    
    return $element;
  }
  
  function scaleToFit(base, options) {
    var element = findElement(base, options.element);
    var container = findElement(base, options.container);
    
    if (element && container) {
      var originalHeight = element.attr('data-original-height');
      if (!originalHeight) {
        originalHeight =  element.height();
        element.attr('data-original-height', originalHeight);
      }
      var elementWidth = element.css('transform', 'scale(1)').width();
      var containerWidth = container.width();
      
      var scale = containerWidth / elementWidth;
      if (scale) {
        element.css({
          'transform-origin': '0 0',
          'transform': 'scale(' + scale + ')',
          'height': originalHeight * scale
        });
      }
    }
  }
  
  jQuery(window).on("resize", function () {
    refreshAll();
  });
  
  jQuery(window).on("load", function () {
    refreshAll();
  });

  jQuery(document).ready(function () {
    
    jQuery('.scale-to-fit').each(function (index, element) {
      watch(element, {
        element: {
          'method': jQuery(element).attr('data-element-method')||'self',
          'selector': jQuery(element).attr('data-element')
        },
        container: {
          'method': jQuery(element).attr('data-container-method')||'parent',
          'selector': jQuery(element).attr('data-container')
        }
      });
      
    });
    
  });
  
}).call(this);