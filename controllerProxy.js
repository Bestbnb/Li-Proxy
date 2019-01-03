const axios = require('axios');

const findAllBooking = () => {
  axios({
    method:'get',
    url:'http://localhost:3000/dist/bundle.js'
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
} 


module.exports = {
  findAllBooking
};