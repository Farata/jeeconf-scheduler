Ext.define('JC.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            mainNavView: 'navigationview',
            sessionList: 'sessionlist',
            speakerList: 'speakerlist',
            favoritesTab: 'tab[iconCls=favorites]',
            addToFavorites: 'button[action=addToFavorites]',
            removeFromFavorites: 'button[action=removeFromFavorites]',

            sessionDetails: {
                selector: 'sessiondetails',
                autoCreate: true,

                xtype: 'sessiondetails'
            },

            speakerDetails: {
                selector: 'speakerdetails',
                autoCreate: true,

                xtype: 'speakerdetails'
            }
        },

        control: {
            sessionList: {
                itemtap: 'navigateToSessionDetails'
            },
            speakerList: {
                itemtap: 'navigateToSpeakerDetails'
            },
            addToFavorites: {
                tap: 'addToFavorites'
            },
            removeFromFavorites: {
                tap: 'removeFromFavorites'
            }
        }
    },

    navigateToSessionDetails: function (list, index, target, session) {
        var mainNav = this.getMainNavView(),
            sessionDetails = this.getSessionDetails();

        sessionDetails.setRecord(session);
        sessionDetails.setTitleBar(session.get('name'));

        mainNav.push(sessionDetails);
    },

    navigateToSpeakerDetails: function (list, index, target, speaker) {
        var mainNav = this.getMainNavView(),
            speakerDetails = this.getSpeakerDetails();

        speakerDetails.setRecord(speaker);
        speakerDetails.setTitleBar(speaker.get('fullName'));

        mainNav.push(speakerDetails);
    },

    addToFavorites: function (button) {
        var favorites = Ext.getStore('Favorites'),
            session = button.getRecord(),
            tab = this.getFavoritesTab();

        if (!favorites.getById(session.getId())) {
            session.setDirty();
            favorites.add(session);
            favorites.sync();
            tab.setBadgeText(favorites.getCount());
        }
    },

    removeFromFavorites: function (button) {
        var favorites = Ext.getStore('Favorites'),
            session = button.getRecord(),
            tab = this.getFavoritesTab();

        if (favorites.getById(session.getId())) {
            session.setDirty();
            favorites.remove(session);
            favorites.sync();
            tab.setBadgeText(favorites.getCount());
        }
    }

});