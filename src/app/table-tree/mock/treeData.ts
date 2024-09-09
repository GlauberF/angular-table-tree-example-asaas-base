import {Account} from "../types/account";

export const TreeData: Account[] = [
  {
    name: '1 - Receitas',
    children: [
      {
        name: '1.1 - Receita operacional',
        classification: 'Receita Operacional',
        order: 1,
        children: [
          {
            name: 'Receita de Vendas',
            classification: 'Receita Operacional',
            order: 1,
          },
          {
            name: 'Receita de serviço prestado ',
            classification: 'Receita Operacional',
            order: 2,
          },
        ],
      },
    ],
  },
  {
    name: '2 - Despesas',
    children: [
      {
        name: '2.1 - Despesas Administrativas ',
        classification: 'Despesa fixa ',
        order: 1,
        children: [
          {
            name: 'Aluguel',
            classification: 'Despesa fixa ',
            order: 1,
          },
          {
            name: 'Energia Elétrica',
            classification: 'Despesa fixa ',
            order: 2,
          },
        ],
      },
    ],
  },
  {
    name: '3 - Resultado',
    children: [
      {
        name: '3.1 - Impostos sobre Lucro',
        classification: 'impostos sobre lucro',
        order: 1,
        children: [
          {
            name: 'IR',
            classification: 'impostos sobre lucro',
            order: 1,
          },
          {
            name: 'CSLL',
            classification: 'impostos sobre lucro',
            order: 2,
          },
        ],
      },
      {
        name: '3.2 - Sócios',
        classification: 'Distribuição de Lucros',
        order: 1,
        children: [
          {
            name: 'Pro Labore',
            classification: 'Distribuição de Lucros',
            order: 1,
          },
          {
            name: 'Distribuição de lucros',
            classification: 'Distribuição de Lucros',
            order: 2,
          },
        ],
      },
    ],
  },
];
