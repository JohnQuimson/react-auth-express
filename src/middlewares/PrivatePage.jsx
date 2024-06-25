import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function ({ children }) {
  const { isLoggedIn } = useAuth();

  const location = useLocation();

  if (!isLoggedIn)
    return <Navigate to="/login" state={{ redirectTo: location.pathname }} />;

  return children;
}
