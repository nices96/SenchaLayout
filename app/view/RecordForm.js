/*
 * File: app/view/RecordForm.js
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

Ext.define('MyApp.view.RecordForm', {
    extend: 'Ext.window.Window',
    alias: 'widget.recordForm',

    requires: [
        'Ext.form.Panel',
        'Ext.form.field.TextArea',
        'Ext.form.field.Date',
        'Ext.form.field.Checkbox',
        'Ext.button.Button'
    ],

    height: 253,
    itemId: 'recordForm',
    width: 408,
    layout: 'fit',
    title: 'Add Record',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    itemId: 'form',
                    layout: 'auto',
                    bodyPadding: 10,
                    items: [
                        {
                            xtype: 'textfield',
                            width: 360,
                            fieldLabel: 'Title',
                            name: 'title',
                            validateBlank: true
                        },
                        {
                            xtype: 'textareafield',
                            width: 360,
                            fieldLabel: 'Description',
                            name: 'description'
                        },
                        {
                            xtype: 'datefield',
                            width: 360,
                            fieldLabel: 'Date',
                            name: 'date'
                        },
                        {
                            xtype: 'checkboxfield',
                            width: 360,
                            fieldLabel: 'Is Featured',
                            name: 'isFeatured'
                        },
                        {
                            xtype: 'container',
                            layout: {
                                type: 'hbox',
                                align: 'middle',
                                pack: 'center'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    margins: '',
                                    itemId: 'saveBtn',
                                    margin: '5 5 5 5',
                                    icon: 'resources/images/accept.png',
                                    text: 'Save'
                                },
                                {
                                    xtype: 'button',
                                    margins: '',
                                    itemId: 'cancelBtn',
                                    margin: '5 5 5 5',
                                    icon: 'resources/images/cancel.png',
                                    text: 'Cancel'
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