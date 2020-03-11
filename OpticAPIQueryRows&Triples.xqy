xquery version "1.0-ml"; 
import module namespace op="http://marklogic.com/optic" at "/MarkLogic/optic.xqy"; 
declare default function namespace "http://marklogic.com/optic"; 

let $resource := op:prefixer("http://procycling.com/resource/") 
let $onto := op:prefixer("http://procycling.com/ontology/") 
let $foaf := op:prefixer("http://xmlns.com/foaf/0.1/") 

let $purchases := op:from-view("customer360", "purchases") 
let $companyName := col("companyName") 

return op:from-triples((
  pattern(col("companyId"), $onto("boardMember"), $resource("Michael_Ross")), 
  pattern(col("companyId"), $foaf("name"), $companyName)
)) 
=> join-inner($purchases, on($companyName, view-col("purchases", "company"))) 
=> select((view-col("purchases", "company"), view-col("purchases", "row_total"))) 
=> group-by(view-col("purchases", "company"), (sum("sum", view-col("purchases", "row_total")))) 
=> result() 
