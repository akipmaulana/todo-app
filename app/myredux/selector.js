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

export const isVisibleModal = () =>
    createSelector(
        selectProjectScreen, 
        state => {
            return state.get('isVisibleModal')
        }
    );

export const isFetchProject = () =>
    createSelector(
        selectApp, 
        state => {
            const result = state ? state.get('request') : {}
            return fromJS(result).toJS().fetchProject
        }
    );

export const getRequesting = () =>
    createSelector(
        selectApp, 
        state => {
            const result = state ? state.get('request') : {}
            return fromJS(result).toJS()
        }
    );
