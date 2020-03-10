const op = require('/MarkLogic/optic'); 

op.fromView('customer360', 'purchases') 
  .limit(100)
  .result();
