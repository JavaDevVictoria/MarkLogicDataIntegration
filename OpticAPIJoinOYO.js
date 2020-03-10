const op = require('/MarkLogic/optic'); 

const factsheetsView = op.fromView('customer360', 'factsheets'); 
const callsView = op.fromView('customer360', 'calls'); 

factsheetsView 
.joinInner(callsView, op.on(factsheetsView.col('company_name'), callsView.col('customer'))) 
.select([callsView.col('customer'), callsView.col('caller'), callsView.col('phone'), callsView.col('reason'), callsView.col('resolved'), factsheetsView.col('market'), factsheetsView.col('notes')]) 
.orderBy([callsView.col('customer')])
.limit(100)
.result();

