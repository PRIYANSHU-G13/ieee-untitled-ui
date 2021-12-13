import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import DetailForm from './components/DetailForm';
import Header from "./components/Header";
import Footer from './components/Footer';
import ContactSummary from "./components/ContactSummary";

function App() {
  return (
    <div className="App">
    <div className="outer">   
    <Header/>  
    <DetailForm/>
    <ContactSummary/>
    <Footer/>
    </div>
    </div>
  );
}

export default App;
