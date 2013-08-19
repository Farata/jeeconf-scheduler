Ext.define('JC.view.session.List', {
    extend: 'Ext.dataview.List',
    xtype: 'sessionlist',

    config: {
        grouped: true,
        scrollable: {
            direction: 'vertical',
            directionLock: true
        },
        itemTpl: [
            '<p class="no-wrapping title">{name}</p>',
            '<p class="speaker-hint">',
                '{[Ext.Date.format(values.start, "G:i")]} - {[Ext.Date.format(values.end, "G:i")]}',
                '<tpl for="speakers"> | {name}</tpl>',
            '</p>'
        ]
    }

});