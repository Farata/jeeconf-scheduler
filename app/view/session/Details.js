Ext.define('JC.view.session.Details', {
    extend: 'Ext.Container',
    xtype: 'sessiondetails',

    config: {
        scrollable: true,
        items: [{
            xtype: 'titlebar',
            title: 'Session',
            docked: 'top',

            items: [{
                action: 'back',
                align: 'left',
                text: 'Back',
                ui: 'back'
            }]
        }, {
            xtype: 'component',
            styleHtmlContent: true,
            tpl: [
                '<div class="session-details">',
                    '<h3 class="title">{name}</h3>',
                    '<h4 class="speaker"><tpl for="speakers">{name}</tpl></h4>',
                    '<hr/>',
                '</div>'
            ]
        }, {
            xtype: 'button',
            ui: 'confirm',
            action: 'addToFavorites',
            text: 'Add to favorites',
            margin: '-0.9em 0.9em 0'
        }, {
            xtype: 'button',
            ui: 'decline',
            hidden: true,
            action: 'removeFromFavorites',
            text: 'Remove from favorites',
            margin: '-0.9em 0.9em 0'
        }, {
            xtype: 'component',
            styleHtmlContent: true,
            tpl: [
                '<div class="session-details">',
                    '<p>{desc}</p>',
                '</div>'
            ]
        }],

        control: {
            'button[action=back]': {
                tap: 'navigateToSessionList'
            },
            'button[action=addToFavorites]': {
                tap: 'showHideAddFavoritesButton'
            },
            'button[action=removeFromFavorites]': {
                tap: 'showHideAddFavoritesButton'
            }
        }
    },

    setTitleBar: function (title) {
        this.child('titlebar').setTitle(title);
    },

    navigateToSessionList: function () {
        Ext.getCmp('mainNav').pop();
    },

    showHideAddFavoritesButton: function () {
        var session                   = this.getRecord(),
            sessionId                 = session.getId(),
            favorites                 = Ext.getStore('Favorites'),
            addToFavoritesButton      = this.down('button[action=addToFavorites]'),
            removeFromFavoritesButton = this.down('button[action=removeFromFavorites]');

        if (favorites.getById(sessionId) !== null) {
            addToFavoritesButton.hide();
            removeFromFavoritesButton.show();
        } else {
            removeFromFavoritesButton.hide();
            addToFavoritesButton.show();
        }
    },

    setRecord: function(record) {
        var result = this.callParent(arguments);
        this.setRecords(this, record);

        if (this.getRecord() !== null) {
            this.showHideAddFavoritesButton();
        }
        return result;
    },

    setRecords: function(component, record) {
        component.getItems().each(function(item) {

            // set record for direct children
            if(typeof item.setRecord === 'function') {
                item.setRecord(record);
            }

            // set record on all subitems
            if(typeof item.getItems === 'function') {
                if(item.getItems().getCount() > 0){
                    this.setRecords(item, record);
                }
            }
        }, this);
    }
});