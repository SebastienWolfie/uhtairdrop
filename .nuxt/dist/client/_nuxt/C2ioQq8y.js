import{i as Ot,n as St,r as nt,a as At,x as j}from"./pA-L5z5-.js";import{v as wt,z as yt,A as R,w as bt,L as ut,aN as F,O as ht,V as Ct,a0 as It,a1 as Lt,a2 as Nt,ad as Rt}from"./BqACKYKw.js";import{U as vt,n as O,c as lt}from"./DpLUDbId.js";import{a2 as dt,a3 as pt}from"./BLqpxtBP.js";import"./bBwRRaMY.js";import"./ClytJu1B.js";import{o as $t}from"./DMVJ8XfO.js";import"./DxvyqeoR.js";import"./rLYoUjrC.js";import"./BH4sU5EC.js";var Dt={exports:{}};(function(t,e){(function(i,o){t.exports=o()})(dt,function(){var i=1e3,o=6e4,u=36e5,r="millisecond",c="second",d="minute",g="hour",h="day",v="week",x="month",I="quarter",D="year",b="date",Y="Invalid Date",W=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,X=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,tt={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(p){var a=["th","st","nd","rd"],n=p%100;return"["+p+(a[(n-20)%10]||a[n]||a[0])+"]"}},et=function(p,a,n){var l=String(p);return!l||l.length>=a?p:""+Array(a+1-l.length).join(n)+p},H={s:et,z:function(p){var a=-p.utcOffset(),n=Math.abs(a),l=Math.floor(n/60),s=n%60;return(a<=0?"+":"-")+et(l,2,"0")+":"+et(s,2,"0")},m:function p(a,n){if(a.date()<n.date())return-p(n,a);var l=12*(n.year()-a.year())+(n.month()-a.month()),s=a.clone().add(l,x),f=n-s<0,m=a.clone().add(l+(f?-1:1),x);return+(-(l+(n-s)/(f?s-m:m-s))||0)},a:function(p){return p<0?Math.ceil(p)||0:Math.floor(p)},p:function(p){return{M:x,y:D,w:v,d:h,D:b,h:g,m:d,s:c,ms:r,Q:I}[p]||String(p||"").toLowerCase().replace(/s$/,"")},u:function(p){return p===void 0}},S="en",A={};A[S]=tt;var q="$isDayjsObject",V=function(p){return p instanceof st||!(!p||!p[q])},ot=function p(a,n,l){var s;if(!a)return S;if(typeof a=="string"){var f=a.toLowerCase();A[f]&&(s=f),n&&(A[f]=n,s=f);var m=a.split("-");if(!s&&m.length>1)return p(m[0])}else{var y=a.name;A[y]=a,s=y}return!l&&s&&(S=s),s||!l&&S},T=function(p,a){if(V(p))return p.clone();var n=typeof a=="object"?a:{};return n.date=p,n.args=arguments,new st(n)},w=H;w.l=ot,w.i=V,w.w=function(p,a){return T(p,{locale:a.$L,utc:a.$u,x:a.$x,$offset:a.$offset})};var st=function(){function p(n){this.$L=ot(n.locale,null,!0),this.parse(n),this.$x=this.$x||n.x||{},this[q]=!0}var a=p.prototype;return a.parse=function(n){this.$d=function(l){var s=l.date,f=l.utc;if(s===null)return new Date(NaN);if(w.u(s))return new Date;if(s instanceof Date)return new Date(s);if(typeof s=="string"&&!/Z$/i.test(s)){var m=s.match(W);if(m){var y=m[2]-1||0,$=(m[7]||"0").substring(0,3);return f?new Date(Date.UTC(m[1],y,m[3]||1,m[4]||0,m[5]||0,m[6]||0,$)):new Date(m[1],y,m[3]||1,m[4]||0,m[5]||0,m[6]||0,$)}}return new Date(s)}(n),this.init()},a.init=function(){var n=this.$d;this.$y=n.getFullYear(),this.$M=n.getMonth(),this.$D=n.getDate(),this.$W=n.getDay(),this.$H=n.getHours(),this.$m=n.getMinutes(),this.$s=n.getSeconds(),this.$ms=n.getMilliseconds()},a.$utils=function(){return w},a.isValid=function(){return this.$d.toString()!==Y},a.isSame=function(n,l){var s=T(n);return this.startOf(l)<=s&&s<=this.endOf(l)},a.isAfter=function(n,l){return T(n)<this.startOf(l)},a.isBefore=function(n,l){return this.endOf(l)<T(n)},a.$g=function(n,l,s){return w.u(n)?this[l]:this.set(s,n)},a.unix=function(){return Math.floor(this.valueOf()/1e3)},a.valueOf=function(){return this.$d.getTime()},a.startOf=function(n,l){var s=this,f=!!w.u(l)||l,m=w.p(n),y=function(J,C){var U=w.w(s.$u?Date.UTC(s.$y,C,J):new Date(s.$y,C,J),s);return f?U:U.endOf(h)},$=function(J,C){return w.w(s.toDate()[J].apply(s.toDate("s"),(f?[0,0,0,0]:[23,59,59,999]).slice(C)),s)},_=this.$W,M=this.$M,N=this.$D,K="set"+(this.$u?"UTC":"");switch(m){case D:return f?y(1,0):y(31,11);case x:return f?y(1,M):y(0,M+1);case v:var z=this.$locale().weekStart||0,it=(_<z?_+7:_)-z;return y(f?N-it:N+(6-it),M);case h:case b:return $(K+"Hours",0);case g:return $(K+"Minutes",1);case d:return $(K+"Seconds",2);case c:return $(K+"Milliseconds",3);default:return this.clone()}},a.endOf=function(n){return this.startOf(n,!1)},a.$set=function(n,l){var s,f=w.p(n),m="set"+(this.$u?"UTC":""),y=(s={},s[h]=m+"Date",s[b]=m+"Date",s[x]=m+"Month",s[D]=m+"FullYear",s[g]=m+"Hours",s[d]=m+"Minutes",s[c]=m+"Seconds",s[r]=m+"Milliseconds",s)[f],$=f===h?this.$D+(l-this.$W):l;if(f===x||f===D){var _=this.clone().set(b,1);_.$d[y]($),_.init(),this.$d=_.set(b,Math.min(this.$D,_.daysInMonth())).$d}else y&&this.$d[y]($);return this.init(),this},a.set=function(n,l){return this.clone().$set(n,l)},a.get=function(n){return this[w.p(n)]()},a.add=function(n,l){var s,f=this;n=Number(n);var m=w.p(l),y=function(M){var N=T(f);return w.w(N.date(N.date()+Math.round(M*n)),f)};if(m===x)return this.set(x,this.$M+n);if(m===D)return this.set(D,this.$y+n);if(m===h)return y(1);if(m===v)return y(7);var $=(s={},s[d]=o,s[g]=u,s[c]=i,s)[m]||1,_=this.$d.getTime()+n*$;return w.w(_,this)},a.subtract=function(n,l){return this.add(-1*n,l)},a.format=function(n){var l=this,s=this.$locale();if(!this.isValid())return s.invalidDate||Y;var f=n||"YYYY-MM-DDTHH:mm:ssZ",m=w.z(this),y=this.$H,$=this.$m,_=this.$M,M=s.weekdays,N=s.months,K=s.meridiem,z=function(C,U,rt,at){return C&&(C[U]||C(l,f))||rt[U].slice(0,at)},it=function(C){return w.s(y%12||12,C,"0")},J=K||function(C,U,rt){var at=C<12?"AM":"PM";return rt?at.toLowerCase():at};return f.replace(X,function(C,U){return U||function(rt){switch(rt){case"YY":return String(l.$y).slice(-2);case"YYYY":return w.s(l.$y,4,"0");case"M":return _+1;case"MM":return w.s(_+1,2,"0");case"MMM":return z(s.monthsShort,_,N,3);case"MMMM":return z(N,_);case"D":return l.$D;case"DD":return w.s(l.$D,2,"0");case"d":return String(l.$W);case"dd":return z(s.weekdaysMin,l.$W,M,2);case"ddd":return z(s.weekdaysShort,l.$W,M,3);case"dddd":return M[l.$W];case"H":return String(y);case"HH":return w.s(y,2,"0");case"h":return it(1);case"hh":return it(2);case"a":return J(y,$,!0);case"A":return J(y,$,!1);case"m":return String($);case"mm":return w.s($,2,"0");case"s":return String(l.$s);case"ss":return w.s(l.$s,2,"0");case"SSS":return w.s(l.$ms,3,"0");case"Z":return m}return null}(C)||m.replace(":","")})},a.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},a.diff=function(n,l,s){var f,m=this,y=w.p(l),$=T(n),_=($.utcOffset()-this.utcOffset())*o,M=this-$,N=function(){return w.m(m,$)};switch(y){case D:f=N()/12;break;case x:f=N();break;case I:f=N()/3;break;case v:f=(M-_)/6048e5;break;case h:f=(M-_)/864e5;break;case g:f=M/u;break;case d:f=M/o;break;case c:f=M/i;break;default:f=M}return s?f:w.a(f)},a.daysInMonth=function(){return this.endOf(x).$D},a.$locale=function(){return A[this.$L]},a.locale=function(n,l){if(!n)return this.$L;var s=this.clone(),f=ot(n,l,!0);return f&&(s.$L=f),s},a.clone=function(){return w.w(this.$d,this)},a.toDate=function(){return new Date(this.valueOf())},a.toJSON=function(){return this.isValid()?this.toISOString():null},a.toISOString=function(){return this.$d.toISOString()},a.toString=function(){return this.$d.toUTCString()},p}(),xt=st.prototype;return T.prototype=xt,[["$ms",r],["$s",c],["$m",d],["$H",g],["$W",h],["$M",x],["$y",D],["$D",b]].forEach(function(p){xt[p[1]]=function(a){return this.$g(a,p[0],p[1])}}),T.extend=function(p,a){return p.$i||(p(a,st,T),p.$i=!0),T},T.locale=ot,T.isDayjs=V,T.unix=function(p){return T(1e3*p)},T.en=A[S],T.Ls=A,T.p={},T})})(Dt);var jt=Dt.exports;const Q=pt(jt);var Tt={exports:{}};(function(t,e){(function(i,o){t.exports=o()})(dt,function(){return{name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(i){var o=["th","st","nd","rd"],u=i%100;return"["+i+(o[(u-20)%10]||o[u]||o[0])+"]"}}})})(Tt);var Ft=Tt.exports;const kt=pt(Ft);var _t={exports:{}};(function(t,e){(function(i,o){t.exports=o()})(dt,function(){return function(i,o,u){i=i||{};var r=o.prototype,c={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function d(h,v,x,I){return r.fromToBase(h,v,x,I)}u.en.relativeTime=c,r.fromToBase=function(h,v,x,I,D){for(var b,Y,W,X=x.$locale().relativeTime||c,tt=i.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],et=tt.length,H=0;H<et;H+=1){var S=tt[H];S.d&&(b=I?u(h).diff(x,S.d,!0):x.diff(h,S.d,!0));var A=(i.rounding||Math.round)(Math.abs(b));if(W=b>0,A<=S.r||!S.r){A<=1&&H>0&&(S=tt[H-1]);var q=X[S.l];D&&(A=D(""+A)),Y=typeof q=="string"?q.replace("%d",A):q(A,v,S.l,W);break}}if(v)return Y;var V=W?X.future:X.past;return typeof V=="function"?V(Y):V.replace("%s",Y)},r.to=function(h,v){return d(h,v,this,!0)},r.from=function(h,v){return d(h,v,this)};var g=function(h){return h.$u?u.utc():u()};r.toNow=function(h){return this.to(g(this),h)},r.fromNow=function(h){return this.from(g(this),h)}}})})(_t);var Yt=_t.exports;const Bt=pt(Yt);var Mt={exports:{}};(function(t,e){(function(i,o){t.exports=o()})(dt,function(){return function(i,o,u){u.updateLocale=function(r,c){var d=u.Ls[r];if(d)return(c?Object.keys(c):[]).forEach(function(g){d[g]=c[g]}),d}}})})(Mt);var Et=Mt.exports;const Ut=pt(Et);Q.extend(Bt);Q.extend(Ut);const Wt={...kt,name:"en-web3-modal",relativeTime:{future:"in %s",past:"%s ago",s:"%d sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}},Ht=["January","February","March","April","May","June","July","August","September","October","November","December"];Q.locale("en-web3-modal",Wt);const ft={getMonthNameByIndex(t){return Ht[t]},getYear(t=new Date().toISOString()){return Q(t).year()},getRelativeDateFromNow(t){return Q(t).locale("en-web3-modal").fromNow(!0)},formatDate(t,e="DD MMM"){return Q(t).format(e)}},Vt=3,zt=["receive","deposit","borrow","claim"],Jt=["withdraw","repay","burn"],Z={getTransactionGroupTitle(t,e){const i=ft.getYear(),o=ft.getMonthNameByIndex(e);return t===i?o:`${o} ${t}`},getTransactionImages(t){const[e,i]=t,o=!!e&&(t==null?void 0:t.every(c=>!!c.nft_info)),u=(t==null?void 0:t.length)>1;return(t==null?void 0:t.length)===2&&!o?[this.getTransactionImage(i),this.getTransactionImage(e)]:u?t.map(c=>this.getTransactionImage(c)):[this.getTransactionImage(e)]},getTransactionImage(t){return{type:Z.getTransactionTransferTokenType(t),url:Z.getTransactionImageURL(t)}},getTransactionImageURL(t){var u,r,c,d,g;let e;const i=!!(t!=null&&t.nft_info),o=!!(t!=null&&t.fungible_info);return t&&i?e=(c=(r=(u=t==null?void 0:t.nft_info)==null?void 0:u.content)==null?void 0:r.preview)==null?void 0:c.url:t&&o&&(e=(g=(d=t==null?void 0:t.fungible_info)==null?void 0:d.icon)==null?void 0:g.url),e},getTransactionTransferTokenType(t){if(t!=null&&t.fungible_info)return"FUNGIBLE";if(t!=null&&t.nft_info)return"NFT"},getTransactionDescriptions(t){var x,I,D;const e=(x=t==null?void 0:t.metadata)==null?void 0:x.operationType,i=t==null?void 0:t.transfers,o=((I=t==null?void 0:t.transfers)==null?void 0:I.length)>0,u=((D=t==null?void 0:t.transfers)==null?void 0:D.length)>1,r=o&&(i==null?void 0:i.every(b=>!!(b!=null&&b.fungible_info))),[c,d]=i;let g=this.getTransferDescription(c),h=this.getTransferDescription(d);if(!o)return(e==="send"||e==="receive")&&r?(g=vt.getTruncateString({string:t==null?void 0:t.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),h=vt.getTruncateString({string:t==null?void 0:t.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"}),[g,h]):[t.metadata.status];if(u)return i.map(b=>this.getTransferDescription(b)).reverse();let v="";return zt.includes(e)?v="+":Jt.includes(e)&&(v="-"),g=v.concat(g),[g]},getTransferDescription(t){var i;let e="";return t&&(t!=null&&t.nft_info?e=((i=t==null?void 0:t.nft_info)==null?void 0:i.name)||"-":t!=null&&t.fungible_info&&(e=this.getFungibleTransferDescription(t)||"-")),e},getFungibleTransferDescription(t){var o;return t?[this.getQuantityFixedValue(t==null?void 0:t.quantity.numeric),(o=t==null?void 0:t.fungible_info)==null?void 0:o.symbol].join(" ").trim():null},getQuantityFixedValue(t){return t?parseFloat(t).toFixed(Vt):null}};var mt;(function(t){t.approve="approved",t.bought="bought",t.borrow="borrowed",t.burn="burnt",t.cancel="canceled",t.claim="claimed",t.deploy="deployed",t.deposit="deposited",t.execute="executed",t.mint="minted",t.receive="received",t.repay="repaid",t.send="sent",t.sell="sold",t.stake="staked",t.trade="swapped",t.unstake="unstaked",t.withdraw="withdrawn"})(mt||(mt={}));const Gt=wt`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`;var G=function(t,e,i,o){var u=arguments.length,r=u<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,o);else for(var d=t.length-1;d>=0;d--)(c=t[d])&&(r=(u<3?c(r):u>3?c(e,i,r):c(e,i))||r);return u>3&&r&&Object.defineProperty(e,i,r),r};let B=class extends yt{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[e,i]=this.images,o=(e==null?void 0:e.type)==="NFT",u=i!=null&&i.url?i.type==="NFT":o,r=o?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)",c=u?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)";return this.style.cssText=`
    --local-left-border-radius: ${r};
    --local-right-border-radius: ${c};
    `,R`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[e,i]=this.images,o=e==null?void 0:e.type;return this.images.length===2&&(e!=null&&e.url||i!=null&&i.url)?R`<div class="swap-images-container">
        ${e!=null&&e.url?R`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
        ${i!=null&&i.url?R`<wui-image src=${i.url} alt="Transaction image"></wui-image>`:null}
      </div>`:e!=null&&e.url?R`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:o==="NFT"?R`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:R`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let e="accent-100",i;return i=this.getIcon(),this.status&&(e=this.getStatusColor()),i?R`
      <wui-icon-box
        size="xxs"
        iconColor=${e}
        backgroundColor=${e}
        background="opaque"
        icon=${i}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():this.type==="trade"?"swapHorizontalBold":this.type==="approve"?"checkmark":this.type==="cancel"?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};B.styles=[Gt];G([O()],B.prototype,"type",void 0);G([O()],B.prototype,"status",void 0);G([O()],B.prototype,"direction",void 0);G([O({type:Boolean})],B.prototype,"onlyDirectionIcon",void 0);G([O({type:Array})],B.prototype,"images",void 0);G([O({type:Object})],B.prototype,"secondImage",void 0);B=G([lt("wui-transaction-visual")],B);const Pt=wt`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-xs) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var k=function(t,e,i,o){var u=arguments.length,r=u<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,o);else for(var d=t.length-1;d>=0;d--)(c=t[d])&&(r=(u<3?c(r):u>3?c(e,i,r):c(e,i))||r);return u>3&&r&&Object.defineProperty(e,i,r),r};let L=class extends yt{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[],this.price=[],this.amount=[],this.symbol=[]}render(){return R`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${$t(this.direction)}
          type=${this.type}
          onlyDirectionIcon=${$t(this.onlyDirectionIcon)}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${mt[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){var i;const e=(i=this.descriptions)==null?void 0:i[0];return e?R`
          <wui-text variant="small-500" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}templateSecondDescription(){var i;const e=(i=this.descriptions)==null?void 0:i[1];return e?R`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}};L.styles=[bt,Pt];k([O()],L.prototype,"type",void 0);k([O({type:Array})],L.prototype,"descriptions",void 0);k([O()],L.prototype,"date",void 0);k([O({type:Boolean})],L.prototype,"onlyDirectionIcon",void 0);k([O()],L.prototype,"status",void 0);k([O()],L.prototype,"direction",void 0);k([O({type:Array})],L.prototype,"images",void 0);k([O({type:Array})],L.prototype,"price",void 0);k([O({type:Array})],L.prototype,"amount",void 0);k([O({type:Array})],L.prototype,"symbol",void 0);L=k([lt("wui-transaction-list-item")],L);const qt=wt`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;var Kt=function(t,e,i,o){var u=arguments.length,r=u<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,o);else for(var d=t.length-1;d>=0;d--)(c=t[d])&&(r=(u<3?c(r):u>3?c(e,i,r):c(e,i))||r);return u>3&&r&&Object.defineProperty(e,i,r),r};let gt=class extends yt{render(){return R`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};gt.styles=[bt,qt];gt=Kt([lt("wui-transaction-list-item-loader")],gt);const Zt=Ot`
  :host {
    min-height: 100%;
  }

  .group-container[last-group='true'] {
    padding-bottom: var(--wui-spacing-m);
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }

  .emptyContainer {
    height: 100%;
  }
`;var P=function(t,e,i,o){var u=arguments.length,r=u<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,o);else for(var d=t.length-1;d>=0;d--)(c=t[d])&&(r=(u<3?c(r):u>3?c(e,i,r):c(e,i))||r);return u>3&&r&&Object.defineProperty(e,i,r),r};const ct="last-transaction",Qt=7;let E=class extends At{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.page="activity",this.caipAddress=ut.state.activeCaipAddress,this.transactionsByYear=F.state.transactionsByYear,this.loading=F.state.loading,this.empty=F.state.empty,this.next=F.state.next,F.clearCursor(),this.unsubscribe.push(ut.subscribeKey("activeCaipAddress",e=>{e&&this.caipAddress!==e&&(F.resetTransactions(),F.fetchTransactions(e)),this.caipAddress=e}),ut.subscribeKey("activeCaipNetwork",()=>{this.updateTransactionView()}),F.subscribe(e=>{this.transactionsByYear=e.transactionsByYear,this.loading=e.loading,this.empty=e.empty,this.next=e.next}))}firstUpdated(){this.updateTransactionView(),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return j` ${this.empty?null:this.templateTransactionsByYear()}
    ${this.loading?this.templateLoading():null}
    ${!this.loading&&this.empty?this.templateEmpty():null}`}updateTransactionView(){F.resetTransactions(),this.caipAddress&&F.fetchTransactions(ht.getPlainAddress(this.caipAddress))}templateTransactionsByYear(){return Object.keys(this.transactionsByYear).sort().reverse().map(i=>{const o=parseInt(i,10),u=new Array(12).fill(null).map((r,c)=>{var h;const d=Z.getTransactionGroupTitle(o,c),g=(h=this.transactionsByYear[o])==null?void 0:h[c];return{groupTitle:d,transactions:g}}).filter(({transactions:r})=>r).reverse();return u.map(({groupTitle:r,transactions:c},d)=>{const g=d===u.length-1;return c?j`
          <wui-flex
            flexDirection="column"
            class="group-container"
            last-group="${g?"true":"false"}"
            data-testid="month-indexes"
          >
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200" data-testid="group-title"
                >${r}</wui-text
              >
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(c,g)}
            </wui-flex>
          </wui-flex>
        `:null})})}templateRenderTransaction(e,i){const{date:o,descriptions:u,direction:r,isAllNFT:c,images:d,status:g,transfers:h,type:v}=this.getTransactionListItemProps(e),x=(h==null?void 0:h.length)>1;return(h==null?void 0:h.length)===2&&!c?j`
        <wui-transaction-list-item
          date=${o}
          .direction=${r}
          id=${i&&this.next?ct:""}
          status=${g}
          type=${v}
          .images=${d}
          .descriptions=${u}
        ></wui-transaction-list-item>
      `:x?h.map((D,b)=>{const Y=Z.getTransferDescription(D),W=i&&b===h.length-1;return j` <wui-transaction-list-item
          date=${o}
          direction=${D.direction}
          id=${W&&this.next?ct:""}
          status=${g}
          type=${v}
          .onlyDirectionIcon=${!0}
          .images=${[d[b]]}
          .descriptions=${[Y]}
        ></wui-transaction-list-item>`}):j`
      <wui-transaction-list-item
        date=${o}
        .direction=${r}
        id=${i&&this.next?ct:""}
        status=${g}
        type=${v}
        .images=${d}
        .descriptions=${u}
      ></wui-transaction-list-item>
    `}templateTransactions(e,i){return e.map((o,u)=>{const r=i&&u===e.length-1;return j`${this.templateRenderTransaction(o,r)}`})}emptyStateActivity(){return j`<wui-flex
      class="emptyContainer"
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["3xl","xl","3xl","xl"]}
      gap="xl"
      data-testid="empty-activity-state"
    >
      <wui-icon-box
        backgroundColor="gray-glass-005"
        background="gray"
        iconColor="fg-200"
        icon="wallet"
        size="lg"
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="xs">
        <wui-text align="center" variant="paragraph-500" color="fg-100"
          >No Transactions yet</wui-text
        >
        <wui-text align="center" variant="small-500" color="fg-200"
          >Start trading on dApps <br />
          to grow your wallet!</wui-text
        >
      </wui-flex>
    </wui-flex>`}emptyStateAccount(){return j`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
      data-testid="empty-account-state"
    >
      <wui-icon-box
        icon="swapHorizontal"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100">No activity yet</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Your next transactions will appear here</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`}templateEmpty(){return this.page==="account"?j`${this.emptyStateAccount()}`:j`${this.emptyStateActivity()}`}templateLoading(){return this.page==="activity"?Array(Qt).fill(j` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e):null}onReceiveClick(){Ct.push("WalletReceive")}createPaginationObserver(){const{projectId:e}=Rt.state;this.paginationObserver=new IntersectionObserver(([i])=>{i!=null&&i.isIntersecting&&!this.loading&&(F.fetchTransactions(ht.getPlainAddress(this.caipAddress)),It.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:ht.getPlainAddress(this.caipAddress),projectId:e,cursor:this.next,isSmartAccount:Lt(ut.state.activeChain)===Nt.ACCOUNT_TYPES.SMART_ACCOUNT}}))},{}),this.setPaginationObserver()}setPaginationObserver(){var i,o,u;(i=this.paginationObserver)==null||i.disconnect();const e=(o=this.shadowRoot)==null?void 0:o.querySelector(`#${ct}`);e&&((u=this.paginationObserver)==null||u.observe(e))}getTransactionListItemProps(e){var g,h,v,x,I;const i=ft.formatDate((g=e==null?void 0:e.metadata)==null?void 0:g.minedAt),o=Z.getTransactionDescriptions(e),u=e==null?void 0:e.transfers,r=(h=e==null?void 0:e.transfers)==null?void 0:h[0],c=!!r&&((v=e==null?void 0:e.transfers)==null?void 0:v.every(D=>!!D.nft_info)),d=Z.getTransactionImages(u);return{date:i,direction:r==null?void 0:r.direction,descriptions:o,isAllNFT:c,images:d,status:(x=e.metadata)==null?void 0:x.status,transfers:u,type:(I=e.metadata)==null?void 0:I.operationType}}};E.styles=Zt;P([St()],E.prototype,"page",void 0);P([nt()],E.prototype,"caipAddress",void 0);P([nt()],E.prototype,"transactionsByYear",void 0);P([nt()],E.prototype,"loading",void 0);P([nt()],E.prototype,"empty",void 0);P([nt()],E.prototype,"next",void 0);E=P([lt("w3m-activity-list")],E);
