export class Lei {

    conteudo:any;

    constructor(dados:any)
    {
        this.conteudo = {
            tipo: dados.tipo,
            ato: dados.ato,
            descricao: dados.descricao,
            lei: dados.lei,
            link: dados.link
        };
    }

    public addInfo(dados:any)
    {
        this.conteudo.ato.push(dados.ato);
        this.conteudo.descricao.push(dados.descricao);
        this.conteudo.lei.push(dados.lei);
        this.conteudo.link.push(dados.link);
    }
}