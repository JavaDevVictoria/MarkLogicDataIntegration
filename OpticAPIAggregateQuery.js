const op = require('/MarkLogic/optic.sjs'); 
const quantity_sum = op.col('quantity_sum'); 

op.fromView('customer360', 'purchases') 
  .groupBy('product', ['price', op.sum(quantity_sum, 'quantity')])
  .select(['product', 'price', 'quantity_sum', op.as('total',
op.multiply(op.col('price'), op.col('quantity_sum')))])
  .orderBy(op.desc('total')) 
  .limit(100)
  .result();
