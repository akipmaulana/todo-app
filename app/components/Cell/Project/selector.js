import { createSelector } from 'reselect';
import { fromJS } from 'immutable';

const selectProject = (state, props) => state.get('projectScreen');

export const getProjectFetchFulfilled = () =>
    createSelector(
        selectProject, 
        state => {
            const result = state ? state.get('projects') : []
            return fromJS(result).toJS()
        }
    );
