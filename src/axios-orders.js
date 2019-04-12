import axios from 'axios';


const instance = axios.create({
  baseURL: "https://burgerbuilder-8d55d.firebaseio.com/"
});

export default instance;
