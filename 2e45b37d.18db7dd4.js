(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return m}));var a=n(2),o=n(9),r=(n(0),n(171)),c={id:"mocking",title:"Mocking",description:"Mock your GraphQL data based on a schema."},s={id:"mocking",title:"Mocking",description:"Mock your GraphQL data based on a schema.",source:"@site/docs/mocking.md",permalink:"/docs/mocking",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/mocking.md",sidebar:"someSidebar",previous:{title:"Custom scalars and enums",permalink:"/docs/scalars"},next:{title:"Data fetching",permalink:"/docs/connectors"}},i=[{value:"Default mock example",id:"default-mock-example",children:[]},{value:"Customizing mocks",id:"customizing-mocks",children:[{value:"Mocking Custom Scalar Types",id:"mocking-custom-scalar-types",children:[]},{value:"Using MockList in resolvers",id:"using-mocklist-in-resolvers",children:[]},{value:"Accessing arguments in mock resolvers",id:"accessing-arguments-in-mock-resolvers",children:[]}]},{value:"Mocking interfaces",id:"mocking-interfaces",children:[]},{value:"Mocking a schema using introspection",id:"mocking-a-schema-using-introspection",children:[]},{value:"API",id:"api",children:[{value:"addMocksToSchema",id:"addmockstoschema",children:[]},{value:"MockList",id:"mocklist",children:[]},{value:"mockServer",id:"mockserver",children:[]}]}],l={rightToc:i};function m(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The strongly-typed nature of a GraphQL API lends itself extremely well to mocking. This is an important part of a GraphQL-First development process, because it enables frontend developers to build out UI components and features without having to wait for a backend implementation."),Object(r.b)("p",null,"Even with a backend that is already built, mocking allows you to test your UI without waiting on slow database requests or building out a component harness with a tool like React Storybook."),Object(r.b)("h2",{id:"default-mock-example"},"Default mock example"),Object(r.b)("p",null,"Let's take a look at how we can mock a GraphQL schema with just one line of code, using the default mocking logic you get out of the box with ",Object(r.b)("inlineCode",{parentName:"p"},"graphql-tools"),"."),Object(r.b)("p",null,"To start, let's grab the schema definition string from the ",Object(r.b)("inlineCode",{parentName:"p"},"makeExecutableSchema")," example ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/generate-schema/#example"}),'in the "Generating a schema" article'),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { makeExecutableSchema } from '@graphql-tools/schema';\nimport { addMocksToSchema } from '@graphql-tools/mock';\nimport { graphql } from 'graphql';\n\n// Fill this in with the schema string\nconst schemaString = `...`;\n\n// Make a GraphQL schema with no resolvers\nconst schema = makeExecutableSchema({ typeDefs: schemaString });\n\n// Create a new schema with mocks\nconst schemaWithMocks = addMocksToSchema({ schema });\n\nconst query = `\nquery tasksForUser {\n  user(id: 6) { id, name }\n}\n`;\n\ngraphql(schemaWithMocks, query).then((result) => console.log('Got result', result));\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: If your schema has custom scalar types, you still need to define the ",Object(r.b)("inlineCode",{parentName:"p"},"__serialize"),", ",Object(r.b)("inlineCode",{parentName:"p"},"__parseValue"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"__parseLiteral")," functions, and pass them inside the second argument to ",Object(r.b)("inlineCode",{parentName:"p"},"makeExecutableSchema"),".")),Object(r.b)("p",null,"This mocking logic simply looks at your schema and makes sure to return a string where your schema has a string, a number for a number, etc. So you can already get the right shape of result. But if you want to use the mocks to do sophisticated testing, you will likely want to customize them to your particular data model."),Object(r.b)("h2",{id:"customizing-mocks"},"Customizing mocks"),Object(r.b)("p",null,"This is where the ",Object(r.b)("inlineCode",{parentName:"p"},"mocks")," option comes in, it's an object that describes your desired mocking logic. This is similar to the ",Object(r.b)("inlineCode",{parentName:"p"},"resolverMap")," in ",Object(r.b)("inlineCode",{parentName:"p"},"makeExecutableSchema"),", but has a few extra features aimed at mocking."),Object(r.b)("p",null,"It allows you to specify functions that are called for specific types in the schema, for example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"{\n  Int: () => 6,\n  Float: () => 22.1,\n  String: () => 'Hello',\n}\n")),Object(r.b)("p",null,"You can also use this to describe object types, and the fields can be functions too:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"{\n  Person: () => ({\n    name: casual.name,\n    age: () => casual.integer(0, 120),\n  }),\n}\n")),Object(r.b)("p",null,"In this example, we are using ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/boo1ean/casual"}),"casual"),", a fake data generator for JavaScript, so that we can get a different result every time the field is called. You might want to use a collection of fake objects, or a generator that always uses a consistent seed, if you are planning to use the data for testing."),Object(r.b)("h3",{id:"mocking-custom-scalar-types"},"Mocking Custom Scalar Types"),Object(r.b)("p",null,"In order to Mock Custom Scalar Types, you need to declare them in your Schema. Let's look at an example for declaring DateTime Custom Scalar in our Schema:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const schema = `\n  scalar DateTime\n\n  // Your Schema definitions below.\n  ...\n\n  ...\n`;\n")),Object(r.b)("p",null,"This will make DateTime Custom Scalar available to be used in the Schema."),Object(r.b)("p",null,"The next step is to define a function that returns a value (fixed or random) for the Custom Scalar. Look at the following example, in which we're mocking a ",Object(r.b)("strong",{parentName:"p"},"fixed")," value for the DateTime Custom Scalar Type:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"{\n  DateTime: () => '2011-01-05T17:08:49.000-0430'\n}\n")),Object(r.b)("p",null,"Similarly, if you want to mock a ",Object(r.b)("strong",{parentName:"p"},"random")," value for the Custom Scalar, you can use a library. We're using ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/boo1ean/casual"}),"casual"),", as in the example above:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"{\n  DateTime: () => casual.date(format = 'YYYY-MM-DDTHH:mm:ss.SSSZZ') // Output Example: 2011-11-11T11:43:31.000-0430\n}\n")),Object(r.b)("p",null,"The final step is to use the ",Object(r.b)("inlineCode",{parentName:"p"},"mocks")," object and ",Object(r.b)("inlineCode",{parentName:"p"},"schema")," to mock the server."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { addMocksToSchema, mockServer } from '@graphql-tools/mock';\n// Mock object.\nconst mocks = {\n  Int: () => 6,\n  Float: () => 22.1,\n  String: () => 'Hello',\n  DateTime: () => casual.date(format = 'YYYY-MM-DDTHH:mm:ss.SSSZZ')\n};\nconst preserveResolvers = false;\n// Mock the server passing the schema, mocks object and preserverResolvers arguments.\nconst server = mockServer(schema, mocks, preserveResolvers);\n// Alternatively, you can call addMocksToSchema with the same arguments.\nconst schemaWithMocks = addMocksToSchema({\n  schema,\n  mocks,\n  preserveResolvers,\n});\n")),Object(r.b)("p",null,"Now, when you make a Query which response contains the DateTime Scalar Type, the DateTime function will return a value for it."),Object(r.b)("h3",{id:"using-mocklist-in-resolvers"},"Using MockList in resolvers"),Object(r.b)("p",null,"You can also use the MockList constructor to automate mocking a list:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"{\n  Person: () => ({\n    // a list of length between 2 and 6 (inclusive)\n    friends: () => new MockList([2,6]),\n    // a list of three lists of two items: [[1, 1], [2, 2], [3, 3]]\n    listOfLists: () => new MockList(3, () => new MockList(2)),\n  }),\n}\n")),Object(r.b)("p",null,"In more complex schemas, MockList is helpful for randomizing the number of entries returned in lists."),Object(r.b)("p",null,"For example, this schema:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"type Usage {\n  account: String!\n  summary: [Summary]!\n}\n\ntype Summary {\n  date: String!\n  cost: Float!\n}\n")),Object(r.b)("p",null,"By default, the ",Object(r.b)("inlineCode",{parentName:"p"},"summary")," field will always return 2 entries. To change this, we can add a mock resolver with MockList as follows:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"{\n  Usage: () =>({\n    summary: () => new MockList([0, 12]),\n  }),\n}\n")),Object(r.b)("p",null,"Now the mock data will contain between zero and 12 summary entries."),Object(r.b)("h3",{id:"accessing-arguments-in-mock-resolvers"},"Accessing arguments in mock resolvers"),Object(r.b)("p",null,"Since the mock functions on fields are actually just GraphQL resolvers, you can use arguments and context in them as well:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"{\n  Person: () => ({\n    // the number of friends in the list now depends on numPages\n    paginatedFriends: (root, { numPages }) => new MockList(numPages * PAGE_SIZE),\n  }),\n}\n")),Object(r.b)("p",null,"You can read some background and flavor on this approach in our blog post, ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://medium.com/apollo-stack/mocking-your-server-with-just-one-line-of-code-692feda6e9cd"}),'"Mocking your server with one line of code"'),"."),Object(r.b)("h2",{id:"mocking-interfaces"},"Mocking interfaces"),Object(r.b)("p",null,"You will need resolvers to mock interfaces. By default ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#addmockstoschema"}),Object(r.b)("inlineCode",{parentName:"a"},"addMocksToSchema"))," will overwrite resolver functions.\nBy setting the property ",Object(r.b)("inlineCode",{parentName:"p"},"preserveResolvers")," on the options object to ",Object(r.b)("inlineCode",{parentName:"p"},"true"),", the type resolvers will be preserved."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { makeExecutableSchema } from '@graphql-tools/schema';\nimport { addMocksToSchema } from '@graphql-tools/mock';\nimport mocks from './mocks' // your mock functions\n\nconst typeDefs = `\ntype Query {\n  fetchMore(listType: String!, amount: Int!, offset: Int!): List\n}\n\ntype Distributor {\n  id: Int\n  name: String\n}\n\ntype Product {\n  id: Int\n  name: String\n}\n\ninterface List {\n  amount: Int\n  offset: Int\n  total: Int\n  remaining: Int\n}\n\ntype DistributorList implements List {\n  amount: Int\n  offset: Int\n  total: Int\n  remaining: Int\n  items: [Distributor]\n}\n\ntype ProductList implements List {\n  amount: Int\n  offset: Int\n  total: Int\n  remaining: Int\n  items: [Product]\n}\n`\n\nconst resolvers = {\n  List: {\n    __resolveType(data) {\n      return data.typename // typename property must be set by your mock functions\n    }\n  }\n}\n\nconst schema = makeExecutableSchema({\n  typeDefs,\n  resolvers\n})\n\nconst schemaWithMocks = addMocksToSchema({\n  schema,\n  mocks,\n  preserveResolvers: true\n})\n")),Object(r.b)("h2",{id:"mocking-a-schema-using-introspection"},"Mocking a schema using introspection"),Object(r.b)("p",null,"The GraphQL specification allows clients to introspect the schema with a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://facebook.github.io/graphql/#sec-Introspection"}),"special set of types and fields")," that every schema must include. The results of a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/graphql/graphql-js/blob/master/src/utilities/introspectionQuery.js"}),"standard introspection query")," can be used to generate an instance of GraphQLSchema which can be mocked as explained above."),Object(r.b)("p",null,"This helps when you need to mock a schema defined in a language other than JS, for example Go, Ruby, or Python."),Object(r.b)("p",null,"To convert an ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/graphql/graphql-js/blob/master/src/utilities/introspectionQuery.js"}),"introspection query")," result to a ",Object(r.b)("inlineCode",{parentName:"p"},"GraphQLSchema")," object, you can use the ",Object(r.b)("inlineCode",{parentName:"p"},"buildClientSchema")," utility from the ",Object(r.b)("inlineCode",{parentName:"p"},"graphql")," package."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { buildClientSchema } from 'graphql';\nimport * as introspectionResult from 'schema.json';\n\nconst schema = buildClientSchema(introspectionResult);\n\nconst schemaWithMocks = addMocksToSchema({schema});\n")),Object(r.b)("h2",{id:"api"},"API"),Object(r.b)("h3",{id:"addmockstoschema"},"addMocksToSchema"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { addMocksToSchema } from '@graphql-tools/mock';\n\nconst schemaWithMocks = addMocksToSchema({\n  schema,\n  mocks: {},\n  preserveResolvers: false,\n});\n")),Object(r.b)("p",null,"Given an instance of GraphQLSchema and a mock object, ",Object(r.b)("inlineCode",{parentName:"p"},"addMocksToSchema")," returns a new schema that can return mock data for any valid query that is sent to the server. If ",Object(r.b)("inlineCode",{parentName:"p"},"mocks")," is not passed, the defaults will be used for each of the scalar types. If ",Object(r.b)("inlineCode",{parentName:"p"},"preserveResolvers")," is set to ",Object(r.b)("inlineCode",{parentName:"p"},"true"),", existing resolvers will not be overwritten to provide mock data. This can be used to mock some parts of the server and not others."),Object(r.b)("h3",{id:"mocklist"},"MockList"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { MockList } from '@graphql-tools/mock';\n\nnew MockList(length: number | number[], mockFunction: Function);\n")),Object(r.b)("p",null,"This is an object you can return from your mock resolvers which calls the ",Object(r.b)("inlineCode",{parentName:"p"},"mockFunction")," once for each list item. The first argument can either be an exact length, or an inclusive range of possible lengths for the list, in case you want to see how your UI responds to varying lists of data."),Object(r.b)("h3",{id:"mockserver"},"mockServer"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { mockServer } from '@graphql-tools/mock';\n\n// This can be an SDL schema string (eg the result of `buildClientSchema` above)\n// or a GraphQLSchema object (eg the result of `buildSchema` from `graphql`)\nconst schema = `...`\n\n// Same mocks object that `addMocksToSchema` takes above\nconst mocks = {}\npreserveResolvers = false\n\nconst server = mockServer(schemaString, mocks, preserveResolvers);\n\nconst query = `{ __typename }`\nconst variables = {}\n\nserver.query(query, variables)\n  .then(response => {\n    console.log(response)\n  })\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"mockServer")," is just a convenience wrapper on top of ",Object(r.b)("inlineCode",{parentName:"p"},"addMocksToSchema"),". It adds your mock resolvers to your schema and returns a client that will correctly execute\nyour query with variables. ",Object(r.b)("strong",{parentName:"p"},"Note"),": when executing queries from the returned server,\n",Object(r.b)("inlineCode",{parentName:"p"},"context")," and ",Object(r.b)("inlineCode",{parentName:"p"},"root")," will both equal ",Object(r.b)("inlineCode",{parentName:"p"},"{}"),"."))}m.isMDXComponent=!0},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),m=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},p=function(e){var t=m(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=m(n),b=a,h=p["".concat(c,".").concat(b)]||p[b]||u[b]||r;return n?o.a.createElement(h,s({ref:t},l,{components:n})):o.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<r;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);