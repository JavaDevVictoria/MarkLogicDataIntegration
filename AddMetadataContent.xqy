let $doc := fn:doc("/marketing/contact-cs003.xml")

return 
(
xdmp:node-insert-child($doc/envelope/metadata, <leadSource>2017 Los Angeles Cycle Show</leadSource>), 
xdmp:node-insert-child($doc/envelope/metadata, <leadDate>2017-04-15</leadDate>), 
xdmp:node-insert-child($doc/envelope/metadata, <collectedBy>Raffle bowl</collectedBy> )
) 
