const op = require('/MarkLogic/optic'); 
const quantity_sum = op.col('quantity_sum'); 

op.fromView('customer360', 'purchases') 
  .select(['product', 'price', 'quantity'])
  .groupBy('product', ['price', op.sum(quantity_sum, 'quantity')]) 
  .orderBy('product') 
  .limit(100)
  .result();
