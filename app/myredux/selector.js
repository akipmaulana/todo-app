import { createSelector } from 'reselect';
import { fromJS } from 'immutable';

const selectProjectScreen = (state, props) => state.get('projectScreen');

export const getProjectFetchFulfilled = () =>
    createSelector(
        selectProjectScreen, 
        state => {
            const result = state ? state.get('projects') : []
            return fromJS(result).toJS()
        }
    );

export const getProjectSelected = () =>
    createSelector(
        selectProjectScreen, 
        state => {
            const result = state ? state.get('selectedProject').item : {}
            return result
        }
    );

export const isRequesting = () =>
    createSelector(
        selectProjectScreen, 
        state => {
            return state.get('isRequesting')
        }
    );

export const isVisibleModal = () =>
    createSelector(
        selectProjectScreen, 
        state => {
            return state.get('isVisibleModal')
        }
    );
