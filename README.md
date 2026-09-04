# 🐘 Exercício JS + Postgres

Este repositório foi desenvolvido para praticar a integração entre uma API em **JavaScript (Node.js)** e o banco de dados relacional **PostgreSQL**, utilizando contêineres **Docker** e manifestos de infraestrutura como código para implantação.

## 📁 Estrutura do Repositório

Aqui está a explicação dos arquivos estruturados no projeto:

* **`index.js`**: O ponto de entrada da aplicação contendo o código em Node.js e a lógica de conexão com o banco de dados PostgreSQL.
* **`package.json` e `package-lock.json`**: Gerenciadores de dependências e scripts do ecossistema Node.js.
* **`dockerfile`**: Instruções para empacotar a aplicação Node.js dentro de uma imagem Docker isolada.
* **`.dockerignore`**: Lista de arquivos (como a `node_modules`) que o Docker deve desconsiderar ao gerar a imagem.
* **`docker-compose.yml`**: Arquivo de orquestração local que levanta a API e o banco de dados PostgreSQL juntos de forma integrada com apenas um comando.
* **`postgres.yaml` e `cluster.yaml`**: Manifestos declarativos de infraestrutura (como Kubernetes ou ferramentas de nuvem) usados para configurar o ambiente do banco de dados e do cluster.

---

## 🛠️ Pré-requisitos
Para rodar este projeto com facilidade, você precisará de:
* **Docker** instalado.
* **Docker Compose** instalado.

---

## 🚀 Como Executar o Projeto com Docker Compose

A grande vantagem da sua estrutura é que você não precisa instalar o PostgreSQL manualmente na sua máquina. O Docker faz tudo!

1. Clone o repositório:
   ```bash
   git clone https://gitlab.com
   ```
2. Acesse o diretório do exercício:
   ```bash
   cd exercicio-js-postgres
   ```
3. Construa a imagem da aplicação e suba os contêineres (API + Banco de Dados) de forma integrada:
   ```bash
   docker-compose up --build
   ```
4. A API estará ativa e conectada ao Postgres! Para encerrar os serviços, utilize:
   ```bash
   docker-compose down
   ```

---
🧑‍💻 **Autor:** [Edina25-group](https://gitlab.com)  
📅 **Última Atualização:** Setembro de 2026

