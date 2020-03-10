const op = require('/MarkLogic/optic'); 

op.fromView('customer360', 'purchases') 
  .select(['company', 'product', 'price', 'quantity'])
  .limit(100)
  .result();
