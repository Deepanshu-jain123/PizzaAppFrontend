import './App.css'
import { Route, Routes } from 'react-router-dom';
// import Layout from './Layouts/Layout'
import Home from './Pages/Home'
import Signup from './Pages/Auth/Signup'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/auth/signup" element={<Signup/>}/>
      </Routes>
    </>
  )
}

export default App;
