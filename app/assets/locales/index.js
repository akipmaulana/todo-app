import I18n from 'react-native-i18n';
import en from './en';
import id from './id';

I18n.fallbacks = true;

I18n.translations = {
  en,
  id
};

export default I18n;

export const PROJECT_COMMAND = 'project_command';
export const CREATE_NEW_PROJECT = 'create_new_project';
export const UPDATE_PROJECT = 'update_project';
export const SAVE = 'save';
export const UPDATE = 'update';