import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers/index.jsx'

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunkMiddleware, createLogger())
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/index.jsx', () => {
      const nextRootReducer = require('../reducers/index.jsx').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
