import { registerRootComponent } from 'expo';
import Dashboard from "./app/dashboard";

import Index from './app/index';
// registerRootComponent calls AppRegistry.registerComponent('main', () => Index);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Index);
