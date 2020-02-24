xquery version "1.0-ml"; 

import module namespace json = "http://marklogic.com/xdmp/json" at "/MarkLogic/json/json.xqy"; 

json:transform-from-json(fn:doc("doc-01.json"), json:config("custom"))
