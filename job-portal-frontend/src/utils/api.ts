import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';

export const fetchJobPostings = async () => {
    return await axios.get(`${API_URL}jobpostings/`);
};

export const createJobPosting = async (jobData: any) => {
    return await axios.post(`${API_URL}jobpostings/`, jobData);
};
