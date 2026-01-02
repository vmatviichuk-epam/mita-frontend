import { useNavigate, useLocation } from 'react-router-dom'
import { BackendType, BACKEND_CONFIGS } from '../context/BackendContext'

const backends: BackendType[] = ['java', 'dotnet', 'php']

function BackendSwitcher() {
  const navigate = useNavigate()
  const location = useLocation()
  
  // Extract current backend from URL
  const currentBackend = location.pathname.split('/')[1] as BackendType
  const currentPage = location.pathname.split('/').slice(2).join('/') || 'login'
  
  const handleSwitch = (backend: BackendType) => {
    navigate(`/${backend}/${currentPage}`)
  }
  
  return (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      {backends.map((backend) => (
        <button
          key={backend}
          onClick={() => handleSwitch(backend)}
          style={{
            padding: '0.5rem 1rem',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            backgroundColor: currentBackend === backend ? 'white' : 'rgba(255,255,255,0.2)',
            color: currentBackend === backend ? '#1976d2' : 'white',
            fontWeight: currentBackend === backend ? 'bold' : 'normal',
            transition: 'all 0.2s',
          }}
        >
          {BACKEND_CONFIGS[backend].name}
        </button>
      ))}
    </div>
  )
}

export default BackendSwitcher
