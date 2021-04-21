# Componentes
Componentes desenvolvidos para serem reutilizados durante todo processo de desenvolvimento da aplicação, no intuito de agilizar e padronizar os elementos.

## Componente de composiçao de layouts.

> ### Menu Global
>   ```javascript
>   import { MenuGlobal } from '../components';
>
>   <MenuGlobal />
>   ```

> ### Header and Footer
>   ```javascript
>   import { Header, Footer } from '../components';
>
>   // Header requer um titulo para exibção;
>   <Header 
>       title=“Título do Cabeçalho”
>   />
>   
>   <div>
>       Corpo do site ou componente
>   </div>
>
>   // Traz automaticamen nome do usuário.
>   <Footer />
>   ```

> ### Separator
>   ```javascript
>   import { Separator } from '../components';
>
>   <Separator />
>   ```

## Componentes Básicos

> ### Buttons:
>   ```javascript
>   import { Button, TextButton } from '../components';
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
>
>   // Exemplo de Botao de Texto:
>   <TextButton 
>       to="/"
>   >
>       Texto
>   </Button>
>   ```

> ### Checkbox:
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

