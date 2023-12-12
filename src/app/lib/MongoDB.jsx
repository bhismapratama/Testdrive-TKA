import mongoose from "mongoose"

const ConnectDB = async () => {
    const URI = process.env.MONGODB_URI
    try {
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect(URI)
            // console.log("db connected");
        }
    } catch (error) {
        console.log(error)
    }
}

export default ConnectDB