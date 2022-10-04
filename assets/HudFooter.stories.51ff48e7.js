var _=Object.defineProperty;var s=(n,o)=>_(n,"name",{value:o,configurable:!0});import{_ as E}from"./HudFooter.60a7fb3a.js";import{R as h,C as A}from"./ConfigProvider.1f92cb4f.js";import"./vue.esm-bundler.581e043f.js";import"./index.9fc720b9.js";var v=m;m.flatten=m;m.unflatten=H;function T(n){return n&&n.constructor&&typeof n.constructor.isBuffer=="function"&&n.constructor.isBuffer(n)}s(T,"isBuffer");function C(n){return n}s(C,"keyIdentity");function m(n,o){o=o||{};const p=o.delimiter||".",f=o.maxDepth,b=o.transformKey||C,d={};function O(a,y,l){l=l||1,Object.keys(a).forEach(function(t){const e=a[t],r=o.safe&&Array.isArray(e),c=Object.prototype.toString.call(e),i=T(e),g=c==="[object Object]"||c==="[object Array]",u=y?y+p+b(t):b(t);if(!r&&!i&&g&&Object.keys(e).length&&(!o.maxDepth||l<f))return O(e,u,l+1);d[u]=e})}return s(O,"step"),O(n),d}s(m,"flatten");function H(n,o){o=o||{};const p=o.delimiter||".",f=o.overwrite||!1,b=o.transformKey||C,d={};if(T(n)||Object.prototype.toString.call(n)!=="[object Object]")return n;function a(t){const e=Number(t);return isNaN(e)||t.indexOf(".")!==-1||o.object?t:e}s(a,"getkey");function y(t,e,r){return Object.keys(r).reduce(function(c,i){return c[t+p+i]=r[i],c},e)}s(y,"addKeys");function l(t){const e=Object.prototype.toString.call(t),r=e==="[object Array]",c=e==="[object Object]";if(t){if(r)return!t.length;if(c)return!Object.keys(t).length}else return!0}return s(l,"isEmpty"),n=Object.keys(n).reduce(function(t,e){const r=Object.prototype.toString.call(n[e]);return!(r==="[object Object]"||r==="[object Array]")||l(n[e])?(t[e]=n[e],t):y(e,t,m(n[e],o))},{}),Object.keys(n).forEach(function(t){const e=t.split(p).map(b);let r=a(e.shift()),c=a(e[0]),i=d;for(;c!==void 0;){if(r==="__proto__")return;const g=Object.prototype.toString.call(i[r]),u=g==="[object Object]"||g==="[object Array]";if(!f&&!u&&typeof i[r]<"u")return;(f&&!u||!f&&i[r]==null)&&(i[r]=typeof c=="number"&&!o.object?[]:{}),i=i[r],e.length>0&&(r=a(e.shift()),c=a(e[0]))}i[r]=H(n[t],o)}),d}s(H,"unflatten");const S={parameters:{storySource:{source:`import HudFooter from './HudFooter.vue';
import { unflatten } from 'flat';
import ConfigProvider from './ConfigProvider';
import { RACE_KEY } from '../consts';

export default {
  title: 'Combined/HudFooter',
  component: HudFooter,
  argTypes: {
    'inventory.slots': {
      control: { type: 'range', min: 0, max: 6 },
    },
  }
};

const Template = (args: any) => ({
  components: { HudFooter, ConfigProvider },
  setup() {
    return {
      args: unflatten(args, '.')
    };
  },
  template: \`
    <ConfigProvider :theme="args.raceTheme">
      <HudFooter v-bind="args"/>
    </ConfigProvider>
  \`,
});

export const Human = Template.bind({});
Human.args = { raceTheme: RACE_KEY.HUMAN };

export const NightElf = Template.bind({});
NightElf.args = { raceTheme: RACE_KEY.NIGHT_ELF };

export const Orc = Template.bind({});
Orc.args = { raceTheme: RACE_KEY.ORC };

export const Undead = Template.bind({});
Undead.args = { raceTheme: RACE_KEY.UNDEAD };
`,locationsMap:{human:{startLoc:{col:17,line:16},endLoc:{col:2,line:28},startBody:{col:17,line:16},endBody:{col:2,line:28}},"night-elf":{startLoc:{col:17,line:16},endLoc:{col:2,line:28},startBody:{col:17,line:16},endBody:{col:2,line:28}},orc:{startLoc:{col:17,line:16},endLoc:{col:2,line:28},startBody:{col:17,line:16},endBody:{col:2,line:28}},undead:{startLoc:{col:17,line:16},endLoc:{col:2,line:28},startBody:{col:17,line:16},endBody:{col:2,line:28}}}}},title:"Combined/HudFooter",component:E,argTypes:{"inventory.slots":{control:{type:"range",min:0,max:6}}}},j=s(n=>({components:{HudFooter:E,ConfigProvider:A},setup(){return{args:v.unflatten(n,".")}},template:`
    <ConfigProvider :theme="args.raceTheme">
      <HudFooter v-bind="args"/>
    </ConfigProvider>
  `}),"Template"),x=j.bind({});x.args={raceTheme:h.HUMAN};const K=j.bind({});K.args={raceTheme:h.NIGHT_ELF};const N=j.bind({});N.args={raceTheme:h.ORC};const F=j.bind({});F.args={raceTheme:h.UNDEAD};const Y=["Human","NightElf","Orc","Undead"];export{x as Human,K as NightElf,N as Orc,F as Undead,Y as __namedExportsOrder,S as default};
//# sourceMappingURL=HudFooter.stories.51ff48e7.js.map
