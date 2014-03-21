/*
 * File: app/view/TabPanel.js
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

Ext.define('MyApp.view.TabPanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.tabPanel',

    requires: [
        'Ext.tab.Tab',
        'Ext.menu.ColorPicker',
        'Ext.menu.DatePicker',
        'Ext.toolbar.Toolbar',
        'Ext.toolbar.TextItem'
    ],

    itemId: 'tabPanel',
    activeTab: 0,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    layout: 'fit',
                    title: 'Tab 1',
                    items: [
                        {
                            xtype: 'panel',
                            itemId: 'tabPanel1',
                            items: [
                                {
                                    xtype: 'colormenu',
                                    floating: false
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    title: 'Tab 2',
                    items: [
                        {
                            xtype: 'panel',
                            itemId: 'tabPanel2'
                        },
                        {
                            xtype: 'datemenu',
                            floating: false
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    title: 'Tab 3',
                    items: [
                        {
                            xtype: 'panel',
                            itemId: 'tabPanel3'
                        }
                    ],
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'top',
                            items: [
                                {
                                    xtype: 'tbtext',
                                    text: 'This is Tab 3'
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});