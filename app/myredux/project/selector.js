import { createSelector } from 'reselect';
import { fromJS } from 'immutable';

const selectProjectScreen = (state, props) => state.get('projectScreen');

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

export const isVisibleModal = () =>
    createSelector(
        selectProjectScreen, 
        state => {
            return state.get('isVisibleModal')
        }
    );