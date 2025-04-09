"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[30475],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||s;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var l=2;l<s;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27591:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const s={id:"mockserver",title:"MockServer",sidebar_label:"MockServer",slug:"mockserver.html"},i=void 0,a={unversionedId:"extensions/mockserver",id:"version-5.8/extensions/mockserver",title:"MockServer",description:"Kotest provides an extension for integration with the MockServer library.",source:"@site/versioned_docs/version-5.8/extensions/mockserver.md",sourceDirName:"extensions",slug:"/extensions/mockserver.html",permalink:"/docs/5.8/extensions/mockserver.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.8/extensions/mockserver.md",tags:[],version:"5.8",frontMatter:{id:"mockserver",title:"MockServer",sidebar_label:"MockServer",slug:"mockserver.html"},sidebar:"extensions",previous:{title:"Kafka",permalink:"/docs/5.8/extensions/embedded-kafka.html"},next:{title:"JUnit XML",permalink:"/docs/5.8/extensions/junit_xml.html"}},c={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Kotest provides an ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kotest/kotest-extensions-mockserver"},"extension")," for integration with the ",(0,r.kt)("a",{parentName:"p",href:"https://www.mock-server.com"},"MockServer")," library."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Requires the ",(0,r.kt)("inlineCode",{parentName:"p"},"io.kotest.extensions:kotest-extensions-mockserver")," module to be added to your build.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://search.maven.org/artifact/io.kotest.extensions/kotest-extensions-mockserver"},(0,r.kt)("img",{src:"https://img.shields.io/maven-central/v/io.kotest.extensions/kotest-extensions-mockserver.svg?label=latest%20release"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://oss.sonatype.org/content/repositories/snapshots/io/kotest/extensions/kotest-extensions-mockserver/"},(0,r.kt)("img",{src:"https://img.shields.io/nexus/s/https/oss.sonatype.org/io.kotest.extensions/kotest-extensions-mockserver.svg?label=latest%20snapshot"}))),(0,r.kt)("p",null,"Mockserver allows us to define an in process HTTP server which is hard coded for routes that we want to test against."),(0,r.kt)("p",null,"To use in Kotest, we attach an instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"MockServerListener")," to the spec under test, and Kotest will control\nthe lifecycle automatically."),(0,r.kt)("p",null,"Then it is a matter of using ",(0,r.kt)("inlineCode",{parentName:"p"},"MockServerClient")," to wire in our responses."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyMockServerTest : FunSpec() {\n  init {\n\n      // this attaches the server to the lifeycle of the spec\n      listener(MockServerListener(1080))\n\n      // we can use the client to create routes. Here we are setting them up\n      // before each test by using the beforeTest callback.\n      beforeTest {\n         MockServerClient("localhost", 1080).`when`(\n            HttpRequest.request()\n               .withMethod("POST")\n               .withPath("/login")\n               .withHeader("Content-Type", "application/json")\n               .withBody("""{"username": "foo", "password": "bar"}""")\n         ).respond(\n            HttpResponse.response()\n               .withStatusCode(202)\n               .withHeader("X-Test", "foo")\n         )\n      }\n\n      // this test will confirm the endpoint works\n      test("login endpoint should accept username and password json") {\n\n         // using the ktor client to send requests\n         val client = HttpClient(CIO)\n         val resp = client.post<io.ktor.client.statement.HttpResponse>("http://localhost:1080/login") {\n            contentType(ContentType.Application.Json)\n            body = """{"username": "foo", "password": "bar"}"""\n         }\n\n         // these handy matchers come from the kotest-assertions-ktor module\n         resp.shouldHaveStatus(HttpStatusCode.Accepted)\n         resp.shouldHaveHeader("X-Test", "foo")\n      }\n  }\n}\n')),(0,r.kt)("p",null,"In the above example, we are of course just testing the mock itself, but it shows how a real test could be configured. For example,\nyou may have an API client that you want to test, so you would configure the API routes using mock server, and then invoke methods\non your API client, ensuring it handles the responses correctly."))}u.isMDXComponent=!0}}]);