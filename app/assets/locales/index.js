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