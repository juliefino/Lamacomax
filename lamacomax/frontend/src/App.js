import React from "react";
import logo from './logo.svg';


const App = () => {
  
  return (
      <h2>Test</h2>
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
