import 'dotenv/config';
import app from "./src/app.js";


import connectDB from "./src/config/database.js";

const PORT = process.env.PORT || 3000;
connectDB().catch(err=>{
    console.log("Error connecting to MongoDB:", err);
});

app.listen(PORT, () => {    
    console.log(`Server is running on port ${PORT}`);
});
