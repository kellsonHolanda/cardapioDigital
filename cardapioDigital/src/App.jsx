import imagemRestaurante from "./assets/hashtaurante.webp"
import { useState } from "react";
import './App.css';
import { Navegacao } from "./Navegacao";
import { ItemCardapio } from "./ItemCardapio";
import { pratosPrincipais, sobremesas, bebidas } from "./cardapio";



export function App() {
  const secaoSelecionada = [pratosPrincipais, sobremesas, bebidas];
  const [selecaionada, atualizarPaginaSelecionada] = useState(0);

  return <>
          <img src={imagemRestaurante} alt="imagem do restaurante" className="capa"/>
          <Navegacao atualizarPaginaSelecionada={atualizarPaginaSelecionada}/>
          
          <div className="menu">
              {secaoSelecionada[selecaionada].map(prato => <ItemCardapio nome={prato.nome} preco={prato.preco} imagem={prato.imagem} descricao={prato.descricao}/>)};
          </div>
          

        </>
  
}