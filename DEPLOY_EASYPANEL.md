# Guia de Deploy no EasyPanel - ExímIA Ventures

## 📋 Pré-requisitos

- Acesso à sua VPS com EasyPanel instalado
- Domínio configurado (ou use um subdomínio)
- Credenciais SSH da sua VPS

## 🚀 Passo 1: Build do Projeto (Já Realizado ✓)

O build foi concluído com sucesso. Os arquivos prontos para produção estão em:
```
site-exímia-puro/dist/
├── index.html
└── assets/
```

## 📦 Passo 2: Fazer Upload dos Arquivos

### Opção A: Pelo Painel EasyPanel (Mais Fácil)

1. Acesse seu painel EasyPanel
2. Vá para **Applications** → **Create New Application**
3. Selecione **Static Site** ou **Nginx** como tipo de aplicação
4. Preencha os detalhes:
   - **Name**: `exímia-ventures`
   - **Domain**: seu domínio (ex: `exímia.com`)
   - **Directory**: `/app` ou `/public`

5. Use **SFTP/FTP** ou **File Manager** para fazer upload:
   - Faça upload de todos os arquivos da pasta `dist/` para o diretório raiz da aplicação
   - Estrutura final deve ficar:
   ```
   /app/
   ├── index.html
   └── assets/
   ```

### Opção B: Via SFTP (SSH File Transfer)

1. Use um cliente SFTP (Filezilla, WinSCP, MobaXterm):
   - Host: `seu-vps-ip`
   - Usuario: seu usuario SSH
   - Senha/Chave SSH

2. Navegue até o diretório da aplicação (geralmente `/root/applications/exímia-ventures/` ou similar)

3. Faça upload dos arquivos:
   ```bash
   # Via linha de comando (se tiver acesso SSH)
   scp -r dist/* seu-user@seu-vps:/caminho/aplicacao/
   ```

### Opção C: Via Git (Melhor Prática)

1. Commit e push dos arquivos para seu repositório Git:
   ```bash
   git add .
   git commit -m "Production build ready for deployment"
   git push origin main
   ```

2. No EasyPanel, configure o Git deploy:
   - **Repository URL**: Sua URL do Git
   - **Branch**: `main`
   - **Build Command**: `npm run build`
   - **Public Directory**: `dist`

3. EasyPanel fará o deploy automaticamente após detectar o push

## 🔧 Passo 3: Configurar no EasyPanel

### Para Static Site:
1. Configure como **Static Site** ou **Static Files**
2. Defina o **Root Directory** como `dist/`
3. Configure **Index File** como `index.html`

### Para SPA (React):
1. Configure redirecionamento: todas as rotas desconhecidas devem ir para `index.html`
2. Se usar Nginx, adicione esta configuração:
   ```nginx
   location / {
       try_files $uri $uri/ /index.html;
   }
   ```

3. Defina **Caching** para assets:
   - `/assets/*` - Cache 1 ano
   - `/index.html` - Sem cache (sempre frescos)

## 🌍 Passo 4: Variáveis de Ambiente

1. No EasyPanel, vá para **Settings** → **Environment Variables**
2. Adicione (se necessário):
   ```
   VITE_GEMINI_API_KEY=sua-chave-aqui
   ```

**Importante**: Variáveis expostas como `VITE_*` serão acessíveis no cliente

## 🔐 Passo 5: SSL/HTTPS

1. EasyPanel geralmente configura SSL automaticamente com Let's Encrypt
2. Se não estiver habilitado:
   - Vá para **Settings** → **SSL**
   - Clique em **Enable SSL**
   - Selecione **Let's Encrypt**

## ✅ Passo 6: Verificação Final

Após o deploy, teste:

1. **Acesse o site** no seu domínio: `https://exímia.com`
2. **Verifique recursos estáticos**:
   - Abra DevTools (F12)
   - Vá para a aba **Network**
   - Recarregue a página
   - Confirme que CSS, JS e imagens carregam corretamente

3. **Teste a navegação** (SPA):
   - Clique em links de navegação
   - Confirme que não há erro 404
   - URL muda sem reload completo

4. **Verifique o Console**:
   - Não deve haver erros de JavaScript
   - Cheque avisos sobre CORS se usar APIs externas

## 🐛 Troubleshooting

### Site mostra 404 ao navegar
- **Solução**: Configure redirecionamento de SPA (try_files $uri $uri/ /index.html)

### Assets não carregam
- **Solução**: Verifique paths relativos no HTML
- Confirme que pasta `assets/` foi uploadada
- Limpe cache do navegador (Ctrl+Shift+Del)

### Espaços em branco na página
- **Solução**: Verifique console para erros JavaScript
- Confirme que arquivo `index.html` foi uploadado corretamente

### Timeout ou erro 502
- **Solução**: Aplica mais a sites dinâmicos, mas se ocorrer:
  - Reinicie a aplicação no EasyPanel
  - Verifique logs da aplicação

## 📝 Resumo dos Arquivos Prontos

✅ **Build concluído em**: `dist/`
- `index.html` - 7.63 KB (gzip: 2.59 KB)
- `assets/index-*.js` - 276.84 KB (gzip: 81.63 KB)
- `assets/favicon-*.svg` - 0.72 KB (gzip: 0.44 KB)

**Total gzip**: ~84.66 KB (muito bom!)

## 🚀 Próximos Passos

1. Faça o upload dos arquivos `dist/` para sua VPS
2. Configure o domínio no EasyPanel
3. Ative SSL/HTTPS
4. Teste acesso e funcionalidades
5. Pronto para usar!

---

**Dúvidas?** Verifique a documentação do EasyPanel ou entre em contato com suporte.
