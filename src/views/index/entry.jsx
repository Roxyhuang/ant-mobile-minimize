import ReactDOM from 'react-dom';
import 'assets/css/global.less';
import { Provider } from 'react-redux';
import zhCN from 'antd-mobile/lib/locale-provider/';
import { LocaleProvider } from 'antd-mobile';
// import store from './store/store';
import routers from '../../routes/route';

const store = {};

const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <LocaleProvider locale={zhCN}>
      { routers }
    </LocaleProvider>
  </Provider>, MOUNT_NODE,
);
