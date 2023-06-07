import{a as ae}from"./chunk-XJATAMEX.mjs";import*as k from"@radix-ui/react-dialog";import*as e from"react";var fe='[cmdk-list-sizer=""]',K='[cmdk-group=""]',Q='[cmdk-group-items=""]',me='[cmdk-group-heading=""]',X='[cmdk-item=""]',ce=`${X}:not([aria-disabled="true"])`,N="cmdk-item-select",I="data-value",ge=(n,a)=>ae(n,a),se=e.createContext(void 0),H=()=>e.useContext(se),ie=e.createContext(void 0),F=()=>e.useContext(ie),j=e.createContext(void 0),le=e.forwardRef((n,a)=>{let r=e.useRef(null),o=O(()=>{var t;return{search:"",value:n.value??((t=n.defaultValue)==null?void 0:t.toLowerCase())??"",filtered:{count:0,items:new Map,groups:new Set}}}),c=O(()=>new Set),d=O(()=>new Map),u=O(()=>new Map),g=O(()=>new Set),f=Y(n),{label:p,children:R,value:m,onValueChange:y,filter:x,shouldFilter:C,shouldSort:M,...A}=n;console.log("AllItems: ",c);let _=e.useId(),b=e.useId(),E=e.useId(),v=ue();P(()=>{if(m!==void 0){let t=m.trim().toLowerCase();o.current.value=t,v(6,ee),S.emit()}},[m]);let S=e.useMemo(()=>({subscribe:t=>(g.current.add(t),()=>g.current.delete(t)),snapshot:()=>o.current,setState:(t,l,s)=>{var i,h,L;if(!Object.is(o.current[t],l)){if(o.current[t]=l,t==="search")U(),q(),v(1,z);else if(t==="value")if(((i=f.current)==null?void 0:i.value)!==void 0){let D=l??"";(L=(h=f.current).onValueChange)==null||L.call(h,D);return}else s||v(5,ee);S.emit()}},emit:()=>{g.current.forEach(t=>t())}}),[]),W=e.useMemo(()=>({value:(t,l)=>{l!==u.current.get(t)&&(u.current.set(t,l),o.current.filtered.items.set(t,Z(l)),v(2,()=>{q(),S.emit()}))},item:(t,l)=>(c.current.add(t),l&&(d.current.has(l)?d.current.get(l).add(t):d.current.set(l,new Set([t]))),v(3,()=>{U(),q(),o.current.value||z(),S.emit()}),()=>{u.current.delete(t),c.current.delete(t),o.current.filtered.items.delete(t);let s=V();v(4,()=>{U(),(s==null?void 0:s.getAttribute("id"))===t&&z(),S.emit()})}),group:t=>(d.current.has(t)||d.current.set(t,new Set),()=>{u.current.delete(t),d.current.delete(t)}),filter:()=>f.current.shouldFilter,label:p||n["aria-label"],commandRef:r,listId:_,inputId:E,labelId:b}),[]);function Z(t){var s;let l=((s=f.current)==null?void 0:s.filter)??ge;return t?l(t,o.current.search):0}function q(){if(!r.current||!o.current.search||f.current.shouldSort===!1)return;let t=o.current.filtered.items,l=[];o.current.filtered.groups.forEach(i=>{let h=d.current.get(i),L=0;h.forEach(D=>{let de=t.get(D);L=Math.max(de,L)}),l.push([i,L])});let s=r.current.querySelector(fe);G().sort((i,h)=>{let L=i.getAttribute(I),D=h.getAttribute(I);return(t.get(D)??0)-(t.get(L)??0)}).forEach(i=>{let h=i.closest(Q);h?h.appendChild(i.parentElement===h?i:i.closest(`${Q} > *`)):s.appendChild(i.parentElement===s?i:i.closest(`${Q} > *`))}),l.sort((i,h)=>h[1]-i[1]).forEach(i=>{let h=r.current.querySelector(`${K}[${I}="${i[0]}"]`);h==null||h.parentElement.appendChild(h)})}function z(){let t=G().find(s=>!s.ariaDisabled),l=t==null?void 0:t.getAttribute(I);console.log(`Selecting First Item: ${t}, value: ${l}`),S.setState("value",l||void 0)}function U(){if(!o.current.search||f.current.shouldFilter===!1){o.current.filtered.count=c.current.size;return}o.current.filtered.groups=new Set;let t=0;for(let l of c.current){let s=u.current.get(l),i=Z(s);o.current.filtered.items.set(l,i),i>0&&t++}for(let[l,s]of d.current)for(let i of s)if(o.current.filtered.items.get(i)>0){o.current.filtered.groups.add(l);break}o.current.filtered.count=t}function ee(){var l,s,i;let t=V();t&&(((l=t.parentElement)==null?void 0:l.firstChild)===t&&((i=(s=t.closest(K))==null?void 0:s.querySelector(me))==null||i.scrollIntoView({block:"nearest"})),t.scrollIntoView({block:"nearest"}))}function V(){var t;return(t=r.current)==null?void 0:t.querySelector(`${X}[aria-selected="true"]`)}function G(){return Array.from(r.current.querySelectorAll(ce))}function B(t){let s=G()[t];s&&S.setState("value",s.getAttribute(I))}function J(t){var L;let l=V(),s=G(),i=s.findIndex(D=>D===l),h=s[i+t];(L=f.current)!=null&&L.loop&&(h=i+t<0?s[s.length-1]:i+t===s.length?s[0]:s[i+t]),h&&S.setState("value",h.getAttribute(I))}function te(t){let l=V(),s=l==null?void 0:l.closest(K),i;for(;s&&!i;)s=t>0?Le(s,K):Me(s,K),i=s==null?void 0:s.querySelector(ce);i?S.setState("value",i.getAttribute(I)):J(t)}let ne=()=>B(G().length-1),re=t=>{t.preventDefault(),t.metaKey?ne():t.altKey?te(1):J(1)},oe=t=>{t.preventDefault(),t.metaKey?B(0):t.altKey?te(-1):J(-1)};return e.createElement("div",{ref:w([r,a]),...A,"cmdk-root":"",onKeyDown:t=>{var l;if((l=A.onKeyDown)==null||l.call(A,t),!t.defaultPrevented)switch(t.key){case"n":case"j":{t.ctrlKey&&re(t);break}case"ArrowDown":{re(t);break}case"p":case"k":{t.ctrlKey&&oe(t);break}case"ArrowUp":{oe(t);break}case"Home":{t.preventDefault(),B(0);break}case"End":{t.preventDefault(),ne();break}case"Enter":{t.preventDefault();let s=V();if(s){let i=new Event(N);s.dispatchEvent(i)}}}}},e.createElement("label",{"cmdk-label":"",htmlFor:W.inputId,id:W.labelId,style:Te},p),e.createElement(ie.Provider,{value:S},e.createElement(se.Provider,{value:W},R)))}),ve=e.forwardRef((n,a)=>{var E;let r=e.useId(),o=e.useRef(null),c=e.useContext(j),d=H(),u=Y(n),g=((E=u.current)==null?void 0:E.forceMount)??(c==null?void 0:c.forceMount);P(()=>d.item(r,c==null?void 0:c.id),[]);let f=$(r,o,[n.value,n.children,o]),p=F(),R=T(v=>v.value&&v.value===f.current),m=T(v=>g||d.filter()===!1?!0:v.search?v.filtered.items.get(r)>0:!0);e.useEffect(()=>{let v=o.current;if(!(!v||n.disabled))return v.addEventListener(N,x),()=>v.removeEventListener(N,x)},[m,n.onSelect,n.disabled]);let y=ue();e.useEffect(()=>{if(R){console.log("Current Ref is Selected: ",o.current),console.log("Current Input Ref: ",n.inputRef.current);let v=new Event("mouseenter"),S=new Event("mouseleave");y(0,()=>o.current.dispatchEvent(v)),y(5,()=>o.current.dispatchEvent(S))}},[R]);function x(){var v,S;C(),(S=(v=u.current).onSelect)==null||S.call(v,f.current),o.current.click()}function C(){p.setState("value",f.current,!0)}if(!m)return null;let{disabled:M,value:A,onSelect:_,...b}=n;return n.CustomAnchorTag?e.createElement(n.CustomAnchorTag,{to:n.href,prefetch:"intent",ref:w([o,a]),id:r,"cmdk-item":"",role:"option","aria-disabled":M||void 0,"aria-selected":R||void 0,"data-disabled":M||void 0,"data-selected":R||void 0,onPointerMove:M?void 0:C,onClick:M?void 0:x,className:b.className,defaultChecked:b.defaultChecked,defaultValue:b.defaultValue,suppressContentEditableWarning:b.suppressContentEditableWarning,suppressHydrationWarning:b.suppressHydrationWarning,accessKey:b.accessKey},n.children):e.createElement("a",{href:n.href,ref:w([o,a]),id:r,"cmdk-item":"",role:"option","aria-disabled":M||void 0,"aria-selected":R||void 0,"data-disabled":M||void 0,"data-selected":R||void 0,onPointerMove:M?void 0:C,onClick:M?void 0:x,className:b.className,defaultChecked:b.defaultChecked,defaultValue:b.defaultValue,suppressContentEditableWarning:b.suppressContentEditableWarning,suppressHydrationWarning:b.suppressHydrationWarning,accessKey:b.accessKey},n.children)}),pe=e.forwardRef((n,a)=>{var b;let r=e.useId(),o=e.useRef(null),c=e.useContext(j),d=H(),u=Y(n),g=((b=u.current)==null?void 0:b.forceMount)??(c==null?void 0:c.forceMount);P(()=>d.item(r,c==null?void 0:c.id),[]);let f=$(r,o,[n.value,n.children,o]),p=F(),R=T(E=>E.value&&E.value===f.current),m=T(E=>g||d.filter()===!1?!0:E.search?E.filtered.items.get(r)>0:!0);e.useEffect(()=>{let E=o.current;if(!(!E||n.disabled))return E.addEventListener(N,y),()=>E.removeEventListener(N,y)},[m,n.onSelect,n.disabled]);function y(){var E,v;x(),(v=(E=u.current).onSelect)==null||v.call(E,f.current)}function x(){p.setState("value",f.current,!0)}if(!m)return null;let{disabled:C,value:M,onSelect:A,..._}=n;return e.createElement("div",{ref:w([o,a]),..._,id:r,"cmdk-item":"",role:"option","aria-disabled":C||void 0,"aria-selected":R||void 0,"data-disabled":C||void 0,"data-selected":R||void 0,onPointerMove:C?void 0:x,onClick:C?void 0:y},n.children)}),Re=e.forwardRef((n,a)=>{let{heading:r,children:o,forceMount:c,...d}=n,u=e.useId(),g=e.useRef(null),f=e.useRef(null),p=e.useId(),R=H(),m=T(C=>c||R.filter()===!1?!0:C.search?C.filtered.groups.has(u):!0);P(()=>R.group(u),[]),$(u,g,[n.value,n.heading,f]);let y=e.useMemo(()=>({id:u,forceMount:c}),[c]),x=e.createElement(j.Provider,{value:y},o);return e.createElement("div",{ref:w([g,a]),...d,"cmdk-group":"",role:"presentation",hidden:m?void 0:!0},r&&e.createElement("div",{ref:f,"cmdk-group-heading":"","aria-hidden":!0,id:p},r),e.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":r?p:void 0,className:n.customchildclassname},x))}),he=e.forwardRef((n,a)=>{let{heading:r,children:o,forceMount:c,...d}=n,u=e.useId(),g=e.useRef(null),f=e.useRef(null),p=e.useId(),R=H(),m=T(C=>c||R.filter()===!1?!0:C.search?C.filtered.groups.has(u):!0);P(()=>R.group(u),[]),$(u,g,[n.value,n.heading,f]);let y=e.useMemo(()=>({id:u,forceMount:c}),[c]),x=e.createElement(j.Provider,{value:y},o);return e.createElement("div",{ref:w([g,a]),...d,"cmdk-group":"",role:"presentation",hidden:m?void 0:!0},r&&e.createElement("div",{ref:f,"cmdk-group-heading":"","aria-hidden":!0,id:p},r),e.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":r?p:void 0},x))}),be=e.forwardRef((n,a)=>{let{alwaysRender:r,...o}=n,c=e.useRef(null),d=T(u=>!u.search);return!r&&!d?null:e.createElement("div",{ref:w([c,a]),...o,"cmdk-separator":"",role:"separator"})}),Ee=e.forwardRef((n,a)=>{let{onValueChange:r,loading:o,...c}=n,d=n.value!=null,u=F(),g=T(m=>m.search),f=T(m=>m.value),p=H();console.log("Store Snapshot: ",u.snapshot().filtered),console.log("Search: ",g),console.log("Context: ",p),console.log("Props: ",n);let R=e.useMemo(()=>{var y;let m=(y=p.commandRef.current)==null?void 0:y.querySelector(`${X}[${I}="${f}"]`);return m==null?void 0:m.getAttribute("id")},[f,p.commandRef]);return e.useEffect(()=>{console.log("Props Value: ",n.value," loading: ",o),n.value!=null&&(console.log("State Search commencing..."),u.setState("search",n.value))},[n.value,o]),e.createElement("input",{ref:a,...c,"cmdk-input":"",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,"aria-controls":p.listId,"aria-labelledby":p.labelId,"aria-activedescendant":R,id:p.inputId,type:"text",value:d?n.value:g,onChange:m=>{d||u.setState("search",m.target.value),r==null||r(m.target.value)}})}),Ce=e.forwardRef((n,a)=>{let{children:r,...o}=n,c=e.useRef(null),d=e.useRef(null),u=H();return e.useEffect(()=>{if(d.current&&c.current){let g=d.current,f=c.current,p,R=new ResizeObserver(()=>{p=requestAnimationFrame(()=>{let m=g.offsetHeight;f.style.setProperty("--cmdk-list-height",m.toFixed(1)+"px")})});return R.observe(g),()=>{cancelAnimationFrame(p),R.unobserve(g)}}},[]),e.createElement("div",{ref:w([c,a]),...o,"cmdk-list":"",role:"listbox","aria-label":"Suggestions",id:u.listId,"aria-labelledby":u.inputId},e.createElement("div",{ref:d,"cmdk-list-sizer":""},r))}),Se=e.forwardRef((n,a)=>{let{open:r,onOpenChange:o,overlayClassName:c,contentClassName:d,container:u,...g}=n;return e.createElement(k.Root,{open:r,onOpenChange:o},e.createElement(k.Portal,{container:u},e.createElement(k.Overlay,{"cmdk-overlay":"",className:c}),e.createElement(k.Content,{"aria-label":n.label,"cmdk-dialog":"",className:d},e.createElement(le,{ref:a,...g}))))}),ye=e.forwardRef((n,a)=>{let r=e.useRef(!0),o=T(c=>c.filtered.count===0);return e.useEffect(()=>{r.current=!1},[]),r.current||!o?null:e.createElement("div",{ref:a,...n,"cmdk-empty":"",role:"presentation"})}),xe=e.forwardRef((n,a)=>{let{progress:r,children:o,...c}=n;return e.createElement("div",{ref:a,...c,"cmdk-loading":"",role:"progressbar","aria-valuenow":r,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Loading..."},e.createElement("div",{"aria-hidden":!0},o))}),we=Object.assign(le,{List:Ce,CustomItem:ve,Item:pe,Input:Ee,CustomGroup:Re,Group:he,Separator:be,Dialog:Se,Empty:ye,Loading:xe});function Le(n,a){let r=n.nextElementSibling;for(;r;){if(r.matches(a))return r;r=r.nextElementSibling}}function Me(n,a){let r=n.previousElementSibling;for(;r;){if(r.matches(a))return r;r=r.previousElementSibling}}function Y(n){let a=e.useRef(n);return P(()=>{a.current=n}),a}var P=typeof window>"u"?e.useEffect:e.useLayoutEffect;function O(n){let a=e.useRef();return a.current===void 0&&(a.current=n()),a}function w(n){return a=>{n.forEach(r=>{typeof r=="function"?r(a):r!=null&&(r.current=a)})}}function T(n){let a=F(),r=()=>n(a==null?void 0:a.snapshot());return e.useSyncExternalStore(a==null?void 0:a.subscribe,r,r)}function $(n,a,r){let o=e.useRef(),c=H();return P(()=>{var u;let d=(()=>{var g;for(let f of r){if(typeof f=="string")return f.trim().toLowerCase();if(typeof f=="object"&&"current"in f&&f.current)return(g=f.current.textContent)==null?void 0:g.trim().toLowerCase()}})();c.value(n,d),(u=a.current)==null||u.setAttribute(I,d),o.current=d}),o}var ue=()=>{let[n,a]=e.useState(),r=O(()=>new Map);return P(()=>{r.current.forEach(o=>o()),r.current=new Map},[n]),(o,c)=>{r.current.set(o,c),a({})}},Te={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"};export{we as Command,Se as CommandDialog,ye as CommandEmpty,he as CommandGroup,Re as CommandGroupCustom,Ee as CommandInput,pe as CommandItem,ve as CommandItemCustom,Ce as CommandList,xe as CommandLoading,le as CommandRoot,be as CommandSeparator,T as useCommandState};
