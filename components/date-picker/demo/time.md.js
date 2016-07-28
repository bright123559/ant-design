webpackJsonp([281,366],{578:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(s(37),s(36)),p=t(e),o=s(1),c=t(o),i=s(2);t(i);n.exports={content:{"zh-CN":[["p","\u589e\u52a0\u9009\u62e9\u65f6\u95f4\u529f\u80fd\uff0c\u5f53 ",["code","showTime"]," \u4e3a\u4e00\u4e2a\u5bf9\u8c61\u65f6\uff0c\u5176\u5c5e\u6027\u4f1a\u4f20\u9012\u7ed9\u5185\u5efa\u7684 ",["code","TimePicker"],"\u3002"]],"en-US":[["p","This property provide an additional time selection. When ",["code","showTime"]," is an Object, its properties will be passed on to ",["code","TimePicker"],", witch is a built-in function."]]},meta:{order:4,title:{"zh-CN":"\u65e5\u671f\u65f6\u95f4\u9009\u62e9","en-US":"To choose time"},filename:"components/date-picker/demo/time.md",id:"components-date-picker-demo-time"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> DatePicker <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >onChange</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token string" >\'\u9009\u62e9\u4e86\u65f6\u95f4\uff1a\'</span><span class="token punctuation" >,</span> value<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>DatePicker</span> <span class="token attr-name" >showTime</span> <span class="token attr-name" >format</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>yyyy-MM-dd</span> <span class="token attr-name" ><span class="token namespace" >HH:</span><span class="token namespace" >mm:</span>ss"</span> <span class="token attr-name" >placeholder</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8bf7\u9009\u62e9\u65f6\u95f4<span class="token punctuation" >"</span></span> <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>onChange<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(n){console.log("\u9009\u62e9\u4e86\u65f6\u95f4\uff1a",n)}return c["default"].createElement(p["default"],{showTime:!0,format:"yyyy-MM-dd HH:mm:ss",placeholder:"\u8bf7\u9009\u62e9\u65f6\u95f4",onChange:n})}}}});