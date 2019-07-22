import { Injectable } from '@angular/core';

/*
  Generated class for the LinkExternoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class LinkExternoProvider {

  public lista:any;

  constructor() {
    this.lista = [
      {
        nome:"Acordos em Desapropriação", 
        path_img:"assets/imgs/topico/acordos_desapropriacao.png", 
        texto:`
        Desde o advento da Lei Complementar nº 88/96, que incluiu no art. 6º da Lei Complementar nº 76/93 os §§ 3º a 6º, sagrou-se expresso na legislação o incentivo aos acordos de desapropriação por interesse social para fins de reforma agrária como forma de garantir a aquisição do imóvel em tempo menor e, assim, conferir maior eficácia aos mandamentos constitucionais.
        
        O acordo somente poderá ser realizado quando atender aos princípios da legalidade, impessoalidade, moralidade, publicidade e eficiência, bem como traduzir racionalidade no emprego dos recursos públicos, dentro de critérios técnicos que visem a minimizar os custos de obtenção de terras rurais, agilizar a transferência de domínio e atender a razões de oportunidade e conveniência administrativas.
        `
      },
      {
        nome:"Ambiental", 
        path_img:"assets/imgs/topico/ambiental.png", 
        texto: `
        O licenciamento ambiental é um instrumento da Política Nacional de Meio Ambiente, definido no artigo 10 da Lei nº 6.938/81, que traz o conceito de degradação ambiental no seu artigo 3º.
        O processo de licenciamento ambiental é definido pelo art. 2º, inciso I da LC nº 140/2011, cabendo ao CONAMA (competência fixada no artigo 8º, inciso I da Lei nº 6.938/81) definir os empreendimentos e atividades considerados capazes de causar degradação ambiental e que por isso estariam sujeitos ao licenciamento ambiental.
        Considerando o baixo impacto ambiental dos assentamentos de reforma agrária, por meio da Resolução nº 458/2013, o CONAMA optou por estabelecer como regra o licenciamento ambiental simplificado, excepcionando os casos em que, uma vez verificado significativo impacto ambiental, permanece a exigência do procedimento ordinário.
        A Resolução nº 458/2013/CONAMA é objeto de ação direta de inconstitucionalidade no Supremo Tribunal Federal (ADI nº 5.547), ajuizada pelo Ministério Público Federal, ainda não apreciada, de modo que a Resolução nº 458/2013/CONAMA encontra-se em plena vigência. O INCRA foi admitido como amicus curiae.`
      },
      {
        nome:"Cadastro Ambiental Rural", 
        path_img:"assets/imgs/topico/cadastro_ambiental_rural.png", 
        texto:`
        A Lei nº 12.651/2012, que instituiu o novo Código Florestal, criou o Cadastro Ambiental Rural – CAR, registro público eletrônico de âmbito nacional que tem a finalidade de integrar as informações ambientais das propriedades e posses rurais, compondo base de dados para controle, monitoramento, planejamento ambiental e econômico e combate ao desmatamento (art. 29 da Lei n.º 12.651/2012).
        A inscrição no CAR é obrigatória para todas as propriedades e posses rurais, tendo a lei fixado prazo inscrição que vem sendo prorrogado por decreto presidencial. O CAR foi implementado por meio da Instrução Normativa do Ministério do Meio Ambiente nº 02 de 05 de maio de 2014, publicada no DOU de 06/05/2014.
        O instrumento para o início da regularização de passivo ambiental de imóveis rurais, inclusive os destinados a projetos de assentamento, é o CAR (a exemplo, passivo ambiental relativo à reserva legal e às áreas de preservação permanente), uma vez que apenas depois de realizada a inscrição no CAR, os proprietários ou os possuidores de imóveis rurais com passivo ambiental relativo às APP, RL e áreas de uso restrito poderão solicitar a adesão aos Programas de Regularização Ambiental - PRA dos Estados e do Distrito Federal para proceder à regularização ambiental do seu imóvel rural.`
      },
      {
        nome:"ATER", 
        path_img:"assets/imgs/topico/ater.png", 
        texto:`
        A Assistência Técnica e Extensão Rural (ATER) é um serviço de educação não formal, de caráter continuado, no meio rural, que promove processos de gestão, produção, beneficiamento e comercialização das atividades e dos serviços agropecuários e não agropecuários, inclusive das atividades agroextrativistas, florestais e artesanais.
        Os contratos administrativos de Assistência Técnica e Extensão Rural (ATER) se iniciam com o planejamento das contratações, incluindo a identificação do público beneficiário, da demanda de serviços, do objeto e da abrangência geográfica - materializados nas Chamadas Públicas de ATER – e que tem continuidade na seleção de propostas, na contratação das entidades executoras, na execução do contrato, em sua gestão e acompanhamento, no arquivamento do processo e na avaliação da efetividade da prestação de serviços.
        Na gestão, monitoramento e fiscalização dos contratos deve prevalecer o interesse público, em conformidade com os princípios básicos da impessoalidade, da legalidade, da moralidade, da probidade administrativa e da vinculação à Chamada Pública e ao instrumento contratual. A diligente atuação dos gestores e fiscais do ajuste é essencial para que o Incra possa exercer plenamente suas atribuições, colaborando com a execução de ATER.`
      },
      {
        nome:"Aquisição de terras por estrangeiros", 
        path_img:"assets/imgs/topico/aquisicao_terras_estrangeiros.png", 
        texto:`
        A aquisição de imóveis rurais por estrangeiros está regulada pela Lei nº 5.709/71. Essa lei estabelece uma série de exigências e restrições a serem observadas pelo estrangeiro residente no país e pela pessoa jurídica estrangeira autorizada a funcionar no Brasil que pretendam adquirir imóvel rural no País.
        O controle estatal sobre a aquisição de imóveis rurais por estrangeiros protege a soberania nacional e se baseia na defesa da integridade do território nacional, na segurança do Estado e na justa divisão da propriedade.
        `
      },
      {
        nome:"Bens da união", 
        path_img:"assets/imgs/topico/bens_da_uniao.png", 
        texto:`
        Os bens que pertencem à União são os definidos no artigo 20 da Constituição Federal e elencados no Decreto-Lei nº 9.760/1946.
        Considerando o objetivo a que se destinam, podem ser classificados em três tipos. Os bens de uso comum do povo são aqueles destinados à utilização geral pela coletividade, em igualdade de condições, independentemente de consentimento individualizado pelo Poder Público. São exemplos as ruas, praças, praias, mares, rios e estradas. Os bens de uso especial são aqueles que visam à execução de serviços administrativos e dos serviços públicos em geral como, por exemplo, as escolas públicas, os hospitais, os veículos oficiais, entre outros. Os bens dominiais são os que constituem patrimônio das pessoas jurídicas de direito público, mas não possuem uma destinação pública específica, definida na legislação, podendo ser disponibilizados para uso privado, mediante pagamento de uma retribuição pelo uso de bem público. São bens dominiais as terras devolutas, os terrenos de marinha, os prédios públicos desativados, entre outros.
        Além dos imóveis definidos como bens da União no artigo 20 da Constituição Federal, a União pode ter a propriedade de imóveis recebidos como pagamento por dívidas de terceiros, ou incorporados aos seu patrimônio, devido à extinção de órgãos e entidades da Administração Pública Federal.
        `
      },
      {
        nome:"Faixa de domínio da rodovia", 
        path_img:"assets/imgs/topico/faixa_de_dominio_rodovia.png", 
        texto:`
        As faixas de domínio são áreas laterais das pistas das rodovias, pertencentes ao patrimônio público, declaradas de utilidade pública para a construção e operação das rodovias.
        Consoante definição do Glossário de Termos Técnicos Rodoviários, “Faixa de Domínio” é a base física sobre a qual se assenta uma rodovia, constituída pelas pistas de rolamento, canteiros, obras-de-arte, acostamentos, sinalização e faixa lateral de segurança, até o alinhamento das cercas que separam a estrada dos imóveis marginais ou da faixa do recuo.
        Os limites das faixas de domínio variam de acordo com cada rodovia, entre 130 a 40 metros, divididos simetricamente em relação aos eixos dos canteiros centrais. Além dessa faixa, é obrigatória a reserva de mais 15 metros de cada lado da faixa de domínio, a denominada faixa non-aedificandi, na qual não se pode construir, conforme o disposto na Lei Federal nº 6.766/1979.
        O uso das faixas de domínio deverá obedecer a condições de segurança de trânsito estabelecidas pelo órgão com circunscrição sobre a via e poderá ocorrer por meio de contrato de Permissão Especial de Uso.
        `
      },
      {
        nome:"Convênio e congêneres", 
        path_img:"assets/imgs/topico/convenios_congeneres.png", 
        texto:`
        Convênios, contratos de repasse e termos de execução descentralizada são instrumentos celebrados pelos órgãos e entidades da administração pública federal com órgãos ou entidades públicas ou privadas sem fins lucrativos, para a execução de programas, projetos e atividades que envolvam a transferência de recursos ou a descentralização de créditos oriundos dos Orçamentos Fiscal e da Seguridade Social da União. Já os termos de parceria são instrumentos firmados entre a administração pública e organizações da sociedade civil para a consecução de interesses públicos recíprocos.
        Referidos instrumentos são comumente utilizados, no âmbito do Programa Nacional de Reforma Agrária (PNRA), para a consecução de políticas públicas do Programa Nacional de Educação na Reforma Agrária (PRONERA), para implantação de infraestrutura nos Projetos de Assentamento, para assistência técnica e apoio aos assentados entre outros.
        `
      },
      {
        nome:"Créditos", 
        path_img:"assets/imgs/topico/creditos.png", 
        texto:`
        A distribuição de lotes pela reforma agrária é apenas uma das ferramentas utilizadas pela política fundiária. Ocorre que, para que a reforma agrária tenha êxito, se faz necessário garantir, minimamente, a fixação da família no lote rural – fornecendo-lhes apoio na estruturação produtiva do lote rural.
        Nessa perspectiva, de se notar que a previsão legislativa de um crédito especial para a reforma agrária remonta à edição do Estatuto da Terra (Lei nº 4.504, de 30 de novembro de 1964). Referida Lei contém seção específica (seção VI) destinada a reger a “assistência financeira e creditícia” ao trabalhador rural.
        Em momento mais recente, o art. 17, V, da Lei n. 8.629/93 dispõe que “a consolidação dos projetos de assentamento integrantes dos programas de reforma agrária dar-se-á com a concessão de créditos de instalação e a conclusão dos investimentos, bem como com a outorga do instrumento definitivo de titulação”.
        O Incra é a entidade que detém a competência para operacionalizar a concessão do crédito de instalação, conforme atualmente previsto no art. 1º, § 1º, do Decreto nº 9.424, de 06 de junho de 2018.
        Como entidade historicamente competente para operacionalizar referidos recursos, o Incra editou diversas instruções normativas e normas de execução para regulamentar a matéria.
        `
      },
      {
        nome:"Desapropriação para fins de reforma agrária", 
        path_img:"assets/imgs/topico/desapropriacao_reforma_agraria.png", 
        texto:`
        A Constituição Federal impõe a desapropriação para fins de reforma agrária aos imóveis rurais que não cumpram a função social da terra. Referida desapropriação se constitui em sanção pelo ilícito constitucional do descumprimento da função social ao imóvel rural de grandes dimensões que não atingiu índices mínimos de produtividade, descumpriu legislação ambiental ou trabalhista ou foi foco de conflitos e violência no campo.
        Apesar de ser uma desapropriação sanção, é garantido ao proprietário expropriado o recebimento de prévia e justa indenização, acrescida de juros compensatórios, em dinheiro para as benfeitorias e em Títulos da Dívida Agrária (TDA) para a terra nua.
        `
      },
      {
        nome:"Doação, cessão de uso e concessão de direito real de uso para implantação de infraestrtura", 
        path_img:"assets/imgs/topico/doacao_cessao_etc.png", 
        texto:`
        A instalação e o desenvolvimento de um Projeto de Assentamento demandam obras de infraestrutura e a implantação de equipamentos que potencializem as atividades agrárias e melhorem a dinâmica da vida da comunidade do projeto e de seu entorno.
        Para tanto, o Incra é autorizado a alienar a propriedade ou o uso de áreas do Projeto de Assentamento para entidades públicas ou privadas que tenham interesse em instalar benfeitorias de interesse da população local tais como estradas, escolas, postos de saúde, igrejas, equipamentos de esportes ou recreação, feiras, galpões, agroindústrias etc.
        `
      },
      {
        nome:"Emancipação e consolidação de projetos de assentamento", 
        path_img:"assets/imgs/topico/emancipacao_e_consolidacao.png", 
        texto:`
        A consolidação (ou emancipação) é o ato administrativo formal que declara o desligamento do Projeto de Assentamento do ente estatal responsável por sua implantação e desenvolvimento
        A consolidação se dá após a aplicação de créditos de instalação, a conclusão de investimentos e a titulação dos assentados do PNRA.
        `
      },
      {
        nome:"Faixa de fronteira", 
        path_img:"assets/imgs/topico/faixa_de_fronteira.png", 
        texto:`
        Faixa de Fronteira é uma linha imaginária constituída por uma faixa interna de terras que se estende de 0 a 150 Km paralelamente à linha divisória terrestre do território nacional com outros países. A Faixa de Fronteira exterioriza a posse do Estado Brasileiro em relação aos países confrontantes, especifica a dominialidade pública federal das terras indispensáveis à defesa do território nacional e elege áreas essenciais ao desenvolvimento econômico.
        Inicialmente a Faixa de Fronteira fora fixada em 66km, posteriormente em 100 km e atualmente abrange a faixa de 150 km.
        `
      },
      {
        nome:"Georreferenciamento",
        path_img:"assets/imgs/topico/georreferenciamento.png",
        texto:`
        A Lei nº 10.267/2001 inseriu no ordenamento jurídico brasileiro a obrigatoriedade de georreferenciamento de imóveis rurais, o qual deve ser certificado pelo Incra. Quaisquer atos de transferência, desmembramento, parcelamento ou remembramento de imóveis rurais pressupõem a cerificação do georreferenciamento do imóvel envolvido.
        A certificação efetuada pelo Incra não retira eventuais vícios no título de domínio do imóvel, sendo instrumento que atesta que a poligonal objeto de memorial descritivo do imóvel não se sobrepõe a outra poligonal já certificada e que o memorial descritivo atende às exigências técnicas estabelecidas.`,
      },
      {
        nome:"INCRA, IBRA, INDA, INIC, MIRAD, MDA E OUTROS",
        path_img:"assets/imgs/topico/incra_ibra_etc.png",
        texto:`
        Principais órgãos incumbidos das políticas públicas de Reforma Agrária ao longo da história do Brasil:
        Inic – Instituto Nacional de Imigração e Colonização (1954)
        SSR – Serviço Social Rural (1955)
        Supra – Superintendência de Política Agrária (1962)
        Ibra – Instituto Brasileiro de Reforma Agrária (1964)
        Inda – Instituto Nacional de Desenvolvimento Rural (1964)
        Incra – Instituto Nacional de Colonização e Reforma Agrária (1970)
        Mirad – Ministério da Reforma e do Desenvolvimento Agrário (1985)
        MEPF – Ministério Extraordinário de Política Fundiária (1996)
        MDA – Ministério do Desenvolvimento Agrário (2000)`,
      },
      {
        nome:"MÓDULO RURAL",
        path_img:"assets/imgs/topico/modulo_rural.png",
        texto:`
        O Estatuto da Terra e a Lei nº 8.629/93 definem o imóvel rural como sendo o “prédio rústico, de área contínua, qualquer que seja a sua localização, que se destine ou possa se destinar à exploração agrícola, pecuária, extrativa vegetal, florestal ou agroindustrial”. Para a classificação do imóvel rural em pequena, média e grande propriedades utiliza-se o padrão do módulo fiscal, oriundo do conceito de módulo rural.
        O módulo rural é uma medida expressa em hectares, fixada para cada imóvel rural em específico, refletindo a quantidade de área adequada para o tipo de exploração predominante naquele imóvel rural, segundo sua região de localização. O módulo rural, variável para cada imóvel, deu origem a conceitos homogêneos como o módulo fiscal, a fração mínima de parcelamento, o módulo de exploração definida e o módulo de exploração indefinida.
        O módulo fiscal de cada município é uma medida padrão e homogênea na base municipal, expressa em hectares, definida pelo Incra levando-se em consideração os critérios do artigo 50 do Estatuto da Terra: o tipo de exploração predominante no município, a renda média obtida no tipo de exploração predominante, outras explorações de expressão no município e, ainda, a área mínima necessária para que as principais atividades rurais absorvam a força de trabalho de uma família e lhe garanta subsistência e progresso social e econômico.
        A fração mínima de parcelamento, (FMP) diz respeito ao limite dimensional para atos de desmembramento jurídico do imóvel rural junto ao cartório de registro de imóveis. Ainda que comporte diversas exceções, a FMP seria o parâmetro geral de área mínima de fracionamento do imóvel rural para que o mesmo não perca suas características rurais.
        Além destes, há também o módulo de exploração definida (MED), variável para cada tipo de produto, e o módulo de exploração indefinida (MEI), homogêneo na base municipal.`,
      },
      {
        nome:"REGULARIZAÇÃO FUNDIÁRIA",
        path_img:"assets/imgs/topico/regula_fund.png",
        texto:`
        A Regularização Fundiária é a política pública de titulação - gratuita ou onerosa – de ocupações sobre terras públicas ou privadas de terceiros. Em outros tempos a legislação denominava a titulação de ocupações sobre terras públicas de legitimação de posse, destinando a nomenclatura de regularização fundiária apenas à atribuição de propriedade às ocupações incidentes sobre áreas privadas. Hoje, ambas estão abarcadas no conceito de regularização fundiária.
        A regularização fundiária é o gênero do qual são espécies a regularização fundiária de territórios quilombolas, a regularização fundiária de comunidades tradicionais, a regularização fundiária de terras federais ocupadas por posseiros (pessoas naturais), entre outras.`,
      },
      {
        nome:"PROJETOS DE ASSENTAMENTO AMBIENTALMENTE DIFERENCIADOS-PDS, PAF, PAE",
        path_img:"assets/imgs/topico/projeto_de_assentamento_diferenciado.png",
        texto:`
        PAE – Projeto de Assentamento Agroextrativista
        PDS – Projeto de Desenvolvimento Sustentável
        PAF –Projeto de Assentamento Florestal
        PAE, PDS e PAF são modalidades de Projetos de Assentamento ambientalmente diferenciados. A origem dos Projetos de Assentamento ambientalmente diferenciados remonta aos movimentos de seringueiros da década de 1980, liderados, entre outros, pelo Conselho Nacional de Seringueiros e por Chico Mendes, com vistas à viabilidade da exploração da floresta de maneira sustentável por comunidades tradicionais. O PAE, modalidade pioneira dos Projetos de Assentamento ambientalmente diferenciados, foi instituído inicialmente em 1987. Posteriormente, propostas de exploração agrícola associada à floresta idealizadas por técnicos do Incra e por lideranças de movimentos sociais como a missionária Dorothy Stang contribuíram para a formulação do atual modelo de PDS.
        Criados em áreas ocupadas por populações tradicionais e tendo como principal característica a exploração integrada ao ecossistema local, os Projetos de Assentamento ambientalmente diferenciados têm regramento próprio de seleção, exploração e titulação.`,
      },
      {
        nome:"REINTEGRAÇÃO DE POSSE DE TERRAS PÚBLICAS",
        path_img:"assets/imgs/topico/reintegracao_de_posse.png",
        texto:`
        A ocupação de particular em bens públicos não configura posse, mas a mera detenção decorrente da tolerância ou permissão do Poder Público.
        Em caso de esbulho ou ocupação irregular de terra pública por particular, assegura-se ao Estado a possibilidade de ajuizar ação de reintegração de posse com vistas a obter a desocupação do imóvel.
        No que tange à ocupação irregular de projeto de assentamento de reforma agrária, por quem não seja assentado ou beneficiário do Programa Nacional do Programa de Reforma Agrária, e não preencha os requisitos para ser regularizado, o ocupante será notificado para desocupação da área, sem prejuízo de eventual responsabilização nas esferas cível e penal.`,
      },
      {
        nome:"SISTEMA NACIONAL DE CADASTRO RURAL",
        path_img:"assets/imgs/topico/sistema_nacional_cadastro_rural.png",
        texto:`O Incra é incumbido de gerir a malha fundiária brasileira através do Sistema Nacional de Cadastro Rural (SNCR). Todos os imóveis rurais do país devem ser registrados no SNCR enquanto unidades de exploração, na forma do art. 4º, I do Estatuto da Terra e do art. 4º, I da Lei nº 8.629/93. Estando o imóvel regularmente registrado no SNCR, poderá ser emitido o Certificado de Cadastro de Imóvel Rural (CCIR).
        Desmembramentos, remembramentos, parcelamentos de imóveis rurais, assim como o cancelamento do cadastro do imóvel rural que tenha perdido as características rurais, são efetuados pelo Incra junto ao SNCR.`,
      },
      {
        nome:"DESMEMBRAMENTO, REMEBRAMENTO, PARCELAMENTO E CANCELAMENTO DE IMÓVEIS RURAIS",
        path_img:"assets/imgs/topico/desmembramento_remembramento.png",
        texto:`Desmembramento: fracionamento parcial do imóvel rural com a constituição de um novo imóvel, contíguo ao imóvel remanescente.
        Parcelamento: fracionamento total do imóvel rural com a constituição de diversos outros imóveis rurais e/ou de imóveis urbanos.
        Remembramento: incorporação de um imóvel rural a outro imóvel contíguo.
        Cancelamento: cancelamento do cadastro do imóvel rural que tenha perdido as características rurais.`,
      },
      {
        nome:"TAXA DE SERVIÇOS CADASTRAIS",
        path_img:"",
        texto:`Descrição não informada.`,
      },
      {
        nome:"SELEÇÃO DE BENEFICIÁRIOS DO PNRA",
        path_img:"assets/imgs/topico/selecao_pnra.png",
        texto:`Os Projetos de Assentamento da Reforma Agrária, quando de sua implantação, selecionam candidatos a beneficiários do Programa Nacional de Reforma Agrária, os quais passam a ter acesso ao lote da Reforma Agrária e às demais políticas públicas do programa.
        O preenchimento de lotes vagos ou reintegrados ao PNRA também obedece a processos de seleção de beneficiários.
        O processo de seleção de beneficiários do Programa Nacional de Reforma Agrária deve ser realizado por projeto de assentamento, com ampla divulgação do Edital de convocação, pelo Incra, na internet, no município em que será instalado o projeto de assentamento e nos municípios limítrofes.
        O processo de seleção de beneficiários compreende as fases de publicação de Edital de Abertura, inscrição dos candidatos perante o Incra, que permite a formação de um cadastro pela Autarquia, de validação ou deferimento da inscrição, de classificação dos candidatos e, finalmente, de homologação dos beneficiários nas parcelas. Após a homologação, os nomes dos candidatos passam a compor a Relação de Famílias Beneficiárias (RB), que consiste em lista única de beneficiários do PNRA por projeto de assentamento e é mantida no sítio eletrônico do Incra.`,
      },
      {
        nome:"TERRITÓRIOS QUILOMBOLAS",
        path_img:"assets/imgs/topico/quilombo.png",
        texto:`A Regularização Fundiária de Territórios Quilombolas é um tipo específico de regularização fundiária de comunidades tradicionais, assim entendidos os grupos culturalmente diferenciados que se reconhecem como tais, que possuem formas próprias de organização social, que ocupam e usam territórios e recursos naturais como condição para sua reprodução cultural, social, religiosa, ancestral e econômica, utilizando conhecimentos, inovações e práticas gerados e transmitidos pela tradição.
        A Regularização Fundiária de Territórios Quilombolas tem por escopo a preservação da pluralidade étnica e cultural, com garantias de reprodução física, cultural, econômica e social de comunidades que se reconhecem como remanescentes de quilombos. Tal política pública garante posse e propriedade dos territórios tradicionalmente ocupados por populações que tenham trajetória histórica própria, sejam dotadas de relações territoriais específicas e que tenham presunção de ancestralidade negra relacionada com a resistência à opressão histórica sofrida.`,
      },
      {
        nome:"TERRAS DEVOLUTAS E CADEIA DOMINIAL",
        path_img:"assets/imgs/topico/terras_devolutas.png",
        texto:`São devolutas, todas aquelas terras que nunca ingressaram no domínio privado por título legítimo ou não receberam destinação pública.
        A Constituição Federal de 1988 determina, em seu artigo 20, II, que as terras devolutas são bens da União, desde que sejam indispensáveis à defesa das fronteiras, das fortificações e construções militares, das vias federais de comunicação e à preservação ambiental, definidas em lei. No art. 26, IV, determina que as demais pertencem aos Estados-membros, desde que não sejam compreendidas entre as da União.
        O processo de discriminação das terras devolutas, previsto pela Lei nº 6.383/76, é instrumento que permite conhecer o acervo de terras dos domínios público e privado, a fim de que, seja possível dar a destinação social às terras públicas (artigo 13 da Lei 8.629/93).
        Além do procedimento discriminatório, é possível identificar se o imóvel foi regularmente destacado do patrimônio público por meio do estudo de sua cadeia dominial.
        Cadeia dominial é a relação de todos proprietários de um dado imóvel desde sua titulação original pelo Poder Público. A análise da coerência da cadeia dominial com os princípios do direito registral, como o da continuidade e o da especialidade, é fundamental para que Incra realize suas atividades institucionais, como cadastramento de imóveis rurais, emissão do Certificado de Cadastro de Imóvel Rural, desapropriação, aquisição de imóveis.`,
      },
      {
        nome:"TITULAÇÃO DE LOTES DA REFORMA AGRÁRIA",
        path_img:"assets/imgs/topico/titulacao_lotes_reforma_agraria.png",
        texto:`Após a homologação da família na Relação de Beneficiários do Programa Nacional de Reforma Agrária, o beneficiário passa a ser assentado e fica submetido às condições de permanência na parcela, estipuladas no instrumento de titulação aplicável à área destinada à exploração familiar.
        A distribuição dos imóveis rurais em projetos de assentamento é feita, em caráter provisório, pelo Contrato de Concessão de Uso – CCU, celebrado entre o Incra e o beneficiário imediatamente após a homologação da seleção. Constitui documento gratuito, inegociável, individual ou coletivo, que confere ao assentado o direito de usar e explorar a parcela e acessar as demais políticas do PNRA, desde que cumpridas as obrigações legais e observadas as cláusulas resolutivas as constantes no verso do Contrato assinado pelo beneficiário.
        O Título de Domínio – TD e a Concessão de Direito Real de Uso - CDRU são instrumentos com força de escritura pública, que transferem, de forma onerosa (TD) ou gratuita, em caráter definitivo, a parcela rural ao beneficiário da reforma agrária, e são inegociáveis pelo prazo de 10 anos. Contêm cláusulas resolutivas e são outorgados ao beneficiário após a realização dos serviços de medição e demarcação topográfica do imóvel, desde que cumpridas as cláusulas contratuais do CCU.
        A titulação provisória ou definitiva poderá ser individual; individual com fração ideal de área coletiva, com ou sem área demarcada; ou coletiva, com indicação de fração ideal sobre área coletiva, sem área individual demarcada. O instrumento de titulação é formalizado com os titulares da unidade familiar assentada, sendo vedada a titulação em nome de pessoa jurídica.`,
      },
      {
        nome:"TDA E PRECATÓRIOS",
        path_img:"assets/imgs/topico/tda_precatorio.png",
        texto:`O art. 184 da Constituição Federal incumbe à União a desapropriação de imóveis rurais que não cumpram a função social mediante prévia e justa indenização. Tal indenização se dá em Títulos da Dívida Agrária – TDA – para a terra nua e em dinheiro para as benfeitorias.
        Como a justa indenização é prévia, o INCRA efetua o depósito inicial na ação de desapropriação em TDAs e em dinheiro. Havendo condenação que determine ao INCRA a complementação do valor inicialmente depositado, tal complementação será paga por meio de precatórios.`,
      },
      {
        nome:"OUTROS TEMAS",
        path_img:"assets/imgs/topico/outros.png",
        texto:`Descrição não informada.`,
      },
      {
        nome:"Geral",
        path_img:"assets/imgs/topico/selecao_pnra.png",
        texto:``,
      },
      {
        nome:"Geral",
        path_img:"assets/imgs/topico/selecao_pnra.png",
        texto:``,
      },
      {
        nome:"Geral",
        path_img:"assets/imgs/topico/selecao_pnra.png",
        texto:``,
      },
      {
        nome:"Geral",
        path_img:"assets/imgs/topico/selecao_pnra.png",
        texto:``,
      },
      {
        nome:"Geral",
        path_img:"",
        texto:``,
      }
    ]  
  }

  public getItem(nome:string)
  {
    return this.lista.filter(item => {
      return item.nome.toLowerCase().indexOf(nome.toLowerCase()) > -1;
    });
  }

}
