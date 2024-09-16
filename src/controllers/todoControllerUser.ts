import { Request, Response } from 'express';
import todoServicesUser from '../services/todoServicesUser';

export default {
   
    /**********************************************************************************************
    *                            USER
    **********************************************************************************************/
    async getTodosUser(req: Request, res: Response) {
        
        try {
            const todos = await todoServicesUser.getTodosUser();
            return res.status(200).json({ status: 200, msg:todos});
        }
        catch (error) {
            return res.status(400).json({ status: 400, msg:{ error: "Erro ao listar Usuário" } });
        }
    },
    async createTodoUser(req: Request, res: Response) {
        const { Nome } = req.body;
        const { Sobrenome } = req.body;
        const { Cpf } = req.body;
        const { Telefone } = req.body;
        const { email } = req.body;
        
        try {
            const newTodo = await todoServicesUser.createTodoUser(Nome, Sobrenome, Cpf, Telefone, email);
            return res.status(201).json({ status: 201, msg:newTodo });
        }
        catch (error) {
            return res.status(400).json({ status: 400, msg:{ error: "Erro ao criar Usuário" } });
        }
    },
    async updateTodoUser(req: Request, res: Response) {
        const { id } = req.params;
        const { Nome, Sobrenome, CPF, Telefone, Email } = req.body;
        
        try {
            const updatedTodoUser = await todoServicesUser.updateTodoUser(id, { Nome, Sobrenome, CPF, Telefone, Email});
            
            if (updatedTodoUser) {
                return res.status(200).json({ status: 200, msg: updatedTodoUser });
            } else {
                return res.status(404).json({ status: 404, msg: { error: "Usuário não encontrada" } });
            }
        }
        catch (error) {
            return res.status(400).json({ status: 400, msg:{ error: "Erro ao atualizar Usuário" } });
        }
    },
    async deleteTodoUser(req: Request, res: Response) {
        const { id } = req.params;
        
        try {
            await todoServicesUser.deleteTodoUser(id);
            return res.status(204).json({ status: 204, msg: "Usuário excluída com sucesso" });
        }
        catch (error) {
            return res.status(400).json({ status: 400, msg:{ error: "Erro ao excluir Usuário" } });
        }
    }
};