Ext.define('JC.view.Main', {
    extend: 'Ext.NavigationView',
    xtype: 'main',
    requires: [
        'Ext.List',
        'Ext.TabPanel',
        'Ext.TitleBar',
        'JC.view.session.Details',
        'JC.view.speaker.Details'
    ],

    config: {
        id: 'mainNav',
        navigationBar: false,

        items: [{
            xtype: 'tabpanel',
            tabBarPosition: 'bottom',
            items: [{
                title: 'Schedule',
                iconCls: 'time',
                layout: 'fit',

                items: [{
                    xtype: 'tracklist'
                }]
            }, {
                title: 'Speakers',
                iconCls: 'team',
                layout: 'vbox',

                items: [{
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Speakers'
                }, {
                    xtype: 'speakerlist',
                    flex: 1
                }]
            }, {
                title: 'Favorites',
                iconCls: 'favorites',
                layout: 'vbox',

                items: [{
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Favorites'
                }, {
                    xtype: 'sessionlist',
                    store: 'Favorites',
                    flex: 1
                }]
            }, {
                title: 'About',
                iconCls: 'info',
                layout: 'vbox',

                items: [{
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'About'
                }, {
                    xtype: 'about',
                    flex: 1
                }]
            }]
        }]
    }
});
