import {useEffect} from 'react'
import {Navigate, useNavigate} from "react-router-dom"
import { LoginForm } from '../components/Form';
import Footer from './includes/Footer';
import Header from './includes/Header';
import RoutePaths from '../config';
import { checkLogin } from '../Utils/Generals';

const Login = () => {

  return (
    <>
        <Header />
        <LoginForm />
        <Footer />
    </>
  )
}

export default Login;
