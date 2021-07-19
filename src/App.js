import './App.css';
import { Switch, Route } from 'react-router-dom';
import Customers from './containers/Customers/Customers';
import Receiver from './containers/Receiver/Receiver';
import Transfer from './containers/Transfer/Transfer';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Result from './components/Result/Result';
import Transactions from './containers/Transactions/Transactions';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Accounts from './components/Accounts/Accounts';
import Sender from './components/Sender/Sender';
function App() {
  return (
    //basename={process.env.PUBLIC_URL}
    //"predeploy": "npm run build",
    //"deploy": "gh-pages -d build"
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/transfers" component={Transactions} />
          <Route path="/result" component={Result} />
          <Route path="/transfer" component={Transfer} />
          <Route path="/receiver" component={Receiver} />
          <Route path="/sender/:id" component={Sender} />
          <Route path="/customers" component={Customers} />
          <Route path="/allaccounts" component={Accounts} />
          <Route path="/" component={Dashboard} />
        </Switch>
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
