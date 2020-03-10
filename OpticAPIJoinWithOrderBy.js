const op = require('/MarkLogic/optic'); 

const factsheetsView = op.fromView('customer360', 'factsheets'); 
const contactsView = op.fromView('customer360', 'marketing_contacts'); 

factsheetsView 
.joinInner(contactsView, op.on(factsheetsView.col('company_name'), contactsView.col('company'))) 
.select([factsheetsView.col('company_name'), factsheetsView.col('market'), factsheetsView.col('notes'), contactsView.col('first_name'), contactsView.col('last_name'), contactsView.col('email'), contactsView.col('phone_work'), contactsView.col('phone_mobile')]) 
.orderBy(factsheetsView.col('company_name'))
.limit(100)
.result();
