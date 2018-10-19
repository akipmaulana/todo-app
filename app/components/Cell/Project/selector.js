import { createSelector } from 'reselect';

const selectProject = (state, props) => state.get('projectScreen');

export const getProjectFetchFulfilled = () =>
    createSelector(
        selectProject, 
        state => {
            return state ? state.get('projects') : []
        }
    );
