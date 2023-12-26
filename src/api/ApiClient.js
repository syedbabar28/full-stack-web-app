import axios from 'axios';

export const ApiClient =axios.create(
    {
        baseURL:'http://todo-rest-api-env.eba-xtuvj58n.ap-southeast-1.elasticbeanstalk.com'
    }
);