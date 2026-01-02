import { Routes, Route, Navigate } from 'react-router-dom'
import { BackendProvider } from './context/BackendContext'
import Login from './pages/Login'
import BackendSwitcher from './components/BackendSwitcher'

function App() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <header style={{
        backgroundColor: '#1976d2',
        color: 'white',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1 style={{ fontSize: '1.5rem' }}>MITA - Mini Issue Tracker</h1>
        <BackendSwitcher />
      </header>
      
      <main style={{ padding: '2rem' }}>
        <Routes>
          {/* Redirect root to /java by default */}
          <Route path="/" element={<Navigate to="/java/login" replace />} />
          
          {/* Backend-specific routes */}
          <Route path="/java/*" element={
            <BackendProvider backend="java">
              <Routes>
                <Route path="login" element={<Login />} />
                <Route path="*" element={<Navigate to="login" replace />} />
              </Routes>
            </BackendProvider>
          } />
          
          <Route path="/dotnet/*" element={
            <BackendProvider backend="dotnet">
              <Routes>
                <Route path="login" element={<Login />} />
                <Route path="*" element={<Navigate to="login" replace />} />
              </Routes>
            </BackendProvider>
          } />
          
          <Route path="/php/*" element={
            <BackendProvider backend="php">
              <Routes>
                <Route path="login" element={<Login />} />
                <Route path="*" element={<Navigate to="login" replace />} />
              </Routes>
            </BackendProvider>
          } />
        </Routes>
      </main>
    </div>
  )
}

export default App
