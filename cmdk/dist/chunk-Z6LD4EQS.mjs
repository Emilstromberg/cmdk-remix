var H=Object.create;var T=Object.defineProperty;var J=Object.getOwnPropertyDescriptor;var k=Object.getOwnPropertyNames;var m=Object.getPrototypeOf,B=Object.prototype.hasOwnProperty;var V=(_=>typeof require!="undefined"?require:typeof Proxy!="undefined"?new Proxy(_,{get:(E,c)=>(typeof require!="undefined"?require:E)[c]}):_)(function(_){if(typeof require!="undefined")return require.apply(this,arguments);throw new Error('Dynamic require of "'+_+'" is not supported')});var Z=(_,E)=>()=>(_&&(E=_(_=0)),E);var r=(_,E)=>()=>(E||_((E={exports:{}}).exports,E),E.exports),z=(_,E)=>{for(var c in E)T(_,c,{get:E[c],enumerable:!0})},D=(_,E,c,C)=>{if(E&&typeof E=="object"||typeof E=="function")for(let h of k(E))!B.call(_,h)&&h!==c&&T(_,h,{get:()=>E[h],enumerable:!(C=J(E,h))||C.enumerable});return _};var l=(_,E,c)=>(c=_!=null?H(m(_)):{},D(E||!_||!_.__esModule?T(c,"default",{value:_,enumerable:!0}):c,_)),t=_=>D(T({},"__esModule",{value:!0}),_);var X=1,K=.9,W=.8,$=.17,u=.1,G=.999,y=.9999;var F=.99,j=/[\\\/_+.#"@\[\(\{&]/,q=/[\\\/_+.#"@\[\(\{&]/g,Q=/[\s-]/,a=/[\s-]/g;function L(_,E,c,C,h,P,O){if(P===E.length)return h===_.length?X:F;var N=`${h},${P}`;if(O[N]!==void 0)return O[N];for(var U=C.charAt(P),f=c.indexOf(U,h),S=0,A,R,M,p;f>=0;)A=L(_,E,c,C,f+1,P+1,O),A>S&&(f===h?A*=X:j.test(_.charAt(f-1))?(A*=W,M=_.slice(h,f-1).match(q),M&&h>0&&(A*=Math.pow(G,M.length))):Q.test(_.charAt(f-1))?(A*=K,p=_.slice(h,f-1).match(a),p&&h>0&&(A*=Math.pow(G,p.length))):(A*=$,h>0&&(A*=Math.pow(G,f-h))),_.charAt(f)!==E.charAt(P)&&(A*=y)),(A<u&&c.charAt(f-1)===C.charAt(P+1)||C.charAt(P+1)===C.charAt(P)&&c.charAt(f-1)!==C.charAt(P))&&(R=L(_,E,c,C,f+1,P+2,O),R*u>A&&(A=R*u)),A>S&&(S=A),f=c.indexOf(U,f+1);return O[N]=S,S}function Y(_){return _.toLowerCase().replace(a," ")}function s(_,E){return L(_,E,Y(_),Y(E),0,0,{})}export{V as a,Z as b,r as c,z as d,l as e,t as f,s as g};
