import html from 'yo-yo'
import handler from '../handlers/back'

export default (dispatch) => html`<button onclick=${() => handler(dispatch)} >Back</button>`
