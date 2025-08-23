import logo from './logo.svg';
import './App.css';
//Importing Components
import {Header} from './components/Header'
import { Hero } from './components/Hero';
//Importing Script
import { ScriptComp } from './components/ScriptComp';

function App() {
  return (
    <>
      <Header/>
      <Hero/>
    </>
  );
}

export default App;
