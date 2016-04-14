import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Calc from './calc'
import configureStore from './store/configureStore'
import DevTools from './containers/devtools'
import Group from './components/group'
import TextBox from './components/textBox'
import Button from './components/button'
import Lookup from './components/lookup'
import Label from './components/label'

const store = configureStore();
const controls = { Group, TextBox, Button, Lookup, Label }

render(
  <Provider store={store}>
    <div>
      <Calc controls={controls}/>
      <DevTools/>
    </div>
  </Provider>,
  document.getElementById('root')
)
