import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Navbar,Footer, Home, Login, Register, Dashboard, SignaturePad,CovidChestionar,AdaugaPacient, ResetPassword} from "./components/index";


function App() {
  return (
    <div className="App">
     <Router>
       
       <Routes>
         <Route path="/Home" exact component={()=> <Home/>}/>
         <Route path="/" exact component={()=> <Login/>}/>
        <Route path="/Adauga-Pacient" exact component={()=> <AdaugaPacient/>}/>
         <Route path="/Register" exact component={()=> <Register/>}/>
         <Route path="/Dashboard" exact component={()=> <Dashboard/>}/>
         <Route path="/SignaturePad" exact component={()=> <SignaturePad/>}/>
         <Route path="/Covid-Chestionar" exact component={()=> <CovidChestionar/>}/>
         <Route path="/Reset-Password" exact component={()=> <ResetPassword/>}/>
       </Routes>

     </Router>
    </div>
  );
}

export default App;
