Ext.define('JC.model.Session', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            { name: 'id',        type: 'int' },
            { name: 'name',      type: 'string' },
            { name: 'desc',      type: 'string', mapping: 'description' },
            { name: 'start',     type: 'date',   mapping: 'startDate', dateFormat: 'c' },
            { name: 'end',       type: 'date',   mapping: 'endDate', dateFormat: 'c' },
            { name: 'speakers' },
            { name: 'tracks' }
        ]
    }
});