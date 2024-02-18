import './App.css'
import { HeaderLayout } from './component/layouts/HeaderLayout';
import { HomePage } from './pages/HomePage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserPage } from './pages/UserPage';
import { CoursePage } from './pages/CoursePage';
import { LoginPage } from './pages/Login';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<LoginPage />} />
          </Route>
          <Route element={<HeaderLayout />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/user/:name" element={<UserPage />} />
            <Route path="/course/:name" element={<CoursePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>


  )
}

export default App
