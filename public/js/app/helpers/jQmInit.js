define(['jquery'], function($) {
    $(document).on("mobileinit",
        function () {
            $.mobile.ajaxEnabled = false;
            $.mobile.linkBindingEnabled = false;
            $.mobile.hashListeningEnabled = false;
            $.mobile.pushStateEnabled = false;
            $.mobile.loader.prototype.options.text = "working 4 u...";
            $.mobile.loader.prototype.options.textVisible = true;

            // Remove page from DOM when it's being replaced
            $(document).on('pagehide', 'div[data-role="page"]', function(event, ui){
                $(event.currentTarget).remove();
            });
        }
    );
});