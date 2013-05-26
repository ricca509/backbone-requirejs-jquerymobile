define(['jquery'], function($) {
    $(document).on("mobileinit",
        function () {
            $.mobile.ajaxEnabled = false;
            $.mobile.linkBindingEnabled = false;
            $.mobile.hashListeningEnabled = false;
            $.mobile.pushStateEnabled = false;

            // Remove page from DOM when it's being replaced
            $(document).on('pagehide', 'div[data-role="page"]', function(event, ui){
                console.log('remove ' + event.currentTarget);
                $(event.currentTarget).remove();
            });
        }
    );
});