import{i as $,a as N,x as w,r as b}from"./pA-L5z5-.js";import{o as R}from"./DRHY8nG-.js";import{v as A,w as I,x as T,z as O,A as m,M as f,L as u,U as h,aa as g,ab as y,a1 as S,a2 as _,V as E,O as U}from"./BqACKYKw.js";import{n as C,c as k,U as W}from"./DpLUDbId.js";import"./B28QA65d.js";import"./DxvyqeoR.js";import"./rLYoUjrC.js";import"./D_nYlboR.js";import"./BLqpxtBP.js";import"./rx5cLQAs.js";const j=A`
  button {
    display: flex;
    gap: var(--wui-spacing-xl);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-m) var(--wui-spacing-s);
  }

  wui-text {
    width: 100%;
  }

  wui-flex {
    width: auto;
  }

  .network-icon {
    width: var(--wui-spacing-2l);
    height: var(--wui-spacing-2l);
    border-radius: calc(var(--wui-spacing-2l) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;var x=function(n,e,r,t){var o=arguments.length,i=o<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,r):t,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,r,t);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let d=class extends O{constructor(){super(...arguments),this.networkImages=[""],this.text=""}render(){return m`
      <button>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
        <wui-flex gap="3xs" alignItems="center">
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="fg-200"></wui-icon>
        </wui-flex>
      </button>
    `}networksTemplate(){const e=this.networkImages.slice(0,5);return m` <wui-flex class="networks">
      ${e==null?void 0:e.map(r=>m` <wui-flex class="network-icon"> <wui-image src=${r}></wui-image> </wui-flex>`)}
    </wui-flex>`}};d.styles=[I,T,j];x([C({type:Array})],d.prototype,"networkImages",void 0);x([C()],d.prototype,"text",void 0);d=x([k("wui-compatible-network")],d);const q=$`
  wui-compatible-network {
    margin-top: var(--wui-spacing-l);
  }
`;var p=function(n,e,r,t){var o=arguments.length,i=o<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,r):t,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,r,t);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let l=class extends N{constructor(){super(),this.unsubscribe=[],this.address=f.state.address,this.profileName=f.state.profileName,this.network=u.state.activeCaipNetwork,this.unsubscribe.push(f.subscribe(e=>{e.address?(this.address=e.address,this.profileName=e.profileName):h.showError("Account not found")}),u.subscribeKey("activeCaipNetwork",e=>{e!=null&&e.id&&(this.network=e)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.address)throw new Error("w3m-wallet-receive-view: No account provided");const e=g.getNetworkImage(this.network);return w` <wui-flex
      flexDirection="column"
      .padding=${["0","l","l","l"]}
      alignItems="center"
    >
      <wui-chip-button
        data-testid="receive-address-copy-button"
        @click=${this.onCopyClick.bind(this)}
        text=${W.getTruncateString({string:this.profileName||this.address||"",charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
        icon="copy"
        size="sm"
        imageSrc=${e||""}
        variant="gray"
      ></wui-chip-button>
      <wui-flex
        flexDirection="column"
        .padding=${["l","0","0","0"]}
        alignItems="center"
        gap="s"
      >
        <wui-qr-code
          size=${232}
          theme=${y.state.themeMode}
          uri=${this.address}
          ?arenaClear=${!0}
          color=${R(y.state.themeVariables["--w3m-qr-color"])}
          data-testid="wui-qr-code"
        ></wui-qr-code>
        <wui-text variant="paragraph-500" color="fg-100" align="center">
          Copy your address or scan this QR code
        </wui-text>
      </wui-flex>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){var a;const e=u.getAllRequestedCaipNetworks(),r=u.checkIfSmartAccountEnabled(),t=u.state.activeCaipNetwork,o=e.filter(c=>(c==null?void 0:c.chainNamespace)===(t==null?void 0:t.chainNamespace));if(S(t==null?void 0:t.chainNamespace)===_.ACCOUNT_TYPES.SMART_ACCOUNT&&r)return t?w`<wui-compatible-network
        @click=${this.onReceiveClick.bind(this)}
        text="Only receive assets on this network"
        .networkImages=${[g.getNetworkImage(t)??""]}
      ></wui-compatible-network>`:null;const s=((a=o==null?void 0:o.filter(c=>{var v;return(v=c==null?void 0:c.assets)==null?void 0:v.imageId}))==null?void 0:a.slice(0,5)).map(g.getNetworkImage).filter(Boolean);return w`<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${s}
    ></wui-compatible-network>`}onReceiveClick(){E.push("WalletCompatibleNetworks")}onCopyClick(){try{this.address&&(U.copyToClopboard(this.address),h.showSuccess("Address copied"))}catch{h.showError("Failed to copy")}}};l.styles=q;p([b()],l.prototype,"address",void 0);p([b()],l.prototype,"profileName",void 0);p([b()],l.prototype,"network",void 0);l=p([k("w3m-wallet-receive-view")],l);export{l as W3mWalletReceiveView};
