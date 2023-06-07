var ke=Object.create;var K=Object.defineProperty;var xe=Object.getOwnPropertyDescriptor;var Ie=Object.getOwnPropertyNames;var we=Object.getPrototypeOf,_e=Object.prototype.hasOwnProperty;var Oe=(e,o)=>{for(var r in o)K(e,r,{get:o[r],enumerable:!0})},le=(e,o,r,a)=>{if(o&&typeof o=="object"||typeof o=="function")for(let c of Ie(o))!_e.call(e,c)&&c!==r&&K(e,c,{get:()=>o[c],enumerable:!(a=xe(o,c))||a.enumerable});return e};var ue=(e,o,r)=>(r=e!=null?ke(we(e)):{},le(o||!e||!e.__esModule?K(r,"default",{value:e,enumerable:!0}):r,e)),He=e=>le(K({},"__esModule",{value:!0}),e);var Qe={};Oe(Qe,{Command:()=>Xe,CommandDialog:()=>Me,CommandEmpty:()=>Le,CommandGroup:()=>Se,CommandGroupCustom:()=>Ce,CommandInput:()=>Te,CommandItem:()=>Ee,CommandItemCustom:()=>he,CommandList:()=>ye,CommandLoading:()=>Pe,CommandRoot:()=>te,CommandSeparator:()=>be,useCommandState:()=>L});module.exports=He(Qe);var k=ue(require("@radix-ui/react-dialog")),t=ue(require("react"));var de=1,Ne=.9,Ge=.8,Ve=.17,J=.1,z=.999,Ke=.9999;var Fe=.99,$e=/[\\\/_+.#"@\[\(\{&]/,je=/[\\\/_+.#"@\[\(\{&]/g,Ue=/[\s-]/,me=/[\s-]/g;function Q(e,o,r,a,c,s,u){if(s===o.length)return c===e.length?de:Fe;var p=`${c},${s}`;if(u[p]!==void 0)return u[p];for(var R=a.charAt(s),m=r.indexOf(R,c),v=0,i,S,T,C;m>=0;)i=Q(e,o,r,a,m+1,s+1,u),i>v&&(m===c?i*=de:$e.test(e.charAt(m-1))?(i*=Ge,T=e.slice(c,m-1).match(je),T&&c>0&&(i*=Math.pow(z,T.length))):Ue.test(e.charAt(m-1))?(i*=Ne,C=e.slice(c,m-1).match(me),C&&c>0&&(i*=Math.pow(z,C.length))):(i*=Ve,c>0&&(i*=Math.pow(z,m-c))),e.charAt(m)!==o.charAt(s)&&(i*=Ke)),(i<J&&r.charAt(m-1)===a.charAt(s+1)||a.charAt(s+1)===a.charAt(s)&&r.charAt(m-1)!==a.charAt(s))&&(S=Q(e,o,r,a,m+1,s+2,u),S*J>i&&(i=S*J)),i>v&&(v=i),m=r.indexOf(R,m+1);return u[p]=v,v}function fe(e){return e.toLowerCase().replace(me," ")}function Re(e,o){return Q(e,o,fe(e),fe(o),0,0,{})}var We='[cmdk-list-sizer=""]',N='[cmdk-group=""]',Z='[cmdk-group-items=""]',qe='[cmdk-group-heading=""]',ee='[cmdk-item=""]',pe=`${ee}:not([aria-disabled="true"])`,G="cmdk-item-select",P="data-value",Be=(e,o)=>Re(e,o),ve=t.createContext(void 0),w=()=>t.useContext(ve),ge=t.createContext(void 0),F=()=>t.useContext(ge),$=t.createContext(void 0),te=t.forwardRef((e,o)=>{let r=t.useRef(null),a=_(()=>{var n;return{search:"",value:e.value??((n=e.defaultValue)==null?void 0:n.toLowerCase())??"",filtered:{count:0,items:new Map,groups:new Set}}}),c=_(()=>new Set),s=_(()=>new Map),u=_(()=>new Map),p=_(()=>new Set),R=ne(e),{label:m,children:v,value:i,onValueChange:S,filter:T,shouldFilter:C,...y}=e;console.log("AllItems: ",c);let U=t.useId(),V=t.useId(),b=t.useId(),h=Ae();x(()=>{if(i!==void 0){let n=i.trim().toLowerCase();a.current.value=n,h(6,oe),g.emit()}},[i]);let g=t.useMemo(()=>({subscribe:n=>(p.current.add(n),()=>p.current.delete(n)),snapshot:()=>a.current,setState:(n,f,l)=>{var d,E,M;if(!Object.is(a.current[n],f)){if(a.current[n]=f,n==="search")B(),W(),h(1,q);else if(n==="value")if(((d=R.current)==null?void 0:d.value)!==void 0){let I=f??"";(M=(E=R.current).onValueChange)==null||M.call(E,I);return}else l||h(5,oe);g.emit()}},emit:()=>{p.current.forEach(n=>n())}}),[]),A=t.useMemo(()=>({value:(n,f)=>{f!==u.current.get(n)&&(u.current.set(n,f),a.current.filtered.items.set(n,re(f)),h(2,()=>{W(),g.emit()}))},item:(n,f)=>(c.current.add(n),f&&(s.current.has(f)?s.current.get(f).add(n):s.current.set(f,new Set([n]))),h(3,()=>{B(),W(),a.current.value||q(),g.emit()}),()=>{u.current.delete(n),c.current.delete(n),a.current.filtered.items.delete(n);let l=O();h(4,()=>{B(),(l==null?void 0:l.getAttribute("id"))===n&&q(),g.emit()})}),group:n=>(s.current.has(n)||s.current.set(n,new Set),()=>{u.current.delete(n),s.current.delete(n)}),filter:()=>R.current.shouldFilter,label:m||e["aria-label"],commandRef:r,listId:U,inputId:b,labelId:V}),[]);function re(n){var l;let f=((l=R.current)==null?void 0:l.filter)??Be;return n?f(n,a.current.search):0}function W(){if(!r.current||!a.current.search||R.current.shouldFilter===!1)return;let n=a.current.filtered.items,f=[];a.current.filtered.groups.forEach(d=>{let E=s.current.get(d),M=0;E.forEach(I=>{let De=n.get(I);M=Math.max(De,M)}),f.push([d,M])});let l=r.current.querySelector(We);H().sort((d,E)=>{let M=d.getAttribute(P),I=E.getAttribute(P);return(n.get(I)??0)-(n.get(M)??0)}).forEach(d=>{let E=d.closest(Z);E?E.appendChild(d.parentElement===E?d:d.closest(`${Z} > *`)):l.appendChild(d.parentElement===l?d:d.closest(`${Z} > *`))}),f.sort((d,E)=>E[1]-d[1]).forEach(d=>{let E=r.current.querySelector(`${N}[${P}="${d[0]}"]`);E==null||E.parentElement.appendChild(E)})}function q(){let n=H().find(l=>!l.ariaDisabled),f=n==null?void 0:n.getAttribute(P);console.log(`Selecting First Item: ${n}, value: ${f}`),g.setState("value",f||void 0)}function B(){if(!a.current.search||R.current.shouldFilter===!1){a.current.filtered.count=c.current.size;return}a.current.filtered.groups=new Set;let n=0;for(let f of c.current){let l=u.current.get(f),d=re(l);a.current.filtered.items.set(f,d),d>0&&n++}for(let[f,l]of s.current)for(let d of l)if(a.current.filtered.items.get(d)>0){a.current.filtered.groups.add(f);break}a.current.filtered.count=n}function oe(){var f,l,d;let n=O();n&&(((f=n.parentElement)==null?void 0:f.firstChild)===n&&((d=(l=n.closest(N))==null?void 0:l.querySelector(qe))==null||d.scrollIntoView({block:"nearest"})),n.scrollIntoView({block:"nearest"}))}function O(){var n;return(n=r.current)==null?void 0:n.querySelector(`${ee}[aria-selected="true"]`)}function H(){return Array.from(r.current.querySelectorAll(pe))}function X(n){let l=H()[n];l&&g.setState("value",l.getAttribute(P))}function Y(n){var M;let f=O(),l=H(),d=l.findIndex(I=>I===f),E=l[d+n];(M=R.current)!=null&&M.loop&&(E=d+n<0?l[l.length-1]:d+n===l.length?l[0]:l[d+n]),E&&g.setState("value",E.getAttribute(P))}function ae(n){let f=O(),l=f==null?void 0:f.closest(N),d;for(;l&&!d;)l=n>0?Ye(l,N):Je(l,N),d=l==null?void 0:l.querySelector(pe);d?g.setState("value",d.getAttribute(P)):Y(n)}let ce=()=>X(H().length-1),se=n=>{n.preventDefault(),n.metaKey?ce():n.altKey?ae(1):Y(1)},ie=n=>{n.preventDefault(),n.metaKey?X(0):n.altKey?ae(-1):Y(-1)};return t.createElement("div",{ref:D([r,o]),...y,"cmdk-root":"",onKeyDown:n=>{var f;if((f=y.onKeyDown)==null||f.call(y,n),!n.defaultPrevented)switch(n.key){case"n":case"j":{n.ctrlKey&&se(n);break}case"ArrowDown":{se(n);break}case"p":case"k":{n.ctrlKey&&ie(n);break}case"ArrowUp":{ie(n);break}case"Home":{n.preventDefault(),X(0);break}case"End":{n.preventDefault(),ce();break}case"Enter":{n.preventDefault();let l=O();if(l){let d=new Event(G);l.dispatchEvent(d)}}}}},t.createElement("label",{"cmdk-label":"",htmlFor:A.inputId,id:A.labelId,style:ze},m),t.createElement(ge.Provider,{value:g},t.createElement(ve.Provider,{value:A},v)))}),he=t.forwardRef((e,o)=>{var h;let r=t.useId(),a=t.useRef(null),c=t.useContext($),s=w(),u=ne(e),p=((h=u.current)==null?void 0:h.forceMount)??(c==null?void 0:c.forceMount);x(()=>s.item(r,c==null?void 0:c.id),[]);let R=j(r,a,[e.value,e.children,a]),m=F(),v=L(g=>g.value&&g.value===R.current),i=L(g=>p||s.filter()===!1?!0:g.search?g.filtered.items.get(r)>0:!0);t.useEffect(()=>{let g=a.current;if(!(!g||e.disabled))return g.addEventListener(G,T),()=>g.removeEventListener(G,T)},[i,e.onSelect,e.disabled]);let S=Ae();t.useEffect(()=>{if(v){console.log("Current Ref is Selected: ",a.current),console.log("Current Input Ref: ",e.inputRef.current);let g=new Event("mouseenter"),A=new Event("mouseleave");S(0,()=>a.current.dispatchEvent(g)),S(5,()=>a.current.dispatchEvent(A))}},[v]);function T(){var g,A;C(),(A=(g=u.current).onSelect)==null||A.call(g,R.current),a.current.click()}function C(){m.setState("value",R.current,!0)}if(!i)return null;let{disabled:y,value:U,onSelect:V,...b}=e;return e.CustomAnchorTag?t.createElement(e.CustomAnchorTag,{to:e.href,prefetch:"intent",ref:D([a,o]),id:r,"cmdk-item":"",role:"option","aria-disabled":y||void 0,"aria-selected":v||void 0,"data-disabled":y||void 0,"data-selected":v||void 0,onPointerMove:y?void 0:C,onClick:y?void 0:T,className:b.className,defaultChecked:b.defaultChecked,defaultValue:b.defaultValue,suppressContentEditableWarning:b.suppressContentEditableWarning,suppressHydrationWarning:b.suppressHydrationWarning,accessKey:b.accessKey},e.children):t.createElement("a",{href:e.href,ref:D([a,o]),id:r,"cmdk-item":"",role:"option","aria-disabled":y||void 0,"aria-selected":v||void 0,"data-disabled":y||void 0,"data-selected":v||void 0,onPointerMove:y?void 0:C,onClick:y?void 0:T,className:b.className,defaultChecked:b.defaultChecked,defaultValue:b.defaultValue,suppressContentEditableWarning:b.suppressContentEditableWarning,suppressHydrationWarning:b.suppressHydrationWarning,accessKey:b.accessKey},e.children)}),Ee=t.forwardRef((e,o)=>{var b;let r=t.useId(),a=t.useRef(null),c=t.useContext($),s=w(),u=ne(e),p=((b=u.current)==null?void 0:b.forceMount)??(c==null?void 0:c.forceMount);x(()=>s.item(r,c==null?void 0:c.id),[]);let R=j(r,a,[e.value,e.children,a]),m=F(),v=L(h=>h.value&&h.value===R.current),i=L(h=>p||s.filter()===!1?!0:h.search?h.filtered.items.get(r)>0:!0);t.useEffect(()=>{let h=a.current;if(!(!h||e.disabled))return h.addEventListener(G,S),()=>h.removeEventListener(G,S)},[i,e.onSelect,e.disabled]);function S(){var h,g;T(),(g=(h=u.current).onSelect)==null||g.call(h,R.current)}function T(){m.setState("value",R.current,!0)}if(!i)return null;let{disabled:C,value:y,onSelect:U,...V}=e;return t.createElement("div",{ref:D([a,o]),...V,id:r,"cmdk-item":"",role:"option","aria-disabled":C||void 0,"aria-selected":v||void 0,"data-disabled":C||void 0,"data-selected":v||void 0,onPointerMove:C?void 0:T,onClick:C?void 0:S},e.children)}),Ce=t.forwardRef((e,o)=>{let{heading:r,children:a,forceMount:c,...s}=e,u=t.useId(),p=t.useRef(null),R=t.useRef(null),m=t.useId(),v=w(),i=L(C=>c||v.filter()===!1?!0:C.search?C.filtered.groups.has(u):!0);x(()=>v.group(u),[]),j(u,p,[e.value,e.heading,R]);let S=t.useMemo(()=>({id:u,forceMount:c}),[c]),T=t.createElement($.Provider,{value:S},a);return t.createElement("div",{ref:D([p,o]),...s,"cmdk-group":"",role:"presentation",hidden:i?void 0:!0},r&&t.createElement("div",{ref:R,"cmdk-group-heading":"","aria-hidden":!0,id:m},r),t.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":r?m:void 0,className:e.customchildclassname},T))}),Se=t.forwardRef((e,o)=>{let{heading:r,children:a,forceMount:c,...s}=e,u=t.useId(),p=t.useRef(null),R=t.useRef(null),m=t.useId(),v=w(),i=L(C=>c||v.filter()===!1?!0:C.search?C.filtered.groups.has(u):!0);x(()=>v.group(u),[]),j(u,p,[e.value,e.heading,R]);let S=t.useMemo(()=>({id:u,forceMount:c}),[c]),T=t.createElement($.Provider,{value:S},a);return t.createElement("div",{ref:D([p,o]),...s,"cmdk-group":"",role:"presentation",hidden:i?void 0:!0},r&&t.createElement("div",{ref:R,"cmdk-group-heading":"","aria-hidden":!0,id:m},r),t.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":r?m:void 0},T))}),be=t.forwardRef((e,o)=>{let{alwaysRender:r,...a}=e,c=t.useRef(null),s=L(u=>!u.search);return!r&&!s?null:t.createElement("div",{ref:D([c,o]),...a,"cmdk-separator":"",role:"separator"})}),Te=t.forwardRef((e,o)=>{let{onValueChange:r,loading:a,...c}=e,s=e.value!=null,u=F(),p=L(i=>i.search),R=L(i=>i.value),m=w();console.log("Store Snapshot: ",u.snapshot()),console.log("Search: ",p),console.log("Context: ",m),console.log("Props: ",e);let v=t.useMemo(()=>{var S;let i=(S=m.commandRef.current)==null?void 0:S.querySelector(`${ee}[${P}="${R}"]`);return i==null?void 0:i.getAttribute("id")},[R,m.commandRef]);return t.useEffect(()=>{e.value!=null&&u.setState("search",e.value)},[e.value,a]),t.createElement("input",{ref:o,...c,"cmdk-input":"",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,"aria-controls":m.listId,"aria-labelledby":m.labelId,"aria-activedescendant":v,id:m.inputId,type:"text",value:s?e.value:p,onChange:i=>{s||u.setState("search",i.target.value),r==null||r(i.target.value)}})}),ye=t.forwardRef((e,o)=>{let{children:r,...a}=e,c=t.useRef(null),s=t.useRef(null),u=w();return t.useEffect(()=>{if(s.current&&c.current){let p=s.current,R=c.current,m,v=new ResizeObserver(()=>{m=requestAnimationFrame(()=>{let i=p.offsetHeight;R.style.setProperty("--cmdk-list-height",i.toFixed(1)+"px")})});return v.observe(p),()=>{cancelAnimationFrame(m),v.unobserve(p)}}},[]),t.createElement("div",{ref:D([c,o]),...a,"cmdk-list":"",role:"listbox","aria-label":"Suggestions",id:u.listId,"aria-labelledby":u.inputId},t.createElement("div",{ref:s,"cmdk-list-sizer":""},r))}),Me=t.forwardRef((e,o)=>{let{open:r,onOpenChange:a,overlayClassName:c,contentClassName:s,container:u,...p}=e;return t.createElement(k.Root,{open:r,onOpenChange:a},t.createElement(k.Portal,{container:u},t.createElement(k.Overlay,{"cmdk-overlay":"",className:c}),t.createElement(k.Content,{"aria-label":e.label,"cmdk-dialog":"",className:s},t.createElement(te,{ref:o,...p}))))}),Le=t.forwardRef((e,o)=>{let r=t.useRef(!0),a=L(c=>c.filtered.count===0);return t.useEffect(()=>{r.current=!1},[]),r.current||!a?null:t.createElement("div",{ref:o,...e,"cmdk-empty":"",role:"presentation"})}),Pe=t.forwardRef((e,o)=>{let{progress:r,children:a,...c}=e;return t.createElement("div",{ref:o,...c,"cmdk-loading":"",role:"progressbar","aria-valuenow":r,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Loading..."},t.createElement("div",{"aria-hidden":!0},a))}),Xe=Object.assign(te,{List:ye,CustomItem:he,Item:Ee,Input:Te,CustomGroup:Ce,Group:Se,Separator:be,Dialog:Me,Empty:Le,Loading:Pe});function Ye(e,o){let r=e.nextElementSibling;for(;r;){if(r.matches(o))return r;r=r.nextElementSibling}}function Je(e,o){let r=e.previousElementSibling;for(;r;){if(r.matches(o))return r;r=r.previousElementSibling}}function ne(e){let o=t.useRef(e);return x(()=>{o.current=e}),o}var x=typeof window>"u"?t.useEffect:t.useLayoutEffect;function _(e){let o=t.useRef();return o.current===void 0&&(o.current=e()),o}function D(e){return o=>{e.forEach(r=>{typeof r=="function"?r(o):r!=null&&(r.current=o)})}}function L(e){let o=F(),r=()=>e(o==null?void 0:o.snapshot());return t.useSyncExternalStore(o==null?void 0:o.subscribe,r,r)}function j(e,o,r){let a=t.useRef(),c=w();return x(()=>{var u;let s=(()=>{var p;for(let R of r){if(typeof R=="string")return R.trim().toLowerCase();if(typeof R=="object"&&"current"in R&&R.current)return(p=R.current.textContent)==null?void 0:p.trim().toLowerCase()}})();c.value(e,s),(u=o.current)==null||u.setAttribute(P,s),a.current=s}),a}var Ae=()=>{let[e,o]=t.useState(),r=_(()=>new Map);return x(()=>{r.current.forEach(a=>a()),r.current=new Map},[e]),(a,c)=>{r.current.set(a,c),o({})}},ze={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"};0&&(module.exports={Command,CommandDialog,CommandEmpty,CommandGroup,CommandGroupCustom,CommandInput,CommandItem,CommandItemCustom,CommandList,CommandLoading,CommandRoot,CommandSeparator,useCommandState});
