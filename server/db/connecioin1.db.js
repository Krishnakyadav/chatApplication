// import mongoose,{mongo} from "mongoose";

// export const connectDB =async ()=>{
//     const MONGODB_URL = process.env.MONGODB_URL
//    const instance = await mongoose.connect(MONGODB_URL);
//    console.log(`mongoDB connected: ${instance.connection.host}`)
// }
// import mongoose from "mongoose";

// export const connectDB = async () => {
//   try {
//     const instance = await mongoose.connect(process.env.MONGODB_URL);
//     console.log(`MongoDB connected: ${instance.connection.host}`);
//   } catch (err) {
//     console.error("MongoDB Connection Error:");
//     console.error(err);
   
   
//   }
// };


// };  

import mongoose from "mongoose";
import dns from "node:dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

console.log("DNS Servers:", dns.getServers());

export const connectDB = async () => {
  try {
    const instance = await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB Connected:", instance.connection.host);
  } catch (err) {
    console.error(err);
  }
};