import { createSelector } from 'reselect';
import { fromJS } from 'immutable';

const selectApp = (state, props) => state.get('app');

export const isFetchProject = () =>
    createSelector(
        selectApp, 
        state => {
            return state.getIn(['request', 'fetchProject'])
        }
    );

export const isCloseProject = () =>
    createSelector(
        selectApp, 
        state => {
            return state.getIn(['request', 'closeProject'])
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
