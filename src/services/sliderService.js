import axios from "axios"




 const getAllMovies = () => {
  return axios.get('https://strapi-movie-app.onrender.com/api/movies');
};

 const getUsers= () => {
    return axios.get('https://strapi-movie-app.onrender.com/api/users');
  };

export {getAllMovies, getUsers}
