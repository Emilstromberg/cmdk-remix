import{a as oe}from"./chunk-XJATAMEX.mjs";import*as I from"@radix-ui/react-dialog";import*as e from"react";var ue='[cmdk-list-sizer=""]',N='[cmdk-group=""]',J='[cmdk-group-items=""]',de='[cmdk-group-heading=""]',Q='[cmdk-item=""]',ae=`${Q}:not([aria-disabled="true"])`,G="cmdk-item-select",M="data-value",fe=(n,a)=>oe(n,a),se=e.createContext(void 0),P=()=>e.useContext(se),ce=e.createContext(void 0),K=()=>e.useContext(ce),_=e.createContext(void 0),ie=e.forwardRef((n,a)=>{let r=e.useRef(null),o=A(()=>{var t;return{search:"",value:n.value??((t=n.defaultValue)==null?void 0:t.toLowerCase())??"",filtered:{count:0,items:new Map,groups:new Set}}}),s=A(()=>new Set),d=A(()=>new Map),f=A(()=>new Map),g=A(()=>new Set),u=X(n),{label:b,children:m,value:h,onValueChange:S,filter:y,shouldFilter:R,...H}=n,j=e.useId(),C=e.useId(),k=e.useId(),v=Le();D(()=>{if(h!==void 0){let t=h.trim().toLowerCase();o.current.value=t,v(6,Z),E.emit()}},[h]);let E=e.useMemo(()=>({subscribe:t=>(g.current.add(t),()=>g.current.delete(t)),snapshot:()=>o.current,setState:(t,l,c)=>{var i,p,x;if(!Object.is(o.current[t],l)){if(o.current[t]=l,t==="search")z(),W(),v(1,q);else if(t==="value")if(((i=u.current)==null?void 0:i.value)!==void 0){let w=l??"";(x=(p=u.current).onValueChange)==null||x.call(p,w);return}else c||v(5,Z);E.emit()}},emit:()=>{g.current.forEach(t=>t())}}),[]),$=e.useMemo(()=>({value:(t,l)=>{l!==f.current.get(t)&&(f.current.set(t,l),o.current.filtered.items.set(t,Y(l)),v(2,()=>{W(),E.emit()}))},item:(t,l)=>(s.current.add(t),l&&(d.current.has(l)?d.current.get(l).add(t):d.current.set(l,new Set([t]))),v(3,()=>{z(),W(),o.current.value||q(),E.emit()}),()=>{f.current.delete(t),s.current.delete(t),o.current.filtered.items.delete(t);let c=O();v(4,()=>{z(),(c==null?void 0:c.getAttribute("id"))===t&&q(),E.emit()})}),group:t=>(d.current.has(t)||d.current.set(t,new Set),()=>{f.current.delete(t),d.current.delete(t)}),filter:()=>u.current.shouldFilter,label:b||n["aria-label"],commandRef:r,listId:j,inputId:k,labelId:C}),[]);function Y(t){var c;let l=((c=u.current)==null?void 0:c.filter)??fe;return t?l(t,o.current.search):0}function W(){if(!r.current||!o.current.search||u.current.shouldFilter===!1)return;let t=o.current.filtered.items,l=[];o.current.filtered.groups.forEach(i=>{let p=d.current.get(i),x=0;p.forEach(w=>{let le=t.get(w);x=Math.max(le,x)}),l.push([i,x])});let c=r.current.querySelector(ue);V().sort((i,p)=>{let x=i.getAttribute(M),w=p.getAttribute(M);return(t.get(w)??0)-(t.get(x)??0)}).forEach(i=>{let p=i.closest(J);p?p.appendChild(i.parentElement===p?i:i.closest(`${J} > *`)):c.appendChild(i.parentElement===c?i:i.closest(`${J} > *`))}),l.sort((i,p)=>p[1]-i[1]).forEach(i=>{let p=r.current.querySelector(`${N}[${M}="${i[0]}"]`);p==null||p.parentElement.appendChild(p)})}function q(){let t=V().find(c=>!c.ariaDisabled),l=t==null?void 0:t.getAttribute(M);E.setState("value",l||void 0)}function z(){if(!o.current.search||u.current.shouldFilter===!1){o.current.filtered.count=s.current.size;return}o.current.filtered.groups=new Set;let t=0;for(let l of s.current){let c=f.current.get(l),i=Y(c);o.current.filtered.items.set(l,i),i>0&&t++}for(let[l,c]of d.current)for(let i of c)if(o.current.filtered.items.get(i)>0){o.current.filtered.groups.add(l);break}o.current.filtered.count=t}function Z(){var l,c,i;let t=O();t&&(((l=t.parentElement)==null?void 0:l.firstChild)===t&&((i=(c=t.closest(N))==null?void 0:c.querySelector(de))==null||i.scrollIntoView({block:"nearest"})),t.scrollIntoView({block:"nearest"}))}function O(){var t;return(t=r.current)==null?void 0:t.querySelector(`${Q}[aria-selected="true"]`)}function V(){return Array.from(r.current.querySelectorAll(ae))}function U(t){let c=V()[t];c&&E.setState("value",c.getAttribute(M))}function B(t){var x;let l=O(),c=V(),i=c.findIndex(w=>w===l),p=c[i+t];(x=u.current)!=null&&x.loop&&(p=i+t<0?c[c.length-1]:i+t===c.length?c[0]:c[i+t]),p&&E.setState("value",p.getAttribute(M))}function ee(t){let l=O(),c=l==null?void 0:l.closest(N),i;for(;c&&!i;)c=t>0?ye(c,N):xe(c,N),i=c==null?void 0:c.querySelector(ae);i?E.setState("value",i.getAttribute(M)):B(t)}let te=()=>U(V().length-1),ne=t=>{t.preventDefault(),t.metaKey?te():t.altKey?ee(1):B(1)},re=t=>{t.preventDefault(),t.metaKey?U(0):t.altKey?ee(-1):B(-1)};return e.createElement("div",{ref:T([r,a]),...H,"cmdk-root":"",onKeyDown:t=>{var l;if((l=H.onKeyDown)==null||l.call(H,t),!t.defaultPrevented)switch(t.key){case"n":case"j":{t.ctrlKey&&ne(t);break}case"ArrowDown":{ne(t);break}case"p":case"k":{t.ctrlKey&&re(t);break}case"ArrowUp":{re(t);break}case"Home":{t.preventDefault(),U(0);break}case"End":{t.preventDefault(),te();break}case"Enter":{console.log("In the enter..."),console.log("Current Event: ",t),t.preventDefault();let c=O();if(c){let i=new Event(G);c.dispatchEvent(i)}}}}},e.createElement("label",{"cmdk-label":"",htmlFor:$.inputId,id:$.labelId,style:Me},b),e.createElement(ce.Provider,{value:E},e.createElement(se.Provider,{value:$},m)))}),me=e.forwardRef((n,a)=>{var k;let r=e.useId(),o=e.useRef(null),s=e.useContext(_),d=P(),f=X(n),g=((k=f.current)==null?void 0:k.forceMount)??(s==null?void 0:s.forceMount);D(()=>d.item(r,s==null?void 0:s.id),[]);let u=F(r,o,[n.value,n.children,o]),b=K(),m=L(v=>v.value&&v.value===u.current),h=L(v=>g||d.filter()===!1?!0:v.search?v.filtered.items.get(r)>0:!0);e.useEffect(()=>{let v=o.current;if(!(!v||n.disabled))return v.addEventListener(G,S),()=>v.removeEventListener(G,S)},[h,n.onSelect,n.disabled]),e.useEffect(()=>{console.log(m),m&&o.current.focus()},[m]);function S(){var v,E;y(),(E=(v=f.current).onSelect)==null||E.call(v,u.current),o.current.click()}function y(){b.setState("value",u.current,!0)}if(!h)return null;let{disabled:R,value:H,onSelect:j,...C}=n;return n.CustomAnchorTag?e.createElement(n.CustomAnchorTag,{to:n.href,prefetch:"intent",ref:T([o,a]),id:r,"cmdk-item":"",role:"option","aria-disabled":R||void 0,"aria-selected":m||void 0,"data-disabled":R||void 0,"data-selected":m||void 0,onPointerMove:R?void 0:y,onClick:R?void 0:S,className:C.className,defaultChecked:C.defaultChecked,defaultValue:C.defaultValue,suppressContentEditableWarning:C.suppressContentEditableWarning,suppressHydrationWarning:C.suppressHydrationWarning,accessKey:C.accessKey},n.children):e.createElement("a",{href:n.href,ref:T([o,a]),id:r,"cmdk-item":"",role:"option","aria-disabled":R||void 0,"aria-selected":m||void 0,"data-disabled":R||void 0,"data-selected":m||void 0,onPointerMove:R?void 0:y,onClick:R?void 0:S,className:C.className,defaultChecked:C.defaultChecked,defaultValue:C.defaultValue,suppressContentEditableWarning:C.suppressContentEditableWarning,suppressHydrationWarning:C.suppressHydrationWarning,accessKey:C.accessKey},n.children)}),ve=e.forwardRef((n,a)=>{var k;let r=e.useId(),o=e.useRef(null),s=e.useContext(_),d=P(),f=X(n),g=((k=f.current)==null?void 0:k.forceMount)??(s==null?void 0:s.forceMount);D(()=>d.item(r,s==null?void 0:s.id),[]);let u=F(r,o,[n.value,n.children,o]),b=K(),m=L(v=>v.value&&v.value===u.current),h=L(v=>g||d.filter()===!1?!0:v.search?v.filtered.items.get(r)>0:!0);e.useEffect(()=>{let v=o.current;if(!(!v||n.disabled))return v.addEventListener(G,S),()=>v.removeEventListener(G,S)},[h,n.onSelect,n.disabled]);function S(){var v,E;y(),(E=(v=f.current).onSelect)==null||E.call(v,u.current)}function y(){b.setState("value",u.current,!0)}if(!h)return null;let{disabled:R,value:H,onSelect:j,...C}=n;return e.createElement("div",{ref:T([o,a]),...C,id:r,"cmdk-item":"",role:"option","aria-disabled":R||void 0,"aria-selected":m||void 0,"data-disabled":R||void 0,"data-selected":m||void 0,onPointerMove:R?void 0:y,onClick:R?void 0:S},n.children)}),ge=e.forwardRef((n,a)=>{let{heading:r,children:o,forceMount:s,...d}=n,f=e.useId(),g=e.useRef(null),u=e.useRef(null),b=e.useId(),m=P(),h=L(R=>s||m.filter()===!1?!0:R.search?R.filtered.groups.has(f):!0);D(()=>m.group(f),[]),F(f,g,[n.value,n.heading,u]);let S=e.useMemo(()=>({id:f,forceMount:s}),[s]),y=e.createElement(_.Provider,{value:S},o);return e.createElement("div",{ref:T([g,a]),...d,"cmdk-group":"",role:"presentation",hidden:h?void 0:!0},r&&e.createElement("div",{ref:u,"cmdk-group-heading":"","aria-hidden":!0,id:b},r),e.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":r?b:void 0,className:n.customDivClassName},y))}),pe=e.forwardRef((n,a)=>{let{heading:r,children:o,forceMount:s,...d}=n,f=e.useId(),g=e.useRef(null),u=e.useRef(null),b=e.useId(),m=P(),h=L(R=>s||m.filter()===!1?!0:R.search?R.filtered.groups.has(f):!0);D(()=>m.group(f),[]),F(f,g,[n.value,n.heading,u]);let S=e.useMemo(()=>({id:f,forceMount:s}),[s]),y=e.createElement(_.Provider,{value:S},o);return e.createElement("div",{ref:T([g,a]),...d,"cmdk-group":"",role:"presentation",hidden:h?void 0:!0},r&&e.createElement("div",{ref:u,"cmdk-group-heading":"","aria-hidden":!0,id:b},r),e.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":r?b:void 0},y))}),Re=e.forwardRef((n,a)=>{let{alwaysRender:r,...o}=n,s=e.useRef(null),d=L(f=>!f.search);return!r&&!d?null:e.createElement("div",{ref:T([s,a]),...o,"cmdk-separator":"",role:"separator"})}),he=e.forwardRef((n,a)=>{let{onValueChange:r,...o}=n,s=n.value!=null,d=K(),f=L(m=>m.search),g=L(m=>m.value),u=P(),b=e.useMemo(()=>{var h;let m=(h=u.commandRef.current)==null?void 0:h.querySelector(`${Q}[${M}="${g}"]`);return m==null?void 0:m.getAttribute("id")},[g,u.commandRef]);return e.useEffect(()=>{n.value!=null&&d.setState("search",n.value)},[n.value]),e.createElement("input",{ref:a,...o,"cmdk-input":"",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,"aria-controls":u.listId,"aria-labelledby":u.labelId,"aria-activedescendant":b,id:u.inputId,type:"text",value:s?n.value:f,onChange:m=>{s||d.setState("search",m.target.value),r==null||r(m.target.value)}})}),be=e.forwardRef((n,a)=>{let{children:r,...o}=n,s=e.useRef(null),d=e.useRef(null),f=P();return e.useEffect(()=>{if(d.current&&s.current){let g=d.current,u=s.current,b,m=new ResizeObserver(()=>{b=requestAnimationFrame(()=>{let h=g.offsetHeight;u.style.setProperty("--cmdk-list-height",h.toFixed(1)+"px")})});return m.observe(g),()=>{cancelAnimationFrame(b),m.unobserve(g)}}},[]),e.createElement("div",{ref:T([s,a]),...o,"cmdk-list":"",role:"listbox","aria-label":"Suggestions",id:f.listId,"aria-labelledby":f.inputId},e.createElement("div",{ref:d,"cmdk-list-sizer":""},r))}),Ce=e.forwardRef((n,a)=>{let{open:r,onOpenChange:o,overlayClassName:s,contentClassName:d,container:f,...g}=n;return e.createElement(I.Root,{open:r,onOpenChange:o},e.createElement(I.Portal,{container:f},e.createElement(I.Overlay,{"cmdk-overlay":"",className:s}),e.createElement(I.Content,{"aria-label":n.label,"cmdk-dialog":"",className:d},e.createElement(ie,{ref:a,...g}))))}),Ee=e.forwardRef((n,a)=>{let r=e.useRef(!0),o=L(s=>s.filtered.count===0);return e.useEffect(()=>{r.current=!1},[]),r.current||!o?null:e.createElement("div",{ref:a,...n,"cmdk-empty":"",role:"presentation"})}),Se=e.forwardRef((n,a)=>{let{progress:r,children:o,...s}=n;return e.createElement("div",{ref:a,...s,"cmdk-loading":"",role:"progressbar","aria-valuenow":r,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Loading..."},e.createElement("div",{"aria-hidden":!0},o))}),Ie=Object.assign(ie,{List:be,CustomItem:me,Item:ve,Input:he,CustomGroup:ge,Group:pe,Separator:Re,Dialog:Ce,Empty:Ee,Loading:Se});function ye(n,a){let r=n.nextElementSibling;for(;r;){if(r.matches(a))return r;r=r.nextElementSibling}}function xe(n,a){let r=n.previousElementSibling;for(;r;){if(r.matches(a))return r;r=r.previousElementSibling}}function X(n){let a=e.useRef(n);return D(()=>{a.current=n}),a}var D=typeof window>"u"?e.useEffect:e.useLayoutEffect;function A(n){let a=e.useRef();return a.current===void 0&&(a.current=n()),a}function T(n){return a=>{n.forEach(r=>{typeof r=="function"?r(a):r!=null&&(r.current=a)})}}function L(n){let a=K(),r=()=>n(a==null?void 0:a.snapshot());return e.useSyncExternalStore(a==null?void 0:a.subscribe,r,r)}function F(n,a,r){let o=e.useRef(),s=P();return D(()=>{var f;let d=(()=>{var g;for(let u of r){if(typeof u=="string")return u.trim().toLowerCase();if(typeof u=="object"&&"current"in u&&u.current)return(g=u.current.textContent)==null?void 0:g.trim().toLowerCase()}})();s.value(n,d),(f=a.current)==null||f.setAttribute(M,d),o.current=d}),o}var Le=()=>{let[n,a]=e.useState(),r=A(()=>new Map);return D(()=>{r.current.forEach(o=>o()),r.current=new Map},[n]),(o,s)=>{r.current.set(o,s),a({})}},Me={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"};export{Ie as Command,Ce as CommandDialog,Ee as CommandEmpty,pe as CommandGroup,ge as CommandGroupCustom,he as CommandInput,ve as CommandItem,me as CommandItemCustom,be as CommandList,Se as CommandLoading,ie as CommandRoot,Re as CommandSeparator,L as useCommandState};
