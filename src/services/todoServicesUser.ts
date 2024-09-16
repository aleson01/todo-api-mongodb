import TodoUser, { ITodoUser } from '../models/todoModelUser';

export default {
    async getTodosUser(): Promise<ITodoUser[]> {
    return await TodoUser.find();
    },
    async createTodoUser(Nome: string, Sobrenome: string, CPF: string, Telefone: string, email: string): Promise<ITodoUser> {
        const newTodoUser = new TodoUser({ Nome, Sobrenome, CPF, Telefone, email});
        return await newTodoUser.save();
    },
    async updateTodoUser(id: string, data: Partial<ITodoUser>): Promise<ITodoUser | null> {
        return await TodoUser.findByIdAndUpdate(id, data, { new: true });
    },
    async deleteTodoUser(id: string): Promise<void> {
        await TodoUser.findByIdAndDelete(id);
    }
};