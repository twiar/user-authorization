import{A as u,t as a,h as f,B as s,C as v}from"./index.7d915d6f.js";const l=n=>u(a(n)),h=n=>u(n);function m(n,t){return n!==void 0&&n()||t}function g(n,t){if(n!==void 0){const e=n();if(e!=null)return e.slice()}return t}function S(n,t){return n!==void 0?t.concat(n()):t}function p(n,t){return n===void 0?t:t!==void 0?t.concat(n()):n()}function y(n,t,e,r,i,c){t.key=r+i;const o=f(n,t,e);return i===!0?s(o,c()):o}function x(n,t){const e=n.style;for(const r in t)e[r]=t[r]}function b(n){if(n==null)return;if(typeof n=="string")try{return document.querySelector(n)||void 0}catch{return}const t=v(n);if(t)return t.$el||t}function C(n,t){if(n==null||n.contains(t)===!0)return!0;for(let e=n.nextElementSibling;e!==null;e=e.nextElementSibling)if(e.contains(t))return!0;return!1}export{S as a,x as b,l as c,h as d,y as e,p as f,b as g,m as h,g as i,C as j};
