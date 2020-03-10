const op = require('/MarkLogic/optic'); 

op.fromView('customer360', 'purchases')
  .where(cts.wordQuery('special'))
  .joinDoc('doc', op.col('uri'))
  .select(['order_date', 'order_id', 'company', 'product', 'quantity', 'uri', 'doc'])
  .result()
