import mongoose from "mongoose";

const connectDb = async () => {
    try{
        const conn = await mongoose.connect('mongodb:localhost:27017/todoDB')
    }
    catch(error){
        console.log(`Erro ao conectar ao MongoDb: ${error.message}`);
        process.exit(1);
    }

}

export default connectDb;