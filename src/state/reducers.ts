import { AnyAction, CombinedState, combineReducers } from 'redux';

import { appReducer, AppReducerState } from './app/AppReducer';
import { constants } from './constants';

export interface RootState {
  app: AppReducerState;
}

export interface PersistedAppState extends RootState {
  _persist: { version: number; rehydrated: boolean };
}

const combinedReducer = combineReducers<CombinedState<RootState>>({
  app: appReducer,
});

const rootReducer = (state: RootState | undefined, action: AnyAction) => {
  if (action.type === constants.app.CLEAR_APP_STATE) {
    return combinedReducer(undefined, action);
  }
  return combinedReducer(state, action);
};

export { rootReducer };
