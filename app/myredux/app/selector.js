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
