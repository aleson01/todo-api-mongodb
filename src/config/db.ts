import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://alesontinoco:Gabriel123.@web2.55xwe.mongodb.net/?retryWrites=true&w=majority&appName=web2');
        console.log(`MongoDB conectado: ${conn.connection.host}`);
    }
    catch (error:any) {
        console.error(`Erro ao conectar ao MongoDB: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;