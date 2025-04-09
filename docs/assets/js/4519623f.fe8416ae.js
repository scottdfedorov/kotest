"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[79881],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=c(t),m=a,k=f["".concat(l,".").concat(m)]||f[m]||p[m]||o;return t?r.createElement(k,s(s({ref:n},u),{},{components:t})):r.createElement(k,s({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},76088:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const o={title:"Fake Functions",slug:"fakery.html"},s=void 0,i={unversionedId:"framework/fake_functions",id:"framework/fake_functions",title:"Fake Functions",description:"In functional programming, our dependencies are less likely to be instances of concrete classes and more likely to be functions.",source:"@site/docs/framework/fake_functions.md",sourceDirName:"framework",slug:"/framework/fakery.html",permalink:"/docs/next/framework/fakery.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/framework/fake_functions.md",tags:[],version:"current",frontMatter:{title:"Fake Functions",slug:"fakery.html"},sidebar:"framework",previous:{title:"Test Factories",permalink:"/docs/next/framework/test-factories.html"},next:{title:"Test Output",permalink:"/docs/next/framework/test_output.html"}},l={},c=[],u={toc:c};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In functional programming, our dependencies are less likely to be instances of concrete classes and more likely to be functions.\nWhenever we are unit testing something with functional dependencies, it's usually easier to just pass another function\nrather than mock that dependency. Consider, for example, the following implementation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun interface HasAnswer {\n   fun answer(question: String): Int\n}\n\nclass AnsweringService: HasAnswer {\n   override fun answer(question: String): Int { TODO() }\n}\n\nclass MyService(private val hasAnswer: HasAnswer) {\n   fun respond(question: String): Int = hasAnswer.answer(question)\n}\n")),(0,a.kt)("p",null,"Traditionally, we would mock ",(0,a.kt)("inlineCode",{parentName:"p"},"HasAnswer")," and pass that mock to ",(0,a.kt)("inlineCode",{parentName:"p"},"MyService"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"val mockHasAnswer = run {\n  val ret = mockk<HasAnswer>()\n  every { ret.answer(any()) } returns 42\n  ret\n}\n\nval myService = MyService(mockHasAnswer)\n// tests here\n")),(0,a.kt)("p",null,"However, we can also just pass a lambda, which is so very much simpler:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"val myService = MyService(hasAnswer = { 42 })\n// tests to follow\n")),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,"If we want this test-double function to return different values and/or throw exceptions, kotest has simple helper functions which make these tasks easier, such as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},' val fakeFunction = sequenceOf("yes", "no", "maybe").toFunction()\n fakeFunction.next() shouldBe "yes"\n fakeFunction.next() shouldBe "no"\n fakeFunction.next() shouldBe "maybe"\n')),(0,a.kt)("p",null,"This fake function can be used in unit tests as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'val fakeFunction = sequenceOf("yes", "no", "maybe").toFunction()\nval myService = MyService { fakeFunction.next() }\nmyService.respond("what") shouldBe "yes"\nmyService.respond("when") shouldBe "no"\nmyService.respond("where") shouldBe "maybe"\n')),(0,a.kt)("p",null,"Should we need a fake function that sometimes returns a value and sometimes throws an exception,it can easily be done as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'val fakeFunction = sequenceOf(\n  Result.success("yes"),\n  Result.failure(RuntimeException("bad request")),\n  Result.success("no")\n).toFunction()\nfakeFunction.next() shouldBe "yes"\nshouldThrow<RuntimeException> { fakeFunction.next() }\nfakeFunction.next() shouldBe "no"\n')),(0,a.kt)("p",null,"As this function implements ",(0,a.kt)("inlineCode",{parentName:"p"},"HasAnswer")," interface, we can use it as a dependency in our unit tests as well."))}p.isMDXComponent=!0}}]);