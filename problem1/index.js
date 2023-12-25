// Please do not change the prewritten code

const axios = require('axios');
const Solution = async() => {
    // Write your code here
    try {
        const response = await axios.get('https://api.codingninjas.com/api/v3/event_tags');

        const responseData = response.data;

        console.log(responseData);
        return responseData;

    } catch (error) {

        console.error("Error Fetching data: ", error.mesage);
        throw error;
    }
};
Solution();
module.exports = Solution;