Ext.define('JC.store.Speakers', {
    extend: 'Ext.data.Store',

    config: {
        autoLoad: true,
        model: 'JC.model.Speaker',
        proxy: {
            type      : 'ajax',
            url       : 'data/speakers.json',
            reader    : 'json',
            noCache   : false,
            startParam: false,
            pageParam : false,
            limitParam: false
        },

        grouper: {
            groupFn: function(speaker) {
                return speaker.get('lastName')[0];
            }
        }
    }
});
