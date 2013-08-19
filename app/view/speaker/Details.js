Ext.define('JC.view.speaker.Details', {
    extend: 'Ext.Container',
    xtype: 'speakerdetails',

    config: {
        scrollable: true,
        layout: 'vbox',

        items: [{
            xtype: 'titlebar',
            title: 'Speaker',
            docked: 'top',

            items: [{
                action: 'back',
                align: 'left',
                text: 'Back',
                ui: 'back'
            }]
        }, {
            xtype: 'component',
            styleHtmlContent: true,
            tpl: [
                '<div class="session-details">',
                    '<h3 class="title">{fullName}</h3>',
                    '<h4 class="speaker">{company}, {country}</h4>',
                    '<hr/>',
                    '<p>{bio}</p>',
                '</div>'
            ]
        }, {
            xtype: 'sessionlist',
            cls: 'session-list',
            disableSelection: true,
            scrollable: false,
            grouped: false,
            margin: '0 0.9em',
            onItemDisclosure: true,
            itemTpl: '<p class="no-wrapping title disclosure-offset">{name}</p>'
        }],

        control: {
            'button[action=back]': {
                tap: 'navigateToSpeakerList'
            }
        }
    },

    setTitleBar: function (title) {
        this.child('titlebar').setTitle(title);
    },

    navigateToSpeakerList: function () {
        Ext.getCmp('mainNav').pop();
    },

    setSessions: function () {
        var speaker = this.getRecord(),
            speakerId = speaker.getId(),
            sessions = Ext.getStore('Sessions'),
            sessionList = this.down('sessionlist'),
            speakerSessions;

        speakerSessions = sessions.queryBy(function (session) {
            var speakers = session.get('speakers'),
                speakerIds = speakers.map(function (s) { return s.id; });

            if (speakerIds.indexOf(speakerId) !== -1) {
                return true;
            }
        });

        sessionList.setStore(Ext.create('Ext.data.ArrayStore', {
            // store configs
            autoDestroy: true,
            model: 'JC.model.Session',
            data: speakerSessions.getRange()
        }));

        sessionList.setHeight(47 * speakerSessions.getCount());
    },

    setRecord: function(record) {
        var result = this.callParent(arguments);
        this.setRecords(this, record);

        if (this.getRecord() !== null) {
            this.setSessions();
        }
        return result;
    },

    setRecords: function(component, record) {
        component.getItems().each(function(item) {

            // set record on all subitems
            if(typeof item.getItems === 'function') {
                if(item.getItems().getCount() > 0){
                    this.setRecords(item, record);
                }
            }
            // set record for direct children
            else if(typeof item.setRecord === 'function') {
                item.setRecord(record);
            }
        }, this);
    }

});