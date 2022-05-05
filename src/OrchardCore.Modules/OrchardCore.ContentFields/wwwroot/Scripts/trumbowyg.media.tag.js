/*
** NOTE: This file is generated by Gulp and should not be edited directly!
** Any changes made directly to this file will be overwritten next time its asset group is processed by Gulp.
*/

(function ($) {
  'use strict';

  $.extend(true, $.trumbowyg, {
    langs: {
      en: {
        insertImage: 'Insert Media'
      }
    },
    plugins: {
      insertImage: {
        init: function init(trumbowyg) {
          var btnDef = {
            fn: function fn() {
              trumbowyg.saveRange();
              $("#mediaApp").detach().appendTo('#mediaModalHtmlField .modal-body');
              $("#mediaApp").show();
              mediaApp.selectedMedias = [];
              var modal = new bootstrap.Modal($("#mediaModalHtmlField"));
              modal.show(); //disable an reset on click event over the button to avoid issue if press button multiple times or have multiple editor

              $('#mediaHtmlFieldSelectButton').off('click');
              $('#mediaHtmlFieldSelectButton').on('click', function (v) {
                trumbowyg.restoreRange();
                trumbowyg.range.deleteContents();

                for (i = 0; i < mediaApp.selectedMedias.length; i++) {
                  var mediaBodyContent = ' [image]' + mediaApp.selectedMedias[i].mediaPath + '[/image]';
                  var node = document.createTextNode(mediaBodyContent);
                  trumbowyg.range.insertNode(node);
                }

                trumbowyg.syncCode();
                trumbowyg.$c.trigger('tbwchange'); //avoid tag to be selected after add it

                trumbowyg.$c.focus();
                modal.hide();
                return true;
              });
            }
          };
          trumbowyg.addBtnDef('insertImage', btnDef);
        }
      }
    }
  });
})(jQuery);