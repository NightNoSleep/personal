import {
    applyMiddleware,
    createStore,
    compose,
  } from 'redux';
  
  // import logger from 'redux-logger';
  import thunk from 'redux-thunk';
  // import promise from 'redux-promise-middleware';
  import reducer from './reducers';
  
  //const middleware = applyMiddleware(promise(), thunk);
  // const middleware = applyMiddleware(thunk,);
  // export default createStore(reducer, middleware);
  // export default compose(applyMiddleware(thunk))(createStore)(reducer);
  const store = createStore(
    reducer,
    compose(
      applyMiddleware(thunk),
    )
  )
  export default  store
  