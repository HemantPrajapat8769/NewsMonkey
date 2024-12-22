
import './App.css';
import React,{ useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

 const App = () => {
  const pageSize = 6;
  const [progress, setProgress] = useState(0)
  
  
    return (
      
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
        
      />
        <Routes>
        <Route exact path="/" element={<News setprogress= {setProgress}  key="general" pageSize={pageSize} country="us" category="general"/>}/> 
        <Route exact path="/business" element={<News setprogress= {setProgress}  key="business" pageSize={pageSize} country="us" category="business"/>}/>
        <Route exact path="/entertainment" element={<News setprogress= {setProgress}  key="entertainment" pageSize={pageSize} country="us" category="entertainment"/>}/>
        <Route exact path="/general" element={<News setprogress= {setProgress}  key="general" pageSize={pageSize} country="us" category="general"/>}/>
        <Route exact path="/health" element={<News setprogress= {setProgress}  key="health" pageSize={pageSize} country="us" category="health"/>}/>
        <Route exact path="/science" element={<News setprogress= {setProgress}  key="science" pageSize={pageSize} country="us" category="science"/>}/>
        <Route exact path="/sports" element={<News setprogress= {setProgress}  key="sports" pageSize={pageSize} country="us" category="sports"/>}/>
        <Route exact path="/technology" element={<News setprogress= {setProgress}  key="technology" pageSize={pageSize} country="us" category="technology"/>}/>

        </Routes>
        </Router>
      </div>
      
    )
  }

  export default App;



