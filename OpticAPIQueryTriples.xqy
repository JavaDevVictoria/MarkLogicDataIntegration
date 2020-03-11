xquery version "1.0-ml"; 
import module namespace op="http://marklogic.com/optic" at "/MarkLogic/optic.xqy"; 
declare default function namespace "http://marklogic.com/optic"; 

let $resource := op:prefixer("http://procycling.com/resource/") 
let $onto := op:prefixer("http://procycling.com/ontology/") 

return 
op:from-triples(( pattern(col("company"), $onto("boardMember"), $resource("Michael_Ross")) )) 
=> result()
