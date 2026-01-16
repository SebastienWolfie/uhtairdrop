import{i as N,a as y,x as l,r as p,n as P}from"./pA-L5z5-.js";import{a9 as _,ad as j,Q as k,ab as A,an as F,I,v as H,w as V,z,A as w,T as C,ao as m,M as O,O as M,a0 as v,a1 as x,L as $,a2 as R,U as K,V as G}from"./BqACKYKw.js";import{c as f,n as g}from"./DpLUDbId.js";import{H as T,N as L}from"./CaRtpF6T.js";import{e as Y,n as B}from"./cdYEHJZT.js";import{o as q}from"./DMVJ8XfO.js";import"./PbVS3gXm.js";import"./Br4_VEbT.js";import"./DxvyqeoR.js";import"./CrIyovLo.js";import"./aOGguEi-.js";import"./DE1B9N49.js";import"./bBwRRaMY.js";import"./ClytJu1B.js";import"./BLqpxtBP.js";import"./rx5cLQAs.js";import"./rLYoUjrC.js";import"./B3FXzDs5.js";const X=N`
  div {
    width: 100%;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`;var W=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};const S=600,D=360,Q=64;let b=class extends y{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById("w3m-iframe"),this.ready=!1,this.unsubscribe.push(_.subscribeKey("open",e=>{e||this.onHideIframe()}),_.subscribeKey("shake",e=>{e?this.iframe.style.animation="w3m-shake 500ms var(--wui-ease-out-power-2)":this.iframe.style.animation="none"}))}disconnectedCallback(){var e;this.onHideIframe(),this.unsubscribe.forEach(t=>t()),(e=this.bodyObserver)==null||e.unobserve(window.document.body)}async firstUpdated(){var t;await this.syncTheme(),this.iframe.style.display="block";const e=(t=this==null?void 0:this.renderRoot)==null?void 0:t.querySelector("div");this.bodyObserver=new ResizeObserver(n=>{var s,r;const o=(s=n==null?void 0:n[0])==null?void 0:s.contentBoxSize,i=(r=o==null?void 0:o[0])==null?void 0:r.inlineSize;this.iframe.style.height=`${S}px`,e.style.height=`${S}px`,j.state.enableEmbedded?this.updateFrameSizeForEmbeddedMode():i&&i<=430?(this.iframe.style.width="100%",this.iframe.style.left="0px",this.iframe.style.bottom="0px",this.iframe.style.top="unset",this.onShowIframe()):(this.iframe.style.width=`${D}px`,this.iframe.style.left=`calc(50% - ${D/2}px)`,this.iframe.style.top=`calc(50% - ${S/2}px + ${Q/2}px)`,this.iframe.style.bottom="unset",this.onShowIframe())}),this.bodyObserver.observe(window.document.body)}render(){return l`<div data-ready=${this.ready} id="w3m-frame-container"></div>`}onShowIframe(){const e=window.innerWidth<=430;this.ready=!0,this.iframe.style.animation=e?"w3m-iframe-zoom-in-mobile 200ms var(--wui-ease-out-power-2)":"w3m-iframe-zoom-in 200ms var(--wui-ease-out-power-2)"}onHideIframe(){this.iframe.style.display="none",this.iframe.style.animation="w3m-iframe-fade-out 200ms var(--wui-ease-out-power-2)"}async syncTheme(){const e=k.getAuthConnector();if(e){const t=A.getSnapshot().themeMode,n=A.getSnapshot().themeVariables;await e.provider.syncTheme({themeVariables:n,w3mThemeVariables:F(n,t)})}}async updateFrameSizeForEmbeddedMode(){var n;const e=(n=this==null?void 0:this.renderRoot)==null?void 0:n.querySelector("div");await new Promise(o=>{setTimeout(o,300)});const t=this.getBoundingClientRect();e.style.width="100%",this.iframe.style.left=`${t.left}px`,this.iframe.style.top=`${t.top}px`,this.iframe.style.width=`${t.width}px`,this.iframe.style.height=`${t.height}px`,this.onShowIframe()}};b.styles=X;W([p()],b.prototype,"ready",void 0);b=W([f("w3m-approve-transaction-view")],b);var J=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let U=class extends y{render(){return l`
      <wui-flex flexDirection="column" alignItems="center" gap="xl" padding="xl">
        <wui-text variant="paragraph-400" color="fg-100">Follow the instructions on</wui-text>
        <wui-chip
          icon="externalLink"
          variant="fill"
          href=${I.SECURE_SITE_DASHBOARD}
          imageSrc=${I.SECURE_SITE_FAVICON}
          data-testid="w3m-secure-website-button"
        >
        </wui-chip>
        <wui-text variant="small-400" color="fg-200">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};U=J([f("w3m-upgrade-wallet-view")],U);const Z=H`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  .error {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }

  .base-name {
    position: absolute;
    right: 45px;
    top: 15px;
    text-align: right;
  }
`;var h=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let c=class extends z{constructor(){super(...arguments),this.disabled=!1,this.loading=!1}render(){return w`
      <wui-input-text
        value=${q(this.value)}
        ?disabled=${this.disabled}
        .value=${this.value||""}
        data-testid="wui-ens-input"
        inputRightPadding="5xl"
        .onKeyDown=${this.onKeyDown}
      >
        ${this.baseNameTemplate()} ${this.errorTemplate()}${this.loadingTemplate()}
      </wui-input-text>
    `}baseNameTemplate(){return w`<wui-text variant="paragraph-400" color="fg-200" class="base-name">
      ${C.WC_NAME_SUFFIX}
    </wui-text>`}loadingTemplate(){return this.loading?w`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}errorTemplate(){return this.errorMessage?w`<wui-text variant="tiny-500" color="error-100" class="error"
        >${this.errorMessage}</wui-text
      >`:null}};c.styles=[V,Z];h([g()],c.prototype,"errorMessage",void 0);h([g({type:Boolean})],c.prototype,"disabled",void 0);h([g()],c.prototype,"value",void 0);h([g({type:Boolean})],c.prototype,"loading",void 0);h([g({attribute:!1})],c.prototype,"onKeyDown",void 0);c=h([f("wui-ens-input")],c);const ee=N`
  wui-flex {
    width: 100%;
  }

  .suggestion {
    border: none;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    padding: var(--wui-spacing-m);
  }

  .suggestion:disabled {
    opacity: 0.5;
    cursor: default;
  }

  .suggestion:focus-visible:not(:disabled) {
    outline: 1px solid var(--wui-color-gray-glass-020);
    background-color: var(--wui-color-gray-glass-005);
  }

  .suggestion:hover:not(:disabled) {
    background-color: var(--wui-color-gray-glass-005);
  }

  .suggested-name {
    max-width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  form {
    width: 100%;
    position: relative;
  }

  .input-submit-button,
  .input-loading-spinner {
    position: absolute;
    top: 26px;
    transform: translateY(-50%);
    right: 10px;
  }
`;var d=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let u=class extends y{constructor(){super(),this.formRef=Y(),this.usubscribe=[],this.name="",this.error="",this.loading=m.state.loading,this.suggestions=m.state.suggestions,this.profileName=O.state.profileName,this.onDebouncedNameInputChange=M.debounce(e=>{e.length<4?this.error="Name must be at least 4 characters long":T.isValidReownName(e)?(this.error="",m.getSuggestions(e)):this.error="The value is not a valid username"}),this.usubscribe.push(m.subscribe(e=>{this.suggestions=e.suggestions,this.loading=e.loading}),O.subscribeKey("profileName",e=>{this.profileName=e,e&&(this.error="You already own a name")}))}firstUpdated(){var e;(e=this.formRef.value)==null||e.addEventListener("keydown",this.onEnterKey.bind(this))}disconnectedCallback(){var e;super.disconnectedCallback(),this.usubscribe.forEach(t=>t()),(e=this.formRef.value)==null||e.removeEventListener("keydown",this.onEnterKey.bind(this))}render(){return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="m"
        .padding=${["0","s","m","s"]}
      >
        <form ${B(this.formRef)} @submit=${this.onSubmitName.bind(this)}>
          <wui-ens-input
            @inputChange=${this.onNameInputChange.bind(this)}
            .errorMessage=${this.error}
            .value=${this.name}
            .onKeyDown=${this.onKeyDown.bind(this)}
          >
          </wui-ens-input>
          ${this.submitButtonTemplate()}
          <input type="submit" hidden />
        </form>
        ${this.templateSuggestions()}
      </wui-flex>
    `}submitButtonTemplate(){const e=this.suggestions.find(n=>{var o,i;return((i=(o=n.name)==null?void 0:o.split("."))==null?void 0:i[0])===this.name&&n.registered});if(this.loading)return l`<wui-loading-spinner
        class="input-loading-spinner"
        color="fg-200"
      ></wui-loading-spinner>`;const t=`${this.name}${C.WC_NAME_SUFFIX}`;return l`
      <wui-icon-link
        .disabled=${e}
        class="input-submit-button"
        size="sm"
        icon="chevronRight"
        iconColor=${e?"fg-200":"accent-100"}
        @click=${()=>this.onSubmitName(t)}
      >
      </wui-icon-link>
    `}onNameInputChange(e){const t=T.validateReownName(e.detail||"");this.name=t,this.onDebouncedNameInputChange(t)}onKeyDown(e){e.key.length===1&&!T.isValidReownName(e.key)&&e.preventDefault()}nameSuggestionTagTemplate(e){return this.loading?l`<wui-loading-spinner color="fg-200"></wui-loading-spinner>`:e.registered?l`<wui-tag variant="shade" size="lg">Registered</wui-tag>`:l`<wui-tag variant="success" size="lg">Available</wui-tag>`}templateSuggestions(){return!this.name||this.name.length<4||this.error?null:l`<wui-flex flexDirection="column" gap="xxs" alignItems="center">
      ${this.suggestions.map(e=>l`<button
            .disabled=${e.registered||this.loading}
            data-testid="account-name-suggestion"
            class="suggestion"
            @click=${()=>this.onSubmitName(e.name)}
          >
            <wui-text color="fg-100" variant="paragraph-400" class="suggested-name">
              ${e.name}</wui-text
            >${this.nameSuggestionTagTemplate(e)}
          </button>`)}
    </wui-flex>`}isAllowedToSubmit(e){var o;const t=(o=e.split("."))==null?void 0:o[0],n=this.suggestions.find(i=>{var s,r;return((r=(s=i.name)==null?void 0:s.split("."))==null?void 0:r[0])===t&&i.registered});return!this.loading&&!this.error&&!this.profileName&&t&&m.validateName(t)&&!n}async onSubmitName(e){try{if(!this.isAllowedToSubmit(e))return;v.sendEvent({type:"track",event:"REGISTER_NAME_INITIATED",properties:{isSmartAccount:x($.state.activeChain)===R.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:e}}),await m.registerName(e),v.sendEvent({type:"track",event:"REGISTER_NAME_SUCCESS",properties:{isSmartAccount:x($.state.activeChain)===R.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:e}})}catch(t){K.showError(t.message),v.sendEvent({type:"track",event:"REGISTER_NAME_ERROR",properties:{isSmartAccount:x($.state.activeChain)===R.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:e,error:(t==null?void 0:t.message)||"Unknown error"}})}}onEnterKey(e){if(e.key==="Enter"&&this.name&&this.isAllowedToSubmit(this.name)){const t=`${this.name}${C.WC_NAME_SUFFIX}`;this.onSubmitName(t)}}};u.styles=ee;d([P()],u.prototype,"errorMessage",void 0);d([p()],u.prototype,"name",void 0);d([p()],u.prototype,"error",void 0);d([p()],u.prototype,"loading",void 0);d([p()],u.prototype,"suggestions",void 0);d([p()],u.prototype,"profileName",void 0);u=d([f("w3m-register-account-name-view")],u);const te=N`
  .continue-button-container {
    width: 100%;
  }
`;var ie=function(a,e,t,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var r=a.length-1;r>=0;r--)(s=a[r])&&(i=(o<3?s(i):o>3?s(e,t,i):s(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};let E=class extends y{render(){return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{M.openHref(L.URLS.FAQ,"_blank")}}
        >
          Learn more
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
          size="xl"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Account name chosen successfully
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          You can now fund your account and trade crypto
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return l`<wui-flex
      .padding=${["0","2l","0","2l"]}
      gap="s"
      class="continue-button-container"
    >
      <wui-button fullWidth size="lg" borderRadius="xs" @click=${this.redirectToAccount.bind(this)}
        >Let's Go!
      </wui-button>
    </wui-flex>`}redirectToAccount(){G.replace("Account")}};E.styles=te;E=ie([f("w3m-register-account-name-success-view")],E);export{b as W3mApproveTransactionView,E as W3mRegisterAccountNameSuccess,u as W3mRegisterAccountNameView,U as W3mUpgradeWalletView};
