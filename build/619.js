"use strict";(self.webpackChunkwordpress_sdk=self.webpackChunkwordpress_sdk||[]).push([[619],{258:function(t,e,r){r.d(e,{a:function(){return a},b:function(){return i},f:function(){return s},g:function(){return n}});const o={"w-certificate-link":{defaultLinkText:"View this content's WordProof Timestamp certificate"},"w-certificate-button":{defaultButtonText:"View this content's Timestamp certificate",contentCertificate:"Content Certificate"},"w-certificate":{compareVersions:"Compare Versions",thatIsImportantText:"That is important, because it proofs that the content has not been tampered with and can be trusted.",contentChangedAfterTimestamp:"The content was modified after its fingerprint was last added to a public blockchain.",aboutWordproof:"About WordProof",todaysRevision:"Today’s version",selectDayToCompare:"Select day to compare",contentCertificate:"Content Certificate",thisContent:"This content",hasNotChanged:"has not changed",hasChanged:"has changed",lastEdited:"Last edited",publishedBy:"Published by",explainThis:"Explain this",timestampChecker:"Timestamp checker",viewOnTheBlockchain:"View on the Blockchain",changed:"Changed",removed:"Removed",viewCode:"View code",viewContent:"View content",mostRecent:"Most recent",whatIsTimestamp:"The <strong>fingerprint</strong> of this webpage has been published to the blockchain, a public ledger that <strong>can’t be changed</strong>. This is what is called a “timestamp”.",withTimestampYouCan:"With this timestamp, you can verify <strong>when</strong> and <strong>how</strong> the website changed its content over time. Websites that timestamp their content stand for more transparency and accountability, which ultimately leads to a more trustworthy internet.",wantToKnowMore:"Want to know more? Visit",goBack:"Go back",showContent:"Show content"},"w-date-time-select":{todaysVersion:"Today's version",selectDayToCompare:"Select day to compare",today:"Today",mostRecent:"Most recent"},"w-modal":{ariaClose:"Close"}},a=t=>{let e=t.closest("[lang]");return e?e.lang:"en"},i=async(t,e)=>{const r=await(async(t,e)=>{if(e.startsWith("en"))return o[t];let r;try{r=await((t,e)=>new Promise(((r,o)=>{fetch(`https://unpkg.com/@wordproof/uikit/dist/uikit/i18n/${t}.i18n.${e}.json`).then((t=>{t.ok?r(t.json()):o()}),(()=>o()))})))(t,e)}catch(a){console.warn(`wordproof uikit: no locale for ${t} (${e}) loading default locale en.`),e="en",r=o[t]}return r})(t,e);return new Proxy(r,{get:(r,o,a)=>{if("then"===o)return"";const i=Reflect.get(r,o,a);if(void 0===i)throw new Error(`wordproof uikit: no translation key: "${String(o)}" component: "${t}" locale: "${e}"`);return i}})},n=async t=>{const e=t.tagName.toLowerCase(),r=a(t);return i(e,r)},s=(t,e,r={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"2-digit",second:"2-digit"})=>{try{r.timeZone=Intl.DateTimeFormat().resolvedOptions().timeZone}catch(t){}return new Date(t).toLocaleDateString(e,r)}},619:function(t,e,r){r.r(e),r.d(e,{w_certificate_link:function(){return i}});var o=r(967),a=r(258);let i=class{constructor(t){(0,o.r)(this,t),this.noIcon=!1,this.linkText=""}async componentWillLoad(){this.strings=await(0,a.g)(this.hostElement)}onTriggerClick(t){t.stopPropagation();const e=new MouseEvent("click");this.hostElement.dispatchEvent(e)}render(){return(0,o.h)("button",{type:"button",class:"flex items-center focus:outline-none relative",onClick:t=>this.onTriggerClick(t)},!this.noIcon&&(0,o.h)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 59 59",class:"w-6 h-6 mr-1"},(0,o.h)("g",{"fill-rule":"nonzero",fill:"none"},(0,o.h)("rect",{fill:"#00E8C6",width:"59",height:"59",rx:"2"}),(0,o.h)("path",{d:"M49.58 15.785l-7.842 28.862a1 1 0 01-.965.738h-6.854L29.954 29.31h6.26l1.566 7.333 6.185-22.12h4.65a1 1 0 01.965 1.261z",fill:"#FFF"}),(0,o.h)("path",{d:"M26.713 14.523l-6.158 22.07-4.75-22.07h-5.452a1 1 0 00-.97 1.24l7.113 28.86a1 1 0 00.971.762h6.062a1 1 0 00.965-.738l7.84-28.862a1 1 0 00-.965-1.262h-4.656z",fill:"#FFF",opacity:".8"}))),(0,o.h)("span",{class:"text-teal hover:text-blue font-sohne"},this.linkText?this.linkText:this.strings.defaultLinkText))}get hostElement(){return(0,o.g)(this)}};i.style="/*! tailwindcss v2.1.1 | MIT License | https://tailwindcss.com*//*! modern-normalize v1.0.0 | MIT License | https://github.com/sindresorhus/modern-normalize */:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji}strong{font-weight:bolder}small{font-size:80%}button,input,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],button{-webkit-appearance:button}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}figure,h1,h2,p{margin:0}button{background-color:transparent;background-image:none}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}ul{list-style:none;margin:0;padding:0}html{font-family:Nunito,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5}body{font-family:inherit;line-height:inherit}*,:after,:before{-webkit-box-sizing:border-box;box-sizing:border-box;border:0 solid #f5f7fa}img{border-style:solid}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#e3e2e6}input:-ms-input-placeholder,textarea:-ms-input-placeholder{opacity:1;color:#e3e2e6}input::-webkit-input-placeholder,textarea::-webkit-input-placeholder{opacity:1;color:#e3e2e6}input::-ms-input-placeholder,textarea::-ms-input-placeholder{opacity:1;color:#e3e2e6}input::placeholder,textarea::placeholder{opacity:1;color:#e3e2e6}[role=button],button{cursor:pointer}h1,h2{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,select,textarea{padding:0;line-height:inherit;color:inherit}embed,img,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse:0;border-top-width:calc(1px*(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px*var(--tw-divide-y-reverse))}.divide-gray-400>:not([hidden])~:not([hidden]){--tw-divide-opacity:1;border-color:rgba(227,226,230,var(--tw-divide-opacity))}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.bg-transparent{background-color:transparent}.bg-black{--tw-bg-opacity:1;background-color:rgba(37,37,37,var(--tw-bg-opacity))}.bg-white{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-gray-200{--tw-bg-opacity:1;background-color:rgba(245,247,250,var(--tw-bg-opacity))}.bg-gray-400{--tw-bg-opacity:1;background-color:rgba(227,226,230,var(--tw-bg-opacity))}.bg-gray-600{--tw-bg-opacity:1;background-color:rgba(174,169,171,var(--tw-bg-opacity))}.bg-yellow{--tw-bg-opacity:1;background-color:rgba(255,167,19,var(--tw-bg-opacity))}.bg-blue{--tw-bg-opacity:1;background-color:rgba(32,0,255,var(--tw-bg-opacity))}.bg-light-blue{--tw-bg-opacity:1;background-color:rgba(226,233,244,var(--tw-bg-opacity))}.hover\\:bg-gray-200:hover{--tw-bg-opacity:1;background-color:rgba(245,247,250,var(--tw-bg-opacity))}.hover\\:bg-light-blue:hover{--tw-bg-opacity:1;background-color:rgba(226,233,244,var(--tw-bg-opacity))}.bg-gradient-to-r{background-image:-webkit-gradient(linear,left top, right top,from(var(--tw-gradient-stops)));background-image:linear-gradient(90deg,var(--tw-gradient-stops))}.bg-gradient-to-b{background-image:-webkit-gradient(linear,left top, left bottom,from(var(--tw-gradient-stops)));background-image:linear-gradient(180deg,var(--tw-gradient-stops))}.from-yellow{--tw-gradient-from:#ffa713;--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to,rgba(255,167,19,0))}.from-blue{--tw-gradient-from:#2000ff;--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to,rgba(32,0,255,0))}.via-yellow{--tw-gradient-stops:var(--tw-gradient-from),#ffa713,var(--tw-gradient-to,rgba(255,167,19,0))}.to-purple{--tw-gradient-to:#783cdc}.to-pink{--tw-gradient-to:#ff1f7c}.border-transparent{border-color:transparent}.border-black{--tw-border-opacity:1;border-color:rgba(37,37,37,var(--tw-border-opacity))}.border-white{--tw-border-opacity:1;border-color:rgba(255,255,255,var(--tw-border-opacity))}.border-gray-400{--tw-border-opacity:1;border-color:rgba(227,226,230,var(--tw-border-opacity))}.border-gray-600{--tw-border-opacity:1;border-color:rgba(174,169,171,var(--tw-border-opacity))}.border-gray-800{--tw-border-opacity:1;border-color:rgba(95,93,94,var(--tw-border-opacity))}.border-yellow{--tw-border-opacity:1;border-color:rgba(255,167,19,var(--tw-border-opacity))}.border-blue{--tw-border-opacity:1;border-color:rgba(32,0,255,var(--tw-border-opacity))}.border-light-blue{--tw-border-opacity:1;border-color:rgba(226,233,244,var(--tw-border-opacity))}.border-sand{--tw-border-opacity:1;border-color:rgba(255,235,202,var(--tw-border-opacity))}.hover\\:border-blue:hover{--tw-border-opacity:1;border-color:rgba(32,0,255,var(--tw-border-opacity))}.hover\\:border-pink:hover{--tw-border-opacity:1;border-color:rgba(255,31,124,var(--tw-border-opacity))}.focus\\:border-transparent:focus{border-color:transparent}.focus\\:border-blue:focus{--tw-border-opacity:1;border-color:rgba(32,0,255,var(--tw-border-opacity))}.rounded-sm{border-radius:.125rem}.rounded{border-radius:.25rem}.rounded-md{border-radius:.375rem}.rounded-lg{border-radius:.5rem}.rounded-3xl{border-radius:1.5rem}.rounded-full{border-radius:9999px}.rounded-t{border-top-left-radius:.25rem}.rounded-r,.rounded-t{border-top-right-radius:.25rem}.rounded-b,.rounded-r{border-bottom-right-radius:.25rem}.rounded-b{border-bottom-left-radius:.25rem}.focus\\:rounded:focus{border-radius:.25rem}.focus\\:rounded-full:focus{border-radius:9999px}.border-solid{border-style:solid}.border-none{border-style:none}.border-2{border-width:2px}.border{border-width:1px}.border-t{border-top-width:1px}.border-b{border-bottom-width:1px}.border-l{border-left-width:1px}.cursor-default{cursor:default}.cursor-pointer{cursor:pointer}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:-ms-flexbox;display:flex}.inline-flex{display:-ms-inline-flexbox;display:inline-flex}.grid{display:grid}.contents{display:contents}.hidden{display:none}.flex-col{-ms-flex-direction:column;flex-direction:column}.flex-wrap{-ms-flex-wrap:wrap;flex-wrap:wrap}.flex-nowrap{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.place-items-center{place-items:center}.items-end{-ms-flex-align:end;align-items:flex-end}.items-center{-ms-flex-align:center;align-items:center}.self-start{-ms-flex-item-align:start;align-self:flex-start}.justify-items-center{justify-items:center}.justify-center{-ms-flex-pack:center;justify-content:center}.justify-between{-ms-flex-pack:justify;justify-content:space-between}.flex-grow{-ms-flex-positive:1;flex-grow:1}.flex-shrink-0{-ms-flex-negative:0;flex-shrink:0}.flex-shrink{-ms-flex-negative:1;flex-shrink:1}.font-mono{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.font-sohne{font-family:Sohne-Buch,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.font-sohne-semibold{font-family:Sohne-Halbfett,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.font-sohne-bold{font-family:Sohne-Dreiviertelfett,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.font-semibold{font-weight:600}.font-bold{font-weight:700}.h-3{height:12px}.h-4{height:16px}.h-5{height:1.25rem}.h-6{height:24px}.h-7{height:1.75rem}.h-8{height:32px}.h-9{height:2.25rem}.h-10{height:40px}.h-11{height:2.75rem}.h-12{height:3rem}.h-13{height:52px}.h-20{height:80px}.h-96{height:24rem}.h-full{height:100%}.h-screen{height:100vh}.text-xs{font-size:.75rem}.text-sm{font-size:.875rem}.text-base{font-size:1rem}.text-lg{font-size:1.125rem}.text-xl{font-size:1.5rem}.text-3xl{font-size:2.5rem}.leading-8{line-height:2rem}.m-2{margin:8px}.my-1{margin-top:4px;margin-bottom:4px}.my-2{margin-top:8px;margin-bottom:8px}.mx-2{margin-left:8px;margin-right:8px}.my-5{margin-top:1.25rem;margin-bottom:1.25rem}.mx-auto{margin-left:auto;margin-right:auto}.mt-1{margin-top:4px}.mr-1{margin-right:4px}.ml-1{margin-left:4px}.mt-2{margin-top:8px}.mr-2{margin-right:8px}.ml-2{margin-left:8px}.mr-3{margin-right:12px}.mb-3{margin-bottom:12px}.ml-3{margin-left:12px}.mt-4{margin-top:16px}.mr-4{margin-right:16px}.mb-4{margin-bottom:16px}.ml-4{margin-left:16px}.mt-5{margin-top:1.25rem}.mt-6{margin-top:24px}.ml-7{margin-left:1.75rem}.mt-8{margin-top:32px}.mr-8{margin-right:32px}.mt-10{margin-top:40px}.mb-10{margin-bottom:40px}.mt-24{margin-top:6rem}.mt-32{margin-top:8rem}.mt-1px{margin-top:1px}.mt-2px{margin-top:2px}.max-w-3xl{max-width:48rem}.max-w-full{max-width:100%}.opacity-0{opacity:0}.opacity-25{opacity:.25}.opacity-40{opacity:.4}.opacity-50{opacity:.5}.opacity-75{opacity:.75}.focus\\:outline-none:focus,.outline-none{outline:2px solid transparent;outline-offset:2px}.overflow-x-auto{overflow-x:auto}.overflow-y-scroll{overflow-y:scroll}.p-1{padding:4px}.p-2{padding:8px}.p-6{padding:24px}.p-10{padding:40px}.py-1{padding-top:4px;padding-bottom:4px}.px-1{padding-left:4px;padding-right:4px}.py-2{padding-top:8px;padding-bottom:8px}.px-2{padding-left:8px;padding-right:8px}.py-3{padding-top:12px;padding-bottom:12px}.px-3{padding-left:12px;padding-right:12px}.px-4{padding-left:16px;padding-right:16px}.py-5{padding-top:1.25rem;padding-bottom:1.25rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.px-6{padding-left:24px;padding-right:24px}.px-7{padding-left:1.75rem;padding-right:1.75rem}.py-8{padding-top:32px;padding-bottom:32px}.px-8{padding-left:32px;padding-right:32px}.px-12{padding-left:3rem;padding-right:3rem}.pr-1{padding-right:4px}.pb-1{padding-bottom:4px}.pl-1{padding-left:4px}.pl-2{padding-left:8px}.pt-3{padding-top:12px}.pb-3{padding-bottom:12px}.pr-4{padding-right:16px}.pb-4{padding-bottom:16px}.pl-4{padding-left:16px}.pt-5{padding-top:1.25rem}.pb-5{padding-bottom:1.25rem}.pt-6{padding-top:24px}.pb-6{padding-bottom:24px}.pl-6{padding-left:24px}.pt-7{padding-top:1.75rem}.pr-7{padding-right:1.75rem}.pb-7{padding-bottom:1.75rem}.pl-7{padding-left:1.75rem}.pb-8{padding-bottom:32px}.pr-9{padding-right:2.25rem}.pt-10{padding-top:40px}.pr-10{padding-right:40px}.pr-12{padding-right:3rem}.pr-32{padding-right:8rem}.pb-3px{padding-bottom:3px}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.top-0{top:0}.right-0{right:0}.left-0{left:0}.top-7{top:1.75rem}.top-10{top:40px}.right-10{right:40px}.-right-0{right:0}.-top-1{top:-4px}.-top-10{top:-40px}.top-1\\/2{top:50%}.left-1\\/2{left:50%}.resize-none{resize:none}*{--tw-shadow:0 0 transparent}.shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,0.05)}.shadow,.shadow-sm{-webkit-box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,0.1),0 1px 2px 0 rgba(0,0,0,0.06)}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06);-webkit-box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,0.5);--tw-ring-offset-shadow:0 0 transparent;--tw-ring-shadow:0 0 transparent}.focus\\:ring-1:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)}.focus\\:ring-1:focus,.focus\\:ring-2:focus{-webkit-box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent)}.focus\\:ring-2:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)}.focus\\:ring:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);-webkit-box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent)}.focus\\:ring-white:focus{--tw-ring-opacity:1;--tw-ring-color:rgba(255,255,255,var(--tw-ring-opacity))}.focus\\:ring-gray-600:focus{--tw-ring-opacity:1;--tw-ring-color:rgba(174,169,171,var(--tw-ring-opacity))}.focus\\:ring-yellow:focus{--tw-ring-opacity:1;--tw-ring-color:rgba(255,167,19,var(--tw-ring-opacity))}.focus\\:ring-blue:focus{--tw-ring-opacity:1;--tw-ring-color:rgba(32,0,255,var(--tw-ring-opacity))}.text-left{text-align:left}.text-center{text-align:center}.text-black{--tw-text-opacity:1;color:rgba(37,37,37,var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}.text-gray-600{--tw-text-opacity:1;color:rgba(174,169,171,var(--tw-text-opacity))}.text-gray-700{--tw-text-opacity:1;color:rgba(55,65,81,var(--tw-text-opacity))}.text-gray-800{--tw-text-opacity:1;color:rgba(95,93,94,var(--tw-text-opacity))}.text-yellow{--tw-text-opacity:1;color:rgba(255,167,19,var(--tw-text-opacity))}.text-blue{--tw-text-opacity:1;color:rgba(32,0,255,var(--tw-text-opacity))}.text-pink{--tw-text-opacity:1;color:rgba(255,31,124,var(--tw-text-opacity))}.text-teal{--tw-text-opacity:1;color:rgba(0,232,198,var(--tw-text-opacity))}.hover\\:text-blue:hover{--tw-text-opacity:1;color:rgba(32,0,255,var(--tw-text-opacity))}.hover\\:text-pink:hover{--tw-text-opacity:1;color:rgba(255,31,124,var(--tw-text-opacity))}.uppercase{text-transform:uppercase}.capitalize{text-transform:capitalize}.underline{text-decoration:underline}.line-through{text-decoration:line-through}.select-none{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.visible{visibility:visible}.invisible{visibility:hidden}.whitespace-normal{white-space:normal}.whitespace-nowrap{white-space:nowrap}.w-2{width:8px}.w-3{width:12px}.w-4{width:16px}.w-5{width:1.25rem}.w-6{width:24px}.w-7{width:1.75rem}.w-8{width:32px}.w-9{width:2.25rem}.w-10{width:40px}.w-11{width:2.75rem}.w-13{width:52px}.w-20{width:80px}.w-48{width:12rem}.w-96{width:24rem}.w-128{width:32rem}.w-11\\/12{width:91.666667%}.w-full{width:100%}.w-screen{width:100vw}.z-0{z-index:0}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-40{z-index:40}.z-50{z-index:50}.gap-x-0{-moz-column-gap:0;-webkit-column-gap:0;column-gap:0}.gap-y-4{row-gap:16px}.grid-flow-row{grid-auto-flow:row}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.transform{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;-webkit-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-180{--tw-rotate:180deg}.translate-x-full{--tw-translate-x:100%}.-translate-x-1\\/2{--tw-translate-x:-50%}.-translate-y-1\\/2{--tw-translate-y:-50%}.-translate-y-full{--tw-translate-y:-100%}@-webkit-keyframes spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes ping{75%,to{-webkit-transform:scale(2);transform:scale(2);opacity:0}}@keyframes ping{75%,to{-webkit-transform:scale(2);transform:scale(2);opacity:0}}@-webkit-keyframes pulse{50%{opacity:.5}}@keyframes pulse{50%{opacity:.5}}@-webkit-keyframes bounce{0%,to{-webkit-transform:translateY(-25%);transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{-webkit-transform:none;transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}}@keyframes bounce{0%,to{-webkit-transform:translateY(-25%);transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{-webkit-transform:none;transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}}.animate-spin{-webkit-animation:spin 1s linear infinite;animation:spin 1s linear infinite}.animate-pulse{-webkit-animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite;animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}.filter{--tw-blur:var(--tw-empty, );--tw-brightness:var(--tw-empty, );--tw-contrast:var(--tw-empty, );--tw-grayscale:var(--tw-empty, );--tw-hue-rotate:var(--tw-empty, );--tw-invert:var(--tw-empty, );--tw-saturate:var(--tw-empty, );--tw-sepia:var(--tw-empty, );--tw-drop-shadow:var(--tw-empty, );-webkit-filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.blur{--tw-blur:blur(8px)}@font-face{font-family:Sohne-Dreiviertelfett;src:url(../../global/fonts/Sohne-Dreiviertelfett.otf)}@font-face{font-family:Sohne-Buch;src:url(../../global/fonts/Sohne-Buch.otf)}@media (min-width:640px){.sm\\:rounded-full{border-radius:9999px}.sm\\:block{display:block}.sm\\:inline-block{display:inline-block}.sm\\:inline-flex{display:-ms-inline-flexbox;display:inline-flex}.sm\\:hidden{display:none}.sm\\:flex-row{-ms-flex-direction:row;flex-direction:row}.sm\\:justify-start{-ms-flex-pack:start;justify-content:flex-start}.sm\\:text-4xl{font-size:3.75rem}.sm\\:my-0{margin-top:0;margin-bottom:0}.sm\\:mx-10{margin-left:40px;margin-right:40px}.sm\\:mt-0{margin-top:0}.sm\\:mb-0{margin-bottom:0}.sm\\:mt-1{margin-top:4px}.sm\\:mr-4{margin-right:16px}.sm\\:ml-8{margin-left:32px}.sm\\:mt-10{margin-top:40px}.sm\\:ml-10{margin-left:40px}.sm\\:-mt-3{margin-top:-12px}.sm\\:py-5{padding-top:1.25rem;padding-bottom:1.25rem}.sm\\:py-6{padding-top:24px;padding-bottom:24px}.sm\\:px-7{padding-left:1.75rem;padding-right:1.75rem}.sm\\:py-10{padding-top:40px;padding-bottom:40px}.sm\\:py-11{padding-top:2.75rem;padding-bottom:2.75rem}.sm\\:px-56{padding-left:14rem;padding-right:14rem}.sm\\:pb-5{padding-bottom:1.25rem}.sm\\:pt-6{padding-top:24px}.sm\\:pt-7{padding-top:1.75rem}.sm\\:pr-9{padding-right:2.25rem}.sm\\:pb-10{padding-bottom:40px}.sm\\:pl-10{padding-left:40px}.sm\\:top-2{top:8px}.sm\\:right-2{right:8px}.sm\\:whitespace-nowrap{white-space:nowrap}.sm\\:w-104{width:26rem}}@media (min-width:768px){.md\\:max-w-3xl{max-width:48rem}.md\\:max-w-4xl{max-width:56rem}}"}}]);