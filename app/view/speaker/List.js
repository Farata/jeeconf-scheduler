Ext.define('JC.view.speaker.List', {
    extend: 'Ext.dataview.List',
    xtype: 'speakerlist',

    config: {
        store: 'Speakers',
        itemTpl: '{firstName} <span class="bold">{lastName}</span>',
        indexBar: true,
        grouped: true,
        scrollable: {
            direction: 'vertical',
            directionLock: true
        }
    }
});