const op = require('/MarkLogic/optic'); 

const resource = op.prefixer('http://procycling.com/resource/'); 
const onto = op.prefixer('http://procycling.com/ontology/'); 

const o = op.col('board_member'); 

op.fromTriples([ 
op.pattern(resource('Napa_Biking_Tours'), onto('boardMember'), o)
]) 
  .result(); 
