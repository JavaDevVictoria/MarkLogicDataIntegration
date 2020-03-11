const op = require('/MarkLogic/optic'); 

const resource = op.prefixer('http://procycling.com/resource/'); 
const onto = op.prefixer('http://procycling.com/ontology/'); 

const s = op.col('company'); 

op.fromTriples([ op.pattern(s, onto('boardMember'), resource('Michael_Ross')) ]) 
  .result();
