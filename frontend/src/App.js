import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Navbar,Footer, Home, Login, Register, Dashboard, SignaturePad,CovidChestionar, HomeDashboard, AdaugaPacient} from "./components/index";

class App extends React.Component {
  componentDidMount () {

    const scriptsPath = [
      "https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js",
      process.env.PUBLIC_URL + "js/load_font.js",
      process.env.PUBLIC_URL + "js/vendors.bundle.js",
      process.env.PUBLIC_URL + "js/scripts.bundle.js",
      // process.env.PUBLIC_URL + "js/login.js",
      // process.env.PUBLIC_URL + "js/wizard.js"
    ];

    scriptsPath.forEach(element => {
      const script = document.createElement("script");
      script.src = element;
      //script.async = true;
      document.body.appendChild(script);
    });

    document.title = "Stoma App";

    console.log("comp mount");

  }
  render() {
      return (
    <div className="App">
     <Router>
       
       <Switch>
         <Route path="/Home" exact component={()=> <Home/>}/>
         <Route path="/" exact component={()=> <Login/>}/>
       
         <Route path="/Register" exact component={()=> <Register/>}/>
         <Route path="/Dashboard" exact component={()=> <Dashboard/>}/>
         <Route path="/SignaturePad" exact component={()=> <SignaturePad/>}/>
         <Route path="/Covid-Chestionar" exact component={()=> <CovidChestionar/>}/>

         <Route path="/Panel" exact component={() => <HomeDashboard/>}/>
         <Route path="/Adauga-Pacient" exact component={() => <AdaugaPacient/>}/>
       </Switch>

     </Router>
    </div>
  );
  }

}

export default App;
