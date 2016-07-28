webpackJsonp([263,366],{596:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(24),s(23)),e=t(p),o=(s(21),s(20)),c=t(o),l=(s(18),s(25)),u=t(l),k=(s(47),s(46)),i=t(k),r=s(1),m=t(r),g=s(2);t(g);n.exports={content:[["p","\u5404\u7c7b\u8f93\u5165\u6846\u7684\u7ec4\u5408\u5c55\u73b0\u3002"]],meta:{order:4,title:"\u8f93\u5165\u6846\u7ec4\u5408",filename:"components/form/demo/input-group.md",id:"components-form-demo-input-group"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Form<span class="token punctuation" >,</span> Input<span class="token punctuation" >,</span> Select<span class="token punctuation" >,</span> Col <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> FormItem <span class="token operator" >=</span> Form<span class="token punctuation" >.</span>Item<span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> InputGroup <span class="token operator" >=</span> Input<span class="token punctuation" >.</span>Group<span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> Option <span class="token operator" >=</span> Select<span class="token punctuation" >.</span>Option<span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> selectAfter <span class="token operator" >=</span> <span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Select</span> <span class="token attr-name" >defaultValue</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>.com<span class="token punctuation" >"</span></span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> width<span class="token punctuation" >:</span> <span class="token number" >70</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Option</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>.com<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >.</span>com<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Option</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Option</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>.jp<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >.</span>jp<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Option</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Option</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>.cn<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >.</span>cn<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Option</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Option</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>.org<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >.</span>org<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Option</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Select</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Form</span> <span class="token attr-name" >horizontal</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>FormItem</span>\n      <span class="token attr-name" >label</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6807\u7b7e\u8f93\u5165\u6846<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >labelCol</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >6</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n      <span class="token attr-name" >wrapperCol</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >16</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n    <span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Input</span> <span class="token attr-name" >addonBefore</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Http://<span class="token punctuation" >"</span></span> <span class="token attr-name" >defaultValue</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>mysite.com<span class="token punctuation" >"</span></span> <span class="token attr-name" >id</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>site1<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>FormItem</span><span class="token punctuation" >></span></span>\n\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>FormItem</span>\n      <span class="token attr-name" >label</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6807\u7b7e\u8f93\u5165\u6846<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >labelCol</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >6</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n      <span class="token attr-name" >validateStatus</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>success<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >wrapperCol</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >16</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n    <span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Input</span> <span class="token attr-name" >addonBefore</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Http://<span class="token punctuation" >"</span></span> <span class="token attr-name" >addonAfter</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>.com<span class="token punctuation" >"</span></span> <span class="token attr-name" >defaultValue</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>mysite<span class="token punctuation" >"</span></span> <span class="token attr-name" >id</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>site2<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>FormItem</span><span class="token punctuation" >></span></span>\n\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>FormItem</span>\n      <span class="token attr-name" >label</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>select</span> <span class="token attr-name" >\u6807\u7b7e\u8f93\u5165\u6846"</span>\n      <span class="token attr-name" >labelCol</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >6</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n      <span class="token attr-name" >wrapperCol</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >16</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n    <span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Input</span> <span class="token attr-name" >addonAfter</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>selectAfter<span class="token punctuation" >}</span></span> <span class="token attr-name" >placeholder</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>www.mysite<span class="token punctuation" >"</span></span> <span class="token attr-name" >id</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>site4<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>FormItem</span><span class="token punctuation" >></span></span>\n\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>FormItem</span>\n      <span class="token attr-name" >label</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8f93\u5165\u8eab\u4efd\u8bc1<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >labelCol</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >6</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n      <span class="token attr-name" >wrapperCol</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >16</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n    <span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>InputGroup</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>6<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Input</span> <span class="token attr-name" >id</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>certNo1<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>6<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Input</span> <span class="token attr-name" >id</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>certNo2<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>6<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Input</span> <span class="token attr-name" >id</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>certNo3<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>6<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Input</span> <span class="token attr-name" >id</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>certNo4<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>InputGroup</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>FormItem</span><span class="token punctuation" >></span></span>\n\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>FormItem</span>\n      <span class="token attr-name" >label</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u7535\u8bdd\u53f7\u7801<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >labelCol</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >6</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n      <span class="token attr-name" >wrapperCol</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >16</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n    <span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>InputGroup</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>4<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Input</span> <span class="token attr-name" >id</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>tel1<span class="token punctuation" >"</span></span> <span class="token attr-name" >defaultValue</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>086<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>2<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ant-form-split<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token operator" >--</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>6<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Input</span> <span class="token attr-name" >id</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>tel1<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>6<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Input</span> <span class="token attr-name" >id</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>tel2<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>6<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Input</span> <span class="token attr-name" >id</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>tel3<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>InputGroup</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>FormItem</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Form</span><span class="token punctuation" >></span></span>\n\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=i["default"].Item,a=u["default"].Group,s=c["default"].Option,t=m["default"].createElement(c["default"],{defaultValue:".com",style:{width:70}},m["default"].createElement(s,{value:".com"},".com"),m["default"].createElement(s,{value:".jp"},".jp"),m["default"].createElement(s,{value:".cn"},".cn"),m["default"].createElement(s,{value:".org"},".org"));return m["default"].createElement(i["default"],{horizontal:!0},m["default"].createElement(n,{label:"\u6807\u7b7e\u8f93\u5165\u6846",labelCol:{span:6},wrapperCol:{span:16}},m["default"].createElement(u["default"],{addonBefore:"Http://",defaultValue:"mysite.com",id:"site1"})),m["default"].createElement(n,{label:"\u6807\u7b7e\u8f93\u5165\u6846",labelCol:{span:6},validateStatus:"success",wrapperCol:{span:16}},m["default"].createElement(u["default"],{addonBefore:"Http://",addonAfter:".com",defaultValue:"mysite",id:"site2"})),m["default"].createElement(n,{label:"select \u6807\u7b7e\u8f93\u5165\u6846",labelCol:{span:6},wrapperCol:{span:16}},m["default"].createElement(u["default"],{addonAfter:t,placeholder:"www.mysite",id:"site4"})),m["default"].createElement(n,{label:"\u8f93\u5165\u8eab\u4efd\u8bc1",labelCol:{span:6},wrapperCol:{span:16}},m["default"].createElement(a,null,m["default"].createElement(e["default"],{span:"6"},m["default"].createElement(u["default"],{id:"certNo1"})),m["default"].createElement(e["default"],{span:"6"},m["default"].createElement(u["default"],{id:"certNo2"})),m["default"].createElement(e["default"],{span:"6"},m["default"].createElement(u["default"],{id:"certNo3"})),m["default"].createElement(e["default"],{span:"6"},m["default"].createElement(u["default"],{id:"certNo4"})))),m["default"].createElement(n,{label:"\u7535\u8bdd\u53f7\u7801",labelCol:{span:6},wrapperCol:{span:16}},m["default"].createElement(a,null,m["default"].createElement(e["default"],{span:"4"},m["default"].createElement(u["default"],{id:"tel1",defaultValue:"086"})),m["default"].createElement(e["default"],{span:"2"},m["default"].createElement("p",{className:"ant-form-split"},"--")),m["default"].createElement(e["default"],{span:"6"},m["default"].createElement(u["default"],{id:"tel1"})),m["default"].createElement(e["default"],{span:"6"},m["default"].createElement(u["default"],{id:"tel2"})),m["default"].createElement(e["default"],{span:"6"},m["default"].createElement(u["default"],{id:"tel3"})))))}}}});