for $c in /envelope/canonical[company = "Campus Bikes"]
return concat($c/firstName/text(), " ", $c/lastName/text())
