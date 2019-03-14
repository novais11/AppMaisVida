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
    

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}

