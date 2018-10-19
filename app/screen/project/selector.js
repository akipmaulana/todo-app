import { createSelector } from 'reselect';
import { fromJS } from 'immutable';

const selectProjectScreen = (state, props) => state.get('projectScreen');

export const getToogleProjectForm = () =>
    createSelector(
        selectProjectScreen, 
        state => {
            const result = state ? state.get('form') : {}
            return fromJS(result).toJS()
        }
    );