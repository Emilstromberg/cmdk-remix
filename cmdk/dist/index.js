var xe=Object.create;var $=Object.defineProperty;var we=Object.getOwnPropertyDescriptor;var Ie=Object.getOwnPropertyNames;var _e=Object.getPrototypeOf,Oe=Object.prototype.hasOwnProperty;var He=(e,o)=>{for(var r in o)$(e,r,{get:o[r],enumerable:!0})},le=(e,o,r,a)=>{if(o&&typeof o=="object"||typeof o=="function")for(let c of Ie(o))!Oe.call(e,c)&&c!==r&&$(e,c,{get:()=>o[c],enumerable:!(a=we(o,c))||a.enumerable});return e};var de=(e,o,r)=>(r=e!=null?xe(_e(e)):{},le(o||!e||!e.__esModule?$(r,"default",{value:e,enumerable:!0}):r,e)),Ne=e=>le($({},"__esModule",{value:!0}),e);var Ze={};He(Ze,{Command:()=>Ye,CommandDialog:()=>Me,CommandEmpty:()=>Le,CommandGroup:()=>be,CommandGroupCustom:()=>Se,CommandInput:()=>ye,CommandItem:()=>Ce,CommandItemCustom:()=>Ee,CommandList:()=>Pe,CommandLoading:()=>De,CommandRoot:()=>re,CommandSeparator:()=>Te,useCommandState:()=>M});module.exports=Ne(Ze);var A=de(require("@radix-ui/react-dialog")),t=de(require("react"));var fe=1,Ge=.9,Ve=.8,Ke=.17,Q=.1,Z=.999,Fe=.9999;var je=.99,$e=/[\\\/_+.#"@\[\(\{&]/,Ue=/[\\\/_+.#"@\[\(\{&]/g,We=/[\s-]/,pe=/[\s-]/g;function ee(e,o,r,a,c,s,l){if(s===o.length)return c===e.length?fe:je;var R=`${c},${s}`;if(l[R]!==void 0)return l[R];for(var m=a.charAt(s),p=r.indexOf(m,c),h=0,i,C,S,E;p>=0;)i=ee(e,o,r,a,p+1,s+1,l),i>h&&(p===c?i*=fe:$e.test(e.charAt(p-1))?(i*=Ve,S=e.slice(c,p-1).match(Ue),S&&c>0&&(i*=Math.pow(Z,S.length))):We.test(e.charAt(p-1))?(i*=Ge,E=e.slice(c,p-1).match(pe),E&&c>0&&(i*=Math.pow(Z,E.length))):(i*=Ke,c>0&&(i*=Math.pow(Z,p-c))),e.charAt(p)!==o.charAt(s)&&(i*=Fe)),(i<Q&&r.charAt(p-1)===a.charAt(s+1)||a.charAt(s+1)===a.charAt(s)&&r.charAt(p-1)!==a.charAt(s))&&(C=ee(e,o,r,a,p+1,s+2,l),C*Q>i&&(i=C*Q)),i>h&&(h=i),p=r.indexOf(m,p+1);return l[R]=h,h}function me(e){return e.toLowerCase().replace(pe," ")}function Re(e,o){return ee(e,o,me(e),me(o),0,0,{})}var qe='[cmdk-list-sizer=""]',K='[cmdk-group=""]',te='[cmdk-group-items=""]',Be='[cmdk-group-heading=""]',ne='[cmdk-item=""]',he=`${ne}:not([aria-disabled="true"])`,F="cmdk-item-select",D="data-value",Xe=(e,o)=>Re(e,o),ve=t.createContext(void 0),I=()=>t.useContext(ve),ge=t.createContext(void 0),U=()=>t.useContext(ge),W=t.createContext(void 0),re=t.forwardRef((e,o)=>{let r=t.useRef(null),a=H(()=>{var n;return{search:"",value:e.value??((n=e.defaultValue)==null?void 0:n.toLowerCase())??"",filtered:{count:0,items:new Map,groups:new Set}}}),c=H(()=>new Set),s=H(()=>new Map),l=H(()=>new Map),R=H(()=>new Set),m=oe(e),{label:p,children:h,value:i,onValueChange:C,filter:S,shouldFilter:E,shouldSort:L,..._}=e,j=t.useId(),O=t.useId(),b=t.useId(),v=ke();x(()=>{if(i!==void 0){let n=i.trim().toLowerCase();a.current.value=n,v(6,ae),y.emit()}},[i]);let y=t.useMemo(()=>({subscribe:n=>(R.current.add(n),()=>R.current.delete(n)),snapshot:()=>a.current,setState:(n,f,u)=>{var d,g,P;if(!Object.is(a.current[n],f)){if(a.current[n]=f,n==="search")Y(),B(),v(1,X);else if(n==="value")if(((d=m.current)==null?void 0:d.value)!==void 0){let w=f??"";(P=(g=m.current).onValueChange)==null||P.call(g,w);return}else u||v(5,ae);y.emit()}},emit:()=>{R.current.forEach(n=>n())}}),[]),T=t.useMemo(()=>({value:(n,f)=>{f!==l.current.get(n)&&(l.current.set(n,f),a.current.filtered.items.set(n,N(f)),v(2,()=>{B(),y.emit()}))},item:(n,f)=>(c.current.add(n),f&&(s.current.has(f)?s.current.get(f).add(n):s.current.set(f,new Set([n]))),v(3,()=>{Y(),B(),a.current.value||X(),y.emit()}),()=>{l.current.delete(n),c.current.delete(n),a.current.filtered.items.delete(n);let u=G();v(4,()=>{Y(),(u==null?void 0:u.getAttribute("id"))===n&&X(),y.emit()})}),group:n=>(s.current.has(n)||s.current.set(n,new Set),()=>{l.current.delete(n),s.current.delete(n)}),filter:()=>m.current.shouldFilter,label:p||e["aria-label"],commandRef:r,listId:j,inputId:b,labelId:O}),[]);function N(n){var u;let f=((u=m.current)==null?void 0:u.filter)??Xe;return n?f(n,a.current.search):0}function B(){if(!r.current||!a.current.search||m.current.shouldSort===!1)return;let n=a.current.filtered.items,f=[];a.current.filtered.groups.forEach(d=>{let g=s.current.get(d),P=0;g.forEach(w=>{let Ae=n.get(w);P=Math.max(Ae,P)}),f.push([d,P])});let u=r.current.querySelector(qe);V().sort((d,g)=>{let P=d.getAttribute(D),w=g.getAttribute(D);return(n.get(w)??0)-(n.get(P)??0)}).forEach(d=>{let g=d.closest(te);g?g.appendChild(d.parentElement===g?d:d.closest(`${te} > *`)):u.appendChild(d.parentElement===u?d:d.closest(`${te} > *`))}),f.sort((d,g)=>g[1]-d[1]).forEach(d=>{let g=r.current.querySelector(`${K}[${D}="${d[0]}"]`);g==null||g.parentElement.appendChild(g)})}function X(){let n=V().find(u=>!u.ariaDisabled),f=n==null?void 0:n.getAttribute(D);y.setState("value",f||void 0)}function Y(){if(!a.current.search||m.current.shouldFilter===!1){a.current.filtered.count=c.current.size;return}a.current.filtered.groups=new Set;let n=0;for(let f of c.current){let u=l.current.get(f),d=N(u);a.current.filtered.items.set(f,d),d>0&&n++}for(let[f,u]of s.current)for(let d of u)if(a.current.filtered.items.get(d)>0){a.current.filtered.groups.add(f);break}a.current.filtered.count=n}function ae(){var f,u,d;let n=G();n&&(((f=n.parentElement)==null?void 0:f.firstChild)===n&&((d=(u=n.closest(K))==null?void 0:u.querySelector(Be))==null||d.scrollIntoView({block:"nearest"})),n.scrollIntoView({block:"nearest"}))}function G(){var n;return(n=r.current)==null?void 0:n.querySelector(`${ne}[aria-selected="true"]`)}function V(){return Array.from(r.current.querySelectorAll(he))}function J(n){let u=V()[n];u&&y.setState("value",u.getAttribute(D))}function z(n){var P;let f=G(),u=V(),d=u.findIndex(w=>w===f),g=u[d+n];(P=m.current)!=null&&P.loop&&(g=d+n<0?u[u.length-1]:d+n===u.length?u[0]:u[d+n]),g&&y.setState("value",g.getAttribute(D))}function ce(n){let f=G(),u=f==null?void 0:f.closest(K),d;for(;u&&!d;)u=n>0?Je(u,K):ze(u,K),d=u==null?void 0:u.querySelector(he);d?y.setState("value",d.getAttribute(D)):z(n)}let se=()=>J(V().length-1),ie=n=>{n.preventDefault(),n.metaKey?se():n.altKey?ce(1):z(1)},ue=n=>{n.preventDefault(),n.metaKey?J(0):n.altKey?ce(-1):z(-1)};return t.createElement("div",{ref:k([r,o]),..._,"cmdk-root":"",onKeyDown:n=>{var f;if((f=_.onKeyDown)==null||f.call(_,n),!n.defaultPrevented)switch(n.key){case"n":case"j":{n.ctrlKey&&ie(n);break}case"ArrowDown":{ie(n);break}case"p":case"k":{n.ctrlKey&&ue(n);break}case"ArrowUp":{ue(n);break}case"Home":{n.preventDefault(),J(0);break}case"End":{n.preventDefault(),se();break}case"Enter":{n.preventDefault();let u=G();if(u){let d=new Event(F);u.dispatchEvent(d)}}}}},t.createElement("label",{"cmdk-label":"",htmlFor:T.inputId,id:T.labelId,style:Qe},p),t.createElement(ge.Provider,{value:y},t.createElement(ve.Provider,{value:T},h)))}),Ee=t.forwardRef((e,o)=>{var y;let r=t.useId(),a=t.useRef(null),c=t.useContext(W),s=I(),l=oe(e),R=((y=l.current)==null?void 0:y.forceMount)??(c==null?void 0:c.forceMount);x(()=>s.item(r,c==null?void 0:c.id),[]);let m=q(r,a,[e.value,e.children,a]),p=U(),h=M(T=>T.value&&T.value===m.current),i=M(T=>R||s.filter()===!1?!0:T.search?T.filtered.items.get(r)>0:!0);t.useEffect(()=>{let T=a.current;if(!(!T||e.disabled))return T.addEventListener(F,S),()=>T.removeEventListener(F,S)},[i,e.onSelect,e.disabled]);let C=ke();function S(){var T,N;E(),(N=(T=l.current).onSelect)==null||N.call(T,m.current),a.current.click()}function E(){p.setState("value",m.current,!0)}if(!i)return null;let{disabled:L,value:_,onSelect:j,CustomAnchorTag:O,CustomPrefetchElement:b,...v}=e;return e.CustomAnchorTag?t.createElement(O,{id:r,to:e.href,ref:k([a,o]),role:"option",onClick:L?void 0:S,prefetch:"none",accessKey:v.accessKey,className:v.className,"cmdk-item":"",defaultValue:v.defaultValue,"aria-disabled":L||void 0,"aria-selected":h||void 0,"data-disabled":L||void 0,"data-selected":h||void 0,onPointerMove:L?void 0:E,defaultChecked:v.defaultChecked,suppressHydrationWarning:v.suppressHydrationWarning,suppressContentEditableWarning:v.suppressContentEditableWarning},e.children,h?t.createElement(t.Fragment,null,b({page:e.href})):null):t.createElement("a",{href:e.href,ref:k([a,o]),id:r,"cmdk-item":"",role:"option","aria-disabled":L||void 0,"aria-selected":h||void 0,"data-disabled":L||void 0,"data-selected":h||void 0,onPointerMove:L?void 0:E,onClick:L?void 0:S,className:v.className,defaultChecked:v.defaultChecked,defaultValue:v.defaultValue,suppressContentEditableWarning:v.suppressContentEditableWarning,suppressHydrationWarning:v.suppressHydrationWarning,accessKey:v.accessKey},e.children)}),Ce=t.forwardRef((e,o)=>{var O;let r=t.useId(),a=t.useRef(null),c=t.useContext(W),s=I(),l=oe(e),R=((O=l.current)==null?void 0:O.forceMount)??(c==null?void 0:c.forceMount);x(()=>s.item(r,c==null?void 0:c.id),[]);let m=q(r,a,[e.value,e.children,a]),p=U(),h=M(b=>b.value&&b.value===m.current),i=M(b=>R||s.filter()===!1?!0:b.search?b.filtered.items.get(r)>0:!0);t.useEffect(()=>{let b=a.current;if(!(!b||e.disabled))return b.addEventListener(F,C),()=>b.removeEventListener(F,C)},[i,e.onSelect,e.disabled]);function C(){var b,v;S(),(v=(b=l.current).onSelect)==null||v.call(b,m.current)}function S(){p.setState("value",m.current,!0)}if(!i)return null;let{disabled:E,value:L,onSelect:_,...j}=e;return t.createElement("div",{ref:k([a,o]),...j,id:r,"cmdk-item":"",role:"option","aria-disabled":E||void 0,"aria-selected":h||void 0,"data-disabled":E||void 0,"data-selected":h||void 0,onPointerMove:E?void 0:S,onClick:E?void 0:C},e.children)}),Se=t.forwardRef((e,o)=>{let{heading:r,children:a,forceMount:c,...s}=e,l=t.useId(),R=t.useRef(null),m=t.useRef(null),p=t.useId(),h=I(),i=M(E=>c||h.filter()===!1?!0:E.search?E.filtered.groups.has(l):!0);x(()=>h.group(l),[]),q(l,R,[e.value,e.heading,m]);let C=t.useMemo(()=>({id:l,forceMount:c}),[c]),S=t.createElement(W.Provider,{value:C},a);return t.createElement("div",{ref:k([R,o]),...s,"cmdk-group":"",role:"presentation",hidden:i?void 0:!0},r&&t.createElement("div",{ref:m,"cmdk-group-heading":"","aria-hidden":!0,id:p},r),t.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":r?p:void 0,className:e.customchildclassname},S))}),be=t.forwardRef((e,o)=>{let{heading:r,children:a,forceMount:c,...s}=e,l=t.useId(),R=t.useRef(null),m=t.useRef(null),p=t.useId(),h=I(),i=M(E=>c||h.filter()===!1?!0:E.search?E.filtered.groups.has(l):!0);x(()=>h.group(l),[]),q(l,R,[e.value,e.heading,m]);let C=t.useMemo(()=>({id:l,forceMount:c}),[c]),S=t.createElement(W.Provider,{value:C},a);return t.createElement("div",{ref:k([R,o]),...s,"cmdk-group":"",role:"presentation",hidden:i?void 0:!0},r&&t.createElement("div",{ref:m,"cmdk-group-heading":"","aria-hidden":!0,id:p},r),t.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":r?p:void 0},S))}),Te=t.forwardRef((e,o)=>{let{alwaysRender:r,...a}=e,c=t.useRef(null),s=M(l=>!l.search);return!r&&!s?null:t.createElement("div",{ref:k([c,o]),...a,"cmdk-separator":"",role:"separator"})}),ye=t.forwardRef((e,o)=>{let{onValueChange:r,loading:a,...c}=e,s=e.value!=null,l=U(),R=M(i=>i.search),m=M(i=>i.value),p=I(),h=t.useMemo(()=>{var C;let i=(C=p.commandRef.current)==null?void 0:C.querySelector(`${ne}[${D}="${m}"]`);return i==null?void 0:i.getAttribute("id")},[m,p.commandRef]);return t.useEffect(()=>{e.value!=null&&!a&&l.setState("search",e.value)},[e.value,a]),t.createElement("input",{ref:o,...c,"cmdk-input":"",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,"aria-controls":p.listId,"aria-labelledby":p.labelId,"aria-activedescendant":h,id:p.inputId,type:"text",value:s?e.value:R,onChange:i=>{s||l.setState("search",i.target.value),r==null||r(i.target.value)}})}),Pe=t.forwardRef((e,o)=>{let{children:r,...a}=e,c=t.useRef(null),s=t.useRef(null),l=I();return t.useEffect(()=>{if(s.current&&c.current){let R=s.current,m=c.current,p,h=new ResizeObserver(()=>{p=requestAnimationFrame(()=>{let i=R.offsetHeight;m.style.setProperty("--cmdk-list-height",i.toFixed(1)+"px")})});return h.observe(R),()=>{cancelAnimationFrame(p),h.unobserve(R)}}},[]),t.createElement("div",{ref:k([c,o]),...a,"cmdk-list":"",role:"listbox","aria-label":"Suggestions",id:l.listId,"aria-labelledby":l.inputId},t.createElement("div",{ref:s,"cmdk-list-sizer":""},r))}),Me=t.forwardRef((e,o)=>{let{open:r,onOpenChange:a,overlayClassName:c,contentClassName:s,container:l,...R}=e;return t.createElement(A.Root,{open:r,onOpenChange:a},t.createElement(A.Portal,{container:l},t.createElement(A.Overlay,{"cmdk-overlay":"",className:c}),t.createElement(A.Content,{"aria-label":e.label,"cmdk-dialog":"",className:s},t.createElement(re,{ref:o,...R}))))}),Le=t.forwardRef((e,o)=>{let r=t.useRef(!0),a=M(c=>c.filtered.count===0);return t.useEffect(()=>{r.current=!1},[]),r.current||!a?null:t.createElement("div",{ref:o,...e,"cmdk-empty":"",role:"presentation"})}),De=t.forwardRef((e,o)=>{let{progress:r,children:a,...c}=e;return t.createElement("div",{ref:o,...c,"cmdk-loading":"",role:"progressbar","aria-valuenow":r,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Loading..."},t.createElement("div",{"aria-hidden":!0},a))}),Ye=Object.assign(re,{List:Pe,CustomItem:Ee,Item:Ce,Input:ye,CustomGroup:Se,Group:be,Separator:Te,Dialog:Me,Empty:Le,Loading:De});function Je(e,o){let r=e.nextElementSibling;for(;r;){if(r.matches(o))return r;r=r.nextElementSibling}}function ze(e,o){let r=e.previousElementSibling;for(;r;){if(r.matches(o))return r;r=r.previousElementSibling}}function oe(e){let o=t.useRef(e);return x(()=>{o.current=e}),o}var x=typeof window>"u"?t.useEffect:t.useLayoutEffect;function H(e){let o=t.useRef();return o.current===void 0&&(o.current=e()),o}function k(e){return o=>{e.forEach(r=>{typeof r=="function"?r(o):r!=null&&(r.current=o)})}}function M(e){let o=U(),r=()=>e(o==null?void 0:o.snapshot());return t.useSyncExternalStore(o==null?void 0:o.subscribe,r,r)}function q(e,o,r){let a=t.useRef(),c=I();return x(()=>{var l;let s=(()=>{var R;for(let m of r){if(typeof m=="string")return m.trim().toLowerCase();if(typeof m=="object"&&"current"in m&&m.current)return(R=m.current.textContent)==null?void 0:R.trim().toLowerCase()}})();c.value(e,s),(l=o.current)==null||l.setAttribute(D,s),a.current=s}),a}var ke=()=>{let[e,o]=t.useState(),r=H(()=>new Map);return x(()=>{r.current.forEach(a=>a()),r.current=new Map},[e]),(a,c)=>{r.current.set(a,c),o({})}},Qe={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"};0&&(module.exports={Command,CommandDialog,CommandEmpty,CommandGroup,CommandGroupCustom,CommandInput,CommandItem,CommandItemCustom,CommandList,CommandLoading,CommandRoot,CommandSeparator,useCommandState});
