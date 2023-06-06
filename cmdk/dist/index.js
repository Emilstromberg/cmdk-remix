var ke=Object.create;var K=Object.defineProperty;var xe=Object.getOwnPropertyDescriptor;var Ie=Object.getOwnPropertyNames;var we=Object.getPrototypeOf,_e=Object.prototype.hasOwnProperty;var Oe=(e,o)=>{for(var r in o)K(e,r,{get:o[r],enumerable:!0})},le=(e,o,r,c)=>{if(o&&typeof o=="object"||typeof o=="function")for(let a of Ie(o))!_e.call(e,a)&&a!==r&&K(e,a,{get:()=>o[a],enumerable:!(c=xe(o,a))||c.enumerable});return e};var ue=(e,o,r)=>(r=e!=null?ke(we(e)):{},le(o||!e||!e.__esModule?K(r,"default",{value:e,enumerable:!0}):r,e)),He=e=>le(K({},"__esModule",{value:!0}),e);var Qe={};Oe(Qe,{Command:()=>Xe,CommandDialog:()=>Me,CommandEmpty:()=>Le,CommandGroup:()=>Se,CommandGroupCustom:()=>Ce,CommandInput:()=>Te,CommandItem:()=>Ee,CommandItemCustom:()=>he,CommandList:()=>ye,CommandLoading:()=>Pe,CommandRoot:()=>te,CommandSeparator:()=>be,useCommandState:()=>L});module.exports=He(Qe);var D=ue(require("@radix-ui/react-dialog")),t=ue(require("react"));var de=1,Ne=.9,Ge=.8,Ve=.17,J=.1,z=.999,Ke=.9999;var Fe=.99,je=/[\\\/_+.#"@\[\(\{&]/,$e=/[\\\/_+.#"@\[\(\{&]/g,Ue=/[\s-]/,me=/[\s-]/g;function Q(e,o,r,c,a,s,l){if(s===o.length)return a===e.length?de:Fe;var g=`${a},${s}`;if(l[g]!==void 0)return l[g];for(var u=c.charAt(s),p=r.indexOf(u,a),f=0,R,T,b,C;p>=0;)R=Q(e,o,r,c,p+1,s+1,l),R>f&&(p===a?R*=de:je.test(e.charAt(p-1))?(R*=Ge,b=e.slice(a,p-1).match($e),b&&a>0&&(R*=Math.pow(z,b.length))):Ue.test(e.charAt(p-1))?(R*=Ne,C=e.slice(a,p-1).match(me),C&&a>0&&(R*=Math.pow(z,C.length))):(R*=Ve,a>0&&(R*=Math.pow(z,p-a))),e.charAt(p)!==o.charAt(s)&&(R*=Ke)),(R<J&&r.charAt(p-1)===c.charAt(s+1)||c.charAt(s+1)===c.charAt(s)&&r.charAt(p-1)!==c.charAt(s))&&(T=Q(e,o,r,c,p+1,s+2,l),T*J>R&&(R=T*J)),R>f&&(f=R),p=r.indexOf(u,p+1);return l[g]=f,f}function fe(e){return e.toLowerCase().replace(me," ")}function Re(e,o){return Q(e,o,fe(e),fe(o),0,0,{})}var We='[cmdk-list-sizer=""]',N='[cmdk-group=""]',Z='[cmdk-group-items=""]',qe='[cmdk-group-heading=""]',ee='[cmdk-item=""]',pe=`${ee}:not([aria-disabled="true"])`,G="cmdk-item-select",P="data-value",Be=(e,o)=>Re(e,o),ge=t.createContext(void 0),I=()=>t.useContext(ge),ve=t.createContext(void 0),F=()=>t.useContext(ve),j=t.createContext(void 0),te=t.forwardRef((e,o)=>{let r=t.useRef(null),c=_(()=>{var n;return{search:"",value:e.value??((n=e.defaultValue)==null?void 0:n.toLowerCase())??"",filtered:{count:0,items:new Map,groups:new Set}}}),a=_(()=>new Set),s=_(()=>new Map),l=_(()=>new Map),g=_(()=>new Set),u=ne(e),{label:p,children:f,value:R,onValueChange:T,filter:b,shouldFilter:C,...y}=e;console.log("AllItems: ",a);let U=t.useId(),V=t.useId(),S=t.useId(),h=Ae();k(()=>{if(R!==void 0){let n=R.trim().toLowerCase();c.current.value=n,h(6,oe),v.emit()}},[R]);let v=t.useMemo(()=>({subscribe:n=>(g.current.add(n),()=>g.current.delete(n)),snapshot:()=>c.current,setState:(n,m,i)=>{var d,E,M;if(!Object.is(c.current[n],m)){if(c.current[n]=m,n==="search")B(),W(),h(1,q);else if(n==="value")if(((d=u.current)==null?void 0:d.value)!==void 0){let x=m??"";(M=(E=u.current).onValueChange)==null||M.call(E,x);return}else i||h(5,oe);v.emit()}},emit:()=>{g.current.forEach(n=>n())}}),[]),w=t.useMemo(()=>({value:(n,m)=>{m!==l.current.get(n)&&(l.current.set(n,m),c.current.filtered.items.set(n,re(m)),h(2,()=>{W(),v.emit()}))},item:(n,m)=>(a.current.add(n),m&&(s.current.has(m)?s.current.get(m).add(n):s.current.set(m,new Set([n]))),h(3,()=>{B(),W(),c.current.value||q(),v.emit()}),()=>{l.current.delete(n),a.current.delete(n),c.current.filtered.items.delete(n);let i=O();h(4,()=>{B(),(i==null?void 0:i.getAttribute("id"))===n&&q(),v.emit()})}),group:n=>(s.current.has(n)||s.current.set(n,new Set),()=>{l.current.delete(n),s.current.delete(n)}),filter:()=>u.current.shouldFilter,label:p||e["aria-label"],commandRef:r,listId:U,inputId:S,labelId:V}),[]);function re(n){var i;let m=((i=u.current)==null?void 0:i.filter)??Be;return n?m(n,c.current.search):0}function W(){if(!r.current||!c.current.search||u.current.shouldFilter===!1)return;let n=c.current.filtered.items,m=[];c.current.filtered.groups.forEach(d=>{let E=s.current.get(d),M=0;E.forEach(x=>{let De=n.get(x);M=Math.max(De,M)}),m.push([d,M])});let i=r.current.querySelector(We);H().sort((d,E)=>{let M=d.getAttribute(P),x=E.getAttribute(P);return(n.get(x)??0)-(n.get(M)??0)}).forEach(d=>{let E=d.closest(Z);E?E.appendChild(d.parentElement===E?d:d.closest(`${Z} > *`)):i.appendChild(d.parentElement===i?d:d.closest(`${Z} > *`))}),m.sort((d,E)=>E[1]-d[1]).forEach(d=>{let E=r.current.querySelector(`${N}[${P}="${d[0]}"]`);E==null||E.parentElement.appendChild(E)})}function q(){let n=H().find(i=>!i.ariaDisabled),m=n==null?void 0:n.getAttribute(P);v.setState("value",m||void 0)}function B(){if(!c.current.search||u.current.shouldFilter===!1){c.current.filtered.count=a.current.size;return}c.current.filtered.groups=new Set;let n=0;for(let m of a.current){let i=l.current.get(m),d=re(i);c.current.filtered.items.set(m,d),d>0&&n++}for(let[m,i]of s.current)for(let d of i)if(c.current.filtered.items.get(d)>0){c.current.filtered.groups.add(m);break}c.current.filtered.count=n}function oe(){var m,i,d;let n=O();n&&(((m=n.parentElement)==null?void 0:m.firstChild)===n&&((d=(i=n.closest(N))==null?void 0:i.querySelector(qe))==null||d.scrollIntoView({block:"nearest"})),n.scrollIntoView({block:"nearest"}))}function O(){var n;return(n=r.current)==null?void 0:n.querySelector(`${ee}[aria-selected="true"]`)}function H(){return Array.from(r.current.querySelectorAll(pe))}function X(n){let i=H()[n];i&&v.setState("value",i.getAttribute(P))}function Y(n){var M;let m=O(),i=H(),d=i.findIndex(x=>x===m),E=i[d+n];(M=u.current)!=null&&M.loop&&(E=d+n<0?i[i.length-1]:d+n===i.length?i[0]:i[d+n]),E&&v.setState("value",E.getAttribute(P))}function ce(n){let m=O(),i=m==null?void 0:m.closest(N),d;for(;i&&!d;)i=n>0?Ye(i,N):Je(i,N),d=i==null?void 0:i.querySelector(pe);d?v.setState("value",d.getAttribute(P)):Y(n)}let ae=()=>X(H().length-1),se=n=>{n.preventDefault(),n.metaKey?ae():n.altKey?ce(1):Y(1)},ie=n=>{n.preventDefault(),n.metaKey?X(0):n.altKey?ce(-1):Y(-1)};return t.createElement("div",{ref:A([r,o]),...y,"cmdk-root":"",onKeyDown:n=>{var m;if((m=y.onKeyDown)==null||m.call(y,n),!n.defaultPrevented)switch(n.key){case"n":case"j":{n.ctrlKey&&se(n);break}case"ArrowDown":{se(n);break}case"p":case"k":{n.ctrlKey&&ie(n);break}case"ArrowUp":{ie(n);break}case"Home":{n.preventDefault(),X(0);break}case"End":{n.preventDefault(),ae();break}case"Enter":{console.log("In the enter..."),console.log("Current Event: ",n),n.preventDefault();let i=O();if(i){let d=new Event(G);i.dispatchEvent(d)}}}}},t.createElement("label",{"cmdk-label":"",htmlFor:w.inputId,id:w.labelId,style:ze},p),t.createElement(ve.Provider,{value:v},t.createElement(ge.Provider,{value:w},f)))}),he=t.forwardRef((e,o)=>{var h;let r=t.useId(),c=t.useRef(null),a=t.useContext(j),s=I(),l=ne(e),g=((h=l.current)==null?void 0:h.forceMount)??(a==null?void 0:a.forceMount);k(()=>s.item(r,a==null?void 0:a.id),[]);let u=$(r,c,[e.value,e.children,c]),p=F(),f=L(v=>v.value&&v.value===u.current),R=L(v=>g||s.filter()===!1?!0:v.search?v.filtered.items.get(r)>0:!0);t.useEffect(()=>{let v=c.current;if(!(!v||e.disabled))return v.addEventListener(G,b),()=>v.removeEventListener(G,b)},[R,e.onSelect,e.disabled]);let T=Ae();t.useEffect(()=>{f&&(console.log("Current Ref is Selected: ",c.current),T(1,()=>c.current.focus()),console.log("Current Input Ref: ",e.inputRef.current),T(1,()=>e.inputRef.current.focus()))},[f]);function b(){var v,w;C(),(w=(v=l.current).onSelect)==null||w.call(v,u.current),c.current.click()}function C(){p.setState("value",u.current,!0)}if(!R)return null;let{disabled:y,value:U,onSelect:V,...S}=e;return e.CustomAnchorTag?t.createElement(e.CustomAnchorTag,{to:e.href,prefetch:"intent",ref:A([c,o]),id:r,"cmdk-item":"",role:"option","aria-disabled":y||void 0,"aria-selected":f||void 0,"data-disabled":y||void 0,"data-selected":f||void 0,onPointerMove:y?void 0:C,onClick:y?void 0:b,className:S.className,defaultChecked:S.defaultChecked,defaultValue:S.defaultValue,suppressContentEditableWarning:S.suppressContentEditableWarning,suppressHydrationWarning:S.suppressHydrationWarning,accessKey:S.accessKey},e.children):t.createElement("a",{href:e.href,ref:A([c,o]),id:r,"cmdk-item":"",role:"option","aria-disabled":y||void 0,"aria-selected":f||void 0,"data-disabled":y||void 0,"data-selected":f||void 0,onPointerMove:y?void 0:C,onClick:y?void 0:b,className:S.className,defaultChecked:S.defaultChecked,defaultValue:S.defaultValue,suppressContentEditableWarning:S.suppressContentEditableWarning,suppressHydrationWarning:S.suppressHydrationWarning,accessKey:S.accessKey},e.children)}),Ee=t.forwardRef((e,o)=>{var S;let r=t.useId(),c=t.useRef(null),a=t.useContext(j),s=I(),l=ne(e),g=((S=l.current)==null?void 0:S.forceMount)??(a==null?void 0:a.forceMount);k(()=>s.item(r,a==null?void 0:a.id),[]);let u=$(r,c,[e.value,e.children,c]),p=F(),f=L(h=>h.value&&h.value===u.current),R=L(h=>g||s.filter()===!1?!0:h.search?h.filtered.items.get(r)>0:!0);t.useEffect(()=>{let h=c.current;if(!(!h||e.disabled))return h.addEventListener(G,T),()=>h.removeEventListener(G,T)},[R,e.onSelect,e.disabled]);function T(){var h,v;b(),(v=(h=l.current).onSelect)==null||v.call(h,u.current)}function b(){p.setState("value",u.current,!0)}if(!R)return null;let{disabled:C,value:y,onSelect:U,...V}=e;return t.createElement("div",{ref:A([c,o]),...V,id:r,"cmdk-item":"",role:"option","aria-disabled":C||void 0,"aria-selected":f||void 0,"data-disabled":C||void 0,"data-selected":f||void 0,onPointerMove:C?void 0:b,onClick:C?void 0:T},e.children)}),Ce=t.forwardRef((e,o)=>{let{heading:r,children:c,forceMount:a,...s}=e,l=t.useId(),g=t.useRef(null),u=t.useRef(null),p=t.useId(),f=I(),R=L(C=>a||f.filter()===!1?!0:C.search?C.filtered.groups.has(l):!0);k(()=>f.group(l),[]),$(l,g,[e.value,e.heading,u]);let T=t.useMemo(()=>({id:l,forceMount:a}),[a]),b=t.createElement(j.Provider,{value:T},c);return t.createElement("div",{ref:A([g,o]),...s,"cmdk-group":"",role:"presentation",hidden:R?void 0:!0},r&&t.createElement("div",{ref:u,"cmdk-group-heading":"","aria-hidden":!0,id:p},r),t.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":r?p:void 0,className:e.customchildclassname},b))}),Se=t.forwardRef((e,o)=>{let{heading:r,children:c,forceMount:a,...s}=e,l=t.useId(),g=t.useRef(null),u=t.useRef(null),p=t.useId(),f=I(),R=L(C=>a||f.filter()===!1?!0:C.search?C.filtered.groups.has(l):!0);k(()=>f.group(l),[]),$(l,g,[e.value,e.heading,u]);let T=t.useMemo(()=>({id:l,forceMount:a}),[a]),b=t.createElement(j.Provider,{value:T},c);return t.createElement("div",{ref:A([g,o]),...s,"cmdk-group":"",role:"presentation",hidden:R?void 0:!0},r&&t.createElement("div",{ref:u,"cmdk-group-heading":"","aria-hidden":!0,id:p},r),t.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":r?p:void 0},b))}),be=t.forwardRef((e,o)=>{let{alwaysRender:r,...c}=e,a=t.useRef(null),s=L(l=>!l.search);return!r&&!s?null:t.createElement("div",{ref:A([a,o]),...c,"cmdk-separator":"",role:"separator"})}),Te=t.forwardRef((e,o)=>{let{onValueChange:r,...c}=e,a=e.value!=null,s=F(),l=L(f=>f.search),g=L(f=>f.value),u=I();console.log("Store Snapshot: ",s.snapshot()),console.log("Search: ",l),console.log("Value: ",g),console.log("Context: ",u),console.log("Props: ",e);let p=t.useMemo(()=>{var R;let f=(R=u.commandRef.current)==null?void 0:R.querySelector(`${ee}[${P}="${g}"]`);return console.log("Selected Item: ",f),f==null?void 0:f.getAttribute("id")},[g,u.commandRef]);return t.useEffect(()=>{e.value!=null&&s.setState("search",e.value)},[e.value]),t.createElement("input",{ref:o,...c,"cmdk-input":"",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,"aria-controls":u.listId,"aria-labelledby":u.labelId,"aria-activedescendant":p,id:u.inputId,type:"text",value:a?e.value:l,onChange:f=>{a||s.setState("search",f.target.value),r==null||r(f.target.value)}})}),ye=t.forwardRef((e,o)=>{let{children:r,...c}=e,a=t.useRef(null),s=t.useRef(null),l=I();return t.useEffect(()=>{if(s.current&&a.current){let g=s.current,u=a.current,p,f=new ResizeObserver(()=>{p=requestAnimationFrame(()=>{let R=g.offsetHeight;u.style.setProperty("--cmdk-list-height",R.toFixed(1)+"px")})});return f.observe(g),()=>{cancelAnimationFrame(p),f.unobserve(g)}}},[]),t.createElement("div",{ref:A([a,o]),...c,"cmdk-list":"",role:"listbox","aria-label":"Suggestions",id:l.listId,"aria-labelledby":l.inputId},t.createElement("div",{ref:s,"cmdk-list-sizer":""},r))}),Me=t.forwardRef((e,o)=>{let{open:r,onOpenChange:c,overlayClassName:a,contentClassName:s,container:l,...g}=e;return t.createElement(D.Root,{open:r,onOpenChange:c},t.createElement(D.Portal,{container:l},t.createElement(D.Overlay,{"cmdk-overlay":"",className:a}),t.createElement(D.Content,{"aria-label":e.label,"cmdk-dialog":"",className:s},t.createElement(te,{ref:o,...g}))))}),Le=t.forwardRef((e,o)=>{let r=t.useRef(!0),c=L(a=>a.filtered.count===0);return t.useEffect(()=>{r.current=!1},[]),r.current||!c?null:t.createElement("div",{ref:o,...e,"cmdk-empty":"",role:"presentation"})}),Pe=t.forwardRef((e,o)=>{let{progress:r,children:c,...a}=e;return t.createElement("div",{ref:o,...a,"cmdk-loading":"",role:"progressbar","aria-valuenow":r,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Loading..."},t.createElement("div",{"aria-hidden":!0},c))}),Xe=Object.assign(te,{List:ye,CustomItem:he,Item:Ee,Input:Te,CustomGroup:Ce,Group:Se,Separator:be,Dialog:Me,Empty:Le,Loading:Pe});function Ye(e,o){let r=e.nextElementSibling;for(;r;){if(r.matches(o))return r;r=r.nextElementSibling}}function Je(e,o){let r=e.previousElementSibling;for(;r;){if(r.matches(o))return r;r=r.previousElementSibling}}function ne(e){let o=t.useRef(e);return k(()=>{o.current=e}),o}var k=typeof window>"u"?t.useEffect:t.useLayoutEffect;function _(e){let o=t.useRef();return o.current===void 0&&(o.current=e()),o}function A(e){return o=>{e.forEach(r=>{typeof r=="function"?r(o):r!=null&&(r.current=o)})}}function L(e){let o=F(),r=()=>e(o==null?void 0:o.snapshot());return t.useSyncExternalStore(o==null?void 0:o.subscribe,r,r)}function $(e,o,r){let c=t.useRef(),a=I();return k(()=>{var l;let s=(()=>{var g;for(let u of r){if(typeof u=="string")return u.trim().toLowerCase();if(typeof u=="object"&&"current"in u&&u.current)return(g=u.current.textContent)==null?void 0:g.trim().toLowerCase()}})();a.value(e,s),(l=o.current)==null||l.setAttribute(P,s),c.current=s}),c}var Ae=()=>{let[e,o]=t.useState(),r=_(()=>new Map);return k(()=>{r.current.forEach(c=>c()),r.current=new Map},[e]),(c,a)=>{r.current.set(c,a),o({})}},ze={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"};0&&(module.exports={Command,CommandDialog,CommandEmpty,CommandGroup,CommandGroupCustom,CommandInput,CommandItem,CommandItemCustom,CommandList,CommandLoading,CommandRoot,CommandSeparator,useCommandState});
