import AuthForm from '../AuthForm/AuthForm.jsx'

const SignUp = ({ setIsAuth }) => {
  return <AuthForm isSignUp={true} setIsAuth={setIsAuth}/>
}

export default SignUp