var ke=Object.create;var K=Object.defineProperty;var xe=Object.getOwnPropertyDescriptor;var Ie=Object.getOwnPropertyNames;var we=Object.getPrototypeOf,_e=Object.prototype.hasOwnProperty;var Oe=(e,o)=>{for(var r in o)K(e,r,{get:o[r],enumerable:!0})},le=(e,o,r,a)=>{if(o&&typeof o=="object"||typeof o=="function")for(let c of Ie(o))!_e.call(e,c)&&c!==r&&K(e,c,{get:()=>o[c],enumerable:!(a=xe(o,c))||a.enumerable});return e};var ue=(e,o,r)=>(r=e!=null?ke(we(e)):{},le(o||!e||!e.__esModule?K(r,"default",{value:e,enumerable:!0}):r,e)),He=e=>le(K({},"__esModule",{value:!0}),e);var Qe={};Oe(Qe,{Command:()=>Xe,CommandDialog:()=>Me,CommandEmpty:()=>Pe,CommandGroup:()=>Se,CommandGroupCustom:()=>Ce,CommandInput:()=>Te,CommandItem:()=>Ee,CommandItemCustom:()=>he,CommandList:()=>ye,CommandLoading:()=>Le,CommandRoot:()=>te,CommandSeparator:()=>be,useCommandState:()=>P});module.exports=He(Qe);var D=ue(require("@radix-ui/react-dialog")),t=ue(require("react"));var de=1,Ne=.9,Ge=.8,Ve=.17,J=.1,z=.999,Ke=.9999;var Fe=.99,je=/[\\\/_+.#"@\[\(\{&]/,$e=/[\\\/_+.#"@\[\(\{&]/g,Ue=/[\s-]/,me=/[\s-]/g;function Q(e,o,r,a,c,s,u){if(s===o.length)return c===e.length?de:Fe;var p=`${c},${s}`;if(u[p]!==void 0)return u[p];for(var f=a.charAt(s),m=r.indexOf(f,c),g=0,i,S,T,C;m>=0;)i=Q(e,o,r,a,m+1,s+1,u),i>g&&(m===c?i*=de:je.test(e.charAt(m-1))?(i*=Ge,T=e.slice(c,m-1).match($e),T&&c>0&&(i*=Math.pow(z,T.length))):Ue.test(e.charAt(m-1))?(i*=Ne,C=e.slice(c,m-1).match(me),C&&c>0&&(i*=Math.pow(z,C.length))):(i*=Ve,c>0&&(i*=Math.pow(z,m-c))),e.charAt(m)!==o.charAt(s)&&(i*=Ke)),(i<J&&r.charAt(m-1)===a.charAt(s+1)||a.charAt(s+1)===a.charAt(s)&&r.charAt(m-1)!==a.charAt(s))&&(S=Q(e,o,r,a,m+1,s+2,u),S*J>i&&(i=S*J)),i>g&&(g=i),m=r.indexOf(f,m+1);return u[p]=g,g}function fe(e){return e.toLowerCase().replace(me," ")}function Re(e,o){return Q(e,o,fe(e),fe(o),0,0,{})}var We='[cmdk-list-sizer=""]',N='[cmdk-group=""]',Z='[cmdk-group-items=""]',qe='[cmdk-group-heading=""]',ee='[cmdk-item=""]',pe=`${ee}:not([aria-disabled="true"])`,G="cmdk-item-select",L="data-value",Be=(e,o)=>Re(e,o),ge=t.createContext(void 0),I=()=>t.useContext(ge),ve=t.createContext(void 0),F=()=>t.useContext(ve),j=t.createContext(void 0),te=t.forwardRef((e,o)=>{let r=t.useRef(null),a=_(()=>{var n;return{search:"",value:e.value??((n=e.defaultValue)==null?void 0:n.toLowerCase())??"",filtered:{count:0,items:new Map,groups:new Set}}}),c=_(()=>new Set),s=_(()=>new Map),u=_(()=>new Map),p=_(()=>new Set),f=ne(e),{label:m,children:g,value:i,onValueChange:S,filter:T,shouldFilter:C,...y}=e;console.log("AllItems: ",c);let U=t.useId(),V=t.useId(),b=t.useId(),h=Ae();k(()=>{if(i!==void 0){let n=i.trim().toLowerCase();a.current.value=n,h(6,oe),v.emit()}},[i]);let v=t.useMemo(()=>({subscribe:n=>(p.current.add(n),()=>p.current.delete(n)),snapshot:()=>a.current,setState:(n,R,l)=>{var d,E,M;if(!Object.is(a.current[n],R)){if(a.current[n]=R,n==="search")B(),W(),h(1,q);else if(n==="value")if(((d=f.current)==null?void 0:d.value)!==void 0){let x=R??"";(M=(E=f.current).onValueChange)==null||M.call(E,x);return}else l||h(5,oe);v.emit()}},emit:()=>{p.current.forEach(n=>n())}}),[]),w=t.useMemo(()=>({value:(n,R)=>{R!==u.current.get(n)&&(u.current.set(n,R),a.current.filtered.items.set(n,re(R)),h(2,()=>{W(),v.emit()}))},item:(n,R)=>(c.current.add(n),R&&(s.current.has(R)?s.current.get(R).add(n):s.current.set(R,new Set([n]))),h(3,()=>{B(),W(),a.current.value||q(),v.emit()}),()=>{u.current.delete(n),c.current.delete(n),a.current.filtered.items.delete(n);let l=O();h(4,()=>{B(),(l==null?void 0:l.getAttribute("id"))===n&&q(),v.emit()})}),group:n=>(s.current.has(n)||s.current.set(n,new Set),()=>{u.current.delete(n),s.current.delete(n)}),filter:()=>f.current.shouldFilter,label:m||e["aria-label"],commandRef:r,listId:U,inputId:b,labelId:V}),[]);function re(n){var l;let R=((l=f.current)==null?void 0:l.filter)??Be;return n?R(n,a.current.search):0}function W(){if(!r.current||!a.current.search||f.current.shouldFilter===!1)return;let n=a.current.filtered.items,R=[];a.current.filtered.groups.forEach(d=>{let E=s.current.get(d),M=0;E.forEach(x=>{let De=n.get(x);M=Math.max(De,M)}),R.push([d,M])});let l=r.current.querySelector(We);H().sort((d,E)=>{let M=d.getAttribute(L),x=E.getAttribute(L);return(n.get(x)??0)-(n.get(M)??0)}).forEach(d=>{let E=d.closest(Z);E?E.appendChild(d.parentElement===E?d:d.closest(`${Z} > *`)):l.appendChild(d.parentElement===l?d:d.closest(`${Z} > *`))}),R.sort((d,E)=>E[1]-d[1]).forEach(d=>{let E=r.current.querySelector(`${N}[${L}="${d[0]}"]`);E==null||E.parentElement.appendChild(E)})}function q(){let n=H().find(l=>!l.ariaDisabled),R=n==null?void 0:n.getAttribute(L);v.setState("value",R||void 0)}function B(){if(!a.current.search||f.current.shouldFilter===!1){a.current.filtered.count=c.current.size;return}a.current.filtered.groups=new Set;let n=0;for(let R of c.current){let l=u.current.get(R),d=re(l);a.current.filtered.items.set(R,d),d>0&&n++}for(let[R,l]of s.current)for(let d of l)if(a.current.filtered.items.get(d)>0){a.current.filtered.groups.add(R);break}a.current.filtered.count=n}function oe(){var R,l,d;let n=O();n&&(((R=n.parentElement)==null?void 0:R.firstChild)===n&&((d=(l=n.closest(N))==null?void 0:l.querySelector(qe))==null||d.scrollIntoView({block:"nearest"})),n.scrollIntoView({block:"nearest"}))}function O(){var n;return(n=r.current)==null?void 0:n.querySelector(`${ee}[aria-selected="true"]`)}function H(){return Array.from(r.current.querySelectorAll(pe))}function X(n){let l=H()[n];l&&v.setState("value",l.getAttribute(L))}function Y(n){var M;let R=O(),l=H(),d=l.findIndex(x=>x===R),E=l[d+n];(M=f.current)!=null&&M.loop&&(E=d+n<0?l[l.length-1]:d+n===l.length?l[0]:l[d+n]),E&&v.setState("value",E.getAttribute(L))}function ae(n){let R=O(),l=R==null?void 0:R.closest(N),d;for(;l&&!d;)l=n>0?Ye(l,N):Je(l,N),d=l==null?void 0:l.querySelector(pe);d?v.setState("value",d.getAttribute(L)):Y(n)}let ce=()=>X(H().length-1),se=n=>{n.preventDefault(),n.metaKey?ce():n.altKey?ae(1):Y(1)},ie=n=>{n.preventDefault(),n.metaKey?X(0):n.altKey?ae(-1):Y(-1)};return t.createElement("div",{ref:A([r,o]),...y,"cmdk-root":"",onKeyDown:n=>{var R;if((R=y.onKeyDown)==null||R.call(y,n),!n.defaultPrevented)switch(n.key){case"n":case"j":{n.ctrlKey&&se(n);break}case"ArrowDown":{se(n);break}case"p":case"k":{n.ctrlKey&&ie(n);break}case"ArrowUp":{ie(n);break}case"Home":{n.preventDefault(),X(0);break}case"End":{n.preventDefault(),ce();break}case"Enter":{console.log("In the enter..."),console.log("Current Event: ",n),n.preventDefault();let l=O();if(l){let d=new Event(G);l.dispatchEvent(d)}}}}},t.createElement("label",{"cmdk-label":"",htmlFor:w.inputId,id:w.labelId,style:ze},m),t.createElement(ve.Provider,{value:v},t.createElement(ge.Provider,{value:w},g)))}),he=t.forwardRef((e,o)=>{var h;let r=t.useId(),a=t.useRef(null),c=t.useContext(j),s=I(),u=ne(e),p=((h=u.current)==null?void 0:h.forceMount)??(c==null?void 0:c.forceMount);k(()=>s.item(r,c==null?void 0:c.id),[]);let f=$(r,a,[e.value,e.children,a]),m=F(),g=P(v=>v.value&&v.value===f.current),i=P(v=>p||s.filter()===!1?!0:v.search?v.filtered.items.get(r)>0:!0);t.useEffect(()=>{let v=a.current;if(!(!v||e.disabled))return v.addEventListener(G,T),()=>v.removeEventListener(G,T)},[i,e.onSelect,e.disabled]);let S=Ae();t.useEffect(()=>{g&&(console.log("Current Ref is Selected: ",a.current),console.log("Current Input Ref: ",e.inputRef.current),S(0,()=>a.current.dispatchEvent(new Event("mouseenter"))),S(5,()=>a.current.dispatchEvent(new Event("mouseleave"))))},[g]);function T(){var v,w;C(),(w=(v=u.current).onSelect)==null||w.call(v,f.current),a.current.click()}function C(){m.setState("value",f.current,!0)}if(!i)return null;let{disabled:y,value:U,onSelect:V,...b}=e;return e.CustomAnchorTag?t.createElement(e.CustomAnchorTag,{to:e.href,prefetch:"intent",ref:A([a,o]),id:r,"cmdk-item":"",role:"option","aria-disabled":y||void 0,"aria-selected":g||void 0,"data-disabled":y||void 0,"data-selected":g||void 0,onPointerMove:y?void 0:C,onClick:y?void 0:T,className:b.className,defaultChecked:b.defaultChecked,defaultValue:b.defaultValue,suppressContentEditableWarning:b.suppressContentEditableWarning,suppressHydrationWarning:b.suppressHydrationWarning,accessKey:b.accessKey},e.children):t.createElement("a",{href:e.href,ref:A([a,o]),id:r,"cmdk-item":"",role:"option","aria-disabled":y||void 0,"aria-selected":g||void 0,"data-disabled":y||void 0,"data-selected":g||void 0,onPointerMove:y?void 0:C,onClick:y?void 0:T,className:b.className,defaultChecked:b.defaultChecked,defaultValue:b.defaultValue,suppressContentEditableWarning:b.suppressContentEditableWarning,suppressHydrationWarning:b.suppressHydrationWarning,accessKey:b.accessKey},e.children)}),Ee=t.forwardRef((e,o)=>{var b;let r=t.useId(),a=t.useRef(null),c=t.useContext(j),s=I(),u=ne(e),p=((b=u.current)==null?void 0:b.forceMount)??(c==null?void 0:c.forceMount);k(()=>s.item(r,c==null?void 0:c.id),[]);let f=$(r,a,[e.value,e.children,a]),m=F(),g=P(h=>h.value&&h.value===f.current),i=P(h=>p||s.filter()===!1?!0:h.search?h.filtered.items.get(r)>0:!0);t.useEffect(()=>{let h=a.current;if(!(!h||e.disabled))return h.addEventListener(G,S),()=>h.removeEventListener(G,S)},[i,e.onSelect,e.disabled]);function S(){var h,v;T(),(v=(h=u.current).onSelect)==null||v.call(h,f.current)}function T(){m.setState("value",f.current,!0)}if(!i)return null;let{disabled:C,value:y,onSelect:U,...V}=e;return t.createElement("div",{ref:A([a,o]),...V,id:r,"cmdk-item":"",role:"option","aria-disabled":C||void 0,"aria-selected":g||void 0,"data-disabled":C||void 0,"data-selected":g||void 0,onPointerMove:C?void 0:T,onClick:C?void 0:S},e.children)}),Ce=t.forwardRef((e,o)=>{let{heading:r,children:a,forceMount:c,...s}=e,u=t.useId(),p=t.useRef(null),f=t.useRef(null),m=t.useId(),g=I(),i=P(C=>c||g.filter()===!1?!0:C.search?C.filtered.groups.has(u):!0);k(()=>g.group(u),[]),$(u,p,[e.value,e.heading,f]);let S=t.useMemo(()=>({id:u,forceMount:c}),[c]),T=t.createElement(j.Provider,{value:S},a);return t.createElement("div",{ref:A([p,o]),...s,"cmdk-group":"",role:"presentation",hidden:i?void 0:!0},r&&t.createElement("div",{ref:f,"cmdk-group-heading":"","aria-hidden":!0,id:m},r),t.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":r?m:void 0,className:e.customchildclassname},T))}),Se=t.forwardRef((e,o)=>{let{heading:r,children:a,forceMount:c,...s}=e,u=t.useId(),p=t.useRef(null),f=t.useRef(null),m=t.useId(),g=I(),i=P(C=>c||g.filter()===!1?!0:C.search?C.filtered.groups.has(u):!0);k(()=>g.group(u),[]),$(u,p,[e.value,e.heading,f]);let S=t.useMemo(()=>({id:u,forceMount:c}),[c]),T=t.createElement(j.Provider,{value:S},a);return t.createElement("div",{ref:A([p,o]),...s,"cmdk-group":"",role:"presentation",hidden:i?void 0:!0},r&&t.createElement("div",{ref:f,"cmdk-group-heading":"","aria-hidden":!0,id:m},r),t.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":r?m:void 0},T))}),be=t.forwardRef((e,o)=>{let{alwaysRender:r,...a}=e,c=t.useRef(null),s=P(u=>!u.search);return!r&&!s?null:t.createElement("div",{ref:A([c,o]),...a,"cmdk-separator":"",role:"separator"})}),Te=t.forwardRef((e,o)=>{let{onValueChange:r,loading:a,...c}=e,s=e.value!=null,u=F(),p=P(i=>i.search),f=P(i=>i.value),m=I();console.log("Store Snapshot: ",u.snapshot()),console.log("Search: ",p),console.log("Value: ",f),console.log("Context: ",m),console.log("Props: ",e);let g=t.useMemo(()=>{var S;let i=(S=m.commandRef.current)==null?void 0:S.querySelector(`${ee}[${L}="${f}"]`);return console.log("Selected Item: ",i),i==null?void 0:i.getAttribute("id")},[f,m.commandRef]);return t.useEffect(()=>{console.log("Props Value: ",e.value," loading: ",a),e.value!=null&&(console.log("State Search commencing..."),u.setState("search",e.value))},[e.value,a]),t.createElement("input",{ref:o,...c,"cmdk-input":"",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,"aria-controls":m.listId,"aria-labelledby":m.labelId,"aria-activedescendant":g,id:m.inputId,type:"text",value:s?e.value:p,onChange:i=>{s||u.setState("search",i.target.value),r==null||r(i.target.value)}})}),ye=t.forwardRef((e,o)=>{let{children:r,...a}=e,c=t.useRef(null),s=t.useRef(null),u=I();return t.useEffect(()=>{if(s.current&&c.current){let p=s.current,f=c.current,m,g=new ResizeObserver(()=>{m=requestAnimationFrame(()=>{let i=p.offsetHeight;f.style.setProperty("--cmdk-list-height",i.toFixed(1)+"px")})});return g.observe(p),()=>{cancelAnimationFrame(m),g.unobserve(p)}}},[]),t.createElement("div",{ref:A([c,o]),...a,"cmdk-list":"",role:"listbox","aria-label":"Suggestions",id:u.listId,"aria-labelledby":u.inputId},t.createElement("div",{ref:s,"cmdk-list-sizer":""},r))}),Me=t.forwardRef((e,o)=>{let{open:r,onOpenChange:a,overlayClassName:c,contentClassName:s,container:u,...p}=e;return t.createElement(D.Root,{open:r,onOpenChange:a},t.createElement(D.Portal,{container:u},t.createElement(D.Overlay,{"cmdk-overlay":"",className:c}),t.createElement(D.Content,{"aria-label":e.label,"cmdk-dialog":"",className:s},t.createElement(te,{ref:o,...p}))))}),Pe=t.forwardRef((e,o)=>{let r=t.useRef(!0),a=P(c=>c.filtered.count===0);return t.useEffect(()=>{r.current=!1},[]),r.current||!a?null:t.createElement("div",{ref:o,...e,"cmdk-empty":"",role:"presentation"})}),Le=t.forwardRef((e,o)=>{let{progress:r,children:a,...c}=e;return t.createElement("div",{ref:o,...c,"cmdk-loading":"",role:"progressbar","aria-valuenow":r,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Loading..."},t.createElement("div",{"aria-hidden":!0},a))}),Xe=Object.assign(te,{List:ye,CustomItem:he,Item:Ee,Input:Te,CustomGroup:Ce,Group:Se,Separator:be,Dialog:Me,Empty:Pe,Loading:Le});function Ye(e,o){let r=e.nextElementSibling;for(;r;){if(r.matches(o))return r;r=r.nextElementSibling}}function Je(e,o){let r=e.previousElementSibling;for(;r;){if(r.matches(o))return r;r=r.previousElementSibling}}function ne(e){let o=t.useRef(e);return k(()=>{o.current=e}),o}var k=typeof window>"u"?t.useEffect:t.useLayoutEffect;function _(e){let o=t.useRef();return o.current===void 0&&(o.current=e()),o}function A(e){return o=>{e.forEach(r=>{typeof r=="function"?r(o):r!=null&&(r.current=o)})}}function P(e){let o=F(),r=()=>e(o==null?void 0:o.snapshot());return t.useSyncExternalStore(o==null?void 0:o.subscribe,r,r)}function $(e,o,r){let a=t.useRef(),c=I();return k(()=>{var u;let s=(()=>{var p;for(let f of r){if(typeof f=="string")return f.trim().toLowerCase();if(typeof f=="object"&&"current"in f&&f.current)return(p=f.current.textContent)==null?void 0:p.trim().toLowerCase()}})();c.value(e,s),(u=o.current)==null||u.setAttribute(L,s),a.current=s}),a}var Ae=()=>{let[e,o]=t.useState(),r=_(()=>new Map);return k(()=>{r.current.forEach(a=>a()),r.current=new Map},[e]),(a,c)=>{r.current.set(a,c),o({})}},ze={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"};0&&(module.exports={Command,CommandDialog,CommandEmpty,CommandGroup,CommandGroupCustom,CommandInput,CommandItem,CommandItemCustom,CommandList,CommandLoading,CommandRoot,CommandSeparator,useCommandState});
