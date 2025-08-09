import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router'
import Header from './components/Header'
import Dashboard from './components/Dashboard'

function App() {

  return (
      <div className = "App">
        <Router>
          <Header/>
          <Routes>
            <Route path ="/" element={<Dashboard/>} />
          </Routes>
        </Router>
      </div>
     
  )
}

export default App
