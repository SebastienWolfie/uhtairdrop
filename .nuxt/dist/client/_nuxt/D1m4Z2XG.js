import{n as C,r as c,a as y,x as l,i as T,T as gn}from"./pA-L5z5-.js";import{o as h}from"./DRHY8nG-.js";import{v as R,w as O,x as D,z as P,A as w,ad as v,L as d,aI as Re,aa as S,M as $,O as b,a9 as U,a0 as W,ae as de,Q as m,T as I,V as f,I as q,U as N,a1 as Ie,a2 as ue,$ as x,aM as xn,b4 as Oe,b5 as Se,b6 as te,ac as vn,F as yn,aK as _,b7 as Pe,al as Cn,Z as $n,ak as Sn,ab as ni,b8 as In,b9 as An,aJ as Ni}from"./BqACKYKw.js";import{n as u,c as p,U as H}from"./DpLUDbId.js";import{o as Me}from"./DMVJ8XfO.js";import"./rLYoUjrC.js";import"./PbVS3gXm.js";import"./CpB0YzUV.js";import"./bBwRRaMY.js";import{W as kr}from"./PRu-nwta.js";import"./CrIyovLo.js";import"./Dv57VTr3.js";import"./DxvyqeoR.js";import"./DE1B9N49.js";import{r as Ji}from"./JeMB2mxP.js";import"./aOGguEi-.js";import{n as kn}from"./GByAiexX.js";import{H as Wn,N as En}from"./CaRtpF6T.js";import"./C2ioQq8y.js";import"./ClytJu1B.js";import{M as yt}from"./Cm1mjpfd.js";import"./CCiuKp_a.js";import{a as _n,i as Tn,t as Nn,e as Rn,n as On}from"./cdYEHJZT.js";import"./BQgDJuww.js";import{e as en,n as tn}from"./B3FXzDs5.js";import"./Br4_VEbT.js";import"./BH4sU5EC.js";import"./DmWAW4_1.js";import{O as Ct}from"./jG-zQou1.js";import{e as Pn}from"./kmJXdH0Q.js";import"./DTcjRPMt.js";import"./B28QA65d.js";import"./D_nYlboR.js";import"./B8bSwCll.js";import"./BLqpxtBP.js";import"./rx5cLQAs.js";import"./Dmg8YACJ.js";const Dn=R`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-color-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    background: var(--wui-color-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var he=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let ie=class extends P{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.loading=!1,this.address="",this.profileName="",this.charsStart=4,this.charsEnd=6}render(){return w`
      <button
        ?disabled=${this.disabled}
        class=${Me(this.balance?void 0:"local-no-balance")}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${this.address?H.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"}):null}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.isUnsupportedChain)return w` <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
          data-testid="wui-account-button-unsupported-chain"
        ></wui-icon-box>
        <wui-text variant="paragraph-600" color="inherit"> Switch Network</wui-text>`;if(this.balance){const e=this.networkSrc?w`<wui-image src=${this.networkSrc}></wui-image>`:w`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `,t=this.loading?w`<wui-loading-spinner size="md" color="fg-200"></wui-loading-spinner>`:w`<wui-text variant="paragraph-600" color="inherit"> ${this.balance}</wui-text>`;return w`${e} ${t}`}return null}};ie.styles=[O,D,Dn];he([u()],ie.prototype,"networkSrc",void 0);he([u()],ie.prototype,"avatarSrc",void 0);he([u()],ie.prototype,"balance",void 0);he([u({type:Boolean})],ie.prototype,"isUnsupportedChain",void 0);he([u({type:Boolean})],ie.prototype,"disabled",void 0);he([u({type:Boolean})],ie.prototype,"loading",void 0);he([u()],ie.prototype,"address",void 0);he([u()],ie.prototype,"profileName",void 0);he([u()],ie.prototype,"charsStart",void 0);he([u()],ie.prototype,"charsEnd",void 0);ie=he([p("wui-account-button")],ie);var K=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};class G extends y{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.namespace=void 0,this.isSupported=v.state.allowUnsupportedChain?!0:d.state.activeChain?d.checkIfSupportedNetwork(d.state.activeChain):!0}connectedCallback(){super.connectedCallback(),this.setAccountData(d.getAccountData(this.namespace)),this.setNetworkData(d.getNetworkData(this.namespace))}firstUpdated(){const e=this.namespace;e?this.unsubscribe.push(d.subscribeChainProp("accountState",t=>{this.setAccountData(t)},e),d.subscribeChainProp("networkState",t=>{var n;this.setNetworkData(t),this.isSupported=d.checkIfSupportedNetwork(e,(n=t==null?void 0:t.caipNetwork)==null?void 0:n.caipNetworkId)},e)):this.unsubscribe.push(Re.subscribeNetworkImages(()=>{this.networkImage=S.getNetworkImage(this.network)}),d.subscribeKey("activeCaipAddress",t=>{this.caipAddress=t}),$.subscribeKey("balance",t=>this.balanceVal=t),$.subscribeKey("balanceSymbol",t=>this.balanceSymbol=t),$.subscribeKey("profileName",t=>this.profileName=t),$.subscribeKey("profileImage",t=>this.profileImage=t),d.subscribeKey("activeCaipNetwork",t=>{this.network=t,this.networkImage=S.getNetworkImage(t),this.isSupported=t!=null&&t.chainNamespace?d.checkIfSupportedNetwork(t==null?void 0:t.chainNamespace):!0,this.fetchNetworkImage(t)}))}updated(){this.fetchNetworkImage(this.network)}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!d.state.activeChain)return null;const e=this.balance==="show",t=typeof this.balanceVal!="string";return l`
      <wui-account-button
        .disabled=${!!this.disabled}
        .isUnsupportedChain=${v.state.allowUnsupportedChain?!1:!this.isSupported}
        address=${h(b.getPlainAddress(this.caipAddress))}
        profileName=${h(this.profileName)}
        networkSrc=${h(this.networkImage)}
        avatarSrc=${h(this.profileImage)}
        balance=${e?b.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
        data-testid=${`account-button${this.namespace?`-${this.namespace}`:""}`}
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
        ?loading=${t}
      >
      </wui-account-button>
    `}onClick(){this.isSupported||v.state.allowUnsupportedChain?U.open({namespace:this.namespace}):U.open({view:"UnsupportedChain"})}async fetchNetworkImage(e){var t,n;(t=e==null?void 0:e.assets)!=null&&t.imageId&&(this.networkImage=await S.fetchNetworkImage((n=e==null?void 0:e.assets)==null?void 0:n.imageId))}setAccountData(e){e&&(this.caipAddress=e.caipAddress,this.balanceVal=e.balance,this.balanceSymbol=e.balanceSymbol,this.profileName=e.profileName,this.profileImage=e.profileImage)}setNetworkData(e){e&&(this.network=e.caipNetwork,this.networkImage=S.getNetworkImage(e.caipNetwork))}}K([C({type:Boolean})],G.prototype,"disabled",void 0);K([C()],G.prototype,"balance",void 0);K([C()],G.prototype,"charsStart",void 0);K([C()],G.prototype,"charsEnd",void 0);K([C()],G.prototype,"namespace",void 0);K([c()],G.prototype,"caipAddress",void 0);K([c()],G.prototype,"balanceVal",void 0);K([c()],G.prototype,"balanceSymbol",void 0);K([c()],G.prototype,"profileName",void 0);K([c()],G.prototype,"profileImage",void 0);K([c()],G.prototype,"network",void 0);K([c()],G.prototype,"networkImage",void 0);K([c()],G.prototype,"isSupported",void 0);let Ri=class extends G{};Ri=K([p("w3m-account-button")],Ri);let Oi=class extends G{};Oi=K([p("appkit-account-button")],Oi);const Ln=T`
  :host {
    display: block;
    width: max-content;
  }
`;var we=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};class ae extends y{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.namespace=void 0}firstUpdated(){var e,t;this.caipAddress=this.namespace?(t=(e=d.state.chains.get(this.namespace))==null?void 0:e.accountState)==null?void 0:t.caipAddress:d.state.activeCaipAddress,this.namespace?this.unsubscribe.push(d.subscribeChainProp("accountState",n=>{this.caipAddress=n==null?void 0:n.caipAddress},this.namespace)):this.unsubscribe.push(d.subscribeKey("activeCaipAddress",n=>this.caipAddress=n))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.caipAddress?l`
          <appkit-account-button
            .disabled=${!!this.disabled}
            balance=${h(this.balance)}
            .charsStart=${h(this.charsStart)}
            .charsEnd=${h(this.charsEnd)}
            namespace=${h(this.namespace)}
          >
          </appkit-account-button>
        `:l`
          <appkit-connect-button
            size=${h(this.size)}
            label=${h(this.label)}
            loadingLabel=${h(this.loadingLabel)}
            namespace=${h(this.namespace)}
          ></appkit-connect-button>
        `}}ae.styles=Ln;we([C({type:Boolean})],ae.prototype,"disabled",void 0);we([C()],ae.prototype,"balance",void 0);we([C()],ae.prototype,"size",void 0);we([C()],ae.prototype,"label",void 0);we([C()],ae.prototype,"loadingLabel",void 0);we([C()],ae.prototype,"charsStart",void 0);we([C()],ae.prototype,"charsEnd",void 0);we([C()],ae.prototype,"namespace",void 0);we([c()],ae.prototype,"caipAddress",void 0);let Pi=class extends ae{};Pi=we([p("w3m-button")],Pi);let Di=class extends ae{};Di=we([p("appkit-button")],Di);const jn=R`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-color-gray-glass-010);
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var bi=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let st=class extends P{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){const e=this.size==="md"?"paragraph-600":"small-600";return w`
      <button data-size=${this.size} ?disabled=${this.loading}>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?w`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};st.styles=[O,D,jn];bi([u()],st.prototype,"size",void 0);bi([u({type:Boolean})],st.prototype,"loading",void 0);st=bi([p("wui-connect-button")],st);var Ee=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};class _e extends y{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=U.state.open,this.loading=this.namespace?U.state.loadingNamespaceMap.get(this.namespace):U.state.loading,this.unsubscribe.push(U.subscribe(e=>{this.open=e.open,this.loading=this.namespace?e.loadingNamespaceMap.get(this.namespace):e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`
      <wui-connect-button
        size=${h(this.size)}
        .loading=${this.loading}
        @click=${this.onClick.bind(this)}
        data-testid=${`connect-button${this.namespace?`-${this.namespace}`:""}`}
      >
        ${this.loading?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?U.close():this.loading||U.open({view:"Connect",namespace:this.namespace})}}Ee([C()],_e.prototype,"size",void 0);Ee([C()],_e.prototype,"label",void 0);Ee([C()],_e.prototype,"loadingLabel",void 0);Ee([C()],_e.prototype,"namespace",void 0);Ee([c()],_e.prototype,"open",void 0);Ee([c()],_e.prototype,"loading",void 0);let Li=class extends _e{};Li=Ee([p("w3m-connect-button")],Li);let ji=class extends _e{};ji=Ee([p("appkit-connect-button")],ji);const Bn=R`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }
`;var Ut=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Ve=class extends P{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1}render(){return w`
      <button data-testid="wui-network-button" ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?w`
        <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
      `:this.imageSrc?w`<wui-image src=${this.imageSrc}></wui-image>`:w`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};Ve.styles=[O,D,Bn];Ut([u()],Ve.prototype,"imageSrc",void 0);Ut([u({type:Boolean})],Ve.prototype,"isUnsupportedChain",void 0);Ut([u({type:Boolean})],Ve.prototype,"disabled",void 0);Ve=Ut([p("wui-network-button")],Ve);const Un=T`
  :host {
    display: block;
    width: max-content;
  }
`;var $e=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};class xe extends y{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=d.state.activeCaipNetwork,this.networkImage=S.getNetworkImage(this.network),this.caipAddress=d.state.activeCaipAddress,this.loading=U.state.loading,this.isSupported=v.state.allowUnsupportedChain?!0:d.state.activeChain?d.checkIfSupportedNetwork(d.state.activeChain):!0,this.unsubscribe.push(Re.subscribeNetworkImages(()=>{this.networkImage=S.getNetworkImage(this.network)}),d.subscribeKey("activeCaipAddress",e=>{this.caipAddress=e}),d.subscribeKey("activeCaipNetwork",e=>{var t;this.network=e,this.networkImage=S.getNetworkImage(e),this.isSupported=e!=null&&e.chainNamespace?d.checkIfSupportedNetwork(e.chainNamespace):!0,S.fetchNetworkImage((t=e==null?void 0:e.assets)==null?void 0:t.imageId)}),U.subscribeKey("loading",e=>this.loading=e))}firstUpdated(){var e,t;S.fetchNetworkImage((t=(e=this.network)==null?void 0:e.assets)==null?void 0:t.imageId)}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.network?d.checkIfSupportedNetwork(this.network.chainNamespace):!0;return l`
      <wui-network-button
        .disabled=${!!(this.disabled||this.loading)}
        .isUnsupportedChain=${v.state.allowUnsupportedChain?!1:!e}
        imageSrc=${h(this.networkImage)}
        @click=${this.onClick.bind(this)}
        data-testid="w3m-network-button"
      >
        ${this.getLabel()}
        <slot></slot>
      </wui-network-button>
    `}getLabel(){return this.network?!this.isSupported&&!v.state.allowUnsupportedChain?"Switch Network":this.network.name:this.label?this.label:this.caipAddress?"Unknown Network":"Select Network"}onClick(){this.loading||(W.sendEvent({type:"track",event:"CLICK_NETWORKS"}),U.open({view:"Networks"}))}}xe.styles=Un;$e([C({type:Boolean})],xe.prototype,"disabled",void 0);$e([C({type:String})],xe.prototype,"label",void 0);$e([c()],xe.prototype,"network",void 0);$e([c()],xe.prototype,"networkImage",void 0);$e([c()],xe.prototype,"caipAddress",void 0);$e([c()],xe.prototype,"loading",void 0);$e([c()],xe.prototype,"isSupported",void 0);let Bi=class extends xe{};Bi=$e([p("w3m-network-button")],Bi);let Ui=class extends xe{};Ui=$e([p("appkit-network-button")],Ui);const zn=R`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-accent-glass-010);
  }

  button:hover {
    background-color: var(--wui-color-accent-glass-015) !important;
  }

  button:active {
    background-color: var(--wui-color-accent-glass-020) !important;
  }
`;var zt=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Ke=class extends P{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return w`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};Ke.styles=[O,D,zn];zt([u()],Ke.prototype,"label",void 0);zt([u()],Ke.prototype,"description",void 0);zt([u()],Ke.prototype,"icon",void 0);Ke=zt([p("wui-notice-card")],Ke);var nn=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let oi=class extends y{constructor(){super(),this.unsubscribe=[],this.socialProvider=de.getConnectedSocialProvider(),this.socialUsername=de.getConnectedSocialUsername(),this.namespace=d.state.activeChain,this.unsubscribe.push(d.subscribeKey("activeChain",e=>{this.namespace=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=m.getConnectorId(this.namespace),t=m.getAuthConnector();if(!t||e!==I.CONNECTOR_ID.AUTH)return this.style.cssText="display: none",null;const n=t.provider.getEmail()??"";return!n&&!this.socialUsername?(this.style.cssText="display: none",null):l`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon=${this.socialProvider??"mail"}
        iconSize=${this.socialProvider?"xxl":"sm"}
        data-testid="w3m-account-email-update"
        ?chevron=${!this.socialProvider}
        @click=${()=>{this.onGoToUpdateEmail(n,this.socialProvider)}}
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.getAuthName(n)}</wui-text>
      </wui-list-item>
    `}onGoToUpdateEmail(e,t){t||f.push("UpdateEmailWallet",{email:e,redirectView:"Account"})}getAuthName(e){return this.socialUsername?this.socialProvider==="discord"&&this.socialUsername.endsWith("0")?this.socialUsername.slice(0,-1):this.socialUsername:e.length>30?`${e.slice(0,-3)}...`:e}};nn([c()],oi.prototype,"namespace",void 0);oi=nn([p("w3m-account-auth-button")],oi);var ve=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let pe=class extends y{constructor(){super(),this.usubscribe=[],this.networkImages=Re.state.networkImages,this.address=$.state.address,this.profileImage=$.state.profileImage,this.profileName=$.state.profileName,this.network=d.state.activeCaipNetwork,this.disconnecting=!1,this.loading=!1,this.switched=!1,this.text="",this.remoteFeatures=v.state.remoteFeatures,this.usubscribe.push($.subscribe(e=>{e.address&&(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName)}),d.subscribeKey("activeCaipNetwork",e=>{e!=null&&e.id&&(this.network=e)}),v.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){var t,n,o;if(!this.address)throw new Error("w3m-account-settings-view: No account provided");const e=this.networkImages[((n=(t=this.network)==null?void 0:t.assets)==null?void 0:n.imageId)??""];return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="l"
        .padding=${["0","xl","m","xl"]}
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${h(this.profileImage)}
          size="2lg"
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="title-6-600" color="fg-100" data-testid="account-settings-address">
              ${H.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" gap="m">
        <wui-flex flexDirection="column" gap="xs" .padding=${["0","l","m","l"]}>
          ${this.authCardTemplate()}
          <w3m-account-auth-button></w3m-account-auth-button>
          <wui-list-item
            .variant=${e?"image":"icon"}
            iconVariant="overlay"
            icon="networkPlaceholder"
            imageSrc=${h(e)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="paragraph-500" color="fg-100">
              ${((o=this.network)==null?void 0:o.name)??"Unknown"}
            </wui-text>
          </wui-list-item>
          ${this.togglePreferredAccountBtnTemplate()} ${this.chooseNameButtonTemplate()}
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}chooseNameButtonTemplate(){var i;const e=(i=this.network)==null?void 0:i.chainNamespace,t=m.getConnectorId(e),n=m.getAuthConnector();return!d.checkIfNamesSupported()||!n||t!==I.CONNECTOR_ID.AUTH||this.profileName?null:l`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="id"
        iconSize="sm"
        ?chevron=${!0}
        @click=${this.onChooseName.bind(this)}
        data-testid="account-choose-name-button"
      >
        <wui-text variant="paragraph-500" color="fg-100">Choose account name </wui-text>
      </wui-list-item>
    `}authCardTemplate(){var o;const e=m.getConnectorId((o=this.network)==null?void 0:o.chainNamespace),t=m.getAuthConnector(),{origin:n}=location;return!t||e!==I.CONNECTOR_ID.AUTH||n.includes(q.SECURE_SITE)?null:l`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}isAllowedNetworkSwitch(){const e=d.getAllRequestedCaipNetworks(),t=e?e.length>1:!1,n=e==null?void 0:e.find(({id:o})=>{var i;return o===((i=this.network)==null?void 0:i.id)});return t||!n}onCopyAddress(){try{this.address&&(b.copyToClopboard(this.address),N.showSuccess("Address copied"))}catch{N.showError("Failed to copy")}}togglePreferredAccountBtnTemplate(){var i;const e=(i=this.network)==null?void 0:i.chainNamespace,t=d.checkIfSmartAccountEnabled(),n=m.getConnectorId(e);return!m.getAuthConnector()||n!==I.CONNECTOR_ID.AUTH||!t?null:(this.switched||(this.text=Ie(e)===ue.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your Smart Account"),l`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="swapHorizontalBold"
        iconSize="sm"
        ?chevron=${!0}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>
      </wui-list-item>
    `)}onChooseName(){f.push("ChooseAccountName")}async changePreferredAccountType(){var i;const e=(i=this.network)==null?void 0:i.chainNamespace,t=d.checkIfSmartAccountEnabled(),n=Ie(e)===ue.ACCOUNT_TYPES.SMART_ACCOUNT||!t?ue.ACCOUNT_TYPES.EOA:ue.ACCOUNT_TYPES.SMART_ACCOUNT;m.getAuthConnector()&&(this.loading=!0,await x.setPreferredAccountType(n,e),this.text=n===ue.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your Smart Account",this.switched=!0,xn.resetSend(),this.loading=!1,this.requestUpdate())}onNetworks(){this.isAllowedNetworkSwitch()&&f.push("Networks")}async onDisconnect(){var e,t;try{this.disconnecting=!0;const n=(e=this.network)==null?void 0:e.chainNamespace,i=x.getConnections(n).length>0,s=n&&m.state.activeConnectorIds[n],r=(t=this.remoteFeatures)==null?void 0:t.multiWallet;await x.disconnect(r?{id:s,namespace:n}:{}),i&&r&&(f.push("ProfileWallets"),N.showSuccess("Wallet deleted"))}catch{W.sendEvent({type:"track",event:"DISCONNECT_ERROR",properties:{message:"Failed to disconnect"}}),N.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onGoToUpgradeView(){W.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),f.push("UpgradeEmailWallet")}};ve([c()],pe.prototype,"address",void 0);ve([c()],pe.prototype,"profileImage",void 0);ve([c()],pe.prototype,"profileName",void 0);ve([c()],pe.prototype,"network",void 0);ve([c()],pe.prototype,"disconnecting",void 0);ve([c()],pe.prototype,"loading",void 0);ve([c()],pe.prototype,"switched",void 0);ve([c()],pe.prototype,"text",void 0);ve([c()],pe.prototype,"remoteFeatures",void 0);pe=ve([p("w3m-account-settings-view")],pe);const Mn=R`
  :host {
    display: inline-flex;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    min-height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var Te=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let be=class extends P{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.localTabWidth="100px",this.activeTab=0,this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((e,t)=>{var o;const n=t===this.activeTab;return w`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(t)}
          data-active=${n}
          data-testid="tab-${(o=e.label)==null?void 0:o.toLowerCase()}"
        >
          ${this.iconTemplate(e)}
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}iconTemplate(e){return e.icon?w`<wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>`:null}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,t){const n=this.buttons[this.activeTab],o=this.buttons[e],i=n==null?void 0:n.querySelector("wui-text"),s=o==null?void 0:o.querySelector("wui-text"),r=o==null?void 0:o.getBoundingClientRect(),g=s==null?void 0:s.getBoundingClientRect();n&&i&&!t&&e!==this.activeTab&&(i.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),n.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),o&&r&&g&&s&&(e!==this.activeTab||t)&&(this.localTabWidth=`${Math.round(r.width+g.width)+6}px`,o.animate([{width:`${r.width+g.width}px`}],{duration:t?0:500,fill:"forwards",easing:"ease"}),s.animate([{opacity:1}],{duration:t?0:125,delay:t?0:200,fill:"forwards",easing:"ease"}))}};be.styles=[O,D,Mn];Te([u({type:Array})],be.prototype,"tabs",void 0);Te([u()],be.prototype,"onTabChange",void 0);Te([u({type:Array})],be.prototype,"buttons",void 0);Te([u({type:Boolean})],be.prototype,"disabled",void 0);Te([u()],be.prototype,"localTabWidth",void 0);Te([Ji()],be.prototype,"activeTab",void 0);Te([Ji()],be.prototype,"isDense",void 0);be=Te([p("wui-tabs")],be);const Fn=R`
  button {
    display: flex;
    align-items: center;
    padding: var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-xxs);
    column-gap: var(--wui-spacing-xs);
  }

  wui-image,
  .icon-box {
    width: var(--wui-spacing-xxl);
    height: var(--wui-spacing-xxl);
    border-radius: var(--wui-border-radius-3xs);
  }

  wui-text {
    flex: 1;
  }

  .icon-box {
    position: relative;
  }

  .icon-box[data-active='true'] {
    background-color: var(--wui-color-gray-glass-005);
  }

  .circle {
    position: absolute;
    left: 16px;
    top: 15px;
    width: var(--wui-spacing-1xs);
    height: var(--wui-spacing-1xs);
    background-color: var(--wui-color-success-100);
    border: 2px solid var(--wui-color-modal-bg);
    border-radius: 50%;
  }
`;var ye=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let se=class extends P{constructor(){super(...arguments),this.address="",this.profileName="",this.alt="",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.loading=!1,this.charsStart=4,this.charsEnd=6}render(){return w`
      <button>
        ${this.leftImageTemplate()} ${this.textTemplate()} ${this.rightImageTemplate()}
      </button>
    `}leftImageTemplate(){const e=this.icon?w`<wui-icon
          size=${this.iconSize}
          color="fg-200"
          name=${this.icon}
          class="icon"
        ></wui-icon>`:w`<wui-image src=${this.imageSrc} alt=${this.alt}></wui-image>`;return w`
      <wui-flex
        alignItems="center"
        justifyContent="center"
        class="icon-box"
        data-active=${!!this.icon}
      >
        ${e}
        <wui-flex class="circle"></wui-flex>
      </wui-flex>
    `}textTemplate(){return w`
      <wui-text variant="paragraph-500" color="fg-100">
        ${H.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?16:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"})}
      </wui-text>
    `}rightImageTemplate(){return w`<wui-icon name="chevronBottom" size="xs" color="fg-200"></wui-icon>`}};se.styles=[O,D,Fn];ye([u()],se.prototype,"address",void 0);ye([u()],se.prototype,"profileName",void 0);ye([u()],se.prototype,"alt",void 0);ye([u()],se.prototype,"imageSrc",void 0);ye([u()],se.prototype,"icon",void 0);ye([u()],se.prototype,"iconSize",void 0);ye([u({type:Boolean})],se.prototype,"loading",void 0);ye([u({type:Number})],se.prototype,"charsStart",void 0);ye([u({type:Number})],se.prototype,"charsEnd",void 0);se=ye([p("wui-wallet-switch")],se);const Vn=T`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }

  wui-list-item > wui-text {
    flex: 1;
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .tab-content-container::-webkit-scrollbar {
    display: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-s);
    height: 48px;
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-s);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: 24px;
    transition: background-color 0.2s linear;
  }

  .account-button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-wallet-switch {
    margin-top: var(--wui-spacing-xs);
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition:
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md),
      opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #667dff;
  }
`;var re=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Y=class extends y{constructor(){super(),this.unsubscribe=[],this.caipAddress=$.state.caipAddress,this.address=b.getPlainAddress($.state.caipAddress),this.profileImage=$.state.profileImage,this.profileName=$.state.profileName,this.disconnecting=!1,this.balance=$.state.balance,this.balanceSymbol=$.state.balanceSymbol,this.features=v.state.features,this.remoteFeatures=v.state.remoteFeatures,this.namespace=d.state.activeChain,this.activeConnectorIds=m.state.activeConnectorIds,this.unsubscribe.push($.subscribeKey("caipAddress",e=>{this.address=b.getPlainAddress(e),this.caipAddress=e}),$.subscribeKey("balance",e=>this.balance=e),$.subscribeKey("balanceSymbol",e=>this.balanceSymbol=e),$.subscribeKey("profileName",e=>this.profileName=e),$.subscribeKey("profileImage",e=>this.profileImage=e),v.subscribeKey("features",e=>this.features=e),v.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e),m.subscribeKey("activeConnectorIds",e=>{this.activeConnectorIds=e}),d.subscribeKey("activeChain",e=>this.namespace=e),d.subscribeKey("activeCaipNetwork",e=>{e!=null&&e.chainNamespace&&(this.namespace=e==null?void 0:e.chainNamespace)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.caipAddress||!this.namespace)return null;const e=this.activeConnectorIds[this.namespace],t=e?m.getConnectorById(e):void 0,n=S.getConnectorImage(t);return l`<wui-flex
        flexDirection="column"
        .padding=${["0","xl","m","xl"]}
        alignItems="center"
        gap="s"
      >
        <wui-avatar
          alt=${h(this.caipAddress)}
          address=${h(b.getPlainAddress(this.caipAddress))}
          imageSrc=${h(this.profileImage===null?void 0:this.profileImage)}
          data-testid="single-account-avatar"
        ></wui-avatar>
        <wui-wallet-switch
          profileName=${this.profileName}
          address=${this.address}
          imageSrc=${n}
          alt=${t==null?void 0:t.name}
          @click=${this.onGoToProfileWalletsView.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-200">
            ${b.formatBalance(this.balance,this.balanceSymbol)}
          </wui-text>
        </wui-flex>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        ${this.authCardTemplate()} <w3m-account-auth-button></w3m-account-auth-button>
        ${this.orderedFeaturesTemplate()} ${this.activityTemplate()}
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`}fundWalletTemplate(){var o,i;if(!this.namespace)return null;const e=q.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace),t=((o=this.remoteFeatures)==null?void 0:o.onramp)&&e,n=!!((i=this.features)!=null&&i.receive);return!t&&!n?null:l`
      <wui-list-item
        data-testid="w3m-account-default-fund-wallet-button"
        iconVariant="blue"
        icon="dollar"
        ?chevron=${!0}
        @click=${this.handleClickFundWallet.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Fund wallet</wui-text>
      </wui-list-item>
    `}orderedFeaturesTemplate(){var t;return(((t=this.features)==null?void 0:t.walletFeaturesOrder)||q.DEFAULT_FEATURES.walletFeaturesOrder).map(n=>{switch(n){case"onramp":return this.fundWalletTemplate();case"swaps":return this.swapsTemplate();case"send":return this.sendTemplate();default:return null}})}activityTemplate(){var t;return this.namespace&&((t=this.remoteFeatures)==null?void 0:t.activity)&&q.ACTIVITY_ENABLED_CHAIN_NAMESPACES.includes(this.namespace)?l` <wui-list-item
          iconVariant="blue"
          icon="clock"
          iconSize="sm"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
          data-testid="w3m-account-default-activity-button"
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>`:null}swapsTemplate(){var n;const e=(n=this.remoteFeatures)==null?void 0:n.swaps,t=d.state.activeChain===I.CHAIN.EVM;return!e||!t?null:l`
      <wui-list-item
        iconVariant="blue"
        icon="recycleHorizontal"
        ?chevron=${!0}
        @click=${this.handleClickSwap.bind(this)}
        data-testid="w3m-account-default-swaps-button"
      >
        <wui-text variant="paragraph-500" color="fg-100">Swap</wui-text>
      </wui-list-item>
    `}sendTemplate(){var o;const e=(o=this.features)==null?void 0:o.send,t=d.state.activeChain;if(!t)throw new Error("SendController:sendTemplate - namespace is required");const n=q.SEND_SUPPORTED_NAMESPACES.includes(t);return!e||!n?null:l`
      <wui-list-item
        iconVariant="blue"
        icon="send"
        ?chevron=${!0}
        @click=${this.handleClickSend.bind(this)}
        data-testid="w3m-account-default-send-button"
      >
        <wui-text variant="paragraph-500" color="fg-100">Send</wui-text>
      </wui-list-item>
    `}authCardTemplate(){const e=d.state.activeChain;if(!e)throw new Error("AuthCardTemplate:authCardTemplate - namespace is required");const t=m.getConnectorId(e),n=m.getAuthConnector(),{origin:o}=location;return!n||t!==I.CONNECTOR_ID.AUTH||o.includes(q.SECURE_SITE)?null:l`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}handleClickFundWallet(){f.push("FundWallet")}handleClickSwap(){f.push("Swap")}handleClickSend(){f.push("WalletSend")}explorerBtnTemplate(){return $.state.addressExplorerUrl?l`
      <wui-button size="md" variant="neutral" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}onTransactions(){W.sendEvent({type:"track",event:"CLICK_TRANSACTIONS",properties:{isSmartAccount:Ie(d.state.activeChain)===ue.ACCOUNT_TYPES.SMART_ACCOUNT}}),f.push("Transactions")}async onDisconnect(){var e;try{this.disconnecting=!0;const n=x.getConnections(this.namespace).length>0,o=this.namespace&&m.state.activeConnectorIds[this.namespace],i=(e=this.remoteFeatures)==null?void 0:e.multiWallet;await x.disconnect(i?{id:o,namespace:this.namespace}:{}),n&&i&&(f.push("ProfileWallets"),N.showSuccess("Wallet deleted"))}catch{W.sendEvent({type:"track",event:"DISCONNECT_ERROR",properties:{message:"Failed to disconnect"}}),N.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onExplorer(){const e=$.state.addressExplorerUrl;e&&b.openHref(e,"_blank")}onGoToUpgradeView(){W.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),f.push("UpgradeEmailWallet")}onGoToProfileWalletsView(){f.push("ProfileWallets")}};Y.styles=Vn;re([c()],Y.prototype,"caipAddress",void 0);re([c()],Y.prototype,"address",void 0);re([c()],Y.prototype,"profileImage",void 0);re([c()],Y.prototype,"profileName",void 0);re([c()],Y.prototype,"disconnecting",void 0);re([c()],Y.prototype,"balance",void 0);re([c()],Y.prototype,"balanceSymbol",void 0);re([c()],Y.prototype,"features",void 0);re([c()],Y.prototype,"remoteFeatures",void 0);re([c()],Y.prototype,"namespace",void 0);re([c()],Y.prototype,"activeConnectorIds",void 0);Y=re([p("w3m-account-default-widget")],Y);const Kn=R`
  span {
    font-weight: 500;
    font-size: 40px;
    color: var(--wui-color-fg-100);
    line-height: 130%; /* 52px */
    letter-spacing: -1.6px;
    text-align: center;
  }

  .pennies {
    color: var(--wui-color-fg-200);
  }
`;var gi=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let at=class extends P{constructor(){super(...arguments),this.dollars="0",this.pennies="00"}render(){return w`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`}};at.styles=[O,Kn];gi([u()],at.prototype,"dollars",void 0);gi([u()],at.prototype,"pennies",void 0);at=gi([p("wui-balance")],at);const Gn=R`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);

    color: var(--wui-color-bg-100);
    position: relative;
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var Mt=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Ge=class extends P{constructor(){super(...arguments),this.placement="top",this.variant="fill",this.message=""}render(){return this.dataset.variant=this.variant,w`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name=${this.variant==="fill"?"cursor":"cursorTransparent"}
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};Ge.styles=[O,D,Gn];Mt([u()],Ge.prototype,"placement",void 0);Mt([u()],Ge.prototype,"variant",void 0);Mt([u()],Ge.prototype,"message",void 0);Ge=Mt([p("wui-tooltip")],Ge);const Hn=T`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  :host::-webkit-scrollbar {
    display: none;
  }
`;var qn=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let si=class extends y{render(){return l`<w3m-activity-list page="account"></w3m-activity-list>`}};si.styles=Hn;si=qn([p("w3m-account-activity-widget")],si);const Yn=T`
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
`;var Xn=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let ai=class extends y{render(){return l`${this.nftTemplate()}`}nftTemplate(){return l` <wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="wallet"
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
        <wui-text
          variant="paragraph-500"
          align="center"
          color="fg-100"
          data-testid="nft-template-title"
          >Coming soon</wui-text
        >
        <wui-text
          variant="small-400"
          align="center"
          color="fg-200"
          data-testid="nft-template-description"
          >Stay tuned for our upcoming NFT feature</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)} data-testid="link-receive-funds"
        >Receive funds</wui-link
      >
    </wui-flex>`}onReceiveClick(){f.push("WalletReceive")}};ai.styles=Yn;ai=Xn([p("w3m-account-nfts-widget")],ai);const Qn=R`
  button {
    width: 100%;
    display: flex;
    gap: var(--wui-spacing-s);
    align-items: center;
    justify-content: flex-start;
    padding: var(--wui-spacing-s) var(--wui-spacing-m) var(--wui-spacing-s) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon-box {
    width: var(--wui-spacing-2xl);
    height: var(--wui-spacing-2xl);
  }

  wui-flex {
    width: auto;
  }
`;var Ne=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let ge=class extends P{constructor(){super(...arguments),this.icon="card",this.text="",this.description="",this.tag=void 0,this.iconBackgroundColor="accent-100",this.iconColor="accent-100",this.disabled=!1}render(){return w`
      <button ?disabled=${this.disabled}>
        <wui-icon-box
          iconColor=${this.iconColor}
          backgroundColor=${this.iconBackgroundColor}
          size="inherit"
          icon=${this.icon}
          iconSize="md"
        ></wui-icon-box>
        <wui-flex flexDirection="column" justifyContent="spaceBetween">
          ${this.titleTemplate()}
          ${this.description?w`<wui-text variant="small-400" color="fg-200"> ${this.description}</wui-text>`:null}</wui-flex
        >
      </button>
    `}titleTemplate(){return this.tag?w` <wui-flex alignItems="center" gap="xxs"
        ><wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text
        ><wui-tag tagType="main" size="md">${this.tag}</wui-tag>
      </wui-flex>`:w`<wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>`}};ge.styles=[O,D,Qn];Ne([u()],ge.prototype,"icon",void 0);Ne([u()],ge.prototype,"text",void 0);Ne([u()],ge.prototype,"description",void 0);Ne([u()],ge.prototype,"tag",void 0);Ne([u()],ge.prototype,"iconBackgroundColor",void 0);Ne([u()],ge.prototype,"iconColor",void 0);Ne([u({type:Boolean})],ge.prototype,"disabled",void 0);ge=Ne([p("wui-list-description")],ge);const Zn=T`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }
`;var xi=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let rt=class extends y{constructor(){super(),this.unsubscribe=[],this.tokenBalance=$.state.tokenBalance,this.remoteFeatures=v.state.remoteFeatures,this.unsubscribe.push($.subscribe(e=>{this.tokenBalance=e.tokenBalance}),v.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`${this.tokenTemplate()}`}tokenTemplate(){var e;return this.tokenBalance&&((e=this.tokenBalance)==null?void 0:e.length)>0?l`<wui-flex class="contentContainer" flexDirection="column" gap="xs">
        ${this.tokenItemTemplate()}
      </wui-flex>`:l` <wui-flex flexDirection="column" gap="xs"
      >${this.onRampTemplate()}
      <wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Scan the QR code and receive funds"
        icon="qrCode"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
        data-testid="w3m-account-receive-button"
      ></wui-list-description
    ></wui-flex>`}onRampTemplate(){var e;return(e=this.remoteFeatures)!=null&&e.onramp?l`<wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
        data-testid="w3m-account-onramp-button"
      ></wui-list-description>`:l``}tokenItemTemplate(){var e;return(e=this.tokenBalance)==null?void 0:e.map(t=>l`<wui-list-token
          tokenName=${t.name}
          tokenImageUrl=${t.iconUrl}
          tokenAmount=${t.quantity.numeric}
          tokenValue=${t.value}
          tokenCurrency=${t.symbol}
        ></wui-list-token>`)}onReceiveClick(){f.push("WalletReceive")}onBuyClick(){W.sendEvent({type:"track",event:"SELECT_BUY_CRYPTO",properties:{isSmartAccount:Ie(d.state.activeChain)===ue.ACCOUNT_TYPES.SMART_ACCOUNT}}),f.push("OnRampProviders")}};rt.styles=Zn;xi([c()],rt.prototype,"tokenBalance",void 0);xi([c()],rt.prototype,"remoteFeatures",void 0);rt=xi([p("w3m-account-tokens-widget")],rt);const Jn=T`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * var(--wui-spacing-2l));
  }

  wui-promo + wui-profile-button {
    margin-top: var(--wui-spacing-2l);
  }

  wui-tabs {
    width: 100%;
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
`;var fe=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};const eo=48,to=430;let ne=class extends y{constructor(){super(),this.unsubscribe=[],this.address=$.state.address,this.profileName=$.state.profileName,this.network=d.state.activeCaipNetwork,this.currentTab=$.state.currentTab,this.tokenBalance=$.state.tokenBalance,this.features=v.state.features,this.namespace=d.state.activeChain,this.activeConnectorIds=m.state.activeConnectorIds,this.remoteFeatures=v.state.remoteFeatures,this.unsubscribe.push($.subscribe(e=>{e.address?(this.address=e.address,this.profileName=e.profileName,this.currentTab=e.currentTab,this.tokenBalance=e.tokenBalance):U.close()}),m.subscribeKey("activeConnectorIds",e=>{this.activeConnectorIds=e}),d.subscribeKey("activeChain",e=>this.namespace=e),d.subscribeKey("activeCaipNetwork",e=>this.network=e),v.subscribeKey("features",e=>this.features=e),v.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e)),this.watchSwapValues()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearInterval(this.watchTokenBalance)}firstUpdated(){$.fetchTokenBalance()}render(){if(!this.address)throw new Error("w3m-account-view: No account provided");if(!this.namespace)return null;const e=this.activeConnectorIds[this.namespace],t=e?m.getConnectorById(e):void 0,{icon:n,iconSize:o}=this.getAuthData();return l`<wui-flex
      flexDirection="column"
      .padding=${["0","xl","m","xl"]}
      alignItems="center"
      gap="m"
      data-testid="w3m-account-wallet-features-widget"
    >
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center" gap="xs">
        <wui-wallet-switch
          profileName=${this.profileName}
          address=${this.address}
          icon=${n}
          iconSize=${o}
          alt=${t==null?void 0:t.name}
          @click=${this.onGoToProfileWalletsView.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>

        ${this.tokenBalanceTemplate()}
      </wui-flex>
      ${this.orderedWalletFeatures()} ${this.tabsTemplate()} ${this.listContentTemplate()}
    </wui-flex>`}orderedWalletFeatures(){var i;const e=((i=this.features)==null?void 0:i.walletFeaturesOrder)||q.DEFAULT_FEATURES.walletFeaturesOrder;if(e.every(s=>{var r,g;return s==="send"||s==="receive"?!((r=this.features)!=null&&r[s]):s==="swaps"||s==="onramp"?!((g=this.remoteFeatures)!=null&&g[s]):!0}))return null;const n=e.map(s=>s==="receive"||s==="onramp"?"fund":s),o=[...new Set(n)];return l`<wui-flex gap="s">
      ${o.map(s=>{switch(s){case"fund":return this.fundWalletTemplate();case"swaps":return this.swapsTemplate();case"send":return this.sendTemplate();default:return null}})}
    </wui-flex>`}fundWalletTemplate(){var n,o;const e=(n=this.remoteFeatures)==null?void 0:n.onramp,t=(o=this.features)==null?void 0:o.receive;return!e&&!t?null:l`
      <w3m-tooltip-trigger text="Fund wallet">
        <wui-icon-button
          data-testid="wallet-features-fund-wallet-button"
          @click=${this.onFundWalletClick.bind(this)}
          icon="dollar"
        ></wui-icon-button>
      </w3m-tooltip-trigger>
    `}swapsTemplate(){var n;const e=(n=this.remoteFeatures)==null?void 0:n.swaps,t=d.state.activeChain===I.CHAIN.EVM;return!e||!t?null:l`
      <w3m-tooltip-trigger text="Swap">
        <wui-icon-button
          data-testid="wallet-features-swaps-button"
          @click=${this.onSwapClick.bind(this)}
          icon="recycleHorizontal"
        >
        </wui-icon-button>
      </w3m-tooltip-trigger>
    `}sendTemplate(){var o;const e=(o=this.features)==null?void 0:o.send,t=d.state.activeChain,n=q.SEND_SUPPORTED_NAMESPACES.includes(t);return!e||!n?null:l`
      <w3m-tooltip-trigger text="Send">
        <wui-icon-button
          data-testid="wallet-features-send-button"
          @click=${this.onSendClick.bind(this)}
          icon="send"
        ></wui-icon-button>
      </w3m-tooltip-trigger>
    `}watchSwapValues(){this.watchTokenBalance=setInterval(()=>$.fetchTokenBalance(e=>this.onTokenBalanceError(e)),1e4)}onTokenBalanceError(e){e instanceof Error&&e.cause instanceof Response&&e.cause.status===I.HTTP_STATUS_CODES.SERVICE_UNAVAILABLE&&clearInterval(this.watchTokenBalance)}listContentTemplate(){return this.currentTab===0?l`<w3m-account-tokens-widget></w3m-account-tokens-widget>`:this.currentTab===1?l`<w3m-account-nfts-widget></w3m-account-nfts-widget>`:this.currentTab===2?l`<w3m-account-activity-widget></w3m-account-activity-widget>`:l`<w3m-account-tokens-widget></w3m-account-tokens-widget>`}tokenBalanceTemplate(){var e;if(this.tokenBalance&&((e=this.tokenBalance)==null?void 0:e.length)>=0){const t=b.calculateBalance(this.tokenBalance),{dollars:n="0",pennies:o="00"}=b.formatTokenBalance(t);return l`<wui-balance dollars=${n} pennies=${o}></wui-balance>`}return l`<wui-balance dollars="0" pennies="00"></wui-balance>`}tabsTemplate(){const e=Wn.getTabsByNamespace(d.state.activeChain);if(e.length===0)return null;const t=b.isMobile()&&window.innerWidth<to;let n="104px";return t?n=`${(window.innerWidth-eo)/e.length}px`:e.length===2?n="156px":n="104px",l`<wui-tabs
      .onTabChange=${this.onTabChange.bind(this)}
      .activeTab=${this.currentTab}
      localTabWidth=${n}
      .tabs=${e}
    ></wui-tabs>`}onTabChange(e){$.setCurrentTab(e)}onFundWalletClick(){f.push("FundWallet")}onSwapClick(){var e,t,n;(e=this.network)!=null&&e.caipNetworkId&&!q.SWAP_SUPPORTED_NETWORKS.includes((t=this.network)==null?void 0:t.caipNetworkId)?f.push("UnsupportedChain",{swapUnsupportedChain:!0}):(W.sendEvent({type:"track",event:"OPEN_SWAP",properties:{network:((n=this.network)==null?void 0:n.caipNetworkId)||"",isSmartAccount:Ie(d.state.activeChain)===ue.ACCOUNT_TYPES.SMART_ACCOUNT}}),f.push("Swap"))}getAuthData(){const e=de.getConnectedSocialProvider(),t=de.getConnectedSocialUsername(),n=m.getAuthConnector(),o=(n==null?void 0:n.provider.getEmail())??"";return{name:Oe.getAuthName({email:o,socialUsername:t,socialProvider:e}),icon:e??"mail",iconSize:e?"xl":"md"}}onGoToProfileWalletsView(){f.push("ProfileWallets")}onSendClick(){var e;W.sendEvent({type:"track",event:"OPEN_SEND",properties:{network:((e=this.network)==null?void 0:e.caipNetworkId)||"",isSmartAccount:Ie(d.state.activeChain)===ue.ACCOUNT_TYPES.SMART_ACCOUNT}}),f.push("WalletSend")}};ne.styles=Jn;fe([c()],ne.prototype,"watchTokenBalance",void 0);fe([c()],ne.prototype,"address",void 0);fe([c()],ne.prototype,"profileName",void 0);fe([c()],ne.prototype,"network",void 0);fe([c()],ne.prototype,"currentTab",void 0);fe([c()],ne.prototype,"tokenBalance",void 0);fe([c()],ne.prototype,"features",void 0);fe([c()],ne.prototype,"namespace",void 0);fe([c()],ne.prototype,"activeConnectorIds",void 0);fe([c()],ne.prototype,"remoteFeatures",void 0);ne=fe([p("w3m-account-wallet-features-widget")],ne);var on=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let ri=class extends y{constructor(){super(),this.unsubscribe=[],this.namespace=d.state.activeChain,this.unsubscribe.push(d.subscribeKey("activeChain",e=>{this.namespace=e}))}render(){if(!this.namespace)return null;const e=m.getConnectorId(this.namespace),t=m.getAuthConnector();return l`
      ${t&&e===I.CONNECTOR_ID.AUTH?this.walletFeaturesTemplate():this.defaultTemplate()}
    `}walletFeaturesTemplate(){return l`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`}defaultTemplate(){return l`<w3m-account-default-widget></w3m-account-default-widget>`}};on([c()],ri.prototype,"namespace",void 0);ri=on([p("w3m-account-view")],ri);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const li=_n(class extends Tn{constructor(a){var e;if(super(a),a.type!==Nn.ATTRIBUTE||a.name!=="class"||((e=a.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(a){return" "+Object.keys(a).filter(e=>a[e]).join(" ")+" "}update(a,[e]){var n,o;if(this.st===void 0){this.st=new Set,a.strings!==void 0&&(this.nt=new Set(a.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in e)e[i]&&!((n=this.nt)!=null&&n.has(i))&&this.st.add(i);return this.render(e)}const t=a.element.classList;for(const i of this.st)i in e||(t.remove(i),this.st.delete(i));for(const i in e){const s=!!e[i];s===this.st.has(i)||(o=this.nt)!=null&&o.has(i)||(s?(t.add(i),this.st.add(i)):(t.remove(i),this.st.delete(i)))}return gn}}),io=R`
  wui-image {
    width: var(--wui-spacing-2xl);
    height: var(--wui-spacing-2xl);
    border-radius: var(--wui-border-radius-3xs);
  }

  wui-image,
  .icon-box {
    width: var(--wui-spacing-2xl);
    height: var(--wui-spacing-2xl);
    border-radius: var(--wui-border-radius-3xs);
  }

  wui-icon:not(.custom-icon, .icon-badge) {
    cursor: pointer;
  }

  .icon-box {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
  }

  .icon-badge {
    position: absolute;
    top: 18px;
    left: 23px;
    z-index: 3;
    background-color: var(--wui-color-gray-glass-005);
    border: 2px solid var(--wui-color-modal-bg);
    border-radius: 50%;
    padding: var(--wui-spacing-4xs);
  }
`;var Z=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let z=class extends P{constructor(){super(...arguments),this.address="",this.profileName="",this.content=[],this.alt="",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.iconBadge=void 0,this.iconBadgeSize="md",this.buttonVariant="neutral",this.enableMoreButton=!1,this.charsStart=4,this.charsEnd=6}render(){return w`
      <wui-flex flexDirection="column" rowGap="xs">
        ${this.topTemplate()} ${this.bottomTemplate()}
      </wui-flex>
    `}topTemplate(){return w`
      <wui-flex alignItems="flex-start" justifyContent="space-between">
        ${this.imageOrIconTemplate()}
        <wui-icon-link
          iconColor="fg-200"
          size="sm"
          icon="copy"
          @click=${this.dispatchCopyEvent}
        ></wui-icon-link>
        <wui-icon-link
          iconColor="fg-200"
          size="sm"
          icon="externalLink"
          @click=${this.dispatchExternalLinkEvent}
        ></wui-icon-link>
        ${this.enableMoreButton?w`<wui-icon-link
              iconColor="fg-200"
              size="sm"
              icon="threeDots"
              @click=${this.dispatchMoreButtonEvent}
              data-testid="wui-active-profile-wallet-item-more-button"
            ></wui-icon-link>`:null}
      </wui-flex>
    `}bottomTemplate(){return w` <wui-flex flexDirection="column">${this.contentTemplate()}</wui-flex> `}imageOrIconTemplate(){return this.icon?w`
        <wui-flex flexGrow="1" alignItems="center">
          <wui-flex alignItems="center" justifyContent="center" class="icon-box">
            <wui-icon
              size=${this.iconSize}
              color="fg-200"
              name=${this.icon}
              class="custom-icon"
            ></wui-icon>

            ${this.iconBadge?w`<wui-icon
                  color="fg-175"
                  size=${this.iconBadgeSize}
                  name=${this.iconBadge}
                  class="icon-badge"
                ></wui-icon>`:null}
          </wui-flex>
        </wui-flex>
      `:w`
      <wui-flex flexGrow="1" alignItems="center">
        <wui-image objectFit="contain" src=${this.imageSrc} alt=${this.alt}></wui-image>
      </wui-flex>
    `}contentTemplate(){return this.content.length===0?null:w`
      <wui-flex flexDirection="column" rowGap="s">
        ${this.content.map(e=>this.labelAndTagTemplate(e))}
      </wui-flex>
    `}labelAndTagTemplate({address:e,profileName:t,label:n,description:o,enableButton:i,buttonType:s,buttonLabel:r,buttonVariant:g,tagVariant:A,tagLabel:k,alignItems:B="flex-end"}){return w`
      <wui-flex justifyContent="space-between" alignItems=${B} columnGap="3xs">
        <wui-flex flexDirection="column" rowGap="4xs">
          ${n?w`<wui-text variant="micro-600" color="fg-200">${n}</wui-text>`:null}

          <wui-flex alignItems="center" columnGap="3xs">
            <wui-text variant="small-500" color="fg-100">
              ${H.getTruncateString({string:t||e,charsStart:t?16:this.charsStart,charsEnd:t?0:this.charsEnd,truncate:t?"end":"middle"})}
            </wui-text>

            ${A&&k?w`<wui-tag variant=${A} size="xs">${k}</wui-tag>`:null}
          </wui-flex>

          ${o?w`<wui-text variant="tiny-500" color="fg-200">${o}</wui-text>`:null}
        </wui-flex>

        ${i?this.buttonTemplate({buttonType:s,buttonLabel:r,buttonVariant:g}):null}
      </wui-flex>
    `}buttonTemplate({buttonType:e,buttonLabel:t,buttonVariant:n}){return w`
      <wui-button
        size="xs"
        variant=${n}
        @click=${e==="disconnect"?this.dispatchDisconnectEvent.bind(this):this.dispatchSwitchEvent.bind(this)}
        data-testid=${e==="disconnect"?"wui-active-profile-wallet-item-disconnect-button":"wui-active-profile-wallet-item-switch-button"}
      >
        ${t}
      </wui-button>
    `}dispatchDisconnectEvent(){this.dispatchEvent(new CustomEvent("disconnect",{bubbles:!0,composed:!0}))}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent("switch",{bubbles:!0,composed:!0}))}dispatchExternalLinkEvent(){this.dispatchEvent(new CustomEvent("externalLink",{bubbles:!0,composed:!0}))}dispatchMoreButtonEvent(){this.dispatchEvent(new CustomEvent("more",{bubbles:!0,composed:!0}))}dispatchCopyEvent(){this.dispatchEvent(new CustomEvent("copy",{bubbles:!0,composed:!0}))}};z.styles=[O,D,io];Z([u()],z.prototype,"address",void 0);Z([u()],z.prototype,"profileName",void 0);Z([u({type:Array})],z.prototype,"content",void 0);Z([u()],z.prototype,"alt",void 0);Z([u()],z.prototype,"imageSrc",void 0);Z([u()],z.prototype,"icon",void 0);Z([u()],z.prototype,"iconSize",void 0);Z([u()],z.prototype,"iconBadge",void 0);Z([u()],z.prototype,"iconBadgeSize",void 0);Z([u()],z.prototype,"buttonVariant",void 0);Z([u({type:Boolean})],z.prototype,"enableMoreButton",void 0);Z([u({type:Number})],z.prototype,"charsStart",void 0);Z([u({type:Number})],z.prototype,"charsEnd",void 0);z=Z([p("wui-active-profile-wallet-item")],z);const no=R`
  wui-image,
  .icon-box {
    width: var(--wui-spacing-2xl);
    height: var(--wui-spacing-2xl);
    border-radius: var(--wui-border-radius-3xs);
  }

  .right-icon {
    cursor: pointer;
  }

  .icon-box {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
  }

  .icon-badge {
    position: absolute;
    top: 18px;
    left: 23px;
    z-index: 3;
    background-color: var(--wui-color-gray-glass-005);
    border: 2px solid var(--wui-color-modal-bg);
    border-radius: 50%;
    padding: var(--wui-spacing-4xs);
  }
`;var V=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let L=class extends P{constructor(){super(...arguments),this.address="",this.profileName="",this.alt="",this.buttonLabel="",this.buttonVariant="accent",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.iconBadgeSize="md",this.rightIcon="off",this.rightIconSize="md",this.loading=!1,this.charsStart=4,this.charsEnd=6}render(){return w`
      <wui-flex alignItems="center" columnGap="xs">
        ${this.imageOrIconTemplate()} ${this.labelAndDescriptionTemplate()}
        ${this.buttonActionTemplate()}
      </wui-flex>
    `}imageOrIconTemplate(){return this.icon?w`
        <wui-flex alignItems="center" justifyContent="center" class="icon-box">
          <wui-flex alignItems="center" justifyContent="center" class="icon-box">
            <wui-icon
              size=${this.iconSize}
              color="fg-200"
              name=${this.icon}
              class="custom-icon"
            ></wui-icon>
            ${this.iconBadge?w`<wui-icon
                  color="fg-175"
                  size=${this.iconBadgeSize}
                  name=${this.iconBadge}
                  class="icon-badge"
                ></wui-icon>`:null}
          </wui-flex>
        </wui-flex>
      `:w`<wui-image objectFit="contain" src=${this.imageSrc} alt=${this.alt}></wui-image>`}labelAndDescriptionTemplate(){return w`
      <wui-flex
        flexDirection="column"
        flexGrow="1"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <wui-text variant="small-500" color="fg-100">
          ${H.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?16:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"})}
        </wui-text>
      </wui-flex>
    `}buttonActionTemplate(){return w`
      <wui-flex columnGap="3xs" alignItems="center" justifyContent="center">
        <wui-button
          size="xs"
          variant=${this.buttonVariant}
          .loading=${this.loading}
          @click=${this.handleButtonClick}
          data-testid="wui-inactive-profile-wallet-item-button"
        >
          ${this.buttonLabel}
        </wui-button>

        <wui-icon-link
          iconColor="fg-200"
          size=${this.rightIconSize}
          icon=${this.rightIcon}
          class="right-icon"
          @click=${this.handleIconClick}
        ></wui-icon-link>
      </wui-flex>
    `}handleButtonClick(){this.dispatchEvent(new CustomEvent("buttonClick",{bubbles:!0,composed:!0}))}handleIconClick(){this.dispatchEvent(new CustomEvent("iconClick",{bubbles:!0,composed:!0}))}};L.styles=[O,D,no];V([u()],L.prototype,"address",void 0);V([u()],L.prototype,"profileName",void 0);V([u()],L.prototype,"alt",void 0);V([u()],L.prototype,"buttonLabel",void 0);V([u()],L.prototype,"buttonVariant",void 0);V([u()],L.prototype,"imageSrc",void 0);V([u()],L.prototype,"icon",void 0);V([u()],L.prototype,"iconSize",void 0);V([u()],L.prototype,"iconBadge",void 0);V([u()],L.prototype,"iconBadgeSize",void 0);V([u()],L.prototype,"rightIcon",void 0);V([u()],L.prototype,"rightIconSize",void 0);V([u({type:Boolean})],L.prototype,"loading",void 0);V([u({type:Number})],L.prototype,"charsStart",void 0);V([u({type:Number})],L.prototype,"charsEnd",void 0);L=V([p("wui-inactive-profile-wallet-item")],L);const ti={getAuthData(a){var s,r;const e=a.connectorId===I.CONNECTOR_ID.AUTH;if(!e)return{isAuth:!1,icon:void 0,iconSize:void 0,name:void 0};const t=((s=a==null?void 0:a.auth)==null?void 0:s.name)??de.getConnectedSocialProvider(),n=((r=a==null?void 0:a.auth)==null?void 0:r.username)??de.getConnectedSocialUsername(),o=m.getAuthConnector(),i=(o==null?void 0:o.provider.getEmail())??"";return{isAuth:!0,icon:t??"mail",iconSize:t?"xl":"md",name:e?Oe.getAuthName({email:i,socialUsername:n,socialProvider:t}):void 0}}},oo=T`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
  }

  .balance-amount {
    flex: 1;
  }

  .wallet-list {
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,
      black 40px,
      black calc(100% - 40px),
      rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%
    );
  }

  .active-wallets {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  .active-wallets-box {
    height: 330px;
  }

  .empty-wallet-list-box {
    height: 400px;
  }

  .empty-box {
    width: 100%;
    padding: var(--wui-spacing-l);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  wui-separator {
    margin: var(--wui-spacing-xs) 0 var(--wui-spacing-xs) 0;
  }

  .active-connection {
    padding: var(--wui-spacing-xs);
  }

  .recent-connection {
    padding: var(--wui-spacing-xs) 0 var(--wui-spacing-xs) 0;
  }

  @media (max-width: 430px) {
    .active-wallets-box,
    .empty-wallet-list-box {
      height: auto;
      max-height: clamp(360px, 470px, 80vh);
    }
  }
`;var J=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};const so=16,ao=4,oe={ADDRESS_DISPLAY:{START:4,END:6},BADGE:{SIZE:"md",ICON:"lightbulb"},SCROLL_THRESHOLD:50,OPACITY_RANGE:[0,1]},ot={eip155:"ethereum",solana:"solana",bip122:"bitcoin"},zi=[{namespace:"eip155",icon:ot.eip155,label:"EVM"},{namespace:"solana",icon:ot.solana,label:"Solana"},{namespace:"bip122",icon:ot.bip122,label:"Bitcoin"}],ro={eip155:{title:"Add EVM Wallet",description:"Add your first EVM wallet"},solana:{title:"Add Solana Wallet",description:"Add your first Solana wallet"},bip122:{title:"Add Bitcoin Wallet",description:"Add your first Bitcoin wallet"}};let M=class extends y{constructor(){var e,t;super(),this.unsubscribers=[],this.currentTab=0,this.namespace=d.state.activeChain,this.namespaces=Array.from(d.state.chains.keys()),this.caipAddress=void 0,this.profileName=void 0,this.activeConnectorIds=m.state.activeConnectorIds,this.lastSelectedAddress="",this.lastSelectedConnectorId="",this.isSwitching=!1,this.caipNetwork=d.state.activeCaipNetwork,this.user=$.state.user,this.remoteFeatures=v.state.remoteFeatures,this.tabWidth="",this.currentTab=this.namespace?this.namespaces.indexOf(this.namespace):0,this.caipAddress=(e=d.getAccountData(this.namespace))==null?void 0:e.caipAddress,this.profileName=(t=d.getAccountData(this.namespace))==null?void 0:t.profileName,this.unsubscribers.push(x.subscribeKey("connections",()=>this.onConnectionsChange()),x.subscribeKey("recentConnections",()=>this.requestUpdate()),m.subscribeKey("activeConnectorIds",n=>{this.activeConnectorIds=n}),d.subscribeKey("activeCaipNetwork",n=>this.caipNetwork=n),$.subscribeKey("user",n=>this.user=n),v.subscribeKey("remoteFeatures",n=>this.remoteFeatures=n)),this.chainListener=d.subscribeChainProp("accountState",n=>{this.caipAddress=n==null?void 0:n.caipAddress,this.profileName=n==null?void 0:n.profileName},this.namespace)}disconnectedCallback(){var e,t,n;this.unsubscribers.forEach(o=>o()),(e=this.resizeObserver)==null||e.disconnect(),(t=this.tabsResizeObserver)==null||t.disconnect(),this.removeScrollListener(),(n=this.chainListener)==null||n.call(this)}firstUpdated(){var o,i;const e=(o=this.shadowRoot)==null?void 0:o.querySelector(".wallet-list"),t=(i=this.shadowRoot)==null?void 0:i.querySelector("wui-tabs");if(!e)return;const n=()=>this.updateScrollOpacity(e);if(requestAnimationFrame(n),e.addEventListener("scroll",n),this.resizeObserver=new ResizeObserver(n),this.resizeObserver.observe(e),n(),t){const s=()=>{var A;const g=zi.filter(k=>this.namespaces.includes(k.namespace)).length;if(g>1){const k=(A=this.getBoundingClientRect())==null?void 0:A.width,B=ao*2,E=so*2,ei=(k-E-B)/g;this.tabWidth=`${ei}px`,this.requestUpdate()}};this.tabsResizeObserver=new ResizeObserver(s),this.tabsResizeObserver.observe(this),s()}}render(){const e=this.namespace;if(!e)throw new Error("Namespace is not set");return l`
      <wui-flex flexDirection="column" .padding=${["0","l","l","l"]} gap="l">
        ${this.renderTabs()} ${this.renderHeader(e)} ${this.renderConnections(e)}
        ${this.renderAddConnectionButton(e)}
      </wui-flex>
    `}renderTabs(){const e=zi.filter(n=>this.namespaces.includes(n.namespace));return e.length>1?l`
        <wui-tabs
          .onTabChange=${n=>this.handleTabChange(n)}
          .activeTab=${this.currentTab}
          localTabWidth=${this.tabWidth}
          .tabs=${e}
        ></wui-tabs>
      `:null}renderHeader(e){const n=this.getActiveConnections(e).flatMap(({accounts:o})=>o).length+(this.caipAddress?1:0);return l`
      <wui-flex alignItems="center" columnGap="3xs">
        <wui-icon
          name=${ot[e]??ot.eip155}
          size="lg"
        ></wui-icon>
        <wui-text color="fg-200" variant="small-400"
          >${n>1?"Wallets":"Wallet"}</wui-text
        >
        <wui-text
          color="fg-100"
          variant="small-400"
          class="balance-amount"
          data-testid="balance-amount"
        >
          ${n}
        </wui-text>
        <wui-link
          color="fg-200"
          @click=${()=>x.disconnect({namespace:e})}
          ?disabled=${!this.hasAnyConnections(e)}
          data-testid="disconnect-all-button"
        >
          Disconnect All
        </wui-link>
      </wui-flex>
    `}renderConnections(e){const t=this.hasAnyConnections(e);return l`
      <wui-flex flexDirection="column" class=${li({"wallet-list":!0,"active-wallets-box":t,"empty-wallet-list-box":!t})} rowGap="s">
        ${t?this.renderActiveConnections(e):this.renderEmptyState(e)}
      </wui-flex>
    `}renderActiveConnections(e){const t=this.getActiveConnections(e),n=this.activeConnectorIds[e],o=this.getPlainAddress();return l`
      ${o||n||t.length>0?l`<wui-flex
            flexDirection="column"
            .padding=${["l","0","xs","0"]}
            class="active-wallets"
          >
            ${this.renderActiveProfile(e)} ${this.renderActiveConnectionsList(e)}
          </wui-flex>`:null}
      ${this.renderRecentConnections(e)}
    `}renderActiveProfile(e){const t=this.activeConnectorIds[e];if(!t)return null;const{connections:n}=Se.getConnectionsData(e),o=m.getConnectorById(t),i=S.getConnectorImage(o),s=this.getPlainAddress();if(!s)return null;const r=e===I.CHAIN.BITCOIN,g=ti.getAuthData({connectorId:t,accounts:[]}),A=this.getActiveConnections(e).flatMap(E=>E.accounts).length>0,k=n.find(E=>E.connectorId===t),B=k==null?void 0:k.accounts.filter(E=>!te.isLowerCaseMatch(E.address,s));return l`
      <wui-flex flexDirection="column" .padding=${["0","l","0","l"]}>
        <wui-active-profile-wallet-item
          address=${s}
          alt=${o==null?void 0:o.name}
          .content=${this.getProfileContent({address:s,connections:n,connectorId:t,namespace:e})}
          .charsStart=${oe.ADDRESS_DISPLAY.START}
          .charsEnd=${oe.ADDRESS_DISPLAY.END}
          .icon=${g.icon}
          .iconSize=${g.iconSize}
          .iconBadge=${this.isSmartAccount(s)?oe.BADGE.ICON:void 0}
          .iconBadgeSize=${this.isSmartAccount(s)?oe.BADGE.SIZE:void 0}
          imageSrc=${i}
          ?enableMoreButton=${g.isAuth}
          @copy=${()=>this.handleCopyAddress(s)}
          @disconnect=${()=>this.handleDisconnect(e,{id:t})}
          @switch=${()=>{r&&k&&(B!=null&&B[0])&&this.handleSwitchWallet(k,B[0].address,e)}}
          @externalLink=${()=>this.handleExternalLink(s)}
          @more=${()=>this.handleMore()}
          data-testid="wui-active-profile-wallet-item"
        ></wui-active-profile-wallet-item>
        ${A?l`<wui-separator></wui-separator>`:null}
      </wui-flex>
    `}renderActiveConnectionsList(e){const t=this.getActiveConnections(e);return t.length===0?null:l`
      <wui-flex flexDirection="column" .padding=${["0","xs","0","xs"]}>
        ${this.renderConnectionList(t,!1,e)}
      </wui-flex>
    `}renderRecentConnections(e){const{recentConnections:t}=Se.getConnectionsData(e);return t.flatMap(o=>o.accounts).length===0?null:l`
      <wui-flex flexDirection="column" .padding=${["0","xs","0","xs"]} rowGap="xs">
        <wui-text color="fg-200" variant="micro-500" data-testid="recently-connected-text"
          >RECENTLY CONNECTED</wui-text
        >
        <wui-flex flexDirection="column" .padding=${["0","xs","0","xs"]}>
          ${this.renderConnectionList(t,!0,e)}
        </wui-flex>
      </wui-flex>
    `}renderConnectionList(e,t,n){return e.filter(o=>o.accounts.length>0).map((o,i)=>{const s=m.getConnectorById(o.connectorId),r=S.getConnectorImage(s)??"",g=ti.getAuthData(o);return o.accounts.map((A,k)=>{const B=i!==0||k!==0,E=this.isAccountLoading(o.connectorId,A.address);return l`
            <wui-flex flexDirection="column">
              ${B?l`<wui-separator></wui-separator>`:null}
              <wui-inactive-profile-wallet-item
                address=${A.address}
                alt=${o.connectorId}
                buttonLabel=${t?"Connect":"Switch"}
                buttonVariant=${t?"neutral":"accent"}
                rightIcon=${t?"bin":"off"}
                rightIconSize="sm"
                class=${t?"recent-connection":"active-connection"}
                data-testid=${t?"recent-connection":"active-connection"}
                imageSrc=${r}
                .iconBadge=${this.isSmartAccount(A.address)?oe.BADGE.ICON:void 0}
                .iconBadgeSize=${this.isSmartAccount(A.address)?oe.BADGE.SIZE:void 0}
                .icon=${g.icon}
                .iconSize=${g.iconSize}
                .loading=${E}
                .showBalance=${!1}
                .charsStart=${oe.ADDRESS_DISPLAY.START}
                .charsEnd=${oe.ADDRESS_DISPLAY.END}
                @buttonClick=${()=>this.handleSwitchWallet(o,A.address,n)}
                @iconClick=${()=>this.handleWalletAction({connection:o,address:A.address,isRecentConnection:t,namespace:n})}
              ></wui-inactive-profile-wallet-item>
            </wui-flex>
          `})})}renderAddConnectionButton(e){if(!this.isMultiWalletEnabled()&&this.caipAddress||!this.hasAnyConnections(e))return null;const{title:t}=this.getChainLabelInfo(e);return l`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="plus"
        iconSize="sm"
        ?chevron=${!0}
        @click=${()=>this.handleAddConnection(e)}
        data-testid="add-connection-button"
      >
        <wui-text variant="paragraph-500" color="fg-200">${t}</wui-text>
      </wui-list-item>
    `}renderEmptyState(e){const{title:t,description:n}=this.getChainLabelInfo(e);return l`
      <wui-flex alignItems="flex-start" class="empty-template" data-testid="empty-template">
        <wui-flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          rowGap="s"
          class="empty-box"
        >
          <wui-icon-box
            size="lg"
            icon="wallet"
            background="gray"
            iconColor="fg-200"
            backgroundColor="glass-002"
          ></wui-icon-box>

          <wui-flex flexDirection="column" alignItems="center" justifyContent="center" gap="3xs">
            <wui-text color="fg-100" variant="paragraph-500" data-testid="empty-state-text"
              >No wallet connected</wui-text
            >
            <wui-text color="fg-200" variant="tiny-500" data-testid="empty-state-description"
              >${n}</wui-text
            >
          </wui-flex>

          <wui-button
            variant="neutral"
            size="md"
            @click=${()=>this.handleAddConnection(e)}
            data-testid="empty-state-button"
          >
            <wui-icon color="inherit" slot="iconLeft" name="plus"></wui-icon>
            ${t}
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}handleTabChange(e){var n,o,i;const t=this.namespaces[e];t&&((n=this.chainListener)==null||n.call(this),this.currentTab=this.namespaces.indexOf(t),this.namespace=t,this.caipAddress=(o=d.getAccountData(t))==null?void 0:o.caipAddress,this.profileName=(i=d.getAccountData(t))==null?void 0:i.profileName,this.chainListener=d.subscribeChainProp("accountState",s=>{this.caipAddress=s==null?void 0:s.caipAddress},t))}async handleSwitchWallet(e,t,n){try{this.isSwitching=!0,this.lastSelectedConnectorId=e.connectorId,this.lastSelectedAddress=t,await x.switchConnection({connection:e,address:t,namespace:n,closeModalOnConnect:!1,onChange({hasSwitchedAccount:o,hasSwitchedWallet:i}){i?N.showSuccess("Wallet switched"):o&&N.showSuccess("Account switched")}})}catch{N.showError("Failed to switch wallet")}finally{this.isSwitching=!1}}handleWalletAction(e){const{connection:t,address:n,isRecentConnection:o,namespace:i}=e;o?(de.deleteAddressFromConnection({connectorId:t.connectorId,address:n,namespace:i}),x.syncStorageConnections(),N.showSuccess("Wallet deleted")):this.handleDisconnect(i,{id:t.connectorId})}async handleDisconnect(e,{id:t}){try{await x.disconnect({id:t,namespace:e}),N.showSuccess("Wallet disconnected")}catch{N.showError("Failed to disconnect wallet")}}handleCopyAddress(e){b.copyToClopboard(e),N.showSuccess("Address copied")}handleMore(){f.push("AccountSettings")}handleExternalLink(e){var n,o;const t=(o=(n=this.caipNetwork)==null?void 0:n.blockExplorers)==null?void 0:o.default.url;t&&b.openHref(`${t}/address/${e}`,"_blank")}handleAddConnection(e){m.setFilterByNamespace(e),f.push("Connect")}getChainLabelInfo(e){return ro[e]??{title:"Add Wallet",description:"Add your first wallet"}}isSmartAccount(e){var n,o;if(!this.namespace)return!1;const t=(o=(n=this.user)==null?void 0:n.accounts)==null?void 0:o.find(i=>i.type==="smartAccount");return t&&e?te.isLowerCaseMatch(t.address,e):!1}getPlainAddress(){return this.caipAddress?b.getPlainAddress(this.caipAddress):void 0}getActiveConnections(e){const t=this.activeConnectorIds[e],{connections:n}=Se.getConnectionsData(e),[o]=n.filter(g=>te.isLowerCaseMatch(g.connectorId,t));if(!t)return n;const i=e===I.CHAIN.BITCOIN,{address:s}=this.caipAddress?vn.parseCaipAddress(this.caipAddress):{};let r=[...s?[s]:[]];return i&&o&&(r=o.accounts.map(g=>g.address)||[]),Se.excludeConnectorAddressFromConnections({connectorId:t,addresses:r,connections:n})}hasAnyConnections(e){const t=this.getActiveConnections(e),{recentConnections:n}=Se.getConnectionsData(e);return!!this.caipAddress||t.length>0||n.length>0}isAccountLoading(e,t){return te.isLowerCaseMatch(this.lastSelectedConnectorId,e)&&te.isLowerCaseMatch(this.lastSelectedAddress,t)&&this.isSwitching}getProfileContent(e){const{address:t,connections:n,connectorId:o,namespace:i}=e,[s]=n.filter(g=>te.isLowerCaseMatch(g.connectorId,o));if(i===I.CHAIN.BITCOIN&&(s!=null&&s.accounts.every(g=>typeof g.type=="string")))return this.getBitcoinProfileContent(s.accounts,t);const r=ti.getAuthData({connectorId:o,accounts:[]});return[{address:t,tagLabel:"Active",tagVariant:"success",enableButton:!0,profileName:this.profileName,buttonType:"disconnect",buttonLabel:"Disconnect",buttonVariant:"neutral",...r.isAuth?{description:this.isSmartAccount(t)?"Smart Account":"EOA Account"}:{}}]}getBitcoinProfileContent(e,t){const n=e.length>1,o=this.getPlainAddress();return e.map(i=>{const s=te.isLowerCaseMatch(i.address,o);let r="PAYMENT";return i.type==="ordinal"&&(r="ORDINALS"),{address:i.address,tagLabel:te.isLowerCaseMatch(i.address,t)?"Active":void 0,tagVariant:te.isLowerCaseMatch(i.address,t)?"success":void 0,enableButton:!0,...n?{label:r,alignItems:"flex-end",buttonType:s?"disconnect":"switch",buttonLabel:s?"Disconnect":"Switch",buttonVariant:s?"neutral":"accent"}:{alignItems:"center",buttonType:"disconnect",buttonLabel:"Disconnect",buttonVariant:"neutral"}}})}removeScrollListener(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector(".wallet-list");e&&e.removeEventListener("scroll",()=>this.handleConnectListScroll())}handleConnectListScroll(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector(".wallet-list");e&&this.updateScrollOpacity(e)}isMultiWalletEnabled(){var e;return!!((e=this.remoteFeatures)!=null&&e.multiWallet)}updateScrollOpacity(e){e.style.setProperty("--connect-scroll--top-opacity",yt.interpolate([0,oe.SCROLL_THRESHOLD],oe.OPACITY_RANGE,e.scrollTop).toString()),e.style.setProperty("--connect-scroll--bottom-opacity",yt.interpolate([0,oe.SCROLL_THRESHOLD],oe.OPACITY_RANGE,e.scrollHeight-e.scrollTop-e.offsetHeight).toString())}onConnectionsChange(){if(this.isMultiWalletEnabled()&&this.namespace){const{connections:e}=Se.getConnectionsData(this.namespace);e.length===0&&f.reset("ProfileWallets")}this.requestUpdate()}};M.styles=oo;J([c()],M.prototype,"currentTab",void 0);J([c()],M.prototype,"namespace",void 0);J([c()],M.prototype,"namespaces",void 0);J([c()],M.prototype,"caipAddress",void 0);J([c()],M.prototype,"profileName",void 0);J([c()],M.prototype,"activeConnectorIds",void 0);J([c()],M.prototype,"lastSelectedAddress",void 0);J([c()],M.prototype,"lastSelectedConnectorId",void 0);J([c()],M.prototype,"isSwitching",void 0);J([c()],M.prototype,"caipNetwork",void 0);J([c()],M.prototype,"user",void 0);J([c()],M.prototype,"remoteFeatures",void 0);J([c()],M.prototype,"tabWidth",void 0);M=J([p("w3m-profile-wallets-view")],M);const lo=R`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    width: 32px;
    height: 22px;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--wui-color-blue-100);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-002);
    border-radius: 999px;
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color;
  }

  span:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
    background-color: var(--wui-color-inverse-100);
    transition: transform var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    will-change: transform;
    border-radius: 50%;
  }

  input:checked + span {
    border-color: var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-blue-100);
  }

  input:not(:checked) + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }
`;var sn=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let $t=class extends P{constructor(){super(...arguments),this.inputElementRef=en(),this.checked=void 0}render(){return w`
      <label>
        <input
          ${tn(this.inputElementRef)}
          type="checkbox"
          ?checked=${Me(this.checked)}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){var e;this.dispatchEvent(new CustomEvent("switchChange",{detail:(e=this.inputElementRef.value)==null?void 0:e.checked,bubbles:!0,composed:!0}))}};$t.styles=[O,D,yn,lo];sn([u({type:Boolean})],$t.prototype,"checked",void 0);$t=sn([p("wui-switch")],$t);const co=R`
  :host {
    height: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: var(--wui-spacing-1xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;var an=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let St=class extends P{constructor(){super(...arguments),this.checked=void 0}render(){return w`
      <button>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-switch ?checked=${Me(this.checked)}></wui-switch>
      </button>
    `}};St.styles=[O,D,co];an([u({type:Boolean})],St.prototype,"checked",void 0);St=an([p("wui-certified-switch")],St);const uo=R`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }

    button:active:enabled {
      background-color: var(--wui-color-fg-225);
    }
  }
`;var rn=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let It=class extends P{constructor(){super(...arguments),this.icon="copy"}render(){return w`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};It.styles=[O,D,uo];rn([u()],It.prototype,"icon",void 0);It=rn([p("wui-input-element")],It);const po=R`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var ho=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let ci=class extends P{constructor(){super(...arguments),this.inputComponentRef=en()}render(){return w`
      <wui-input-text
        ${tn(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const e=this.inputComponentRef.value,t=e==null?void 0:e.inputElementRef.value;t&&(t.value="",t.focus(),t.dispatchEvent(new Event("input")))}};ci.styles=[O,po];ci=ho([p("wui-search-bar")],ci);const wo=R`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-color-gray-glass-010);
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;var ln=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let At=class extends P{constructor(){super(...arguments),this.type="wallet"}render(){return w`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?w` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${kn}`:w`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};At.styles=[O,D,wo];ln([u()],At.prototype,"type",void 0);At=ln([p("wui-card-select-loader")],At);const fo=R`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var le=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let X=class extends P{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&H.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&H.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&H.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&H.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&H.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&H.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&H.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&H.getSpacingStyles(this.margin,3)};
    `,w`<slot></slot>`}};X.styles=[O,fo];le([u()],X.prototype,"gridTemplateRows",void 0);le([u()],X.prototype,"gridTemplateColumns",void 0);le([u()],X.prototype,"justifyItems",void 0);le([u()],X.prototype,"alignItems",void 0);le([u()],X.prototype,"justifyContent",void 0);le([u()],X.prototype,"alignContent",void 0);le([u()],X.prototype,"columnGap",void 0);le([u()],X.prototype,"rowGap",void 0);le([u()],X.prototype,"gap",void 0);le([u()],X.prototype,"padding",void 0);le([u()],X.prototype,"margin",void 0);X=le([p("wui-grid")],X);const mo=T`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-s) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  button:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;var gt=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let De=class extends y{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.wallet=void 0,this.observer=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting?(this.visible=!0,this.fetchImageSrc()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){var t,n;const e=((t=this.wallet)==null?void 0:t.badge_type)==="certified";return l`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="3xs">
          <wui-text
            variant="tiny-500"
            color="inherit"
            class=${h(e?"certified":void 0)}
            >${(n=this.wallet)==null?void 0:n.name}</wui-text
          >
          ${e?l`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){var e,t;return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():l`
      <wui-wallet-image
        size="md"
        imageSrc=${h(this.imageSrc)}
        name=${(e=this.wallet)==null?void 0:e.name}
        .installed=${(t=this.wallet)==null?void 0:t.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return l`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=S.getWalletImage(this.wallet),!this.imageSrc&&(this.imageLoading=!0,this.imageSrc=await S.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}};De.styles=mo;gt([c()],De.prototype,"visible",void 0);gt([c()],De.prototype,"imageSrc",void 0);gt([c()],De.prototype,"imageLoading",void 0);gt([C()],De.prototype,"wallet",void 0);De=gt([p("w3m-all-wallets-list-item")],De);const bo=T`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var Ze=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};const Mi="local-paginator";let Ae=class extends y{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!_.state.wallets.length,this.wallets=_.state.wallets,this.recommended=_.state.recommended,this.featured=_.state.featured,this.filteredWallets=_.state.filteredWallets,this.unsubscribe.push(_.subscribeKey("wallets",e=>this.wallets=e),_.subscribeKey("recommended",e=>this.recommended=e),_.subscribeKey("featured",e=>this.featured=e),_.subscribeKey("filteredWallets",e=>this.filteredWallets=e))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var e;this.unsubscribe.forEach(t=>t()),(e=this.paginationObserver)==null||e.disconnect()}render(){return l`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var t;this.loading=!0;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("wui-grid");e&&(await _.fetchWalletsByPage({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map(()=>l`
        <wui-card-select-loader type="wallet" id=${h(t)}></wui-card-select-loader>
      `)}getWallets(){var o;const e=[...this.featured,...this.recommended];((o=this.filteredWallets)==null?void 0:o.length)>0?e.push(...this.filteredWallets):e.push(...this.wallets);const t=b.uniqueBy(e,"id"),n=Pe.markWalletsAsInstalled(t);return Pe.markWalletsWithDisplayIndex(n)}walletsTemplate(){return this.getWallets().map(t=>l`
        <w3m-all-wallets-list-item
          @click=${()=>this.onConnectWallet(t)}
          .wallet=${t}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){const{wallets:e,recommended:t,featured:n,count:o}=_.state,i=window.innerWidth<352?3:4,s=e.length+t.length;let g=Math.ceil(s/i)*i-s+i;return g-=e.length?n.length%i:0,o===0&&n.length>0?null:o===0||[...n,...e,...t].length<o?this.shimmerTemplate(g,Mi):null}createPaginationObserver(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector(`#${Mi}`);e&&(this.paginationObserver=new IntersectionObserver(([n])=>{if(n!=null&&n.isIntersecting&&!this.loading){const{page:o,count:i,wallets:s}=_.state;s.length<i&&_.fetchWalletsByPage({page:o+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){m.selectWalletConnector(e)}};Ae.styles=bo;Ze([c()],Ae.prototype,"loading",void 0);Ze([c()],Ae.prototype,"wallets",void 0);Ze([c()],Ae.prototype,"recommended",void 0);Ze([c()],Ae.prototype,"featured",void 0);Ze([c()],Ae.prototype,"filteredWallets",void 0);Ae=Ze([p("w3m-all-wallets-list")],Ae);const go=T`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;var Ft=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let He=class extends y{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?l`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){(this.query.trim()!==this.prevQuery.trim()||this.badge!==this.prevBadge)&&(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await _.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){const{search:e}=_.state,t=Pe.markWalletsAsInstalled(e);return e.length?l`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","s","s","s"]}
        rowGap="l"
        columnGap="xs"
        justifyContent="space-between"
      >
        ${t.map(n=>l`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(n)}
              .wallet=${n}
              data-testid="wallet-search-item-${n.id}"
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:l`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="s"
          flexDirection="column"
        >
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="fg-200" variant="paragraph-500">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(e){m.selectWalletConnector(e)}};He.styles=go;Ft([c()],He.prototype,"loading",void 0);Ft([C()],He.prototype,"query",void 0);Ft([C()],He.prototype,"badge",void 0);He=Ft([p("w3m-all-wallets-search")],He);var vi=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let kt=class extends y{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=b.debounce(e=>{this.search=e})}render(){const e=this.search.length>=2;return l`
      <wui-flex .padding=${["0","s","s","s"]} gap="xs">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge}
          @click=${this.onClick.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e||this.badge?l`<w3m-all-wallets-search
            query=${this.search}
            badge=${h(this.badge)}
          ></w3m-all-wallets-search>`:l`<w3m-all-wallets-list badge=${h(this.badge)}></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onClick(){if(this.badge==="certified"){this.badge=void 0;return}this.badge="certified",N.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})}qrButtonTemplate(){return b.isMobile()?l`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){f.push("ConnectingWalletConnect")}};vi([c()],kt.prototype,"search",void 0);vi([c()],kt.prototype,"badge",void 0);kt=vi([p("w3m-all-wallets-view")],kt);const xo=R`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 16.5px var(--wui-spacing-l) 16.5px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
    justify-content: center;
    align-items: center;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`;var Vt=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let qe=class extends P{constructor(){super(...arguments),this.text="",this.disabled=!1,this.tabIdx=void 0}render(){return w`
      <button ?disabled=${this.disabled} tabindex=${Me(this.tabIdx)}>
        <wui-text align="center" variant="paragraph-500" color="inherit">${this.text}</wui-text>
      </button>
    `}};qe.styles=[O,D,xo];Vt([u()],qe.prototype,"text",void 0);Vt([u({type:Boolean})],qe.prototype,"disabled",void 0);Vt([u()],qe.prototype,"tabIdx",void 0);qe=Vt([p("wui-list-button")],qe);const vo=T`
  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var Je=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let ke=class extends y{constructor(){super(),this.unsubscribe=[],this.formRef=Rn(),this.email="",this.loading=!1,this.error="",this.remoteFeatures=v.state.remoteFeatures,this.unsubscribe.push(v.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){var e;(e=this.formRef.value)==null||e.addEventListener("keydown",t=>{t.key==="Enter"&&this.onSubmitEmail(t)})}render(){const e=x.hasAnyConnection(I.CONNECTOR_ID.AUTH);return l`
      <form ${On(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          tabIdx=${h(this.tabIdx)}
          ?disabled=${e}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>
      ${this.templateError()}
    `}submitButtonTemplate(){return!this.loading&&this.email.length>3?l`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?l`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}templateError(){return this.error?l`<wui-text variant="tiny-500" color="error-100">${this.error}</wui-text>`:null}onEmailInputChange(e){this.email=e.detail.trim(),this.error=""}async onSubmitEmail(e){var n;if(!I.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(o=>o===d.state.activeChain)){const o=d.getFirstCaipNetworkSupportsAuthConnector();if(o){f.push("SwitchNetwork",{network:o});return}}try{if(this.loading)return;this.loading=!0,e.preventDefault();const o=m.getAuthConnector();if(!o)throw new Error("w3m-email-login-widget: Auth connector not found");const{action:i}=await o.provider.connectEmail({email:this.email});if(W.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),i==="VERIFY_OTP")W.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),f.push("EmailVerifyOtp",{email:this.email});else if(i==="VERIFY_DEVICE")f.push("EmailVerifyDevice",{email:this.email});else if(i==="CONNECT"){const s=(n=this.remoteFeatures)==null?void 0:n.multiWallet;await x.connectExternal(o,d.state.activeChain),s?(f.replace("ProfileWallets"),N.showSuccess("New Wallet Added")):f.replace("Account")}}catch(o){const i=b.parseError(o);i!=null&&i.includes("Invalid email")?this.error="Invalid email. Try again.":N.showError(o)}finally{this.loading=!1}}onFocusEvent(){W.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};ke.styles=vo;Je([C()],ke.prototype,"tabIdx",void 0);Je([c()],ke.prototype,"email",void 0);Je([c()],ke.prototype,"loading",void 0);Je([c()],ke.prototype,"error",void 0);Je([c()],ke.prototype,"remoteFeatures",void 0);ke=Je([p("w3m-email-login-widget")],ke);const yo=R`
  :host {
    display: block;
    width: 100%;
  }

  button {
    width: 100%;
    height: 56px;
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var Kt=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Ye=class extends P{constructor(){super(...arguments),this.logo="google",this.disabled=!1,this.tabIdx=void 0}render(){return w`
      <button ?disabled=${this.disabled} tabindex=${Me(this.tabIdx)}>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};Ye.styles=[O,D,yo];Kt([u()],Ye.prototype,"logo",void 0);Kt([u({type:Boolean})],Ye.prototype,"disabled",void 0);Kt([u()],Ye.prototype,"tabIdx",void 0);Ye=Kt([p("wui-logo-select")],Ye);const Co=T`
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-m)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var Fe=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};const Fi=2,Vi=6;let Ce=class extends y{constructor(){super(),this.unsubscribe=[],this.walletGuide="get-started",this.tabIdx=void 0,this.connectors=m.state.connectors,this.remoteFeatures=v.state.remoteFeatures,this.authConnector=this.connectors.find(e=>e.type==="AUTH"),this.isPwaLoading=!1,this.unsubscribe.push(m.subscribeKey("connectors",e=>{this.connectors=e,this.authConnector=this.connectors.find(t=>t.type==="AUTH")}),v.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}connectedCallback(){super.connectedCallback(),this.handlePwaFrameLoad()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`
      <wui-flex
        class="container"
        flexDirection="column"
        gap="xs"
        data-testid="w3m-social-login-widget"
      >
        ${this.topViewTemplate()}${this.bottomViewTemplate()}
      </wui-flex>
    `}topViewTemplate(){var n;const e=this.walletGuide==="explore";let t=(n=this.remoteFeatures)==null?void 0:n.socials;return!t&&e?(t=q.DEFAULT_SOCIALS,this.renderTopViewContent(t)):t?this.renderTopViewContent(t):null}renderTopViewContent(e){return e.length===2?l` <wui-flex gap="xs">
        ${e.slice(0,Fi).map(t=>l`<wui-logo-select
              data-testid=${`social-selector-${t}`}
              @click=${()=>{this.onSocialClick(t)}}
              logo=${t}
              tabIdx=${h(this.tabIdx)}
              ?disabled=${this.isPwaLoading||this.hasConnection()}
            ></wui-logo-select>`)}
      </wui-flex>`:l` <wui-list-social
      data-testid=${`social-selector-${e[0]}`}
      @click=${()=>{this.onSocialClick(e[0])}}
      logo=${h(e[0])}
      align="center"
      name=${`Continue with ${e[0]}`}
      tabIdx=${h(this.tabIdx)}
      ?disabled=${this.isPwaLoading||this.hasConnection()}
    ></wui-list-social>`}bottomViewTemplate(){var o;let e=(o=this.remoteFeatures)==null?void 0:o.socials;const t=this.walletGuide==="explore";return(!this.authConnector||!e||e.length===0)&&t&&(e=q.DEFAULT_SOCIALS),!e||e.length<=Fi?null:e&&e.length>Vi?l`<wui-flex gap="xs">
        ${e.slice(1,Vi-1).map(i=>l`<wui-logo-select
              data-testid=${`social-selector-${i}`}
              @click=${()=>{this.onSocialClick(i)}}
              logo=${i}
              tabIdx=${h(this.tabIdx)}
              ?focusable=${this.tabIdx!==void 0&&this.tabIdx>=0}
              ?disabled=${this.isPwaLoading||this.hasConnection()}
            ></wui-logo-select>`)}
        <wui-logo-select
          logo="more"
          tabIdx=${h(this.tabIdx)}
          @click=${this.onMoreSocialsClick.bind(this)}
          ?disabled=${this.isPwaLoading||this.hasConnection()}
          data-testid="social-selector-more"
        ></wui-logo-select>
      </wui-flex>`:e?l`<wui-flex gap="xs">
      ${e.slice(1,e.length).map(i=>l`<wui-logo-select
            data-testid=${`social-selector-${i}`}
            @click=${()=>{this.onSocialClick(i)}}
            logo=${i}
            tabIdx=${h(this.tabIdx)}
            ?focusable=${this.tabIdx!==void 0&&this.tabIdx>=0}
            ?disabled=${this.isPwaLoading||this.hasConnection()}
          ></wui-logo-select>`)}
    </wui-flex>`:null}onMoreSocialsClick(){f.push("ConnectSocials")}async onSocialClick(e){if(!I.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(n=>n===d.state.activeChain)){const n=d.getFirstCaipNetworkSupportsAuthConnector();if(n){f.push("SwitchNetwork",{network:n});return}}e&&await Pn(e)}async handlePwaFrameLoad(){var e;if(b.isPWA()){this.isPwaLoading=!0;try{((e=this.authConnector)==null?void 0:e.provider)instanceof Cn&&await this.authConnector.provider.init()}catch(t){$n.open({displayMessage:"Error loading embedded wallet in PWA",debugMessage:t.message},"error")}finally{this.isPwaLoading=!1}}}hasConnection(){return x.hasAnyConnection(I.CONNECTOR_ID.AUTH)}};Ce.styles=Co;Fe([C()],Ce.prototype,"walletGuide",void 0);Fe([C()],Ce.prototype,"tabIdx",void 0);Fe([c()],Ce.prototype,"connectors",void 0);Fe([c()],Ce.prototype,"remoteFeatures",void 0);Fe([c()],Ce.prototype,"authConnector",void 0);Fe([c()],Ce.prototype,"isPwaLoading",void 0);Ce=Fe([p("w3m-social-login-widget")],Ce);const $o=T`
  wui-flex {
    width: 100%;
  }

  .wallet-guide {
    width: 100%;
  }

  .chip-box {
    width: fit-content;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }
`;var yi=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let lt=class extends y{constructor(){super(...arguments),this.walletGuide="get-started"}render(){return this.walletGuide==="explore"?l`<wui-flex
          class="wallet-guide"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          rowGap="xs"
          data-testid="w3m-wallet-guide-explore"
        >
          <wui-text variant="small-400" color="fg-200" align="center">
            Looking for a self-custody wallet?
          </wui-text>

          <wui-flex class="chip-box">
            <wui-chip
              imageIcon="walletConnectLightBrown"
              icon="externalLink"
              variant="transparent"
              href="https://walletguide.walletconnect.network"
              title="Find one on WalletGuide"
            ></wui-chip>
          </wui-flex>
        </wui-flex>`:l`<wui-flex
          columnGap="4xs"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          .padding=${["s","0","s","0"]}
        >
          <wui-text variant="small-400" class="title" color="fg-200"
            >Haven't got a wallet?</wui-text
          >
          <wui-link
            data-testid="w3m-wallet-guide-get-started"
            color="blue-100"
            class="get-started-link"
            @click=${this.onGetStarted}
            tabIdx=${h(this.tabIdx)}
          >
            Get started
          </wui-link>
        </wui-flex>`}onGetStarted(){f.push("Create")}};lt.styles=$o;yi([C()],lt.prototype,"tabIdx",void 0);yi([C()],lt.prototype,"walletGuide",void 0);lt=yi([p("w3m-wallet-guide")],lt);const So=R`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;var cn=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};const ii=4;let Wt=class extends P{constructor(){super(...arguments),this.walletImages=[]}render(){const e=this.walletImages.length<ii;return w`${this.walletImages.slice(0,ii).map(({src:t,walletName:n})=>w`
            <wui-wallet-image
              size="inherit"
              imageSrc=${t}
              name=${Me(n)}
            ></wui-wallet-image>
          `)}
      ${e?[...Array(ii-this.walletImages.length)].map(()=>w` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};Wt.styles=[O,So];cn([u({type:Array})],Wt.prototype,"walletImages",void 0);Wt=cn([p("wui-all-wallets-image")],Wt);const Io=R`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }
`;var ee=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let F=class extends P{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.tabIdx=void 0,this.installed=!1,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100"}render(){return w`
      <button ?disabled=${this.disabled} tabindex=${Me(this.tabIdx)}>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?w` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?w` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?w`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?w`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.loading?w`<wui-loading-spinner
        size="lg"
        color=${this.loadingSpinnerColor}
      ></wui-loading-spinner>`:this.tagLabel&&this.tagVariant?w`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?w`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};F.styles=[O,D,Io];ee([u({type:Array})],F.prototype,"walletImages",void 0);ee([u()],F.prototype,"imageSrc",void 0);ee([u()],F.prototype,"name",void 0);ee([u()],F.prototype,"tagLabel",void 0);ee([u()],F.prototype,"tagVariant",void 0);ee([u()],F.prototype,"icon",void 0);ee([u()],F.prototype,"walletIcon",void 0);ee([u()],F.prototype,"tabIdx",void 0);ee([u({type:Boolean})],F.prototype,"installed",void 0);ee([u({type:Boolean})],F.prototype,"disabled",void 0);ee([u({type:Boolean})],F.prototype,"showAllWallets",void 0);ee([u({type:Boolean})],F.prototype,"loading",void 0);ee([u({type:String})],F.prototype,"loadingSpinnerColor",void 0);F=ee([p("wui-list-wallet")],F);var et=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Le=class extends y{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=m.state.connectors,this.count=_.state.count,this.filteredCount=_.state.filteredWallets.length,this.isFetchingRecommendedWallets=_.state.isFetchingRecommendedWallets,this.unsubscribe.push(m.subscribeKey("connectors",e=>this.connectors=e),_.subscribeKey("count",e=>this.count=e),_.subscribeKey("filteredWallets",e=>this.filteredCount=e.length),_.subscribeKey("isFetchingRecommendedWallets",e=>this.isFetchingRecommendedWallets=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.find(A=>A.id==="walletConnect"),{allWallets:t}=v.state;if(!e||t==="HIDE"||t==="ONLY_MOBILE"&&!b.isMobile())return null;const n=_.state.featured.length,o=this.count+n,i=o<10?o:Math.floor(o/10)*10,s=this.filteredCount>0?this.filteredCount:i;let r=`${s}`;this.filteredCount>0?r=`${this.filteredCount}`:s<o&&(r=`${s}+`);const g=x.hasAnyConnection(I.CONNECTOR_ID.WALLET_CONNECT);return l`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${r}
        tagVariant="shade"
        data-testid="all-wallets"
        tabIdx=${h(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        loadingSpinnerColor=${this.isFetchingRecommendedWallets?"fg-300":"accent-100"}
        ?disabled=${g}
      ></wui-list-wallet>
    `}onAllWallets(){W.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),f.push("AllWallets")}};et([C()],Le.prototype,"tabIdx",void 0);et([c()],Le.prototype,"connectors",void 0);et([c()],Le.prototype,"count",void 0);et([c()],Le.prototype,"filteredCount",void 0);et([c()],Le.prototype,"isFetchingRecommendedWallets",void 0);Le=et([p("w3m-all-wallets-widget")],Le);var Gt=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let ct=class extends y{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=m.state.connectors,this.connections=x.state.connections,this.unsubscribe.push(m.subscribeKey("connectors",e=>this.connectors=e),x.subscribeKey("connections",e=>this.connections=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.filter(t=>t.type==="ANNOUNCED");return e!=null&&e.length?l`
      <wui-flex flexDirection="column" gap="xs">
        ${e.filter(Oe.showConnector).map(t=>{const o=(this.connections.get(t.chain)??[]).some(i=>te.isLowerCaseMatch(i.connectorId,t.id));return l`
            <wui-list-wallet
              imageSrc=${h(S.getConnectorImage(t))}
              name=${t.name??"Unknown"}
              @click=${()=>this.onConnector(t)}
              tagVariant=${o?"shade":"success"}
              tagLabel=${o?"connected":"installed"}
              data-testid=${`wallet-selector-${t.id}`}
              .installed=${!0}
              tabIdx=${h(this.tabIdx)}
            >
            </wui-list-wallet>
          `})}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){e.id==="walletConnect"?b.isMobile()?f.push("AllWallets"):f.push("ConnectingWalletConnect"):f.push("ConnectingExternal",{connector:e})}};Gt([C()],ct.prototype,"tabIdx",void 0);Gt([c()],ct.prototype,"connectors",void 0);Gt([c()],ct.prototype,"connections",void 0);ct=Gt([p("w3m-connect-announced-widget")],ct);var Ht=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let ut=class extends y{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=m.state.connectors,this.loading=!1,this.unsubscribe.push(m.subscribeKey("connectors",e=>this.connectors=e)),b.isTelegram()&&b.isIos()&&(this.loading=!x.state.wcUri,this.unsubscribe.push(x.subscribeKey("wcUri",e=>this.loading=!e)))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{customWallets:e}=v.state;if(!(e!=null&&e.length))return this.style.cssText="display: none",null;const t=this.filterOutDuplicateWallets(e),n=x.hasAnyConnection(I.CONNECTOR_ID.WALLET_CONNECT);return l`<wui-flex flexDirection="column" gap="xs">
      ${t.map(o=>l`
          <wui-list-wallet
            imageSrc=${h(S.getWalletImage(o))}
            name=${o.name??"Unknown"}
            @click=${()=>this.onConnectWallet(o)}
            data-testid=${`wallet-selector-${o.id}`}
            tabIdx=${h(this.tabIdx)}
            ?loading=${this.loading}
            ?disabled=${n}
          >
          </wui-list-wallet>
        `)}
    </wui-flex>`}filterOutDuplicateWallets(e){const t=de.getRecentWallets(),n=this.connectors.map(r=>{var g;return(g=r.info)==null?void 0:g.rdns}).filter(Boolean),o=t.map(r=>r.rdns).filter(Boolean),i=n.concat(o);if(i.includes("io.metamask.mobile")&&b.isMobile()){const r=i.indexOf("io.metamask.mobile");i[r]="io.metamask"}return e.filter(r=>!i.includes(String(r==null?void 0:r.rdns)))}onConnectWallet(e){this.loading||f.push("ConnectingWalletConnect",{wallet:e})}};Ht([C()],ut.prototype,"tabIdx",void 0);Ht([c()],ut.prototype,"connectors",void 0);Ht([c()],ut.prototype,"loading",void 0);ut=Ht([p("w3m-connect-custom-widget")],ut);var Ci=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Et=class extends y{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=m.state.connectors,this.unsubscribe.push(m.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const n=this.connectors.filter(i=>i.type==="EXTERNAL").filter(Oe.showConnector).filter(i=>i.id!==I.CONNECTOR_ID.COINBASE_SDK);if(!(n!=null&&n.length))return this.style.cssText="display: none",null;const o=x.hasAnyConnection(I.CONNECTOR_ID.WALLET_CONNECT);return l`
      <wui-flex flexDirection="column" gap="xs">
        ${n.map(i=>l`
            <wui-list-wallet
              imageSrc=${h(S.getConnectorImage(i))}
              .installed=${!0}
              name=${i.name??"Unknown"}
              data-testid=${`wallet-selector-external-${i.id}`}
              @click=${()=>this.onConnector(i)}
              tabIdx=${h(this.tabIdx)}
              ?disabled=${o}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnector(e){f.push("ConnectingExternal",{connector:e})}};Ci([C()],Et.prototype,"tabIdx",void 0);Ci([c()],Et.prototype,"connectors",void 0);Et=Ci([p("w3m-connect-external-widget")],Et);var $i=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let _t=class extends y{constructor(){super(...arguments),this.tabIdx=void 0,this.wallets=[]}render(){if(!this.wallets.length)return this.style.cssText="display: none",null;const e=x.hasAnyConnection(I.CONNECTOR_ID.WALLET_CONNECT);return l`
      <wui-flex flexDirection="column" gap="xs">
        ${this.wallets.map(t=>l`
            <wui-list-wallet
              data-testid=${`wallet-selector-featured-${t.id}`}
              imageSrc=${h(S.getWalletImage(t))}
              name=${t.name??"Unknown"}
              @click=${()=>this.onConnectWallet(t)}
              tabIdx=${h(this.tabIdx)}
              ?disabled=${e}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnectWallet(e){m.selectWalletConnector(e)}};$i([C()],_t.prototype,"tabIdx",void 0);$i([C()],_t.prototype,"wallets",void 0);_t=$i([p("w3m-connect-featured-widget")],_t);var qt=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let dt=class extends y{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=[],this.connections=x.state.connections,this.unsubscribe.push(x.subscribeKey("connections",e=>this.connections=e))}render(){const e=this.connectors.filter(Oe.showConnector);return e.length===0?(this.style.cssText="display: none",null):l`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(t=>{const o=(this.connections.get(t.chain)??[]).some(i=>te.isLowerCaseMatch(i.connectorId,t.id));return l`
            <wui-list-wallet
              imageSrc=${h(S.getConnectorImage(t))}
              .installed=${!0}
              name=${t.name??"Unknown"}
              tagVariant=${o?"shade":"success"}
              tagLabel=${o?"connected":"installed"}
              data-testid=${`wallet-selector-${t.id}`}
              @click=${()=>this.onConnector(t)}
              tabIdx=${h(this.tabIdx)}
            >
            </wui-list-wallet>
          `})}
      </wui-flex>
    `}onConnector(e){m.setActiveConnector(e),f.push("ConnectingExternal",{connector:e})}};qt([C()],dt.prototype,"tabIdx",void 0);qt([C()],dt.prototype,"connectors",void 0);qt([c()],dt.prototype,"connections",void 0);dt=qt([p("w3m-connect-injected-widget")],dt);var Si=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Tt=class extends y{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=m.state.connectors,this.unsubscribe.push(m.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.filter(t=>t.type==="MULTI_CHAIN"&&t.name!=="WalletConnect");return e!=null&&e.length?l`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(t=>l`
            <wui-list-wallet
              imageSrc=${h(S.getConnectorImage(t))}
              .installed=${!0}
              name=${t.name??"Unknown"}
              tagVariant="shade"
              tagLabel="multichain"
              data-testid=${`wallet-selector-${t.id}`}
              @click=${()=>this.onConnector(t)}
              tabIdx=${h(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){m.setActiveConnector(e),f.push("ConnectingMultiChain")}};Si([C()],Tt.prototype,"tabIdx",void 0);Si([c()],Tt.prototype,"connectors",void 0);Tt=Si([p("w3m-connect-multi-chain-widget")],Tt);var Yt=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let pt=class extends y{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=m.state.connectors,this.loading=!1,this.unsubscribe.push(m.subscribeKey("connectors",e=>this.connectors=e)),b.isTelegram()&&b.isIos()&&(this.loading=!x.state.wcUri,this.unsubscribe.push(x.subscribeKey("wcUri",e=>this.loading=!e)))}render(){const t=de.getRecentWallets().filter(o=>!Pe.isExcluded(o)).filter(o=>!this.hasWalletConnector(o)).filter(o=>this.isWalletCompatibleWithCurrentChain(o));if(!t.length)return this.style.cssText="display: none",null;const n=x.hasAnyConnection(I.CONNECTOR_ID.WALLET_CONNECT);return l`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map(o=>l`
            <wui-list-wallet
              imageSrc=${h(S.getWalletImage(o))}
              name=${o.name??"Unknown"}
              @click=${()=>this.onConnectWallet(o)}
              tagLabel="recent"
              tagVariant="shade"
              tabIdx=${h(this.tabIdx)}
              ?loading=${this.loading}
              ?disabled=${n}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnectWallet(e){this.loading||m.selectWalletConnector(e)}hasWalletConnector(e){return this.connectors.some(t=>t.id===e.id||t.name===e.name)}isWalletCompatibleWithCurrentChain(e){const t=d.state.activeChain;return t&&e.chains?e.chains.some(n=>{const o=n.split(":")[0];return t===o}):!0}};Yt([C()],pt.prototype,"tabIdx",void 0);Yt([c()],pt.prototype,"connectors",void 0);Yt([c()],pt.prototype,"loading",void 0);pt=Yt([p("w3m-connect-recent-widget")],pt);var Xt=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let ht=class extends y{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.wallets=[],this.loading=!1,b.isTelegram()&&b.isIos()&&(this.loading=!x.state.wcUri,this.unsubscribe.push(x.subscribeKey("wcUri",e=>this.loading=!e)))}render(){const{connectors:e}=m.state,{customWallets:t,featuredWalletIds:n}=v.state,o=de.getRecentWallets(),i=e.find(E=>E.id==="walletConnect"),r=e.filter(E=>E.type==="INJECTED"||E.type==="ANNOUNCED"||E.type==="MULTI_CHAIN").filter(E=>E.name!=="Browser Wallet");if(!i)return null;if(n||t||!this.wallets.length)return this.style.cssText="display: none",null;const g=r.length+o.length,A=Math.max(0,2-g),k=Pe.filterOutDuplicateWallets(this.wallets).slice(0,A);if(!k.length)return this.style.cssText="display: none",null;const B=x.hasAnyConnection(I.CONNECTOR_ID.WALLET_CONNECT);return l`
      <wui-flex flexDirection="column" gap="xs">
        ${k.map(E=>l`
            <wui-list-wallet
              imageSrc=${h(S.getWalletImage(E))}
              name=${(E==null?void 0:E.name)??"Unknown"}
              @click=${()=>this.onConnectWallet(E)}
              tabIdx=${h(this.tabIdx)}
              ?loading=${this.loading}
              ?disabled=${B}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnectWallet(e){if(this.loading)return;const t=m.getConnector({id:e.id,rdns:e.rdns});t?f.push("ConnectingExternal",{connector:t}):f.push("ConnectingWalletConnect",{wallet:e})}};Xt([C()],ht.prototype,"tabIdx",void 0);Xt([C()],ht.prototype,"wallets",void 0);Xt([c()],ht.prototype,"loading",void 0);ht=Xt([p("w3m-connect-recommended-widget")],ht);var Qt=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let wt=class extends y{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=m.state.connectors,this.connectorImages=Re.state.connectorImages,this.unsubscribe.push(m.subscribeKey("connectors",e=>this.connectors=e),Re.subscribeKey("connectorImages",e=>this.connectorImages=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(b.isMobile())return this.style.cssText="display: none",null;const e=this.connectors.find(o=>o.id==="walletConnect");if(!e)return this.style.cssText="display: none",null;const t=e.imageUrl||this.connectorImages[(e==null?void 0:e.imageId)??""],n=x.hasAnyConnection(I.CONNECTOR_ID.WALLET_CONNECT);return l`
      <wui-list-wallet
        imageSrc=${h(t)}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
        tabIdx=${h(this.tabIdx)}
        data-testid="wallet-selector-walletconnect"
        ?disabled=${n}
      >
      </wui-list-wallet>
    `}onConnector(e){m.setActiveConnector(e),f.push("ConnectingWalletConnect")}};Qt([C()],wt.prototype,"tabIdx",void 0);Qt([c()],wt.prototype,"connectors",void 0);Qt([c()],wt.prototype,"connectorImages",void 0);wt=Qt([p("w3m-connect-walletconnect-widget")],wt);const Ao=T`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var xt=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let je=class extends y{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=m.state.connectors,this.recommended=_.state.recommended,this.featured=_.state.featured,this.unsubscribe.push(m.subscribeKey("connectors",e=>this.connectors=e),_.subscribeKey("recommended",e=>this.recommended=e),_.subscribeKey("featured",e=>this.featured=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`
      <wui-flex flexDirection="column" gap="xs"> ${this.connectorListTemplate()} </wui-flex>
    `}connectorListTemplate(){const{custom:e,recent:t,announced:n,injected:o,multiChain:i,recommended:s,featured:r,external:g}=Oe.getConnectorsByType(this.connectors,this.recommended,this.featured);return Oe.getConnectorTypeOrder({custom:e,recent:t,announced:n,injected:o,multiChain:i,recommended:s,featured:r,external:g}).map(k=>{switch(k){case"injected":return l`
            ${i.length?l`<w3m-connect-multi-chain-widget
                  tabIdx=${h(this.tabIdx)}
                ></w3m-connect-multi-chain-widget>`:null}
            ${n.length?l`<w3m-connect-announced-widget
                  tabIdx=${h(this.tabIdx)}
                ></w3m-connect-announced-widget>`:null}
            ${o.length?l`<w3m-connect-injected-widget
                  .connectors=${o}
                  tabIdx=${h(this.tabIdx)}
                ></w3m-connect-injected-widget>`:null}
          `;case"walletConnect":return l`<w3m-connect-walletconnect-widget
            tabIdx=${h(this.tabIdx)}
          ></w3m-connect-walletconnect-widget>`;case"recent":return l`<w3m-connect-recent-widget
            tabIdx=${h(this.tabIdx)}
          ></w3m-connect-recent-widget>`;case"featured":return l`<w3m-connect-featured-widget
            .wallets=${r}
            tabIdx=${h(this.tabIdx)}
          ></w3m-connect-featured-widget>`;case"custom":return l`<w3m-connect-custom-widget
            tabIdx=${h(this.tabIdx)}
          ></w3m-connect-custom-widget>`;case"external":return l`<w3m-connect-external-widget
            tabIdx=${h(this.tabIdx)}
          ></w3m-connect-external-widget>`;case"recommended":return l`<w3m-connect-recommended-widget
            .wallets=${s}
            tabIdx=${h(this.tabIdx)}
          ></w3m-connect-recommended-widget>`;default:return console.warn(`Unknown connector type: ${k}`),null}})}};je.styles=Ao;xt([C()],je.prototype,"tabIdx",void 0);xt([c()],je.prototype,"connectors",void 0);xt([c()],je.prototype,"recommended",void 0);xt([c()],je.prototype,"featured",void 0);je=xt([p("w3m-connector-list")],je);var un=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let ui=class extends y{constructor(){super(...arguments),this.tabIdx=void 0}render(){return l`
      <wui-flex flexDirection="column" gap="xs">
        <w3m-connector-list tabIdx=${h(this.tabIdx)}></w3m-connector-list>
        <w3m-all-wallets-widget tabIdx=${h(this.tabIdx)}></w3m-all-wallets-widget>
      </wui-flex>
    `}};un([C()],ui.prototype,"tabIdx",void 0);ui=un([p("w3m-wallet-login-list")],ui);const ko=T`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
    --connect-mask-image: none;
  }

  .connect {
    max-height: clamp(360px, 470px, 80vh);
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    mask-image: var(--connect-mask-image);
  }

  .guide {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  .connect::-webkit-scrollbar {
    display: none;
  }

  .all-wallets {
    flex-flow: column;
  }

  .connect.disabled,
  .guide.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }

  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var ce=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};const Wo=470;let Q=class extends y{constructor(){var e,t;super(),this.unsubscribe=[],this.connectors=m.state.connectors,this.authConnector=this.connectors.find(n=>n.type==="AUTH"),this.features=v.state.features,this.remoteFeatures=v.state.remoteFeatures,this.enableWallets=v.state.enableWallets,this.noAdapters=d.state.noAdapters,this.walletGuide="get-started",this.checked=Ct.state.isLegalCheckboxChecked,this.isEmailEnabled=((e=this.remoteFeatures)==null?void 0:e.email)&&!d.state.noAdapters,this.isSocialEnabled=((t=this.remoteFeatures)==null?void 0:t.socials)&&this.remoteFeatures.socials.length>0&&!d.state.noAdapters,this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors),this.unsubscribe.push(m.subscribeKey("connectors",n=>{this.connectors=n,this.authConnector=this.connectors.find(o=>o.type==="AUTH"),this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors)}),v.subscribeKey("features",n=>{this.features=n}),v.subscribeKey("remoteFeatures",n=>{this.remoteFeatures=n,this.setEmailAndSocialEnableCheck(this.noAdapters,this.remoteFeatures)}),v.subscribeKey("enableWallets",n=>this.enableWallets=n),d.subscribeKey("noAdapters",n=>this.setEmailAndSocialEnableCheck(n,this.remoteFeatures)),Ct.subscribeKey("isLegalCheckboxChecked",n=>this.checked=n))}disconnectedCallback(){var t,n;this.unsubscribe.forEach(o=>o()),(t=this.resizeObserver)==null||t.disconnect();const e=(n=this.shadowRoot)==null?void 0:n.querySelector(".connect");e==null||e.removeEventListener("scroll",this.handleConnectListScroll.bind(this))}firstUpdated(){var t,n;const e=(t=this.shadowRoot)==null?void 0:t.querySelector(".connect");e&&(requestAnimationFrame(this.handleConnectListScroll.bind(this)),e==null||e.addEventListener("scroll",this.handleConnectListScroll.bind(this)),this.resizeObserver=new ResizeObserver(()=>{this.handleConnectListScroll()}),(n=this.resizeObserver)==null||n.observe(e),this.handleConnectListScroll())}render(){var E;const{termsConditionsUrl:e,privacyPolicyUrl:t}=v.state,n=(E=v.state.features)==null?void 0:E.legalCheckbox,s=!!(e||t)&&!!n&&this.walletGuide==="get-started"&&!this.checked,r={connect:!0,disabled:s},g=v.state.enableWalletGuide,A=this.enableWallets,k=this.isSocialEnabled||this.authConnector,B=s?-1:void 0;return l`
      <wui-flex flexDirection="column">
        ${this.legalCheckboxTemplate()}
        <wui-flex
          data-testid="w3m-connect-scroll-view"
          flexDirection="column"
          class=${li(r)}
        >
          <wui-flex
            class="connect-methods"
            flexDirection="column"
            gap="s"
            .padding=${k&&A&&g&&this.walletGuide==="get-started"?["3xs","s","0","s"]:["3xs","s","s","s"]}
          >
            ${this.renderConnectMethod(B)}
          </wui-flex>
        </wui-flex>
        ${this.guideTemplate(s)}
        <w3m-legal-footer></w3m-legal-footer>
      </wui-flex>
    `}setEmailAndSocialEnableCheck(e,t){this.isEmailEnabled=(t==null?void 0:t.email)&&!e,this.isSocialEnabled=(t==null?void 0:t.socials)&&t.socials.length>0&&!e,this.remoteFeatures=t,this.noAdapters=e}checkIfAuthEnabled(e){const t=e.filter(o=>o.type===Sn.CONNECTOR_TYPE_AUTH).map(o=>o.chain);return I.AUTH_CONNECTOR_SUPPORTED_CHAINS.some(o=>t.includes(o))}renderConnectMethod(e){const t=Pe.getConnectOrderMethod(this.features,this.connectors);return l`${t.map((n,o)=>{switch(n){case"email":return l`${this.emailTemplate(e)} ${this.separatorTemplate(o,"email")}`;case"social":return l`${this.socialListTemplate(e)}
          ${this.separatorTemplate(o,"social")}`;case"wallet":return l`${this.walletListTemplate(e)}
          ${this.separatorTemplate(o,"wallet")}`;default:return null}})}`}checkMethodEnabled(e){switch(e){case"wallet":return this.enableWallets;case"social":return this.isSocialEnabled&&this.isAuthEnabled;case"email":return this.isEmailEnabled&&this.isAuthEnabled;default:return null}}checkIsThereNextMethod(e){const n=Pe.getConnectOrderMethod(this.features,this.connectors)[e+1];return n?this.checkMethodEnabled(n)?n:this.checkIsThereNextMethod(e+1):void 0}separatorTemplate(e,t){const n=this.checkIsThereNextMethod(e),o=this.walletGuide==="explore";switch(t){case"wallet":return this.enableWallets&&n&&!o?l`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null;case"email":{const i=n==="social";return this.isAuthEnabled&&this.isEmailEnabled&&!i&&n?l`<wui-separator
              data-testid="w3m-email-login-or-separator"
              text="or"
            ></wui-separator>`:null}case"social":{const i=n==="email";return this.isAuthEnabled&&this.isSocialEnabled&&!i&&n?l`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null}default:return null}}emailTemplate(e){return!this.isEmailEnabled||!this.isAuthEnabled?null:l`<w3m-email-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${h(e)}
    ></w3m-email-login-widget>`}socialListTemplate(e){return!this.isSocialEnabled||!this.isAuthEnabled?null:l`<w3m-social-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${h(e)}
    ></w3m-social-login-widget>`}walletListTemplate(e){var r,g;const t=this.enableWallets,n=((r=this.features)==null?void 0:r.emailShowWallets)===!1,o=(g=this.features)==null?void 0:g.collapseWallets,i=n||o;return!t||(b.isTelegram()&&(b.isSafari()||b.isIos())&&x.connectWalletConnect().catch(A=>({})),this.walletGuide==="explore")?null:this.isAuthEnabled&&(this.isEmailEnabled||this.isSocialEnabled)&&i?l`<wui-list-button
        data-testid="w3m-collapse-wallets-button"
        tabIdx=${h(e)}
        @click=${this.onContinueWalletClick.bind(this)}
        text="Continue with a wallet"
      ></wui-list-button>`:l`<w3m-wallet-login-list tabIdx=${h(e)}></w3m-wallet-login-list>`}guideTemplate(e=!1){if(!v.state.enableWalletGuide)return null;const n={guide:!0,disabled:e},o=e?-1:void 0;return!this.authConnector&&!this.isSocialEnabled?null:l`
      ${this.walletGuide==="explore"&&!d.state.noAdapters?l`<wui-separator data-testid="wui-separator" id="explore" text="or"></wui-separator>`:null}
      <w3m-wallet-guide
        class=${li(n)}
        tabIdx=${h(o)}
        walletGuide=${this.walletGuide}
      ></w3m-wallet-guide>
    `}legalCheckboxTemplate(){return this.walletGuide==="explore"?null:l`<w3m-legal-checkbox data-testid="w3m-legal-checkbox"></w3m-legal-checkbox>`}handleConnectListScroll(){var n;const e=(n=this.shadowRoot)==null?void 0:n.querySelector(".connect");if(!e)return;e.scrollHeight>Wo?(e.style.setProperty("--connect-mask-image",`linear-gradient(
          to bottom,
          rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,
          rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,
          black 40px,
          black calc(100% - 40px),
          rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),
          rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%
        )`),e.style.setProperty("--connect-scroll--top-opacity",yt.interpolate([0,50],[0,1],e.scrollTop).toString()),e.style.setProperty("--connect-scroll--bottom-opacity",yt.interpolate([0,50],[0,1],e.scrollHeight-e.scrollTop-e.offsetHeight).toString())):(e.style.setProperty("--connect-mask-image","none"),e.style.setProperty("--connect-scroll--top-opacity","0"),e.style.setProperty("--connect-scroll--bottom-opacity","0"))}onContinueWalletClick(){f.push("ConnectWallets")}};Q.styles=ko;ce([c()],Q.prototype,"connectors",void 0);ce([c()],Q.prototype,"authConnector",void 0);ce([c()],Q.prototype,"features",void 0);ce([c()],Q.prototype,"remoteFeatures",void 0);ce([c()],Q.prototype,"enableWallets",void 0);ce([c()],Q.prototype,"noAdapters",void 0);ce([C()],Q.prototype,"walletGuide",void 0);ce([c()],Q.prototype,"checked",void 0);ce([c()],Q.prototype,"isEmailEnabled",void 0);ce([c()],Q.prototype,"isSocialEnabled",void 0);ce([c()],Q.prototype,"isAuthEnabled",void 0);Q=ce([p("w3m-connect-view")],Q);const Eo=R`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var Zt=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Xe=class extends P{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return w`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-chip-button size="sm" variant="shade" text=${this.buttonLabel} icon="chevronRight">
        </wui-chip-button>
      </wui-flex>
    `}};Xe.styles=[O,D,Eo];Zt([u({type:Boolean})],Xe.prototype,"disabled",void 0);Zt([u()],Xe.prototype,"label",void 0);Zt([u()],Xe.prototype,"buttonLabel",void 0);Xe=Zt([p("wui-cta-button")],Xe);const _o=T`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var dn=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Nt=class extends y{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:t,play_store:n,chrome_store:o,homepage:i}=this.wallet,s=b.isMobile(),r=b.isIos(),g=b.isAndroid(),A=[t,n,i,o].filter(Boolean).length>1,k=H.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return A&&!s?l`
        <wui-cta-button
          label=${`Don't have ${k}?`}
          buttonLabel="Get"
          @click=${()=>f.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!A&&i?l`
        <wui-cta-button
          label=${`Don't have ${k}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&r?l`
        <wui-cta-button
          label=${`Don't have ${k}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:n&&g?l`
        <wui-cta-button
          label=${`Don't have ${k}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){var e;(e=this.wallet)!=null&&e.app_store&&b.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;(e=this.wallet)!=null&&e.play_store&&b.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;(e=this.wallet)!=null&&e.homepage&&b.openHref(this.wallet.homepage,"_blank")}};Nt.styles=[_o];dn([C({type:Object})],Nt.prototype,"wallet",void 0);Nt=dn([p("w3m-mobile-download-links")],Nt);const To=T`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var me=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};class j extends y{constructor(){var e,t,n,o,i;super(),this.wallet=(e=f.state.data)==null?void 0:e.wallet,this.connector=(t=f.state.data)==null?void 0:t.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=S.getWalletImage(this.wallet)??S.getConnectorImage(this.connector),this.name=((n=this.wallet)==null?void 0:n.name)??((o=this.connector)==null?void 0:o.name)??"Wallet",this.isRetrying=!1,this.uri=x.state.wcUri,this.error=x.state.wcError,this.ready=!1,this.showRetry=!1,this.label=void 0,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(x.subscribeKey("wcUri",s=>{var r;this.uri=s,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,(r=this.onConnect)==null||r.call(this))}),x.subscribeKey("wcError",s=>this.error=s)),(b.isTelegram()||b.isSafari())&&b.isIos()&&x.state.wcUri&&((i=this.onConnect)==null||i.call(this))}firstUpdated(){var e;(e=this.onAutoConnect)==null||e.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),x.setWcError(!1),clearTimeout(this.timeout)}render(){var n;(n=this.onRender)==null||n.call(this),this.onShowRetry();const e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let t="";return this.label?t=this.label:(t=`Continue in ${this.name}`,this.error&&(t="Connection declined")),l`
      <wui-flex
        data-error=${h(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${h(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text
            align="center"
            variant="paragraph-500"
            color=${this.error?"error-100":"fg-100"}
          >
            ${t}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?l`
              <wui-button
                variant="accent"
                size="md"
                ?disabled=${this.isRetrying||this.isLoading}
                @click=${this.onTryAgain.bind(this)}
                data-testid="w3m-connecting-widget-secondary-button"
              >
                <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
                ${this.secondaryBtnLabel}
              </wui-button>
            `:null}
      </wui-flex>

      ${this.isWalletConnect?l`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200" data-testid="wui-link-copy">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){var e;if(this.error&&!this.showRetry){this.showRetry=!0;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("wui-button");t==null||t.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){var e,t;x.setWcError(!1),this.onRetry?(this.isRetrying=!0,(e=this.onRetry)==null||e.call(this)):(t=this.onConnect)==null||t.call(this)}loaderTemplate(){const e=ni.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return l`<wui-loading-thumbnail radius=${t*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(b.copyToClopboard(this.uri),N.showSuccess("Link copied"))}catch{N.showError("Failed to copy")}}}j.styles=To;me([c()],j.prototype,"isRetrying",void 0);me([c()],j.prototype,"uri",void 0);me([c()],j.prototype,"error",void 0);me([c()],j.prototype,"ready",void 0);me([c()],j.prototype,"showRetry",void 0);me([c()],j.prototype,"label",void 0);me([c()],j.prototype,"secondaryBtnLabel",void 0);me([c()],j.prototype,"secondaryLabel",void 0);me([c()],j.prototype,"isLoading",void 0);me([C({type:Boolean})],j.prototype,"isMobile",void 0);me([C()],j.prototype,"onRetry",void 0);var No=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Ki=class extends j{constructor(){var t,n,o,i;if(super(),this.externalViewUnsubscribe=[],this.connectionsByNamespace=x.getConnections((t=this.connector)==null?void 0:t.chain),this.hasMultipleConnections=this.connectionsByNamespace.length>0,this.remoteFeatures=v.state.remoteFeatures,this.currentActiveConnectorId=m.state.activeConnectorIds[(n=this.connector)==null?void 0:n.chain],!this.connector)throw new Error("w3m-connecting-view: No connector provided");const e=(o=this.connector)==null?void 0:o.chain;this.isAlreadyConnected(this.connector)&&(this.secondaryBtnLabel=void 0,this.label=`This account is already linked, change your account in ${this.connector.name}`,this.secondaryLabel=`To link a new account, open ${this.connector.name} and switch to the account you want to link`),W.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:"browser",displayIndex:(i=this.wallet)==null?void 0:i.display_index}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1,this.externalViewUnsubscribe.push(m.subscribeKey("activeConnectorIds",s=>{var A;const r=s[e],g=(A=this.remoteFeatures)==null?void 0:A.multiWallet;r!==this.currentActiveConnectorId&&(this.hasMultipleConnections&&g?(f.replace("ProfileWallets"),N.showSuccess("New Wallet Added")):U.close())}),x.subscribeKey("connections",this.onConnectionsChange.bind(this)))}disconnectedCallback(){this.externalViewUnsubscribe.forEach(e=>e())}async onConnectProxy(){try{if(this.error=!1,this.connector){if(this.isAlreadyConnected(this.connector))return;(this.connector.id!==I.CONNECTOR_ID.COINBASE_SDK||!this.error)&&(await x.connectExternal(this.connector,this.connector.chain),W.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.connector.name||"Unknown"}}))}}catch(e){W.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(e==null?void 0:e.message)??"Unknown"}}),this.error=!0}}onConnectionsChange(e){var t,n;if((t=this.connector)!=null&&t.chain&&e.get(this.connector.chain)&&this.isAlreadyConnected(this.connector)){const o=e.get(this.connector.chain)??[],i=(n=this.remoteFeatures)==null?void 0:n.multiWallet;if(o.length===0)f.replace("Connect");else{const s=Se.getConnectionsByConnectorId(this.connectionsByNamespace,this.connector.id).flatMap(g=>g.accounts),r=Se.getConnectionsByConnectorId(o,this.connector.id).flatMap(g=>g.accounts);r.length===0?this.hasMultipleConnections&&i?(f.replace("ProfileWallets"),N.showSuccess("Wallet deleted")):U.close():!s.every(A=>r.some(k=>te.isLowerCaseMatch(A.address,k.address)))&&i&&f.replace("ProfileWallets")}}}isAlreadyConnected(e){return!!e&&this.connectionsByNamespace.some(t=>te.isLowerCaseMatch(t.connectorId,e.id))}};Ki=No([p("w3m-connecting-external-view")],Ki);const Ro=T`
  wui-flex,
  wui-list-wallet {
    width: 100%;
  }
`;var pn=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Rt=class extends y{constructor(){super(),this.unsubscribe=[],this.activeConnector=m.state.activeConnector,this.unsubscribe.push(m.subscribeKey("activeConnector",e=>this.activeConnector=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var e;return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["m","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image
            size="lg"
            imageSrc=${h(S.getConnectorImage(this.activeConnector))}
          ></wui-wallet-image>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="xs"
          .padding=${["0","s","0","s"]}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            Select Chain for ${(e=this.activeConnector)==null?void 0:e.name}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200"
            >Select which chain to connect to your multi chain wallet</wui-text
          >
        </wui-flex>
        <wui-flex
          flexGrow="1"
          flexDirection="column"
          alignItems="center"
          gap="xs"
          .padding=${["xs","0","xs","0"]}
        >
          ${this.networksTemplate()}
        </wui-flex>
      </wui-flex>
    `}networksTemplate(){var e,t;return(t=(e=this.activeConnector)==null?void 0:e.connectors)==null?void 0:t.map(n=>n.name?l`
            <wui-list-wallet
              imageSrc=${h(S.getChainImage(n.chain))}
              name=${I.CHAIN_NAME_MAP[n.chain]}
              @click=${()=>this.onConnector(n)}
              data-testid="wui-list-chain-${n.chain}"
            ></wui-list-wallet>
          `:null)}onConnector(e){var n,o;const t=(o=(n=this.activeConnector)==null?void 0:n.connectors)==null?void 0:o.find(i=>i.chain===e.chain);if(!t){N.showError("Failed to find connector");return}t.id==="walletConnect"?b.isMobile()?f.push("AllWallets"):f.push("ConnectingWalletConnect"):f.push("ConnectingExternal",{connector:t})}};Rt.styles=Ro;pn([c()],Rt.prototype,"activeConnector",void 0);Rt=pn([p("w3m-connecting-multi-chain-view")],Rt);var Ii=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Ot=class extends y{constructor(){super(...arguments),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.generateTabs();return l`
      <wui-flex justifyContent="center" .padding=${["0","0","l","0"]}>
        <wui-tabs .tabs=${e} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map(t=>t==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:t==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:t==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:t==="web"?{label:"Webapp",icon:"browser",platform:"web"}:t==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:t})=>t),e}onTabChange(e){var n;const t=this.platformTabs[e];t&&((n=this.onSelectPlatfrom)==null||n.call(this,t))}};Ii([C({type:Array})],Ot.prototype,"platforms",void 0);Ii([C()],Ot.prototype,"onSelectPlatfrom",void 0);Ot=Ii([p("w3m-connecting-header")],Ot);var Oo=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Gi=class extends j{constructor(){var e;if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),W.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:(e=this.wallet)==null?void 0:e.display_index}})}async onConnectProxy(){var e;try{this.error=!1;const{connectors:t}=m.state,n=t.find(o=>{var i,s,r;return o.type==="ANNOUNCED"&&((i=o.info)==null?void 0:i.rdns)===((s=this.wallet)==null?void 0:s.rdns)||o.type==="INJECTED"||o.name===((r=this.wallet)==null?void 0:r.name)});if(n)await x.connectExternal(n,n.chain);else throw new Error("w3m-connecting-wc-browser: No connector found");U.close(),W.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:((e=this.wallet)==null?void 0:e.name)||"Unknown"}})}catch(t){W.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(t==null?void 0:t.message)??"Unknown"}}),this.error=!0}}};Gi=Oo([p("w3m-connecting-wc-browser")],Gi);var Po=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Hi=class extends j{constructor(){var e;if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),W.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop",displayIndex:(e=this.wallet)==null?void 0:e.display_index}})}onRenderProxy(){var e;!this.ready&&this.uri&&(this.ready=!0,(e=this.onConnect)==null||e.call(this))}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:t,name:n}=this.wallet,{redirect:o,href:i}=b.formatNativeUrl(t,this.uri);x.setWcLinking({name:n,href:i}),x.setRecentWallet(this.wallet),b.openHref(o,"_blank")}catch{this.error=!0}}};Hi=Po([p("w3m-connecting-wc-desktop")],Hi);var tt=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Be=class extends j{constructor(){var e;if(super(),this.btnLabelTimeout=void 0,this.redirectDeeplink=void 0,this.redirectUniversalLink=void 0,this.target=void 0,this.preferUniversalLinks=v.state.experimental_preferUniversalLinks,this.isLoading=!0,this.onConnect=()=>{var t;if((t=this.wallet)!=null&&t.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:n,link_mode:o,name:i}=this.wallet,{redirect:s,redirectUniversalLink:r,href:g}=b.formatNativeUrl(n,this.uri,o);this.redirectDeeplink=s,this.redirectUniversalLink=r,this.target=b.isIframe()?"_top":"_self",x.setWcLinking({name:i,href:g}),x.setRecentWallet(this.wallet),this.preferUniversalLinks&&this.redirectUniversalLink?b.openHref(this.redirectUniversalLink,this.target):b.openHref(this.redirectDeeplink,this.target)}catch(n){W.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:n instanceof Error?n.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}},!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel="Open",this.secondaryLabel=q.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.onHandleURI(),this.unsubscribe.push(x.subscribeKey("wcUri",()=>{this.onHandleURI()})),W.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile",displayIndex:(e=this.wallet)==null?void 0:e.display_index}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.btnLabelTimeout)}onHandleURI(){var e;this.isLoading=!this.uri,!this.ready&&this.uri&&(this.ready=!0,(e=this.onConnect)==null||e.call(this))}onTryAgain(){var e;x.setWcError(!1),(e=this.onConnect)==null||e.call(this)}};tt([c()],Be.prototype,"redirectDeeplink",void 0);tt([c()],Be.prototype,"redirectUniversalLink",void 0);tt([c()],Be.prototype,"target",void 0);tt([c()],Be.prototype,"preferUniversalLinks",void 0);tt([c()],Be.prototype,"isLoading",void 0);Be=tt([p("w3m-connecting-wc-mobile")],Be);const Do=T`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;var Lo=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let di=class extends j{constructor(){var e,t;super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),W.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:((e=this.wallet)==null?void 0:e.name)??"WalletConnect",platform:"qrcode",displayIndex:(t=this.wallet)==null?void 0:t.display_index}})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.unsubscribe)==null||e.forEach(t=>t()),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","xl","xl","xl"]}
        gap="xl"
      >
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40,t=this.wallet?this.wallet.name:void 0;return x.setWcLinking(void 0),x.setRecentWallet(this.wallet),l` <wui-qr-code
      size=${e}
      theme=${ni.state.themeMode}
      uri=${this.uri}
      imageSrc=${h(S.getWalletImage(this.wallet))}
      color=${h(ni.state.themeVariables["--w3m-qr-color"])}
      alt=${h(t)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return l`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};di.styles=Do;di=Lo([p("w3m-connecting-wc-qrcode")],di);var jo=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let qi=class extends y{constructor(){var e,t;if(super(),this.wallet=(e=f.state.data)==null?void 0:e.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");W.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:(t=this.wallet)==null?void 0:t.display_index}})}render(){return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${h(S.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};qi=jo([p("w3m-connecting-wc-unsupported")],qi);var hn=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let pi=class extends j{constructor(){var e;if(super(),this.isLoading=!0,!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel=q.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(x.subscribeKey("wcUri",()=>{this.updateLoadingState()})),W.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web",displayIndex:(e=this.wallet)==null?void 0:e.display_index}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:t,name:n}=this.wallet,{redirect:o,href:i}=b.formatUniversalUrl(t,this.uri);x.setWcLinking({name:n,href:i}),x.setRecentWallet(this.wallet),b.openHref(o,"_blank")}catch{this.error=!0}}};hn([c()],pi.prototype,"isLoading",void 0);pi=hn([p("w3m-connecting-wc-web")],pi);var it=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Ue=class extends y{constructor(){var e;super(),this.wallet=(e=f.state.data)==null?void 0:e.wallet,this.unsubscribe=[],this.platform=void 0,this.platforms=[],this.isSiwxEnabled=!!v.state.siwx,this.remoteFeatures=v.state.remoteFeatures,this.displayBranding=!0,this.determinePlatforms(),this.initializeConnection(),this.unsubscribe.push(v.subscribeKey("remoteFeatures",t=>this.remoteFeatures=t))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `}reownBrandingTemplate(){var e;return!((e=this.remoteFeatures)!=null&&e.reownBranding)||!this.displayBranding?null:l`<wui-ux-by-reown></wui-ux-by-reown>`}async initializeConnection(e=!1){var t,n;if(!(this.platform==="browser"||v.state.manualWCControl&&!e))try{const{wcPairingExpiry:o,status:i}=x.state;if(e||v.state.enableEmbedded||b.isPairingExpired(o)||i==="connecting"){const s=x.getConnections(d.state.activeChain),r=(t=this.remoteFeatures)==null?void 0:t.multiWallet,g=s.length>0;await x.connectWalletConnect({cache:"never"}),this.isSiwxEnabled||(g&&r?(f.replace("ProfileWallets"),N.showSuccess("New Wallet Added")):U.close())}}catch(o){if(o instanceof Error&&o.message.includes("An error occurred when attempting to switch chain")&&!v.state.enableNetworkSwitch&&d.state.activeChain){d.setActiveCaipNetwork(In.getUnsupportedNetwork(`${d.state.activeChain}:${(n=d.state.activeCaipNetwork)==null?void 0:n.id}`)),d.showUnsupportedChainUI();return}W.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(o==null?void 0:o.message)??"Unknown"}}),x.setWcError(!0),N.showError(o.message??"Connection error"),x.resetWcConnection(),f.goBack()}}determinePlatforms(){if(!this.wallet){this.platforms.push("qrcode"),this.platform="qrcode";return}if(this.platform)return;const{mobile_link:e,desktop_link:t,webapp_link:n,injected:o,rdns:i}=this.wallet,s=o==null?void 0:o.map(({injected_id:ei})=>ei).filter(Boolean),r=[...i?[i]:s??[]],g=v.state.isUniversalProvider?!1:r.length,A=e,k=n,B=x.checkInstalled(r),E=g&&B,Ti=t&&!b.isMobile();E&&!d.state.noAdapters&&this.platforms.push("browser"),A&&this.platforms.push(b.isMobile()?"mobile":"qrcode"),k&&this.platforms.push("web"),Ti&&this.platforms.push("desktop"),!E&&g&&!d.state.noAdapters&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return l`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return l`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return l`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return l`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return l`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return l`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?l`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){var n;const t=(n=this.shadowRoot)==null?void 0:n.querySelector("div");t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};it([c()],Ue.prototype,"platform",void 0);it([c()],Ue.prototype,"platforms",void 0);it([c()],Ue.prototype,"isSiwxEnabled",void 0);it([c()],Ue.prototype,"remoteFeatures",void 0);it([C({type:Boolean})],Ue.prototype,"displayBranding",void 0);Ue=it([p("w3m-connecting-wc-view")],Ue);var Ai=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Pt=class extends y{constructor(){super(),this.unsubscribe=[],this.isMobile=b.isMobile(),this.remoteFeatures=v.state.remoteFeatures,this.unsubscribe.push(v.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(this.isMobile){const{featured:e,recommended:t}=_.state,{customWallets:n}=v.state,o=de.getRecentWallets(),i=e.length||t.length||(n==null?void 0:n.length)||o.length;return l`<wui-flex
        flexDirection="column"
        gap="xs"
        .margin=${["3xs","s","s","s"]}
      >
        ${i?l`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return l`<wui-flex flexDirection="column" .padding=${["0","0","l","0"]}>
        <w3m-connecting-wc-view .displayBranding=${!1}></w3m-connecting-wc-view>
        <wui-flex flexDirection="column" .padding=${["0","m","0","m"]}>
          <w3m-all-wallets-widget></w3m-all-wallets-widget>
        </wui-flex>
      </wui-flex>
      ${this.reownBrandingTemplate()} `}reownBrandingTemplate(){var e;return(e=this.remoteFeatures)!=null&&e.reownBranding?l` <wui-flex flexDirection="column" .padding=${["3xs","0","3xs","0"]}>
      <wui-ux-by-reown></wui-ux-by-reown>
    </wui-flex>`:null}};Ai([c()],Pt.prototype,"isMobile",void 0);Ai([c()],Pt.prototype,"remoteFeatures",void 0);Pt=Ai([p("w3m-connecting-wc-basic-view")],Pt);const Bo=T`
  .continue-button-container {
    width: 100%;
  }
`;var wn=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Dt=class extends y{constructor(){super(...arguments),this.loading=!1}render(){return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{b.openHref(En.URLS.FAQ,"_blank")}}
        >
          Learn more about names
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return l` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-icon-box
          icon="id"
          size="xl"
          iconSize="xxl"
          iconColor="fg-200"
          backgroundColor="fg-200"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Choose your account name
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          Finally say goodbye to 0x addresses, name your account to make it easier to exchange
          assets
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return l`<wui-flex
      .padding=${["0","2l","0","2l"]}
      gap="s"
      class="continue-button-container"
    >
      <wui-button
        fullWidth
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.handleContinue.bind(this)}
        >Choose name
      </wui-button>
    </wui-flex>`}handleContinue(){f.push("RegisterAccountName"),W.sendEvent({type:"track",event:"OPEN_ENS_FLOW",properties:{isSmartAccount:Ie(d.state.activeChain)===ue.ACCOUNT_TYPES.SMART_ACCOUNT}})}};Dt.styles=Bo;wn([c()],Dt.prototype,"loading",void 0);Dt=wn([p("w3m-choose-account-name-view")],Dt);var Uo=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Yi=class extends y{constructor(){var e;super(...arguments),this.wallet=(e=f.state.data)==null?void 0:e.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return l`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){var e;return(e=this.wallet)!=null&&e.chrome_store?l`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){var e;return(e=this.wallet)!=null&&e.app_store?l`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){var e;return(e=this.wallet)!=null&&e.play_store?l`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){var e;return(e=this.wallet)!=null&&e.homepage?l`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){var e;(e=this.wallet)!=null&&e.chrome_store&&b.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){var e;(e=this.wallet)!=null&&e.app_store&&b.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;(e=this.wallet)!=null&&e.play_store&&b.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;(e=this.wallet)!=null&&e.homepage&&b.openHref(this.wallet.homepage,"_blank")}};Yi=Uo([p("w3m-downloads-view")],Yi);var zo=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};const Mo="https://walletconnect.com/explorer";let Xi=class extends y{render(){return l`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{b.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:e,featured:t}=_.state,{customWallets:n}=v.state;return[...t,...n??[],...e].slice(0,4).map(i=>l`
        <wui-list-wallet
          name=${i.name??"Unknown"}
          tagVariant="main"
          imageSrc=${h(S.getWalletImage(i))}
          @click=${()=>{b.openHref(i.homepage??Mo,"_blank")}}
        ></wui-list-wallet>
      `)}};Xi=zo([p("w3m-get-wallet-view")],Xi);var fn=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let hi=class extends y{constructor(){super(...arguments),this.data=[]}render(){return l`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(e=>l`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map(t=>l`<wui-visual name=${t}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};fn([C({type:Array})],hi.prototype,"data",void 0);hi=fn([p("w3m-help-widget")],hi);var Fo=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};const Vo=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let Qi=class extends y{render(){return l`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${Vo}></w3m-help-widget>
        <wui-button variant="main" size="md" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){W.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),f.push("GetWallet")}};Qi=Fo([p("w3m-what-is-a-wallet-view")],Qi);const Ko=T`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var mn=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Lt=class extends y{constructor(){super(),this.unsubscribe=[],this.checked=Ct.state.isLegalCheckboxChecked,this.unsubscribe.push(Ct.subscribeKey("isLegalCheckboxChecked",e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var g;const{termsConditionsUrl:e,privacyPolicyUrl:t}=v.state,n=(g=v.state.features)==null?void 0:g.legalCheckbox,i=!!(e||t)&&!!n,s=i&&!this.checked,r=s?-1:void 0;return l`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${i?["0","s","s","s"]:"s"}
        gap="xs"
        class=${h(s?"disabled":void 0)}
      >
        <w3m-wallet-login-list tabIdx=${h(r)}></w3m-wallet-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}};Lt.styles=Ko;mn([c()],Lt.prototype,"checked",void 0);Lt=mn([p("w3m-connect-wallets-view")],Lt);const Go=R`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var Ho=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let wi=class extends P{render(){return w`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};wi.styles=[O,Go];wi=Ho([p("wui-loading-hexagon")],wi);const qo=T`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var ki=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let ft=class extends y{constructor(){var e;super(),this.network=(e=f.state.data)==null?void 0:e.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const e=this.getLabel(),t=this.getSubLabel();return l`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${h(S.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:l`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="accent"
          size="md"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}getSubLabel(){const e=m.getConnectorId(d.state.activeChain);return m.getAuthConnector()&&e===I.CONNECTOR_ID.AUTH?"":this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet"}getLabel(){var n;const e=m.getConnectorId(d.state.activeChain);return m.getAuthConnector()&&e===I.CONNECTOR_ID.AUTH?`Switching to ${((n=this.network)==null?void 0:n.name)??"Unknown"} network...`:this.error?"Switch declined":"Approve in wallet"}onShowRetry(){var e;if(this.error&&!this.showRetry){this.showRetry=!0;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("wui-button");t==null||t.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){var e;try{this.error=!1,d.state.activeChain!==((e=this.network)==null?void 0:e.chainNamespace)&&d.setIsSwitchingNamespace(!0),this.network&&await d.switchActiveNetwork(this.network)}catch{this.error=!0}}};ft.styles=qo;ki([c()],ft.prototype,"showRetry",void 0);ki([c()],ft.prototype,"error",void 0);ft=ki([p("w3m-network-switch-view")],ft);const Yo=R`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button[data-transparent='true'] {
    pointer-events: none;
    background-color: transparent;
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: 100%;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    opacity: 0.5;
    cursor: not-allowed;
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var nt=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let We=class extends P{constructor(){super(...arguments),this.imageSrc="",this.name="",this.disabled=!1,this.selected=!1,this.transparent=!1}render(){return w`
      <button data-transparent=${this.transparent} ?disabled=${this.disabled}>
        <wui-flex gap="s" alignItems="center">
          ${this.templateNetworkImage()}
          <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text></wui-flex
        >
        ${this.checkmarkTemplate()}
      </button>
    `}checkmarkTemplate(){return this.selected?w`<wui-icon size="sm" color="accent-100" name="checkmarkBold"></wui-icon>`:null}templateNetworkImage(){return this.imageSrc?w`<wui-image size="sm" src=${this.imageSrc} name=${this.name}></wui-image>`:this.imageSrc?null:w`<wui-network-image
        ?round=${!0}
        size="md"
        name=${this.name}
      ></wui-network-image>`}};We.styles=[O,D,Yo];nt([u()],We.prototype,"imageSrc",void 0);nt([u()],We.prototype,"name",void 0);nt([u({type:Boolean})],We.prototype,"disabled",void 0);nt([u({type:Boolean})],We.prototype,"selected",void 0);nt([u({type:Boolean})],We.prototype,"transparent",void 0);We=nt([p("wui-list-network")],We);const Xo=T`
  .container {
    max-height: 360px;
    overflow: auto;
  }

  .container::-webkit-scrollbar {
    display: none;
  }
`;var vt=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let ze=class extends y{constructor(){super(),this.unsubscribe=[],this.network=d.state.activeCaipNetwork,this.requestedCaipNetworks=d.getCaipNetworks(),this.search="",this.onDebouncedSearch=b.debounce(e=>{this.search=e},100),this.unsubscribe.push(Re.subscribeNetworkImages(()=>this.requestUpdate()),d.subscribeKey("activeCaipNetwork",e=>this.network=e),d.subscribe(()=>{this.requestedCaipNetworks=d.getAllRequestedCaipNetworks()}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`
      ${this.templateSearchInput()}
      <wui-flex
        class="container"
        .padding=${["0","s","s","s"]}
        flexDirection="column"
        gap="xs"
      >
        ${this.networksTemplate()}
      </wui-flex>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}templateSearchInput(){return l`
      <wui-flex gap="xs" .padding=${["0","s","s","s"]}>
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="md"
          placeholder="Search network"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onNetworkHelp(){W.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),f.push("WhatIsANetwork")}networksTemplate(){var n;const e=d.getAllApprovedCaipNetworkIds(),t=b.sortRequestedNetworks(e,this.requestedCaipNetworks);return this.search?this.filteredNetworks=t==null?void 0:t.filter(o=>{var i;return(i=o==null?void 0:o.name)==null?void 0:i.toLowerCase().includes(this.search.toLowerCase())}):this.filteredNetworks=t,(n=this.filteredNetworks)==null?void 0:n.map(o=>{var i;return l`
        <wui-list-network
          .selected=${((i=this.network)==null?void 0:i.id)===o.id}
          imageSrc=${h(S.getNetworkImage(o))}
          type="network"
          name=${o.name??o.id}
          @click=${()=>this.onSwitchNetwork(o)}
          .disabled=${this.getNetworkDisabled(o)}
          data-testid=${`w3m-network-switch-${o.name??o.id}`}
        ></wui-list-network>
      `})}getNetworkDisabled(e){const t=e.chainNamespace,n=$.getCaipAddress(t),o=d.getAllApprovedCaipNetworkIds(),i=d.getNetworkProp("supportsAllNetworks",t)!==!1,s=m.getConnectorId(t),r=m.getAuthConnector(),g=s===I.CONNECTOR_ID.AUTH&&r;return!n||i||g?!1:!(o!=null&&o.includes(e.caipNetworkId))}onSwitchNetwork(e){An.onSwitchNetwork({network:e})}};ze.styles=Xo;vt([c()],ze.prototype,"network",void 0);vt([c()],ze.prototype,"requestedCaipNetworks",void 0);vt([c()],ze.prototype,"filteredNetworks",void 0);vt([c()],ze.prototype,"search",void 0);ze=vt([p("w3m-networks-view")],ze);const Qo=T`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    width: var(--wui-wallet-image-size-lg);
    height: var(--wui-wallet-image-size-lg);
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity var(--wui-ease-out-power-2) var(--wui-duration-lg),
      transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
  }

  .capitalize {
    text-transform: capitalize;
  }
`;var bn=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};const Zo={eip155:"eth",solana:"solana",bip122:"bitcoin",polkadot:void 0};let jt=class extends y{constructor(){var e,t;super(...arguments),this.unsubscribe=[],this.switchToChain=(e=f.state.data)==null?void 0:e.switchToChain,this.caipNetwork=(t=f.state.data)==null?void 0:t.network,this.activeChain=d.state.activeChain}firstUpdated(){this.unsubscribe.push(d.subscribeKey("activeChain",e=>this.activeChain=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.switchToChain?I.CHAIN_NAME_MAP[this.switchToChain]:"supported";if(!this.switchToChain)return null;const t=I.CHAIN_NAME_MAP[this.switchToChain];return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" flexDirection="column" alignItems="center" gap="xl">
          <wui-visual name=${h(Zo[this.switchToChain])}></wui-visual>
          <wui-text
            data-testid=${`w3m-switch-active-chain-to-${t}`}
            variant="paragraph-500"
            color="fg-100"
            align="center"
            >Switch to <span class="capitalize">${t}</span></wui-text
          >
          <wui-text variant="small-400" color="fg-200" align="center">
            Connected wallet doesn't support connecting to ${e} chain. You
            need to connect with a different wallet.
          </wui-text>
          <wui-button
            data-testid="w3m-switch-active-chain-button"
            size="md"
            @click=${this.switchActiveChain.bind(this)}
            >Switch</wui-button
          >
        </wui-flex>
      </wui-flex>
    `}async switchActiveChain(){this.switchToChain&&(d.setIsSwitchingNamespace(!0),m.setFilterByNamespace(this.switchToChain),this.caipNetwork?await d.switchActiveNetwork(this.caipNetwork):d.setActiveNamespace(this.switchToChain),f.reset("Connect"))}};jt.styles=Qo;bn([C()],jt.prototype,"activeChain",void 0);jt=bn([p("w3m-switch-active-chain-view")],jt);var Jo=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};const es=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let Zi=class extends y{render(){return l`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${es}></w3m-help-widget>
        <wui-button
          variant="main"
          size="md"
          @click=${()=>{b.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};Zi=Jo([p("w3m-what-is-a-network-view")],Zi);const ts=T`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var Wi=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let mt=class extends y{constructor(){var e;super(),this.swapUnsupportedChain=(e=f.state.data)==null?void 0:e.swapUnsupportedChain,this.unsubscribe=[],this.disconnecting=!1,this.remoteFeatures=v.state.remoteFeatures,this.unsubscribe.push(Re.subscribeNetworkImages(()=>this.requestUpdate()),v.subscribeKey("remoteFeatures",t=>{this.remoteFeatures=t}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["m","xl","xs","xl"]}
          alignItems="center"
          gap="xl"
        >
          ${this.descriptionTemplate()}
        </wui-flex>

        <wui-flex flexDirection="column" padding="s" gap="xs">
          ${this.networksTemplate()}
        </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="s" gap="xs">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}descriptionTemplate(){return this.swapUnsupportedChain?l`
        <wui-text variant="small-400" color="fg-200" align="center">
          The swap feature doesn’t support your current network. Switch to an available option to
          continue.
        </wui-text>
      `:l`
      <wui-text variant="small-400" color="fg-200" align="center">
        This app doesn’t support your current network. Switch to an available option to continue.
      </wui-text>
    `}networksTemplate(){const e=d.getAllRequestedCaipNetworks(),t=d.getAllApprovedCaipNetworkIds(),n=b.sortRequestedNetworks(t,e);return(this.swapUnsupportedChain?n.filter(i=>q.SWAP_SUPPORTED_NETWORKS.includes(i.caipNetworkId)):n).map(i=>l`
        <wui-list-network
          imageSrc=${h(S.getNetworkImage(i))}
          name=${i.name??"Unknown"}
          @click=${()=>this.onSwitchNetwork(i)}
        >
        </wui-list-network>
      `)}async onDisconnect(){var e;try{this.disconnecting=!0;const t=d.state.activeChain,o=x.getConnections(t).length>0,i=t&&m.state.activeConnectorIds[t],s=(e=this.remoteFeatures)==null?void 0:e.multiWallet;await x.disconnect(s?{id:i,namespace:t}:{}),o&&s&&(f.push("ProfileWallets"),N.showSuccess("Wallet deleted"))}catch{W.sendEvent({type:"track",event:"DISCONNECT_ERROR",properties:{message:"Failed to disconnect"}}),N.showError("Failed to disconnect")}finally{this.disconnecting=!1}}async onSwitchNetwork(e){const t=$.state.caipAddress,n=d.getAllApprovedCaipNetworkIds(),o=d.getNetworkProp("supportsAllNetworks",e.chainNamespace),i=f.state.data;t?n!=null&&n.includes(e.caipNetworkId)?await d.switchActiveNetwork(e):o?f.push("SwitchNetwork",{...i,network:e}):f.push("SwitchNetwork",{...i,network:e}):t||(d.setActiveCaipNetwork(e),f.push("Connect"))}};mt.styles=ts;Wi([c()],mt.prototype,"disconnecting",void 0);Wi([c()],mt.prototype,"remoteFeatures",void 0);mt=Wi([p("w3m-unsupported-chain-view")],mt);const is=R`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`;var Ei=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let bt=class extends P{constructor(){super(...arguments),this.icon="externalLink",this.text=""}render(){return w`
      <wui-flex gap="1xs" alignItems="center">
        <wui-icon-box
          size="sm"
          iconcolor="fg-200"
          backgroundcolor="fg-200"
          icon=${this.icon}
          background="transparent"
        ></wui-icon-box>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};bt.styles=[O,D,is];Ei([u()],bt.prototype,"icon",void 0);Ei([u()],bt.prototype,"text",void 0);bt=Ei([p("wui-banner")],bt);const ns=T`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var os=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let fi=class extends y{constructor(){super(),this.unsubscribe=[]}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l` <wui-flex
      flexDirection="column"
      .padding=${["xs","s","m","s"]}
      gap="xs"
    >
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){const e=d.getAllRequestedCaipNetworks(),t=d.getAllApprovedCaipNetworkIds(),n=d.state.activeCaipNetwork,o=d.checkIfSmartAccountEnabled();let i=b.sortRequestedNetworks(t,e);if(o&&Ie(n==null?void 0:n.chainNamespace)===ue.ACCOUNT_TYPES.SMART_ACCOUNT){if(!n)return null;i=[n]}return i.filter(r=>r.chainNamespace===(n==null?void 0:n.chainNamespace)).map(r=>l`
        <wui-list-network
          imageSrc=${h(S.getNetworkImage(r))}
          name=${r.name??"Unknown"}
          ?transparent=${!0}
        >
        </wui-list-network>
      `)}};fi.styles=ns;fi=os([p("w3m-wallet-compatible-networks-view")],fi);const ss=R`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var Jt=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Qe=class extends P{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"}; background-color: var(--wui-color-modal-bg);`,w`${this.templateVisual()}`}templateVisual(){return this.imageSrc?w`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:w`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};Qe.styles=[O,ss];Jt([u()],Qe.prototype,"imageSrc",void 0);Jt([u()],Qe.prototype,"alt",void 0);Jt([u({type:Boolean})],Qe.prototype,"borderRadiusFull",void 0);Qe=Jt([p("wui-visual-thumbnail")],Qe);const as=T`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;var rs=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let mi=class extends y{constructor(){var e,t;super(...arguments),this.dappImageUrl=(e=v.state.metadata)==null?void 0:e.icons,this.walletImageUrl=(t=$.state.connectedWalletInfo)==null?void 0:t.icon}firstUpdated(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelectorAll("wui-visual-thumbnail");e!=null&&e[0]&&this.createAnimation(e[0],"translate(18px)"),e!=null&&e[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){var e;return l`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${(e=this.dappImageUrl)==null?void 0:e[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,t){e.animate([{transform:"translateX(0px)"},{transform:t}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};mi.styles=as;mi=rs([p("w3m-siwx-sign-message-thumbnails")],mi);var _i=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let Bt=class extends y{constructor(){var e;super(...arguments),this.dappName=(e=v.state.metadata)==null?void 0:e.name,this.isCancelling=!1,this.isSigning=!1}render(){return l`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-siwx-sign-message-thumbnails></w3m-siwx-sign-message-thumbnails>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          ${this.isCancelling?"Cancelling...":"Cancel"}
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="main"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=!0;try{await Ni.requestSignMessage()}catch(e){if(e instanceof Error&&e.message.includes("OTP is required")){N.showError({message:"Something went wrong. We need to verify your account again."}),f.replace("DataCapture");return}throw e}finally{this.isSigning=!1}}async onCancel(){this.isCancelling=!0,await Ni.cancelSignMessage().finally(()=>this.isCancelling=!1)}};_i([c()],Bt.prototype,"isCancelling",void 0);_i([c()],Bt.prototype,"isSigning",void 0);Bt=_i([p("w3m-siwx-sign-message-view")],Bt);export{Oi as AppKitAccountButton,Di as AppKitButton,ji as AppKitConnectButton,Ui as AppKitNetworkButton,Ri as W3mAccountButton,pe as W3mAccountSettingsView,ri as W3mAccountView,kt as W3mAllWalletsView,Pi as W3mButton,Dt as W3mChooseAccountNameView,Li as W3mConnectButton,Q as W3mConnectView,Lt as W3mConnectWalletsView,Ki as W3mConnectingExternalView,Rt as W3mConnectingMultiChainView,Pt as W3mConnectingWcBasicView,Ue as W3mConnectingWcView,Yi as W3mDownloadsView,Xi as W3mGetWalletView,Bi as W3mNetworkButton,ft as W3mNetworkSwitchView,ze as W3mNetworksView,M as W3mProfileWalletsView,kr as W3mRouter,Bt as W3mSIWXSignMessageView,jt as W3mSwitchActiveChainView,mt as W3mUnsupportedChainView,fi as W3mWalletCompatibleNetworksView,Zi as W3mWhatIsANetworkView,Qi as W3mWhatIsAWalletView};
