
let $purchases-template :=
<template xmlns="http://marklogic.com/xdmp/tde">   
  <context>/order/items/item</context>
  <rows>
    <row>
      <schema-name>customer360</schema-name>
      <view-name>purchases</view-name>
      <columns>
        <column>
          <name>product</name>
          <scalar-type>string</scalar-type>
          <val>product</val>
          <invalid-values>ignore</invalid-values>
        </column>
        <column>
          <name>price</name>
          <scalar-type>decimal</scalar-type>
          <val>price</val>
          <invalid-values>ignore</invalid-values>
        </column>
        <column>
          <name>quantity</name>
          <scalar-type>integer</scalar-type>
          <val>quantity</val>
          <invalid-values>ignore</invalid-values>
        </column>
        <column>
          <name>row_total</name>
          <scalar-type>decimal</scalar-type>
          <val>price * quantity</val>
          <invalid-values>ignore</invalid-values>
        </column>
        <column>
          <name>notes</name>
          <scalar-type>string</scalar-type>
          <val>../../notes</val>
          <nullable>true</nullable> 
        </column>
      </columns>
    </row>
  </rows>
</template>

return tde:node-data-extract(fn:doc("/accounting/order-14502.xml"), $purchases-template)
