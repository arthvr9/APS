//src/routes.ts
import { Router, Request, Response } from "express";

const router = Router();

interface Material {
    nome: string;
    descricao: string;
}

const materiais: Record<string, Material> = {
    pilhas: {
        nome: "Pilhas e Baterias",
        descricao: "Devem ser descartadas em pontos de coleta específicos, como supermercados e lojas de eletrônicos.",
    },
    oleo: {
        nome: "Óleo de Cozinha",
        descricao: "Não deve ser descartado na pia. Coloque o óleo usado em garrafas PET e entregue em pontos de coleta ou cooperativas",
    },
    eletronicos: {
        nome: "Eletrônicos",
        descricao: "Devem ser levados a pontos de coleta específicos, como lojas de eletrônicos ou centros de reciclagem."
    }
};

router.get("/", (req: Request, res: Response) => {
    res.render("index", { materiais });
});

router.get("/material/:material", (req: Request, res: Response) => {
    const tipo = req.params.tipo;
    const material = materiais[tipo];
    if (material) {
        res.render("material", { material });;
    } else {
        res.status(404).send("Material não encontrado");
    }
});

router.get("/locais", (req: Request, res: Response) => {
    const locais = [
        { nome: "Supermercado A", endereco: "Rua A, 123" },
        { nome: "Loja B", endereco: "Avenida B, 456" },
        { nome: "Centro de Reciclagem C", endereco: "Praça C, 789" },
        { nome: "Cooperativa D", endereco: "Rua D, 101" },
    ];
    res.render("locais", { locais });
});

export default router;
