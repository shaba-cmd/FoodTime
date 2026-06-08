import { Link, useNavigate } from 'react-router-dom'
import { SAuth, SignContainer, Title, FormAuth, Text } from './AuthForm.styled.js'
import { useState } from 'react'

const AuthForm = ({ isSignUp, setIsAuth }) => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: ''
  })

  const [errors, setErrors] = useState({
    name: '',
    username: '',
    password: ''
  })

  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      const newErrors = {}
      const fieldsToCheck = isSignUp 
        ? ['name', 'username', 'password'] 
        : ['username', 'password']
      
      fieldsToCheck.forEach(field => {
        newErrors[field] = validateField(field, formData[field])
      })
      setErrors(newErrors)
      return
    }

    setIsAuth(true)
    navigate('/')
  }

  const isFormValid = () => {
    const fieldsToCheck = isSignUp 
      ? ['name', 'username', 'password'] 
      : ['username', 'password']
    
    return fieldsToCheck.every(field => {
      const error = validateField(field, formData[field])
      return !error && formData[field].trim() !== ''
    })
  }

  const handleChange = (fieldName, value) => {
    setFormData(prev => ({ ...prev, [fieldName]: value }))
    
    const error = validateField(fieldName, value)
    setErrors(prev => ({ ...prev, [fieldName]: error }))
  }

  const validateField = (fieldName, value) => {
    let error = ''

    if (!value.trim()) {
      error = 'This field must be filled in'
    } else {
      switch (fieldName) {
        case 'name':
          if (value.trim().length < 2) {
            error = 'The name must contain at least 2 characters'
          } else if (!/^[a-zA-Zа-яА-ЯёЁ\s-]+$/.test(value)) {
            error = 'The name can only contain letters, spaces, and hyphens'
          }
          break

        case 'username':
          if (value.trim().length < 3) {
            error = 'Login must contain at least 3 characters'
          } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
            error = 'Login can contain only Latin letters, numbers, and underscores'
          }
          break

        case 'password':
          if (value.length < 6) {
            error = 'The password must contain at least 6 characters'
          } else if (!/[A-Z]/.test(value)) {
            error = 'The password must contain at least one capital letter'
          } else if (!/[a-z]/.test(value)) {
            error = 'The password must contain at least one lowercase letter'
          } else if (!/[0-9]/.test(value)) {
            error = 'The password must contain at least one digit'
          }
          break

        default:
          break
      }
    }

    return error
  }

  return (
    <SAuth>
      <SignContainer>
              <Title>{isSignUp ? 'Sign up' : 'Sign in'}</Title>
              <FormAuth>
                  {isSignUp && 
                    <div>
                      <input 
                        type="text"
                        placeholder='Enter your name'
                        onChange={(e) => {handleChange('name', e.target.value)}}
                      />
                      <p>{errors.name}</p>
                    </div>
                  }
                  <div>
                    <input 
                      type="text"
                      placeholder='Enter your username'
                      onChange={(e) => {handleChange('username', e.target.value)}}
                      />
                    <p>{errors.username}</p>
                  </div>
                  <div>
                    <input 
                      type="password"
                      placeholder='Enter the password'
                      onChange={(e) => {handleChange('password', e.target.value)}}
                      />
                    <p>{errors.password}</p>
                  </div>
              </FormAuth>

              <div>
                <Text>
                  If you {!isSignUp && 'don\'t'} have an account, 
                  then {isSignUp ? <Link to='/sign-in'>Sign in</Link> : <Link to='/sign-up'>Sign up</Link>}
                </Text>
                <button onClick={(e) => {handleLogin(e)}}>Enter</button>
              </div>
          </SignContainer>
    </SAuth>
  )
}

export default AuthForm