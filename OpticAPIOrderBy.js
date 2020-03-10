const op = require('/MarkLogic/optic'); 

op.fromView('customer360', 'purchases') 
  .select(['company', 'product', 'price', 'quantity'])
  .orderBy('product') 
  .limit(100)
  .result();
