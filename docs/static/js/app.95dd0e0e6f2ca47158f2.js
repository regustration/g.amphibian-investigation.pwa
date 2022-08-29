!function(e){function t(t){for(var n,a,o=t[0],c=t[1],l=t[2],u=0,p=[];u<o.length;u++)a=o[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(d&&d(t);p.length;)p.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,o=1;o<r.length;o++){var c=r[o];0!==i[c]&&(n=!1)}n&&(s.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},i={0:0},s=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/g.amphibian-investigation.pwa/";var o=window.webpackJsonp=window.webpackJsonp||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var d=c;s.push([51,1]),r()}({50:function(e,t,r){},51:function(e,t,r){"use strict";r.r(t);var n=r(26);Object(n.a)("./service-worker.js",{registrationOptions:{scope:"./"},ready(e){console.log("Service worker is active.")},registered(e){console.log("Service worker has been registered.")},cached(e){console.log("Content has been cached for offline use.")},updatefound(e){console.log("New content is downloading.")},updated(e){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var i,s,a,o,c=r(27),l=r.n(c),d=(r(16),r(0));let u=(s=(i=Object).getPrototypeOf||function(e){return e.__proto__},a=i.setPrototypeOf||function(e,t){return e.__proto__=t,e},o="object"==typeof Reflect?Reflect.construct:function(e,t,r){var n,i=[null];return i.push.apply(i,t),n=e.bind.apply(e,i),a(new n,r.prototype)},function(e){var t=s(e);return a(e,a((function(){return o(t,arguments,s(this).constructor)}),t))})(class extends d.a{constructor(){super(...arguments),l()(this,"_record",e=>{const{_behaviorChip:t}=this,[r,n]=e,{type:i,detail:s}=r;return d.c`<p><b>${i} ${s}</b> ${n.map(t)}</p>`})}static get properties(){return{result:{type:Array},copytime:{type:String}}}static get styles(){return d.b`:host {
        display: block;
      }
      .hidden {
        display: none;
      }
      .list-block {
        display: grid;
        grid-template-columns: repeat(3, .3333fr);
        grid-gap: 10px;
        font-size: 14px;
      }

      @media only screen and (max-width:800px) {
        .list-block {
          grid-template-columns: repeat(2, .5fr);
          grid-gap: 12px
        }
      }

      @media only screen and (max-width:540px) {
        .list-block {
          grid-template-columns: 1fr;
        }
      }

      h3 {
        margin: 10px 0;
      }

      p {
        margin: .25em 0;
      }

      .data-card {
        padding: 10px 15px;
        border: 1px solid #dedede;
        border-radius: 5px;
        background: rgba(255,255,255, .5);
      }
      .card-title-groups {
        display: grid;
        grid-template-columns: 1fr max-content;
        grid-template-rows: .5fr .5fr;
        grid-template-areas: "commonname statistics" "sciencename statistics";
      }
      .card-title-groups > h3 {
        grid-area: commonname;
        margin-bottom: 0;
      }
      .card-title-groups > small {
        grid-area: sciencename;
        color: #aaa;
        font-weight: normal;
        font-style: italic;
        margin-bottom: 10px;
      }
      .card-title-groups > div {
        grid-area: statistics;
      }
      .card-title-groups .summary-groups {
        margin-top: 12px;
      }
      .card-body {
        background: #f1f1f1;
      }
      .card-body > p:nth-child(even) {
        background: #e5e5e5;
      }

      .data-item {
        border-radius: 5px;
        padding: 0 5px;
        margin: 2px 3px;
        box-shadow: 0 0 1px black;
        display: inline-block;
        background: #f6e09f;
      }

      .summary {
        display: flex;
        align-items: center;
        color: #aaa;
        margin: 2px 0;
      }
      .summary svg {
        fill: #aaa;
        width: 1.2em;
        height: 1.2em;
        vertical-align: sub;
      }
      .summary span {
        margin: 0 8px 0 4px;
        line-height: 20px;
      }
      .summary-groups {
        display: flex;
        justify-content: space-between;
      }

      .button {
        width: 120px;
        height: 40px;
        background: orange;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        border-radius: 5px;
      }`}render(){const{result:e}=this;return d.c`${e&&e.length?d.c`<div><a href="#" class="button" @click="${this.outputApiData}">複製API資料</a> <small>API資料複製：${this.copytime||"-"}</small></div><p>種類總數： ${e.length} 種</p><p>紀錄筆數：${e.reduce((e,t)=>e+t.records.reduce((e,t)=>e+t[1].length,0),0)} 筆</p>${this._summaryOverview(e.see,e.hear)}<div class="list-block">${e.map(e=>this._listItem(e))}</div>`:"等待轉換"}`}async outputApiData(e){e.preventDefault();const t=[];this.result.forEach(e=>{const{species:r,records:n}=e,i={frog_id:r.id};n.forEach(e=>{const{typeId:r,detailId:n}=e[0];Object.assign(i,{habitat_id:r,habitat_p1_id:n}),e[1].forEach(e=>{let{form:r,count:n,action:s}=e;if("鳴"===r)n>=50?n=">50":n>=40?n="40-49":n>=30?n="30-39":n>=20?n="20-29":n>=10&&(n="10-19"),t.push(Object.assign({},i,{observing_method_id:1,amount:n,living_type_id:4,living_type_ids:4,behavior_id:2,behavior_ids:2,memo:null,_:Date.parse(new Date)}));else if("卵"===r||"蝌蚪"===r)t.push(Object.assign({},i,{observing_method_id:0,amount:"不計數",living_type_id:"卵"===r?1:2,living_type_ids:"卵"===r?1:2,behavior_id:0,behavior_ids:0,memo:null,_:Date.parse(new Date)}));else{let e=s.id;e<0&&(e=8),"幼"===r?r=3:"公"===r?r=4:"母"===r?r=5:"成"===r&&(r=8),t.push(Object.assign({},i,{observing_method_id:0,amount:n,living_type_id:r,living_type_ids:r,behavior_id:e,behavior_ids:e,memo:null,_:Date.parse(new Date)}))}})})}),navigator.clipboard.writeText(JSON.stringify(t)).then(e=>{this.copytime=(new Date).toLocaleString(),console.log("資料已複製!")}).catch(e=>console.warn("無法複製",e))}_hear(e){return d.c`<span style="color:#555;" title="聽音數量"><svg viewBox="0 0 24 24"><path fill="#555" d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z"/></svg> ${e}</span>`}_see(e){const{froglet:t,male:r,female:n,grown:i}=e;return d.c`<span style="color:#555;" title="目視數量"><svg viewBox="0 0 24 24"><path fill="#555" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg> ${t+r+n+i}</span>`}_seeDetail(e,t){const{froglet:r,male:n,female:i,grown:s}=e;return d.c`<span title="幼蛙"><svg viewBox="0 0 24 24"><path d="M13,2V10H21A8,8 0 0,0 13,2M19.32,15.89C20.37,14.54 21,12.84 21,11H6.44L5.5,9H2V11H4.22C4.22,11 6.11,15.07 6.34,15.42C5.24,16 4.5,17.17 4.5,18.5A3.5,3.5 0 0,0 8,22C9.76,22 11.22,20.7 11.46,19H13.54C13.78,20.7 15.24,22 17,22A3.5,3.5 0 0,0 20.5,18.5C20.5,17.46 20.04,16.53 19.32,15.89M8,20A1.5,1.5 0 0,1 6.5,18.5A1.5,1.5 0 0,1 8,17A1.5,1.5 0 0,1 9.5,18.5A1.5,1.5 0 0,1 8,20M17,20A1.5,1.5 0 0,1 15.5,18.5A1.5,1.5 0 0,1 17,17A1.5,1.5 0 0,1 18.5,18.5A1.5,1.5 0 0,1 17,20Z"/></svg> ${r} </span><span title="公蛙"><svg viewBox="0 0 24 24"><path d="M9,9C10.29,9 11.5,9.41 12.47,10.11L17.58,5H13V3H21V11H19V6.41L13.89,11.5C14.59,12.5 15,13.7 15,15A6,6 0 0,1 9,21A6,6 0 0,1 3,15A6,6 0 0,1 9,9M9,11A4,4 0 0,0 5,15A4,4 0 0,0 9,19A4,4 0 0,0 13,15A4,4 0 0,0 9,11Z"/></svg> ${n} </span><span title="母蛙"><svg viewBox="0 0 24 24"><path d="M12,4A6,6 0 0,1 18,10C18,12.97 15.84,15.44 13,15.92V18H15V20H13V22H11V20H9V18H11V15.92C8.16,15.44 6,12.97 6,10A6,6 0 0,1 12,4M12,6A4,4 0 0,0 8,10A4,4 0 0,0 12,14A4,4 0 0,0 16,10A4,4 0 0,0 12,6Z"/></svg> ${i} </span><span title="成蛙"><svg viewBox="0 0 24 24"><path d="M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z"/></svg> ${s}</span>`}_summaryOverview(e,t){return d.c`<div class="summary">${this._hear(t)}</div><div class="summary">${this._see(e)}${this._seeDetail(e)}</div>`}_summarySpecies(e,t){return d.c`<div class="summary-groups"><div class="summary">${this._hear(t)}</div><div class="summary">${this._see(e)}</div></div><div class="summary">${this._seeDetail(e)}</div>`}_listItem(e){const{_record:t}=this,{species:r,records:n,summary:i}=e,{genus:s,species:a,abbr:o}=r;return d.c`<div class="data-card"><div class="card-title-groups"><h3>${o}<br></h3><small>${s} ${a}</small><div>${this._summarySpecies(i.see,i.hear)}</div></div><div class="card-body">${n.map(t)}</div></div>`}_behaviorChip(){let{form:e,count:t,action:r}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return["卵","蝌蚪"].indexOf(e)>=0?d.c`<span class="data-item">${e}</span>`:"鳴"===e?d.c`<span class="data-item">${e} ${t}</span>`:d.c`<span class="data-item">${e} ${t} ${r.name}</span>`}});customElements.define("investigation-list",u);let p=function(e){var t=e.getPrototypeOf||function(e){return e.__proto__},r=e.setPrototypeOf||function(e,t){return e.__proto__=t,e},n="object"==typeof Reflect?Reflect.construct:function(e,t,n){var i,s=[null];return s.push.apply(s,t),i=e.bind.apply(e,s),r(new i,n.prototype)};return function(e){var i=t(e);return r(e,r((function(){return n(i,arguments,t(this).constructor)}),i))}}(Object)(class extends d.a{static get properties(){return{countingStyle:{type:String,attribute:"counting-style",reflect:!0}}}render(){return d.c`<div class="jumbotron py-3 m-0"><p>${this.renderSimpleInstructor()}</p><hr class="my-2"><p>ex: ${this.renderSimpleExample()}<br><span style="color:#aaa;">// 台北赤蛙 公蛙5隻聚集 在永水域植物</span></p><div id="furtherExplain" class="collapse"><div class="py-3 border-top">${this.renderFurtherInstructor()}</div></div><button class="btn btn-info" type="button" data-toggle="collapse" data-target="#furtherExplain" aria-expanded="true" aria-controls="furtherExplain">詳細說明</button></div>`}renderSimpleInstructor(){return"gus"===this.countingStyle?"{物種} {型態/聽音}{數量}{行為} {棲地}":"{物種} {型態}.{棲地}.{數量}.{行為/聽音}"}renderSimpleExample(){return"gus"===this.countingStyle?"北赤 公5聚 水植":"北赤 4.6.5.2"}renderFurtherInstructor(){return"gus"===this.countingStyle?d.c`<p class="lead">蛙調紀錄文字格式</p><p><kbd>{種類}</kbd>：種類可以使用常用的中文俗名或是簡稱。</p><p><kbd>{型態/聽音}</kbd>：使用 <kbd>卵</kbd>、<kbd>蝌蚪</kbd>、<kbd>幼</kbd>、<kbd>公</kbd>、<kbd>母</kbd>、<kbd>成</kbd>，表示目視的蛙類型態；單獨使用 <kbd>鳴</kbd> 表示聽音紀錄；使用 <kbd>抱接</kbd> 可直接表示正在配對的個體，例如 <code>抱接1</code> 會轉換成公1配對和母1配對。</p><p><kbd>{數量}</kbd>：只使用數字表示數量，卵和蝌蚪無須計數，聽音記錄直接實際數字，不用數量區間。</p><p><kbd>{行為}</kbd>：直接使用行為名稱或簡寫，亦可使用系統代號#{系統代號}，目視紀錄(幼、公、母、成)的<b>9.單獨</b>行為可省略不寫。</p><p><kbd>{棲地}</kbd>：使用棲地簡稱或系統代號 @{棲地屬性id}，例如@8表示暫水岸。</p><p>多筆紀錄可以串接，例如：<br><code class="code-block">長腳 公1 公3聚 暫水岸 母2 空地<br>面天 鳴10 長草<br>面天樹蛙 公1鳴 長草<br>小雨 抱接2 公2 短草<br>樹蟾<br>&emsp;公5聚 母3聚 鳴3 水植<br>&emsp;幼2 底層<br></code></p><p>程式會自動整理合併調查記錄。</p>`:d.c`<p>簡潔代號模式，最適合用來統計手抄紀錄和熟悉代號的使用者。</p><p class="lead">蛙調紀錄文字格式</p><p><kbd>{種類}</kbd>：種類可以使用常用的中文俗名或是簡稱。</p><p><kbd>{棲地}</kbd>：使用棲地代號。</p><p><kbd>{型態}</kbd>：使用系統型態代號。</p><p><kbd>{數量}</kbd>：只使用數字表示數量，卵和蝌蚪無須計數，聽音記錄直接實際數字，不用數量區間。</p><p><kbd>{行為/聽音}</kbd>：行為代號，卵和蝌蚪的行為可不填寫。紀錄聽音時，直接使用行為代號<b> 3 </b>，若是目視鳴叫，則使用<b> 目3 </b>。</p><p>多筆紀錄可以串接，例如：<br><code class="code-block">長腳 4.8.1.9 4.8.3.2 5.22.2.9<br>面天 4.16.10.3<br>面天樹蛙 4.16.1.目3<br>小雨 4.15.2.6 5.15.2.6 4.15.2.9<br>樹蟾<br>&emsp;4.6.5.2 5.6.3.2 4.6.3.3<br>&emsp;3.13.2.9<br></code></p><p>程式會自動整理合併調查記錄。</p>`}createRenderRoot(){return this}});customElements.define("style-instructor",p);let f=function(e){var t=e.getPrototypeOf||function(e){return e.__proto__},r=e.setPrototypeOf||function(e,t){return e.__proto__=t,e},n="object"==typeof Reflect?Reflect.construct:function(e,t,n){var i,s=[null];return s.push.apply(s,t),i=e.bind.apply(e,s),r(new i,n.prototype)};return function(e){var i=t(e);return r(e,r((function(){return n(i,arguments,t(this).constructor)}),i))}}(Object)(class extends d.a{static get properties(){return{input:{type:Array}}}static get styles(){return d.b`:host {
        max-height: 200px;
        overflow: auto;
        display: block;
      }
      p {
        background: #ffc107;
        color: #555;
        display: block;
        padding: 2px 8px;
        border-radius: 3px;
      }`}render(){const{input:e}=this;return d.c`${e.map(this._toast)}`}constructor(){super(),this.input=[]}_toast(e){return d.c`<p>${e}</p>`}});customElements.define("warning-toast",f);const h=[["Bufonidae",[["Bufo",[["bankorensis",1,["盤古蟾蜍","盤古"]]]],["Cyclophthalmus",[["mniszechi",38,["海蟾蜍","海蟾","蔗蟾"]]]],["Duttaphrynus",[["melanostictus",2,["黑眶蟾蜍","黑眶","黑框"]]]]]],["Dicroglossidae",[["Fejervarya",[["cancrivora",22,["海蛙"]],["limnocharis",14,["澤蛙"]]]],["Hoplobatrachus",[["rugulosus",18,["虎皮蛙","虎皮","蛤蟆"]]]],["Limnonectes",[["fujianensis",12,["福建大頭蛙","大頭","福建"]]]]]],["Eleutherodactylidae",[["Eleutherodactylus",[["planirostris",37,["溫室蟾","溫室"]]]]]],["Hylidae",[["Hyla",[["chinensis",3,["中國樹蟾","樹蟾","中國"]]]]]],["Microhylidae",[["Kaloula",[["pulchra pulchra",8,["亞洲錦蛙","亞錦"]]]],["Microhyla",[["butleri",4,["巴氏小雨蛙","巴氏"]],["fissipes",6,["小雨蛙","小雨"]],["heymonsi",5,["黑蒙西氏小雨蛙","黑蒙"]]]],["Micryletta",[["steinegeri",7,["史丹吉氏小雨蛙","史丹","屎蛋"]]]]]],["Ranidae",[["Babina",[["adenopleura",9,["腹斑蛙","腹斑"]],["okinavana",17,["豎琴蛙","豎琴"]]]],["Hylarana",[["guentheri",11,["貢德氏赤蛙","貢德","狗蛙"]],["latoucii",13,["拉都希氏赤蛙","拉都"]],["taipehensis",21,["台北赤蛙","北赤"]]]],["Lithobates",[["catesbeianus",10,["美洲牛蛙","牛蛙","美牛"]]]],["Odorrana",[["swinhoana",20,["斯文豪氏赤蛙","斯文","鳥蛙"]]]],["Pelophylax",[["fukienensis",16,["金線蛙","金線"]]]],["Rana",[["longicrus",15,["長腳赤蛙","長腳"]],["sauteri",19,["梭德氏赤蛙","梭德"]]]]]],["Rhacophoridae",[["Buergeria",[["choui",23,["周氏樹蛙","日本","周氏"]],["otai",36,["太田樹蛙","太田"]],["robusta",24,["褐樹蛙","褐樹"]]]],["Kurixalus",[["berylliniris",34,["碧眼樹蛙","碧眼"]],["eiffingeri",25,["艾氏樹蛙","艾氏"]],["idiootocus",26,["面天樹蛙","面天"]],["wangi",35,["王氏樹蛙","王氏"]]]],["Polypedates",[["braueri",27,["布氏樹蛙","布氏"]],["megacephalus",33,["斑腿樹蛙","斑腿"]]]],["Zhangixalus",[["arvalis",28,["諸羅樹蛙","諸羅"]],["aurantiventris",29,["橙腹樹蛙","橙腹"]],["moltrechti",30,["莫氏樹蛙","莫氏"]],["prasinatus",31,["翡翠樹蛙","翡翠"]],["taipeianus",32,["台北樹蛙","北樹","台北"]]]]]]],m=[];h.forEach(e=>e[1].forEach(e=>e[1].forEach(e=>m.push(...e[2]))));const g=[[1,"流動水域",[[1,1,"< 5m",["流水"]],[2,2,"> 5m",["溪流"]],[3,3,"山澗瀑布",["山澗瀑布","瀑布"]]]],[8,"永靜水域",[[28,4,"水域",["水域"]],[29,5,"岸邊",["水岸"]],[30,6,"植物",["水植"]]]],[9,"暫靜水域",[[31,7,"水域",["暫水域","暫水"]],[32,8,"岸邊",["暫水岸"]],[33,9,"植物",["暫水植"]],[44,10,"植物積水",["植水"]]]],[10,"樹木",[[34,11,"喬木",["喬木","樹林"]],[35,12,"灌木",["灌木"]],[36,13,"底層",["底層"]],[37,14,"竹子",["竹子","竹林"]]]],[6,"草地",[[16,15,"短草",["短草"]],[17,16,"高草",["高草","長草"]]]],[11,"人造區域",[[45,17,"邊坡",["邊坡"]],[38,18,"乾溝",["乾溝"]],[39,19,"建物",["建物"]],[40,20,"車道",["車道"]],[41,21,"步道",["步道"]],[42,22,"空地",["空地"]]]],[12,"其他",[[43,23,"其他",["其他"]]]]],b=[];g.forEach(e=>e[2].forEach(e=>b.push("@"+e[1],...e[3])));const y=[[0,["無"]],[1,["聚集","聚"]],[2,["鳴叫","鳴"]],[3,["築巢"]],[4,["領域"]],[5,["配對","抱接"]],[6,["打架"]],[7,["護幼"]],[8,["單獨"]],[9,["覓食"]],[10,["休息"]],[11,["屍體","屍"]],[12,["畸形蛙","畸形"]],[13,["病蛙"]]],v=[];y.forEach(e=>v.push("#"+(e[0]+1),...e[1]));const w=new RegExp("(抱接|鳴|幼|公|母|成|蝌蚪|卵\\S?)(\\d+)?(\\S+)?(:\\S+)?");function _(e,t,r){if(e&&t.length){const n=r.find(t=>{const{genus:r,species:n}=t.species,{genus:i,species:s}=e;return`${r} ${n}`==`${i} ${s}`});n?k(n.records,t):r.push({species:e,records:t})}}function k(e,t){t.forEach(t=>{const r=e.find(e=>e[0].detailId===t[0].detailId);r?x(r[1],t[1]):e.push(t)})}function x(e,t){t.forEach(t=>{const r=e.find(e=>e.form===t.form&&e.action.id===t.action.id);r?r.count+=t.count:e.push(t)})}function A(e,t){e.froglet+=t.froglet,e.male+=t.male,e.female+=t.female,e.grown+=t.grown}function E(e){const t=e.trim().split(/\.|,/);if(t.length<1)return console.warn("empty line!"),null;let[r,n,i,s,a]=t.map(e=>(e||"").trim());switch(r=["","卵","蝌蚪","幼","公","母","成","鳴"][r],"蝌蚪"!==r&&"卵"!==r||(a=s,s=i,i=0),i=Number(i),s){case"目3":s="3";break;case"3":r="鳴";break;case void 0:s=9}const o=y.find(e=>e[0]===Number(s)-1);if(!o)return console.warn("看不懂這個行為代號"),null;let c={id:o[0],name:o[1][0]};return g.find(e=>e[2].find(t=>{if(t[1]===Number(n))return n={type:e[1],typeId:e[0],detail:t[2],detailId:t[0]},!0})),n&&n.detailId?[n,[{form:r,count:i,action:c,note:a}]]:(console.warn("看不懂這個棲地代號"),null)}function O(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const r=[];let n="",i=[];e.split(/\r?\n/).forEach((e,s)=>{if(!(e=e.trim()))return void console.log(`line ${s+1} is an empty line.`);let a=0,o=0;e.split(/\s/).forEach((e,c)=>{if(!e)return o+=1,void(c===a&&(a+=1));let l=m.indexOf(e)>=0;if(c===a&&0===s&&!l)throw t.push("Should started with a species name."),new Error("Should started with a species name.");if(l){if(i.length&&(_(n,i,r),n=null,i=[]),h.find(t=>t[1].find(r=>r[1].find(i=>i[2].find(s=>{if(s===e)return n={family:t[0],genus:r[0],species:i[0],abbr:i[2][0],id:i[1]},!0})))),!n)throw t.push(`${s+1}:${o} is an undefined species: ${e}.`),new Error(`${s+1}:${o} is an undefined species: ${e}.`)}else{const r=E(e);r?k(i,[r]):(t.push(`${s+1}:${o} is an undefined data: ${e}`),console.warn(`${s+1}:${o} is an undefined data: ${e}`))}o+=e.length+1})}),i.length&&(_(n,i,r),i=[]);let s={froglet:0,male:0,female:0,grown:0};return r.see=Object.assign({},s),r.hear=0,r.forEach(e=>{e.records.sort((e,t)=>e[0].typeId-t[0].typeId||e[0].detailId-t[0].detailId);const t=Object.assign({},s);let n=0;e.records.forEach(e=>{e[1].forEach(e=>{const{form:r,count:i}=e;switch(r){case"幼":t.froglet+=i;break;case"公":t.male+=i;break;case"母":t.female+=i;break;case"成":t.grown+=i;break;case"鳴":n+=i}})}),e.summary={see:t,hear:n},r.hear+=n,A(r.see,t)}),r.sort((e,t)=>{const{species:r}=e,{species:n}=t;return`${r.family} ${r.genus} ${r.species}`.localeCompare(`${n.family} ${n.genus} ${n.species}`)})}function C(e,t){const r=[];let n="",i=[],s=[];e.split(/\r?\n/).forEach((e,a)=>{if(!(e=e.trim()))return void console.log(`line ${a+1} is an empty line.`);let o=0,c=0;e.split(/\s/).forEach((e,l)=>{if(!e)return c+=1,void(l===o&&(o+=1));let d=m.indexOf(e)>=0;if(l===o&&0===a&&!d)throw t.push("Should started with a species name."),new Error("Should started with a species name.");if(d){if(i.length&&(_(n,i,r),n=null,i=[],s=[]),h.find(t=>t[1].find(r=>r[1].find(i=>i[2].find(s=>{if(s===e)return n={family:t[0],genus:r[0],species:i[0],abbr:i[2][0],id:i[1]},!0})))),!n)throw t.push(`${a+1}:${c} is an undefined species: ${e}.`),new Error(`${a+1}:${c} is an undefined species: ${e}.`)}else if(b.indexOf(e)>=0){let r;if("@"===e[0]){const t=Number(e.substring(1));g.find(e=>e[2].find(n=>{if(n[1]===t)return r={type:e[1],typeId:e[0],detail:n[2],detailId:n[0]},!0}))}else g.find(t=>t[2].find(n=>n[3].find(i=>{if(i===e)return r={type:t[1],typeId:t[0],detail:n[2],detailId:n[0]},!0})));if(!r)throw t.push(`${a+1}:${c} is an undefined habitat: ${e}.`),new Error(`${a+1}:${c} is an undefined habitat: ${e}.`);k(i,[[r,s]]),s=[]}else{const r=function(e){const t=e.match(w);if(!t)return console.warn("看不懂："+e),null;if("蝌蚪"===t[1]||"卵"===t[1][0])return[{form:t[1]}];const r=Number(t[2]);if("抱接"===t[1])return[{form:"公",count:r,action:{id:5,name:"配對"}},{form:"母",count:r,action:{id:5,name:"配對"}}];{let e=t[3];if(e){let t;if("#"===e[0]){const r=Number(e.substring(1))-1;t=y.find(e=>e[0]===r)}else t=y.find(t=>t[1].find(t=>t===e));if(!t)return console.warn("找不到行為"),null;e={id:t[0],name:t[1][0]}}else e={id:8,name:"單獨"};return[{form:t[1],count:r,action:e}]}}(e);r?x(s,r):(t.push(`${a+1}:${c} is an undefined data: ${e}`),console.warn(`${a+1}:${c} is an undefined data: ${e}`))}c+=e.length+1})}),i.length&&(_(n,i,r),i=[],s=[]);let a={froglet:0,male:0,female:0,grown:0};return r.see=Object.assign({},a),r.hear=0,r.forEach(e=>{e.records.sort((e,t)=>e[0].typeId-t[0].typeId||e[0].detailId-t[0].detailId);const t=Object.assign({},a);let n=0;e.records.forEach(e=>{e[1].forEach(e=>{const{form:r,count:i}=e;switch(r){case"幼":t.froglet+=i;break;case"公":t.male+=i;break;case"母":t.female+=i;break;case"成":t.grown+=i;break;case"鳴":n+=i}})}),e.summary={see:t,hear:n},r.hear+=n,A(r.see,t)}),console.log(r),r.sort((e,t)=>{const{species:r}=e,{species:n}=t;return`${r.family} ${r.genus} ${r.species}`.localeCompare(`${n.family} ${n.genus} ${n.species}`)})}r(50),$(()=>{const e=document.getElementById("raw-text"),t=document.querySelector("investigation-list"),r=document.querySelector("style-instructor");let n="sandi";document.querySelectorAll('input[name="counting-style"]').forEach(e=>e.addEventListener("change",e=>{n=e.target.value,r.countingStyle=n},!1)),document.getElementById("btn-translate").addEventListener("click",r=>{r.preventDefault();let i=[];const s="sandi"===n?O:C;try{t.result=s((e.value||"").trim(),i),console.log(t.result)}catch(r){console.warn(r),t.result=[]}finally{$("warning-toast")[0].input=i,i=[],$("investigation-list")[0].copytime=""}},!1)})}});