import Button from './../CommonComponents/Button/Button';
import Input from './../CommonComponents/Input/Input';
import { useState } from 'react';
import './FormLogIn.scss';



export default function FormLogIn({ sendAuthorizationState }: any) {
  const [logInData, setLogInData] = useState({
    userLogin: "",
    password: ""
  });

  const [logInError, setLogInError] = useState({
    userLoginError: "",
    passwordError: ""
  });

  function changeLogIn(e: any) {
    setLogInData({ ...logInData, [e.target.name]: e.target.value });
    if (!!logInError.userLoginError && e.target.name === "userLogin" && !!e.target.value) {
      setLogInError({ ...logInError, userLoginError: logInData.userLogin ? "" : "Логин не может быть пустым" });
    };
    if (!!logInError.passwordError && e.target.name === "password" && !!e.target.value) {
      setLogInError({ ...logInError, passwordError: logInData.password ? "" : "Пароль не может быть пустым" });
    };
  };

  function submitLogIn(e: any) {
    e.preventDefault();
    if (!logInData.userLogin || !logInData.password) {
      setLogInError({
        userLoginError: logInData.userLogin ? "" : "Логин не может быть пустым",
        passwordError: logInData.password ? "" : "Пароль не может быть пустым"
      });
      return;
    }
    sendAuthorizationState();
  }

  return (
    <form className='form form_logIn' onSubmit={submitLogIn}>
      <Input id='userLogin' inputType='text' placeholder='' isError={!!logInError.userLoginError} errorText={logInError.userLoginError} changeFunction={changeLogIn}>Логин</Input>
      <Input id='password' inputType='password' placeholder='' isError={!!logInError.passwordError} errorText={logInError.passwordError} changeFunction={changeLogIn}>Пароль</Input>
      <Button isDisabled={false} typeButton="button_primary form_logIn__button" action='submit'>Войти</Button>
    </form>
  );
}
