import { LitElement, html } from 'lit-element'

class StyleInstructor extends LitElement {
  static get properties () {
    return {
      countingStyle: { type: String, attribute: 'counting-style', reflect: true }
    }
  }

  render () {
    return html`
      <div class="jumbotron py-3 m-0">
        <p>${this.renderSimpleInstructor()}</p>
        <hr class="my-2">
        <p>
          ex: ${this.renderSimpleExample()}<br>
          <span style="color:#aaa;">// 台北赤蛙 公蛙5隻聚集 在永水域植物</span>
        </p>
        <div id="furtherExplain" class="collapse">
          <div class="py-3 border-top">${this.renderFurtherInstructor()}</div>
        </div>
        <button class="btn btn-info" type="button" data-toggle="collapse" data-target="#furtherExplain" aria-expanded="true" aria-controls="furtherExplain">
          詳細說明
        </button>
      </div>
    `
  }

  renderSimpleInstructor () {
    return this.countingStyle === 'gus'
      ? '{物種} {型態/聽音}{數量}{行為} {棲地}'
      : '{物種} {型態}.{棲地}.{數量}.{行為/聽音}'
  }

  renderSimpleExample () {
    return this.countingStyle === 'gus'
      ? '北赤 公5聚 水植'
      : '北赤 4.6.5.2'
  }

  renderFurtherInstructor () {
    if (this.countingStyle === 'gus') {
      return html`
        <p class="lead">蛙調紀錄文字格式</p>
        <p><kbd>{種類}</kbd>：種類可以使用常用的中文俗名或是簡稱。</p>
        <p><kbd>{型態/聽音}</kbd>：使用 <kbd>卵</kbd>、<kbd>蝌蚪</kbd>、<kbd>幼</kbd>、<kbd>公</kbd>、<kbd>母</kbd>、<kbd>成</kbd>，表示目視的蛙類型態；單獨使用 <kbd>鳴</kbd> 表示聽音紀錄；使用 <kbd>抱接</kbd> 可直接表示正在配對的個體，例如 <code>抱接1</code> 會轉換成公1配對和母1配對。</p>
        <p><kbd>{數量}</kbd>：只使用數字表示數量，卵和蝌蚪無須計數，聽音記錄直接實際數字，不用數量區間。</p>
        <p><kbd>{行為}</kbd>：直接使用行為名稱或簡寫，亦可使用系統代號#{系統代號}，目視紀錄(幼、公、母、成)的<b>9.單獨</b>行為可省略不寫。</p>
        <p><kbd>{棲地}</kbd>：使用棲地簡稱或系統代號 @{棲地屬性id}，例如@8表示暫水岸。</p>
        <p>多筆紀錄可以串接，例如：<br>
          <code class="code-block">
          長腳 公1 公3聚 暫水岸 母2 空地<br>
          面天 鳴10 長草<br>
          面天樹蛙 公1鳴 長草<br>
          小雨 抱接2 公2 短草<br>
          樹蟾<br>
          &emsp;公5聚 母3聚 鳴3 水植<br>
          &emsp;幼2 底層<br>
          </code>
        </p>
        <p>程式會自動整理合併調查記錄。</p>
      `
    } else {
      return html`
        <p>簡潔代號模式，最適合用來統計手抄紀錄和熟悉代號的使用者。</p>
        <p class="lead">蛙調紀錄文字格式</p>
        <p><kbd>{種類}</kbd>：種類可以使用常用的中文俗名或是簡稱。</p>
        <p><kbd>{棲地}</kbd>：使用棲地代號。</p>
        <p><kbd>{型態}</kbd>：使用系統型態代號。</p>
        <p><kbd>{數量}</kbd>：只使用數字表示數量，卵和蝌蚪無須計數，聽音記錄直接實際數字，不用數量區間。</p>
        <p><kbd>{行為/聽音}</kbd>：行為代號，卵和蝌蚪的行為可不填寫。紀錄聽音時，直接使用行為代號<b> 3 </b>，若是目視鳴叫，則使用<b> 目3 </b>。</p>
        <p>多筆紀錄可以串接，例如：<br>
          <code class="code-block">
          長腳 4.8.1.9 4.8.3.2 5.22.2.9<br>
          面天 4.16.10.3<br>
          面天樹蛙 4.16.1.目3<br>
          小雨 4.15.2.6 5.15.2.6 4.15.2.9<br>
          樹蟾<br>
          &emsp;4.4.5.2 5.4.3.2 4.3.3.3<br>
          &emsp;3.13.2.9<br>
          </code>
        </p>
        <p>程式會自動整理合併調查記錄。</p>
      `
    }
  }

  createRenderRoot () {
    return this
  }
}

customElements.define('style-instructor', StyleInstructor)
