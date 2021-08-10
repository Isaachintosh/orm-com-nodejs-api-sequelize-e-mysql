# ORM com NodeJS com API Sequelize e MySQL

# Instruções para executar o projeto

<ol>
    <li>Abra o terminal integrado</li>
    <li>Verifique se ele está retornando o caminho da pasta principal do projeto</li>
    <li>Execute a instalação das dependências do projeto: usando "yarn install" ou "npm install"</li>
    <li>Use o comando "yarn dev" ou "npm run dev" para inicializar a API</li>
    <li>Execute o script de criação do banco de dados pelo comando ...</li>
    <li>Execute o script para criar as migrations pelo comando "yarn db:migrate"</li>
    <li>Para criar o seeder da tabela pessoas, use o comando "yarn seed-gen-pessoa"</li>
</ol>

## Sobre o projeto
<p>O estudo de caso desse projeto se baseia num cliente fictício, uma escola de ensino médio que deseja implementar um sistema de aulas virtuais. Para tal ela apresentou como necessidade organizar o conteúdo pedagógico distribuído de modo organizado dentro do portal que eles mantém online.</p>
<p>A escola informou que o controle acadêmico precisa ser feito para se aproximar da realidade da secretaria acadêmica.</p>
<p>Deste modo foi informado que o sistema deve ser capaz de:</p>
<ol>
    <li>Cadastrar individualmente cada aula</li>
    <li>Agrupar as aulas por disciplina</li>
    <li>A disciplina deve ser acessada somente pela classe que a está cursando</li>
    <li>Cada classe deve conter os alunos que a ela pertencem</li>
    <li>O cadastro dos alunos deve ser registrado pela matricula deles</li>
    <li>As classes devem ser classificadas pelo nível</li>
    <li>Somente os professores serão capazes de postar e editar as aulas e exercícios</li>
    <li>Os professores devem conseguir pesquisar o aluno pela matrícula</li>
    <li>O resultado da busca deve retornar a matrícula e o desempenho acadêmico do aluno, bem como quais aulas ele já assistiu até o momento da pesquisa ter sido feita</li>
</ol>
<p>O desenvolvimento desse projeto objetiva a criação de uma API RESTful usando os recursos disponibilizados pelo Sequelize.js para organizar o fluxo de cadastro, consulta, atualização e deleção de dados de um sistema escolar.</p>
