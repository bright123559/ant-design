webpackJsonp([117,366],{746:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(29),a(28)),o=t(p),c=a(1),e=t(c),u=a(2);t(u);n.exports={content:[["p","\u8868\u683c\u652f\u6301\u6811\u5f62\u6570\u636e\u7684\u5c55\u793a\uff0c\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e ",["code","indentSize"]," \u4ee5\u63a7\u5236\u6bcf\u4e00\u5c42\u7684\u7f29\u8fdb\u5bbd\u5ea6\u3002"],["blockquote",["p","\u6ce8\uff1a\u6682\u4e0d\u652f\u6301\u7236\u5b50\u6570\u636e\u9012\u5f52\u5173\u8054\u9009\u62e9\u3002"]]],meta:{order:15,title:"\u6811\u5f62\u6570\u636e\u5c55\u793a",filename:"components/table/demo/expand-children.md",id:"components-table-demo-expand-children"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Table <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> columns <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n  title<span class="token punctuation" >:</span> <span class="token string" >\'\u59d3\u540d\'</span><span class="token punctuation" >,</span>\n  dataIndex<span class="token punctuation" >:</span> <span class="token string" >\'name\'</span><span class="token punctuation" >,</span>\n  key<span class="token punctuation" >:</span> <span class="token string" >\'name\'</span><span class="token punctuation" >,</span>\n  width<span class="token punctuation" >:</span> <span class="token string" >\'40%\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n  title<span class="token punctuation" >:</span> <span class="token string" >\'\u5e74\u9f84\'</span><span class="token punctuation" >,</span>\n  dataIndex<span class="token punctuation" >:</span> <span class="token string" >\'age\'</span><span class="token punctuation" >,</span>\n  key<span class="token punctuation" >:</span> <span class="token string" >\'age\'</span><span class="token punctuation" >,</span>\n  width<span class="token punctuation" >:</span> <span class="token string" >\'30%\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n  title<span class="token punctuation" >:</span> <span class="token string" >\'\u4f4f\u5740\'</span><span class="token punctuation" >,</span>\n  dataIndex<span class="token punctuation" >:</span> <span class="token string" >\'address\'</span><span class="token punctuation" >,</span>\n  key<span class="token punctuation" >:</span> <span class="token string" >\'address\'</span><span class="token punctuation" >,</span>\n  width<span class="token punctuation" >:</span> <span class="token string" >\'30%\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> data <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n  key<span class="token punctuation" >:</span> <span class="token number" >1</span><span class="token punctuation" >,</span>\n  name<span class="token punctuation" >:</span> <span class="token string" >\'a\'</span><span class="token punctuation" >,</span>\n  age<span class="token punctuation" >:</span> <span class="token number" >32</span><span class="token punctuation" >,</span>\n  address<span class="token punctuation" >:</span> <span class="token string" >\'\u6211\u662fa\'</span><span class="token punctuation" >,</span>\n  children<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n    key<span class="token punctuation" >:</span> <span class="token number" >11</span><span class="token punctuation" >,</span>\n    name<span class="token punctuation" >:</span> <span class="token string" >\'aa\'</span><span class="token punctuation" >,</span>\n    age<span class="token punctuation" >:</span> <span class="token number" >33</span><span class="token punctuation" >,</span>\n    address<span class="token punctuation" >:</span> <span class="token string" >\'\u6211\u662faa\'</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n    key<span class="token punctuation" >:</span> <span class="token number" >12</span><span class="token punctuation" >,</span>\n    name<span class="token punctuation" >:</span> <span class="token string" >\'ab\'</span><span class="token punctuation" >,</span>\n    age<span class="token punctuation" >:</span> <span class="token number" >33</span><span class="token punctuation" >,</span>\n    address<span class="token punctuation" >:</span> <span class="token string" >\'\u6211\u662fab\'</span><span class="token punctuation" >,</span>\n    children<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n      key<span class="token punctuation" >:</span> <span class="token number" >121</span><span class="token punctuation" >,</span>\n      name<span class="token punctuation" >:</span> <span class="token string" >\'aba\'</span><span class="token punctuation" >,</span>\n      age<span class="token punctuation" >:</span> <span class="token number" >33</span><span class="token punctuation" >,</span>\n      address<span class="token punctuation" >:</span> <span class="token string" >\'\u6211\u662faba\'</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n    key<span class="token punctuation" >:</span> <span class="token number" >13</span><span class="token punctuation" >,</span>\n    name<span class="token punctuation" >:</span> <span class="token string" >\'ac\'</span><span class="token punctuation" >,</span>\n    age<span class="token punctuation" >:</span> <span class="token number" >33</span><span class="token punctuation" >,</span>\n    address<span class="token punctuation" >:</span> <span class="token string" >\'\u6211\u662fac\'</span><span class="token punctuation" >,</span>\n    children<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n      key<span class="token punctuation" >:</span> <span class="token number" >131</span><span class="token punctuation" >,</span>\n      name<span class="token punctuation" >:</span> <span class="token string" >\'aca\'</span><span class="token punctuation" >,</span>\n      age<span class="token punctuation" >:</span> <span class="token number" >33</span><span class="token punctuation" >,</span>\n      address<span class="token punctuation" >:</span> <span class="token string" >\'\u6211\u662faca\'</span><span class="token punctuation" >,</span>\n      children<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n        key<span class="token punctuation" >:</span> <span class="token number" >1311</span><span class="token punctuation" >,</span>\n        name<span class="token punctuation" >:</span> <span class="token string" >\'acaa\'</span><span class="token punctuation" >,</span>\n        age<span class="token punctuation" >:</span> <span class="token number" >33</span><span class="token punctuation" >,</span>\n        address<span class="token punctuation" >:</span> <span class="token string" >\'\u6211\u662facaa\'</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n        key<span class="token punctuation" >:</span> <span class="token number" >1312</span><span class="token punctuation" >,</span>\n        name<span class="token punctuation" >:</span> <span class="token string" >\'acab\'</span><span class="token punctuation" >,</span>\n        age<span class="token punctuation" >:</span> <span class="token number" >33</span><span class="token punctuation" >,</span>\n        address<span class="token punctuation" >:</span> <span class="token string" >\'\u6211\u662facab\'</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n  key<span class="token punctuation" >:</span> <span class="token number" >2</span><span class="token punctuation" >,</span>\n  name<span class="token punctuation" >:</span> <span class="token string" >\'b\'</span><span class="token punctuation" >,</span>\n  age<span class="token punctuation" >:</span> <span class="token number" >32</span><span class="token punctuation" >,</span>\n  address<span class="token punctuation" >:</span> <span class="token string" >\'\u6211\u662fb\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n<span class="token comment" spellcheck="true">// \u901a\u8fc7 rowSelection \u5bf9\u8c61\u8868\u660e\u9700\u8981\u884c\u9009\u62e9</span>\n<span class="token keyword" >const</span> rowSelection <span class="token operator" >=</span> <span class="token punctuation" >{</span>\n  <span class="token function" >onChange</span><span class="token punctuation" >(</span>selectedRowKeys<span class="token punctuation" >,</span> selectedRows<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token template-string" ><span class="token string" >`selectedRowKeys: </span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>selectedRowKeys<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >`</span></span><span class="token punctuation" >,</span> <span class="token string" >\'selectedRows: \'</span><span class="token punctuation" >,</span> selectedRows<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >onSelect</span><span class="token punctuation" >(</span>record<span class="token punctuation" >,</span> selected<span class="token punctuation" >,</span> selectedRows<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span>record<span class="token punctuation" >,</span> selected<span class="token punctuation" >,</span> selectedRows<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >onSelectAll</span><span class="token punctuation" >(</span>selected<span class="token punctuation" >,</span> selectedRows<span class="token punctuation" >,</span> changeRows<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span>selected<span class="token punctuation" >,</span> selectedRows<span class="token punctuation" >,</span> changeRows<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Table</span> <span class="token attr-name" >columns</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>columns<span class="token punctuation" >}</span></span> <span class="token attr-name" >rowSelection</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>rowSelection<span class="token punctuation" >}</span></span> <span class="token attr-name" >dataSource</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>data<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span>\n  mountNode\n<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=[{title:"\u59d3\u540d",dataIndex:"name",key:"name",width:"40%"},{title:"\u5e74\u9f84",dataIndex:"age",key:"age",width:"30%"},{title:"\u4f4f\u5740",dataIndex:"address",key:"address",width:"30%"}],s=[{key:1,name:"a",age:32,address:"\u6211\u662fa",children:[{key:11,name:"aa",age:33,address:"\u6211\u662faa"},{key:12,name:"ab",age:33,address:"\u6211\u662fab",children:[{key:121,name:"aba",age:33,address:"\u6211\u662faba"}]},{key:13,name:"ac",age:33,address:"\u6211\u662fac",children:[{key:131,name:"aca",age:33,address:"\u6211\u662faca",children:[{key:1311,name:"acaa",age:33,address:"\u6211\u662facaa"},{key:1312,name:"acab",age:33,address:"\u6211\u662facab"}]}]}]},{key:2,name:"b",age:32,address:"\u6211\u662fb"}],a={onChange:function(n,s){console.log("selectedRowKeys: "+n,"selectedRows: ",s)},onSelect:function(n,s,a){console.log(n,s,a)},onSelectAll:function(n,s,a){console.log(n,s,a)}};return e["default"].createElement(o["default"],{columns:n,rowSelection:a,dataSource:s})}}}});