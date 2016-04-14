import { createStore, applyMiddleware, compose } from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import DevTools from '../containers/devtools'
import rootReducer from '../reducers'

const enhancer = compose(
  applyMiddleware(thunk, createLogger()),
  DevTools.instrument()
)

export default (initialState) => {
  const store = createStore(
    rootReducer,
    initialState,
    enhancer
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store;
}
