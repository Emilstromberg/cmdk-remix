import{a as ae}from"./chunk-XJATAMEX.mjs";import*as k from"@radix-ui/react-dialog";import*as e from"react";var de='[cmdk-list-sizer=""]',$='[cmdk-group=""]',Q='[cmdk-group-items=""]',fe='[cmdk-group-heading=""]',Y='[cmdk-item=""]',se=`${Y}:not([aria-disabled="true"])`,W="cmdk-item-select",D="data-value",me=(n,a)=>ae(n,a),ce=e.createContext(void 0),O=()=>e.useContext(ce),ie=e.createContext(void 0),q=()=>e.useContext(ie),z=e.createContext(void 0),le=e.forwardRef((n,a)=>{let r=e.useRef(null),o=K(()=>{var t;return{search:"",value:n.value??((t=n.defaultValue)==null?void 0:t.toLowerCase())??"",filtered:{count:0,items:new Map,groups:new Set}}}),s=K(()=>new Set),d=K(()=>new Map),u=K(()=>new Map),v=K(()=>new Set),f=Z(n),{label:p,children:g,value:m,onValueChange:C,filter:P,shouldFilter:S,shouldSort:V,...w}=n,y=e.useId(),N=e.useId(),E=e.useId(),L=Me();H(()=>{if(m!==void 0){let t=m.trim().toLowerCase();o.current.value=t,L(6,ee),x.emit()}},[m]);let x=e.useMemo(()=>({subscribe:t=>(v.current.add(t),()=>v.current.delete(t)),snapshot:()=>o.current,setState:(t,l,c)=>{var i,R,M;if(!Object.is(o.current[t],l)){if(o.current[t]=l,t==="search")B(),b(),L(1,G);else if(t==="value")if(((i=f.current)==null?void 0:i.value)!==void 0){let A=l??"";(M=(R=f.current).onValueChange)==null||M.call(R,A);return}else c||L(5,ee);x.emit()}},emit:()=>{v.current.forEach(t=>t())}}),[]),h=e.useMemo(()=>({value:(t,l)=>{l!==u.current.get(t)&&(u.current.set(t,l),o.current.filtered.items.set(t,_(l)),L(2,()=>{b(),x.emit()}))},item:(t,l)=>(s.current.add(t),l&&(d.current.has(l)?d.current.get(l).add(t):d.current.set(l,new Set([t]))),L(3,()=>{B(),b(),o.current.value||G(),x.emit()}),()=>{u.current.delete(t),s.current.delete(t),o.current.filtered.items.delete(t);let c=F();L(4,()=>{B(),(c==null?void 0:c.getAttribute("id"))===t&&G(),x.emit()})}),group:t=>(d.current.has(t)||d.current.set(t,new Set),()=>{u.current.delete(t),d.current.delete(t)}),filter:()=>f.current.shouldFilter,label:p||n["aria-label"],commandRef:r,listId:y,inputId:E,labelId:N}),[]);function _(t){var c;let l=((c=f.current)==null?void 0:c.filter)??me;return t?l(t,o.current.search):0}function b(){if(!r.current||!o.current.search||f.current.shouldSort===!1)return;let t=o.current.filtered.items,l=[];o.current.filtered.groups.forEach(i=>{let R=d.current.get(i),M=0;R.forEach(A=>{let ue=t.get(A);M=Math.max(ue,M)}),l.push([i,M])});let c=r.current.querySelector(de);j().sort((i,R)=>{let M=i.getAttribute(D),A=R.getAttribute(D);return(t.get(A)??0)-(t.get(M)??0)}).forEach(i=>{let R=i.closest(Q);R?R.appendChild(i.parentElement===R?i:i.closest(`${Q} > *`)):c.appendChild(i.parentElement===c?i:i.closest(`${Q} > *`))}),l.sort((i,R)=>R[1]-i[1]).forEach(i=>{let R=r.current.querySelector(`${$}[${D}="${i[0]}"]`);R==null||R.parentElement.appendChild(R)})}function G(){let t=j().find(c=>!c.ariaDisabled),l=t==null?void 0:t.getAttribute(D);x.setState("value",l||void 0)}function B(){if(!o.current.search||f.current.shouldFilter===!1){o.current.filtered.count=s.current.size;return}o.current.filtered.groups=new Set;let t=0;for(let l of s.current){let c=u.current.get(l),i=_(c);o.current.filtered.items.set(l,i),i>0&&t++}for(let[l,c]of d.current)for(let i of c)if(o.current.filtered.items.get(i)>0){o.current.filtered.groups.add(l);break}o.current.filtered.count=t}function ee(){var l,c,i;let t=F();t&&(((l=t.parentElement)==null?void 0:l.firstChild)===t&&((i=(c=t.closest($))==null?void 0:c.querySelector(fe))==null||i.scrollIntoView({block:"nearest"})),t.scrollIntoView({block:"nearest"}))}function F(){var t;return(t=r.current)==null?void 0:t.querySelector(`${Y}[aria-selected="true"]`)}function j(){return Array.from(r.current.querySelectorAll(se))}function J(t){let c=j()[t];c&&x.setState("value",c.getAttribute(D))}function X(t){var M;let l=F(),c=j(),i=c.findIndex(A=>A===l),R=c[i+t];(M=f.current)!=null&&M.loop&&(R=i+t<0?c[c.length-1]:i+t===c.length?c[0]:c[i+t]),R&&x.setState("value",R.getAttribute(D))}function te(t){let l=F(),c=l==null?void 0:l.closest($),i;for(;c&&!i;)c=t>0?xe(c,$):Le(c,$),i=c==null?void 0:c.querySelector(se);i?x.setState("value",i.getAttribute(D)):X(t)}let ne=()=>J(j().length-1),re=t=>{t.preventDefault(),t.metaKey?ne():t.altKey?te(1):X(1)},oe=t=>{t.preventDefault(),t.metaKey?J(0):t.altKey?te(-1):X(-1)};return e.createElement("div",{ref:I([r,a]),...w,"cmdk-root":"",onKeyDown:t=>{var l;if((l=w.onKeyDown)==null||l.call(w,t),!t.defaultPrevented)switch(t.key){case"n":case"j":{t.ctrlKey&&re(t);break}case"ArrowDown":{re(t);break}case"p":case"k":{t.ctrlKey&&oe(t);break}case"ArrowUp":{oe(t);break}case"Home":{t.preventDefault(),J(0);break}case"End":{t.preventDefault(),ne();break}case"Enter":{t.preventDefault();let c=F();if(c){let i=new Event(W);c.dispatchEvent(i)}}}}},e.createElement("label",{"cmdk-label":"",htmlFor:h.inputId,id:h.labelId,style:Te},p),e.createElement(ie.Provider,{value:x},e.createElement(ce.Provider,{value:h},g)))}),ve=e.forwardRef((n,a)=>{var _;let r=e.useId(),o=e.useRef(null),s=e.useContext(z),d=O(),u=Z(n),v=((_=u.current)==null?void 0:_.forceMount)??(s==null?void 0:s.forceMount);H(()=>d.item(r,s==null?void 0:s.id),[]);let f=U(r,o,[n.value,n.children,o]),p=q(),g=T(b=>b.value&&b.value===f.current),m=T(b=>v||d.filter()===!1?!0:b.search?b.filtered.items.get(r)>0:!0);e.useEffect(()=>{let b=o.current;if(!(!b||n.disabled))return b.addEventListener(W,V),()=>b.removeEventListener(W,V)},[m,n.onSelect,n.disabled]);let[C,P]=e.useState(),S=300;e.useEffect(()=>{g&&P(Date.now())},[g]);function V(){var b,G;w(),(G=(b=u.current).onSelect)==null||G.call(b,f.current),o.current.click()}function w(){p.setState("value",f.current,!0)}if(!m)return null;let{disabled:y,value:N,onSelect:E,CustomAnchorTag:L,CustomPrefetchElement:x,...h}=n;return n.CustomAnchorTag?e.createElement(L,{id:r,to:n.href,ref:I([o,a]),role:"option",onClick:y?void 0:V,prefetch:"none",accessKey:h.accessKey,className:h.className,"cmdk-item":"",defaultValue:h.defaultValue,"aria-disabled":y||void 0,"aria-selected":g||void 0,"data-disabled":y||void 0,"data-selected":g||void 0,onPointerMove:y?void 0:w,defaultChecked:h.defaultChecked,suppressHydrationWarning:h.suppressHydrationWarning,suppressContentEditableWarning:h.suppressContentEditableWarning},n.children,g&&C+S<Date.now()?e.createElement(e.Fragment,null,x({page:n.href})):null):e.createElement("a",{href:n.href,ref:I([o,a]),id:r,"cmdk-item":"",role:"option","aria-disabled":y||void 0,"aria-selected":g||void 0,"data-disabled":y||void 0,"data-selected":g||void 0,onPointerMove:y?void 0:w,onClick:y?void 0:V,className:h.className,defaultChecked:h.defaultChecked,defaultValue:h.defaultValue,suppressContentEditableWarning:h.suppressContentEditableWarning,suppressHydrationWarning:h.suppressHydrationWarning,accessKey:h.accessKey},n.children)}),ge=e.forwardRef((n,a)=>{var N;let r=e.useId(),o=e.useRef(null),s=e.useContext(z),d=O(),u=Z(n),v=((N=u.current)==null?void 0:N.forceMount)??(s==null?void 0:s.forceMount);H(()=>d.item(r,s==null?void 0:s.id),[]);let f=U(r,o,[n.value,n.children,o]),p=q(),g=T(E=>E.value&&E.value===f.current),m=T(E=>v||d.filter()===!1?!0:E.search?E.filtered.items.get(r)>0:!0);e.useEffect(()=>{let E=o.current;if(!(!E||n.disabled))return E.addEventListener(W,C),()=>E.removeEventListener(W,C)},[m,n.onSelect,n.disabled]);function C(){var E,L;P(),(L=(E=u.current).onSelect)==null||L.call(E,f.current)}function P(){p.setState("value",f.current,!0)}if(!m)return null;let{disabled:S,value:V,onSelect:w,...y}=n;return e.createElement("div",{ref:I([o,a]),...y,id:r,"cmdk-item":"",role:"option","aria-disabled":S||void 0,"aria-selected":g||void 0,"data-disabled":S||void 0,"data-selected":g||void 0,onPointerMove:S?void 0:P,onClick:S?void 0:C},n.children)}),pe=e.forwardRef((n,a)=>{let{heading:r,children:o,forceMount:s,...d}=n,u=e.useId(),v=e.useRef(null),f=e.useRef(null),p=e.useId(),g=O(),m=T(S=>s||g.filter()===!1?!0:S.search?S.filtered.groups.has(u):!0);H(()=>g.group(u),[]),U(u,v,[n.value,n.heading,f]);let C=e.useMemo(()=>({id:u,forceMount:s}),[s]),P=e.createElement(z.Provider,{value:C},o);return e.createElement("div",{ref:I([v,a]),...d,"cmdk-group":"",role:"presentation",hidden:m?void 0:!0},r&&e.createElement("div",{ref:f,"cmdk-group-heading":"","aria-hidden":!0,id:p},r),e.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":r?p:void 0,className:n.customchildclassname},P))}),Re=e.forwardRef((n,a)=>{let{heading:r,children:o,forceMount:s,...d}=n,u=e.useId(),v=e.useRef(null),f=e.useRef(null),p=e.useId(),g=O(),m=T(S=>s||g.filter()===!1?!0:S.search?S.filtered.groups.has(u):!0);H(()=>g.group(u),[]),U(u,v,[n.value,n.heading,f]);let C=e.useMemo(()=>({id:u,forceMount:s}),[s]),P=e.createElement(z.Provider,{value:C},o);return e.createElement("div",{ref:I([v,a]),...d,"cmdk-group":"",role:"presentation",hidden:m?void 0:!0},r&&e.createElement("div",{ref:f,"cmdk-group-heading":"","aria-hidden":!0,id:p},r),e.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":r?p:void 0},P))}),he=e.forwardRef((n,a)=>{let{alwaysRender:r,...o}=n,s=e.useRef(null),d=T(u=>!u.search);return!r&&!d?null:e.createElement("div",{ref:I([s,a]),...o,"cmdk-separator":"",role:"separator"})}),be=e.forwardRef((n,a)=>{let{onValueChange:r,loading:o,...s}=n,d=n.value!=null,u=q(),v=T(m=>m.search),f=T(m=>m.value),p=O(),g=e.useMemo(()=>{var C;let m=(C=p.commandRef.current)==null?void 0:C.querySelector(`${Y}[${D}="${f}"]`);return m==null?void 0:m.getAttribute("id")},[f,p.commandRef]);return e.useEffect(()=>{n.value!=null&&!o&&u.setState("search",n.value)},[n.value,o]),e.createElement("input",{ref:a,...s,"cmdk-input":"",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,"aria-controls":p.listId,"aria-labelledby":p.labelId,"aria-activedescendant":g,id:p.inputId,type:"text",value:d?n.value:v,onChange:m=>{d||u.setState("search",m.target.value),r==null||r(m.target.value)}})}),Ee=e.forwardRef((n,a)=>{let{children:r,...o}=n,s=e.useRef(null),d=e.useRef(null),u=O();return e.useEffect(()=>{if(d.current&&s.current){let v=d.current,f=s.current,p,g=new ResizeObserver(()=>{p=requestAnimationFrame(()=>{let m=v.offsetHeight;f.style.setProperty("--cmdk-list-height",m.toFixed(1)+"px")})});return g.observe(v),()=>{cancelAnimationFrame(p),g.unobserve(v)}}},[]),e.createElement("div",{ref:I([s,a]),...o,"cmdk-list":"",role:"listbox","aria-label":"Suggestions",id:u.listId,"aria-labelledby":u.inputId},e.createElement("div",{ref:d,"cmdk-list-sizer":""},r))}),Ce=e.forwardRef((n,a)=>{let{open:r,onOpenChange:o,overlayClassName:s,contentClassName:d,container:u,...v}=n;return e.createElement(k.Root,{open:r,onOpenChange:o},e.createElement(k.Portal,{container:u},e.createElement(k.Overlay,{"cmdk-overlay":"",className:s}),e.createElement(k.Content,{"aria-label":n.label,"cmdk-dialog":"",className:d},e.createElement(le,{ref:a,...v}))))}),Se=e.forwardRef((n,a)=>{let r=e.useRef(!0),o=T(s=>s.filtered.count===0);return e.useEffect(()=>{r.current=!1},[]),r.current||!o?null:e.createElement("div",{ref:a,...n,"cmdk-empty":"",role:"presentation"})}),ye=e.forwardRef((n,a)=>{let{progress:r,children:o,...s}=n;return e.createElement("div",{ref:a,...s,"cmdk-loading":"",role:"progressbar","aria-valuenow":r,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Loading..."},e.createElement("div",{"aria-hidden":!0},o))}),we=Object.assign(le,{List:Ee,CustomItem:ve,Item:ge,Input:be,CustomGroup:pe,Group:Re,Separator:he,Dialog:Ce,Empty:Se,Loading:ye});function xe(n,a){let r=n.nextElementSibling;for(;r;){if(r.matches(a))return r;r=r.nextElementSibling}}function Le(n,a){let r=n.previousElementSibling;for(;r;){if(r.matches(a))return r;r=r.previousElementSibling}}function Z(n){let a=e.useRef(n);return H(()=>{a.current=n}),a}var H=typeof window>"u"?e.useEffect:e.useLayoutEffect;function K(n){let a=e.useRef();return a.current===void 0&&(a.current=n()),a}function I(n){return a=>{n.forEach(r=>{typeof r=="function"?r(a):r!=null&&(r.current=a)})}}function T(n){let a=q(),r=()=>n(a==null?void 0:a.snapshot());return e.useSyncExternalStore(a==null?void 0:a.subscribe,r,r)}function U(n,a,r){let o=e.useRef(),s=O();return H(()=>{var u;let d=(()=>{var v;for(let f of r){if(typeof f=="string")return f.trim().toLowerCase();if(typeof f=="object"&&"current"in f&&f.current)return(v=f.current.textContent)==null?void 0:v.trim().toLowerCase()}})();s.value(n,d),(u=a.current)==null||u.setAttribute(D,d),o.current=d}),o}var Me=()=>{let[n,a]=e.useState(),r=K(()=>new Map);return H(()=>{r.current.forEach(o=>o()),r.current=new Map},[n]),(o,s)=>{r.current.set(o,s),a({})}},Te={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"};export{we as Command,Ce as CommandDialog,Se as CommandEmpty,Re as CommandGroup,pe as CommandGroupCustom,be as CommandInput,ge as CommandItem,ve as CommandItemCustom,Ee as CommandList,ye as CommandLoading,le as CommandRoot,he as CommandSeparator,T as useCommandState};
