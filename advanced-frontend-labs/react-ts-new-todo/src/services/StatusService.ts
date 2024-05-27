import axios from 'axios';
import { IStatus } from '../models/StatusModel';

const API_URL = 'http://localhost:3001';

export const fetchStatuses =  async () : Promise<IStatus[]> => {
	const response = await axios.get<IStatus[]>(`${API_URL}/statuses`)
	return response.data;
}

export const getNextId = async (): Promise<number> => {
	const response = await axios.post<{ nextId: number }>(`${API_URL}/status/next-id`);
	return response.data.nextId;
}
