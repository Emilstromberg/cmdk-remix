var Ae=Object.create;var V=Object.defineProperty;var ke=Object.getOwnPropertyDescriptor;var xe=Object.getOwnPropertyNames;var we=Object.getPrototypeOf,Ie=Object.prototype.hasOwnProperty;var _e=(e,a)=>{for(var r in a)V(e,r,{get:a[r],enumerable:!0})},ue=(e,a,r,o)=>{if(a&&typeof a=="object"||typeof a=="function")for(let c of xe(a))!Ie.call(e,c)&&c!==r&&V(e,c,{get:()=>a[c],enumerable:!(o=ke(a,c))||o.enumerable});return e};var le=(e,a,r)=>(r=e!=null?Ae(we(e)):{},ue(a||!e||!e.__esModule?V(r,"default",{value:e,enumerable:!0}):r,e)),Oe=e=>ue(V({},"__esModule",{value:!0}),e);var Qe={};_e(Qe,{Command:()=>Be,CommandDialog:()=>Me,CommandEmpty:()=>Pe,CommandGroup:()=>Se,CommandGroupCustom:()=>Ce,CommandInput:()=>Te,CommandItem:()=>Ee,CommandItemCustom:()=>ge,CommandList:()=>ye,CommandLoading:()=>Le,CommandRoot:()=>te,CommandSeparator:()=>be,useCommandState:()=>M});module.exports=Oe(Qe);var D=le(require("@radix-ui/react-dialog")),t=le(require("react"));var de=1,He=.9,Ne=.8,Ge=.17,J=.1,z=.999,Ve=.9999;var Ke=.99,Fe=/[\\\/_+.#"@\[\(\{&]/,$e=/[\\\/_+.#"@\[\(\{&]/g,je=/[\s-]/,me=/[\s-]/g;function Q(e,a,r,o,c,s,u){if(s===a.length)return c===e.length?de:Ke;var h=`${c},${s}`;if(u[h]!==void 0)return u[h];for(var l=o.charAt(s),p=r.indexOf(l,c),f=0,R,C,T,g;p>=0;)R=Q(e,a,r,o,p+1,s+1,u),R>f&&(p===c?R*=de:Fe.test(e.charAt(p-1))?(R*=Ne,T=e.slice(c,p-1).match($e),T&&c>0&&(R*=Math.pow(z,T.length))):je.test(e.charAt(p-1))?(R*=He,g=e.slice(c,p-1).match(me),g&&c>0&&(R*=Math.pow(z,g.length))):(R*=Ge,c>0&&(R*=Math.pow(z,p-c))),e.charAt(p)!==a.charAt(s)&&(R*=Ve)),(R<J&&r.charAt(p-1)===o.charAt(s+1)||o.charAt(s+1)===o.charAt(s)&&r.charAt(p-1)!==o.charAt(s))&&(C=Q(e,a,r,o,p+1,s+2,u),C*J>R&&(R=C*J)),R>f&&(f=R),p=r.indexOf(l,p+1);return u[h]=f,f}function fe(e){return e.toLowerCase().replace(me," ")}function Re(e,a){return Q(e,a,fe(e),fe(a),0,0,{})}var Ue='[cmdk-list-sizer=""]',N='[cmdk-group=""]',Z='[cmdk-group-items=""]',We='[cmdk-group-heading=""]',ee='[cmdk-item=""]',pe=`${ee}:not([aria-disabled="true"])`,G="cmdk-item-select",P="data-value",qe=(e,a)=>Re(e,a),ve=t.createContext(void 0),w=()=>t.useContext(ve),he=t.createContext(void 0),K=()=>t.useContext(he),F=t.createContext(void 0),te=t.forwardRef((e,a)=>{let r=t.useRef(null),o=_(()=>{var n;return{search:"",value:e.value??((n=e.defaultValue)==null?void 0:n.toLowerCase())??"",filtered:{count:0,items:new Map,groups:new Set}}}),c=_(()=>new Set),s=_(()=>new Map),u=_(()=>new Map),h=_(()=>new Set),l=ne(e),{label:p,children:f,value:R,onValueChange:C,filter:T,shouldFilter:g,...I}=e,j=t.useId(),S=t.useId(),k=t.useId(),v=Je();A(()=>{if(R!==void 0){let n=R.trim().toLowerCase();o.current.value=n,v(6,ae),b.emit()}},[R]);let b=t.useMemo(()=>({subscribe:n=>(h.current.add(n),()=>h.current.delete(n)),snapshot:()=>o.current,setState:(n,m,i)=>{var d,E,y;if(!Object.is(o.current[n],m)){if(o.current[n]=m,n==="search")B(),W(),v(1,q);else if(n==="value")if(((d=l.current)==null?void 0:d.value)!==void 0){let x=m??"";(y=(E=l.current).onValueChange)==null||y.call(E,x);return}else i||v(5,ae);b.emit()}},emit:()=>{h.current.forEach(n=>n())}}),[]),U=t.useMemo(()=>({value:(n,m)=>{m!==u.current.get(n)&&(u.current.set(n,m),o.current.filtered.items.set(n,re(m)),v(2,()=>{W(),b.emit()}))},item:(n,m)=>(c.current.add(n),m&&(s.current.has(m)?s.current.get(m).add(n):s.current.set(m,new Set([n]))),v(3,()=>{B(),W(),o.current.value||q(),b.emit()}),()=>{u.current.delete(n),c.current.delete(n),o.current.filtered.items.delete(n);let i=O();v(4,()=>{B(),(i==null?void 0:i.getAttribute("id"))===n&&q(),b.emit()})}),group:n=>(s.current.has(n)||s.current.set(n,new Set),()=>{u.current.delete(n),s.current.delete(n)}),filter:()=>l.current.shouldFilter,label:p||e["aria-label"],commandRef:r,listId:j,inputId:k,labelId:S}),[]);function re(n){var i;let m=((i=l.current)==null?void 0:i.filter)??qe;return n?m(n,o.current.search):0}function W(){if(!r.current||!o.current.search||l.current.shouldFilter===!1)return;let n=o.current.filtered.items,m=[];o.current.filtered.groups.forEach(d=>{let E=s.current.get(d),y=0;E.forEach(x=>{let De=n.get(x);y=Math.max(De,y)}),m.push([d,y])});let i=r.current.querySelector(Ue);H().sort((d,E)=>{let y=d.getAttribute(P),x=E.getAttribute(P);return(n.get(x)??0)-(n.get(y)??0)}).forEach(d=>{let E=d.closest(Z);E?E.appendChild(d.parentElement===E?d:d.closest(`${Z} > *`)):i.appendChild(d.parentElement===i?d:d.closest(`${Z} > *`))}),m.sort((d,E)=>E[1]-d[1]).forEach(d=>{let E=r.current.querySelector(`${N}[${P}="${d[0]}"]`);E==null||E.parentElement.appendChild(E)})}function q(){let n=H().find(i=>!i.ariaDisabled),m=n==null?void 0:n.getAttribute(P);b.setState("value",m||void 0)}function B(){if(!o.current.search||l.current.shouldFilter===!1){o.current.filtered.count=c.current.size;return}o.current.filtered.groups=new Set;let n=0;for(let m of c.current){let i=u.current.get(m),d=re(i);o.current.filtered.items.set(m,d),d>0&&n++}for(let[m,i]of s.current)for(let d of i)if(o.current.filtered.items.get(d)>0){o.current.filtered.groups.add(m);break}o.current.filtered.count=n}function ae(){var m,i,d;let n=O();n&&(((m=n.parentElement)==null?void 0:m.firstChild)===n&&((d=(i=n.closest(N))==null?void 0:i.querySelector(We))==null||d.scrollIntoView({block:"nearest"})),n.scrollIntoView({block:"nearest"}))}function O(){var n;return(n=r.current)==null?void 0:n.querySelector(`${ee}[aria-selected="true"]`)}function H(){return Array.from(r.current.querySelectorAll(pe))}function X(n){let i=H()[n];i&&b.setState("value",i.getAttribute(P))}function Y(n){var y;let m=O(),i=H(),d=i.findIndex(x=>x===m),E=i[d+n];(y=l.current)!=null&&y.loop&&(E=d+n<0?i[i.length-1]:d+n===i.length?i[0]:i[d+n]),E&&b.setState("value",E.getAttribute(P))}function oe(n){let m=O(),i=m==null?void 0:m.closest(N),d;for(;i&&!d;)i=n>0?Xe(i,N):Ye(i,N),d=i==null?void 0:i.querySelector(pe);d?b.setState("value",d.getAttribute(P)):Y(n)}let ce=()=>X(H().length-1),se=n=>{n.preventDefault(),n.metaKey?ce():n.altKey?oe(1):Y(1)},ie=n=>{n.preventDefault(),n.metaKey?X(0):n.altKey?oe(-1):Y(-1)};return t.createElement("div",{ref:L([r,a]),...I,"cmdk-root":"",onKeyDown:n=>{var m;if((m=I.onKeyDown)==null||m.call(I,n),!n.defaultPrevented)switch(n.key){case"n":case"j":{n.ctrlKey&&se(n);break}case"ArrowDown":{se(n);break}case"p":case"k":{n.ctrlKey&&ie(n);break}case"ArrowUp":{ie(n);break}case"Home":{n.preventDefault(),X(0);break}case"End":{n.preventDefault(),ce();break}case"Enter":{console.log("In the enter..."),console.log("Current Event: ",n),n.preventDefault();let i=O();if(i){let d=new Event(G);i.dispatchEvent(d)}}}}},t.createElement("label",{"cmdk-label":"",htmlFor:U.inputId,id:U.labelId,style:ze},p),t.createElement(he.Provider,{value:b},t.createElement(ve.Provider,{value:U},f)))}),ge=t.forwardRef((e,a)=>{var k;let r=t.useId(),o=t.useRef(null),c=t.useContext(F),s=w(),u=ne(e),h=((k=u.current)==null?void 0:k.forceMount)??(c==null?void 0:c.forceMount);A(()=>s.item(r,c==null?void 0:c.id),[]);let l=$(r,o,[e.value,e.children,o]),p=K(),f=M(v=>v.value&&v.value===l.current),R=M(v=>h||s.filter()===!1?!0:v.search?v.filtered.items.get(r)>0:!0);t.useEffect(()=>{let v=o.current;if(!(!v||e.disabled))return v.addEventListener(G,C),()=>v.removeEventListener(G,C)},[R,e.onSelect,e.disabled]),t.useEffect(()=>{console.log(f),f&&o.current.dispatchEvent(new MouseEvent("mouseover"))},[f]);function C(){var v,b;T(),(b=(v=u.current).onSelect)==null||b.call(v,l.current),o.current.click()}function T(){p.setState("value",l.current,!0)}if(!R)return null;let{disabled:g,value:I,onSelect:j,...S}=e;return e.CustomAnchorTag?t.createElement(e.CustomAnchorTag,{to:e.href,prefetch:"intent",ref:L([o,a]),id:r,"cmdk-item":"",role:"option","aria-disabled":g||void 0,"aria-selected":f||void 0,"data-disabled":g||void 0,"data-selected":f||void 0,onPointerMove:g?void 0:T,onClick:g?void 0:C,className:S.className,defaultChecked:S.defaultChecked,defaultValue:S.defaultValue,suppressContentEditableWarning:S.suppressContentEditableWarning,suppressHydrationWarning:S.suppressHydrationWarning,accessKey:S.accessKey},e.children):t.createElement("a",{href:e.href,ref:L([o,a]),id:r,"cmdk-item":"",role:"option","aria-disabled":g||void 0,"aria-selected":f||void 0,"data-disabled":g||void 0,"data-selected":f||void 0,onPointerMove:g?void 0:T,onClick:g?void 0:C,className:S.className,defaultChecked:S.defaultChecked,defaultValue:S.defaultValue,suppressContentEditableWarning:S.suppressContentEditableWarning,suppressHydrationWarning:S.suppressHydrationWarning,accessKey:S.accessKey},e.children)}),Ee=t.forwardRef((e,a)=>{var k;let r=t.useId(),o=t.useRef(null),c=t.useContext(F),s=w(),u=ne(e),h=((k=u.current)==null?void 0:k.forceMount)??(c==null?void 0:c.forceMount);A(()=>s.item(r,c==null?void 0:c.id),[]);let l=$(r,o,[e.value,e.children,o]),p=K(),f=M(v=>v.value&&v.value===l.current),R=M(v=>h||s.filter()===!1?!0:v.search?v.filtered.items.get(r)>0:!0);t.useEffect(()=>{let v=o.current;if(!(!v||e.disabled))return v.addEventListener(G,C),()=>v.removeEventListener(G,C)},[R,e.onSelect,e.disabled]);function C(){var v,b;T(),(b=(v=u.current).onSelect)==null||b.call(v,l.current)}function T(){p.setState("value",l.current,!0)}if(!R)return null;let{disabled:g,value:I,onSelect:j,...S}=e;return t.createElement("div",{ref:L([o,a]),...S,id:r,"cmdk-item":"",role:"option","aria-disabled":g||void 0,"aria-selected":f||void 0,"data-disabled":g||void 0,"data-selected":f||void 0,onPointerMove:g?void 0:T,onClick:g?void 0:C},e.children)}),Ce=t.forwardRef((e,a)=>{let{heading:r,children:o,forceMount:c,...s}=e,u=t.useId(),h=t.useRef(null),l=t.useRef(null),p=t.useId(),f=w(),R=M(g=>c||f.filter()===!1?!0:g.search?g.filtered.groups.has(u):!0);A(()=>f.group(u),[]),$(u,h,[e.value,e.heading,l]);let C=t.useMemo(()=>({id:u,forceMount:c}),[c]),T=t.createElement(F.Provider,{value:C},o);return t.createElement("div",{ref:L([h,a]),...s,"cmdk-group":"",role:"presentation",hidden:R?void 0:!0},r&&t.createElement("div",{ref:l,"cmdk-group-heading":"","aria-hidden":!0,id:p},r),t.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":r?p:void 0,className:e.customchildclassname},T))}),Se=t.forwardRef((e,a)=>{let{heading:r,children:o,forceMount:c,...s}=e,u=t.useId(),h=t.useRef(null),l=t.useRef(null),p=t.useId(),f=w(),R=M(g=>c||f.filter()===!1?!0:g.search?g.filtered.groups.has(u):!0);A(()=>f.group(u),[]),$(u,h,[e.value,e.heading,l]);let C=t.useMemo(()=>({id:u,forceMount:c}),[c]),T=t.createElement(F.Provider,{value:C},o);return t.createElement("div",{ref:L([h,a]),...s,"cmdk-group":"",role:"presentation",hidden:R?void 0:!0},r&&t.createElement("div",{ref:l,"cmdk-group-heading":"","aria-hidden":!0,id:p},r),t.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":r?p:void 0},T))}),be=t.forwardRef((e,a)=>{let{alwaysRender:r,...o}=e,c=t.useRef(null),s=M(u=>!u.search);return!r&&!s?null:t.createElement("div",{ref:L([c,a]),...o,"cmdk-separator":"",role:"separator"})}),Te=t.forwardRef((e,a)=>{let{onValueChange:r,...o}=e,c=e.value!=null,s=K(),u=M(f=>f.search),h=M(f=>f.value),l=w(),p=t.useMemo(()=>{var R;let f=(R=l.commandRef.current)==null?void 0:R.querySelector(`${ee}[${P}="${h}"]`);return f==null?void 0:f.getAttribute("id")},[h,l.commandRef]);return t.useEffect(()=>{e.value!=null&&s.setState("search",e.value)},[e.value]),t.createElement("input",{ref:a,...o,"cmdk-input":"",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,"aria-controls":l.listId,"aria-labelledby":l.labelId,"aria-activedescendant":p,id:l.inputId,type:"text",value:c?e.value:u,onChange:f=>{c||s.setState("search",f.target.value),r==null||r(f.target.value)}})}),ye=t.forwardRef((e,a)=>{let{children:r,...o}=e,c=t.useRef(null),s=t.useRef(null),u=w();return t.useEffect(()=>{if(s.current&&c.current){let h=s.current,l=c.current,p,f=new ResizeObserver(()=>{p=requestAnimationFrame(()=>{let R=h.offsetHeight;l.style.setProperty("--cmdk-list-height",R.toFixed(1)+"px")})});return f.observe(h),()=>{cancelAnimationFrame(p),f.unobserve(h)}}},[]),t.createElement("div",{ref:L([c,a]),...o,"cmdk-list":"",role:"listbox","aria-label":"Suggestions",id:u.listId,"aria-labelledby":u.inputId},t.createElement("div",{ref:s,"cmdk-list-sizer":""},r))}),Me=t.forwardRef((e,a)=>{let{open:r,onOpenChange:o,overlayClassName:c,contentClassName:s,container:u,...h}=e;return t.createElement(D.Root,{open:r,onOpenChange:o},t.createElement(D.Portal,{container:u},t.createElement(D.Overlay,{"cmdk-overlay":"",className:c}),t.createElement(D.Content,{"aria-label":e.label,"cmdk-dialog":"",className:s},t.createElement(te,{ref:a,...h}))))}),Pe=t.forwardRef((e,a)=>{let r=t.useRef(!0),o=M(c=>c.filtered.count===0);return t.useEffect(()=>{r.current=!1},[]),r.current||!o?null:t.createElement("div",{ref:a,...e,"cmdk-empty":"",role:"presentation"})}),Le=t.forwardRef((e,a)=>{let{progress:r,children:o,...c}=e;return t.createElement("div",{ref:a,...c,"cmdk-loading":"",role:"progressbar","aria-valuenow":r,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Loading..."},t.createElement("div",{"aria-hidden":!0},o))}),Be=Object.assign(te,{List:ye,CustomItem:ge,Item:Ee,Input:Te,CustomGroup:Ce,Group:Se,Separator:be,Dialog:Me,Empty:Pe,Loading:Le});function Xe(e,a){let r=e.nextElementSibling;for(;r;){if(r.matches(a))return r;r=r.nextElementSibling}}function Ye(e,a){let r=e.previousElementSibling;for(;r;){if(r.matches(a))return r;r=r.previousElementSibling}}function ne(e){let a=t.useRef(e);return A(()=>{a.current=e}),a}var A=typeof window>"u"?t.useEffect:t.useLayoutEffect;function _(e){let a=t.useRef();return a.current===void 0&&(a.current=e()),a}function L(e){return a=>{e.forEach(r=>{typeof r=="function"?r(a):r!=null&&(r.current=a)})}}function M(e){let a=K(),r=()=>e(a==null?void 0:a.snapshot());return t.useSyncExternalStore(a==null?void 0:a.subscribe,r,r)}function $(e,a,r){let o=t.useRef(),c=w();return A(()=>{var u;let s=(()=>{var h;for(let l of r){if(typeof l=="string")return l.trim().toLowerCase();if(typeof l=="object"&&"current"in l&&l.current)return(h=l.current.textContent)==null?void 0:h.trim().toLowerCase()}})();c.value(e,s),(u=a.current)==null||u.setAttribute(P,s),o.current=s}),o}var Je=()=>{let[e,a]=t.useState(),r=_(()=>new Map);return A(()=>{r.current.forEach(o=>o()),r.current=new Map},[e]),(o,c)=>{r.current.set(o,c),a({})}},ze={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"};0&&(module.exports={Command,CommandDialog,CommandEmpty,CommandGroup,CommandGroupCustom,CommandInput,CommandItem,CommandItemCustom,CommandList,CommandLoading,CommandRoot,CommandSeparator,useCommandState});
