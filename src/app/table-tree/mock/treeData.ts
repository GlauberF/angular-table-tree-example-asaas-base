import {Account} from "../types/account";

export const TreeData: Account[] = [{
  id: 822178,
  name: "1 - Receitas",
  dragAndDrop: false,
  children: [{
    id: 663743,
    name: "1.1 - Receita operacional",
    classification: "Receita Operacional",
    order: 1,
    dragAndDrop: false,
    children: [{
      id: 545155,
      name: "Receita de Vendas",
      classification: "Receita Operacional",
      order: 1,
      action: ["action1", "action2"],
      dragAndDrop: true
    }, {
      id: 512183,
      name: "Receita de serviço prestado ",
      classification: "Receita Operacional",
      order: 2,
      action: ["action1", "action2"],
      dragAndDrop: true
    }],
  }],
}, {
  id: 144813,
  name: "2 - Despesas",
  dragAndDrop: false,
  children: [{
    id: 972499,
    name: "2.1 - Despesas Administrativas ",
    classification: "Despesa fixa ",
    order: 1,
    dragAndDrop: false,
    children: [{
      id: 915855,
      name: "Aluguel",
      classification: "Despesa fixa ",
      order: 1,
      action: ["action1", "action2"],
      dragAndDrop: true,
    }, {
      id: 379163,
      name: "Energia Elétrica",
      classification: "Despesa fixa ",
      order: 2,
      action: ["action1", "action2"],
      dragAndDrop: true
    }]
  }]
}, {
  id: 47157,
  name: "3 - Resultado",
  dragAndDrop: false,
  children: [{
    id: 915548,
    name: "3.1 - Impostos sobre Lucro",
    classification: "impostos sobre lucro",
    order: 1,
    dragAndDrop: false,
    children: [{
      id: 339925,
      name: "IR",
      classification: "impostos sobre lucro",
      order: 1,
      action: ["action1", "action2"],
      dragAndDrop: true
    }, {
      id: 237797,
      name: "CSLL",
      classification: "impostos sobre lucro",
      order: 2,
      action: ["action1", "action2"],
      dragAndDrop: true
    }],
  }, {
    id: 931231,
    name: "3.2 - Sócios",
    classification: "Distribuição de Lucros",
    order: 1,
    dragAndDrop: false,
    children: [{
      id: 431329,
      name: "Pro Labore",
      classification: "Distribuição de Lucros",
      order: 1,
      action: ["action1", "action2"],
      dragAndDrop: true
    }, {
      id: 222578,
      name: "Distribuição de lucros",
      classification: "Distribuição de Lucros",
      order: 2,
      action: ["action1", "action2"],
      dragAndDrop: true
    }]
  }]
}]
