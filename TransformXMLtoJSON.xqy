xquery version "1.0-ml"; 

import module namespace json = "http://marklogic.com/xdmp/json" at "/MarkLogic/json/json.xqy"; 

json:transform-to-json(fn:doc("doc-01.xml"), json:config("custom"))
