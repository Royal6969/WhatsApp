import '../styles/globals.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebase';
import login from './login';

function MyApp({ Component, pageProps }) {

  //npm install --save react-firebase-hooks
  const [user] = useAuthState(auth);

  if(!user) return <login />

  return <Component {...pageProps} />
}

export default MyApp
