import React, { useState } from 'react';
import '../gtp-styles/LoginForm.css';

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
        const response = await fetch('/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
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