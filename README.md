# API-Dinheirow

### API de cadastros de artigos, onde os usuários podem seguir outros usuários e comentar publicações

## tecnologias utilizadas
    Nodejs
    Express
    Sequelize
    MySql
    


### Recursos disponiveis (Usuários)
    Criar usuário
    Obter Perfil
    Atualizar usuario

### Recursos disponiveis (Sessão)
    Realizar Login
    Obter usuário atual

### Recursos disponiveis (Artigos)
    Criar Artigo
    Listar artigos com ou sem QUERY PARAMS
    Buscar artigo por parametro SLUG

### Recursos disponiveis (Follows)
    Seguir usuário
    Deixar de seguir

### Recursos disponiveis (Comentários)
    Criar comentário
    Listar comentários em um artigo
    Deletar comentarios em um artigo

### Funções para implementar 
    Listar os artigos com os parametros das TAGS
    Deletar artigos
    Atualizar artigos
    Favoritar artigos
    Desfavoritar artigos

Observações: Não criei uma tabela para os dados slug, então todos os slugs devem ser inseridos via body como string comum.

## REQUISITOS
Para a execução da API é necessario ter o MySql instalado localmente. <br>
Basta instalar e definir a senha de acesso root como "admin123", caso crie uma senha diferente será necessario modificar o arquivo de configuração que estáem src>>app>>config


## Comandos para criar o banco e executar migrations
     Criar banco
        npx sequelize db:create

     Criar Tabelas
    npx sequelize db:migrate

<h5> Após esses passos basta rodar o comando 'npm run dev'</h5>

## Diagrama API
![relacionamentos](https://user-images.githubusercontent.com/78126649/123156767-10377f00-d440-11eb-9bfe-d0995a97482a.PNG)


### Considerações <br/>
Por ser o meu primeiro projeto 'completo' utilizando sequelize e um banco SQL, encontrei algumas dificuldades no decorrer do desenvolvimento. E mesmo não tendo concluido 100%, com certeza a melhor parte foi os conhecimentos que consegui assimilar durante o projeto.


