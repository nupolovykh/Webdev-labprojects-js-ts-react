import { useState } from "react";
import '../styles/form-styles.css';

interface MyFormData {
	firstname: string,
	surname: string,
	lastname: string
	birthdate?: Date,
	address?: string
  }
  
export const MyForm = () => {
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