import './App.css';
import { Routes, Route } from "react-router-dom";
import AddRecord from './components/AddRecord';
import Home from './components/Home';
import DeleteRecord from './components/DeleteRecord';
import UpdateRecord from './components/UpdateRecord';
import Header from './components/Header';
import Error from './components/Error';
import Selected from './components/Selected';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="addrecord" element={<AddRecord />} />
        <Route path="deleterecord" element={<DeleteRecord />} />
        <Route path="updaterecord" element={<UpdateRecord />} />
        <Route path="/record/:Id" element={<Selected />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes >

    </div >
  );
}

export default App;
