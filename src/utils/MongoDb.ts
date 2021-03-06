require("dotenv").config();
import { default as mongoose } from 'mongoose'

const startDB = async () => {
  const url = `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@cluster0.8vq3r.mongodb.net/Confidence`;

  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.log(err);
  }
};

export default startDB