'use strict';
const es = require('/MarkLogic/entity-services/entity-services.xqy');

const template = es.extractionTemplateGenerate(cts.doc('/es/models/procycling-0.0.1.json'));
xdmp.save('/home/cent/Desktop/mls-data-integration/es/' + 'procycling-0.0.1-tde.tdex', template);
