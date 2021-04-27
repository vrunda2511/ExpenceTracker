import './App.css';
import {GlobalProvider} from './context/Globalcontext'
import { Balance } from './components/Balance/Balance';
import { TransectionList } from './components/TransactionList/TransectionList';
import { AddTransection } from './components/AddTransection/AddTransection';
import { IncomeExpense } from './components/Income/IncomeExpense';
import './styles.css'
import { ToastContainer } from 'react-toastify';
import { Toast } from './components/Toast/Toast';
function App() {
  return (
    <GlobalProvider>
      <div style={{backgroundColor:"#fff",width:"100%",color:"#000",paddingTop:25,paddingLeft:30}}>
        <h1>Expense Tracker</h1>
      </div>
      <div className="container">
      
      <Balance/>
      <IncomeExpense/>
      <TransectionList/>
      <AddTransection/>
      

      </div>
      <Toast/>
      

    </GlobalProvider>
  );
}

export default App;
