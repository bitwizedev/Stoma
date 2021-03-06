import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Navigation,Footer, Home, Login, Register, Dashboard, SignaturePad,CovidChestionar} from "./components/index";


function App() {
  return (
    <div className="App">
     <Router>
       <Navigation/>
       <Switch>
         <Route path="/Home" exact component={()=> <Home/>}/>
         <Route path="/" exact component={()=> <Login/>}/>
         <Route path="/Register" exact component={()=> <Register/>}/>
         <Route path="/Dashboard" exact component={()=> <Dashboard/>}/>
         <Route path="/SignaturePad" exact component={()=> <SignaturePad/>}/>
         <Route path="/Covid-Chestionar" exact component={()=> <CovidChestionar/>}/>

       </Switch>
       {Location.pathname !== '/Register' && <Footer />}
       
       <Footer/>
     </Router>
    </div>
  );
}

export default App;
