## Funcionalidades Principais do Microserviço de Ordem de Serviço

### 1. Criação de Ordem de Serviço

- **Descrição:** Permite que os usuários criem novas ordens de serviço.
- **Endpoint da API:** `POST /orders`
  - Este endpoint permite que os usuários enviem os detalhes da ordem de serviço, como cliente, itens da ordem, data de serviço, etc.

### 2. Listagem de Ordens de Serviço

- **Descrição:** Permite visualizar todas as ordens de serviço existentes.
- **Endpoint da API:** `GET /orders`
  - Este endpoint retorna uma lista de todas as ordens de serviço no sistema.

### 3. Detalhes da Ordem de Serviço

- **Descrição:** Permite visualizar os detalhes de uma ordem de serviço específica.
- **Endpoint da API:** `GET /orders/{id}`
  - Este endpoint retorna os detalhes de uma ordem de serviço com o ID especificado.

### 4. Atualização de Ordem de Serviço

- **Descrição:** Permite que os usuários atualizem uma ordem de serviço existente.
- **Endpoint da API:** `PUT /orders/{id}`
  - Este endpoint permite que os usuários atualizem os detalhes de uma ordem de serviço existente com o ID especificado.

### 5. Cancelamento de Ordem de Serviço

- **Descrição:** Permite que os usuários cancelem uma ordem de serviço existente.
- **Endpoint da API:** `DELETE /orders/{id}`
  - Este endpoint permite que os usuários cancelem uma ordem de serviço existente com o ID especificado.

### 6. Pesquisa de Ordens de Serviço

- **Descrição:** Permite que os usuários pesquisem ordens de serviço com base em diferentes critérios.
- **Endpoint da API:** `GET /orders/search`
  - Este endpoint permite que os usuários pesquisem ordens de serviço com base nos parâmetros de pesquisa fornecidos.

### 7. Gerenciamento de Itens da Ordem de Serviço

- **Descrição:** Permite adicionar, remover ou atualizar itens em uma ordem de serviço.
- **Endpoints da API:**
  - `POST /orders/{order_id}/items`: Adiciona um novo item a uma ordem de serviço existente.
  - `PUT /orders/{order_id}/items/{item_id}`: Atualiza os detalhes de um item em uma ordem de serviço existente.
  - `DELETE /orders/{order_id}/items/{item_id}`: Remove um item de uma ordem de serviço existente.

---

