import { runApp, IAppConfig } from 'ice';
import * as ReactDOM from 'react-dom';

console.log(ReactDOM)
const appConfig: IAppConfig = {
  app: {
    rootId: 'ice-container',
  },
};

runApp(appConfig);
