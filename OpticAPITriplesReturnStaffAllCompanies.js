const op = require('/MarkLogic/optic'); 

const resource = op.prefixer('http://procycling.com/resource/'); 
const onto = op.prefixer('http://procycling.com/ontology/'); 

const o = op.col('vip'); 
const s = op.col('company'); 

op.fromTriples(op.pattern(s, onto('boardMember'), o)) 
  .union(op.fromTriples(op.pattern(s, onto('founder'), o))) 
  .union(op.fromTriples(op.pattern(s, onto('investor'), o)))
  .whereDistinct()
  .result();
