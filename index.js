import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';

import './packages/utils/locale';
import App from './modules/app/App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
