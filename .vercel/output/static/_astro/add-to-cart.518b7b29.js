import{r as a}from"./index.ed373d49.js";import{a as l}from"./cart.a7896909.js";var f={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m=a,u=Symbol.for("react.element"),d=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,x=m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function _(t,r,i){var e,o={},s=null,p=null;i!==void 0&&(s=""+i),r.key!==void 0&&(s=""+r.key),r.ref!==void 0&&(p=r.ref);for(e in r)c.call(r,e)&&!y.hasOwnProperty(e)&&(o[e]=r[e]);if(t&&t.defaultProps)for(e in r=t.defaultProps,r)o[e]===void 0&&(o[e]=r[e]);return{$$typeof:u,type:t,key:s,ref:p,props:o,_owner:x.current}}n.Fragment=d;n.jsx=_;n.jsxs=_;f.exports=n;var v=f.exports;function R({item:t}){return v.jsx("button",{className:"big-link",onClick:()=>l(t),children:"Add To Cart"})}export{R as AddToCart};
