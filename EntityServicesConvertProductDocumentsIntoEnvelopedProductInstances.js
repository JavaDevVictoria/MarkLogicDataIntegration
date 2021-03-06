'use strict';
declareUpdate();

const es = require('/MarkLogic/entity-services/entity-services.xqy');
const procycling = require('/es/procycling-0.0.1-conv.xqy');

for (const source of xdmp.directory('/product/')) {
  let instance = procycling.extractInstanceProduct(source);
  let uri = '/es/product/' + instance.id + '.xml';
  xdmp.documentInsert(
    uri, procycling.instanceToEnvelope(instance),
    {collections: ['es-product']}
  );
}
