import axios from 'axios';
import { IStatus } from '../models/StatusModel';

const API_URL = 'http://localhost:3001';

export const fetchStatuses =  async () : Promise<IStatus[]> => {
	const response = await axios.get<IStatus[]>(`${API_URL}/statuses`)
	return response.data;
}

export const addStatus =  async (status : IStatus) : Promise<IStatus[]> => {
	const response = await axios.post<IStatus[]>(`${API_URL}/status`, status)
	return response.data;
}

export const updateStatus = async (id: number, status: Partial<IStatus>): Promise<number> => {
	const response = await axios.put(`${API_URL}/status/${id}`, status);
	return response.data.changes;
}
  
export const deleteStatus = async (id: number): Promise<number> => {
	const response = await axios.delete(`${API_URL}/status/${id}`);
	return response.data.changes;
}
