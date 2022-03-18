import React from "react";
import logo from './logo.svg';
import {
  BrowserRouter as Router,
    Route, 
    Redirect,
    Switch
} from "react-router-dom";
import Rdv from './pages/rdv/rdv'
import Accueil from "./pages/accueil/accueil";
import Contact from "./pages/contact/contact";
import Equipe from "./pages/equipe/equipe";

const App = () => {
  
  return (
      <Router>
        <main>
          <Route path='/' exact>
            <Accueil/>
          </Route>
          <Route path='/equipe' exact>
            <Equipe/>
          </Route>
          <Route path='/rdv' exact>
            <Rdv/>
          </Route>
          <Route path='/contact' exact>
            <Contact/>
          </Route>
        </main>
      </Router>
  )
  /** constructor(props) {
    super(props);
    this.state={apiResponse:''};
  }
  callApi() {
    fetch('http://localhost:9000/testapi').then(res => res.text()).then(res => this.setState({apiResponse: res}));
  }
  componentWillMount(){
    this.callApi();
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p>{this.state.apiResponse}</p>
      </div>
    )
  }
   **/
}

export default App;
