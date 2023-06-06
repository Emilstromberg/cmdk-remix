var De=Object.create;var K=Object.defineProperty;var Ae=Object.getOwnPropertyDescriptor;var ke=Object.getOwnPropertyNames;var xe=Object.getPrototypeOf,_e=Object.prototype.hasOwnProperty;var we=(e,a)=>{for(var r in a)K(e,r,{get:a[r],enumerable:!0})},le=(e,a,r,o)=>{if(a&&typeof a=="object"||typeof a=="function")for(let c of ke(a))!_e.call(e,c)&&c!==r&&K(e,c,{get:()=>a[c],enumerable:!(o=Ae(a,c))||o.enumerable});return e};var ue=(e,a,r)=>(r=e!=null?De(xe(e)):{},le(a||!e||!e.__esModule?K(r,"default",{value:e,enumerable:!0}):r,e)),Ie=e=>le(K({},"__esModule",{value:!0}),e);var ze={};we(ze,{Command:()=>We,CommandDialog:()=>Te,CommandEmpty:()=>Me,CommandGroup:()=>Ce,CommandInput:()=>be,CommandItem:()=>Ee,CommandItemLink:()=>he,CommandList:()=>ye,CommandLoading:()=>Le,CommandRoot:()=>ee,CommandSeparator:()=>Se,useCommandState:()=>M});module.exports=Ie(ze);var P=ue(require("@radix-ui/react-dialog")),n=ue(require("react"));var de=1,Oe=.9,He=.8,Ne=.17,X=.1,Y=.999,Ge=.9999;var Ke=.99,Ve=/[\\\/_+.#"@\[\(\{&]/,Fe=/[\\\/_+.#"@\[\(\{&]/g,$e=/[\s-]/,me=/[\s-]/g;function J(e,a,r,o,c,s,f){if(s===a.length)return c===e.length?de:Ke;var g=`${c},${s}`;if(f[g]!==void 0)return f[g];for(var d=o.charAt(s),v=r.indexOf(d,c),p=0,m,S,b,E;v>=0;)m=J(e,a,r,o,v+1,s+1,f),m>p&&(v===c?m*=de:Ve.test(e.charAt(v-1))?(m*=He,b=e.slice(c,v-1).match(Fe),b&&c>0&&(m*=Math.pow(Y,b.length))):$e.test(e.charAt(v-1))?(m*=Oe,E=e.slice(c,v-1).match(me),E&&c>0&&(m*=Math.pow(Y,E.length))):(m*=Ne,c>0&&(m*=Math.pow(Y,v-c))),e.charAt(v)!==a.charAt(s)&&(m*=Ge)),(m<X&&r.charAt(v-1)===o.charAt(s+1)||o.charAt(s+1)===o.charAt(s)&&r.charAt(v-1)!==o.charAt(s))&&(S=J(e,a,r,o,v+1,s+2,f),S*X>m&&(m=S*X)),m>p&&(p=m),v=r.indexOf(d,v+1);return f[g]=p,p}function fe(e){return e.toLowerCase().replace(me," ")}function Re(e,a){return J(e,a,fe(e),fe(a),0,0,{})}var je='[cmdk-list-sizer=""]',N='[cmdk-group=""]',z='[cmdk-group-items=""]',Ue='[cmdk-group-heading=""]',Q='[cmdk-item=""]',pe=`${Q}:not([aria-disabled="true"])`,G="cmdk-item-select",L="data-value",qe=(e,a)=>Re(e,a),ve=n.createContext(void 0),w=()=>n.useContext(ve),ge=n.createContext(void 0),V=()=>n.useContext(ge),Z=n.createContext(void 0),ee=n.forwardRef((e,a)=>{let r=n.useRef(null),o=_(()=>{var t;return{search:"",value:e.value??((t=e.defaultValue)==null?void 0:t.toLowerCase())??"",filtered:{count:0,items:new Map,groups:new Set}}}),c=_(()=>new Set),s=_(()=>new Map),f=_(()=>new Map),g=_(()=>new Set),d=te(e),{label:v,children:p,value:m,onValueChange:S,filter:b,shouldFilter:E,...x}=e,F=n.useId(),T=n.useId(),D=n.useId(),R=Ye();k(()=>{if(m!==void 0){let t=m.trim().toLowerCase();o.current.value=t,R(6,ae),C.emit()}},[m]);let C=n.useMemo(()=>({subscribe:t=>(g.current.add(t),()=>g.current.delete(t)),snapshot:()=>o.current,setState:(t,u,i)=>{var l,h,y;if(!Object.is(o.current[t],u)){if(o.current[t]=u,t==="search")q(),j(),R(1,U);else if(t==="value")if(((l=d.current)==null?void 0:l.value)!==void 0){let A=u??"";(y=(h=d.current).onValueChange)==null||y.call(h,A);return}else i||R(5,ae);C.emit()}},emit:()=>{g.current.forEach(t=>t())}}),[]),$=n.useMemo(()=>({value:(t,u)=>{u!==f.current.get(t)&&(f.current.set(t,u),o.current.filtered.items.set(t,re(u)),R(2,()=>{j(),C.emit()}))},item:(t,u)=>(c.current.add(t),u&&(s.current.has(u)?s.current.get(u).add(t):s.current.set(u,new Set([t]))),R(3,()=>{q(),j(),o.current.value||U(),C.emit()}),()=>{f.current.delete(t),c.current.delete(t),o.current.filtered.items.delete(t);let i=O();R(4,()=>{q(),(i==null?void 0:i.getAttribute("id"))===t&&U(),C.emit()})}),group:t=>(s.current.has(t)||s.current.set(t,new Set),()=>{f.current.delete(t),s.current.delete(t)}),filter:()=>d.current.shouldFilter,label:v||e["aria-label"],commandRef:r,listId:F,inputId:D,labelId:T}),[]);function re(t){var i;let u=((i=d.current)==null?void 0:i.filter)??qe;return t?u(t,o.current.search):0}function j(){if(!r.current||!o.current.search||d.current.shouldFilter===!1)return;let t=o.current.filtered.items,u=[];o.current.filtered.groups.forEach(l=>{let h=s.current.get(l),y=0;h.forEach(A=>{let Pe=t.get(A);y=Math.max(Pe,y)}),u.push([l,y])});let i=r.current.querySelector(je);H().sort((l,h)=>{let y=l.getAttribute(L),A=h.getAttribute(L);return(t.get(A)??0)-(t.get(y)??0)}).forEach(l=>{let h=l.closest(z);h?h.appendChild(l.parentElement===h?l:l.closest(`${z} > *`)):i.appendChild(l.parentElement===i?l:l.closest(`${z} > *`))}),u.sort((l,h)=>h[1]-l[1]).forEach(l=>{let h=r.current.querySelector(`${N}[${L}="${l[0]}"]`);h==null||h.parentElement.appendChild(h)})}function U(){let t=H().find(i=>!i.ariaDisabled),u=t==null?void 0:t.getAttribute(L);C.setState("value",u||void 0)}function q(){if(!o.current.search||d.current.shouldFilter===!1){o.current.filtered.count=c.current.size;return}o.current.filtered.groups=new Set;let t=0;for(let u of c.current){let i=f.current.get(u),l=re(i);o.current.filtered.items.set(u,l),l>0&&t++}for(let[u,i]of s.current)for(let l of i)if(o.current.filtered.items.get(l)>0){o.current.filtered.groups.add(u);break}o.current.filtered.count=t}function ae(){var u,i,l;let t=O();t&&(((u=t.parentElement)==null?void 0:u.firstChild)===t&&((l=(i=t.closest(N))==null?void 0:i.querySelector(Ue))==null||l.scrollIntoView({block:"nearest"})),t.scrollIntoView({block:"nearest"}))}function O(){var t;return(t=r.current)==null?void 0:t.querySelector(`${Q}[aria-selected="true"]`)}function H(){return Array.from(r.current.querySelectorAll(pe))}function W(t){let i=H()[t];i&&C.setState("value",i.getAttribute(L))}function B(t){var y;let u=O(),i=H(),l=i.findIndex(A=>A===u),h=i[l+t];(y=d.current)!=null&&y.loop&&(h=l+t<0?i[i.length-1]:l+t===i.length?i[0]:i[l+t]),h&&C.setState("value",h.getAttribute(L))}function oe(t){let u=O(),i=u==null?void 0:u.closest(N),l;for(;i&&!l;)i=t>0?Be(i,N):Xe(i,N),l=i==null?void 0:i.querySelector(pe);l?C.setState("value",l.getAttribute(L)):B(t)}let ce=()=>W(H().length-1),se=t=>{t.preventDefault(),t.metaKey?ce():t.altKey?oe(1):B(1)},ie=t=>{t.preventDefault(),t.metaKey?W(0):t.altKey?oe(-1):B(-1)};return n.createElement("div",{ref:I([r,a]),...x,"cmdk-root":"",onKeyDown:t=>{var u;if((u=x.onKeyDown)==null||u.call(x,t),!t.defaultPrevented)switch(t.key){case"n":case"j":{t.ctrlKey&&se(t);break}case"ArrowDown":{se(t);break}case"p":case"k":{t.ctrlKey&&ie(t);break}case"ArrowUp":{ie(t);break}case"Home":{t.preventDefault(),W(0);break}case"End":{t.preventDefault(),ce();break}case"Enter":{t.preventDefault();let i=O();if(i){let l=new Event(G);i.dispatchEvent(l)}}}}},n.createElement("label",{"cmdk-label":"",htmlFor:$.inputId,id:$.labelId,style:Je},v),n.createElement(ge.Provider,{value:C},n.createElement(ve.Provider,{value:$},p)))}),he=n.forwardRef((e,a)=>{var D;let r=n.useId(),o=n.useRef(null),c=n.useContext(Z),s=w(),f=te(e),g=((D=f.current)==null?void 0:D.forceMount)??(c==null?void 0:c.forceMount);k(()=>s.item(r,c==null?void 0:c.id),[]);let d=ne(r,o,[e.value,e.children,o]),v=V(),p=M(R=>R.value&&R.value===d.current),m=M(R=>g||s.filter()===!1?!0:R.search?R.filtered.items.get(r)>0:!0);n.useEffect(()=>{let R=o.current;if(!(!R||e.disabled))return R.addEventListener(G,S),()=>R.removeEventListener(G,S)},[m,e.onSelect,e.disabled]);function S(){var R,C;b(),(C=(R=f.current).onSelect)==null||C.call(R,d.current)}function b(){v.setState("value",d.current,!0)}if(!m)return null;let{disabled:E,value:x,onSelect:F,...T}=e;return console.log("Creating a link"),n.createElement("a",{href:e.href,ref:I([o,a]),id:r,"cmdk-item":"",role:"option","aria-disabled":E||void 0,"aria-selected":p||void 0,"data-disabled":E||void 0,"data-selected":p||void 0,onPointerMove:E?void 0:b,onClick:E?void 0:S,className:T.className,defaultChecked:T.defaultChecked,defaultValue:T.defaultValue,suppressContentEditableWarning:T.suppressContentEditableWarning,suppressHydrationWarning:T.suppressHydrationWarning,accessKey:T.accessKey},e.children)}),Ee=n.forwardRef((e,a)=>{var D;let r=n.useId(),o=n.useRef(null),c=n.useContext(Z),s=w(),f=te(e),g=((D=f.current)==null?void 0:D.forceMount)??(c==null?void 0:c.forceMount);k(()=>s.item(r,c==null?void 0:c.id),[]);let d=ne(r,o,[e.value,e.children,o]),v=V(),p=M(R=>R.value&&R.value===d.current),m=M(R=>g||s.filter()===!1?!0:R.search?R.filtered.items.get(r)>0:!0);n.useEffect(()=>{let R=o.current;if(!(!R||e.disabled))return R.addEventListener(G,S),()=>R.removeEventListener(G,S)},[m,e.onSelect,e.disabled]);function S(){var R,C;b(),(C=(R=f.current).onSelect)==null||C.call(R,d.current)}function b(){v.setState("value",d.current,!0)}if(!m)return null;let{disabled:E,value:x,onSelect:F,...T}=e;return n.createElement("div",{ref:I([o,a]),...T,id:r,"cmdk-item":"",role:"option","aria-disabled":E||void 0,"aria-selected":p||void 0,"data-disabled":E||void 0,"data-selected":p||void 0,onPointerMove:E?void 0:b,onClick:E?void 0:S},e.children)}),Ce=n.forwardRef((e,a)=>{let{heading:r,children:o,forceMount:c,...s}=e,f=n.useId(),g=n.useRef(null),d=n.useRef(null),v=n.useId(),p=w(),m=M(E=>c||p.filter()===!1?!0:E.search?E.filtered.groups.has(f):!0);k(()=>p.group(f),[]),ne(f,g,[e.value,e.heading,d]);let S=n.useMemo(()=>({id:f,forceMount:c}),[c]),b=n.createElement(Z.Provider,{value:S},o);return n.createElement("div",{ref:I([g,a]),...s,"cmdk-group":"",role:"presentation",hidden:m?void 0:!0},r&&n.createElement("div",{ref:d,"cmdk-group-heading":"","aria-hidden":!0,id:v},r),n.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":r?v:void 0},b))}),Se=n.forwardRef((e,a)=>{let{alwaysRender:r,...o}=e,c=n.useRef(null),s=M(f=>!f.search);return!r&&!s?null:n.createElement("div",{ref:I([c,a]),...o,"cmdk-separator":"",role:"separator"})}),be=n.forwardRef((e,a)=>{let{onValueChange:r,...o}=e,c=e.value!=null,s=V(),f=M(p=>p.search),g=M(p=>p.value),d=w(),v=n.useMemo(()=>{var m;let p=(m=d.commandRef.current)==null?void 0:m.querySelector(`${Q}[${L}="${g}"]`);return p==null?void 0:p.getAttribute("id")},[g,d.commandRef]);return n.useEffect(()=>{e.value!=null&&s.setState("search",e.value)},[e.value]),n.createElement("input",{ref:a,...o,"cmdk-input":"",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,"aria-controls":d.listId,"aria-labelledby":d.labelId,"aria-activedescendant":v,id:d.inputId,type:"text",value:c?e.value:f,onChange:p=>{c||s.setState("search",p.target.value),r==null||r(p.target.value)}})}),ye=n.forwardRef((e,a)=>{let{children:r,...o}=e,c=n.useRef(null),s=n.useRef(null),f=w();return n.useEffect(()=>{if(s.current&&c.current){let g=s.current,d=c.current,v,p=new ResizeObserver(()=>{v=requestAnimationFrame(()=>{let m=g.offsetHeight;d.style.setProperty("--cmdk-list-height",m.toFixed(1)+"px")})});return p.observe(g),()=>{cancelAnimationFrame(v),p.unobserve(g)}}},[]),n.createElement("div",{ref:I([c,a]),...o,"cmdk-list":"",role:"listbox","aria-label":"Suggestions",id:f.listId,"aria-labelledby":f.inputId},n.createElement("div",{ref:s,"cmdk-list-sizer":""},r))}),Te=n.forwardRef((e,a)=>{let{open:r,onOpenChange:o,overlayClassName:c,contentClassName:s,container:f,...g}=e;return n.createElement(P.Root,{open:r,onOpenChange:o},n.createElement(P.Portal,{container:f},n.createElement(P.Overlay,{"cmdk-overlay":"",className:c}),n.createElement(P.Content,{"aria-label":e.label,"cmdk-dialog":"",className:s},n.createElement(ee,{ref:a,...g}))))}),Me=n.forwardRef((e,a)=>{let r=n.useRef(!0),o=M(c=>c.filtered.count===0);return n.useEffect(()=>{r.current=!1},[]),r.current||!o?null:n.createElement("div",{ref:a,...e,"cmdk-empty":"",role:"presentation"})}),Le=n.forwardRef((e,a)=>{let{progress:r,children:o,...c}=e;return n.createElement("div",{ref:a,...c,"cmdk-loading":"",role:"progressbar","aria-valuenow":r,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Loading..."},n.createElement("div",{"aria-hidden":!0},o))}),We=Object.assign(ee,{List:ye,Item:Ee,ItemLink:he,Input:be,Group:Ce,Separator:Se,Dialog:Te,Empty:Me,Loading:Le});function Be(e,a){let r=e.nextElementSibling;for(;r;){if(r.matches(a))return r;r=r.nextElementSibling}}function Xe(e,a){let r=e.previousElementSibling;for(;r;){if(r.matches(a))return r;r=r.previousElementSibling}}function te(e){let a=n.useRef(e);return k(()=>{a.current=e}),a}var k=typeof window>"u"?n.useEffect:n.useLayoutEffect;function _(e){let a=n.useRef();return a.current===void 0&&(a.current=e()),a}function I(e){return a=>{e.forEach(r=>{typeof r=="function"?r(a):r!=null&&(r.current=a)})}}function M(e){let a=V(),r=()=>e(a==null?void 0:a.snapshot());return n.useSyncExternalStore(a==null?void 0:a.subscribe,r,r)}function ne(e,a,r){let o=n.useRef(),c=w();return k(()=>{var f;let s=(()=>{var g;for(let d of r){if(typeof d=="string")return d.trim().toLowerCase();if(typeof d=="object"&&"current"in d&&d.current)return(g=d.current.textContent)==null?void 0:g.trim().toLowerCase()}})();c.value(e,s),(f=a.current)==null||f.setAttribute(L,s),o.current=s}),o}var Ye=()=>{let[e,a]=n.useState(),r=_(()=>new Map);return k(()=>{r.current.forEach(o=>o()),r.current=new Map},[e]),(o,c)=>{r.current.set(o,c),a({})}},Je={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"};0&&(module.exports={Command,CommandDialog,CommandEmpty,CommandGroup,CommandInput,CommandItem,CommandItemLink,CommandList,CommandLoading,CommandRoot,CommandSeparator,useCommandState});
