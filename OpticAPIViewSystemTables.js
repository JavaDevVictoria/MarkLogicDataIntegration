const op = require('/MarkLogic/optic'); 

op.fromView('sys', 'sys_tables') 
  .result();
