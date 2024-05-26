import axios from 'axios';
import { IDeal } from '../models/DealModel';

const API_URL = 'http://localhost:3001';

export const fetchDeals =  async () : Promise<IDeal[]> => {
	const response = await axios.get<IDeal[]>(`${API_URL}/deals`)
	return response.data;
}

export const addDeal =  async (deal : IDeal) : Promise<IDeal> => {
	const response = await axios.post<IDeal>(`${API_URL}/deal`, deal)
	return response.data;
}

export const updateDeal = async (id: number, deal: IDeal): Promise<number> => {
	const response = await axios.put(`${API_URL}/deal/${id}`, deal);
	return response.data.changes;
}
  
export const deleteDeal = async (id: number): Promise<number> => {
	const response = await axios.delete(`${API_URL}/deal/${id}`);
	return response.data.changes;
}
