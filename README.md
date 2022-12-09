<a name="readme-top"></a>

<div align="center">
  <a href="https://github.com/vitorfontenele/shopping-cart">
    <img src="public/jeb-head.svg" alt="Logo" width="80" height="80">
  </a>
  <h3 align="center">shopping-cart</h3>
  <a href="https://jebs-garage.surge.sh/">https://jebs-garage.surge.sh/</a>
</div>

<!-- Conteúdo -->
<details>
  <summary>Conteúdo</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o projeto</a>
      <ul>
        <li><a href="#feito-com">Feito com</a></li>
      </ul>
    </li>
    <li>
      <a href="#instalação">Instalação</a>
    </li>
    <li><a href="#requisitos">Requisitos</a></li>
    <li>
      <a href="#utilização">Utilização</a></li>
      <ul>
        <li><a href="#filtros">Filtros</a></li>
        <li><a href="#carrinho">Carrinho</a></li>
      </ul>
    <li><a href="#licença">Licença</a></li>
    <li><a href="#contato">Contato</a></li>
    <li><a href="#contribuições">Contribuições</a></li>
  </ol>
</details>

<!-- SOBRE O PROJETO -->
## Sobre o projeto

O objetivo deste projeto é reproduzir o Front-End de um E-commerce, trazendo uma listagem de produtos, buscas com diferentes filtros e um carrinho de compras.

Este projeto foi desenvolvido como atividade do bootcamp da Labenu. O presente repositório foi utilizado para o desenvolvimento do projeto - para entrega do projeto, foi utilizado um repositório que pode ser acessado através deste [link](https://github.com/vitorfontenele/projeto-frontendreact).

A temática escolhida para o projeto foi relacionada ao jogo [Kerbal Space Program](https://pt.wikipedia.org/wiki/Kerbal_Space_Program).

<p align="right">(<a href="#readme-top">voltar para o topo</a>)</p>

### Feito com


* [![React][React.js]][React-url]

<p align="right">(<a href="#readme-top">voltar para o topo</a>)</p>




<!-- INSTALAÇÃO -->
## Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/vitorfontenele/shopping-cart.git
   ```
2. Instale os pacotes NPM:
   ```sh
   npm install
   ```
3. Para executar o projeto em modo de desenvolvimento:
   ```sh
   npm run dev
   ```

<p align="right">(<a href="#readme-top">voltar para o topo</a>)</p>


<!-- REQUISITOS -->
## Requisitos

O projeto possui os seguintes requisitos:

- Home (Lista de Produtos)
    - [x]  O usuário deve ser capaz de visualizar uma lista de produtos
    - [x]  O usuário deve ser capaz de visualizar os dados do produto (nome, preço e imagem)
    - [x]  O usuário deve ser capaz de adicionar um produto no carrinho
- Carrinho
    - [x]  O usuário deve ser capaz de visualizar os produtos adicionados
    - [x]  O usuário deve ser capaz de visualizar a quantidade correta de cada produto
    - [x]  O usuário deve ser capaz de remover itens do carrinho
    - [x]  O usuário deve ser capaz de ver corretamente o valor total de sua compra
    - [x]  Quando a página é atualizada, os itens devem continuar no carrinho
- Filtros e Ordenação
    - [x]  O usuário deve ser capaz de filtrar os itens por preço mínimo
    - [x]  O usuário deve ser capaz de filtrar os itens por preço máximo
    - [x]  O usuário deve ser capaz de realizar uma busca por nome
    - [x]  O usuário deve ser capaz de ordenar os itens em ordem crescente ou decrescente
    - [x]  O usuário deve ser capaz de adicionar  filtros, busca e ordenação simultaneamente
    - [x]  O usuário deve ser capaz de retornar à visualização sem filtros
    
<p align="right">(<a href="#readme-top">voltar para o topo</a>)</p>

 <!-- UTILIZAÇÃO -->   
 ## Utilização
 
 Em relação à utilização, o projeto funciona como uma página de E-commerce: é possível utilizar os filtros de busca, pesquisar por produtos e adicioná-los a um carrinho. Ao adicionar um produto no carrinho, observe que, ao atualizar a página, esse mesmo produto permanecerá no carrinho - o que é feito através de armazenamento de informações no localStorage do navegador.
 
 Existe filtro de busca por nome, por preço máximo e mínimo, por categoria do produto, por tamanho (radial) dos produtos e também é possível realizar uma ordenação (em ordem crescente ou decrescente) dos produtos de acordo com o preço.
 
 O carrinho fica sempre à direita na viewport do navegador e, para acessá-lo (ou escondê-lo), basta clicar na seta que está presente nele.
 
 <p align="right">(<a href="#readme-top">voltar para o topo</a>)</p>
 
<!-- LICENSE -->
## Licença

Distribuído sob a MIT License. Veja `LICENSE.txt` para mais informações.

<p align="right">(<a href="#readme-top">voltar para o topo</a>)</p>
 
 <!-- CONTATO -->
 ## Contato

[![Github][github-shield]][github-url][![Linkedin][linkedin-shield]][linkedin-url]

Link do Projeto: [https://github.com/vitorfontenele/shopping-cart](https://github.com/vitorfontenele/shopping-cart)

<p align="right">(<a href="#readme-top">voltar para o topo</a>)</p>
 
  <!-- CONTRIBUIÇÕES -->
 ## Contribuições

* [Vite](https://vitejs.dev)
* [Surge](https://surge.sh/)
* [Kerbal Space Program Wiki](https://wiki.kerbalspaceprogram.com/wiki/Parts)
* [HTML Table to JSON Converter](https://www.convertjson.com/html-table-to-json.htm)
* [Font Awesome](https://fontawesome.com)
* [SVG Repo](svgrepo.com)
* [Unsplash](unsplash.com)
* [Tutorial de React – Como trabalhar com várias caixas de seleção](https://www.freecodecamp.org/portuguese/news/tutorial-de-react-como-trabalhar-com-varias-caixas-de-selecao/)

<p align="right">(<a href="#readme-top">voltar para o topo</a>)</p>
  
 <!-- MARKDOWN LINKS & IMAGES -->
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[linkedin-shield]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
[linkedin-url]: https://www.linkedin.com/in/vitor-fontenele/
[github-shield]: https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white
[github-url]: https://github.com/vitorfontenele
