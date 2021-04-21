# Componentes
Componentes desenvolvidos para serem reutilizados durante todo processo de desenvolvimento da aplicação, no intuito de agilizar e padronizar os elementos.

## Exemplos de aplicação:
---
## Button:
>   ```javascript
>   import { Button } from '../components';
> 
>   // Exemplo de Botao simples:
>   <Button 
>       onClick={ () => function() }
>       marginVertical={ 16 }
>       marginHorizontal={ 8 }
>   >
>       Texto
>   </Button>
>
>   // Exemplo de Botao Link:
>   <Button 
>       to="/"
>   >
>       Texto
>   </Button>
>   ```

## Checkbox:
>   ```javascript
>   import { Checkbox } from '../components';
> 
>   // Exemplo de Botao simples:
>   <Checkbox 
>       id="id-do-objeto"
>       checked={ value }
>       onChange={ e => setValue( e.target.value ) }
>   >
>       Texto
>   </Checkbox>
>   ```

## Header and Footer
> ```reactjs
> import { Header, Footer }
> <Header title=“Título do Cabeçalho”/>
> <div>
>        Corpo do site ou componente
> </div>
> <Footer />
> ```
