import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'

export default function (initialState) {
  const store = createStore(rootReducer, initialState, compose(
      applyMiddleware(),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store;
}
