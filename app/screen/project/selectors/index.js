import { createSelector } from 'reselect';

export const selectProjectScreen = () => state => state.get('projectScreen');

export const getProjectFetchFulfilled = () =>
    createSelector(selectProjectScreen(), state => state.get('projects'));
