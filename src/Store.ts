import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const enhancers = composeWithDevTools({});

const middleware = [thunk];

const store = createStore(
  persistedReducer,
  enhancers(applyMiddleware(...middleware)),
);
export const persistor = persistStore(store);
export default store;
