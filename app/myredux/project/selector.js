import { createSelector } from 'reselect';

const selectProjectScreen = (state, props) => state.get('projectScreen');

export const getProjectFetchFulfilled = () =>
    createSelector(
        selectProjectScreen, 
        state => state.get('project').get('data') || []
    );

export const getProjectSelected = () =>
    createSelector(
        selectProjectScreen, 
        state => state.get('project').get('selected').item || {}
    );

export const isVisibleModal = () =>
    createSelector(
        selectProjectScreen, 
        state => state.get('isVisibleModal')
    );