import { createReducer } from '@reduxjs/toolkit';
import { actions } from '@state/actions';

export const INITIAL_STATE: AppReducerState = {
  needToUpdate: false,
};

export interface AppReducerState {
  needToUpdate: boolean;
}

export const appReducer = createReducer(INITIAL_STATE, {
  [actions.app.setAppUpdateFlag.type]: (state, { payload }) => {
    state.needToUpdate = payload;
  },
});
