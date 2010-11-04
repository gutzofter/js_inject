/**
 * Created by JetBrains PhpStorm.
 * User: jgutierrez
 * Date: 11/4/10
 * Time: 11:02 AM
 * To change this template use File | Settings | File Templates.
 */
jQuery(document).ready(function() {
    var myInject = inject();
});

(function(window) {
    var inject = function() {
        return new inject.fn.Init();
    };

    inject.fn = inject.prototype = {
        Init: function() {
            $('#ext_container').html('hello this text is injected');
            return this;
        }
    };

    window.inject = inject;
})(window);
