import logo from "./logo.svg";
import Navigation from "./components/Navigation";
import Container from "./components/Container";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <!-- Navigation --> */}
      <Navigation />

      {/* <!-- Page Content --> */}
      <Container />
      {/* <!-- /.container -->  */}
    </div>
  );
}

export default App;
