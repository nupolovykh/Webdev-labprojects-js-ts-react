import React, { useState } from 'react';
import '../gpt-styles/RegisForm.css';

interface FormData {
  login: string;
  password: string;
  confirmPassword: string;
}

interface Errors {
  login?: string;
  password?: string;
  confirmPassword?: string;
}

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    login: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState<Errors>({});
  const [message, setMessage] = useState<string>('');

  const validate = (): boolean => {
    const newErrors: Errors = {};

    if (!formData.login) {
      newErrors.login = 'Логин обязателен';
    } else if (formData.login.length < 6 || formData.login.length > 20) {
      newErrors.login = 'Логин должен содержать от 6 до 20 символов';
    } else if (!/^[a-zA-Z0-9]+$/.test(formData.login)) {
      newErrors.login = 'Логин может содержать только буквы латинского алфавита и цифры';
    }

    if (!formData.password) {
      newErrors.password = 'Пароль обязателен';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Повтор пароля обязателен';
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Пароли не совпадают';
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
        const response = await fetch('/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();
        if (response.ok) {
          setMessage('Регистрация успешна!');
        } else {
          setMessage(result.error || 'Ошибка при регистрации');
        }
      } catch (error) {
        setMessage('Ошибка при регистрации');
      }
    }
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
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
      <div className="form-group">
        <label htmlFor="confirmPassword" className="form-label">Повтор пароля:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          className="form-input"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
      </div>
      <button type="submit" className="submit-button">Зарегистрироваться</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default RegistrationForm;