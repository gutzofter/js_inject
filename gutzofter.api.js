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
            var url = "http://gutzofter.herobo.com/js_inject/jsonp.php";
            $.getJSON(url, function(response) {
                if (response.success) {
                    $('#ext_container').html(response.html);
                }
            });

            return this;
        }
    };

    window.inject = inject;
})(window);
