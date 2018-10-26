import { ActionType } from 'app/AppConstant';

export const requestFailed = (type, error) => ({ type: type, error });
export const requestSuccess = (type) => ({ type: type });