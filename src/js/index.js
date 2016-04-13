import '../css/style.css'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/app'
import configureStore from './store/configureStore'
import DevTools from './containers/devtools'
import { set } from './platform'
import Group from './components/group'
import TextBox from './components/textBox'
import Button from './components/button'
import Lookup from './components/lookup'
import Label from './components/label'
import alarm from './utils/alarm'

const store = configureStore();
set({
  controls: {
    Group, TextBox, Button, Lookup, Label
  },
  alarm
});

render(
  <Provider store={store}>
    <div>
      <App/>
      <DevTools/>
    </div>
  </Provider>,
  document.getElementById('root')
)
