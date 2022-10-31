import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://test:CmQy2Y4AvDGXqRni@commentcluster.yr1x0q7.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("connection successfully");
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;
