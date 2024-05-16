import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './form-styles.css';

const Default = () => {
	return (
		<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
	);
};

const SelectBox = () => {
  const [currentCity, setCurrentCity] = useState<string>("rio")

  const cityChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentCity(e.target.value)
  }

  return (
    <div>
      <select 
      value={currentCity}
      onChange={cityChangeHandler}
      style={{
        padding: '10px',
        fontSize: '16px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        marginBottom: '10px'
      }}
      >
        <option value="rio">Rio de Janeiro</option>
        <option value="london">London</option>
        <option value="paris">Paris</option>
      </select>

      {currentCity !== 'rio' && 
      <h2 style={{textAlign: 'center', color: 'red'}}>
        Нет, это не Рио-де-Жанейро!</h2>}
    </div>
  );
}

interface MyFormData {
  firstname: string,
  surname: string,
  lastname: string
  birthdate?: Date,
  address?: string
}

const MyForm = () => {
  const [formData, setFormData] = useState<MyFormData>({
    firstname: '',
    surname: '',
    lastname: '',
    birthdate: undefined,
    address: ''
  })

  const [message, setMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'birthdate') {
      setFormData(prevData => ({
        ...prevData,
        [name]: new Date(value)
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const validate = (): boolean => {
    setMessage('')

    if (!formData.firstname || !formData.surname || !formData.lastname) {
      setMessage('Заполните поля ФИО')
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      setMessage("Успешно!")
    }
  };


  return (
    <form onSubmit={handleSubmit} className='form-container'>
      <div>
        <label className="form-label">Имя</label>
        <input className='form-input'
          type='text'
          id='firstname'
          name='firstname'
          value={formData.firstname}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="form-label">Фамилия</label>
        <input className='form-input'
          type='text'
          id='surname'
          name='surname'
          value={formData.surname}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="form-label">Отчество</label>
        <input className='form-input'
          type='text'
          id='lastname'
          name='lastname'
          value={formData.lastname}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="form-label">Дата рождения</label>
        <input className='form-input'
          type='date'
          id='birthdate'
          name='birthdate'
          value={formData.birthdate instanceof Date ? formData.birthdate.toISOString().split('T')[0] : ''}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="form-label">Адрес</label>
        <input className='form-input'
          type='text'
          id='address'
          name='address'
          value={formData.address}
          onChange={handleChange}
        />
      </div>

      <button className='form-submit' type="submit"> Submit </button>

      {message && <h2 className='form-message'>{message}</h2>}
    </form>
  )
}


function App() {
  return (
    <div className="App" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <SelectBox />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <MyForm />
      </div>

    </div>
  )
}

export default App;
