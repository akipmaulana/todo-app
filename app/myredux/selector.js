import { createSelector } from 'reselect';
import { fromJS } from 'immutable';

const selectProjectScreen = (state, props) => state.get('projectScreen');
const selectApp = (state, props) => state.get('app');

export const getProjectFetchFulfilled = () =>
    createSelector(
        selectProjectScreen, 
        state => {
            const result = state ? state.get('project').get('data') : []
            return fromJS(result).toJS()
        }
    );

export const getProjectSelected = () =>
    createSelector(
        selectProjectScreen, 
        state => {
            const result = state ? state.get('project').get('selected').item : {}
            return result
        }
    );

export const isLoadMore = () =>
    createSelector(
        selectProjectScreen, 
        state => {
            return state.get('project').get('meta').get('isLoadMore')
        }
    );

export const isVisibleModal = () =>
    createSelector(
        selectProjectScreen, 
        state => {
            return state.get('isVisibleModal')
        }
    );

export const isRequesting = () =>
    createSelector(
        selectApp, 
        state => {
            return state.get('isRequesting')
        }
    );
