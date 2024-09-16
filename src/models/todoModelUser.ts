import mongoose, { Document, Schema } from 'mongoose';

export interface ITodoUser extends Document {
    Nome: string;
    Sobrenome: string;
    CPF: string;
    Telefone: string;
    Email: string;
}
const TodoSchema: Schema = new Schema({
    Nome: { type: String, required: true },
    Sobrenome: { type: String, default: true },
    CPF: { type: String, default: true },
    Telefone: { type: String, default: true },
    Email: { type: String, default: true },
});

const TodoUser = mongoose.model<ITodoUser>('TodoUser', TodoSchema);

export default TodoUser;