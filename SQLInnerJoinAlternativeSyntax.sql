SELECT calls.customer, calls.caller, calls.phone, calls.reason, calls.resolved, factsheets.market, factsheets.notes
FROM calls, factsheets
WHERE calls.customer = factsheets.company_name 
