SELECT purchases.product, SUM(purchases.quantity)
FROM purchases
GROUP BY purchases.product
