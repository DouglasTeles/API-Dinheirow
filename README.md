<h1> API-Dinheirow</h1>

API de cadastros de artigos, onde os usuários podem se seguir e comentar as publicações;

API desenvolvida em NodeJs utilizando express;
MySql como banco de dados e Sequelize como ORM;
bcryptjs para criptografia de senhas;


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

### Funções não implementadas :( 
    Listar os artigos com os parametros das TAGS
    Deletar artigos
    Atualizar artigos
    Favoritar artigos
    Desfavoritar artigos

Observações: Não criei uma tabela para os dados slug, então todos os slugs devem ser inseridos via body como string comum.

## REQUISITOS
Para a execução da API é necessario ter o MySqlworkbench instalado local. <br>
Basta instalar e definir a senha de acesso root como "admin123", caso crie uma senha diferente será necessario modificar o arquivo de configuração que estáem src>>app>>config

### Dependencias necessarias 
* npm install express --save
* npm install nodemon --save
* npm install sequelize --save
* npm install sequelize-cli --save
* npm install mysql2 --save
* npm install bcryptjs --save
* npm install jsonwebtoken --save
* npm install dotenv --save

## Comandos para criar o banco e executar migrations
     Criar banco
        npx sequelize db:create

     Criar Tabelas
    npx sequelize db:migrate

<h5> Após esses passos basta rodar o comando 'npm run dev'</h5>

### Considerações <br/>
Por ser o meu primeiro projeto 'completo' utilizando sequelize e um banco SQL, encontrei algumas dificuldades no decorrer do desenvolvimento. E mesmo não tendo concluido 100%, fiquei muito feliz com os conhecimentos que consegui assimilar enquanto trabalhei no projeto.
