(function(e){function t(t){for(var r,c,l=t[0],u=t[1],i=t[2],b=0,d=[];b<l.length;b++)c=l[b],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);s&&s(t);while(d.length)d.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,l=1;l<n.length;l++){var u=n[l];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var s=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"05e7":function(e,t,n){},"0c96":function(e,t,n){},"15d5":function(e,t,n){"use strict";n("deca")},"1f0f":function(e,t,n){"use strict";n("05e7")},"39c2":function(e,t,n){e.exports=n.p+"img/1217-WI-APHIST-01.9d94301b.jpg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o={class:"top-bar"},a={class:"logo"},c=Object(r["h"])("h1",null,[Object(r["g"])("Gets"),Object(r["h"])("span",null,"Movies")],-1),l={class:"search"},u=Object(r["h"])("input",{class:"input-search",type:"text",placeholder:"search"},null,-1),i={key:0,class:"genre"},s=Object(r["h"])("footer",null,[Object(r["h"])("p",null,[Object(r["h"])("span",null,"gets"),Object(r["g"])("Movies © 2021")])],-1);function b(e,t,n,b,d,j){var O=Object(r["v"])("router-view");return Object(r["q"])(),Object(r["e"])(r["a"],null,[Object(r["h"])("header",null,[Object(r["h"])("div",o,[Object(r["h"])("div",a,[Object(r["h"])("div",{onClick:t[1]||(t[1]=function(){return b.toHomePage&&b.toHomePage.apply(b,arguments)})},[c])]),Object(r["h"])("div",l,[u,Object(r["h"])("button",{class:"search-btn",onClick:t[2]||(t[2]=function(){return b.searchMovies&&b.searchMovies.apply(b,arguments)})},"search")])]),b.genre?(Object(r["q"])(),Object(r["e"])("div",i,[Object(r["h"])("ul",null,[Object(r["h"])("li",{onClick:t[3]||(t[3]=function(){return b.genreHandler&&b.genreHandler.apply(b,arguments)})},"action"),Object(r["h"])("li",{onClick:t[4]||(t[4]=function(){return b.genreHandler&&b.genreHandler.apply(b,arguments)})},"horror"),Object(r["h"])("li",{onClick:t[5]||(t[5]=function(){return b.genreHandler&&b.genreHandler.apply(b,arguments)})},"animated"),Object(r["h"])("li",{onClick:t[6]||(t[6]=function(){return b.genreHandler&&b.genreHandler.apply(b,arguments)})},"comedy"),Object(r["h"])("li",{onClick:t[7]||(t[7]=function(){return b.genreHandler&&b.genreHandler.apply(b,arguments)})},"adventure"),Object(r["h"])("li",{onClick:t[8]||(t[8]=function(){return b.genreHandler&&b.genreHandler.apply(b,arguments)})},"sci-fi"),Object(r["h"])("li",{onClick:t[9]||(t[9]=function(){return b.genreHandler&&b.genreHandler.apply(b,arguments)})},"drama"),Object(r["h"])("li",{onClick:t[10]||(t[10]=function(){return b.genreHandler&&b.genreHandler.apply(b,arguments)})},"CRIME"),Object(r["h"])("li",{onClick:t[11]||(t[11]=function(){return b.genreHandler&&b.genreHandler.apply(b,arguments)})},"MYSTERY"),Object(r["h"])("li",{onClick:t[12]||(t[12]=function(){return b.genreHandler&&b.genreHandler.apply(b,arguments)})},"THRILLER")])])):Object(r["f"])("",!0)]),Object(r["h"])("main",null,[Object(r["h"])(O,{genre:b.genre,searchText:b.searchText},null,8,["genre","searchText"])]),s],64)}var d=n("6c02"),j={name:"home",setup:function(){var e=["Animated","Horror","Action","Comedy","Adventure","Drama","CRIME","MYSTERY","THRILLER"],t=Object(d["d"])(),n=Math.floor(8*Math.random())+1,o=Object(r["t"])(e[n]),a=Object(r["t"])("Category"),c=function(){t.push({name:"Home"}),o.value=e[n],a.value="Category"},l=function(e){t.push({name:"Home"}),a.value="Category",o.value=e.target.textContent},u=function(){t.push({name:"Home"}),a.value="Search for",o.value=document.querySelector(".input-search").value};return{router:t,genre:o,toHomePage:c,searchText:a,randomSearch:n,genreHandler:l,categoryArray:e,searchMovies:u}}};n("d30e");j.render=b;var O=j,v=n("81b2"),g=n.n(v),h={class:"home"},f={key:0,class:"movies"},p={key:0,class:"category"},m={key:1,class:"category"},w=Object(r["h"])("h1",null,[Object(r["g"])("category : "),Object(r["h"])("span",null,"animated")],-1),y={class:"movies-list"},k={key:1,src:g.a,alt:""},_={class:"movie-title"},E={class:"release-date"},x={key:4,class:"next-n-prev"},V=Object(r["h"])("i",{class:"fa fa-angle-left","aria-hidden":"true"},null,-1),H=Object(r["h"])("i",{class:"fa fa-angle-right","aria-hidden":"true"},null,-1);function N(e,t,n,o,a,c){var l=Object(r["v"])("router-link"),u=Object(r["v"])("Loading"),i=Object(r["v"])("MoviesNotfound"),s=Object(r["v"])("NetWorkError");return Object(r["q"])(),Object(r["e"])("div",h,[o.newMoviesData&&1!=o.moviesNotFonudError&&1!=o.netWorkError?(Object(r["q"])(),Object(r["e"])("div",f,[n.genre?(Object(r["q"])(),Object(r["e"])("div",p,[Object(r["h"])("h1",null,[Object(r["g"])(Object(r["x"])(n.searchText)+" : ",1),Object(r["h"])("span",null,Object(r["x"])(n.genre),1)])])):(Object(r["q"])(),Object(r["e"])("div",m,[w])),Object(r["h"])("div",y,[(Object(r["q"])(!0),Object(r["e"])(r["a"],null,Object(r["u"])(o.newMoviesData,(function(e){return Object(r["q"])(),Object(r["e"])(l,{class:"movie",key:e.imdbID,to:{name:"MovieDetails",params:{id:e.imdbID}},imdbID:e.imdbID},{default:Object(r["A"])((function(){return["N/A"!=e.Poster?(Object(r["q"])(),Object(r["e"])("img",{key:0,class:"feature-img",src:e.Poster,alt:e.Title},null,8,["src","alt"])):(Object(r["q"])(),Object(r["e"])("img",k)),Object(r["h"])("h3",_,Object(r["x"])(e.Title),1),Object(r["h"])("p",E,"release date : "+Object(r["x"])(e.Year),1)]})),_:2},1032,["to","imdbID"])})),128))])])):Object(r["f"])("",!0),null==o.newMoviesData?(Object(r["q"])(),Object(r["e"])(u,{key:1})):Object(r["f"])("",!0),!0===o.moviesNotFonudError?(Object(r["q"])(),Object(r["e"])(i,{key:2})):Object(r["f"])("",!0),!0===o.netWorkError?(Object(r["q"])(),Object(r["e"])(s,{key:3})):Object(r["f"])("",!0),o.newMoviesData&&1!=o.moviesNotFonudError&&1!=o.netWorkError?(Object(r["q"])(),Object(r["e"])("div",x,[Object(r["h"])("button",{onClick:t[1]||(t[1]=function(){return o.pageHandler&&o.pageHandler.apply(o,arguments)}),class:"prev-btn"},[V]),Object(r["h"])("button",{onClick:t[2]||(t[2]=function(){return o.pageHandler&&o.pageHandler.apply(o,arguments)}),class:"next-btn"},[H])])):Object(r["f"])("",!0)])}n("99af"),n("a9e3"),n("d3b7"),n("4d63"),n("ac1f"),n("25f0"),n("466d"),n("5319");var M={apiKey:"99732692"},q=function(e){var t=Object(r["t"])([]),n=function(){fetch("http://www.omdbapi.com/?apikey=".concat(M.apiKey,"&").concat(e)).catch((function(e){console.log(e),t.value={NetWorkError:e.message}})).then((function(e){return e.json()})).catch((function(n){if(console.log(n),console.log(13),console.log(n.message),"Unexpected token V in JSON at position 1427"==n.message){console.log("message"),console.log(e);var r=e.match(/\d+/),a=Number(r[0]);a++,console.log("this",a);var c=e.replace(new RegExp("[0-9]","g"),a);o(c)}else console.log("not message"),t.value={NotFoundError:"Error"}})).then((function(e){e.Search?(console.log(1),t.value=e.Search):e.Error?(t.value={NotFoundError:"Error"},console.log(e),console.log("errrr23")):(t.value=e,console.log(e))}))};n();var o=function n(r){fetch("http://www.omdbapi.com/?apikey=99732692&".concat(r)).catch((function(e){console.log(e),t.value={NetWorkError:e.message}})).then((function(e){return e.json()})).catch((function(r){if(console.log(r),console.log(13),console.log(r.message),"Unexpected token V in JSON at position 1427"==r.message){console.log("message"),console.log(e);var o=e.match(/\d+/),a=Number(o[0]);a++,console.log("this",a);var c=e.replace(new RegExp("[0-9]","g"),a);n(c)}else console.log("not message"),t.value={NotFoundError:"Error"}})).then((function(e){e.Search?(console.log(1),t.value=e.Search):e.Error?(t.value=e,console.log("errrr")):(t.value=e,console.log(e))}))};return console.log(t),{moviesData:t,moviesList:n,newMoviesList:o}},D=q,W=n("39c2"),C=n.n(W),S={class:"movies-not__found"},T=Object(r["h"])("div",{class:"text"},[Object(r["h"])("h1",null,"movies not found"),Object(r["h"])("p",null,"Sorry, no content matched your criteria."),Object(r["h"])("p",null," We apologize for any inconvenience, please hit back on your browser or use the search again ")],-1),P=Object(r["h"])("div",{class:"img"},[Object(r["h"])("img",{src:C.a,alt:"not-found"})],-1);function R(e,t,n,o,a,c){return Object(r["q"])(),Object(r["e"])("div",S,[T,P])}var F={};n("6d44");F.render=R;var L=F,I={class:"net-work-error"},z=Object(r["h"])("div",{class:"text"},[Object(r["h"])("h1",null,"Network Error"),Object(r["h"])("p",null,"Please check your internet connection"),Object(r["h"])("p",null," Checking the network cables, modem, and router Reconnecting to Wi-Fi ")],-1),A=Object(r["h"])("div",{class:"img"},[Object(r["h"])("img",{src:C.a,alt:"not-found"})],-1);function Y(e,t,n,o,a,c){return Object(r["q"])(),Object(r["e"])("div",I,[z,A])}var J={};n("1f0f");J.render=Y;var G=J,K={class:"loading"},U=Object(r["h"])("p",null,null,-1),$=Object(r["h"])("h1",null,"Loading",-1);function B(e,t){return Object(r["q"])(),Object(r["e"])("div",K,[U,$])}n("15d5");const Q={};Q.render=B;var X=Q,Z={props:["genre","searchText"],components:{MoviesNotfound:L,NetWorkError:G,Loading:X},setup:function(e){document.title="Home";var t=D("s=".concat(e.genre,"&page=1")),n=t.moviesData,o=Object(r["t"])(null),a=Object(r["t"])(!1),c=Object(r["t"])(!1);function l(){var t=navigator.onLine;if(!0===t){console.log("True",t),c.value=!1;var n=D("s=".concat(e.genre,"&page=1")),a=n.moviesData;Object(r["z"])(a,(function(){o.value=a._rawValue,a._rawValue.NetWorkError&&(c.value=!0,console.log("net out"),console.log(a))}))}else console.log("False",t),c.value=!0}Object(r["z"])(n,(function(){o.value=null,o.value=n._rawValue,n._rawValue.NetWorkError?(c.value=!0,console.log("net out"),console.log(n)):n._rawValue.NotFoundError&&1!=c.value&&(a.value=!0,console.log("dadw"))})),window.addEventListener("online",l),window.addEventListener("offline",l),Object(r["z"])((function(){return e.genre}),(function(){u=1,a.value=!1,c.value=!1,o.value=null;var t=D("s=".concat(e.genre)),n=t.moviesData;console.log("this home",n),Object(r["z"])(n,(function(){console.log("dsds",n),o.value=n._rawValue,n._rawValue.NotFoundError&&(a.value=!0),n._rawValue.NetWorkError&&(c.value=!0)}))}));var u=1,i=function(t){if("prev-btn"!=t.target.className){u++;var n=D("s=".concat(e.genre,"&page=").concat(u)),l=n.moviesData;o.value=null,a.value=!1,c.value=!1,Object(r["z"])(l,(function(){console.log("next",l),o.value=l._rawValue,l._rawValue.NetWorkError?c.value=!0:l._rawValue.Error?a.value=!0:l._rawValue.NotFoundError&&(a.value=!0,console.log(323322))}))}else{u--,u<=0&&(u=1);var i=D("s=".concat(e.genre,"&page=").concat(u)),s=i.moviesData;a.value=!1,c.value=!1,o.value=null,Object(r["z"])(s,(function(){o.value=s._rawValue,s._rawValue.NetWorkError?c.value=!0:s._rawValue.Error&&(a.value=!0)}))}};return{newMoviesData:o,pageHandler:i,moviesNotFonudError:a,netWorkError:c}}};n("e921");Z.render=N;var ee=Z,te={key:0,class:"movie-details"},ne={key:0},re=Object(r["h"])("i",{class:"fa fa-star","aria-hidden":"true"},null,-1),oe={key:1,class:"movie-info"},ae={key:0,class:"poster"},ce={key:1,class:"poster"},le=Object(r["h"])("img",{src:g.a,alt:""},null,-1),ue={class:"plot"},ie={class:"more-info"},se=Object(r["g"])(" Director: "),be=Object(r["g"])(" Writers: "),de=Object(r["g"])(" Stars: ");function je(e,t,n,o,a,c){var l=Object(r["v"])("Loading"),u=Object(r["v"])("MoviesNotfound"),i=Object(r["v"])("NetWorkError");return Object(r["q"])(),Object(r["e"])(r["a"],null,[Object(r["h"])(r["b"],{duration:750,"enter-active-class":"animate__animated animate__zoomIn","leave-active-class":"animate__animated animate__zoomIn"},{default:Object(r["A"])((function(){return[o.data?(Object(r["q"])(),Object(r["e"])("div",te,[o.data._rawValue.NewWorkError?Object(r["f"])("",!0):(Object(r["q"])(),Object(r["e"])("ul",ne,[Object(r["h"])("li",null,[Object(r["h"])("h1",null,Object(r["x"])(o.data._rawValue.Title),1),Object(r["g"])(" ( "+Object(r["x"])(o.data._rawValue.Released)+" ) ",1)]),Object(r["h"])("li",null,[re,Object(r["g"])(" "+Object(r["x"])(o.data._rawValue.imdbRating)+" ",1),Object(r["h"])("span",null,Object(r["x"])(o.data._rawValue.imdbVotes),1)])])),o.data._rawValue.NewWorkError?Object(r["f"])("",!0):(Object(r["q"])(),Object(r["e"])("div",oe,["N/A"!=o.data._rawValue.Poster?(Object(r["q"])(),Object(r["e"])("div",ae,[Object(r["h"])("img",{src:o.data._rawValue.Poster,alt:""},null,8,["src"])])):(Object(r["q"])(),Object(r["e"])("div",ce,[le])),Object(r["h"])("div",ue,[Object(r["h"])("p",null,Object(r["x"])(o.data._rawValue.Plot),1),Object(r["h"])("div",ie,[Object(r["h"])("p",null,Object(r["x"])(o.data._rawValue.Rated)+" | "+Object(r["x"])(o.data._rawValue.Runtime)+" | "+Object(r["x"])(o.data._rawValue.Genre)+" | "+Object(r["x"])(o.data._rawValue.Released)+" | "+Object(r["x"])(o.data._rawValue.Type)+" | Seasons : "+Object(r["x"])(o.data._rawValue.totalSeasons),1),Object(r["h"])("ul",null,[Object(r["h"])("li",null,[se,Object(r["h"])("span",null,Object(r["x"])(o.data._rawValue.Director),1)]),Object(r["h"])("li",null,[be,Object(r["h"])("span",null,Object(r["x"])(o.data._rawValue.Writer),1)]),Object(r["h"])("li",null,[de,Object(r["h"])("span",null,Object(r["x"])(o.data._rawValue.Actors),1)])])])])]))])):Object(r["f"])("",!0)]})),_:1}),null==o.data?(Object(r["q"])(),Object(r["e"])(l,{key:0})):Object(r["f"])("",!0),!0===o.moviesNotFonudError?(Object(r["q"])(),Object(r["e"])(u,{key:1})):Object(r["f"])("",!0),!0===o.netWorkError?(Object(r["q"])(),Object(r["e"])(i,{key:2})):Object(r["f"])("",!0)],64)}var Oe={props:["genre","searchText"],components:{MoviesNotfound:L,NetWorkError:G,Loading:X},data:function(){return{id:this.$route.params.id,genreValue:this.genre}},setup:function(){document.title="MoviesDetails";var e=Object(d["c"])();console.log(e.params.id);var t=D("i=".concat(e.params.id,"&plot=full")),n=t.moviesData;console.log(n);var o=Object(r["t"])(null),a=Object(r["t"])(!1),c=Object(r["t"])(!1);return console.log(n._rawValue),Object(r["z"])(n,(function(){if(console.log("moviesList",n),n._rawValue.Error)a.value=!0;else{if(n._rawValue.NetWorkError)return c.value=!0,void console.log(12345);n._rawValue.NotFoundError?1!=c.value&&(a.value=!0,console.log(54321)):(o.value=n,console.log("this si",o.value._rawValue),console.log(1))}})),{route:e,data:o,moviesNotFonudError:a,netWorkError:c}}};n("e25f");Oe.render=je;var ve=Oe,ge=[{path:"/",name:"Home",component:ee},{path:"/movieDetails/:id",name:"MovieDetails",component:ve}],he=Object(d["a"])({history:Object(d["b"])("/"),routes:ge}),fe=he;n("77ed");Object(r["d"])(O).use(fe).mount("#app")},"6d44":function(e,t,n){"use strict";n("0c96")},"81b2":function(e,t,n){e.exports=n.p+"img/DHbaSYYv_400x400.1072a6d2.jpg"},9742:function(e,t,n){},b039:function(e,t,n){},d30e:function(e,t,n){"use strict";n("b039")},deca:function(e,t,n){},e1ac:function(e,t,n){},e25f:function(e,t,n){"use strict";n("e1ac")},e921:function(e,t,n){"use strict";n("9742")}});
//# sourceMappingURL=app.c3b0649a.js.map