import html from 'yo-yo'
import header from './header'
import footer from './footer'

module.exports = (state, dispatch) => html`
    <div>
      <div id="wrapper">
        ${header(state, dispatch)}
        ${footer(state, dispatch)}
      </div>
    </div>
  `
