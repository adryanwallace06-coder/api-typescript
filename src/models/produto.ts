export default class Produto {
    id: number;
    nome: string;
    preco: number;
    descricao?:string;
    promo: boolean;

    private static nextId: number = 1;

    constructor(id: number, nome: string, preco: number, descricao?: string, promo: boolean = false) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
        this.promo = promo;
    }
}