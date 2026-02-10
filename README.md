# 🎓 EduTech Academy - Site Institucional

Projeto desenvolvido como critério de avaliação para a disciplina de Desenvolvimento Web. O objetivo é criar um site institucional responsivo, com múltiplas páginas, consumo de API externa e sistema de alternância de temas (Dark/Light Mode).

---

## 🚀 Funcionalidades Principais

- **🌐 Layout Responsivo**: Adaptável para dispositivos móveis, tablets e desktops (Flexbox/Grid)
- **🌓 Dark/Light Mode**: Alternância de tema com persistência de escolha do usuário via `localStorage`
- **📋 Validação de Formulário**: Sistema robusto de validação em JavaScript puro, garantindo que todos os dados obrigatórios sejam preenchidos corretamente
- **📍 Integração ViaCEP**: Preenchimento automático de endereço (Rua, Bairro, Cidade e Estado) ao digitar um CEP válido
- **📂 Navegação Multi-página**: Estrutura completa com Home, Lista de Cursos e páginas detalhadas de cada curso

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica para SEO e acessibilidade
- **CSS3**: Variáveis CSS para temas, Google Fonts (Poppins e Inter)
- **JavaScript (Vanilla)**: Lógica de validação, manipulação do DOM e consumo de API
- **API ViaCEP**: Consulta de endereços via requisições `fetch`

---

## 📂 Estrutura de Arquivos
```
/
├── index.html              # Página Inicial e Formulário de Matrícula
├── cursos.html             # Listagem Geral de Cursos
├── curso-web.html          # Detalhes: Dev Web Fullstack
├── curso-datascience.html  # Detalhes: Data Science
├── curso-marketing.html    # Detalhes: Marketing Digital
├── curso-uxui.html         # Detalhes: UX/UI Design
├── css/
│   └── styles.css          # Estilos globais, temas e responsividade
├── js/
│   ├── theme.js            # Lógica do modo claro/escuro
│   ├── viacep.js           # Integração com a API ViaCEP
│   └── validation.js       # Validação do formulário de matrícula
└── assets/                 # Imagens e ícones
```

---

## 🎨 Identidade Visual (Cores)

| Elemento | Modo Claro 🌞 | Modo Escuro 🌙 |
|----------|---------------|----------------|
| Fundo (Body) | `#F9F9F9` | `#1E1E1E` |
| Texto Padrão | `#1E1E1E` | `#F9F9F9` |
| Principal (Links/Botões) | `#0077CC` | `#4DA6FF` |
| Cards/Caixas | `#FFFFFF` | `#2C2C2C` |
| Bordas | `#E0E0E0` | `#444444` |

---

## ✅ Regras de Validação do Formulário

O sistema exibe mensagens de erro específicas conforme exigido:

- **Nome**: "Por favor, preencha o nome completo."
- **E-mail**: "Informe um e-mail válido."
- **Telefone/CPF**: Validação de preenchimento obrigatório
- **CEP**: Gatilho para preenchimento automático de endereço

---

© 2025 EduTech Academy. Todos os direitos reservados.
