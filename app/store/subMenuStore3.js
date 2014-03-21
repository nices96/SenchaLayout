/*
 * File: app/store/subMenuStore3.js
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

Ext.define('MyApp.store.subMenuStore3', {
    extend: 'Ext.data.TreeStore',

    requires: [
        'Ext.data.Field'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'subMenuStore3',
            root: {
                expanded: true,
                text: 'Sub Menu 3',
                children: [
                    {
                        text: 'Sub Menu 3-1',
                        expanded: true,
                        children: [
                            {
                                text: 'Sub Menu 3-1-1',
                                leaf: true
                            },
                            {
                                text: 'Sub Menu 3-1-2',
                                leaf: true
                            },
                            {
                                text: 'Sub Menu 3-1-3',
                                leaf: true
                            }
                        ]
                    },
                    {
                        text: 'Sub Menu 3-2',
                        expanded: true,
                        children: [
                            {
                                text: 'Sub Menu 3-2-1',
                                leaf: true
                            },
                            {
                                text: 'Sub Menu 3-2-2',
                                leaf: true
                            },
                            {
                                text: 'Sub Menu 3-2-3',
                                leaf: true
                            }
                        ]
                    },
                    {
                        text: 'Sub Menu 3-3',
                        expanded: true,
                        children: [
                            {
                                text: 'Sub Menu 3-3-1',
                                leaf: true
                            },
                            {
                                text: 'Sub Menu 3-3-2',
                                leaf: true
                            },
                            {
                                text: 'Sub Menu 3-3-3',
                                leaf: true
                            }
                        ]
                    }
                ]
            },
            fields: [
                {
                    name: 'text'
                }
            ]
        }, cfg)]);
    }
});