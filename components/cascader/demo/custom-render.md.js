webpackJsonp([305,366],{553:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(67),s(66)),o=t(p),c=s(1),e=t(c),u=s(2);t(u);n.exports={content:[["p","\u4f8b\u5982\u7ed9\u6700\u540e\u4e00\u9879\u52a0\u4e0a\u90ae\u7f16\u94fe\u63a5\u3002"]],meta:{order:8,title:"\u81ea\u5b9a\u4e49\u5df2\u9009\u9879",filename:"components/cascader/demo/custom-render.md",id:"components-cascader-demo-custom-render"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Cascader <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> options <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n  value<span class="token punctuation" >:</span> <span class="token string" >\'zhejiang\'</span><span class="token punctuation" >,</span>\n  label<span class="token punctuation" >:</span> <span class="token string" >\'\u6d59\u6c5f\'</span><span class="token punctuation" >,</span>\n  children<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n    value<span class="token punctuation" >:</span> <span class="token string" >\'hangzhou\'</span><span class="token punctuation" >,</span>\n    label<span class="token punctuation" >:</span> <span class="token string" >\'\u676d\u5dde\'</span><span class="token punctuation" >,</span>\n    children<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n      value<span class="token punctuation" >:</span> <span class="token string" >\'xihu\'</span><span class="token punctuation" >,</span>\n      label<span class="token punctuation" >:</span> <span class="token string" >\'\u897f\u6e56\'</span><span class="token punctuation" >,</span>\n      code<span class="token punctuation" >:</span> <span class="token number" >752100</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n  value<span class="token punctuation" >:</span> <span class="token string" >\'jiangsu\'</span><span class="token punctuation" >,</span>\n  label<span class="token punctuation" >:</span> <span class="token string" >\'\u6c5f\u82cf\'</span><span class="token punctuation" >,</span>\n  children<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n    value<span class="token punctuation" >:</span> <span class="token string" >\'nanjing\'</span><span class="token punctuation" >,</span>\n    label<span class="token punctuation" >:</span> <span class="token string" >\'\u5357\u4eac\'</span><span class="token punctuation" >,</span>\n    children<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n      value<span class="token punctuation" >:</span> <span class="token string" >\'zhonghuamen\'</span><span class="token punctuation" >,</span>\n      label<span class="token punctuation" >:</span> <span class="token string" >\'\u4e2d\u534e\u95e8\'</span><span class="token punctuation" >,</span>\n      code<span class="token punctuation" >:</span> <span class="token number" >453400</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >handleAreaClick</span><span class="token punctuation" >(</span>e<span class="token punctuation" >,</span> label<span class="token punctuation" >,</span> option<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  e<span class="token punctuation" >.</span><span class="token function" >stopPropagation</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token string" >\'\u70b9\u51fb\u4e86\'</span><span class="token punctuation" >,</span> label<span class="token punctuation" >,</span> option<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >const</span> displayRender <span class="token operator" >=</span> <span class="token punctuation" >(</span>labels<span class="token punctuation" >,</span> selectedOptions<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> labels<span class="token punctuation" >.</span><span class="token function" >map</span><span class="token punctuation" >(</span><span class="token punctuation" >(</span>label<span class="token punctuation" >,</span> i<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >const</span> option <span class="token operator" >=</span> selectedOptions<span class="token punctuation" >[</span>i<span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n  <span class="token keyword" >if</span> <span class="token punctuation" >(</span>i <span class="token operator" >===</span> labels<span class="token punctuation" >.</span>length <span class="token operator" >-</span> <span class="token number" >1</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span> <span class="token attr-name" >key</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>option<span class="token punctuation" >.</span>value<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token punctuation" >{</span>label<span class="token punctuation" >}</span> <span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>a</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span>e<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token function" >handleAreaClick</span><span class="token punctuation" >(</span>e<span class="token punctuation" >,</span> label<span class="token punctuation" >,</span> option<span class="token punctuation" >)</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >{</span>option<span class="token punctuation" >.</span>code<span class="token punctuation" >}</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>a</span><span class="token punctuation" >></span></span><span class="token punctuation" >)</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span>\n  <span class="token keyword" >return</span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span> <span class="token attr-name" >key</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>option<span class="token punctuation" >.</span>value<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >{</span>label<span class="token punctuation" >}</span> <span class="token operator" >/</span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Cascader</span>\n    <span class="token attr-name" >options</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>options<span class="token punctuation" >}</span></span>\n    <span class="token attr-name" >defaultValue</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >[</span><span class="token string" >\'zhejiang\'</span><span class="token punctuation" >,</span> <span class="token string" >\'hangzhou\'</span><span class="token punctuation" >,</span> <span class="token string" >\'xihu\'</span><span class="token punctuation" >]</span><span class="token punctuation" >}</span></span>\n    <span class="token attr-name" >displayRender</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>displayRender<span class="token punctuation" >}</span></span>\n    <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> width<span class="token punctuation" >:</span> <span class="token number" >200</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n  <span class="token punctuation" >/></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(n,a,s){n.stopPropagation(),console.log("\u70b9\u51fb\u4e86",a,s)}var a=[{value:"zhejiang",label:"\u6d59\u6c5f",children:[{value:"hangzhou",label:"\u676d\u5dde",children:[{value:"xihu",label:"\u897f\u6e56",code:752100}]}]},{value:"jiangsu",label:"\u6c5f\u82cf",children:[{value:"nanjing",label:"\u5357\u4eac",children:[{value:"zhonghuamen",label:"\u4e2d\u534e\u95e8",code:453400}]}]}],s=function(a,s){return a.map(function(t,p){var o=s[p];return p===a.length-1?e["default"].createElement("span",{key:o.value},t," (",e["default"].createElement("a",{onClick:function(a){return n(a,t,o)}},o.code),")"):e["default"].createElement("span",{key:o.value},t," / ")})};return e["default"].createElement(o["default"],{options:a,defaultValue:["zhejiang","hangzhou","xihu"],displayRender:s,style:{width:200}})}}}});