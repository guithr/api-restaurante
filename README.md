# 🍽️ API REST de Pedidos para Restaurante com Node.js  

Este projeto é uma **API REST** desenvolvida para gerenciar pedidos de um restaurante. O desenvolvimento seguiu as melhores práticas para garantir uma API escalável, segura e bem estruturada.  

## 🚀 Tecnologias Utilizadas  

- **Node.js** para a construção do backend e manipulação de requisições HTTP  
- **Knex.js** como query builder para interagir com o banco de dados relacional  
- **Zod** para validação de dados recebidos nas requisições  
- **TypeScript** para tipagem e maior robustez no código  
- **Express.js** para gerenciar rotas e middleware  
- **Insomnia** para configuração e testes das requisições  
- **SQLite** como opção de banco de dados  

## 🛠️ Funcionalidades Implementadas  

### 🔹 Gerenciamento de Pedidos  
- Criar um novo pedido associando a mesa produtos e as quantidades  
- Buscar pedidos por ID da mesa
- Mostra valor total da conta pelo ID da mesa

### 🔹 Gerenciamento de Produtos  
- Listar todos os produtos disponíveis  
- Criar produtos com nome e preço.  
- Atualizar informações dos produtos  
- Remover produtos do sistema  

### 🔹 Integração com Banco de Dados  
- Uso do **Query Builder Knex.js** para manipulação de dados  
- **Migrations** para versionamento e criação da estrutura do banco de dados  
- **Seeds** para popular a base com dados iniciais  

### 🔹 Validação de Dados  
- Utilização do **Zod** para validar os dados das requisições, garantindo integridade  
- Verificação de campos obrigatórios e formatos corretos  

## 📦 Como Executar o Projeto  

1. **Clone o repositório:**  
   ```bash
   git clone https://github.com/guithr/api-restaurante.git
   ```  

2. **Acesse o diretório do projeto:**  
   ```bash
   cd api-restaurante
   ```  

3. **Instale as dependências:**  
   ```bash
   npm install
   ```  

4. **Configure o banco de dados e execute as migrations:**  
   ```bash
   npm run knex -- migrate:latest
   ```  

5. **Popule o banco de dados com os dados iniciais:**  
   ```bash
   npm run knex -- seed:run
   ```  

6. **Inicie o servidor:**  
   ```bash
   npm run dev
   ```  

8. **Teste as rotas no Insomnia ou Postman** utilizando os endpoints disponíveis  

## 🔗 Estrutura das Rotas  

### 🔹 Orders (`/orders`)
- `POST /orders` → Criar novo pedido  
- `GET /orders/table-session/:id` → Lista todos os pedidos do id da mesa selecionada 
- `GET /orders/table-session/:id/total` → Obtem o total da conta do id da mesa selecionada  

### 🔹 Products (`/products`)
- `POST /products` → Criar um novo produto  
- `GET /products` → Listar todos os produtos  
- `PUT /products/:id` → Atualizar produto  
- `DELETE /products/:id` → Remover produto

 ### 🔹 Tables (`/tables`)
- `GET /tables` → Lista todas as mesas

-  ### 🔹 Tables Sessions (`/tables`)
- `GET /tables-sessions` → Lista todas as mesas  
- `POST /tables-sessions` → Abre a mesa selecionada  
- `PATCH /tables-sessions/:id` → Fecha a mesa selecionada  



📌 **Esse projeto foi disponibilizado Pela Rocketseat através do curso Full-stack do módulo API REST com Node.js** 🚀
