import './LogInPage.scss';
import { useState } from 'react';
import FormLogIn from '../../Components/FormLogIn/FormLogIn';

export default function LogInPage() {
  const [isAuthorized, setAuthorizationState] = useState(false);
  const logo: string = require("./../../assets/images/Logo.svg").default;

  function checkAuthorization() {
    setAuthorizationState(!isAuthorized);
  }

  return (
    <div className='logIn-form'>
      <div className='logIn-form-left'>
        <img src={logo} className='logIn-form__logo' alt="Logo" />
        <p className='logIn-form__title'>
          {!isAuthorized ? <><span className='uppercase'>Авторизация</span> для входа в Хранилище данных аналитического контура</> : <><span className='uppercase'>Приветствуем</span> в Хранилище данных аналитического контура</>}
        </p>
      </div>
      <div className="logIn-form-right">
        {!isAuthorized && <FormLogIn sendAuthorizationState={checkAuthorization}></FormLogIn>}</div>
    </div>
  );
}