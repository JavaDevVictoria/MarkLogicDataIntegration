'use strict';
declareUpdate();

const ES_DIR = '/home/cent/Desktop/mls-data-integration/es/';

xdmp.documentLoad(
  ES_DIR + 'procycling-0.0.1-conv.xqy',
  {uri: '/es/procycling-0.0.1-conv.xqy'}
); 
