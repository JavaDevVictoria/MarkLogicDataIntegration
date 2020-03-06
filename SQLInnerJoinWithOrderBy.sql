SELECT factsheets.company_name, factsheets.employees, factsheets.yearly_revenue, factsheets.market, factsheets.notes, purchases.order_date, purchases.product, purchases.price, purchases.quantity
FROM factsheets
INNER JOIN purchases
ON purchases.company = factsheets.company_name
ORDER BY purchases.company
