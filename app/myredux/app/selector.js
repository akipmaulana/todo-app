import { createSelector } from 'reselect';
import { fromJS } from 'immutable';

const selectAppRequest = (state, props) => state.get('app').get('request');

export const isFetchProject = () =>
    createSelector(
        selectAppRequest, 
        state => {
            return state.get('PROJECT_FETCH')
        }
    );

export const isCloseProject = () =>
    createSelector(
        selectAppRequest, 
        state => {
            return state.get('PROJECT_CLOSE')
        }
    );

export const isUpdateProject = () =>
    createSelector(
        selectAppRequest, 
        state => {
            return state.get('PROJECT_UPDATE')
        }
    );

export const isDeleteProject = () =>
    createSelector(
        selectAppRequest, 
        state => {
            return state.get('PROJECT_DELETE')
        }
    );

export const isAddProject = () =>
    createSelector(
        selectAppRequest, 
        state => {
            return state.get('PROJECT_ADD')
        }
    );

    export const isFetchTask = () =>
    createSelector(
        selectAppRequest, 
        state => {
            return state.get('TASK_FETCH')
        }
    );

export const isCloseTask = () =>
    createSelector(
        selectAppRequest, 
        state => {
            return state.get('TASK_CLOSE')
        }
    );

export const isUpdateTask = () =>
    createSelector(
        selectAppRequest, 
        state => {
            return state.get('TASK_UPDATE')
        }
    );

export const isDeleteTask = () =>
    createSelector(
        selectAppRequest, 
        state => {
            return state.get('TASK_DELETE')
        }
    );

export const isAddTask = () =>
    createSelector(
        selectAppRequest, 
        state => {
            return state.get('TASK_ADD')
        }
    );
