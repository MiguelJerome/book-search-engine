const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://user:user123@cluster0.vpzppix.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
