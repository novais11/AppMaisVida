export class UsuarioModel {
    id: any;
    nome: string;
    email: string;
    nacionalidade: string;
    estado: string;
    escolaridade: string;
    sConjugal: string;
    fEscola: string;
    nomeMae: string;
    nomePai: string;
    data: any;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}

