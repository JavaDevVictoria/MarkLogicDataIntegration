xquery version "1.0-ml";

import module namespace json = "http://marklogic.com/xdmp/json" at "/MarkLogic/json/json.xqy";

let $xml := fn:doc("/accounting/order-10991.xml")

let $custom :=
let $config := json:config("custom")
let $_ := map:put($config, "whitespace", "ignore")
return $config

return json:transform-to-json($xml, $custom)
