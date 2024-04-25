import { Cliente } from "./clienteTypes";
import { Item } from "./itensType";

export interface Ordem {
    cliente: Cliente;
    itens: Item[];
    descricao: string;
    status: string;
    criadoEm: Date;
    dataEntrega: Date;
    responsavel: string;
    defeito: string;
    observacoes: string;
    laudo_tecnico: string;   

}