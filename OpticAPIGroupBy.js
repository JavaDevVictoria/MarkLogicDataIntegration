const op = require('/MarkLogic/optic');

op.fromView('customer360', 'purchases')
  .select(['product', 'price', 'quantity'])
  .groupBy('product')
  .orderBy('product')
  .limit(100)
  .result();
