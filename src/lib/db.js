const { mongoose } = require("mongoose");

const uri = process.env.DB_URI;

const dbConnect = async () => {

  if (!uri) {
    throw new Error("DB_URI is not defined");
  }

  let cached = global.mongoose || { conn: null, promise: null };
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
      
      try {
        cached.promise = mongoose.connect(uri);
        cached.conn = await cached.promise;
        console.log("Connected to MongoDB");

    } catch (error) {
      console.error(error);

      throw new Error("Failed to connect to MongoDB");
    }
  }
  
};


export default dbConnect;
