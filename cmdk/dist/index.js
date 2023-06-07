var ke=Object.create;var W=Object.defineProperty;var xe=Object.getOwnPropertyDescriptor;var we=Object.getOwnPropertyNames;var Ie=Object.getPrototypeOf,_e=Object.prototype.hasOwnProperty;var He=(e,o)=>{for(var r in o)W(e,r,{get:o[r],enumerable:!0})},le=(e,o,r,a)=>{if(o&&typeof o=="object"||typeof o=="function")for(let c of we(o))!_e.call(e,c)&&c!==r&&W(e,c,{get:()=>o[c],enumerable:!(a=xe(o,c))||a.enumerable});return e};var de=(e,o,r)=>(r=e!=null?ke(Ie(e)):{},le(o||!e||!e.__esModule?W(r,"default",{value:e,enumerable:!0}):r,e)),Oe=e=>le(W({},"__esModule",{value:!0}),e);var Ze={};He(Ze,{Command:()=>Be,CommandDialog:()=>Me,CommandEmpty:()=>Le,CommandGroup:()=>be,CommandGroupCustom:()=>Se,CommandInput:()=>ye,CommandItem:()=>Ce,CommandItemCustom:()=>Ee,CommandList:()=>Pe,CommandLoading:()=>De,CommandRoot:()=>re,CommandSeparator:()=>Te,useCommandState:()=>D});module.exports=Oe(Ze);var w=de(require("@radix-ui/react-dialog")),t=de(require("react"));var fe=1,Ne=.9,Ge=.8,Ve=.17,Q=.1,Z=.999,Ke=.9999;var Fe=.99,je=/[\\\/_+.#"@\[\(\{&]/,$e=/[\\\/_+.#"@\[\(\{&]/g,Ue=/[\s-]/,pe=/[\s-]/g;function ee(e,o,r,a,c,s,l){if(s===o.length)return c===e.length?fe:Fe;var h=`${c},${s}`;if(l[h]!==void 0)return l[h];for(var m=a.charAt(s),p=r.indexOf(m,c),R=0,i,g,T,E;p>=0;)i=ee(e,o,r,a,p+1,s+1,l),i>R&&(p===c?i*=fe:je.test(e.charAt(p-1))?(i*=Ge,T=e.slice(c,p-1).match($e),T&&c>0&&(i*=Math.pow(Z,T.length))):Ue.test(e.charAt(p-1))?(i*=Ne,E=e.slice(c,p-1).match(pe),E&&c>0&&(i*=Math.pow(Z,E.length))):(i*=Ve,c>0&&(i*=Math.pow(Z,p-c))),e.charAt(p)!==o.charAt(s)&&(i*=Ke)),(i<Q&&r.charAt(p-1)===a.charAt(s+1)||a.charAt(s+1)===a.charAt(s)&&r.charAt(p-1)!==a.charAt(s))&&(g=ee(e,o,r,a,p+1,s+2,l),g*Q>i&&(i=g*Q)),i>R&&(R=i),p=r.indexOf(m,p+1);return l[h]=R,R}function me(e){return e.toLowerCase().replace(pe," ")}function Re(e,o){return ee(e,o,me(e),me(o),0,0,{})}var We='[cmdk-list-sizer=""]',$='[cmdk-group=""]',te='[cmdk-group-items=""]',qe='[cmdk-group-heading=""]',ne='[cmdk-item=""]',he=`${ne}:not([aria-disabled="true"])`,U="cmdk-item-select",k="data-value",Xe=(e,o)=>Re(e,o),ve=t.createContext(void 0),H=()=>t.useContext(ve),ge=t.createContext(void 0),q=()=>t.useContext(ge),X=t.createContext(void 0),re=t.forwardRef((e,o)=>{let r=t.useRef(null),a=G(()=>{var n;return{search:"",value:e.value??((n=e.defaultValue)==null?void 0:n.toLowerCase())??"",filtered:{count:0,items:new Map,groups:new Set}}}),c=G(()=>new Set),s=G(()=>new Map),l=G(()=>new Map),h=G(()=>new Set),m=oe(e),{label:p,children:R,value:i,onValueChange:g,filter:T,shouldFilter:E,shouldSort:O,...A}=e,y=t.useId(),V=t.useId(),b=t.useId(),M=ze();I(()=>{if(i!==void 0){let n=i.trim().toLowerCase();a.current.value=n,M(6,ae),P.emit()}},[i]);let P=t.useMemo(()=>({subscribe:n=>(h.current.add(n),()=>h.current.delete(n)),snapshot:()=>a.current,setState:(n,f,u)=>{var d,v,L;if(!Object.is(a.current[n],f)){if(a.current[n]=f,n==="search")J(),S(),M(1,N);else if(n==="value")if(((d=m.current)==null?void 0:d.value)!==void 0){let _=f??"";(L=(v=m.current).onValueChange)==null||L.call(v,_);return}else u||M(5,ae);P.emit()}},emit:()=>{h.current.forEach(n=>n())}}),[]),C=t.useMemo(()=>({value:(n,f)=>{f!==l.current.get(n)&&(l.current.set(n,f),a.current.filtered.items.set(n,K(f)),M(2,()=>{S(),P.emit()}))},item:(n,f)=>(c.current.add(n),f&&(s.current.has(f)?s.current.get(f).add(n):s.current.set(f,new Set([n]))),M(3,()=>{J(),S(),a.current.value||N(),P.emit()}),()=>{l.current.delete(n),c.current.delete(n),a.current.filtered.items.delete(n);let u=F();M(4,()=>{J(),(u==null?void 0:u.getAttribute("id"))===n&&N(),P.emit()})}),group:n=>(s.current.has(n)||s.current.set(n,new Set),()=>{l.current.delete(n),s.current.delete(n)}),filter:()=>m.current.shouldFilter,label:p||e["aria-label"],commandRef:r,listId:y,inputId:b,labelId:V}),[]);function K(n){var u;let f=((u=m.current)==null?void 0:u.filter)??Xe;return n?f(n,a.current.search):0}function S(){if(!r.current||!a.current.search||m.current.shouldSort===!1)return;let n=a.current.filtered.items,f=[];a.current.filtered.groups.forEach(d=>{let v=s.current.get(d),L=0;v.forEach(_=>{let Ae=n.get(_);L=Math.max(Ae,L)}),f.push([d,L])});let u=r.current.querySelector(We);j().sort((d,v)=>{let L=d.getAttribute(k),_=v.getAttribute(k);return(n.get(_)??0)-(n.get(L)??0)}).forEach(d=>{let v=d.closest(te);v?v.appendChild(d.parentElement===v?d:d.closest(`${te} > *`)):u.appendChild(d.parentElement===u?d:d.closest(`${te} > *`))}),f.sort((d,v)=>v[1]-d[1]).forEach(d=>{let v=r.current.querySelector(`${$}[${k}="${d[0]}"]`);v==null||v.parentElement.appendChild(v)})}function N(){let n=j().find(u=>!u.ariaDisabled),f=n==null?void 0:n.getAttribute(k);P.setState("value",f||void 0)}function J(){if(!a.current.search||m.current.shouldFilter===!1){a.current.filtered.count=c.current.size;return}a.current.filtered.groups=new Set;let n=0;for(let f of c.current){let u=l.current.get(f),d=K(u);a.current.filtered.items.set(f,d),d>0&&n++}for(let[f,u]of s.current)for(let d of u)if(a.current.filtered.items.get(d)>0){a.current.filtered.groups.add(f);break}a.current.filtered.count=n}function ae(){var f,u,d;let n=F();n&&(((f=n.parentElement)==null?void 0:f.firstChild)===n&&((d=(u=n.closest($))==null?void 0:u.querySelector(qe))==null||d.scrollIntoView({block:"nearest"})),n.scrollIntoView({block:"nearest"}))}function F(){var n;return(n=r.current)==null?void 0:n.querySelector(`${ne}[aria-selected="true"]`)}function j(){return Array.from(r.current.querySelectorAll(he))}function Y(n){let u=j()[n];u&&P.setState("value",u.getAttribute(k))}function z(n){var L;let f=F(),u=j(),d=u.findIndex(_=>_===f),v=u[d+n];(L=m.current)!=null&&L.loop&&(v=d+n<0?u[u.length-1]:d+n===u.length?u[0]:u[d+n]),v&&P.setState("value",v.getAttribute(k))}function ce(n){let f=F(),u=f==null?void 0:f.closest($),d;for(;u&&!d;)u=n>0?Je(u,$):Ye(u,$),d=u==null?void 0:u.querySelector(he);d?P.setState("value",d.getAttribute(k)):z(n)}let se=()=>Y(j().length-1),ie=n=>{n.preventDefault(),n.metaKey?se():n.altKey?ce(1):z(1)},ue=n=>{n.preventDefault(),n.metaKey?Y(0):n.altKey?ce(-1):z(-1)};return t.createElement("div",{ref:x([r,o]),...A,"cmdk-root":"",onKeyDown:n=>{var f;if((f=A.onKeyDown)==null||f.call(A,n),!n.defaultPrevented)switch(n.key){case"n":case"j":{n.ctrlKey&&ie(n);break}case"ArrowDown":{ie(n);break}case"p":case"k":{n.ctrlKey&&ue(n);break}case"ArrowUp":{ue(n);break}case"Home":{n.preventDefault(),Y(0);break}case"End":{n.preventDefault(),se();break}case"Enter":{n.preventDefault();let u=F();if(u){let d=new Event(U);u.dispatchEvent(d)}}}}},t.createElement("label",{"cmdk-label":"",htmlFor:C.inputId,id:C.labelId,style:Qe},p),t.createElement(ge.Provider,{value:P},t.createElement(ve.Provider,{value:C},R)))}),Ee=t.forwardRef((e,o)=>{var K;let r=t.useId(),a=t.useRef(null),c=t.useContext(X),s=H(),l=oe(e),h=((K=l.current)==null?void 0:K.forceMount)??(c==null?void 0:c.forceMount);I(()=>s.item(r,c==null?void 0:c.id),[]);let m=B(r,a,[e.value,e.children,a]),p=q(),R=D(S=>S.value&&S.value===m.current),i=D(S=>h||s.filter()===!1?!0:S.search?S.filtered.items.get(r)>0:!0);t.useEffect(()=>{let S=a.current;if(!(!S||e.disabled))return S.addEventListener(U,O),()=>S.removeEventListener(U,O)},[i,e.onSelect,e.disabled]);let[g,T]=t.useState(null),E=300;t.useEffect(()=>{R&&T(Date.now())},[R]);function O(){var S,N;A(),(N=(S=l.current).onSelect)==null||N.call(S,m.current),a.current.click()}function A(){p.setState("value",m.current,!0)}if(!i)return null;let{disabled:y,value:V,onSelect:b,CustomAnchorTag:M,CustomPrefetchElement:P,...C}=e;return e.CustomAnchorTag?t.createElement(M,{id:r,to:e.href,ref:x([a,o]),role:"option",onClick:y?void 0:O,prefetch:"none",accessKey:C.accessKey,className:C.className,"cmdk-item":"",defaultValue:C.defaultValue,"aria-disabled":y||void 0,"aria-selected":R||void 0,"data-disabled":y||void 0,"data-selected":R||void 0,onPointerMove:y?void 0:A,defaultChecked:C.defaultChecked,suppressHydrationWarning:C.suppressHydrationWarning,suppressContentEditableWarning:C.suppressContentEditableWarning},e.children,R&&g+E<Date.now()?P({page:e.href}):null):t.createElement("a",{href:e.href,ref:x([a,o]),id:r,"cmdk-item":"",role:"option","aria-disabled":y||void 0,"aria-selected":R||void 0,"data-disabled":y||void 0,"data-selected":R||void 0,onPointerMove:y?void 0:A,onClick:y?void 0:O,className:C.className,defaultChecked:C.defaultChecked,defaultValue:C.defaultValue,suppressContentEditableWarning:C.suppressContentEditableWarning,suppressHydrationWarning:C.suppressHydrationWarning,accessKey:C.accessKey},e.children)}),Ce=t.forwardRef((e,o)=>{var V;let r=t.useId(),a=t.useRef(null),c=t.useContext(X),s=H(),l=oe(e),h=((V=l.current)==null?void 0:V.forceMount)??(c==null?void 0:c.forceMount);I(()=>s.item(r,c==null?void 0:c.id),[]);let m=B(r,a,[e.value,e.children,a]),p=q(),R=D(b=>b.value&&b.value===m.current),i=D(b=>h||s.filter()===!1?!0:b.search?b.filtered.items.get(r)>0:!0);t.useEffect(()=>{let b=a.current;if(!(!b||e.disabled))return b.addEventListener(U,g),()=>b.removeEventListener(U,g)},[i,e.onSelect,e.disabled]);function g(){var b,M;T(),(M=(b=l.current).onSelect)==null||M.call(b,m.current)}function T(){p.setState("value",m.current,!0)}if(!i)return null;let{disabled:E,value:O,onSelect:A,...y}=e;return t.createElement("div",{ref:x([a,o]),...y,id:r,"cmdk-item":"",role:"option","aria-disabled":E||void 0,"aria-selected":R||void 0,"data-disabled":E||void 0,"data-selected":R||void 0,onPointerMove:E?void 0:T,onClick:E?void 0:g},e.children)}),Se=t.forwardRef((e,o)=>{let{heading:r,children:a,forceMount:c,...s}=e,l=t.useId(),h=t.useRef(null),m=t.useRef(null),p=t.useId(),R=H(),i=D(E=>c||R.filter()===!1?!0:E.search?E.filtered.groups.has(l):!0);I(()=>R.group(l),[]),B(l,h,[e.value,e.heading,m]);let g=t.useMemo(()=>({id:l,forceMount:c}),[c]),T=t.createElement(X.Provider,{value:g},a);return t.createElement("div",{ref:x([h,o]),...s,"cmdk-group":"",role:"presentation",hidden:i?void 0:!0},r&&t.createElement("div",{ref:m,"cmdk-group-heading":"","aria-hidden":!0,id:p},r),t.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":r?p:void 0,className:e.customchildclassname},T))}),be=t.forwardRef((e,o)=>{let{heading:r,children:a,forceMount:c,...s}=e,l=t.useId(),h=t.useRef(null),m=t.useRef(null),p=t.useId(),R=H(),i=D(E=>c||R.filter()===!1?!0:E.search?E.filtered.groups.has(l):!0);I(()=>R.group(l),[]),B(l,h,[e.value,e.heading,m]);let g=t.useMemo(()=>({id:l,forceMount:c}),[c]),T=t.createElement(X.Provider,{value:g},a);return t.createElement("div",{ref:x([h,o]),...s,"cmdk-group":"",role:"presentation",hidden:i?void 0:!0},r&&t.createElement("div",{ref:m,"cmdk-group-heading":"","aria-hidden":!0,id:p},r),t.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":r?p:void 0},T))}),Te=t.forwardRef((e,o)=>{let{alwaysRender:r,...a}=e,c=t.useRef(null),s=D(l=>!l.search);return!r&&!s?null:t.createElement("div",{ref:x([c,o]),...a,"cmdk-separator":"",role:"separator"})}),ye=t.forwardRef((e,o)=>{let{onValueChange:r,loading:a,...c}=e,s=e.value!=null,l=q(),h=D(i=>i.search),m=D(i=>i.value),p=H(),R=t.useMemo(()=>{var g;let i=(g=p.commandRef.current)==null?void 0:g.querySelector(`${ne}[${k}="${m}"]`);return i==null?void 0:i.getAttribute("id")},[m,p.commandRef]);return t.useEffect(()=>{e.value!=null&&!a&&l.setState("search",e.value)},[e.value,a]),t.createElement("input",{ref:o,...c,"cmdk-input":"",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,"aria-controls":p.listId,"aria-labelledby":p.labelId,"aria-activedescendant":R,id:p.inputId,type:"text",value:s?e.value:h,onChange:i=>{s||l.setState("search",i.target.value),r==null||r(i.target.value)}})}),Pe=t.forwardRef((e,o)=>{let{children:r,...a}=e,c=t.useRef(null),s=t.useRef(null),l=H();return t.useEffect(()=>{if(s.current&&c.current){let h=s.current,m=c.current,p,R=new ResizeObserver(()=>{p=requestAnimationFrame(()=>{let i=h.offsetHeight;m.style.setProperty("--cmdk-list-height",i.toFixed(1)+"px")})});return R.observe(h),()=>{cancelAnimationFrame(p),R.unobserve(h)}}},[]),t.createElement("div",{ref:x([c,o]),...a,"cmdk-list":"",role:"listbox","aria-label":"Suggestions",id:l.listId,"aria-labelledby":l.inputId},t.createElement("div",{ref:s,"cmdk-list-sizer":""},r))}),Me=t.forwardRef((e,o)=>{let{open:r,onOpenChange:a,overlayClassName:c,contentClassName:s,container:l,...h}=e;return t.createElement(w.Root,{open:r,onOpenChange:a},t.createElement(w.Portal,{container:l},t.createElement(w.Overlay,{"cmdk-overlay":"",className:c}),t.createElement(w.Content,{"aria-label":e.label,"cmdk-dialog":"",className:s},t.createElement(re,{ref:o,...h}))))}),Le=t.forwardRef((e,o)=>{let r=t.useRef(!0),a=D(c=>c.filtered.count===0);return t.useEffect(()=>{r.current=!1},[]),r.current||!a?null:t.createElement("div",{ref:o,...e,"cmdk-empty":"",role:"presentation"})}),De=t.forwardRef((e,o)=>{let{progress:r,children:a,...c}=e;return t.createElement("div",{ref:o,...c,"cmdk-loading":"",role:"progressbar","aria-valuenow":r,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Loading..."},t.createElement("div",{"aria-hidden":!0},a))}),Be=Object.assign(re,{List:Pe,CustomItem:Ee,Item:Ce,Input:ye,CustomGroup:Se,Group:be,Separator:Te,Dialog:Me,Empty:Le,Loading:De});function Je(e,o){let r=e.nextElementSibling;for(;r;){if(r.matches(o))return r;r=r.nextElementSibling}}function Ye(e,o){let r=e.previousElementSibling;for(;r;){if(r.matches(o))return r;r=r.previousElementSibling}}function oe(e){let o=t.useRef(e);return I(()=>{o.current=e}),o}var I=typeof window>"u"?t.useEffect:t.useLayoutEffect;function G(e){let o=t.useRef();return o.current===void 0&&(o.current=e()),o}function x(e){return o=>{e.forEach(r=>{typeof r=="function"?r(o):r!=null&&(r.current=o)})}}function D(e){let o=q(),r=()=>e(o==null?void 0:o.snapshot());return t.useSyncExternalStore(o==null?void 0:o.subscribe,r,r)}function B(e,o,r){let a=t.useRef(),c=H();return I(()=>{var l;let s=(()=>{var h;for(let m of r){if(typeof m=="string")return m.trim().toLowerCase();if(typeof m=="object"&&"current"in m&&m.current)return(h=m.current.textContent)==null?void 0:h.trim().toLowerCase()}})();c.value(e,s),(l=o.current)==null||l.setAttribute(k,s),a.current=s}),a}var ze=()=>{let[e,o]=t.useState(),r=G(()=>new Map);return I(()=>{r.current.forEach(a=>a()),r.current=new Map},[e]),(a,c)=>{r.current.set(a,c),o({})}},Qe={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"};0&&(module.exports={Command,CommandDialog,CommandEmpty,CommandGroup,CommandGroupCustom,CommandInput,CommandItem,CommandItemCustom,CommandList,CommandLoading,CommandRoot,CommandSeparator,useCommandState});
