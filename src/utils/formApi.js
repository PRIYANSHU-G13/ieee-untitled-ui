import axios from 'axios';

const postFormDetails = async (formData) =>{
    console.log(formData.services);

    //Your api wants service data in '[]' this way but we can't provide an array in a string '' with [] brackets, if i do this by somehow this cause adding a anynoums backslah '\' and by this is throwing bad request 400. 
    const options = {
        method: 'POST',
        url: 'https://iksinterns.herokuapp.com/api/post',
        headers:{
            'Content-Type': 'x-www-form-urlencoded'
        },
        data: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            description: formData.description,
            services: formData.services,
        }
    }

    const response = await axios.request(options);
    return response;
}


export {postFormDetails}