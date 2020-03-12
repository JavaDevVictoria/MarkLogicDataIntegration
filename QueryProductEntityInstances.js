const results = cts.search(cts.andQuery((
  cts.collectionQuery('es-product'),
  cts.elementQuery(
    fn.QName('http://marklogic.com/entity-services', 'instance'),
    cts.elementValueQuery(xs.QName('gender'), 'mens') )
)));

const names = [];
for (const doc of results) {
  names.push(doc.xpath('//Product/name/fn:data()'));
}
names
