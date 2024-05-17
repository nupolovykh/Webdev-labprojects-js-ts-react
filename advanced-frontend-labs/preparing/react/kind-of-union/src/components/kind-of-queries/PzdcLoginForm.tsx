import React, { useEffect, useState } from 'react';
import '../../styles/form-styles.css';
import {useNavigate} from 'react-router-dom'

interface FormData {
  login: string;
  password: string;
}

interface Errors {
  login?: string;
  password?: string;
}

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    login: '',
    password: ''
  });

  const [errors, setErrors] = useState<Errors>({});
  const [message, setMessage] = useState<string>('');
  const navigate = useNavigate()

  const validate = (): boolean => {
    const newErrors: Errors = {};

    if (!formData.login) {
      newErrors.login = 'Логин обязателен';
    }

    if (!formData.password) {
      newErrors.password = 'Пароль обязателен';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch('http://localhost:3001/auth', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({"nickname": formData.login, "password" : formData.password}),
        });

        const result = await response.json();
        if (response.ok) {
          setMessage('Авторизация успешна!');
        } else {
          setMessage(result.error || 'Ошибка при авторизации');
        }
      } catch (error) {
        setMessage('Ошибка при авторизации');
      }
    }
  };

  useEffect(() => {
    if(message === 'Авторизация успешна!'){
      const timeoutId = setTimeout(() => {
        navigate('/')
      }, 2000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [message, navigate]);

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="login" className="form-label">Логин:</label>
        <input
          type="text"
          id="login"
          name="login"
          className="form-input"
          value={formData.login}
          onChange={handleChange}
        />
        {errors.login && <p className="error-message">{errors.login}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="password" className="form-label">Пароль:</label>
        <input
          type="password"
          id="password"
          name="password"
          className="form-input"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error-message">{errors.password}</p>}
      </div>
      <button type="submit" className="submit-button">Войти</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default LoginForm;