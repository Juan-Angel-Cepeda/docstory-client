import axios from 'axios';
export const getDocumentById = (id) =>{
    return axios.get(`http://localhost:3000/documents/${id}`)
                .then(response => response.data);
}