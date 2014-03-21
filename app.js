/*
 * File: app.js
 *
 * This file was generated by Sencha Architect version 3.0.3.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

// @require @packageOverrides
Ext.Loader.setConfig({
    enabled: true
});


Ext.application({

    requires: [
        'Ext.layout.container.Border',
        'Ext.layout.container.Card',
        'Ext.layout.container.Accordion',
        'Ext.window.MessageBox'
    ],
    models: [
        'SampleData',
        'CompanyData'
    ],
    stores: [
        'menuStore1',
        'subMenuStore1',
        'subMenuStore2',
        'subMenuStore3',
        'CompanyStore',
        'Radar'
    ],
    views: [
        'LayoutSample',
        'DetailPanel',
        'TabPanel',
        'ListPanel',
        'RecordForm'
    ],
    controllers: [
        'menuController',
        'recordController',
        'chartController'
    ],
    name: 'MyApp',

    launch: function() {
        Ext.create('MyApp.view.LayoutSample');
    }

});
