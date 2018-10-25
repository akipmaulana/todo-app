import { ActionType } from 'app/AppConstant';

export const requestFailed = (error) => ({ type: ActionType.REQUEST_FAILED, error });