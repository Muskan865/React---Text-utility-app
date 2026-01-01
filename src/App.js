// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {

  const [mode,setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{ 
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode=()=>{
    if (mode==='dark'){
      document.body.style.backgroundColor='white';
      setMode('light');
      showAlert("Light mode has been enabled", "success");
    }
    else{
      document.body.style.backgroundColor='#042743';
      setMode('dark');
      showAlert("Dark mode has been enabled", "success");
    }
  }
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} />
    <div className="container my-3">
    <TextForm heading="Enter Text To Analyze" mode={mode} toggleMode={toggleMode} />
    </div>
    </>
  );
}

export default App;
