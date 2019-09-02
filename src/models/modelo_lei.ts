export class Lei {

    conteudo:any;

    constructor(dados:any)
    {
        this.conteudo = {
            tipo: [dados.tipo],
            ato: dados.ato,
            descricao: [dados.descricao],
            lei: dados.lei,
            link: dados.link,
            data: dados.data,
            prioridade: dados.prioridade,
        };
    }

    public addInfo(dados:any)
    {
        // this.conteudo.ato.push(dados.ato);
        this.conteudo.descricao.push(dados.descricao);
        this.conteudo.tipo.push(dados.tipo);
        // this.conteudo.lei.push(dados.lei);
        // this.conteudo.link.push(dados.link);
        // this.conteudo.data.push(dados.data);
        // this.conteudo.prioridade.push(dados.prioridade);
    }
}