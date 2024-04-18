/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ContextAPI from './contextApi/ContextAPI';

const Context = () => {
  return (
    <ContextAPI>
      <App />
    </ContextAPI>
  );
};

AppRegistry.registerComponent(appName, () => Context);
