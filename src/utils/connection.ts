import mongoose from 'mongoose';

mongoose.connect('mongodb://mongo:27017/graphql', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
