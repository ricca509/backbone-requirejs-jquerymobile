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

        setHeaderView: function(view, addBackButton) {
            this.headerView = view;
            
            if (addBackButton) {
                $.mobile.page.prototype.options.addBackBtn = true;
            } else {
                $.mobile.page.prototype.options.addBackBtn = false;
            }
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

            if (this.headerView) {
                this.$('[data-role="header"]').html(new this.headerView().render().$el.children());
            } else {
                this.$('[data-role="header"]').remove();
            }
            if (this.contentView) {
                this.$('[data-role="content"]').html(new this.contentView().render().$el);
            }
            if (this.footerView) {
                this.$('[data-role="footer"]').html(new this.footerView().render().$el.children());
            } else {
                this.$('[data-role="footer"]').remove();
            }

            this.$('[data-role="page"]').on( "pagecreate", $.proxy( this.onPageCreate, this ) );

            return this;
        },

        navigate: function(transition) {
            var page = this.render();

            transition || $.mobile.defaultPageTransition;

            // Add the page to the DOM
            $('body').append(page.$el);

            // Programatically changes to the page
            $.mobile.changePage( page.$el , { reverse: true, changeHash: false, transition: transition } );
        },

        onPageCreate: function() {
            var that = this;
            console.log('Create event ' + that.cid );
        }

    });

    return View;
});