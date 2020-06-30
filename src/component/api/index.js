import axios from 'axios';

const url = 'http://localhost:3001';

export const fetchData = async (lang) => {
    try{
    const {data} = await axios.get(`${url}/${lang}`);
    return(data);
    }catch(err) {

    }
}