import html from 'yo-yo'
import nav from './nav'
import footer from './footer'

module.exports = (state, dispatch) => html`
    <div>
      <div id="wrapper">
      <header id="header">
        <div class="logo">
          <span class="icon fa-github"></span>
        </div>
        <div class="content">
          <div class="inner">
            <h1>${state.title}</h1>
            <p>A fully responsive site template designed by <a href="https://html5up.net">HTML5 UP</a></p>
            <p>Ported to <a href="https://github.com/maxogden/yo-yo">yoyo</a>, a tiny library for building React style modular UI components, by <a href="http://bradymat.com">bradymat</a></p>
          </div>
        </div>
        ${nav(state, dispatch)}
      </header>

        ${footer(state, dispatch)}
      </div>
    </div>
  `
