(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{166:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return o})),t.d(a,"metadata",(function(){return s})),t.d(a,"rightToc",(function(){return c})),t.d(a,"default",(function(){return p}));var n=t(2),r=t(9),l=(t(0),t(171)),o={id:"scalars",title:"Custom scalars and enums",description:"Add custom scalar and enum types to your graphql-tools generated schema."},s={id:"scalars",title:"Custom scalars and enums",description:"Add custom scalar and enum types to your graphql-tools generated schema.",source:"@site/docs/scalars.md",permalink:"/docs/scalars",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/scalars.md",sidebar:"someSidebar",previous:{title:"Resolvers composition",permalink:"/docs/resolvers-composition"},next:{title:"Mocking",permalink:"/docs/mocking"}},c=[{value:"Custom scalars",id:"custom-scalars",children:[{value:"Using a package",id:"using-a-package",children:[]},{value:"Custom <code>GraphQLScalarType</code> instance",id:"custom-graphqlscalartype-instance",children:[]}]},{value:"Custom scalar examples",id:"custom-scalar-examples",children:[{value:"Date as a scalar",id:"date-as-a-scalar",children:[]},{value:"Validations",id:"validations",children:[]}]},{value:"Enums",id:"enums",children:[{value:"Internal values",id:"internal-values",children:[]}]}],i={rightToc:c};function p(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},i,t,{components:a,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The GraphQL specification includes the following default scalar types: ",Object(l.b)("inlineCode",{parentName:"p"},"Int"),", ",Object(l.b)("inlineCode",{parentName:"p"},"Float"),", ",Object(l.b)("inlineCode",{parentName:"p"},"String"),", ",Object(l.b)("inlineCode",{parentName:"p"},"Boolean")," and ",Object(l.b)("inlineCode",{parentName:"p"},"ID"),". While this covers most of the use cases, often you need to support custom atomic data types (e.g. Date), or you want a version of an existing type that does some validation. To enable this, GraphQL allows you to define custom scalar types. Enumerations are similar to custom scalars, but their values can only be one of a pre-defined list of strings."),Object(l.b)("h2",{id:"custom-scalars"},"Custom scalars"),Object(l.b)("p",null,"To define a custom scalar you simply add it to the schema string with the following notation:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"scalar MyCustomScalar\n")),Object(l.b)("p",null,"Afterwards, you have to define the behavior of your ",Object(l.b)("inlineCode",{parentName:"p"},"MyCustomScalar")," custom scalar by passing an instance of the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"http://graphql.org/graphql-js/type/#graphqlscalartype"}),Object(l.b)("inlineCode",{parentName:"a"},"GraphQLScalarType"))," class in the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/resolvers/#resolver-map"}),"resolver map"),". This instance can be defined in a ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#using-a-package"}),"dependency package")," or ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#custom-graphqlscalartype-instance"}),"in your own code"),"."),Object(l.b)("p",null,"For more information about GraphQL's type system, please refer to the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"http://graphql.org/graphql-js/type/"}),"official documentation")," or to the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mugli/learning-graphql/blob/master/7.%20Deep%20Dive%20into%20GraphQL%20Type%20System.md"}),"Learning GraphQL")," tutorial."),Object(l.b)("p",null,"Note that most of popular GraphQL clients does not currently have a way to automatically interpret custom scalars, so there's no way to automatically reverse the serialization on the client."),Object(l.b)("h3",{id:"using-a-package"},"Using a package"),Object(l.b)("p",null,"Here, we'll take the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Urigo/graphql-scalars"}),"graphql-scalars")," package as an example to demonstrate what can be done. This npm package defines a JSON GraphQL scalar type."),Object(l.b)("p",null,"Add the ",Object(l.b)("inlineCode",{parentName:"p"},"graphql-scalars")," package to your project's dependencies :"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"$ npm install --save graphql-scalars\n")),Object(l.b)("p",null,"In your JavaScript code, require the type defined by in the npm package and use it :"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { makeExecutableSchema } from '@graphql-tools/schema';\nimport { GraphQLJSON } from 'graphql-scalars';\n\nconst schemaString = `\n\nscalar JSON\n\ntype Foo {\n  aField: JSON\n}\n\ntype Query {\n  foo: Foo\n}\n\n`;\n\nconst resolveFunctions = {\n  JSON: GraphQLJSON\n};\n\nconst jsSchema = makeExecutableSchema({ typeDefs: schemaString, resolvers: resolveFunctions });\n")),Object(l.b)("p",null,"Remark : ",Object(l.b)("inlineCode",{parentName:"p"},"GraphQLJSON")," is a ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"http://graphql.org/graphql-js/type/#graphqlscalartype"}),Object(l.b)("inlineCode",{parentName:"a"},"GraphQLScalarType"))," instance."),Object(l.b)("p",null,"For a set of popular scalar types that are ready to reuse, try out the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/urigo/graphql-scalars"}),"GraphQL Scalars npm library"),"."),Object(l.b)("h3",{id:"custom-graphqlscalartype-instance"},"Custom ",Object(l.b)("inlineCode",{parentName:"h3"},"GraphQLScalarType")," instance"),Object(l.b)("p",null,"If needed, you can define your own ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"http://graphql.org/graphql-js/type/#graphqlscalartype"}),"GraphQLScalarType")," instance. This can be done the following way :"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { GraphQLScalarType } from 'graphql';\nimport { makeExecutableSchema } from '@graphql-tools/schema';\n\nconst myCustomScalarType = new GraphQLScalarType({\n  name: 'MyCustomScalar',\n  description: 'Description of my custom scalar type',\n  serialize(value) {\n    let result;\n    // Implement your own behavior here by setting the 'result' variable\n    return result;\n  },\n  parseValue(value) {\n    let result;\n    // Implement your own behavior here by setting the 'result' variable\n    return result;\n  },\n  parseLiteral(ast) {\n    switch (ast.kind) {\n      // Implement your own behavior here by returning what suits your needs\n      // depending on ast.kind\n    }\n  }\n});\n\nconst schemaString = `\n\nscalar MyCustomScalar\n\ntype Foo {\n  aField: MyCustomScalar\n}\n\ntype Query {\n  foo: Foo\n}\n\n`;\n\nconst resolverFunctions = {\n  MyCustomScalar: myCustomScalarType\n};\n\nconst jsSchema = makeExecutableSchema({\n  typeDefs: schemaString,\n  resolvers: resolverFunctions,\n});\n")),Object(l.b)("h2",{id:"custom-scalar-examples"},"Custom scalar examples"),Object(l.b)("p",null,"Let's look at a couple of examples to demonstrate how a custom scalar type can be defined."),Object(l.b)("h3",{id:"date-as-a-scalar"},"Date as a scalar"),Object(l.b)("p",null,"The goal is to define a ",Object(l.b)("inlineCode",{parentName:"p"},"Date")," data type for returning ",Object(l.b)("inlineCode",{parentName:"p"},"Date")," values from the database. Let's say we're using a MongoDB driver that uses the native JavaScript ",Object(l.b)("inlineCode",{parentName:"p"},"Date")," data type. The ",Object(l.b)("inlineCode",{parentName:"p"},"Date")," data type can be easily serialized as a number using the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime"}),Object(l.b)("inlineCode",{parentName:"a"},"getTime()")," method"),". Therefore, we would like our GraphQL server to send and receive ",Object(l.b)("inlineCode",{parentName:"p"},"Date"),"s as numbers when serializing to JSON. This number will be resolved to a ",Object(l.b)("inlineCode",{parentName:"p"},"Date")," on the server representing the date value. On the client, the user can simply create a new date from the received numeric value."),Object(l.b)("p",null,"The following is the implementation of the ",Object(l.b)("inlineCode",{parentName:"p"},"Date")," data type. First, the schema:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"scalar Date\n\ntype MyType {\n   created: Date\n}\n")),Object(l.b)("p",null,"Next, the resolver:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { GraphQLScalarType } from 'graphql';\nimport { Kind } from 'graphql/language';\n\nconst resolverMap = {\n  Date: new GraphQLScalarType({\n    name: 'Date',\n    description: 'Date custom scalar type',\n    parseValue(value) {\n      return new Date(value); // value from the client\n    },\n    serialize(value) {\n      return value.getTime(); // value sent to the client\n    },\n    parseLiteral(ast) {\n      if (ast.kind === Kind.INT) {\n        return new Date(+ast.value) // ast value is always in string format\n      }\n      return null;\n    },\n  }),\n};\n")),Object(l.b)("h3",{id:"validations"},"Validations"),Object(l.b)("p",null,"In this example, we follow the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"http://graphql.org/docs/api-reference-type-system/"}),"official GraphQL documentation")," for the scalar datatype. Let's say that you have a database field that should only contain odd numbers. First, the schema:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"scalar Odd\n\ntype MyType {\n    oddValue: Odd\n}\n")),Object(l.b)("p",null,"Next, the resolver:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { GraphQLScalarType } from 'graphql';\nimport { Kind } from 'graphql/language';\n\nfunction oddValue(value) {\n  return value % 2 === 1 ? value : null;\n}\n\nconst resolverMap = {\n  Odd: new GraphQLScalarType({\n    name: 'Odd',\n    description: 'Odd custom scalar type',\n    parseValue: oddValue,\n    serialize: oddValue,\n    parseLiteral(ast) {\n      if (ast.kind === Kind.INT) {\n        return oddValue(parseInt(ast.value, 10));\n      }\n      return null;\n    },\n  }),\n};\n")),Object(l.b)("h2",{id:"enums"},"Enums"),Object(l.b)("p",null,"An Enum is similar to a scalar type, but it can only be one of several values defined in the schema. Enums are most useful in a situation where you need the user to pick from a prescribed list of options, and they will auto-complete in tools like GraphiQL."),Object(l.b)("p",null,"In the schema language, an enum looks like this:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),"enum AllowedColor {\n  RED\n  GREEN\n  BLUE\n}\n")),Object(l.b)("p",null,"You can use it in your schema anywhere you could use a scalar:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),"type Query {\n  favoriteColor: AllowedColor # As a return value\n  avatar(borderColor: AllowedColor): String # As an argument\n}\n")),Object(l.b)("p",null,"Then, you query it like this:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),"query {\n  avatar(borderColor: RED)\n}\n")),Object(l.b)("p",null,"If you want to pass the enum value as a variable, use a string in your JSON, like so:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),"query MyAvatar($color: AllowedColor) {\n  avatar(borderColor: $color)\n}\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'{\n  "color": "RED"\n}\n')),Object(l.b)("p",null,"Putting it all together:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const typeDefs = `\n  enum AllowedColor {\n    RED\n    GREEN\n    BLUE\n  }\n\n  type Query {\n    favoriteColor: AllowedColor # As a return value\n    avatar(borderColor: AllowedColor): String # As an argument\n  }\n`;\n\nconst resolvers = {\n  Query: {\n    favoriteColor: () => 'RED',\n    avatar: (root, args) => {\n      // args.borderColor is 'RED', 'GREEN', or 'BLUE'\n    },\n  }\n};\n\nconst schema = makeExecutableSchema({ typeDefs, resolvers });\n")),Object(l.b)("h3",{id:"internal-values"},"Internal values"),Object(l.b)("p",null,"Often, you might have a different value for the enum in your code than in the public API. So maybe in the API we call it ",Object(l.b)("inlineCode",{parentName:"p"},"RED"),", but inside our resolvers we want to use ",Object(l.b)("inlineCode",{parentName:"p"},"#f00")," instead. That's why you can use the ",Object(l.b)("inlineCode",{parentName:"p"},"resolvers")," argument to ",Object(l.b)("inlineCode",{parentName:"p"},"makeExecutableSchema")," to add custom values to your enum that only show up internally:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const resolvers = {\n  AllowedColor: {\n    RED: '#f00',\n    GREEN: '#0f0',\n    BLUE: '#00f',\n  }\n};\n")),Object(l.b)("p",null,"These don't change the public API at all, but they do allow you to use that value instead of the schema value in your resolvers, like so:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const resolvers = {\n  AllowedColor: {\n    RED: '#f00',\n    GREEN: '#0f0',\n    BLUE: '#00f',\n  },\n  Query: {\n    favoriteColor: () => '#f00',\n    avatar: (root, args) => {\n      // args.favoriteColor is '#f00', '#0f0', or '#00f'\n    },\n  }\n};\n")),Object(l.b)("p",null,"Most of the time, you don't need to use this feature of enums unless you're interoperating with some other library which already expects its values in a different form."))}p.isMDXComponent=!0},171:function(e,a,t){"use strict";t.d(a,"a",(function(){return u})),t.d(a,"b",(function(){return d}));var n=t(0),r=t.n(n);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=r.a.createContext({}),p=function(e){var a=r.a.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):s({},a,{},e)),t},u=function(e){var a=p(e.components);return r.a.createElement(i.Provider,{value:a},e.children)},b={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},m=Object(n.forwardRef)((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=p(t),m=n,d=u["".concat(o,".").concat(m)]||u[m]||b[m]||l;return t?r.a.createElement(d,s({ref:a},i,{components:t})):r.a.createElement(d,s({ref:a},i))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,o=new Array(l);o[0]=m;var s={};for(var c in a)hasOwnProperty.call(a,c)&&(s[c]=a[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var i=2;i<l;i++)o[i]=t[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);