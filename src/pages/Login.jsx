import { useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function () {
  const { login } = useAuth();

  const { state } = useLocation();
  const { redirectTo } = state || {};

  const handleLogin = (e) => {
    e.preventDefault();
    login(null, redirectTo || '');
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" />
        <button>Login</button>
      </form>
    </>
  );
}
