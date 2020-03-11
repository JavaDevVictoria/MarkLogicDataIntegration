xquery version "1.0-ml"; 
import module namespace op="http://marklogic.com/optic" at "/MarkLogic/optic.xqy"; 
declare default function namespace "http://marklogic.com/optic"; 

op:from-view("customer360", "purchases") 
=> where(eq(col("company"), "Rolling Fast Deliveries")) 
=> select(("order_date", "product", "price", "quantity", as("total", multiply(col("price"), col("quantity"))))) 
=> order-by((desc("order_date"), "product")) 
=> limit(10) 
=> result()
