(this["webpackJsonpremote-work-budget"]=this["webpackJsonpremote-work-budget"]||[]).push([[0],{16:function(e,t,a){},33:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(3),c=a.n(n),r=a(26),l=a.n(r),i=(a(33),a(6)),o=a(7),d=a(9),u=a(8),h=(a(16),a.p+"static/media/iconsRWB.846ceac1.png"),j=a(4),m=a(5),p=Object(s.jsx)(j.a,{icon:m.c}),b=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(s.jsx)("header",{children:Object(s.jsx)("div",{className:"wrapper",children:Object(s.jsxs)("div",{className:"headerContent",children:[Object(s.jsx)("div",{className:"logo",children:Object(s.jsx)("img",{src:h,alt:"Logo for the app Remote Work Budget"})}),Object(s.jsxs)("h1",{children:[Object(s.jsx)("span",{className:"logoSlide",children:"Remote"})," ",Object(s.jsxs)("span",{className:"logoSlide",children:["Work",Object(s.jsx)("span",{className:"plane",children:p})]})," ",Object(s.jsx)("span",{className:"logoSlide",children:"Budget"})]})]})})})}}]),a}(n.Component),g=a(27),x=a(10),O=a.p+"static/media/001-popcorn.46ec6dfd.png",C=a.p+"static/media/002-harvest.bb6efbdd.png",f=a.p+"static/media/003-taxi.e0368ddd.png",v=a.p+"static/media/004-credit-card.9d91e6f9.png",y=a.p+"static/media/006-house.f0ef691f.png",N=a(11),I=a.n(N),S=Object(s.jsx)(j.a,{icon:m.c}),F=Object(s.jsx)(j.a,{icon:m.d}),w=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).handleChange=function(t){e.setState(Object(g.a)({},t.target.name,t.target.value))},e.calculateIncome=function(){var t=e.props.userIncome*e.props.targetRate;e.setState({convertedIncome:t.toFixed(2)},(function(){e.calculateSurplusShortage()}))},e.calculateSurplusShortage=function(){var t=e.state.convertedIncome-e.state.totalExpenses;e.setState({surplusShortage:t.toFixed(2)})},e.calculateTotalExpenses=function(){var t=[e.state.food,e.state.housing,e.state.bills,e.state.transport,e.state.entertainment].map((function(e){return parseFloat(e)})).reduce((function(e,t){return e+t}));e.props.targetRate?e.setState({totalExpenses:t.toFixed(2)},(function(){e.calculateIncome()})):I.a.fire({text:"Please select target currency.",showClass:{popup:"animate__animated animate__fadeInDown"},hideClass:{popup:"animate__animated animate__fadeOutUp"}})},e.state={housing:0,bills:0,entertainment:0,food:0,transport:0,convertedIncome:0,totalExpenses:0,surplusShortage:0},e.handleChange=e.handleChange.bind(Object(x.a)(e)),e}return Object(o.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"expenses",children:[Object(s.jsx)("h3",{children:"Monthly Budget"}),Object(s.jsxs)("div",{className:"expense",children:[Object(s.jsxs)("div",{className:"labelLogo",children:[Object(s.jsx)("img",{src:y,alt:"little icon representing housing"}),Object(s.jsx)("label",{htmlFor:"housing",children:"Housing"})]}),Object(s.jsx)("input",{name:"housing",type:"text",id:"housing",onChange:this.handleChange,value:this.state.expensesArray})]}),Object(s.jsxs)("div",{className:"expense",children:[Object(s.jsxs)("div",{className:"labelLogo",children:[Object(s.jsx)("img",{src:v,alt:"little icon representing bills"}),Object(s.jsx)("label",{htmlFor:"bills",children:"Bills"})]}),Object(s.jsx)("input",{name:"bills",type:"text",id:"bills",onChange:this.handleChange,value:this.state.expensesArray})]}),Object(s.jsxs)("div",{className:"expense",children:[Object(s.jsxs)("div",{className:"labelLogo",children:[Object(s.jsx)("img",{src:C,alt:"little icon representing food"}),Object(s.jsx)("label",{htmlFor:"food",children:"Food"})]}),Object(s.jsx)("input",{name:"food",type:"text",id:"food",onChange:this.handleChange,value:this.state.expensesArray})]}),Object(s.jsxs)("div",{className:"expense",children:[Object(s.jsxs)("div",{className:"labelLogo",children:[Object(s.jsx)("img",{src:f,alt:"little icon representing transport"}),Object(s.jsx)("label",{htmlFor:"transport",children:"Transport"})]}),Object(s.jsx)("input",{name:"transport",type:"text",id:"transport",onChange:this.handleChange,value:this.state.expensesArray})]}),Object(s.jsxs)("div",{className:"expense",children:[Object(s.jsxs)("div",{className:"labelLogo",children:[Object(s.jsx)("img",{src:O,alt:"little icon representing entertainment"}),Object(s.jsx)("label",{htmlFor:"entertainment",children:"Entertainment"})]}),Object(s.jsx)("input",{name:"entertainment",type:"text",id:"entertainment",onChange:this.handleChange,value:this.state.expensesArray})]}),Object(s.jsx)("div",{className:"totalExpenses",children:Object(s.jsx)("button",{className:"calculateTotal",onClick:this.calculateTotalExpenses,children:"Calculate Total"})})]}),Object(s.jsx)("div",{className:"results",children:Object(s.jsxs)("div",{className:"resultsFlex",children:[Object(s.jsxs)("p",{children:["Monthly Expenses",Object(s.jsx)("br",{}),Object(s.jsxs)("span",{className:"resultStyle",children:["$",this.state.totalExpenses]})]}),Object(s.jsxs)("p",{children:["Converted Income",Object(s.jsx)("br",{}),Object(s.jsxs)("span",{className:"resultStyle",children:["$",(new Intl.NumberFormat).format(this.state.convertedIncome)]}),"\xa0",this.props.targetCurrencyCode]}),this.state.surplusShortage>-1?Object(s.jsxs)("p",{children:["Awesome! ",Object(s.jsx)("span",{className:"plane",children:S})," ",Object(s.jsx)("br",{}),Object(s.jsxs)("span",{className:"resultStyle",children:["$",(new Intl.NumberFormat).format(this.state.surplusShortage)]}),"\xa0",this.props.targetCurrencyCode,Object(s.jsx)("p",{className:"small",children:"You've got extra cash to save for a rainy day."})]}):Object(s.jsxs)("p",{children:["Uh-oh! ",Object(s.jsx)("span",{className:"plane",children:F})," ",Object(s.jsx)("br",{}),Object(s.jsxs)("span",{className:"resultStyle",children:["$",(new Intl.NumberFormat).format(this.state.surplusShortage)]}),"\xa0",this.props.targetCurrencyCode,Object(s.jsx)("p",{className:"small",children:"Looks like you're spending a little too much."})]})]})})]})}}]),a}(n.Component),k=a(15),_=a.n(k),E=a.p+"static/media/money.5d042233.png",A=Object(s.jsx)(j.a,{icon:m.b}),L=(j.a,m.a,function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).handleIncomeInputChange=function(t){var a=t.target.value;isNaN(a)?e.setState({isIncomeValid:!0}):""===a?e.setState({isIncomeValid:!0,userIncome:a}):e.setState({userIncome:a,isIncomeValid:!1})},e.handleCurrentChange=function(t){var a=t.target.value,s=e.state.countryNames.filter((function(e){if(e.currencyCode===a)return e.flag}))[0].flag;e.setState({currentCurrencyCode:a,flag:s},(function(){e.getCurrencies()}))},e.handleTargetChange=function(t){var a=t.target.value,s=e.state.countryNames.filter((function(e){if(e.currencyCode===a)return e.flag}))[0].flag;e.setState({targetCurrencyCode:a,targetFlag:s},(function(){e.getCurrencies()}))},e.getCurrencies=function(){_()({url:"https://api.exchangeratesapi.io/latest?base=".concat(e.state.currentCurrencyCode,"&symbols=").concat(e.state.targetCurrencyCode)}).then((function(t){var a=e.state.targetCurrencyCode,s=t.data.rates[a];e.setState({targetRate:s})})).catch((function(e){I.a.fire({text:"Sorry, looks we don't have one of your currencies in our database yet, but we're working on it.",showClass:{popup:"animate__animated animate__fadeInDown"},hideClass:{popup:"animate__animated animate__fadeOutUp",confirmButtonColor:"#81003c"}})}))},e.state={countryNames:[],currentCurrencyCode:"",targetCurrencyCode:"",flag:"",targetFlag:"https://restcountries.eu/data/zwe.svg",userIncome:0,targetRate:0,isIncomeValid:!1},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;_()({url:"https://restcountries.eu/rest/v2/all"}).then((function(t){var a=t.data,s=[];a.forEach((function(t){var a=t.name,n=t.flag;t.currencies.forEach((function(t){var c=t.code;s.push({name:a,currencyCode:c,flag:n}),e.setState({countryNames:s,currentCurrencyCode:c,flag:n})}))}))}))}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(b,{}),Object(s.jsx)("div",{className:"wrapper",children:Object(s.jsxs)("div",{className:"mainContainer",children:[Object(s.jsxs)("div",{className:"incomeInputArea",children:[Object(s.jsx)("h3",{children:"Let's get started!"}),Object(s.jsxs)("div",{className:"labelLogoIncome",children:[Object(s.jsx)("label",{htmlFor:"incomeAmount",className:"srOnly",children:"Income Amount:"}),Object(s.jsx)("input",{type:"number",id:"incomeAmount",value:this.state.userIncome,onChange:this.handleIncomeInputChange,placeholder:"Monthly Income"}),Object(s.jsx)("img",{src:E,alt:"little logo for cash"})]}),this.state.isIncomeValid?Object(s.jsx)("p",{className:"errorMessage",children:"Please enter a number value"}):Object(s.jsxs)("p",{className:"errorMessage",children:[" Your monthly income",Object(s.jsx)("span",{className:"point",children:A})," "]}),Object(s.jsxs)("div",{className:"incomeDrop",children:[Object(s.jsx)("select",{className:"incomeDropdown",onChange:this.handleCurrentChange,children:this.state.countryNames.map((function(e,t){return Object(s.jsx)("option",{value:e.currencyCode,children:"".concat(e.name,"  |  ").concat(e.currencyCode)},t)}))}),Object(s.jsx)("div",{className:"currentCodeImg",children:Object(s.jsx)("img",{src:"".concat(this.state.flag),alt:"".concat(this.state.flag)})}),Object(s.jsx)("div",{className:"under",children:Object(s.jsxs)("p",{className:"errorMessage",children:["Income currency",Object(s.jsx)("span",{className:"point",children:A})]})})]}),Object(s.jsxs)("div",{className:"targetDropdown",children:[Object(s.jsx)("select",{className:"budgetDropdown",onChange:this.handleTargetChange,children:this.state.countryNames.map((function(e,t){return Object(s.jsx)("option",{value:e.currencyCode,children:"".concat(e.name," | ").concat(e.currencyCode)},t)}))}),Object(s.jsx)("div",{className:"currentCodeImg",children:Object(s.jsx)("img",{src:"".concat(this.state.targetFlag),alt:"".concat(this.state.targetFlag)})}),Object(s.jsx)("div",{className:"under",children:Object(s.jsxs)("p",{className:"errorMessage",children:["Target currency",Object(s.jsx)("span",{className:"point",children:A})]})})]})]}),Object(s.jsx)("section",{className:"target",children:Object(s.jsx)(w,{currentCurrencyCode:this.state.currentCurrencyCode,parentCallback:this.callbackFunction,targetRate:this.state.targetRate,userIncome:this.state.userIncome,targetCurrencyCode:this.state.targetCurrencyCode})})]})})]})}}]),a}(n.Component)),T=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,55)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),s(e),n(e),c(e),r(e)}))};l.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(L,{})}),document.getElementById("root")),T()}},[[54,1,2]]]);
//# sourceMappingURL=main.7eb2195b.chunk.js.map