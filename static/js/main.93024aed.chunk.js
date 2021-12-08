(this["webpackJsonpcentres-pt-access"]=this["webpackJsonpcentres-pt-access"]||[]).push([[0],{139:function(e,t){},154:function(e){e.exports=JSON.parse('{"1":{"labels":["Greater Sydney","Western City","Central City","Eastern City","North","South"],"datasets":[{"label":"Every 10 minutes","data":[77,45,81,97,81,78]},{"label":"Every 20 minutes","data":[84,58,90,99,87,85]},{"label":"Every 30 minutes","data":[88,67,95,99,91,89]},{"label":"At least once","data":[95,84,99,100,96,97]}]},"2":{"labels":["Greater Sydney","Western City","Central City","Eastern City","North","South"],"datasets":[{"label":"Every 10 minutes","data":[40,30,41,76,29,7]},{"label":"Every 20 minutes","data":[47,41,49,80,33,13]},{"label":"Every 30 minutes","data":[51,49,55,82,35,18]},{"label":"At least once","data":[64,68,72,91,45,32]}]},"3":{"labels":["Greater Sydney","Western City","Central City","Eastern City","North","South"],"datasets":[{"label":"Every 10 minutes","data":[65,23,62,87,77,76]},{"label":"Every 20 minutes","data":[74,32,77,92,84,84]},{"label":"Every 30 minutes","data":[79,38,87,94,89,89]},{"label":"At least once","data":[89,60,96,99,96,97]}]},"4":{"labels":["Greater Sydney","Western City","Central City","Eastern City","North","South"],"datasets":[{"label":"Every 10 minutes","data":[68,41,74,75,76,79]},{"label":"Every 20 minutes","data":[75,49,81,78,82,86]},{"label":"Every 30 minutes","data":[78,54,86,80,86,89]},{"label":"At least once","data":[88,69,95,86,95,98]}]}}')},239:function(e,t,n){},264:function(e,t){},268:function(e,t,n){},269:function(e,t,n){},270:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(77),c=n.n(a),i=(n.p,n(239),n(17)),s=n(15),o=n.n(s),l=n(25),d=n(11),u=n(95),b=n(327),y=n(31),p=n(320),j=n(218),h=n(214),f=n(329),m=n(207),g=n.n(m),x={"Every 10 minutes":[103,32,68],"Every 20 minutes":[173,70,108],"Every 30 minutes":[227,129,145],"At least once":[255,198,196]},v=n(72),O=n(10),C={latitude:-33.878197,longitude:151.148648,zoom:10};Object(u.d)({username:"gsc-admin",apiKey:"default_public"});var S=function(){var e=Object(v.c)((function(e){return e.centreTypeId})),t=Object(r.useState)([]),n=Object(d.a)(t,2),a=n[0],c=n[1],s="SELECT ST_X(ST_Centroid(the_geom)) x, ST_Y(ST_CENTROID(the_geom)) y,district from districtboundary";Object(r.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://gsc-admin.carto.com/api/v2/sql?q=".concat(encodeURIComponent(s)));case 2:return t=e.sent,c(t.data.rows.map((function(e){e.district,e.x,e.y;return{text:e.district,position:[e.x,e.y]}}))),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),console.log("laoding..");var u=new j.a({id:"text-layer",data:a,pickable:!1,sizeMinPixels:2,sizeMaxPixels:15,getSize:20,getAngle:0,getTextAnchor:"middle",getAlignmentBaseline:"center",getBackgroundColor:[255,255,255]}),m=new b.a({id:"access-uni",type:y.f.QUERY,data:'SELECT cartodb_id,the_geom_webmercator,centre_type,frequency,sym_code,percentage FROM "gsc-admin".thirtyminutescatchemntsbyfrequency_rings where centre_typeid ='.concat(e," order by frequency desc"),getFillColor:function(e){return[].concat(Object(i.a)(x[e.properties.sym_code]),[200])},getLineColor:function(e){return x[e.properties.sym_code]},lineWidthMinPixels:1,pickable:!0}),S=1===e?"centretypeid <=3":"centretypeid = "+e,E={2:{fc:[189,194,26,100],ec:[189,194,26]},3:{fc:[61,176,0,100],ec:[61,176,0]},4:{fc:[255,255,255,200],ec:[0,0,0]}},w=new b.a({id:"centres",type:y.f.QUERY,data:'SELECT cartodb_id,the_geom_webmercator,centrename,centretype,centretypeid FROM "gsc-admin".centres_metro_strategic_largelocal where '.concat(S),getFillColor:function(e){return E[e.properties.centretypeid].fc},getLineColor:function(e){return E[e.properties.centretypeid].ec},radiusScale:1,pointRadiusMinPixels:1,getRadius:function(e){return 1/e.properties.centretypeid*1e3},pickable:!0,lineWidthMinPixels:1.5}),_=new b.a({id:"district",type:y.f.QUERY,data:'select the_geom_webmercator, district from "gsc-admin".districtboundary ',getFillColor:[0,0,0,0],getLineColor:[35,35,35],lineWidthMinPixels:1.2,pickable:!1});return Object(O.jsx)("div",{children:Object(O.jsx)(f.a,{width:"100%",height:"100%",initialViewState:C,getTooltip:function(e){var t=e.object;if(!t)return!1;var n=t.properties,r=n.centre_type,a=(n.frequency,n.sym_code),c=(n.percentage,n.centrename),i=n.centretype,s="<table>";return s+=r?"<tr><td>Catchment type:</td><td>".concat(r,"</td></tr>"):"",s+=a?"<tr ><td>Service frequency:</td><td>".concat(a,"</td></tr>"):"",s+=i?"<tr><td>Centre type:</td><td>".concat(i,"</td></tr>"):"",s+=c?"<tr><td>Name:</td><td>".concat(c,"</td></tr>"):"",{html:s+="</table>",style:{fontSize:"0.8em"}}},controller:!0,layers:[m,_,w,u],children:Object(O.jsx)(h.a,{reuseMaps:!0,mapStyle:p.a.DARK_MATTER,mapboxApiAccessToken:"pk.eyJ1IjoiYnNuYXlhbiIsImEiOiJja3Ewczd3MW4wN3Z3MnVvNDNsenlzNnFsIn0.f8nk8yrxIeCKOlzIy1b-Pg",preventStyleDiffing:!0})})})},E=(n(268),n(338)),w=n(335),_=n(331),k=n(334),T=n(328);function A(){var e=Object(v.c)((function(e){return e.centreTypeId})),t=Object(v.b)();return Object(O.jsx)(E.a,{sx:{minWidth:120},children:Object(O.jsxs)(k.a,{fullWidth:!0,children:[Object(O.jsx)(w.a,{id:"demo-simple-select-label",children:"Centre type"}),Object(O.jsxs)(T.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:e,label:"Centretype",onChange:function(e,n){return console.log(e.target.value),t({type:"set_centretype",centreTypeId:e.target.value})},children:[Object(O.jsx)(_.a,{value:1,children:"Metro or Strategic"}),Object(O.jsx)(_.a,{value:2,children:"Metro"}),Object(O.jsx)(_.a,{value:3,children:"Strategic"}),Object(O.jsx)(_.a,{value:4,children:"Large Local Centre (\u2265 10k sqm of retails)"})]})]})})}n(269);var I=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{id:"legend",style:{fontFamily:"Roboto, sans-serif"},children:[Object(O.jsx)("h4",{children:"Service catchments by transport service frequency"}),Object(O.jsx)("div",{className:"legend-content",children:Object.keys(x).map((function(e){return Object(O.jsxs)("li",{children:[" ",Object(O.jsx)("div",{className:"circle",style:{backgroundColor:"rgba(".concat(x[e].join(),")")}}),e]})}))})]})})},M=n(3),N=n(181),R=n(220),z=n(154),W={};for(var q in x)W[q]="rgba(".concat(x[q].join(),",1)");var F={};for(var P in x)F[P]="rgba(".concat(x[P].join(),",0.9)");N.b.register(R.a);var L={indexAxis:"y",maintainAspectRatio:!1,elements:{bar:{borderWidth:1}},responsive:!0,scales:{x:{ticks:{callback:function(e,t,n){return e+"%"}}},yAxes:{ticks:{font:{weight:function(e){return"Greater Sydney"===e.tick.label?"bold":"normal"}}}}},plugins:{datalabels:{formatter:function(e,t){return e>10?Math.round(e,0)+"%":""},anchor:"end",align:"start",font:{size:"8px",weight:"bold"},color:function(e){var t=e.dataset.backgroundColor,n=t.slice(5,t.length-5).split(",").map((function(e){return parseInt(e)})),r=Object(d.a)(n,3),a=r[0],c=r[1],i=r[2];return"rgb(".concat(Math.round(.5*a,0),",").concat(Math.round(.5*c,0),",").concat(Math.round(.5*i,0),")")}},legend:{display:!1}}},G=function(){var e=Object(v.c)((function(e){return e.centreTypeId})),t=z[e.toString()];return console.log(t),t.datasets=t.datasets.map((function(e){var t=e.label;return Object(M.a)(Object(M.a)({},e),{},{label:"".concat(e.label),backgroundColor:F[t],borderColor:W[t],borderWidth:1})})),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h4",{style:{color:"#29322f"},children:"% of dwellings that have access to centres"}),Object(O.jsx)("div",{style:{height:"400px"},children:Object(O.jsx)(N.a,{data:t,options:L})})]})},Y=function(){var e=Object(v.c)((function(e){return e.centreTypeId})),t=z[e.toString()].datasets.map((function(e){if("At least once"===e.label)return e.data[0]}));return Object(O.jsxs)("p",{style:{color:"#231F20",fontSize:"14px"},children:[Object(O.jsx)("p",{children:"This map shows 30 minutes catchments by public transport and walking to the selected centres with service frequency on a weekday (7-9am, Monday, 04/11/19)."}),Object(O.jsxs)("q",{style:{fontSize:"16px"},children:[Object(O.jsxs)("b",{children:[t,"%"]})," of dwellings across Greater Sydney Region has 30 minutes access to its nearest centre with at least a trip in the AM peak."]})]})},D=function(){return Object(O.jsxs)("div",{className:"layer-selector",style:{fontFamily:"Roboto, sans-serif",textAlign:"left"},children:[Object(O.jsx)(A,{}),Object(O.jsx)(Y,{}),Object(O.jsx)(I,{}),Object(O.jsx)(G,{}),Object(O.jsx)("div",{children:Object(O.jsx)("span",{style:{fontSize:"8px"},children:"Source: GSC Analysis 2021,TfNSW, DPIE, ABS 2016"})}),Object(O.jsx)("div",{children:Object(O.jsxs)("span",{style:{fontSize:"10px",color:"gray",lineHeight:"1.1em"},children:["Please contact ",Object(O.jsx)("a",{href:"mailto: data@gsc.nsw.gov.au",children:"data@gsc.nsw.gov.au"})," for more info"]})})]})};var J=function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(S,{}),Object(O.jsx)(D,{})]})},B=n(222),U={centreTypeId:3};var K=Object(B.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"set_centretype":return Object(M.a)(Object(M.a)({},e),{},{centreTypeId:t.centreTypeId});default:return e}}));c.a.render(Object(O.jsx)(v.a,{store:K,children:Object(O.jsx)(J,{})}),document.getElementById("root"))}},[[270,1,2]]]);
//# sourceMappingURL=main.93024aed.chunk.js.map