'use strict';
const es = require('/MarkLogic/entity-services/entity-services.xqy');

const ES_DIR = '/home/cent/Desktop/mls-data-integration/es/';
const desc = cts.doc('/es/models/procycling-0.0.1.json');

xdmp.save(ES_DIR + 'procycling-0.0.1-conv.xqy', es.instanceConverterGenerate(desc));
