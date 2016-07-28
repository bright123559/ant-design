webpackJsonp([60,366],{803:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(176),a(175)),o=t(p),e=a(1),c=t(e),u=a(2);t(u);n.exports={content:[["p","\u53d7\u63a7\u64cd\u4f5c\u793a\u4f8b"]],meta:{order:1,title:"\u53d7\u63a7\u64cd\u4f5c\u793a\u4f8b",filename:"components/tree/demo/basic-controlled.md",id:"components-tree-demo-basic-controlled"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Tree <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> TreeNode <span class="token operator" >=</span> Tree<span class="token punctuation" >.</span>TreeNode<span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> x <span class="token operator" >=</span> <span class="token number" >3</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> y <span class="token operator" >=</span> <span class="token number" >2</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> z <span class="token operator" >=</span> <span class="token number" >1</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> gData <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> generateData <span class="token operator" >=</span> <span class="token punctuation" >(</span>_level<span class="token punctuation" >,</span> _preKey<span class="token punctuation" >,</span> _tns<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >const</span> preKey <span class="token operator" >=</span> _preKey <span class="token operator" >||</span> <span class="token string" >\'0\'</span><span class="token punctuation" >;</span>\n  <span class="token keyword" >const</span> tns <span class="token operator" >=</span> _tns <span class="token operator" >||</span> gData<span class="token punctuation" >;</span>\n\n  <span class="token keyword" >const</span> children <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n  <span class="token keyword" >for</span> <span class="token punctuation" >(</span><span class="token keyword" >let</span> i <span class="token operator" >=</span> <span class="token number" >0</span><span class="token punctuation" >;</span> i <span class="token operator" >&lt;</span> x<span class="token punctuation" >;</span> i<span class="token operator" >++</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> key <span class="token operator" >=</span> <span class="token template-string" ><span class="token string" >`</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>preKey<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >-</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>i<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >`</span></span><span class="token punctuation" >;</span>\n    tns<span class="token punctuation" >.</span><span class="token function" >push</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> title<span class="token punctuation" >:</span> key<span class="token punctuation" >,</span> key <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span>i <span class="token operator" >&lt;</span> y<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      children<span class="token punctuation" >.</span><span class="token function" >push</span><span class="token punctuation" >(</span>key<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n  <span class="token punctuation" >}</span>\n  <span class="token keyword" >if</span> <span class="token punctuation" >(</span>_level <span class="token operator" >&lt;</span> <span class="token number" >0</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> tns<span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span>\n  <span class="token keyword" >const</span> level <span class="token operator" >=</span> _level <span class="token operator" >-</span> <span class="token number" >1</span><span class="token punctuation" >;</span>\n  children<span class="token punctuation" >.</span><span class="token function" >forEach</span><span class="token punctuation" >(</span><span class="token punctuation" >(</span>key<span class="token punctuation" >,</span> index<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n    tns<span class="token punctuation" >[</span>index<span class="token punctuation" >]</span><span class="token punctuation" >.</span>children <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >return</span> <span class="token function" >generateData</span><span class="token punctuation" >(</span>level<span class="token punctuation" >,</span> key<span class="token punctuation" >,</span> tns<span class="token punctuation" >[</span>index<span class="token punctuation" >]</span><span class="token punctuation" >.</span>children<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n<span class="token function" >generateData</span><span class="token punctuation" >(</span>z<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> Demo <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      expandedKeys<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token string" >\'0-0-0\'</span><span class="token punctuation" >,</span> <span class="token string" >\'0-0-1\'</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n      autoExpandParent<span class="token punctuation" >:</span> <span class="token boolean" >true</span><span class="token punctuation" >,</span>\n      checkedKeys<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token string" >\'0-0-0\'</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n      selectedKeys<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >onExpand</span><span class="token punctuation" >(</span>expandedKeys<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token string" >\'onExpand\'</span><span class="token punctuation" >,</span> arguments<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token comment" spellcheck="true">// if not set autoExpandParent to false, if children expanded, parent can not collapse.</span>\n    <span class="token comment" spellcheck="true">// or, you can remove all expanded chilren keys.</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      expandedKeys<span class="token punctuation" >,</span>\n      autoExpandParent<span class="token punctuation" >:</span> <span class="token boolean" >false</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >onCheck</span><span class="token punctuation" >(</span>checkedKeys<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      checkedKeys<span class="token punctuation" >,</span>\n      selectedKeys<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token string" >\'0-3\'</span><span class="token punctuation" >,</span> <span class="token string" >\'0-4\'</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >onSelect</span><span class="token punctuation" >(</span>selectedKeys<span class="token punctuation" >,</span> info<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token string" >\'onSelect\'</span><span class="token punctuation" >,</span> info<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> selectedKeys <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> loop <span class="token operator" >=</span> data <span class="token operator" >=</span><span class="token operator" >></span> data<span class="token punctuation" >.</span><span class="token function" >map</span><span class="token punctuation" >(</span><span class="token punctuation" >(</span>item<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n      <span class="token keyword" >if</span> <span class="token punctuation" >(</span>item<span class="token punctuation" >.</span>children<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n        <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TreeNode</span> <span class="token attr-name" >key</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>item<span class="token punctuation" >.</span>key<span class="token punctuation" >}</span></span> <span class="token attr-name" >title</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>item<span class="token punctuation" >.</span>key<span class="token punctuation" >}</span></span> <span class="token attr-name" >disableCheckbox</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>item<span class="token punctuation" >.</span>key <span class="token operator" >===</span> <span class="token string" >\'0-0-0\'</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n            <span class="token punctuation" >{</span><span class="token function" >loop</span><span class="token punctuation" >(</span>item<span class="token punctuation" >.</span>children<span class="token punctuation" >)</span><span class="token punctuation" >}</span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>TreeNode</span><span class="token punctuation" >></span></span>\n        <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n      <span class="token punctuation" >}</span>\n      <span class="token keyword" >return</span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TreeNode</span> <span class="token attr-name" >key</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>item<span class="token punctuation" >.</span>key<span class="token punctuation" >}</span></span> <span class="token attr-name" >title</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>item<span class="token punctuation" >.</span>key<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tree</span>\n        <span class="token attr-name" >checkable</span>\n        <span class="token attr-name" >onExpand</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>onExpand<span class="token punctuation" >}</span></span> <span class="token attr-name" >expandedKeys</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>expandedKeys<span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >autoExpandParent</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>autoExpandParent<span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >onCheck</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>onCheck<span class="token punctuation" >}</span></span> <span class="token attr-name" >checkedKeys</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>checkedKeys<span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >onSelect</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>onSelect<span class="token punctuation" >}</span></span> <span class="token attr-name" >selectedKeys</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>selectedKeys<span class="token punctuation" >}</span></span>\n      <span class="token punctuation" >></span></span>\n        <span class="token punctuation" >{</span><span class="token function" >loop</span><span class="token punctuation" >(</span>gData<span class="token punctuation" >)</span><span class="token punctuation" >}</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tree</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Demo</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=o["default"].TreeNode,s=3,a=2,t=1,p=[],e=function l(n,t,o){for(var e=t||"0",c=o||p,u=[],k=0;k<s;k++){var i=e+"-"+k;c.push({title:i,key:i}),k<a&&u.push(i)}if(n<0)return c;var r=n-1;u.forEach(function(n,s){return c[s].children=[],l(r,n,c[s].children)})};e(t);var u=c["default"].createClass({displayName:"Demo",getInitialState:function(){return{expandedKeys:["0-0-0","0-0-1"],autoExpandParent:!0,checkedKeys:["0-0-0"],selectedKeys:[]}},onExpand:function(n){console.log("onExpand",arguments),this.setState({expandedKeys:n,autoExpandParent:!1})},onCheck:function(n){this.setState({checkedKeys:n,selectedKeys:["0-3","0-4"]})},onSelect:function(n,s){console.log("onSelect",s),this.setState({selectedKeys:n})},render:function(){var s=function a(s){return s.map(function(s){return s.children?c["default"].createElement(n,{key:s.key,title:s.key,disableCheckbox:"0-0-0"===s.key},a(s.children)):c["default"].createElement(n,{key:s.key,title:s.key})})};return c["default"].createElement(o["default"],{checkable:!0,onExpand:this.onExpand,expandedKeys:this.state.expandedKeys,autoExpandParent:this.state.autoExpandParent,onCheck:this.onCheck,checkedKeys:this.state.checkedKeys,onSelect:this.onSelect,selectedKeys:this.state.selectedKeys},s(p))}});return c["default"].createElement(u,null)}}}});