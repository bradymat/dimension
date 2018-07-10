import { createStore } from 'redux'
import { update } from 'yo-yo'
import Router from 'sheet-router'

import reducer from './reducer'

import Home from './components'
import Intro from './components/intro'
import The404 from './components/404'

const initView = document.createElement('div')
document.querySelector('main').appendChild(initView)

const initState = {
  title: 'Dimension Quickstart',
  route: '/',
  routeHistory: [],
  menu: [
    {route: '/intro', label: 'Intro'},
    {route: '/work', label: 'Work'},
    {route: '/about', label: 'About'},
    {route: '/contact', label: 'Contact'},
    {route: '/elements', label: 'Elements'}
  ]
}

const { getState, dispatch, subscribe } = createStore(reducer, initState)

const route = Router({ default: '/404' }, [
  ['/', (params) => Home],
  ['/info', (params) => Info],
  ['/intro', (params) => Intro],
  ['/404', (params) => The404]
])

subscribe(() => {
  const state = getState()
  const newView = route(state.route)(state, dispatch)
  update(initView, newView)
})

dispatch({type: 'lemon'})
