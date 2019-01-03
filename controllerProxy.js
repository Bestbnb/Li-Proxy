const axios = require('axios');

const findAllBooking = (req, res, next) => {
  axios.get('http://localhost:3000/booking')
  .then((bookings) => {
    res.send(bookings.data);
  })
  .catch((err) => console.log(err));
} 


module.exports = {
  findAllBooking
};