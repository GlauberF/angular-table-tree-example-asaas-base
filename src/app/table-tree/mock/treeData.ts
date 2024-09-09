import {Account} from "../types/account";

export const TreeData: Account[] = [
  {
    name: '1 - Receitas',
    dragAndDrop: false,
    children: [
      {
        name: '1.1 - Receita operacional',
        classification: 'Receita Operacional',
        order: 1,
        dragAndDrop: false,
        children: [
          {
            name: 'Receita de Vendas',
            classification: 'Receita Operacional',
            order: 1,
            dragAndDrop: true
          },
          {
            name: 'Receita de serviço prestado ',
            classification: 'Receita Operacional',
            order: 2,
            dragAndDrop: true
          },
        ],
      },
    ],
  },
  {
    name: '2 - Despesas',
    dragAndDrop: false,
    children: [
      {
        name: '2.1 - Despesas Administrativas ',
        classification: 'Despesa fixa ',
        order: 1,
        dragAndDrop: false,
        children: [
          {
            name: 'Aluguel',
            classification: 'Despesa fixa ',
            order: 1,
            dragAndDrop: true
          },
          {
            name: 'Energia Elétrica',
            classification: 'Despesa fixa ',
            order: 2,
            dragAndDrop: true
          },
        ],
      },
    ],
  },
  {
    name: '3 - Resultado',
    dragAndDrop: false,
    children: [
      {
        name: '3.1 - Impostos sobre Lucro',
        classification: 'impostos sobre lucro',
        order: 1,
        dragAndDrop: false,
        children: [
          {
            name: 'IR',
            classification: 'impostos sobre lucro',
            order: 1,
            dragAndDrop: true,
          },
          {
            name: 'CSLL',
            classification: 'impostos sobre lucro',
            order: 2,
            dragAndDrop: true,
          },
        ],
      },
      {
        name: '3.2 - Sócios',
        classification: 'Distribuição de Lucros',
        order: 1,
        dragAndDrop: false,
        children: [
          {
            name: 'Pro Labore',
            classification: 'Distribuição de Lucros',
            order: 1,
            dragAndDrop: true,
          },
          {
            name: 'Distribuição de lucros',
            classification: 'Distribuição de Lucros',
            order: 2,
            dragAndDrop: true,
          },
        ],
      },
    ],
  },
];
