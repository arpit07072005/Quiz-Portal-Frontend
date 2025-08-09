import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Users from './components/Users'
import Addusers from './components/Addusers'

function App() {

  return (
      <div className = "App">
        <Router>
          <Header/>
          <Routes>
            <Route path ="/" element={<Dashboard/>} />
            <Route path ="/users" element={<Users/>} />
            <Route path ="/users/new" element={<Addusers/>} />
          </Routes>
        </Router>
      </div>
     
  )
}

export default App
