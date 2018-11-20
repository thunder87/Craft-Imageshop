/**
 * Imageshop plugin for Craft CMS
 *
 * ImageshopImage Field JS
 *
 * @author    Vangen & Plotz AS
 * @copyright Copyright (c) 2018 Vangen & Plotz AS
 * @link      https://vangenplotz.no/
 * @package   Imageshop
 * @since     0.0.1ImageshopImageshopImage
 */

 ;(function ( $, window, document, undefined ) {

    var pluginName = "ImageshopImageshopImage",
        defaults = {
        };

    // Plugin constructor
    function Plugin( element, options ) {
        this.element = element;

        this.options = $.extend( {}, defaults, options) ;

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    Plugin.prototype = {

        init: function(id) {
            var _this = this;
            var documentList = $("#" + _this.options.prefix + "modal-results-" + _this.options.id);

            $("#" + _this.options.prefix + "button-" + _this.options.id ).click(function() {
                event.preventDefault();
                $modal = new Garnish.Modal($("#" + _this.options.prefix + "modal-" + _this.options.id)); //create a new modal
                //$modal.show(); //shows the modal

                $.ajax('/actions/imageshop/search')
                    .done(function(result) {
                        var resultItems = result.SearchResponse.SearchResult.DocumentList.V4Document;
                        console.log(resultItems);
                        documentList.empty();

                        $.each(resultItems, function(index, value) {
                            documentList.append("<li><div class=\"element large hasthumb\"><div class=\"elementthumb\"><img src=\"" + value.ListThumbUrl + "\"></div><div class=\"label\">" + value.Name + "</div></div></li>")
                        })
                    })

             });
        }
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName,
                new Plugin( this, options ));
            }
        });
    };

})( jQuery, window, document );