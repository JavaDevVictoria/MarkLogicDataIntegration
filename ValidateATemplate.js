'use strict';
const purchasesTemplate = xdmp.toJSON(
{
  'template':{
    'context':'/order/items/item',
    'rows':[
    {
      'schemaName':'customer360',
      'viewName':'purchases',
      'columns':[
       {
        'name':'product',
        'scalarType':'string',
        'val':'product', 
        'invalidValues':'ignore'
       },
       {
        'name':'price',
        'scalarType':'decimal',
        'val':'price', 
        'invalidValues':'ignore'
       },
       {
        'name':'quantity',
        'scalarType':'integer',
        'val':'quantity', 
        'invalidValues':'ignore'
       }
      ]
    }]
  }
}
);

tde.validate([purchasesTemplate]); 
