import { createAction } from '@reduxjs/toolkit';

import { constants } from '../constants';

export const setAppUpdateFlag = createAction<boolean>(
  constants.app.SET_APP_UPDATE_FLAG,
);

export const clearAppState = createAction(constants.app.SET_APP_UPDATE_FLAG);
