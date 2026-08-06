import './App.css'
import PropertyForm from './components/PropertyForm'

function App() {
  return (
    <div className="app-container">
      <h1 style={{ textAlign: 'center', color: '#333' }}>نظام توقع أسعار العقارات</h1>
      <PropertyForm />
    </div>
  )
}

export default App