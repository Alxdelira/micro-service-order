import { Endereco } from "./enderecoTypes";

export interface Cliente {
    cnpj: string;
    cpf: string;
    nome: string;
    email: string;
    telefone: string;
    tipo_cliente: string;
    endereco: Endereco;
    criadoEm: Date;
}