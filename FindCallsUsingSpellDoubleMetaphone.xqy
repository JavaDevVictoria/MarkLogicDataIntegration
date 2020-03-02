let $dm := spell:double-metaphone("Dee Monolakis") 
for $caller in /caller[fn:deep-equal(spell:double-metaphone(.), $dm)] 
return fn:doc(fn:base-uri($caller))
