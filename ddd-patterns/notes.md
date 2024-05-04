# DDD: Modelagem Tática e Patterns

## Introdução

### Elementos táticos

Quandos estamos falando sobre DDD e precisamos olhar mais a fundo um bounded context.
Precisamos ser capazes de modelarmos de forma mais assertiva os seus principais componentes, comportamentos e individualizades, bem como suas relações.

## Entidades

<i>Uma entidade é algo unico que é capaz de ser alterado de forma contínua durante um longo período de tempo.</i> <b>Vernon, Vaughn</b>
<i>Uma entidade é algo que possuí uma continuade em seu ciclo de vida e pode ser distinguida independente dos atributos que são importantes para a aplicação do usuário. Pode ser uma pessoa, cidade, carro, um ticket de loteria ou uma transação bancaria</i> <b>Evans, Eric</b>

Entidade = Identidade

### Entidade anemica

Entidade anemica é aquela entidade que só carrega dados (getters e setters), e que não possuí regras de negócio.

### Regras de negócio

### Consistencia constante em primeiro lugar

- Uma entidade tem sempre que representar o estado atual daquele elemento.
- Os dados a todo momento precisam estar consistentes
