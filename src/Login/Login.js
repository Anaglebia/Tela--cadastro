import { useState } from 'react';
import logo from '../assets/logo.jpg'
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
  return (
   <div className="container">
    <div className="container-login">
    <img src={logo} className='logo' alt="Logomarca"/>
      <div className="wrap-login">
        <form  className="login-form">
          <span className="login-form-title">Login de Usuario</span>
          <div className='wrap-input'>
            <input className={email !== "" ? 'has-val input': 'input' } type='email'/>
            <span className='focus-input' data-placeholder='Email' value={email} onChange={e=> setEmail(e.target.value)}></span>
          </div>
          <div className='wrap-input'>
            <input className={senha !== "" ? 'has-val input': 'input' } type='password'/>
            <span className='focus-input' data-placeholder='Senha'value={senha} onChange={e=> setSenha(e.target.value)}></span>
          </div>
          <div className='btn-login'>
            <button className='btn'>Login</button>
          </div>
          <div className='text-center'>
            <span className='texto1'>Não possui cadastro? </span>
            <a className='texto2' href='#'>  Criar conta</a>
          </div>
        </form>
      </div>

    </div>

   </div>
  );
}

export default Login;