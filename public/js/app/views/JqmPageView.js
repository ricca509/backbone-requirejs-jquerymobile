define([
    'backbone',
    'underscore',
    'text!templates/jQmPageTemplate.html'
], function(Backbone, _, jQmPageTemplate) {

    var View = Backbone.View.extend({
        initialize: function() {

        },

        events: {
            'pagecreate': 'pageChange'
        },

        setHeaderView: function(view) {
            this.headerView = view;
        },

        setFooterView: function(view) {
            this.footerView = view;
        },

        setContentView: function(view) {
            this.contentView = view;
        },

        render: function() {
            this.$el.html(_.template(jQmPageTemplate));
            this.$el.attr('data-role', 'page');

            this.$('[data-role="header"]').html(new this.headerView().render().$el.children());
            this.$('[data-role="content"]').html(new this.contentView().render().$el);
            this.$('[data-role="footer"]').html(new this.footerView().render().$el.children());

            this.$('[data-role="page"]').on( "pagecreate", $.proxy( this.pageChange, this ) );

            return this;
        },

        navigate: function() {
            var page = this.render();

            var transition = $.mobile.defaultPageTransition;

            // Add the page to the DOM
            $('body').append(page.$el);

            // Programatically changes to the page
            $.mobile.changePage( page.$el , { reverse: false, changeHash: false, transition: transition } );
        },

        pageChange: function() {
            var that = this;
            console.log('change event ' + that.cid );
        }

    });

    return View;
});