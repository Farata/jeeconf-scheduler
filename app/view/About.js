Ext.define('JC.view.About', {
    extend: 'Ext.Container',
    xtype: 'about',


    config: {
        scrollable: true,
        styleHtmlContent: true,

        html:
            '<div class="about">' +
                '<h3>JEEConf Scheduler<h3>' +
                '<h4 class="authors">Authors:</h4>' +
                '<p class="author">Anton Moiseev (<a href="http://faratasystems.com/" target="_blank">Farata Systems</a>)</p>' +
                '<p class="author">Michael Musatov</p>' +
                '<p class="description">This application was developed as a demo project for <a href="http://jeeconf.com/program/extjs/" target="_blank">Ext JS Training class</a>.</p>' +
                '<p class="description">Farata Systems: <a href="http://faratasystems.com/" target="_blank">http://faratasystems.com</a></p>' +
            '</div>'
    }
});