import 'dotenv/config';
import app from "./src/app.js";
import connectDB from "./src/config/database.js";
import { testAi } from './src/services/ai.service.js';
const PORT = Number.parseInt(process.env.PORT, 10) || 3000;
testAi();
async function startServer() {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (err) {
        console.log("Error connecting to MongoDB:", err);
        process.exit(1);
    }
}

startServer();
