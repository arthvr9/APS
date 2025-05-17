// src/routes.ts
import { Router, Request, Response } from 'express';

const router = Router();

interface Material {
  nome: string;
  descricao: string;
  imagem: string;
  texto: string;
}

const materiais: Record<string, Material> = {
  pilhas: {
    nome: "Pilhas e Baterias",
    descricao: "Devem ser descartadas em pontos de coleta específicos como supermercados e lojas de eletrônicos.",
    imagem: "/pilhas.jpg",
    texto: "As pilhas e baterias, quando descartadas incorretamente, representam uma séria ameaça ao meio ambiente. Elas contêm metais pesados como mercúrio, cádmio e chumbo, que podem contaminar o solo e a água, afetando ecossistemas inteiros e colocando em risco a saúde humana. Ao serem jogadas no lixo comum, esses materiais tóxicos podem vazar e atingir lençóis freáticos e rios. Por isso, o descarte correto em pontos de coleta é essencial para evitar a poluição e promover um futuro mais sustentável."
  },
  oleo: {
    nome: "Óleo de Cozinha",
    descricao: "Coloque o óleo usado em garrafas PET e entregue em pontos de coleta ou cooperativas.",
    imagem: "/oleo.jpg",
    texto: "O óleo de cozinha usado é um dos principais poluentes das águas urbanas quando descartado de forma inadequada. Ao ser jogado na pia ou no vaso sanitário, ele pode entupir encanamentos e, pior ainda, chegar aos rios e lagos, formando uma camada que impede a oxigenação da água. Isso prejudica a vida aquática e contamina o solo e a água potável. Apenas 1 litro de óleo pode poluir até 20 mil litros de água. A alternativa correta é armazená-lo em garrafas PET e entregá-lo em pontos de coleta ou cooperativas especializadas em reciclagem."
  },
  eletronicos: {
    nome: "Eletrônicos",
    descricao: "Equipamentos eletrônicos devem ser descartados em pontos de coleta ou durante campanhas de recolhimento.",
    imagem: "/eletronicos.png",
    texto: "Os resíduos eletrônicos, quando descartados de forma inadequada, representam uma grave ameaça ao meio ambiente e à saúde humana. Aparelhos eletrônicos contêm metais pesados como chumbo, mercúrio e cádmio, que podem contaminar o solo e a água se não forem reciclados corretamente. Além disso, o descarte irregular contribui para o acúmulo de lixo tecnológico, que não se degrada facilmente e pode liberar substâncias tóxicas no ambiente. Por isso, é fundamental entregar eletrônicos usados em pontos de coleta específicos ou durante campanhas de recolhimento, promovendo a reciclagem e a reutilização responsável."
  }
};

router.get('/', (req: Request, res: Response) => {
  res.render('index', { materiais });
});

router.get('/material/:tipo', (req: Request, res: Response) => {
  const tipo = req.params.tipo;
  const material = materiais[tipo];
  if (material) {
    res.render('material', { material });
  } else {
    res.status(404).send('Material não encontrado.');
  }
});

router.get('/locais', (req: Request, res: Response) => {
  const locais = [
    { nome: "Assaí Campinas", endereco: "R. da Abolição, 2013 - Ponte Preta, Campinas - SP", material: "Pilhas" },
    { nome: "Ecoponto Jardim São Gabriel", endereco: "R. José Martins Lourenço, 140 - Jardim São Gabriel, Campinas - SP", material: "Óleo de Cozinha" },
    { nome: "Ecoponto 02 - Quintal", endereco: "R. Antônio Cremasco, 165 - Samambaia, Valinhos - SP", material: "Eletrônicos no geral" },
  ];
  res.render('locais', { locais });
});

export default router;
