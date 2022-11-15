import illustrationImg from '../assets/images/illustration.svg';

import LogoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';
import { Button } from '~/components/Button';
import { useNavigate } from 'react-router-dom';

import '../styles/auth.scss';
import { useContext } from 'react';
import { AuthContext } from '~/App';

export function Home() {
  const navigate = useNavigate();
  const { signInWithGoogle, user } = useContext(AuthContext);
  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }
    navigate('/rooms/new');
  }

  return (
    <div id='page-auth'>
      <aside>
        <img src={illustrationImg} alt='illustration' />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>tire suas duvidas em tempo real</p>
      </aside>
      <main>
        <div className='main-content'>
          <img src={LogoImg} alt='' />
          <Button onClick={handleCreateRoom} className='create-room'>
            <img src={googleIconImg} alt='' />
            crie sua sala com Google
          </Button>
          <div className='separator'>ou entre em uma sala</div>
          <form>
            <input type='text' placeholder='digite o codigo da sala' />
            <Button type='submit'>entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
