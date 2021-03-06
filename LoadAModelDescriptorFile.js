'use strict';
declareUpdate();

const es = require('/MarkLogic/entity-services/entity-services.xqy');

const ES_DIR = '/home/cent/Desktop/mls-data-integration/es/'; 

const desc = fn.head(
xdmp.documentGet(ES_DIR + 'procycling-model-descriptor.json'));

xdmp.documentInsert(
'/es/models/procycling-0.0.1.json', es.modelValidate(desc),
{collections: ['http://marklogic.com/entity-services/models']}
);

