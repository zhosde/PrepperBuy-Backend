(this.webpackJsonpprepperbuy=this.webpackJsonpprepperbuy||[]).push([[0],{20:function(e,t,n){},41:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(33),a=n.n(s),i=(n(41),n(20),n(13)),o=n(2),u=n(3),d=n(5),l=n(4),h=n(7),j=n(9),p=n.n(j),b=n(6),O=n.p+"static/media/tibet-namtso.80365fc8.jpg",g=n(0),x=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e={color:"white"};return Object(g.jsxs)("section",{className:"home-page",children:[Object(g.jsx)("nav",{className:"home-page-nav",children:Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:Object(g.jsx)(b.c,{to:"/about",style:e,children:"About"})}),Object(g.jsx)("li",{children:Object(g.jsx)(b.c,{to:"/shop",style:e,children:"Shop"})}),Object(g.jsx)("li",{children:Object(g.jsx)("h1",{children:"PrepperBuy"})}),Object(g.jsx)("li",{children:Object(g.jsx)(b.c,{to:"/profile",style:e,children:"Profile"})}),Object(g.jsx)("li",{children:Object(g.jsx)(b.c,{to:"/cart",style:e,children:"Cart"})})]})}),Object(g.jsx)("img",{src:O,alt:"tibet namtso"}),Object(g.jsxs)("aside",{className:"quote",children:[Object(g.jsx)("p",{children:Object(g.jsx)("i",{children:"Always on the road"})}),Object(g.jsx)("p",{children:Object(g.jsx)("i",{children:"Always prepared"})})]})]})}}]),n}(r.Component),A=n(36),f=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(u.a)(n,[{key:"render",value:function(){return Object(g.jsx)("div",{className:"product-list",children:Object(g.jsx)("ul",{children:this.props.products.map((function(e){return Object(g.jsx)("li",{children:Object(g.jsxs)(b.b,{to:"/products/".concat(e._id),children:[Object(g.jsx)("img",{src:e.image}),Object(g.jsx)("h3",{children:e.name})]})},e._id)}))})})}}]),n}(r.Component),m=n(23),v=n.n(m),C=n(35),w=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={searchWord:"",SearchTheProduct:e.props.SearchTheProduct},e.handleSearch=function(){var t=Object(C.a)(v.a.mark((function t(n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({searchWord:n.target.value});case 2:e.state.SearchTheProduct(e.state.searchWord);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(u.a)(n,[{key:"render",value:function(){return Object(g.jsx)("section",{className:"sec-nav",children:Object(g.jsx)("div",{className:"searchbar",children:Object(g.jsx)("input",{type:"search",name:"search",placeholder:"Search...",value:this.state.searchWord,onChange:this.handleSearch})})})}}]),n}(r.Component),y=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={filterStr:""},e.SearchTheProduct=function(t){e.setState({filterStr:t})},e}return Object(u.a)(n,[{key:"getFilteredProducts",value:function(){var e=this;return Object(A.a)(this.props.products).filter((function(t){return t.name.toLowerCase().includes(e.state.filterStr.toLowerCase())}))}},{key:"render",value:function(){var e=this.getFilteredProducts();return Object(g.jsxs)("main",{children:[Object(g.jsx)("div",{children:Object(g.jsx)(w,{SearchTheProduct:this.SearchTheProduct})}),Object(g.jsx)("hr",{className:"hr-line"}),Object(g.jsx)("div",{children:Object(g.jsx)(f,{products:e})})]})}}]),n}(r.Component),I=new function e(){var t=this;Object(o.a)(this,e),this.signup=function(e,n){return t.service.post("/signup",{username:e,password:n}).then((function(e){return e.data}))},this.loggedin=function(){return t.service.get("/loggedin").then((function(e){return e.data}))},this.login=function(e,n){return t.service.post("/login",{username:e,password:n}).then((function(e){return e.data}))},this.logout=function(){return t.service.post("/logout",{}).then((function(e){return e.data}))},this.service=p.a.create({baseURL:"https://prepperbuy.herokuapp.com/api",withCredentials:!0})},B=n(15),k=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={username:"",password:""},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state,r=n.username,c=n.password;I.login(r,c).then((function(t){e.setState({username:"",password:""}),e.props.getUser(t,!0)})).catch((function(e){return console.log(e)}))},e.handleChange=function(t){var n=t.target,r=n.name,c=n.value;e.setState(Object(B.a)({},r,c))},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(g.jsxs)("div",{className:"login",children:[Object(g.jsx)("p",{children:"Already have an account?"}),Object(g.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(g.jsxs)("label",{children:["Username:",Object(g.jsx)("input",{type:"text",name:"username",value:this.state.username,onChange:this.handleChange})]}),Object(g.jsxs)("label",{children:["Password:",Object(g.jsx)("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleChange})]}),Object(g.jsx)("button",{type:"submit",children:" Login "})]})]})}}]),n}(r.Component),S=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={username:"",password:""},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state,r=n.username,c=n.password;I.signup(r,c).then((function(t){e.setState({username:"",password:""}),e.props.getUser(t,!0)})).catch((function(e){return console.log(e)}))},e.handleChange=function(t){var n=t.target,r=n.name,c=n.value;e.setState(Object(B.a)({},r,c))},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(g.jsxs)("div",{className:"signup",children:[Object(g.jsx)("p",{children:"Don't have an account?"}),Object(g.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(g.jsxs)("label",{children:["Username:",Object(g.jsx)("input",{type:"text",name:"username",value:this.state.username,onChange:this.handleChange})]}),Object(g.jsxs)("label",{children:["Password:",Object(g.jsx)("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleChange})]}),Object(g.jsx)("button",{type:"submit",children:" Signup "})]})]})}}]),n}(r.Component),N=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).logoutUser=function(){I.logout().then((function(){e.props.getUser(null,!1)}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.userData,r=t.userIsLoggedIn;return console.log(this.props),r?Object(g.jsx)("nav",{className:"nav-style",children:Object(g.jsxs)("ul",{children:[r&&Object(g.jsxs)("li",{children:["Welcome, ",n.username," "]}),Object(g.jsx)("li",{children:Object(g.jsx)(b.b,{to:"/shop",style:{textDecoration:"none"},children:"Products"})}),n.isAdmin&&Object(g.jsx)("li",{children:Object(g.jsx)(b.b,{to:"/addproduct",style:{textDecoration:"none"},children:"Add Product"})}),Object(g.jsx)("li",{children:Object(g.jsx)(b.b,{to:"/",children:Object(g.jsx)("button",{type:"submit",onClick:function(){return e.logoutUser()},children:"Logout"})})})]})}):Object(g.jsxs)("div",{className:"login-signup",children:[Object(g.jsx)(k,{getUser:this.props.getUser}),Object(g.jsx)(S,{getUser:this.props.getUser})]})}}]),n}(c.a.Component),D=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={name:e.props.theProduct.name,description:e.props.theProduct.description,category:e.props.theProduct.category,image:e.props.theProduct.image,price:e.props.theProduct.price,stocked:e.props.theProduct.stocked},e.getSingleProduct=function(){var t=e.props.match.params;p.a.get("".concat("https://prepperbuy.herokuapp.com/api","/products/").concat(t.id),{withCredentials:!0}).then((function(t){var n=t.data;e.setState(n)})).catch((function(e){console.log(e)}))},e.handleFormSubmit=function(t){var n=e.state.name,r=e.state.description,c=e.state.category,s=e.state.image,a=e.state.price,i=e.state.stocked;t.preventDefault(),p.a.put("".concat("https://prepperbuy.herokuapp.com/api","/products/").concat(e.props.theProduct._id),{name:n,description:r,category:c,image:s,price:a,stocked:i},{withCredentials:!0}).then((function(){e.getSingleProduct()})).catch((function(e){return console.log(e)}))},e.handleChange=function(t){var n=t.target,r=n.name,c=n.value;e.setState(Object(B.a)({},r,c))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getSingleProduct()}},{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{className:"edit-form",children:[Object(g.jsx)("hr",{}),Object(g.jsx)("h1",{children:"Edit"}),Object(g.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(g.jsx)("label",{children:"Name:"}),Object(g.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:function(t){return e.handleChange(t)}}),Object(g.jsx)("label",{children:"Category:"}),Object(g.jsx)("input",{type:"text",name:"category",value:this.state.category,onChange:function(t){return e.handleChange(t)}}),Object(g.jsx)("label",{children:"Price:"}),Object(g.jsx)("input",{type:"number",name:"price",value:this.state.price,onChange:function(t){return e.handleChange(t)}}),Object(g.jsx)("label",{children:"Stocked:"}),Object(g.jsxs)("select",{value:this.state.stocked,onChange:function(t){return e.handleChange(t)},children:[Object(g.jsx)("option",{value:"true",children:"True"}),Object(g.jsx)("option",{value:"false",children:"False"})]}),Object(g.jsx)("label",{children:"Description:"}),Object(g.jsx)("textarea",{name:"description",value:this.state.description,onChange:function(t){return e.handleChange(t)}}),Object(g.jsx)("label",{children:"Image:"}),Object(g.jsx)("input",{type:"file",name:"image",onChange:function(t){return e.handleChange(t)}}),Object(g.jsx)("input",{type:"submit",value:"Submit"})]})]})}}]),n}(r.Component),P=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).renderEditForm=function(){return Object(g.jsx)(D,Object(i.a)({theProduct:e.props.requestedProduct},e.props))},e.deleteProduct=function(){var t=e.props.match.params;p.a.delete("".concat("https://prepperbuy.herokuapp.com/api","/products/").concat(t.id),{withCredentials:!0}).then((function(){e.props.history.push("/shop")})).catch((function(e){console.log(e)}))},e.handleToCartBtn=function(t){t.preventDefault(),e.props.addToCart(e.props.requestedProduct)},e.ownershipCheck=function(){if(e.props.user&&e.props.user.isAdmin)return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("div",{children:e.renderEditForm()}),Object(g.jsx)("div",{children:Object(g.jsx)("button",{className:"delete-btn",onClick:function(){return e.deleteProduct(e.props.requestedProduct._id)},children:"Delete product"})})]})},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("hr",{className:"hr-line"}),this.props.requestedProduct&&Object(g.jsxs)("div",{className:"product-detail",children:[Object(g.jsx)("div",{children:Object(g.jsx)("img",{src:this.props.requestedProduct.image})}),Object(g.jsxs)("div",{className:"product-info",children:[Object(g.jsx)("h1",{children:this.props.requestedProduct.name}),Object(g.jsxs)("p",{children:[this.props.requestedProduct.price," \u20ac"]}),Object(g.jsx)("br",{}),Object(g.jsx)("button",{onClick:this.handleToCartBtn,children:"Add In Cart"}),Object(g.jsx)("br",{}),Object(g.jsx)(b.b,{to:"/shop",children:"Back to products"}),Object(g.jsx)("hr",{}),Object(g.jsx)("p",{children:this.props.requestedProduct.description})]})]}),Object(g.jsxs)("div",{children:[" ",this.ownershipCheck()," "]})]})}}]),n}(r.Component),L=(r.Component,function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).handleFormSubmit=function(t){if(t.preventDefault(),null!==e.props.user){var n=[e.props.productsInCart],r=e.props.user._id;return p.a.post("".concat("https://prepperbuy.herokuapp.com/api","/orders"),{orderedItem:n,userId:r},{withCredentials:!0}).then((function(e){return Object(g.jsx)(N,{theOrder:e})}))}e.props.history.push("/profile")},e.handleChange=function(t){t.preventDefault(),e.props.handleChangeQty(t,e.props.productsInCart._id)},e.getProductDetails=function(t){var n=e.props.listOfProducts.find((function(e){return e._id===t}));return Object(g.jsx)("div",{className:"cart-list",children:Object(g.jsx)("ul",{children:Object(g.jsxs)("li",{children:[Object(g.jsxs)(b.b,{to:"/products/".concat(n._id),children:[Object(g.jsx)("img",{src:n.image}),Object(g.jsx)("h3",{children:n.name})]}),Object(g.jsxs)("label",{children:["Qty:",Object(g.jsx)("input",{type:"number",name:"qty",value:e.props.productsInCart[t],onChange:function(t){return e.handleChange}})]}),Object(g.jsx)("p",{children:n.price})]},n._id)})})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(g.jsx)(g.Fragment,{children:0!==Object.keys(this.props.productsInCart).length?Object(g.jsxs)("div",{className:"order-form",children:[Object.keys(this.props.productsInCart).map((function(t){return console.log(Object.values(e.props.productsInCart)),e.getProductDetails(t)})),Object(g.jsx)("label",{children:"Total Price: "}),Object(g.jsx)("form",{onSubmit:this.handleFormSubmit,children:Object(g.jsx)("input",{type:"submit",value:"Submit"})})]}):Object(g.jsx)("h1",{children:"Currently no product in cart "})})}}]),n}(c.a.Component)),H=p.a.create({baseURL:"https://prepperbuy.herokuapp.com/api",withCredentials:!0}),Y=function(e){throw e},F=function(e){return H.post("/upload",e).then((function(e){return e.data})).catch(Y)},J=function(e){return H.post("/products",e).then((function(e){return e.data})).catch(Y)},U=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={name:"",description:"",category:"",image:"",price:0,stocked:!0},e.handleFormSubmit=function(t){t.preventDefault(),J(e.state).then((function(e){return console.log("added new product: ",e),Object(g.jsx)(h.a,{to:"/shop"})})).then((function(){e.setState({name:"",description:"",category:"",image:"",price:0,stocked:!0})})).catch((function(e){return console.log("Error while adding the new product: ",e)}))},e.handleChange=function(t){var n=t.target,r=n.name,c=n.value;e.setState(Object(B.a)({},r,c))},e.handleFileUpload=function(t){var n=new FormData;n.append("image",t.target.files[0]),F(n).then((function(t){e.setState({image:t.imageUrl})})).catch((function(e){return console.log("Error while uploading the file: ",e)}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(g.jsx)("div",{className:"add-product",children:Object(g.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(g.jsx)("label",{children:"Name:"}),Object(g.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:function(t){return e.handleChange(t)}}),Object(g.jsx)("label",{children:"Category:"}),Object(g.jsx)("input",{type:"text",name:"category",value:this.state.category,onChange:function(t){return e.handleChange(t)}}),Object(g.jsx)("label",{children:"Description:"}),Object(g.jsx)("textarea",{name:"description",value:this.state.description,onChange:function(t){return e.handleChange(t)}}),Object(g.jsx)("label",{children:"Price:"}),Object(g.jsx)("input",{type:"number",name:"price",value:this.state.price,onChange:function(t){return e.handleChange(t)}}),Object(g.jsx)("label",{children:"Stocked:"}),Object(g.jsxs)("select",{value:this.state.stocked,onChange:function(t){return e.handleChange(t)},children:[Object(g.jsx)("option",{value:"true",children:"True"}),Object(g.jsx)("option",{value:"false",children:"False"})]}),Object(g.jsx)("label",{children:"Image:"}),Object(g.jsx)("input",{type:"file",name:"image",onChange:this.handleFileUpload}),Object(g.jsx)("input",{type:"submit",value:"Submit"})]})})}}]),n}(r.Component),W=n.p+"static/media/let me open my bunker.413976c1.gif",G=n.p+"static/media/starter-pack.8c2737db.jpeg",M=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(g.jsxs)("div",{style:{backgroundColor:"lightblue",width:"auto",height:"100vh"},children:[Object(g.jsx)("img",{style:{width:"90vh",marginLeft:"6vh",marginTop:"6vh",position:"absolute"},src:G,alt:"prepper starter pack"}),Object(g.jsxs)("div",{style:{marginLeft:"105vh",paddingTop:"35vh",position:"relative",fontSize:"24px"},children:[Object(g.jsx)("span",{style:{marginLeft:"10vh"},children:Object(g.jsx)(b.b,{to:"/shop",children:Object(g.jsxs)("i",{children:["Time to get my stash...",Object(g.jsx)("br",{}),"Keep calm and go shopping..."]})})}),Object(g.jsx)("img",{style:{marginTop:"16vh"},src:W,alt:"john wick movie gif"})]})]})}}]),n}(r.Component),Q=n.p+"static/media/main-logo.7fabedc8.png",R=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e={color:"black"};return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:"navbar",children:[Object(g.jsx)("div",{children:Object(g.jsx)(b.c,{to:"/",children:Object(g.jsx)("img",{id:"logo",src:Q,alt:"logo"})})}),Object(g.jsxs)("div",{className:"navbar-icon",children:[Object(g.jsx)("div",{children:Object(g.jsx)(b.c,{to:"/profile",style:e,children:Object(g.jsx)("img",{id:"profile-icon",src:"data:image/png;base64,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",alt:"profile icon"})})}),Object(g.jsx)("div",{children:Object(g.jsxs)(b.c,{to:"/cart",style:e,children:[Object(g.jsx)("img",{src:"data:image/png;base64,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",alt:"cart icon"})," (",this.props.numOfProductsInCart,")"]})}),Object(g.jsx)("div",{children:Object(g.jsx)(b.c,{to:"/profile",style:e,children:Object(g.jsx)("img",{src:"data:image/png;base64,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",alt:"heart icon"})})})]})]})})}}]),n}(r.Component),E=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={isLoggedIn:!1,user:null,listOfProducts:[],productsInCart:{}},e.getAllProducts=function(){return p.a.get("".concat("https://prepperbuy.herokuapp.com/api","/products"),{withCredentials:!0})},e.handleAddToCart=function(t){e.setState((function(e){return e.productsInCart[t._id]=(e.productsInCart[t._id]||0)+1,{productsInCart:e.productsInCart}}))},e.handleQtyChange=function(t,n){var r=JSON.parse(JSON.stringify(e.state.productsInCart));r[n]=t.targt.value,e.setState({productsInCart:r})},e.getTheUser=function(t,n){e.setState({user:t,isLoggedIn:n})},e.fetchUser=function(){if(null===e.state.user)return I.loggedin()},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.fetchUser().then((function(t){e.setState({user:t,isLoggedIn:!0})})).catch((function(t){e.setState({user:null,isLoggedIn:!1})})),this.getAllProducts().then((function(t){e.setState({listOfProducts:t.data})})).catch((function(e){console.log("error getting products: ",e)}))}},{key:"render",value:function(){var e=this;return Object(g.jsx)("div",{className:"App",children:Object(g.jsxs)(h.d,{children:[Object(g.jsx)(h.b,{exact:!0,path:"/",component:x}),Object(g.jsx)(h.b,{exact:!0,path:"/about",component:M}),";",Object(g.jsxs)("div",{children:[Object(g.jsx)(R,{numOfProductsInCart:Object.keys(this.state.productsInCart).length}),Object(g.jsx)(h.b,{exact:!0,path:"/profile",render:function(t){return Object(g.jsx)(N,Object(i.a)(Object(i.a)({},t),{},{userData:e.state.user,userIsLoggedIn:e.state.isLoggedIn,getUser:e.getTheUser,products:e.state.listOfProducts}))}}),Object(g.jsx)(h.b,{exact:!0,path:"/cart",render:function(t){return Object(g.jsx)(L,Object(i.a)(Object(i.a)({},t),{},{handleQtyChange:e.handleQtyChange,productsInCart:e.state.productsInCart,listOfProducts:e.state.listOfProducts,user:e.state.user}))}}),Object(g.jsx)(h.b,{exact:!0,path:"/shop",render:function(t){return Object(g.jsx)(y,Object(i.a)(Object(i.a)({},t),{},{products:e.state.listOfProducts}))}}),Object(g.jsx)(h.b,{exact:!0,path:"/addproduct",render:function(t){return Object(g.jsx)(U,Object(i.a)(Object(i.a)({},t),{},{user:e.state.user,products:e.state.listOfProducts}))}}),Object(g.jsx)(h.b,{exact:!0,path:"/products/:id",render:function(t){var n=e.state.listOfProducts.find((function(e){return e._id===t.match.params.id}));return Object(g.jsx)(P,Object(i.a)(Object(i.a)({addToCart:e.handleAddToCart,requestedProduct:n},t),{},{user:e.state.user}))}})]})]})})}}]),n}(r.Component),T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,69)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};n(67);a.a.render(Object(g.jsx)(b.a,{children:Object(g.jsx)(E,{})}),document.getElementById("root")),T()}},[[68,1,2]]]);
//# sourceMappingURL=main.9626c68e.chunk.js.map