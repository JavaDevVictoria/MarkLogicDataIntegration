let $doc := fn:doc("/marketing/contact-cs003.xml")
let $company := $doc/envelope/source/contact/company/text() 
let $first-name := $doc/envelope/source/contact/first-name/text()
let $last-name := $doc/envelope/source/contact/last-name/text()

return 
(
xdmp:node-insert-child($doc/envelope/canonical, <company>{$company}</company>), 
xdmp:node-insert-child($doc/envelope/canonical, <firstName>{$first-name}</firstName>), 
xdmp:node-insert-child($doc/envelope/canonical, <lastName>{$last-name}</lastName>)
) 
