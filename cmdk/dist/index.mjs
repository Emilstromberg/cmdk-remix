import{a as oe}from"./chunk-XJATAMEX.mjs";import*as I from"@radix-ui/react-dialog";import*as e from"react";var ue='[cmdk-list-sizer=""]',G='[cmdk-group=""]',J='[cmdk-group-items=""]',de='[cmdk-group-heading=""]',Q='[cmdk-item=""]',ae=`${Q}:not([aria-disabled="true"])`,K="cmdk-item-select",M="data-value",fe=(n,a)=>oe(n,a),ce=e.createContext(void 0),P=()=>e.useContext(ce),se=e.createContext(void 0),N=()=>e.useContext(se),_=e.createContext(void 0),ie=e.forwardRef((n,a)=>{let r=e.useRef(null),o=A(()=>{var t;return{search:"",value:n.value??((t=n.defaultValue)==null?void 0:t.toLowerCase())??"",filtered:{count:0,items:new Map,groups:new Set}}}),c=A(()=>new Set),f=A(()=>new Map),m=A(()=>new Map),v=A(()=>new Set),l=X(n),{label:b,children:g,value:h,onValueChange:S,filter:y,shouldFilter:p,...H}=n;console.log("AllItems: ",c);let j=e.useId(),C=e.useId(),w=e.useId(),d=Le();k(()=>{if(h!==void 0){let t=h.trim().toLowerCase();o.current.value=t,d(6,Z),E.emit()}},[h]);let E=e.useMemo(()=>({subscribe:t=>(v.current.add(t),()=>v.current.delete(t)),snapshot:()=>o.current,setState:(t,u,s)=>{var i,R,x;if(!Object.is(o.current[t],u)){if(o.current[t]=u,t==="search")z(),W(),d(1,q);else if(t==="value")if(((i=l.current)==null?void 0:i.value)!==void 0){let D=u??"";(x=(R=l.current).onValueChange)==null||x.call(R,D);return}else s||d(5,Z);E.emit()}},emit:()=>{v.current.forEach(t=>t())}}),[]),$=e.useMemo(()=>({value:(t,u)=>{u!==m.current.get(t)&&(m.current.set(t,u),o.current.filtered.items.set(t,Y(u)),d(2,()=>{W(),E.emit()}))},item:(t,u)=>(c.current.add(t),u&&(f.current.has(u)?f.current.get(u).add(t):f.current.set(u,new Set([t]))),d(3,()=>{z(),W(),o.current.value||q(),E.emit()}),()=>{m.current.delete(t),c.current.delete(t),o.current.filtered.items.delete(t);let s=O();d(4,()=>{z(),(s==null?void 0:s.getAttribute("id"))===t&&q(),E.emit()})}),group:t=>(f.current.has(t)||f.current.set(t,new Set),()=>{m.current.delete(t),f.current.delete(t)}),filter:()=>l.current.shouldFilter,label:b||n["aria-label"],commandRef:r,listId:j,inputId:w,labelId:C}),[]);function Y(t){var s;let u=((s=l.current)==null?void 0:s.filter)??fe;return t?u(t,o.current.search):0}function W(){if(!r.current||!o.current.search||l.current.shouldFilter===!1)return;let t=o.current.filtered.items,u=[];o.current.filtered.groups.forEach(i=>{let R=f.current.get(i),x=0;R.forEach(D=>{let le=t.get(D);x=Math.max(le,x)}),u.push([i,x])});let s=r.current.querySelector(ue);V().sort((i,R)=>{let x=i.getAttribute(M),D=R.getAttribute(M);return(t.get(D)??0)-(t.get(x)??0)}).forEach(i=>{let R=i.closest(J);R?R.appendChild(i.parentElement===R?i:i.closest(`${J} > *`)):s.appendChild(i.parentElement===s?i:i.closest(`${J} > *`))}),u.sort((i,R)=>R[1]-i[1]).forEach(i=>{let R=r.current.querySelector(`${G}[${M}="${i[0]}"]`);R==null||R.parentElement.appendChild(R)})}function q(){let t=V().find(s=>!s.ariaDisabled),u=t==null?void 0:t.getAttribute(M);E.setState("value",u||void 0)}function z(){if(!o.current.search||l.current.shouldFilter===!1){o.current.filtered.count=c.current.size;return}o.current.filtered.groups=new Set;let t=0;for(let u of c.current){let s=m.current.get(u),i=Y(s);o.current.filtered.items.set(u,i),i>0&&t++}for(let[u,s]of f.current)for(let i of s)if(o.current.filtered.items.get(i)>0){o.current.filtered.groups.add(u);break}o.current.filtered.count=t}function Z(){var u,s,i;let t=O();t&&(((u=t.parentElement)==null?void 0:u.firstChild)===t&&((i=(s=t.closest(G))==null?void 0:s.querySelector(de))==null||i.scrollIntoView({block:"nearest"})),t.scrollIntoView({block:"nearest"}))}function O(){var t;return(t=r.current)==null?void 0:t.querySelector(`${Q}[aria-selected="true"]`)}function V(){return Array.from(r.current.querySelectorAll(ae))}function U(t){let s=V()[t];s&&E.setState("value",s.getAttribute(M))}function B(t){var x;let u=O(),s=V(),i=s.findIndex(D=>D===u),R=s[i+t];(x=l.current)!=null&&x.loop&&(R=i+t<0?s[s.length-1]:i+t===s.length?s[0]:s[i+t]),R&&E.setState("value",R.getAttribute(M))}function ee(t){let u=O(),s=u==null?void 0:u.closest(G),i;for(;s&&!i;)s=t>0?ye(s,G):xe(s,G),i=s==null?void 0:s.querySelector(ae);i?E.setState("value",i.getAttribute(M)):B(t)}let te=()=>U(V().length-1),ne=t=>{t.preventDefault(),t.metaKey?te():t.altKey?ee(1):B(1)},re=t=>{t.preventDefault(),t.metaKey?U(0):t.altKey?ee(-1):B(-1)};return e.createElement("div",{ref:T([r,a]),...H,"cmdk-root":"",onKeyDown:t=>{var u;if((u=H.onKeyDown)==null||u.call(H,t),!t.defaultPrevented)switch(t.key){case"n":case"j":{t.ctrlKey&&ne(t);break}case"ArrowDown":{ne(t);break}case"p":case"k":{t.ctrlKey&&re(t);break}case"ArrowUp":{re(t);break}case"Home":{t.preventDefault(),U(0);break}case"End":{t.preventDefault(),te();break}case"Enter":{console.log("In the enter..."),console.log("Current Event: ",t),t.preventDefault();let s=O();if(s){let i=new Event(K);s.dispatchEvent(i)}}}}},e.createElement("label",{"cmdk-label":"",htmlFor:$.inputId,id:$.labelId,style:Me},b),e.createElement(se.Provider,{value:E},e.createElement(ce.Provider,{value:$},g)))}),me=e.forwardRef((n,a)=>{var w;let r=e.useId(),o=e.useRef(null),c=e.useContext(_),f=P(),m=X(n),v=((w=m.current)==null?void 0:w.forceMount)??(c==null?void 0:c.forceMount);k(()=>f.item(r,c==null?void 0:c.id),[]);let l=F(r,o,[n.value,n.children,o]),b=N(),g=L(d=>d.value&&d.value===l.current),h=L(d=>v||f.filter()===!1?!0:d.search?d.filtered.items.get(r)>0:!0);e.useEffect(()=>{let d=o.current;if(!(!d||n.disabled))return d.addEventListener(K,S),()=>d.removeEventListener(K,S)},[h,n.onSelect,n.disabled]),e.useEffect(()=>{var d;g&&(console.log("Current Ref: ",o.current),console.log("Current Input Ref: ",n.inputRef.current),o.current.focus(),(d=n.inputRef.current)==null||d.focus())},[g]);function S(){var d,E;y(),(E=(d=m.current).onSelect)==null||E.call(d,l.current),o.current.click()}function y(){b.setState("value",l.current,!0)}if(!h)return null;let{disabled:p,value:H,onSelect:j,...C}=n;return n.CustomAnchorTag?e.createElement(n.CustomAnchorTag,{to:n.href,prefetch:"intent",ref:T([o,a]),id:r,"cmdk-item":"",role:"option","aria-disabled":p||void 0,"aria-selected":g||void 0,"data-disabled":p||void 0,"data-selected":g||void 0,onPointerMove:p?void 0:y,onClick:p?void 0:S,className:C.className,defaultChecked:C.defaultChecked,defaultValue:C.defaultValue,suppressContentEditableWarning:C.suppressContentEditableWarning,suppressHydrationWarning:C.suppressHydrationWarning,accessKey:C.accessKey},n.children):e.createElement("a",{href:n.href,ref:T([o,a]),id:r,"cmdk-item":"",role:"option","aria-disabled":p||void 0,"aria-selected":g||void 0,"data-disabled":p||void 0,"data-selected":g||void 0,onPointerMove:p?void 0:y,onClick:p?void 0:S,className:C.className,defaultChecked:C.defaultChecked,defaultValue:C.defaultValue,suppressContentEditableWarning:C.suppressContentEditableWarning,suppressHydrationWarning:C.suppressHydrationWarning,accessKey:C.accessKey},n.children)}),ge=e.forwardRef((n,a)=>{var w;let r=e.useId(),o=e.useRef(null),c=e.useContext(_),f=P(),m=X(n),v=((w=m.current)==null?void 0:w.forceMount)??(c==null?void 0:c.forceMount);k(()=>f.item(r,c==null?void 0:c.id),[]);let l=F(r,o,[n.value,n.children,o]),b=N(),g=L(d=>d.value&&d.value===l.current),h=L(d=>v||f.filter()===!1?!0:d.search?d.filtered.items.get(r)>0:!0);e.useEffect(()=>{let d=o.current;if(!(!d||n.disabled))return d.addEventListener(K,S),()=>d.removeEventListener(K,S)},[h,n.onSelect,n.disabled]);function S(){var d,E;y(),(E=(d=m.current).onSelect)==null||E.call(d,l.current)}function y(){b.setState("value",l.current,!0)}if(!h)return null;let{disabled:p,value:H,onSelect:j,...C}=n;return e.createElement("div",{ref:T([o,a]),...C,id:r,"cmdk-item":"",role:"option","aria-disabled":p||void 0,"aria-selected":g||void 0,"data-disabled":p||void 0,"data-selected":g||void 0,onPointerMove:p?void 0:y,onClick:p?void 0:S},n.children)}),ve=e.forwardRef((n,a)=>{let{heading:r,children:o,forceMount:c,...f}=n,m=e.useId(),v=e.useRef(null),l=e.useRef(null),b=e.useId(),g=P(),h=L(p=>c||g.filter()===!1?!0:p.search?p.filtered.groups.has(m):!0);k(()=>g.group(m),[]),F(m,v,[n.value,n.heading,l]);let S=e.useMemo(()=>({id:m,forceMount:c}),[c]),y=e.createElement(_.Provider,{value:S},o);return e.createElement("div",{ref:T([v,a]),...f,"cmdk-group":"",role:"presentation",hidden:h?void 0:!0},r&&e.createElement("div",{ref:l,"cmdk-group-heading":"","aria-hidden":!0,id:b},r),e.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":r?b:void 0,className:n.customchildclassname},y))}),Re=e.forwardRef((n,a)=>{let{heading:r,children:o,forceMount:c,...f}=n,m=e.useId(),v=e.useRef(null),l=e.useRef(null),b=e.useId(),g=P(),h=L(p=>c||g.filter()===!1?!0:p.search?p.filtered.groups.has(m):!0);k(()=>g.group(m),[]),F(m,v,[n.value,n.heading,l]);let S=e.useMemo(()=>({id:m,forceMount:c}),[c]),y=e.createElement(_.Provider,{value:S},o);return e.createElement("div",{ref:T([v,a]),...f,"cmdk-group":"",role:"presentation",hidden:h?void 0:!0},r&&e.createElement("div",{ref:l,"cmdk-group-heading":"","aria-hidden":!0,id:b},r),e.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":r?b:void 0},y))}),pe=e.forwardRef((n,a)=>{let{alwaysRender:r,...o}=n,c=e.useRef(null),f=L(m=>!m.search);return!r&&!f?null:e.createElement("div",{ref:T([c,a]),...o,"cmdk-separator":"",role:"separator"})}),he=e.forwardRef((n,a)=>{let{onValueChange:r,...o}=n,c=n.value!=null,f=N(),m=L(g=>g.search),v=L(g=>g.value),l=P();console.log("Store: ",f),console.log("Search: ",m),console.log("Value: ",v),console.log("Context: ",l);let b=e.useMemo(()=>{var h;let g=(h=l.commandRef.current)==null?void 0:h.querySelector(`${Q}[${M}="${v}"]`);return console.log(g),g==null?void 0:g.getAttribute("id")},[v,l.commandRef]);return e.useEffect(()=>{n.value!=null&&f.setState("search",n.value)},[n.value]),e.createElement("input",{ref:a,...o,"cmdk-input":"",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,"aria-controls":l.listId,"aria-labelledby":l.labelId,"aria-activedescendant":b,id:l.inputId,type:"text",value:c?n.value:m,onChange:g=>{c||f.setState("search",g.target.value),r==null||r(g.target.value)}})}),be=e.forwardRef((n,a)=>{let{children:r,...o}=n,c=e.useRef(null),f=e.useRef(null),m=P();return e.useEffect(()=>{if(f.current&&c.current){let v=f.current,l=c.current,b,g=new ResizeObserver(()=>{b=requestAnimationFrame(()=>{let h=v.offsetHeight;l.style.setProperty("--cmdk-list-height",h.toFixed(1)+"px")})});return g.observe(v),()=>{cancelAnimationFrame(b),g.unobserve(v)}}},[]),e.createElement("div",{ref:T([c,a]),...o,"cmdk-list":"",role:"listbox","aria-label":"Suggestions",id:m.listId,"aria-labelledby":m.inputId},e.createElement("div",{ref:f,"cmdk-list-sizer":""},r))}),Ce=e.forwardRef((n,a)=>{let{open:r,onOpenChange:o,overlayClassName:c,contentClassName:f,container:m,...v}=n;return e.createElement(I.Root,{open:r,onOpenChange:o},e.createElement(I.Portal,{container:m},e.createElement(I.Overlay,{"cmdk-overlay":"",className:c}),e.createElement(I.Content,{"aria-label":n.label,"cmdk-dialog":"",className:f},e.createElement(ie,{ref:a,...v}))))}),Ee=e.forwardRef((n,a)=>{let r=e.useRef(!0),o=L(c=>c.filtered.count===0);return e.useEffect(()=>{r.current=!1},[]),r.current||!o?null:e.createElement("div",{ref:a,...n,"cmdk-empty":"",role:"presentation"})}),Se=e.forwardRef((n,a)=>{let{progress:r,children:o,...c}=n;return e.createElement("div",{ref:a,...c,"cmdk-loading":"",role:"progressbar","aria-valuenow":r,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Loading..."},e.createElement("div",{"aria-hidden":!0},o))}),Ie=Object.assign(ie,{List:be,CustomItem:me,Item:ge,Input:he,CustomGroup:ve,Group:Re,Separator:pe,Dialog:Ce,Empty:Ee,Loading:Se});function ye(n,a){let r=n.nextElementSibling;for(;r;){if(r.matches(a))return r;r=r.nextElementSibling}}function xe(n,a){let r=n.previousElementSibling;for(;r;){if(r.matches(a))return r;r=r.previousElementSibling}}function X(n){let a=e.useRef(n);return k(()=>{a.current=n}),a}var k=typeof window>"u"?e.useEffect:e.useLayoutEffect;function A(n){let a=e.useRef();return a.current===void 0&&(a.current=n()),a}function T(n){return a=>{n.forEach(r=>{typeof r=="function"?r(a):r!=null&&(r.current=a)})}}function L(n){let a=N(),r=()=>n(a==null?void 0:a.snapshot());return e.useSyncExternalStore(a==null?void 0:a.subscribe,r,r)}function F(n,a,r){let o=e.useRef(),c=P();return k(()=>{var m;let f=(()=>{var v;for(let l of r){if(typeof l=="string")return l.trim().toLowerCase();if(typeof l=="object"&&"current"in l&&l.current)return(v=l.current.textContent)==null?void 0:v.trim().toLowerCase()}})();c.value(n,f),(m=a.current)==null||m.setAttribute(M,f),o.current=f}),o}var Le=()=>{let[n,a]=e.useState(),r=A(()=>new Map);return k(()=>{r.current.forEach(o=>o()),r.current=new Map},[n]),(o,c)=>{r.current.set(o,c),a({})}},Me={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"};export{Ie as Command,Ce as CommandDialog,Ee as CommandEmpty,Re as CommandGroup,ve as CommandGroupCustom,he as CommandInput,ge as CommandItem,me as CommandItemCustom,be as CommandList,Se as CommandLoading,ie as CommandRoot,pe as CommandSeparator,L as useCommandState};
