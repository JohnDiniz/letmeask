import illustrationImg from '../assets/images/illustration.svg';
import LogoImg from '../assets/images/logo.svg';
// import googleIconImg from '../assets/images/google-icon.svg';
import { Button } from '~/components/Button';
import { Link } from 'react-router-dom';

import '../styles/auth.scss';
import { useContext } from 'react';
import { AuthContext } from '~/App';

export function NewRoom() {
  const { user } = useContext(AuthContext);
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
          <h1>{user?.name}</h1>
          <h2>Criar Uma Nova Sala</h2>
          <form>
            <input type='text' placeholder='Nome da sala' />
            <Button type='submit'>Criar sala</Button>
          </form>
          <p>
            quer entrar em uma sala existente <Link to='/'>clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
