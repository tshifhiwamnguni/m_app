import axios from 'axios';
// free weather API
const URL = 'https://strapi-movie-app.onrender.com/api/'
const header = {
    headers: {
      Authorization:
        "Bearer c03f2ff3dc732f216fff5ab4e4766d1fc88b820752ff5cc25d47cb4e5e867b67e01f3748cf3d6de665bad7c22f2c995d3f549073874e893ac037685ed2081be326647aac58ae737ccee9dde8d36d56c36f84fe34ecd6e2b42b27dff6662b6e959f420b117d0c3cddcdcf45263bfe82dc75fb854690842ed01bb88f960226d62e",
        
}}

export const postReview= async (_data) => {
    const data  = await axios.post(URL+'review-cinemas?populate=*',_data,header );
    return data;
}


export const getReview= async (id) => {
    const data  = await axios.get(URL+`review-cinemas?filters[movie]=${id}&populate=*`,header );
    return data;
}


