import { createSelector } from 'reselect';

export const selectPingReducer = () => state => state.get('projectScreen');

export const getProjectFetchFulfilled = () =>
    createSelector(selectPingReducer(), state => []);
