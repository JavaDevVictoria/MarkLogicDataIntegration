for $doc in /contact[co = "Campus Bikes"]
return concat($doc/name/first/text(), " ", $doc/name/last/text())
