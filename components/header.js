import html from 'yo-yo'

module.exports = ({ title, menu }, dispatch) => {
  return html`
<header id="header">
  <div class="logo">
    <span class="icon fa-github"></span>
    <i class="fab fa-github"></i>
  </div>
  <div class="content">
    <div class="inner">
      <h1>${title}</h1>
      <p>A fully responsive site template designed by <a href="https://html5up.net">HTML5 UP</a></p>
      <p>Ported to <a href="https://github.com/maxogden/yo-yo">yoyo</a>, a tiny library for building React style modular UI components, by <a href="http://bradymat.com">bradymat</a></p>
    </div>
  </div>
  ${nav(menu)}
</header>
`
  function nav (menuItems) {
    return html`
    <nav>
      <ul>
        ${menuItems.map(function({route, label}, i) {
            return html`<li key={i} onclick=${() => changePage(route)} ><a>${label}</a></li>`
        })}
      </ul>
    </nav>
    `
  }
  function changePage (route) {
    dispatch({type: 'CHANGE_ROUTE', payload: route})
  }
}
