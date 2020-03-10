const op = require('/MarkLogic/optic'); 

op.fromView('customer360', 'purchases') 
  .where(op.eq(op.col('product'), 'SpeedPro Ultimate'))
  .select(['company', 'product', 'price', 'quantity'])
  .orderBy('product') 
  .limit(100)
  .result();
