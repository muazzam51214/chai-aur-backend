import connectDB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config({
  path : './.env'
})
const PORT = process.env.PORT;
connectDB()
.then(() => {
  app.on("error", (error) => {
    console.log("Error", error);
    throw error;
  })
  app.listen(PORT, () => {
    console.log(`Server is running at PORT : ${PORT}`);
  })
})
.catch((error) => {
  console.log("DB Connection Error", error);
})