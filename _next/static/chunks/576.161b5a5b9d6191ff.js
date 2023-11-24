(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[576],{8576:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return game}});var r=n(7437),a=n(2265);function createLeafletContext(e){return Object.freeze({__version:1,map:e})}function extendContext(e,t){return Object.freeze({...e,...t})}let o=(0,a.createContext)(null),l=o.Provider;function useLeafletContext(){let e=(0,a.useContext)(o);if(null==e)throw Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return e}var i=n(447),s=n.n(i);function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function MapContainerComponent({bounds:e,boundsOptions:t,center:n,children:r,className:o,id:s,placeholder:c,style:u,whenReady:d,zoom:p,...m},f){let[h]=(0,a.useState)({className:o,id:s,style:u}),[g,x]=(0,a.useState)(null);(0,a.useImperativeHandle)(f,()=>g?.map??null,[g]);let y=(0,a.useCallback)(r=>{if(null!==r&&null===g){let a=new i.Map(r,m);null!=n&&null!=p?a.setView(n,p):null!=e&&a.fitBounds(e,t),null!=d&&a.whenReady(d),x(createLeafletContext(a))}},[]);(0,a.useEffect)(()=>()=>{g?.map.remove()},[g]);let v=g?a.createElement(l,{value:g},r):c??null;return a.createElement("div",_extends({},h,{ref:y}),v)}let c=(0,a.forwardRef)(MapContainerComponent);var u=n(4887);function createContainerComponent(e){function ContainerComponent(t,n){let{instance:r,context:o}=e(t).current;return(0,a.useImperativeHandle)(n,()=>r),null==t.children?null:a.createElement(l,{value:o},t.children)}return(0,a.forwardRef)(ContainerComponent)}function createDivOverlayComponent(e){function OverlayComponent(t,n){let[r,o]=(0,a.useState)(!1),{instance:l}=e(t,o).current;(0,a.useImperativeHandle)(n,()=>l),(0,a.useEffect)(function(){r&&l.update()},[l,r,t.children]);let i=l._contentNode;return i?(0,u.createPortal)(t.children,i):null}return(0,a.forwardRef)(OverlayComponent)}function component_createLeafComponent(e){function LeafComponent(t,n){let{instance:r}=e(t).current;return(0,a.useImperativeHandle)(n,()=>r),null}return(0,a.forwardRef)(LeafComponent)}function element_createElementObject(e,t,n){return Object.freeze({instance:e,context:t,container:n})}function element_createElementHook(e,t){return null==t?function(t,n){let r=(0,a.useRef)();return r.current||(r.current=e(t,n)),r}:function(n,r){let o=(0,a.useRef)();o.current||(o.current=e(n,r));let l=(0,a.useRef)(n),{instance:i}=o.current;return(0,a.useEffect)(function(){l.current!==n&&(t(i,n,l.current),l.current=n)},[i,n,r]),o}}function useAttribution(e,t){let n=(0,a.useRef)(t);(0,a.useEffect)(function(){t!==n.current&&null!=e.attributionControl&&(null!=n.current&&e.attributionControl.removeAttribution(n.current),null!=t&&e.attributionControl.addAttribution(t)),n.current=t},[e,t])}function useEventHandlers(e,t){let n=(0,a.useRef)();(0,a.useEffect)(function(){return null!=t&&e.instance.on(t),n.current=t,function(){null!=n.current&&e.instance.off(n.current),n.current=null}},[e,t])}function withPane(e,t){let n=e.pane??t.pane;return n?{...e,pane:n}:e}function useLayerLifecycle(e,t){(0,a.useEffect)(function(){let n=t.layerContainer??t.map;return n.addLayer(e.instance),function(){t.layerContainer?.removeLayer(e.instance),t.map.removeLayer(e.instance)}},[t,e])}function createLayerHook(e){return function(t){let n=useLeafletContext(),r=e(withPane(t,n),n);return useAttribution(n.map,t.attribution),useEventHandlers(r.current,t.eventHandlers),useLayerLifecycle(r.current,n),r}}function createDivOverlayHook(e,t){return function(n,r){let a=useLeafletContext(),o=e(withPane(n,a),a);return useAttribution(a.map,n.attribution),useEventHandlers(o.current,n.eventHandlers),t(o.current,a,n,r),o}}function usePathOptions(e,t){let n=(0,a.useRef)();(0,a.useEffect)(function(){if(t.pathOptions!==n.current){let r=t.pathOptions??{};e.instance.setStyle(r),n.current=r}},[e,t])}function createPathHook(e){return function(t){let n=useLeafletContext(),r=e(withPane(t,n),n);return useEventHandlers(r.current,t.eventHandlers),useLayerLifecycle(r.current,n),usePathOptions(r.current,t),r}}function createLayerComponent(e,t){let n=element_createElementHook(e,t),r=createLayerHook(n);return createContainerComponent(r)}function createOverlayComponent(e,t){let n=element_createElementHook(e),r=createDivOverlayHook(n,t);return createDivOverlayComponent(r)}function createPathComponent(e,t){let n=element_createElementHook(e,t),r=createPathHook(n);return createContainerComponent(r)}function createTileLayerComponent(e,t){let n=element_createElementHook(e,t),r=createLayerHook(n);return component_createLeafComponent(r)}function updateGridLayer(e,t,n){let{opacity:r,zIndex:a}=t;null!=r&&r!==n.opacity&&e.setOpacity(r),null!=a&&a!==n.zIndex&&e.setZIndex(a)}let d=createTileLayerComponent(function({url:e,...t},n){let r=new i.TileLayer(e,withPane(t,n));return element_createElementObject(r,n)},function(e,t,n){updateGridLayer(e,t,n);let{url:r}=t;null!=r&&r!==n.url&&e.setUrl(r)});function useMap(){return useLeafletContext().map}function useMapEvents(e){let t=useMap();return(0,a.useEffect)(function(){return t.on(e),function(){t.off(e)}},[t,e]),t}let p=createLayerComponent(function({position:e,...t},n){let r=new i.Marker(e,t);return element_createElementObject(r,extendContext(n,{overlayContainer:r}))},function(e,t,n){t.position!==n.position&&e.setLatLng(t.position),null!=t.icon&&t.icon!==n.icon&&e.setIcon(t.icon),null!=t.zIndexOffset&&t.zIndexOffset!==n.zIndexOffset&&e.setZIndexOffset(t.zIndexOffset),null!=t.opacity&&t.opacity!==n.opacity&&e.setOpacity(t.opacity),null!=e.dragging&&t.draggable!==n.draggable&&(!0===t.draggable?e.dragging.enable():e.dragging.disable())}),m=createOverlayComponent(function(e,t){let n=new i.Popup(e,t.overlayContainer);return element_createElementObject(n,t)},function(e,t,{position:n},r){(0,a.useEffect)(function(){let{instance:a}=e;function onPopupOpen(e){e.popup===a&&(a.update(),r(!0))}function onPopupClose(e){e.popup===a&&r(!1)}return t.map.on({popupopen:onPopupOpen,popupclose:onPopupClose}),null==t.overlayContainer?(null!=n&&a.setLatLng(n),a.openOn(t.map)):t.overlayContainer.bindPopup(a),function(){t.map.off({popupopen:onPopupOpen,popupclose:onPopupClose}),t.overlayContainer?.unbindPopup(),t.map.removeLayer(a)}},[e,t,r,n])}),f=createPathComponent(function({positions:e,...t},n){let r=new i.Polyline(e,t);return element_createElementObject(r,extendContext(n,{overlayContainer:r}))},function(e,t,n){t.positions!==n.positions&&e.setLatLngs(t.positions)});var h=new(s()).Icon({iconUrl:"https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]}),component_location=e=>{let{position:t,setPosition:n,target:o}=e,l=(0,a.useRef)(null),i=(0,a.useRef)(null);if(useMapEvents({click(e){null==t&&n(e.latlng)}}),(0,a.useEffect)(()=>{t&&i.current&&setTimeout(()=>{i.current&&i.current.openPopup()},15)},[t]),!t||!o)return null;let s=t.distanceTo(o);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p,{position:t,ref:l}),(0,r.jsx)(p,{position:o,icon:h,ref:i,children:(0,r.jsxs)(m,{children:["You are off by ",s.toFixed(1)," m"]})}),(0,r.jsx)(f,{positions:[t,o],dashArray:"5, 10"})]})};function _detectIconOptions(e,t){var n=i.DomUtil.create("div",e,document.body),r=_extractUrls(_getBkgImageOrCursor(n),t),a=_getStyleInt(n,"width"),o=_getStyleInt(n,"height"),l=_getStyleInt(n,"margin-left"),s=_getStyleInt(n,"margin-top");return n.parentNode.removeChild(n),{Url:r[0],RetinaUrl:r[1],Size:[a,o],Anchor:[-l,-s]}}function _detectDivOverlayOptions(e){var t=i.DomUtil.create("div",e,document.body),n=_getStyleInt(t,"margin-left"),r=_getStyleInt(t,"margin-top");return t.parentNode.removeChild(t),{Anchor:[n,r]}}function _extractUrls(e,t){for(var n=/url\(['"]?([^"']*?)['"]?\)/gi,r=[],a=n.exec(e);a;)r.push(t?_stripPath(a[1]):a[1]),a=n.exec(e);return r}function _stripPath(e){return e.substr(e.lastIndexOf("/")+1)}function _getStyleInt(e,t){return parseInt(_getStyle(e,t),10)}function _getStyle(e,t){return i.DomUtil.getStyle(e,t)||i.DomUtil.getStyle(e,_kebabToCamelCase(t))}function _getBkgImageOrCursor(e){var t=_getStyle(e,"background-image");return t&&"none"!==t?t:_getStyle(e,"cursor")}function _kebabToCamelCase(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})}n(1374),i.Icon.Default.mergeOptions({iconUrl:null,iconRetinaUrl:null,shadowUrl:null,iconSize:null,iconAnchor:null,popupAnchor:null,tooltipAnchor:null,shadowSize:null,classNamePrefix:"leaflet-default-icon-"}),i.Icon.Default.include({_needsInit:!0,_getIconUrl:function(e){var t=this.options.imagePath||i.Icon.Default.imagePath||"";return this._needsInit&&this._initializeOptions(t),t+i.Icon.prototype._getIconUrl.call(this,e)},_initializeOptions:function(e){this._setOptions("icon",_detectIconOptions,e),this._setOptions("shadow",_detectIconOptions,e),this._setOptions("popup",_detectDivOverlayOptions),this._setOptions("tooltip",_detectDivOverlayOptions),this._needsInit=!1},_setOptions:function(e,t,n){var r=this.options,a=t(r.classNamePrefix+e,n);for(var o in a)r[e+o]=r[e+o]||a[o]}}),n(8132);let g=new i.LatLng(40.7531,-73.9712);var map=e=>{let{position:t,setPosition:n,target:a}=e;return(0,r.jsx)("div",{className:"h-full w-full",children:(0,r.jsxs)(c,{center:g,zoom:13,className:"h-full w-full",children:[(0,r.jsx)(d,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),(0,r.jsx)(component_location,{position:t,setPosition:n,target:a})]})})};let Location=class Location{constructor(e,t){this.name=e,this.coordinates=t}};let Player=class Player{addAttempt(e){this.attempts.push(e),this.calculateScore()}calculateScore(){let e=this.attempts[this.attempts.length-1];e.score=Math.max(0,1e3-e.distance/10),this.totalScore+=e.score}constructor(e,t,n,r=[]){this.id=e,this.name=t,this.attempts=r,this.totalScore=n}};let GameState=class GameState{addPlayer(e){this.players.set(e.id,e)}getPlayer(e){return this.players.get(e)}constructor(e){this.players=e}};var component_button=e=>{let{text:t,onClick:n,colorClass:a}=e;return(0,r.jsxs)("div",{className:"group relative inline-block focus:outline-none focus:ring",children:[(0,r.jsx)("span",{className:"absolute inset-0 translate-x-1.5 translate-y-1.5 transition-transform group-hover:translate-y-0 group-hover:translate-x-0 ".concat(a)}),(0,r.jsx)("button",{onClick:n,className:"relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75",children:t})]})},x=[{name:"Central Park",coordinates:{lat:40.785091,lng:-73.968285}},{name:"Empire State Building",coordinates:{lat:40.748817,lng:-73.985428}},{name:"Times Square",coordinates:{lat:40.758,lng:-73.9855}},{name:"Statue of Liberty",coordinates:{lat:40.6892,lng:-74.0445}},{name:"Wall Street",coordinates:{lat:40.7074,lng:-74.0113}},{name:"One World Trade Center",coordinates:{lat:40.712743,lng:-74.013379}},{name:"Metropolitan Museum of Art",coordinates:{lat:40.779437,lng:-73.963244}},{name:"Broadway & Canal St",coordinates:{lat:40.718814,lng:-74.002643}},{name:"Madison Square Garden",coordinates:{lat:40.750504,lng:-73.993439}},{name:"Columbia University",coordinates:{lat:40.807536,lng:-73.962573}},{name:"Yankee Stadium",coordinates:{lat:40.829643,lng:-73.926175}},{name:"Brooklyn Bridge",coordinates:{lat:40.706086,lng:-73.996864}},{name:"Chinatown, Manhattan",coordinates:{lat:40.715751,lng:-73.997031}},{name:"Harlem",coordinates:{lat:40.81155,lng:-73.946477}},{name:"Greenwich Village",coordinates:{lat:40.733572,lng:-74.002742}},{name:"14th St & 8th Ave",coordinates:{lat:40.738138,lng:-74.002106}},{name:"23rd St & 5th Ave",coordinates:{lat:40.742058,lng:-73.992222}},{name:"42nd St & Broadway",coordinates:{lat:40.75529,lng:-73.987495}},{name:"Houston St & Broadway",coordinates:{lat:40.725545,lng:-73.996263}},{name:"72nd St & Broadway",coordinates:{lat:40.778894,lng:-73.981858}},{name:"Battery Park",coordinates:{lat:40.703277,lng:-74.017028}},{name:"Lincoln Center",coordinates:{lat:40.772464,lng:-73.983489}},{name:"Park Ave & 42nd St",coordinates:{lat:40.751776,lng:-73.9784}},{name:"5th Ave & 59th St",coordinates:{lat:40.764253,lng:-73.973988}},{name:"34th St & 7th Ave",coordinates:{lat:40.750307,lng:-73.990391}},{name:"14th St & Union Square",coordinates:{lat:40.735863,lng:-73.991084}},{name:"8th Ave & 44th St",coordinates:{lat:40.759101,lng:-73.991331}},{name:"Lexington Ave & 53rd St",coordinates:{lat:40.757658,lng:-73.97195}},{name:"St. Patrick's Cathedral",coordinates:{lat:40.758465,lng:-73.975993}},{name:"The High Line",coordinates:{lat:40.748009,lng:-74.004765}},{name:"Guggenheim Museum",coordinates:{lat:40.783017,lng:-73.959026}},{name:"American Museum of Natural History",coordinates:{lat:40.781324,lng:-73.973988}},{name:"Carnegie Hall",coordinates:{lat:40.765026,lng:-73.979977}},{name:"Flatiron Building",coordinates:{lat:40.741061,lng:-73.989699}},{name:"Grand Central Terminal",coordinates:{lat:40.752726,lng:-73.977229}},{name:"New York Public Library",coordinates:{lat:40.753182,lng:-73.982253}},{name:"Bryant Park",coordinates:{lat:40.753597,lng:-73.983233}},{name:"Washington Square Park",coordinates:{lat:40.73082,lng:-73.997332}},{name:"Union Square Park",coordinates:{lat:40.735863,lng:-73.991084}},{name:"Hudson Yards",coordinates:{lat:40.753499,lng:-74.001374}}],game=e=>{var t;let{numPlayers:n,numAttempts:o,restart:l,isGameSet:i}=e,[s,c]=(0,a.useState)([]),[u,d]=(0,a.useState)(null),[p,m]=(0,a.useState)(null),[f,h]=(0,a.useState)(0),[g,y]=(0,a.useState)(0),[v,C]=(0,a.useState)(new GameState(new Map)),shuffle=e=>{let t=e.slice();for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t},b=(0,a.useCallback)(()=>{let e=new GameState(new Map);for(let t=0;t<n;t++){let n=new Player(t,"Player ".concat(t+1),0,[]);e.addPlayer(n)}let t=shuffle(x);console.log(t),c(t),h(0),C(e),d(t.pop()||null)},[n]);(0,a.useEffect)(()=>{i&&b(),console.log("game started")},[i,b]),(0,a.useEffect)(()=>{if(p&&u&&g<o){console.log("pos updated");let e=p.distanceTo(u.coordinates),t=v.players.get(f);if(t){let n={location:new Location("Current Position",p),target:u,distance:e,score:0},r=new Player(t.id,t.name,t.totalScore,[...t.attempts,n]);r.calculateScore(),C(e=>{let t=new Map(e.players);return t.set(r.id,r),new GameState(t)})}}},[p,u,f,g,o]);let clearMap=()=>{m(null),d(s.pop()||null)},restartGame=()=>{clearMap(),l()};return(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center h-screen px-4 font-nunito",children:[(0,r.jsx)("div",{children:g==o?(0,r.jsxs)("h1",{className:"text-3xl font-bold mb-6",children:[(()=>{let e=0,t="",n=Array.from(v.players.values());return n.forEach(n=>{let r=n.attempts.reduce((e,t)=>e+t.score,0);r>e&&(e=r,t=n.name)}),t})()," WON"]}):(0,r.jsxs)("div",{className:"group relative inline-block focus:outline-none focus:ring",children:[(0,r.jsx)("span",{className:"absolute inset-0 border-b-black border-b-2 transition-transform"}),(0,r.jsxs)("div",{onClick:restartGame,className:"relative inline-block px-8 py-3 font-bold text-3xl uppercase tracking-widest text-black group-active:text-opacity-75",children:[null===(t=v.players.get(f))||void 0===t?void 0:t.name," Turn"]})]})}),(0,r.jsxs)("main",{className:"flex flex-row items-start w-full max-w-8xl my-4 ",children:[(0,r.jsx)("div",{className:"h-[80vh] w-3/4  border-2 border-black rounded-sm overflow-hidden",children:(0,r.jsx)(map,{position:p,setPosition:m,target:(null==u?void 0:u.coordinates)||null})}),(0,r.jsxs)("div",{className:"w-1/4 h-[80vh] overflow-auto p-4 rounded-sm mx-2 ",children:[(0,r.jsx)("div",{className:"h-20 text-center",children:(0,r.jsxs)("h1",{className:"text-3xl mb-4",children:["Where is ",null==u?void 0:u.name,"?"]})}),(()=>{let e=Array.from(v.players.values());return(0,r.jsx)("div",{children:e.map(e=>(0,r.jsxs)("div",{className:"p-4 border-black border-2 mb-4",children:[(0,r.jsx)("h2",{className:"text-lg   ",children:e.name}),(0,r.jsx)("ul",{className:"list-disc pl-5 mt-2",children:e.attempts.map((e,t)=>(0,r.jsxs)("li",{className:"text-sm",children:[e.target.name,": ",e.distance.toFixed(1)," meters"]},t))}),(0,r.jsxs)("div",{className:"text-sm font-medium text-gray-800 mt-2",children:["Score:"," ",(0,r.jsx)("span",{className:"font-semibold ",children:" "+e.totalScore.toFixed(0)})]})]},e.id))})})(),(0,r.jsxs)("div",{className:"flex flex-row mt-4 space-x-4",children:[(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsx)(component_button,{text:"Next",onClick:()=>{if(g>=o||!p)return;let e=(f+1)%n,t=f+1>=n?g+1:g;h(e),y(t),t<o&&clearMap()},colorClass:"bg-yellow-300"})}),(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsx)(component_button,{text:"Restart",onClick:restartGame,colorClass:"bg-red-300"})})]})]})]})]})}},8132:function(){},1374:function(){}}]);