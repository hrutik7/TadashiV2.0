/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Amplify } from 'aws-amplify';
import awsExports from './src/aws-exports';
import { store } from './app/store'
import { Provider } from 'react-redux'
import 'core-js/full/symbol/async-iterator';

Amplify.configure(awsExports);


AppRegistry.registerComponent(appName, () => App);
