const op = require('/MarkLogic/optic'); 

const resource = op.prefixer('http://procycling.com/resource/'); 
const onto = op.prefixer('http://procycling.com/ontology/'); 

const o = op.col('vip'); 

op.fromTriples(op.pattern(resource('Napa_Biking_Tours'), onto('boardMember'), o)) 
  .union(op.fromTriples(op.pattern(resource('Napa_Biking_Tours'), onto('founder'), o))) 
  .whereDistinct()
  .result();
