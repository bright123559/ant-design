webpackJsonp([87,366],{776:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function p(n){if(Array.isArray(n)){for(var a=0,s=Array(n.length);a<n.length;a++)s[a]=n[a];return s}return Array.from(n)}var o=(s(7),s(5)),c=t(o),e=(s(196),s(195)),u=t(e),l=s(1),k=t(l),i=s(2);t(i);n.exports={content:[["p","\u7528\u6570\u7ec4\u751f\u6210\u4e00\u7ec4\u6807\u7b7e\uff0c\u53ef\u4ee5\u52a8\u6001\u6dfb\u52a0\u548c\u5220\u9664\u3002"],["blockquote",["p","\u4f7f\u7528 ",["code","afterClose"]," \u5220\u9664\u65f6\u6709\u52a8\u753b\u6548\u679c\u3002"]]],meta:{order:2,title:"\u52a8\u6001\u6dfb\u52a0\u548c\u5220\u9664",filename:"components/tag/demo/control.md",id:"components-tag-demo-control"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Tag<span class="token punctuation" >,</span> Button <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >let</span> index <span class="token operator" >=</span> <span class="token number" >3</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> App <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      tags<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n        <span class="token punctuation" >{</span> key<span class="token punctuation" >:</span> <span class="token number" >1</span><span class="token punctuation" >,</span> name<span class="token punctuation" >:</span> <span class="token string" >\'\u4e0d\u53ef\u79fb\u9664\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >{</span> key<span class="token punctuation" >:</span> <span class="token number" >2</span><span class="token punctuation" >,</span> name<span class="token punctuation" >:</span> <span class="token string" >\'\u6807\u7b7e\u4e8c\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >{</span> key<span class="token punctuation" >:</span> <span class="token number" >3</span><span class="token punctuation" >,</span> name<span class="token punctuation" >:</span> <span class="token string" >\'\u6807\u7b7e\u4e09\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >handleClose</span><span class="token punctuation" >(</span>key<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> tags <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>tags<span class="token punctuation" >]</span><span class="token punctuation" >.</span><span class="token function" >filter</span><span class="token punctuation" >(</span>tag <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >(</span>tag<span class="token punctuation" >.</span>key <span class="token operator" >!==</span> key<span class="token punctuation" >)</span> <span class="token operator" >&amp;&amp;</span> tag<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span>tags<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> tags <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >addTag</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> tags <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>tags<span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n    index <span class="token operator" >+</span><span class="token operator" >=</span> <span class="token number" >1</span><span class="token punctuation" >;</span>\n    tags<span class="token punctuation" >.</span><span class="token function" >push</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> key<span class="token punctuation" >:</span> index<span class="token punctuation" >,</span> name<span class="token punctuation" >:</span> <span class="token template-string" ><span class="token string" >`\u65b0\u6807\u7b7e</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>index<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >`</span></span> <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> tags <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> <span class="token punctuation" >{</span> tags <span class="token punctuation" >}</span> <span class="token operator" >=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >;</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token punctuation" >{</span>tags<span class="token punctuation" >.</span><span class="token function" >map</span><span class="token punctuation" >(</span>tag <span class="token operator" >=</span><span class="token operator" >></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tag</span> <span class="token attr-name" >key</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>tag<span class="token punctuation" >.</span>key<span class="token punctuation" >}</span></span> <span class="token attr-name" >closable</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>tag<span class="token punctuation" >.</span>key <span class="token operator" >!==</span> <span class="token number" >1</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >afterClose</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >handleClose</span><span class="token punctuation" >(</span>tag<span class="token punctuation" >.</span>key<span class="token punctuation" >)</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n            <span class="token punctuation" >{</span>tag<span class="token punctuation" >.</span>name<span class="token punctuation" >}</span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tag</span><span class="token punctuation" >></span></span>\n        <span class="token punctuation" >)</span><span class="token punctuation" >}</span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>small<span class="token punctuation" >"</span></span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>dashed<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>addTag<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token operator" >+</span> \u6dfb\u52a0\u6807\u7b7e<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>App</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=3,a=k["default"].createClass({displayName:"App",getInitialState:function(){return{tags:[{key:1,name:"\u4e0d\u53ef\u79fb\u9664"},{key:2,name:"\u6807\u7b7e\u4e8c"},{key:3,name:"\u6807\u7b7e\u4e09"}]}},handleClose:function(n){var a=[].concat(p(this.state.tags)).filter(function(a){return a.key!==n&&a});console.log(a),this.setState({tags:a})},addTag:function(){var a=[].concat(p(this.state.tags));n+=1,a.push({key:n,name:"\u65b0\u6807\u7b7e"+n}),this.setState({tags:a})},render:function(){var n=this,a=this.state.tags;return k["default"].createElement("div",null,a.map(function(a){return k["default"].createElement(u["default"],{key:a.key,closable:1!==a.key,afterClose:function(){return n.handleClose(a.key)}},a.name)}),k["default"].createElement(c["default"],{size:"small",type:"dashed",onClick:this.addTag},"+ \u6dfb\u52a0\u6807\u7b7e"))}});return k["default"].createElement(a,null)}}}});