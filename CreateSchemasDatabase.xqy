(: forest :)
xquery version "1.0-ml";
import module namespace admin = "http://marklogic.com/xdmp/admin" at "/MarkLogic/admin.xqy";
let $config := admin:get-configuration()
let $config := admin:forest-create(
$config,
"customer360-schemas-1",
xdmp:host(),
())
return admin:save-configuration($config);

(: database :)
xquery version "1.0-ml";
import module namespace admin = "http://marklogic.com/xdmp/admin" at "/MarkLogic/admin.xqy";
let $config := admin:get-configuration()
let $config := admin:database-create(
$config,
"customer360-schemas",
xdmp:database("Security"),
xdmp:database("Schemas"))
return admin:save-configuration($config);

(: attach forest to database :)
xquery version "1.0-ml";
import module namespace admin = "http://marklogic.com/xdmp/admin" at "/MarkLogic/admin.xqy";
let $config := admin:get-configuration()
let $config := admin:database-attach-forest(
$config,
xdmp:database("customer360-schemas"),
xdmp:forest("customer360-schemas-1"))
return admin:save-configuration($config)
