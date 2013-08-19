Ext.define('JC.model.Track', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            { name: 'id',   type: 'int' },
            { name: 'name', type: 'string' }
        ]
    }
});