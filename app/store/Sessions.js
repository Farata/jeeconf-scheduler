Ext.define('JC.store.Sessions', {
    extend: 'Ext.data.Store',

    config: {
        autoLoad: true,
        model: 'JC.model.Session',
        proxy: {
            type: 'ajax',
            url: 'data/sessions.json',
            reader: 'json',
            noCache: false,
            startParam: false,
            pageParam: false,
            limitParam: false
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