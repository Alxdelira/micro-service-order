
export interface Item {
    nome: string;
    descricao: string;
    preco: number;
    quantidade: number;
    estoque: number;
    criadoEm: Date;
    categoria: string;
    fornecedor: string;
    imagem: string;
    codigo_barra: string;
    unidade: string;
    observacoes: string;
    ativo: boolean;
}