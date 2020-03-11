const op = require('/MarkLogic/optic'); 

const resource = op.prefixer('http://procycling.com/resource/'); 
const onto = op.prefixer('http://procycling.com/ontology/'); 

const o = op.col('vip'); 
const spouse = op.col('spouse'); 

op.fromTriples(op.pattern(resource('Napa_Biking_Tours'), onto('boardMember'), o)) 
  .union(op.fromTriples(op.pattern(resource('Napa_Biking_Tours'), onto('founder'), o))) 
  .union(op.fromTriples(op.pattern(resource('Napa_Biking_Tours'), onto('investor'), o))) 
  .whereDistinct() 
  .joinLeftOuter(op.fromTriples(op.pattern(o, onto('spouse'), spouse))) 
  .result();
