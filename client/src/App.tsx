import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Chat from './pages/Chat'
import { io } from "socket.io-client";
import NotFound from './pages/NotFound';




export const socket = io("http://localhost:8000")

function App() {


  return (
    <Routes>
      <Route element={<Login />} path="/" />
      <Route element={<Chat />} path="/chat" />
      <Route element={<Register />} path="/register-account" />
      <Route element={<NotFound />} path="/*" />
    </Routes>
  )
}

export default App
