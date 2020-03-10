const op = require('/MarkLogic/optic');

op.fromView('customer360', 'calls')
  .where(cts.wordQuery(['puncture', 'chain']))
  .limit(10)
  .result()
