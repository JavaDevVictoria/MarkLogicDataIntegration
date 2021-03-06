'use strict'
const op = require('/MarkLogic/optic.sjs');

const exported =
op.fromView('customer360', 'purchases')
  .select(['company','price','quantity', op.as('item_total', op.multiply(op.col('price'), op.col('quantity')))])
  .groupBy('company', op.sum('company_total', 'item_total'))
  .orderBy(op.desc('company_total'))
  .limit(10)
  .export();

const action =
'show export result only';
//    'show imported result';

switch(action) {
   case 'show export result only':
     exported;
     break;
   case 'show imported result':
     op.import(exported).result();
     break;
}

