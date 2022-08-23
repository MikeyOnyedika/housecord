import { Navigate, useLocation } from 'react-router-dom';
import './App.css';

function App() {
  const location = useLocation();
  console.log(location)
  return <Navigate to={`/login`} replace state={{ location }} />;
}

export default App;
