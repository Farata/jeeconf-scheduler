Ext.define('JC.view.track.List', {
    extend: 'Ext.carousel.Carousel',
    xtype: 'tracklist',
    requires: [
        'JC.view.session.List',
        'JC.store.Sessions'
    ],

    initialize: function () {
        this.callParent();
        Ext.getStore('Tracks').on('load', this.addTracks, this);
    },

    addTracks: function (tracks) {
        var me = this;

        tracks.each(function (track) {

            // Create dedicated Sessions store for each track
            // and filter it to display only appropriate sessions.
            var store = Ext.create('JC.store.Sessions');
            store.filterBy(function (session) {
                return Ext.Array.contains(session.get('tracks'), track.get('id'));
            });

            me.add(Ext.create('Ext.Container', {
                layout: 'vbox',

                items: [{
                    xtype: 'titlebar',
                    docked: 'top',
                    title: track.get('name')
                }, {
                    xtype: 'sessionlist',
                    cls: 'session-list',
                    store: store,
                    flex: 1
                }]
            }));

        });
    }
});