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
        <div id="furtherExplain" class="collapse ">
          <div class="pb-3">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </div>
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
      return html``
    } else {
      return html``
    }
  }

  createRenderRoot () {
    return this
  }
}

customElements.define('style-instructor', StyleInstructor)
