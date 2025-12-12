# idxlandV0

Uma **Landing Page IDX** construída com **Next.js** e configurada para ser executada com **Firebase Studio**.

Este projeto serve como um *starter* moderno para uma landing page, com suporte a **React**, **TypeScript**, **Tailwind CSS** e integração com infraestrutura Firebase (hosting e APIs). ([GitHub][1])

---

## 🚀 Visão Geral

O `idxlandV0` é um template inicial para uma landing page com:

* 💻 **Next.js** + **TypeScript**
* 💅 **Tailwind CSS**
* 📦 Configuração pronta para **deploy no Firebase Hosting**
* 🧠 Estrutura modular de pastas para escalar com facilidade

---

## 📁 Estrutura do Projeto

```
.
├── public/              # Imagens e ativos públicos
├── src/
│   ├── app/             # Páginas da aplicação
│   └── components/      # Componentes React reutilizáveis
├── docs/                # Documentação do projeto
├── .idx/                # (Pasta específica do projeto)
├── next.config.ts       # Configurações Next.js
├── tailwind.config.ts   # Configurações Tailwind
├── tsconfig.json        # Configurações TypeScript
├── apphosting.yaml      # Configuração de hosting para Firebase
├── components.json      # Dependências ou componentes do Firebase Studio
├── package.json         # Dependências e scripts
└── README.md            # Esta documentação
```

---

## 🛠️ Tecnologias Utilizadas

* **Next.js** — Framework React otimizado para performance
* **React** — Biblioteca UI moderna
* **TypeScript** — Tipagem estática
* **Tailwind CSS** — Estilização utilitária
* **Firebase Hosting / Studio** — Deploy e backend sem servidor

---

## 🧩 Começando

### 🔹 Pré-requisitos

Antes de tudo, certifique-se de ter instalado:

```bash
node >= 16
npm ou yarn
firebase cli
```

---

### 📥 Instalação

Clone o repositório:

```bash
git clone https://github.com/fernandolutz/idxlandV0.git
cd idxlandV0
```

Instale as dependências:

```bash
npm install
# ou
yarn
```

---

### 🧪 Rodando em Desenvolvimento

Execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

Abra no navegador:

```
http://localhost:3000
```

---

## ⚙️ Scripts Úteis

| Comando | Descrição                          |
| ------- | ---------------------------------- |
| `dev`   | Inicia o modo desenvolvimento      |
| `build` | Compila para produção              |
| `start` | Roda versão de produção local      |
| `lint`  | Verifica estilo e erros com ESLint |

---

## 📦 Deploy com Firebase

1. **Login no Firebase:**

```bash
firebase login
```

2. **Inicializar (se ainda não inicializado):**

```bash
firebase init
```

3. **Deploy:**

```bash
firebase deploy
```

O site será publicado no domínio configurado no Firebase Hosting.

---

## 💡 Boas Práticas

✔ Uso de componentes reutilizáveis
✔ Estilização com Tailwind
✔ Organização clara de pastas
✔ Deploy contínuo com Firebase

---

## 👏 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

---

## 📝 Licença

Este projeto está sob a licença **MIT** — veja o arquivo `LICENSE` para mais detalhes.

---

Se quiser, posso também gerar badges (npm version, build status, deploy status), ou um modelo de **CONTRIBUTING.md** e **CHANGELOG.md**!

[1]: https://github.com/fernandolutz/idxlandV0 "GitHub - fernandolutz/idxlandV0: Landing Page IDX"
