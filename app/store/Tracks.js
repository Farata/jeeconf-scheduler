Ext.define('JC.store.Tracks', {
    extend: 'Ext.data.Store',

    config: {
        autoLoad: true,
        model: 'JC.model.Track',
        proxy: {
            type      : 'ajax',
            url       : 'data/tracks.json',
            reader    : 'json',
            noCache   : false,
            startParam: false,
            pageParam : false,
            limitParam: false
        }
    }
});