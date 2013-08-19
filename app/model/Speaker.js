Ext.define('JC.model.Speaker', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            { name: 'id',        type: 'int' },
            { name: 'firstName', type: 'string' },
            { name: 'lastName',  type: 'string' },
            { name: 'company',   type: 'string' },
            { name: 'country',   type: 'string' },
            { name: 'bio',       type: 'string' },
            { name: 'imageUrl',  type: 'string' },

            // Computed
            { name: 'fullName', convert: function (v, record) {
                return Ext.String.format('{0} {1}',
                    record.data.firstName,
                    record.data.lastName);
            }}
        ]
    }
});
