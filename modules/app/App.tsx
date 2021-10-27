import React, { memo } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Navigator from '@asdfq/routes/Navigator';
import { configStore } from '@asdfq/state/store';

const { store, persistor } = configStore();
export { store };
export const dispatch = store.dispatch;
export const persistedStore = persistor;

const App = memo(() => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Navigator />
    </PersistGate>
  </Provider>
));

App.displayName = 'App';

export default App;
