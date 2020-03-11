const op = require('/MarkLogic/optic'); 
const resource = op.prefixer('http://procycling.com/resource/'); 
const onto = op.prefixer('http://procycling.com/ontology/'); 
const foaf = op.prefixer('http://xmlns.com/foaf/0.1/'); 
const companyId = op.col('companyId'); 
const companyName = op.col('companyName'); 
const sum = op.col('sum'); 
const purchases = op.fromView('customer360', 'purchases'); 

op.fromTriples([ 
op.pattern(companyId, onto('boardMember'), resource('Michael_Ross')), 
op.pattern(companyId, foaf('name'), companyName) 
]) 
  .joinInner(purchases, op.on(companyName, purchases.col('company'))) 
  .select(['company', 'row_total']) 
  .groupBy('company', [op.sum(sum, 'row_total')]) 
  .result();
