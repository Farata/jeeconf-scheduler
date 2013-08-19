Ext.define('JC.store.Favorites', {
    extend: 'Ext.data.Store',
    requires: [
        'Ext.data.proxy.LocalStorage'
    ],

    config: {
        autoLoad: true,
        model: 'JC.model.Session',
        proxy: {
            type: 'localstorage',
            id: 'jeeconf-favorites'
        },

        grouper: {
            groupFn: function(session) {
                return Ext.Date.format(session.get('start'), 'F d');
            }
        },

        sorters: [{
            property: 'start',
            direction: 'ASC'
        }]
    }
});