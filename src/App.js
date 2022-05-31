import React,{useState} from 'react'

import logo from './logo.svg';
import './App.css';
// import "antd/dist/antd.css"; 
import LogIn from './component/login/Login'
import Home from './component/home/Home'

function App() {
  const [login,setLogin] = useState(false);
  return (
    <div className="App">
      <h2>E-Commerce</h2>

      {login ? <Home isLogin={setLogin} /> : <LogIn isLogin={setLogin} />}
    </div>
  );
}

export default App;
