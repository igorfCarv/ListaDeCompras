import { adicionarItem } from "./adicionarItem";
import { verificarListaComprados } from "./verificarListaComprados.js";


const botaoSalvarItem = document.getElementById("adicionar-item");
botaoSalvarItem.addEventListener("click", adicionarItem);

const listaComprados = document.getElementById("lista-comprados");
verificarListaComprados(listaComprados);