import { createSelector } from 'reselect';

const selectTaskScreen = (state, props) => state.get('taskScreen');

export const getMetaTask = () => 
    createSelector(
        selectTaskScreen,
        state => state.get('task').get('meta') || { totalRow: 0 }
    );

export const getTask = () =>
    createSelector(
        selectTaskScreen, 
        state => state.get('task').toJS() || {}
    );

export const getTaskSelected = () =>
    createSelector(
        selectTaskScreen, 
        state => state.get('task').get('selected').item || {}
    );

export const isVisibleModal = () =>
    createSelector(
        selectTaskScreen, 
        state => state.get('isVisibleModal')
    );