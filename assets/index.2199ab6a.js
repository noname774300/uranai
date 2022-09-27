(function(){const O=document.createElement("link").relList;if(O&&O.supports&&O.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))H(m);new MutationObserver(m=>{for(const v of m)if(v.type==="childList")for(const ie of v.addedNodes)ie.tagName==="LINK"&&ie.rel==="modulepreload"&&H(ie)}).observe(document,{childList:!0,subtree:!0});function le(m){const v={};return m.integrity&&(v.integrity=m.integrity),m.referrerpolicy&&(v.referrerPolicy=m.referrerpolicy),m.crossorigin==="use-credentials"?v.credentials="include":m.crossorigin==="anonymous"?v.credentials="omit":v.credentials="same-origin",v}function H(m){if(m.ep)return;m.ep=!0;const v=le(m);fetch(m.href,v)}})();(function(){(function(n){function O(t,e=0,l=1){return Math.max(e,Math.min(t,l))}function le(t,e,l){const i=l-e,s=t-e;if(s>=0)return s%i+e;{let r=i+s%i+e;return r>=l&&(r-=i),r}}function H(t,e,l){return e<=t&&t<l}function m(t){return[...Array(t).keys()]}function v(t,e){return m(t).map(l=>e(l))}function ie(t,e){let l=[];for(let i=0,s=0;i<t.length;s++)e(t[i],s)?(l.push(t[i]),t.splice(i,1)):i++;return l}function Kt(t){return[...t].reduce((e,[l,i])=>(e[l]=i,e),{})}function Jt(t){return Object.keys(t).map(e=>[e,t[e]])}function Ll(t,e){return String.fromCharCode(t.charCodeAt(0)+e)}function fe(t){return t.x!=null&&t.y!=null}class h{constructor(e,l){this.x=0,this.y=0,this.set(e,l)}set(e=0,l=0){return fe(e)?(this.x=e.x,this.y=e.y,this):(this.x=e,this.y=l,this)}add(e,l){return fe(e)?(this.x+=e.x,this.y+=e.y,this):(this.x+=e,this.y+=l,this)}sub(e,l){return fe(e)?(this.x-=e.x,this.y-=e.y,this):(this.x-=e,this.y-=l,this)}mul(e){return this.x*=e,this.y*=e,this}div(e){return this.x/=e,this.y/=e,this}clamp(e,l,i,s){return this.x=O(this.x,e,l),this.y=O(this.y,i,s),this}wrap(e,l,i,s){return this.x=le(this.x,e,l),this.y=le(this.y,i,s),this}addWithAngle(e,l){return this.x+=Math.cos(e)*l,this.y+=Math.sin(e)*l,this}swapXy(){const e=this.x;return this.x=this.y,this.y=e,this}normalize(){return this.div(this.length),this}rotate(e){if(e===0)return this;const l=this.x;return this.x=l*Math.cos(e)-this.y*Math.sin(e),this.y=l*Math.sin(e)+this.y*Math.cos(e),this}angleTo(e,l){return fe(e)?Math.atan2(e.y-this.y,e.x-this.x):Math.atan2(l-this.y,e-this.x)}distanceTo(e,l){let i,s;return fe(e)?(i=e.x-this.x,s=e.y-this.y):(i=e-this.x,s=l-this.y),Math.sqrt(i*i+s*s)}isInRect(e,l,i,s){return H(this.x,e,e+i)&&H(this.y,l,l+s)}equals(e){return this.x===e.x&&this.y===e.y}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}get length(){return Math.sqrt(this.x*this.x+this.y*this.y)}get angle(){return Math.atan2(this.y,this.x)}}const Nt=["transparent","white","red","green","yellow","blue","purple","cyan","black","light_red","light_green","light_yellow","light_blue","light_purple","light_cyan","light_black"],Ul="twrgybpclRGYBPCL";let de;const Tl=[15658734,15277667,5025616,16761095,4149685,10233776,240116,6381921];function Al(t){const[e,l,i]=it(0,t);if(de=Kt(Nt.map((s,r)=>{if(r<1)return[s,{r:0,g:0,b:0,a:0}];if(r<9){const[c,d,p]=it(r-1,t);return[s,{r:c,g:d,b:p,a:1}]}const[o,a,u]=it(r-9+1,t);return[s,{r:Math.floor(t?o*.5:e-(e-o)*.5),g:Math.floor(t?a*.5:i-(i-a)*.5),b:Math.floor(t?u*.5:l-(l-u)*.5),a:1}]})),t){const s=de.blue;de.white={r:Math.floor(s.r*.15),g:Math.floor(s.g*.15),b:Math.floor(s.b*.15),a:1}}}function it(t,e){e&&(t===0?t=7:t===7&&(t=0));const l=Tl[t];return[(l&16711680)>>16,(l&65280)>>8,l&255]}function ne(t,e=1){const l=de[t];return Math.floor(l.r*e)<<16|Math.floor(l.g*e)<<8|Math.floor(l.b*e)}function he(t,e=1){const l=de[t],i=Math.floor(l.r*e),s=Math.floor(l.g*e),r=Math.floor(l.b*e);return l.a<1?`rgba(${i},${s},${r},${l.a})`:`rgb(${i},${s},${r})`}const Kl=`
varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float width;
uniform float height;

float gridValue(vec2 uv, float res) {
  vec2 grid = fract(uv * res);
  return (step(res, grid.x) * step(res, grid.y));
}

void main(void) {
  vec4 color = texture2D(uSampler, vTextureCoord);  
  vec2 grid_uv = vTextureCoord.xy * vec2(width, height);
  float v = gridValue(grid_uv, 0.2);
  gl_FragColor.rgba = color * v;
}
`;function Jl(t,e){return new PIXI.Filter(void 0,Kl,{width:t,height:e})}const I=new h;let C,F,y,b=new h;const _t=5;document.createElement("img");let w,ge,pe=1,nt="black",M,Ht,se=!1,g,Wt;function Nl(t,e,l,i,s,r,o){I.set(t),g=o,nt=l;const a=`
-webkit-touch-callout: none;
-webkit-tap-highlight-color: ${e};
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background: ${e};
color: #888;
`,u=`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
`,c=`
image-rendering: -moz-crisp-edges;
image-rendering: -webkit-optimize-contrast;
image-rendering: -o-crisp-edges;
image-rendering: pixelated;
`;if(document.body.style.cssText=a,b.set(I),g.isUsingPixi){b.mul(_t);const p=new PIXI.Application({width:b.x,height:b.y});if(C=p.view,y=new PIXI.Graphics,y.scale.x=y.scale.y=_t,PIXI.settings.SCALE_MODE=PIXI.SCALE_MODES.NEAREST,p.stage.addChild(y),y.filters=[],g.name==="crt"&&y.filters.push(Wt=new PIXI.filters.CRTFilter({vignettingAlpha:.7})),g.name==="pixel"&&y.filters.push(Jl(b.x,b.y)),g.name==="pixel"||g.name==="shapeDark"){const x=new PIXI.filters.AdvancedBloomFilter({threshold:.1,bloomScale:g.name==="pixel"?1.5:1,brightness:g.name==="pixel"?1.5:1,blur:8});y.filters.push(x)}y.lineStyle(0),C.style.cssText=u}else C=document.createElement("canvas"),C.width=b.x,C.height=b.y,F=C.getContext("2d"),F.imageSmoothingEnabled=!1,C.style.cssText=u+c;document.body.appendChild(C);const d=()=>{const x=innerWidth/innerHeight,j=b.x/b.y,_=x<j,z=_?.95*innerWidth:.95*innerHeight*j,tt=_?.95*innerWidth/j:.95*innerHeight;C.style.width=`${z}px`,C.style.height=`${tt}px`};if(window.addEventListener("resize",d),d(),i){w=document.createElement("canvas");let p;s?(w.width=b.x,w.height=b.y,p=r):(b.x<=b.y*2?(w.width=b.y*2,w.height=b.y):(w.width=b.x,w.height=b.x/2),w.width>400&&(pe=400/w.width,w.width=400,w.height*=pe),p=Math.round(400/w.width)),ge=w.getContext("2d"),ge.fillStyle=e,gcc.setOptions({scale:p,capturingFps:60,isSmoothingEnabled:!1})}}function De(){if(g.isUsingPixi){y.clear(),y.beginFill(ne(nt,g.isDarkColor?.15:1)),y.drawRect(0,0,I.x,I.y),y.endFill(),y.beginFill(ne(M)),se=!0;return}F.fillStyle=he(nt,g.isDarkColor?.15:1),F.fillRect(0,0,I.x,I.y),F.fillStyle=he(M)}function $(t){if(t===M){g.isUsingPixi&&!se&&Fe(ne(M));return}if(M=t,g.isUsingPixi){se&&y.endFill(),Fe(ne(M));return}F.fillStyle=he(t)}function Fe(t){$e(),y.beginFill(t),se=!0}function $e(){se&&(y.endFill(),se=!1)}function Be(){Ht=M}function Le(){$(Ht)}function me(t,e,l,i){if(g.isUsingPixi){g.name==="shape"||g.name==="shapeDark"?y.drawRoundedRect(t,e,l,i,2):y.drawRect(t,e,l,i);return}F.fillRect(t,e,l,i)}function _l(t,e,l,i,s){const r=ne(M);Fe(r),y.drawCircle(t,e,s*.5),y.drawCircle(l,i,s*.5),$e(),y.lineStyle(s,r),y.moveTo(t,e),y.lineTo(l,i),y.lineStyle(0)}function Hl(){Wt.time+=.2}function Wl(){if(ge.fillRect(0,0,w.width,w.height),pe===1)ge.drawImage(C,(w.width-C.width)/2,(w.height-C.height)/2);else{const t=C.width*pe,e=C.height*pe;ge.drawImage(C,(w.width-t)/2,(w.height-e)/2,t,e)}gcc.capture(w)}const Xt=[`
l
l
l

l
`,`
l l
l l



`,`
 l l
lllll
 l l
lllll
 l l
`,`
 lll
l l
 lll
  l l
 lll
`,`
l   l
l  l
  l
 l  l
l   l
`,`
 l
l l
 ll l
l  l
 ll l
`,`
l
l



`,`
 l
l
l
l
 l
`,`
l
 l
 l
 l
l
`,`
  l
l l l
 lll
l l l
  l
`,`
  l
  l
lllll
  l
  l
`,`



 l
l
`,`


lllll


`,`




l
`,`
    l
   l
  l
 l
l
`,`
 lll
l  ll
l l l
ll  l
 lll
`,`
 ll
l l
  l
  l
lllll
`,`
 lll
l   l
  ll
 l
lllll
`,`
 lll
l   l
  ll
l   l
 lll
`,`
  ll
 l l
l  l
lllll
   l
`,`
lllll
l
llll
    l
llll
`,`
 lll
l
llll
l   l
 lll
`,`
lllll
l   l
   l
  l
 l
`,`
 lll
l   l
 lll
l   l
 lll
`,`
 lll
l   l
 llll
    l
 lll
`,`

l

l

`,`

 l

 l
l
`,`
   ll
 ll
l
 ll
   ll
`,`

lllll

lllll

`,`
ll
  ll
    l
  ll
ll
`,`
 lll
l   l
  ll

  l
`,`
 lll
l   l
l lll
l
 lll
`,`
 lll
l   l
lllll
l   l
l   l
`,`
llll
l   l
llll
l   l
llll
`,`
 lll
l   l
l
l   l
 lll
`,`
llll
l   l
l   l
l   l
llll
`,`
lllll
l
llll
l
lllll
`,`
lllll
l
llll
l
l
`,`
 lll
l
l  ll
l   l
 lll
`,`
l   l
l   l
lllll
l   l
l   l
`,`
lllll
  l
  l
  l
lllll
`,`
  lll
   l
   l
l  l
 ll
`,`
l   l
l  l
lll
l  l
l   l
`,`
l
l
l
l
lllll
`,`
l   l
ll ll
l l l
l   l
l   l
`,`
l   l
ll  l
l l l
l  ll
l   l
`,`
 lll
l   l
l   l
l   l
 lll
`,`
llll
l   l
llll
l
l
`,`
 lll
l   l
l   l
l  ll
 llll
`,`
llll
l   l
llll
l   l
l   l
`,`
 llll
l
 lll
    l
llll
`,`
lllll
  l
  l
  l
  l
`,`
l   l
l   l
l   l
l   l
 lll
`,`
l   l
l   l
l   l
 l l
  l
`,`
l   l
l l l
l l l
l l l
 l l
`,`
l   l
 l l
  l
 l l
l   l
`,`
l   l
 l l
  l
  l
  l
`,`
lllll
   l
  l
 l
lllll
`,`
  ll
  l
  l
  l
  ll
`,`
l
 l
  l
   l
    l
`,`
 ll
  l
  l
  l
 ll
`,`
  l
 l l



`,`




lllll
`,`
 l
  l



`,`

 lll
l  l
l  l
 lll
`,`
l
l
lll
l  l
lll
`,`

 lll
l  
l
 lll
`,`
   l
   l
 lll
l  l
 lll
`,`

 ll
l ll
ll
 ll
`,`
  l
 l 
lll
 l
 l
`,`
 ll
l  l
 lll
   l
 ll
`,`
l
l
ll
l l
l l
`,`

l

l
l
`,`
 l

 l
 l
l
`,`
l
l
l l
ll
l l
`,`
ll
 l
 l
 l
lll
`,`

llll
l l l
l l l
l   l
`,`

lll
l  l
l  l
l  l
`,`

 ll
l  l
l  l
 ll
`,`

lll
l  l
lll
l
`,`

 lll
l  l
 lll
   l
`,`

l ll
ll
l
l
`,`

 lll
ll
  ll
lll
`,`

 l
lll
 l
  l
`,`

l  l
l  l
l  l
 lll
`,`

l  l
l  l
 ll
 ll
`,`

l   l
l l l
l l l
 l l
`,`

l  l
 ll
 ll
l  l
`,`

l  l
 ll
 l
l
`,`

llll
  l
 l
llll
`,`
 ll
 l
l
 l
 ll
`,`
l
l
l
l
l
`,`
ll
 l
  l
 l
ll
`,`

 l
l l l
   l

`];let re,Ue;function Xl(){re=[],Ue=[]}function qt(){re=re.concat(Ue),Ue=[]}function Vt(t){let e={isColliding:{rect:{},text:{},char:{}}};return re.forEach(l=>{ql(t,l)&&(e=Object.assign(Object.assign(Object.assign({},e),st(l.collision.isColliding.rect)),{isColliding:{rect:Object.assign(Object.assign({},e.isColliding.rect),l.collision.isColliding.rect),text:Object.assign(Object.assign({},e.isColliding.text),l.collision.isColliding.text),char:Object.assign(Object.assign({},e.isColliding.char),l.collision.isColliding.char)}}))}),e}function ql(t,e){const l=e.pos.x-t.pos.x,i=e.pos.y-t.pos.y;return-e.size.x<l&&l<t.size.x&&-e.size.y<i&&i<t.size.y}function st(t){if(t==null)return{};const e={transparent:"tr",white:"wh",red:"rd",green:"gr",yellow:"yl",blue:"bl",purple:"pr",cyan:"cy",black:"lc"};let l={};return Jt(t).forEach(([i,s])=>{const r=e[i];s&&r!=null&&(l[r]=!0)}),l}function Yt(t,e,l,i){return Zt(!1,t,e,l,i)}function Vl(t,e,l,i){return Zt(!0,t,e,l,i)}function Zt(t,e,l,i,s){if(typeof l=="number"){if(typeof i=="number")return ct(e,l,i,Object.assign({isCharacter:t,isCheckingCollision:!0,color:M},s));throw"invalid params"}else return ct(e,l.x,l.y,Object.assign({isCharacter:t,isCheckingCollision:!0,color:M},i))}const ye=6,we=1,f=ye*we;let Qt,rt,ot,at=!1,J,W,be,Te;const Ce={color:"black",backgroundColor:"transparent",rotation:0,mirror:{x:1,y:1},scale:{x:1,y:1},isCharacter:!1,isCheckingCollision:!1};function Yl(){J=document.createElement("canvas"),J.width=J.height=f,W=J.getContext("2d"),be=document.createElement("canvas"),Te=be.getContext("2d"),Qt=Xt.map((t,e)=>Object.assign(Object.assign({},ft(t)),{hitBox:Ae(String.fromCharCode(33+e),!1)})),rt=Xt.map((t,e)=>Object.assign(Object.assign({},ft(t)),{hitBox:Ae(String.fromCharCode(33+e),!0)})),ot={}}function Zl(t,e){const l=e.charCodeAt(0)-33;t.forEach((i,s)=>{rt[l+s]=Object.assign(Object.assign({},ft(i)),{hitBox:Ae(String.fromCharCode(33+l+s),!0)})})}function Ql(){at=!0}function ct(t,e,l,i={}){const s=il(i);e-=f/2*s.scale.x,l-=f/2*s.scale.y;const r=Math.floor(e);let o=t,a=r,u=Math.floor(l),c={isColliding:{rect:{},text:{},char:{}}};for(let d=0;d<o.length;d++){const p=o[d];if(p===`
`){a=r,u+=f*s.scale.y;continue}const x=el(p,a,u,s);s.isCheckingCollision&&(c={isColliding:{rect:Object.assign(Object.assign({},c.isColliding.rect),x.isColliding.rect),text:Object.assign(Object.assign({},c.isColliding.text),x.isColliding.text),char:Object.assign(Object.assign({},c.isColliding.char),x.isColliding.char)}}),a+=f*s.scale.x}return c}function el(t,e,l,i){const s=t.charCodeAt(0);if(s<32||s>126)return{isColliding:{rect:{},text:{},char:{}}};const r=il(i);if(r.backgroundColor!=="transparent"&&(Be(),$(r.backgroundColor),me(e,l,f*r.scale.x,f*r.scale.y),Le()),s<=32)return{isColliding:{rect:{},text:{},char:{}}};const o=s-33,a=r.isCharacter?rt[o]:Qt[o],u=le(r.rotation,0,4);if(r.color==="black"&&u===0&&r.mirror.x===1&&r.mirror.y===1&&(!g.isUsingPixi||r.scale.x===1&&r.scale.y===1))return ut(a,e,l,r.scale,r.isCheckingCollision,!0);const c=JSON.stringify({c:t,options:r}),d=ot[c];if(d!=null)return ut(d,e,l,r.scale,r.isCheckingCollision,r.color!=="transparent");let p=!1;g.isUsingPixi&&(r.scale.x!==1||r.scale.y!==1)&&(be.width=f*r.scale.x,be.height=f*r.scale.y,Te.imageSmoothingEnabled=!1,Te.scale(r.scale.x,r.scale.y),tl(Te,u,r,a),p=!0),W.clearRect(0,0,f,f),tl(W,u,r,a);const x=Ae(t,r.isCharacter);let j;if(at||g.isUsingPixi){const _=document.createElement("img");if(_.src=J.toDataURL(),g.isUsingPixi){const z=document.createElement("img");z.src=(p?be:J).toDataURL(),j=PIXI.Texture.from(z)}at&&(ot[c]={image:_,texture:j,hitBox:x})}return ut({image:J,texture:j,hitBox:x},e,l,r.scale,r.isCheckingCollision,r.color!=="transparent")}function tl(t,e,l,i){e===0&&l.mirror.x===1&&l.mirror.y===1?t.drawImage(i.image,0,0):(t.save(),t.translate(f/2,f/2),t.rotate(Math.PI/2*e),(l.mirror.x===-1||l.mirror.y===-1)&&t.scale(l.mirror.x,l.mirror.y),t.drawImage(i.image,-f/2,-f/2),t.restore()),l.color!=="black"&&(t.globalCompositeOperation="source-in",t.fillStyle=he(l.color==="transparent"?"black":l.color),t.fillRect(0,0,f,f),t.globalCompositeOperation="source-over")}function ut(t,e,l,i,s,r){if(r&&(i.x===1&&i.y===1?ll(t,e,l):ll(t,e,l,f*i.x,f*i.y)),!s)return;const o={pos:{x:e+t.hitBox.pos.x*i.x,y:l+t.hitBox.pos.y*i.y},size:{x:t.hitBox.size.x*i.x,y:t.hitBox.size.y*i.y},collision:t.hitBox.collision},a=Vt(o);return r&&re.push(o),a}function ll(t,e,l,i,s){if(g.isUsingPixi){$e(),y.beginTextureFill({texture:t.texture,matrix:new PIXI.Matrix().translate(e,l)}),y.drawRect(e,l,i==null?f:i,s==null?f:s),Fe(ne(M));return}i==null?F.drawImage(t.image,e,l):F.drawImage(t.image,e,l,i,s)}function ft(t,e=!0){W.clearRect(0,0,f,f);let l=t.split(`
`);e&&(l=l.slice(1,l.length-1));let i=0;l.forEach(u=>{i=Math.max(u.length,i)});const s=Math.max(Math.ceil((ye-i)/2),0),r=l.length,o=Math.max(Math.ceil((ye-r)/2),0);l.forEach((u,c)=>{if(!(c+o>=ye))for(let d=0;d<ye-s;d++){const p=u.charAt(d);let x=Ul.indexOf(p);p!==""&&x>=1&&(W.fillStyle=he(Nt[x]),W.fillRect((d+s)*we,(c+o)*we,we,we))}});const a=document.createElement("img");return a.src=J.toDataURL(),g.isUsingPixi?{image:a,texture:PIXI.Texture.from(a)}:{image:a}}function Ae(t,e){const l={pos:new h(f,f),size:new h,collision:{isColliding:{char:{},text:{}}}};e?l.collision.isColliding.char[t]=!0:l.collision.isColliding.text[t]=!0;const i=W.getImageData(0,0,f,f).data;let s=0;for(let r=0;r<f;r++)for(let o=0;o<f;o++)i[s+3]>0&&(o<l.pos.x&&(l.pos.x=o),r<l.pos.y&&(l.pos.y=r)),s+=4;s=0;for(let r=0;r<f;r++)for(let o=0;o<f;o++)i[s+3]>0&&(o>l.pos.x+l.size.x-1&&(l.size.x=o-l.pos.x+1),r>l.pos.y+l.size.y-1&&(l.size.y=r-l.pos.y+1)),s+=4;return l}function il(t){let e=Object.assign(Object.assign({},Ce),t);return t.scale!=null&&(e.scale=Object.assign(Object.assign({},Ce.scale),t.scale)),t.mirror!=null&&(e.mirror=Object.assign(Object.assign({},Ce.mirror),t.mirror)),e}let oe=!1,Ke=!1,dt=!1;const nl=["Escape","Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Minus","Equal","Backspace","Tab","KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP","BracketLeft","BracketRight","Enter","ControlLeft","KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","Semicolon","Quote","Backquote","ShiftLeft","Backslash","KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","Comma","Period","Slash","ShiftRight","NumpadMultiply","AltLeft","Space","CapsLock","F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","Pause","ScrollLock","Numpad7","Numpad8","Numpad9","NumpadSubtract","Numpad4","Numpad5","Numpad6","NumpadAdd","Numpad1","Numpad2","Numpad3","Numpad0","NumpadDecimal","IntlBackslash","F11","F12","F13","F14","F15","F16","F17","F18","F19","F20","F21","F22","F23","F24","IntlYen","Undo","Paste","MediaTrackPrevious","Cut","Copy","MediaTrackNext","NumpadEnter","ControlRight","LaunchMail","AudioVolumeMute","MediaPlayPause","MediaStop","Eject","AudioVolumeDown","AudioVolumeUp","BrowserHome","NumpadDivide","PrintScreen","AltRight","Help","NumLock","Pause","Home","ArrowUp","PageUp","ArrowLeft","ArrowRight","End","ArrowDown","PageDown","Insert","Delete","OSLeft","OSRight","ContextMenu","BrowserSearch","BrowserFavorites","BrowserRefresh","BrowserStop","BrowserForward","BrowserBack"];let ht;const ei={onKeyDown:void 0};let gt,pt=!1,mt=!1,yt=!1,wt={},bt={},Ct={};function sl(t){gt=Object.assign(Object.assign({},ei),t),ht=Kt(nl.map(e=>[e,{isPressed:!1,isJustPressed:!1,isJustReleased:!1}])),document.addEventListener("keydown",e=>{pt=mt=!0,wt[e.code]=bt[e.code]=!0,gt.onKeyDown!=null&&gt.onKeyDown(),(e.code==="AltLeft"||e.code==="AltRight"||e.code==="ArrowRight"||e.code==="ArrowDown"||e.code==="ArrowLeft"||e.code==="ArrowUp")&&e.preventDefault()}),document.addEventListener("keyup",e=>{pt=!1,yt=!0,wt[e.code]=!1,Ct[e.code]=!0})}function rl(){Ke=!oe&&mt,dt=oe&&yt,mt=yt=!1,oe=pt,Jt(ht).forEach(([t,e])=>{e.isJustPressed=!e.isPressed&&bt[t],e.isJustReleased=e.isPressed&&Ct[t],e.isPressed=!!wt[t]}),bt={},Ct={}}function ol(){Ke=!1,oe=!0}var ti=Object.freeze({__proto__:null,get isPressed(){return oe},get isJustPressed(){return Ke},get isJustReleased(){return dt},codes:nl,get code(){return ht},init:sl,update:rl,clearJustPressed:ol});class Je{constructor(e=null){this.setSeed(e)}get(e=1,l){return l==null&&(l=e,e=0),this.next()/4294967295*(l-e)+e}getInt(e,l){l==null&&(l=e,e=0);const i=Math.floor(e),s=Math.floor(l);return s===i?i:this.next()%(s-i)+i}getPlusOrMinus(){return this.getInt(2)*2-1}select(e){return e[this.getInt(e.length)]}setSeed(e,l=123456789,i=362436069,s=521288629,r=32){this.w=e!=null?e>>>0:Math.floor(Math.random()*4294967295)>>>0,this.x=l>>>0,this.y=i>>>0,this.z=s>>>0;for(let o=0;o<r;o++)this.next();return this}getState(){return{x:this.x,y:this.y,z:this.z,w:this.w}}next(){const e=this.x^this.x<<11;return this.x=this.y,this.y=this.z,this.z=this.w,this.w=(this.w^this.w>>>19^(e^e>>>8))>>>0,this.w}}const Se=new h;let B=!1,ae=!1,xe=!1,li={isDebugMode:!1,anchor:new h,padding:new h,onPointerDownOrUp:void 0},k,R,S;const Me=new Je,X=new h,L=new h;let ve=!1,ke=new h,St=!1,xt=!1,Mt=!1;function al(t,e,l){S=Object.assign(Object.assign({},li),l),k=t,R=new h(e.x+S.padding.x*2,e.y+S.padding.y*2),ke.set(k.offsetLeft+k.clientWidth*(.5-S.anchor.x),k.offsetTop+k.clientWidth*(.5-S.anchor.y)),S.isDebugMode&&X.set(k.offsetLeft+k.clientWidth*(.5-S.anchor.x),k.offsetTop+k.clientWidth*(.5-S.anchor.y)),document.addEventListener("mousedown",i=>{fl(i.pageX,i.pageY)}),document.addEventListener("touchstart",i=>{fl(i.touches[0].pageX,i.touches[0].pageY)}),document.addEventListener("mousemove",i=>{dl(i.pageX,i.pageY)}),document.addEventListener("touchmove",i=>{i.preventDefault(),dl(i.touches[0].pageX,i.touches[0].pageY)},{passive:!1}),document.addEventListener("mouseup",i=>{hl()}),document.addEventListener("touchend",i=>{i.preventDefault(),i.target.click(),hl()},{passive:!1})}function cl(){ii(ke.x,ke.y,Se),S.isDebugMode&&!Se.isInRect(0,0,R.x,R.y)?(ni(),Se.set(X),ae=!B&&ve,xe=B&&!ve,B=ve):(ae=!B&&xt,xe=B&&Mt,B=St),xt=Mt=!1}function ul(){ae=!1,B=!0}function ii(t,e,l){k!=null&&(l.x=Math.round(((t-k.offsetLeft)/k.clientWidth+S.anchor.x)*R.x-S.padding.x),l.y=Math.round(((e-k.offsetTop)/k.clientHeight+S.anchor.y)*R.y-S.padding.y))}function ni(){L.length>0?(X.add(L),!H(X.x,-R.x*.1,R.x*1.1)&&X.x*L.x>0&&(L.x*=-1),!H(X.y,-R.y*.1,R.y*1.1)&&X.y*L.y>0&&(L.y*=-1),Me.get()<.05&&L.set(0)):Me.get()<.1&&(L.set(0),L.addWithAngle(Me.get(Math.PI*2),(R.x+R.y)*Me.get(.01,.03))),Me.get()<.05&&(ve=!ve)}function fl(t,e){ke.set(t,e),St=xt=!0,S.onPointerDownOrUp!=null&&S.onPointerDownOrUp()}function dl(t,e){ke.set(t,e)}function hl(t){St=!1,Mt=!0,S.onPointerDownOrUp!=null&&S.onPointerDownOrUp()}var si=Object.freeze({__proto__:null,pos:Se,get isPressed(){return B},get isJustPressed(){return ae},get isJustReleased(){return xe},init:al,update:cl,clearJustPressed:ul});let U=new h,T=!1,E=!1,N=!1;function gl(t){sl({onKeyDown:t}),al(C,I,{onPointerDownOrUp:t,anchor:new h(.5,.5)})}function pl(){rl(),cl(),U=Se,T=oe||B,E=Ke||ae,N=dt||xe}function ml(){ol(),ul()}function Pe(t){U.set(t.pos),T=t.isPressed,E=t.isJustPressed,N=t.isJustReleased}var ri=Object.freeze({__proto__:null,get pos(){return U},get isPressed(){return T},get isJustPressed(){return E},get isJustReleased(){return N},init:gl,update:pl,clearJustPressed:ml,set:Pe});let yl,wl;const bl=68,vt=1e3/bl;let Oe=0;const oi={viewSize:{x:126,y:126},bodyBackground:"#111",viewBackground:"black",isUsingVirtualPad:!0,isFourWaysStick:!1,isCapturing:!1,isCapturingGameCanvasOnly:!1,isSoundEnabled:!0,captureCanvasScale:1,theme:{name:"simple",isUsingPixi:!1,isDarkColor:!1}};let G,Cl=10;function ai(t,e,l){yl=t,wl=e,G=Object.assign(Object.assign({},oi),l),Al(G.theme.isDarkColor),Nl(G.viewSize,G.bodyBackground,G.viewBackground,G.isCapturing,G.isCapturingGameCanvasOnly,G.captureCanvasScale,G.theme),gl(G.isSoundEnabled?sss.startAudio:()=>{}),Yl(),yl(),Sl()}function Sl(){requestAnimationFrame(Sl);const t=window.performance.now();t<Oe-bl/12||(Oe+=vt,(Oe<t||Oe>t+vt*2)&&(Oe=t+vt),G.isSoundEnabled&&sss.update(),pl(),wl(),G.isCapturing&&Wl(),Cl--,Cl===0&&Ql())}class ci{constructor(e){this.size=new h,this.size.set(e),this.letterGrid=m(this.size.x).map(()=>m(this.size.y).map(()=>{})),this.colorGrid=m(this.size.x).map(()=>m(this.size.y).map(()=>{})),this.backgroundColorGrid=m(this.size.x).map(()=>m(this.size.y).map(()=>{})),this.rotationGrid=m(this.size.x).map(()=>m(this.size.y).map(()=>{})),this.characterGrid=m(this.size.x).map(()=>m(this.size.y).map(()=>{}))}print(e,l,i,s={}){const r=Object.assign(Object.assign({},Ce),s);let o=Math.floor(l),a=Math.floor(i);const u=o;for(let c=0;c<e.length;c++){const d=e[c];if(d===`
`){o=u,a++;continue}if(o<0||o>=this.size.x||a<0||a>=this.size.y){o++;continue}this.letterGrid[o][a]=d,this.colorGrid[o][a]=r.color,this.backgroundColorGrid[o][a]=r.backgroundColor,this.rotationGrid[o][a]=r.rotation,this.characterGrid[o][a]=r.isCharacter,o++}}getCharAt(e,l){if(e<0||e>=this.size.x||l<0||l>=this.size.y)return;const i=Math.floor(e),s=Math.floor(l),r=this.letterGrid[i][s],o=this.colorGrid[i][s],a=this.backgroundColorGrid[i][s],u=this.rotationGrid[i][s],c=this.characterGrid[i][s];return{char:r,options:{color:o,backgroundColor:a,rotation:u,isCharacter:c}}}setCharAt(e,l,i,s){if(e<0||e>=this.size.x||l<0||l>=this.size.y)return;const r=Object.assign(Object.assign({},Ce),s),o=Math.floor(e),a=Math.floor(l);this.letterGrid[o][a]=i,this.colorGrid[o][a]=r.color,this.backgroundColorGrid[o][a]=r.backgroundColor,this.rotationGrid[o][a]=r.rotation,this.characterGrid[o][a]=r.isCharacter}draw(){for(let e=0;e<this.size.x;e++)for(let l=0;l<this.size.y;l++){const i=this.letterGrid[e][l];if(i==null)continue;const s=this.colorGrid[e][l],r=this.backgroundColorGrid[e][l],o=this.rotationGrid[e][l],a=this.characterGrid[e][l];el(i,e*f,l*f,{color:s,backgroundColor:r,rotation:o,isCharacter:a})}}clear(){for(let e=0;e<this.size.x;e++)for(let l=0;l<this.size.y;l++)this.letterGrid[e][l]=this.colorGrid[e][l]=this.backgroundColorGrid[e][l]=this.rotationGrid[e][l]=this.characterGrid[e][l]=void 0}scrollUp(){for(let l=0;l<this.size.x;l++)for(let i=1;i<this.size.y;i++)this.letterGrid[l][i-1]=this.letterGrid[l][i],this.colorGrid[l][i-1]=this.colorGrid[l][i],this.backgroundColorGrid[l][i-1]=this.backgroundColorGrid[l][i],this.rotationGrid[l][i-1]=this.rotationGrid[l][i],this.characterGrid[l][i-1]=this.characterGrid[l][i];const e=this.size.y-1;for(let l=0;l<this.size.x;l++)this.letterGrid[l][e]=this.colorGrid[l][e]=this.backgroundColorGrid[l][e]=this.rotationGrid[l][e]=this.characterGrid[l][e]=void 0}getState(){return{charGrid:this.letterGrid.map(e=>[].concat(e)),colorGrid:this.colorGrid.map(e=>[].concat(e)),backgroundColorGrid:this.backgroundColorGrid.map(e=>[].concat(e)),rotationGrid:this.rotationGrid.map(e=>[].concat(e)),symbolGrid:this.characterGrid.map(e=>[].concat(e))}}setState(e){this.letterGrid=e.charGrid.map(l=>[].concat(l)),this.colorGrid=e.colorGrid.map(l=>[].concat(l)),this.backgroundColorGrid=e.backgroundColorGrid.map(l=>[].concat(l)),this.rotationGrid=e.rotationGrid.map(l=>[].concat(l)),this.characterGrid=e.symbolGrid.map(l=>[].concat(l))}}let Ne;const _e=new Je;function kt(){Ne=[]}function xl(t,e=16,l=1,i=0,s=Math.PI*2){if(e<1){if(_e.get()>e)return;e=1}for(let r=0;r<e;r++){const o=i+_e.get(s)-s/2,a={pos:new h(t),vel:new h(l*_e.get(.5,1),0).rotate(o),color:M,ticks:O(_e.get(10,20)*Math.sqrt(Math.abs(l)),10,60)};Ne.push(a)}}function He(){Be(),Ne=Ne.filter(t=>(t.ticks--,t.ticks<0?!1:(t.pos.add(t.vel),t.vel.mul(.98),$(t.color),me(Math.floor(t.pos.x),Math.floor(t.pos.y),1,1),!0))),Le()}function Pt(t,e,l,i){return Ml(!1,t,e,l,i)}function ui(t,e,l,i){return Ml(!0,t,e,l,i)}function fi(t,e,l,i,s=.5,r=.5){typeof t!="number"&&(r=s,s=i,i=l,l=e,e=t.y,t=t.x);const o=new h(l).rotate(s),a=new h(t-o.x*r,e-o.y*r);return Ot(a,o,i)}function di(t,e,l=3,i=3,s=3){const r=new h,o=new h;if(typeof t=="number")if(typeof e=="number")typeof l=="number"?(r.set(t,e),o.set(l,i)):(r.set(t,e),o.set(l),s=i);else throw"invalid params";else if(typeof e=="number")if(typeof l=="number")r.set(t),o.set(e,l),s=i;else throw"invalid params";else if(typeof l=="number")r.set(t),o.set(e),s=l;else throw"invalid params";return Ot(r,o.sub(r),s)}function hi(t,e,l,i,s,r){let o=new h;typeof t=="number"?o.set(t,e):(o.set(t),r=s,s=i,i=l,l=e),i==null&&(i=3),s==null&&(s=0),r==null&&(r=Math.PI*2);let a,u;if(s>r?(a=r,u=s-r):(a=s,u=r-s),u=O(u,0,Math.PI*2),u<.01)return;const c=O(Math.ceil(u*Math.sqrt(l*.25)),1,36),d=u/c;let p=a,x=new h(l).rotate(p).add(o),j=new h,_=new h,z={isColliding:{rect:{},text:{},char:{}}};for(let tt=0;tt<c;tt++){p+=d,j.set(l).rotate(p).add(o),_.set(j).sub(x);const lt=Ot(x,_,i,!0);z=Object.assign(Object.assign(Object.assign({},z),st(lt.isColliding.rect)),{isColliding:{rect:Object.assign(Object.assign({},z.isColliding.rect),lt.isColliding.rect),text:Object.assign(Object.assign({},z.isColliding.text),lt.isColliding.text),char:Object.assign(Object.assign({},z.isColliding.char),lt.isColliding.char)}}),x.set(j)}return qt(),z}function Ml(t,e,l,i,s){if(typeof e=="number"){if(typeof l=="number")return typeof i=="number"?s==null?q(t,e,l,i,i):q(t,e,l,i,s):q(t,e,l,i.x,i.y);throw"invalid params"}else if(typeof l=="number"){if(i==null)return q(t,e.x,e.y,l,l);if(typeof i=="number")return q(t,e.x,e.y,l,i);throw"invalid params"}else return q(t,e.x,e.y,l.x,l.y)}function Ot(t,e,l,i=!1){let s=!0;(g.name==="shape"||g.name==="shapeDark")&&(M!=="transparent"&&_l(t.x,t.y,t.x+e.x,t.y+e.y,l),s=!1);const r=Math.floor(O(l,3,10)),o=Math.abs(e.x),a=Math.abs(e.y),u=O(Math.ceil(o>a?o/r:a/r)+1,3,99);e.div(u-1);let c={isColliding:{rect:{},text:{},char:{}}};for(let d=0;d<u;d++){const p=q(!0,t.x,t.y,l,l,!0,s);c=Object.assign(Object.assign(Object.assign({},c),st(p.isColliding.rect)),{isColliding:{rect:Object.assign(Object.assign({},c.isColliding.rect),p.isColliding.rect),text:Object.assign(Object.assign({},c.isColliding.text),p.isColliding.text),char:Object.assign(Object.assign({},c.isColliding.char),p.isColliding.char)}}),t.add(e)}return i||qt(),c}function q(t,e,l,i,s,r=!1,o=!0){let a=o;(g.name==="shape"||g.name==="shapeDark")&&a&&M!=="transparent"&&(t?me(e-i/2,l-s/2,i,s):me(e,l,i,s),a=!1);let u=t?{x:Math.floor(e-i/2),y:Math.floor(l-s/2)}:{x:Math.floor(e),y:Math.floor(l)};const c={x:Math.trunc(i),y:Math.trunc(s)};if(c.x===0||c.y===0)return{isColliding:{rect:{},text:{},char:{}}};c.x<0&&(u.x+=c.x,c.x*=-1),c.y<0&&(u.y+=c.y,c.y*=-1);const d={pos:u,size:c,collision:{isColliding:{rect:{}}}};d.collision.isColliding.rect[M]=!0;const p=Vt(d);return M!=="transparent"&&((r?Ue:re).push(d),a&&me(u.x,u.y,c.x,c.y)),p}function Gt({pos:t,size:e,text:l,isToggle:i=!1,onClick:s=()=>{}}){return{pos:t,size:e,text:l,isToggle:i,onClick:s,isPressed:!1,isSelected:!1,isHovered:!1,toggleGroup:[]}}function Rt(t){const e=new h(U).sub(t.pos);t.isHovered=e.isInRect(0,0,t.size.x,t.size.y),t.isHovered&&ae&&(t.isPressed=!0),t.isPressed&&!t.isHovered&&(t.isPressed=!1),t.isPressed&&xe&&(t.onClick(),t.isPressed=!1,t.isToggle&&(t.toggleGroup.length===0?t.isSelected=!t.isSelected:(t.toggleGroup.forEach(l=>{l.isSelected=!1}),t.isSelected=!0))),We(t)}function We(t){Be(),$(t.isPressed?"blue":"light_blue"),Pt(t.pos.x,t.pos.y,t.size.x,t.size.y),t.isToggle&&!t.isSelected&&($("white"),Pt(t.pos.x+1,t.pos.y+1,t.size.x-2,t.size.y-2)),$(t.isHovered?"black":"blue"),Yt(t.text,t.pos.x+3,t.pos.y+3),Le()}let D,Ge,V,jt;function gi(t){D={randomSeed:t,inputs:[]}}function pi(t){D.inputs.push(t)}function vl(){return D!=null}function mi(t){Ge=0,t.setSeed(D.randomSeed)}function yi(){Ge>=D.inputs.length||(Pe(D.inputs[Ge]),Ge++)}function wi(){V=[]}function bi(t,e,l){V.push({randomState:l.getState(),gameState:cloneDeep(t),baseState:cloneDeep(e)})}function Ci(t){const e=V.pop(),l=e.randomState;return t.setSeed(l.w,l.x,l.y,l.z,0),jt={pos:new h(U),isPressed:T,isJustPressed:E,isJustReleased:N},Pe(D.inputs.pop()),e}function Si(t){const e=V[V.length-1],l=e.randomState;return t.setSeed(l.w,l.x,l.y,l.z,0),jt={pos:new h(U),isPressed:T,isJustPressed:E,isJustReleased:N},Pe(D.inputs[D.inputs.length-1]),e}function xi(){Pe(jt)}function Mi(){return V.length===0}function vi(){const t=Ge-1;if(!(t>=D.inputs.length))return V[t]}const ki=Math.PI,Pi=Math.abs,Oi=Math.sin,Gi=Math.cos,Ri=Math.atan2,ji=Math.sqrt,zi=Math.pow,Ii=Math.floor,Ei=Math.round,Di=Math.ceil;n.ticks=0,n.difficulty=void 0,n.score=0,n.time=void 0,n.isReplaying=!1;function Fi(t=1,e){return A.get(t,e)}function $i(t=2,e){return A.getInt(t,e)}function Bi(t=1,e){return A.get(t,e)*A.getPlusOrMinus()}function zt(t="GAME OVER"){et=t,ce&&(n.time=void 0),Il()}function Li(t="COMPLETE"){et=t,Il()}function Ui(t,e,l){if(n.isReplaying||(n.score+=t,e==null))return;const i=`${t>=1?"+":""}${Math.floor(t)}`;let s=new h;typeof e=="number"?s.set(e,l):s.set(e),s.x-=i.length*f/2,s.y-=f/2,Ze.push({str:i,pos:s,vy:-2,ticks:30})}function kl(t){$(t)}function Ti(t,e,l,i,s,r){let o=new h;typeof t=="number"?(o.set(t,e),xl(o,l,i,s,r)):(o.set(t),xl(o,e,l,i,s))}function Pl(t,e){return new h(t,e)}function Ol(t,e){!Ie&&!ee&&Q&&(e!=null&&typeof sss.playSoundEffect=="function"?sss.playSoundEffect(t,e):sss.play(Ji[t]))}let It;function Et(){typeof sss.generateMml=="function"?It=sss.playMml(sss.generateMml()):sss.playBgm()}function Dt(){It!=null&&sss.stopMml(It),sss.stopBgm()}function Ai(t){if(Ie){const e=Si(A),l=e.baseState;return n.score=l.score,n.ticks=l.ticks,cloneDeep(e.gameState)}else if(ee){const e=Ci(A),l=e.baseState;return n.score=l.score,n.ticks=l.ticks,e.gameState}else{if(n.isReplaying)return vi().gameState;if(Y==="inGame"){const e={score:n.score,ticks:n.ticks};bi(t,e,A)}}return t}function Ki(){ee||(!n.isReplaying&&Ye?Qi():zt())}const Ji={coin:"c",laser:"l",explosion:"e",powerUp:"p",hit:"h",jump:"j",select:"s",lucky:"u",random:"r",click:"i",synth:"y",tone:"t"},Gl={isPlayingBgm:!1,isCapturing:!1,isCapturingGameCanvasOnly:!1,captureCanvasScale:1,isShowingScore:!0,isShowingTime:!1,isReplayEnabled:!1,isRewindEnabled:!1,isDrawingParticleFront:!1,isDrawingScoreFront:!1,isMinifying:!1,isSoundEnabled:!0,viewSize:{x:100,y:100},seed:0,theme:"simple"},Ni=new Je,A=new Je;let Y,_i={title:Vi,inGame:qi,gameOver:Yi,rewind:en},P,Ft=0,Xe,qe=!0,Ve=0,Z,Re,Rl,ce,je,Ye,ze,$t,Q,K,Ze,Ie=!1,ee=!1,Ee,Qe,et,Bt;function Hi(t){const e=window;e.update=t.update,e.title=t.title,e.description=t.description,e.characters=t.characters,e.options=t.options,jl()}function jl(){let t;typeof options<"u"&&options!=null?t=Object.assign(Object.assign({},Gl),options):t=Gl;const e={name:t.theme,isUsingPixi:!1,isDarkColor:!1};t.theme!=="simple"&&t.theme!=="dark"&&(e.isUsingPixi=!0),(t.theme==="pixel"||t.theme==="shapeDark"||t.theme==="crt"||t.theme==="dark")&&(e.isDarkColor=!0),Z={viewSize:{x:100,y:100},bodyBackground:e.isDarkColor?"#101010":"#e0e0e0",viewBackground:e.isDarkColor?"blue":"white",theme:e,isSoundEnabled:t.isSoundEnabled},Ve=t.seed,Z.isCapturing=t.isCapturing,Z.isCapturingGameCanvasOnly=t.isCapturingGameCanvasOnly,Z.captureCanvasScale=t.captureCanvasScale,Z.viewSize=t.viewSize,Re=t.isPlayingBgm,Rl=t.isShowingScore&&!t.isShowingTime,ce=t.isShowingTime,je=t.isReplayEnabled,Ye=t.isRewindEnabled,ze=t.isDrawingParticleFront,$t=t.isDrawingScoreFront,Q=t.isSoundEnabled,t.isMinifying&&nn(),ai(Wi,Xi,Z)}function Wi(){typeof description<"u"&&description!=null&&description.trim().length>0&&(qe=!1,Ve+=Fl(description)),typeof title<"u"&&title!=null&&title.trim().length>0&&(qe=!1,document.title=title,Ve+=Fl(title)),typeof characters<"u"&&characters!=null&&Zl(characters,"a"),Q&&sss.init(Ve);const t=Z.viewSize;K={x:Math.floor(t.x/6),y:Math.floor(t.y/6)},P=new ci(K),$("black"),qe?(Lt(),n.ticks=0):zl()}function Xi(){n.df=n.difficulty=n.ticks/3600+1,n.tc=n.ticks;const t=n.score,e=n.time;n.sc=n.score;const l=n.sc;n.inp={p:U,ip:T,ijp:E,ijr:N},Xl(),_i[Y](),g.isUsingPixi&&($e(),g.name==="crt"&&Hl()),n.ticks++,n.isReplaying?(n.score=t,n.time=e):n.sc!==l&&(n.score=n.sc)}function Lt(){Y="inGame",n.ticks=-1,kt();const t=Math.floor(n.score);t>Ft&&(Ft=t),ce&&n.time!=null&&(Xe==null||Xe>n.time)&&(Xe=n.time),n.score=0,n.time=0,Ze=[],Re&&Q&&Et();const e=Ni.getInt(999999999);A.setSeed(e),(je||Ye)&&(gi(e),wi(),n.isReplaying=!1)}function qi(){P.clear(),De(),ze||He(),$t||Dl(),(je||Ye)&&pi({pos:Pl(U),isPressed:T,isJustPressed:E,isJustReleased:N}),typeof update=="function"&&update(),ze&&He(),$t&&Dl(),Ut(),P.draw(),ce&&n.time!=null&&n.time++}function zl(){Y="title",n.ticks=-1,kt(),P.clear(),De(),vl()&&(mi(A),n.isReplaying=!0)}function Vi(){if(E){Lt();return}if(De(),je&&vl()&&(yi(),n.inp={p:U,ip:T,ijp:E,ijr:N},ze||He(),update(),ze&&He()),n.ticks===0&&(Ut(),typeof title<"u"&&title!=null&&P.print(title,Math.floor(K.x-title.length)/2,Math.ceil(K.y*.2))),(n.ticks===30||n.ticks==40)&&typeof description<"u"&&description!=null){let t=0;description.split(`
`).forEach(l=>{l.length>t&&(t=l.length)});const e=Math.floor((K.x-t)/2);description.split(`
`).forEach((l,i)=>{P.print(l,e,Math.floor(K.y/2)+i)})}P.draw()}function Il(){Y="gameOver",n.isReplaying||ml(),n.ticks=-1,Zi(),Re&&Q&&Dt()}function Yi(){(n.isReplaying||n.ticks>20)&&E?Lt():n.ticks===(je?120:300)&&!qe&&zl()}function Zi(){n.isReplaying||(P.print(et,Math.floor((K.x-et.length)/2),Math.floor(K.y/2)),P.draw())}function Qi(){Y="rewind",Ie=!0,Ee=Gt({pos:{x:I.x-39,y:11},size:{x:36,y:7},text:"Rewind"}),Qe=Gt({pos:{x:I.x-39,y:I.y-19},size:{x:36,y:7},text:"GiveUp"}),Re&&Q&&Dt(),g.isUsingPixi&&(We(Ee),We(Qe))}function en(){P.clear(),De(),update(),Ut(),xi(),ee?(We(Ee),(Mi()||!T)&&tn()):(Rt(Ee),Rt(Qe),Ee.isPressed&&(ee=!0,Ie=!1)),Qe.isPressed?(Ie=ee=!1,zt()):P.draw(),ce&&n.time!=null&&n.time++}function tn(){ee=!1,Y="inGame",kt(),Re&&Q&&Et()}function Ut(){if(Rl){P.print(`${Math.floor(n.score)}`,0,0);const t=`HI ${Ft}`;P.print(t,K.x-t.length,0)}ce&&(El(n.time,0,0),El(Xe,9,0))}function El(t,e,l){if(t==null)return;let i=Math.floor(t*100/50);i>=10*60*100&&(i=10*60*100-1);const s=Tt(Math.floor(i/6e3),1)+"'"+Tt(Math.floor(i%6e3/100),2)+'"'+Tt(Math.floor(i%100),2);P.print(s,e,l)}function Tt(t,e){return("0000"+t).slice(-e)}function Dl(){Be(),$("black"),Ze=Ze.filter(t=>(ct(t.str,t.pos.x,t.pos.y),t.pos.y+=t.vy,t.vy*=.9,t.ticks--,t.ticks>0)),Le()}function Fl(t){let e=0;for(let l=0;l<t.length;l++){const i=t.charCodeAt(l);e=(e<<5)-e+i,e|=0}return e}function ln(){let t=window.location.search.substring(1);if(t=t.replace(/[^A-Za-z0-9_-]/g,""),t.length===0)return;const e=document.createElement("script");Bt=`${t}/main.js`,e.setAttribute("src",Bt),document.head.appendChild(e)}function nn(){fetch(Bt).then(t=>t.text()).then(t=>{const e=Terser.minify(t+"update();",{toplevel:!0}).code,l="function(){",i=e.indexOf(l),s="options={",r=e.indexOf(s);let o=e;if(i>=0)o=e.substring(e.indexOf(l)+l.length,e.length-4);else if(r>=0){let a=1,u;for(let c=r+s.length;c<e.length;c++){const d=e.charAt(c);if(d==="{")a++;else if(d==="}"&&(a--,a===0)){u=c+2;break}}a===0&&(o=e.substring(u))}$l.forEach(([a,u])=>{o=o.split(a).join(u)}),console.log(o),console.log(`${o.length} letters`)})}n.inp=void 0;function sn(...t){return kl.apply(this,t)}function rn(...t){return Ol.apply(this,t)}function on(...t){return v.apply(this,t)}function an(...t){return ie.apply(this.args)}n.tc=void 0,n.df=void 0,n.sc=void 0;const cn="transparent",un="white",fn="red",dn="green",hn="yellow",gn="blue",pn="purple",mn="cyan",yn="black",wn="coin",bn="laser",Cn="explosion",Sn="powerUp",xn="hit",Mn="jump",vn="select",kn="lucky";let $l=[["===","=="],["!==","!="],["input.pos","inp.p"],["input.isPressed","inp.ip"],["input.isJustPressed","inp.ijp"],["input.isJustReleased","inp.ijr"],["color(","clr("],["play(","ply("],["times(","tms("],["remove(","rmv("],["ticks","tc"],["difficulty","df"],["score","sc"],[".isColliding.rect.transparent",".tr"],[".isColliding.rect.white",".wh"],[".isColliding.rect.red",".rd"],[".isColliding.rect.green",".gr"],[".isColliding.rect.yellow",".yl"],[".isColliding.rect.blue",".bl"],[".isColliding.rect.purple",".pr"],[".isColliding.rect.cyan",".cy"],[".isColliding.rect.black",".lc"],['"transparent"',"tr"],['"white"',"wh"],['"red"',"rd"],['"green"',"gr"],['"yellow"',"yl"],['"blue"',"bl"],['"purple"',"pr"],['"cyan"',"cy"],['"black"',"lc"],['"coin"',"cn"],['"laser"',"ls"],['"explosion"',"ex"],['"powerUp"',"pw"],['"hit"',"ht"],['"jump"',"jm"],['"select"',"sl"],['"lucky"',"uc"]];n.PI=ki,n.abs=Pi,n.addGameScript=ln,n.addScore=Ui,n.addWithCharCode=Ll,n.arc=hi,n.atan2=Ri,n.bar=fi,n.bl=gn,n.box=ui,n.ceil=Di,n.char=Vl,n.clamp=O,n.clr=sn,n.cn=wn,n.color=kl,n.complete=Li,n.cos=Gi,n.cy=mn,n.end=zt,n.ex=Cn,n.floor=Ii,n.frameState=Ai,n.getButton=Gt,n.gr=dn,n.ht=xn,n.init=Hi,n.input=ri,n.jm=Mn,n.keyboard=ti,n.lc=yn,n.line=di,n.ls=bn,n.minifyReplaces=$l,n.onLoad=jl,n.particle=Ti,n.play=Ol,n.playBgm=Et,n.ply=rn,n.pointer=si,n.pow=zi,n.pr=pn,n.pw=Sn,n.range=m,n.rd=fn,n.rect=Pt,n.remove=ie,n.rewind=Ki,n.rmv=an,n.rnd=Fi,n.rndi=$i,n.rnds=Bi,n.round=Ei,n.sin=Oi,n.sl=vn,n.sqrt=ji,n.stopBgm=Dt,n.text=Yt,n.times=v,n.tms=on,n.tr=cn,n.uc=kn,n.updateButton=Rt,n.vec=Pl,n.wh=un,n.wrap=le,n.yl=hn,Object.defineProperty(n,"__esModule",{value:!0})})(window||{})})();const Pn="Uranai",On=`
[tap]: Uranau
`,Gn=[],Bl=["USAKICHI!","AGYA!","BO-...","MUZUI!"],ue="hit",Rn="jump",te=20;let At;function jn(){if(!ticks){At="";return}ticks>=60&&(ticks===60&&play(ue),text("KYO NO",te,25)),ticks>=120&&(ticks===120&&play(ue),text("ANATA NO",te,35)),ticks>=180&&(ticks===180&&play(ue),text("UNSEI WA",te,45)),ticks>=240&&(ticks===240&&play(ue),text("        .",te,45)),ticks>=300&&(ticks===300&&play(ue),text("         .",te,45)),ticks>=360&&(ticks===360&&play(ue),text("          .",te,45)),ticks>=480&&(ticks===480&&(play(Rn),At=Bl[rndi(Bl.length)]),text(`"${At}"`,te,65))}init({update:jn,title:Pn,description:On,characters:Gn,options:{seed:5,isPlayingBgm:!0,theme:"crt"}});
