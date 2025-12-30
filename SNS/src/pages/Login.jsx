import { useState } from 'react';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged 
} from 'firebase/auth';
import { auth } from '../firebase';
import { useEffect } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);

  // 사용자 로그인 상태 감지
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // 회원가입
  const handleSignUp = async () => {
    setError('');
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setEmail('');
      setPassword('');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // 로그인
  const handleSignIn = async () => {
    setError('');
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setEmail('');
      setPassword('');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // 로그아웃
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      setError(err.message);
    }
  };

  // 로그인된 상태
  if (user) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>로그인 성공!</h2>
        <p>이메일: {user.email}</p>
        <p>UID: {user.uid}</p>
        <button onClick={handleSignOut}>로그아웃</button>
      </div>
    );
  }

  // 로그인/회원가입 폼
  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h1>{isSignUp ? '회원가입' : '로그인'}</h1>
      
      <div style={{ marginBottom: '10px' }}>
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        />
        <input
          type="password"
          placeholder="비밀번호 (최소 6자)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', padding: '10px' }}
        />
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button 
        onClick={isSignUp ? handleSignUp : handleSignIn}
        disabled={loading}
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
      >
        {loading ? '처리 중...' : (isSignUp ? '회원가입' : '로그인')}
      </button>

      <button onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? '로그인으로 전환' : '회원가입으로 전환'}
      </button>
    </div>
  );
}

export default Login;