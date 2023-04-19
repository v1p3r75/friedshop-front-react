import {useEffect} from 'react'
import {useNavigate} from "react-router-dom"
import { LoginForm } from '../components/Form';
import Footer from './includes/Footer';
import Header from './includes/Header';

const checkLogin = () => {
  const isLogged = localStorage.getItem('_token');
  return isLogged ? true : false;
}

const Login = () => {
  const navigate = useNavigate();

  if (checkLogin()) {
    navigate('/myAccount');
    return null;
  }

  return (
    <>
        <Header />
        <LoginForm />
        <Footer />
    </>
  )
}

export default Login;
