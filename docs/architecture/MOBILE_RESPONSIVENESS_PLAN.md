# Plano Arquitetural: Responsividade Mobile 100%

**Architect:** Aria (@architect)
**Data:** 2026-02-05
**Escopo:** Auditoria completa + Plano de implementação para responsividade mobile
**Status:** 📋 PLANEJAMENTO

---

## Resumo Executivo

O site ExímIA Ventures já possui **responsividade parcial** via classes Tailwind (`md:` breakpoints). Porém, uma auditoria completa revela **23 problemas** distribuídos entre as 5 páginas, 2 componentes (Navbar, Footer) e estilos globais. Este plano organiza as correções em **6 stories** com prioridade e esforço estimado.

---

## Auditoria: Estado Atual

### Breakpoints em Uso
| Breakpoint | Largura | Uso Atual |
|-----------|---------|-----------|
| (default) | < 768px | Mobile - **parcialmente implementado** |
| `md:` | ≥ 768px | Desktop - **totalmente implementado** |
| `lg:` | ≥ 1024px | Usado apenas 1x (HomePage grid-cols-6) |
| `sm:` | ≥ 640px | **Não utilizado** |

**Problema central:** O site pula de mobile direto para `md:` (768px), ignorando tablets e telas pequenas (320-640px).

---

## Problemas Identificados por Componente

### 1. Layout Global (`App.tsx`, `index.html`)

| # | Problema | Severidade | Linha |
|---|---------|-----------|-------|
| G-1 | Watermark SVG fixo (`top-6 right-6`) pode sobrepor conteúdo em telas muito pequenas | LOW | App.tsx:36 |
| G-2 | Sem `safe-area-inset` para dispositivos com notch (iPhone X+) | MEDIUM | index.html |
| G-3 | Scrollbar customizada `::-webkit-scrollbar` não afeta mobile (nativo) | INFO | index.html:131 |

### 2. Navbar (`components/Navbar.tsx`)

| # | Problema | Severidade | Linha |
|---|---------|-----------|-------|
| N-1 | `max-w-[95vw]` pode cortar a pill em telas < 360px | LOW | :30 |
| N-2 | Language dropdown `min-w-[80px]` pode sobrepor borda em mobile | LOW | :76 |
| N-3 | Mobile overlay não tem scroll se conteúdo exceder viewport | MEDIUM | :114 |
| N-4 | Menu mobile sem animação de saída (aparece/desaparece bruto) | LOW | :113 |

### 3. Footer (`components/Footer.tsx`)

| # | Problema | Severidade | Linha |
|---|---------|-----------|-------|
| F-1 | `px-10` fixo sem responsividade — muito padding em mobile | HIGH | :14 |
| F-2 | `flex gap-16` nos links não responsivo — overflow horizontal em mobile | HIGH | :39 |
| F-3 | SVG horizontal do logo pode ser cortado em telas estreitas | MEDIUM | :21 |

### 4. HomePage (`pages/HomePage.tsx`)

| # | Problema | Severidade | Linha |
|---|---------|-----------|-------|
| H-1 | Hero `flex justify-between items-end` — header info colapsa em mobile | HIGH | :23 |
| H-2 | Tagline handwritten `hidden md:block` — invisível em mobile (intencional?) | INFO | :29 |
| H-3 | Grid methodology `grid-cols-2` em mobile — pode ficar apertado em telas < 375px | MEDIUM | :330 |
| H-4 | CTA handwriting `hidden md:block` — anotação invisível em mobile | INFO | :353 |
| H-5 | Excellence bento card `md:col-span-3` — no mobile é uma só coluna mas `min-h-[360px]` é excessivo | LOW | :239 |

### 5. StudioPage (`pages/StudioPage.tsx`)

| # | Problema | Severidade | Linha |
|---|---------|-----------|-------|
| S-1 | Header `flex-row items-end` sem wrap — texto e subtítulo sobrepõem em tablet | HIGH | :18 |
| S-2 | Stat card `text-8xl` (75%) pode transbordar em mobile | MEDIUM | :67 |
| S-3 | Process timeline `md:grid-cols-4` — em mobile fica 1 coluna (OK), mas números `text-6xl` muito grandes | LOW | :98-101 |
| S-4 | Tech stack `grid-cols-2` em mobile — OK mas padding/gap pode melhorar | LOW | :114 |

### 6. AcademyPage (`pages/AcademyPage.tsx`)

| # | Problema | Severidade | Linha |
|---|---------|-----------|-------|
| A-1 | Hero title `text-6xl` em mobile — pode ser grande demais para 320px | MEDIUM | :27 |
| A-2 | Buttons flex sem wrap — podem ultrapassar a tela se textos forem longos | HIGH | :40 |
| A-3 | Module cards `bento-card p-0` com badge absoluto `-top-3 -right-3` — pode ser cortado | MEDIUM | :142-143 |

### 7. ExcellencePage (`pages/ExcellencePage.tsx`)

| # | Problema | Severidade | Linha |
|---|---------|-----------|-------|
| E-1 | Dashboard StratOS `w-[95%] aspect-[16/9]` com grid interno — **completamente ilegível em mobile** | CRITICAL | :51-193 |
| E-2 | Dashboard sidebar `grid-cols-[60px_1fr]` — sidebar não esconde em mobile | CRITICAL | :68 |
| E-3 | Dashboard KPIs `md:grid-cols-3` — em mobile ficam empilhados mas texto muito pequeno | HIGH | :83 |
| E-4 | Chart `col-span-2` / sidebar list — layout de 3 colunas colapsa mal em mobile | HIGH | :126 |
| E-5 | Background gear SVG `width="600"` absoluto com `right-[-10%]` — causa overflow horizontal | MEDIUM | :17-23 |
| E-6 | Integration section `flex-row` sem wrap em mobile | MEDIUM | :210 |

### 8. ContactPage (`pages/ContactPage.tsx`)

| # | Problema | Severidade | Linha |
|---|---------|-----------|-------|
| C-1 | Frequency grid `grid-cols-2` em mobile — OK mas botões podem ficar apertados com textos longos em outros idiomas | LOW | :230 |
| C-2 | Submit row `flex-row` em mobile com `w-full md:w-auto` — botão OK, mas handwriting note é hidden | INFO | :295 |

---

## Classificação de Severidade

| Severidade | Qtd | Significado |
|-----------|-----|-------------|
| CRITICAL | 2 | Layout totalmente quebrado em mobile |
| HIGH | 6 | Problemas visíveis que afetam usabilidade |
| MEDIUM | 7 | Problemas estéticos ou de conforto |
| LOW | 6 | Melhorias sutis |
| INFO | 4 | Decisões de design (não são bugs) |

---

## Plano de Implementação: 6 Stories

### STORY MR-1: Fix Critical — Dashboard Excellence Mobile
**Prioridade:** P0 (CRITICAL)
**Esforço:** M (médio)
**Arquivo:** `pages/ExcellencePage.tsx`

**Escopo:**
- [ ] Esconder dashboard StratOS completo em mobile (`hidden md:block`)
- [ ] Criar versão simplificada mobile do dashboard (KPIs em cards empilhados)
- [ ] OU: tornar dashboard scrollável horizontalmente em mobile com snap
- [ ] Corrigir sidebar para esconder em mobile
- [ ] Corrigir chart layout para 1 coluna em mobile
- [ ] Adicionar `overflow-hidden` no container da gear SVG para evitar scroll horizontal

**Abordagem Recomendada:** Criar um componente `DashboardMobile` simplificado que mostra apenas os 3 KPIs + lista de agents em formato de cards empilhados, e usar `hidden md:block` / `md:hidden` para alternar entre versões.

---

### STORY MR-2: Fix Footer & Layout Global
**Prioridade:** P1 (HIGH)
**Esforço:** S (pequeno)
**Arquivos:** `components/Footer.tsx`, `App.tsx`, `index.html`

**Escopo:**
- [ ] Footer: Trocar `px-10` por `px-4 md:px-10`
- [ ] Footer: Trocar `flex gap-16` por `flex flex-col sm:flex-row gap-8 sm:gap-16`
- [ ] Footer: Limitar largura do SVG logo em mobile
- [ ] index.html: Adicionar `env(safe-area-inset-*)` no CSS para suporte a notch
- [ ] App.tsx: Reduzir watermark em mobile ou esconder (`hidden md:block`)

---

### STORY MR-3: Fix HomePage Mobile
**Prioridade:** P1 (HIGH)
**Esforço:** S (pequeno)
**Arquivo:** `pages/HomePage.tsx`

**Escopo:**
- [ ] Hero header: Trocar `flex justify-between items-end` por layout empilhado em mobile
- [ ] Methodology grid: Trocar `grid-cols-2` por `grid-cols-1 sm:grid-cols-2` para telas < 640px
- [ ] Excellence card: Reduzir `min-h-[360px]` em mobile para `min-h-[280px]`
- [ ] Garantir que vw-based font sizes não ultrapassem limites em telas 320px

---

### STORY MR-4: Fix StudioPage & AcademyPage Mobile
**Prioridade:** P1 (HIGH)
**Esforço:** S (pequeno)
**Arquivos:** `pages/StudioPage.tsx`, `pages/AcademyPage.tsx`

**Escopo:**
- [ ] Studio header: Garantir `flex-col` em mobile (já é `flex-col md:flex-row`)
- [ ] Studio stat: Reduzir `text-8xl` para `text-6xl` em mobile
- [ ] Studio process: Reduzir números de `text-6xl` para `text-4xl` em mobile
- [ ] Academy hero: Reduzir `text-6xl` para `text-5xl` em mobile (320px safe)
- [ ] Academy buttons: Adicionar `flex-wrap` no container dos botões
- [ ] Academy module badge: Garantir `overflow-visible` e posição segura

---

### STORY MR-5: Fix ExcellencePage Non-Critical
**Prioridade:** P2 (MEDIUM)
**Esforço:** S (pequeno)
**Arquivo:** `pages/ExcellencePage.tsx`

**Escopo:**
- [ ] Integration section: Adicionar `flex-col md:flex-row` (verificar se já tem)
- [ ] Network nodes SVG: Reduzir altura em mobile
- [ ] Handwriting tags: Ajustar posicionamento para não cortar em mobile
- [ ] KPI grid: Garantir `grid-cols-1 md:grid-cols-3` (verificar)

---

### STORY MR-6: Mobile UX Enhancements
**Prioridade:** P3 (LOW)
**Esforço:** M (médio)
**Arquivos:** Vários

**Escopo:**
- [ ] Navbar: Adicionar animação de entrada/saída no menu mobile (transition)
- [ ] Navbar: Adicionar scroll ao overlay mobile para conteúdo longo
- [ ] Adicionar breakpoint `sm:` (640px) onde necessário para tablets
- [ ] Touch targets: Garantir mínimo 44x44px em todos os botões/links interativos
- [ ] Testar e ajustar em viewports: 320px, 375px, 414px, 768px
- [ ] Considerar `@media (hover: none)` para remover hover effects em touch devices

---

## Ordem de Execução

```
MR-1 (Critical Dashboard) ──→ MR-2 (Footer/Global) ──→ MR-3 (HomePage)
                                                           │
                                                           ▼
                              MR-4 (Studio/Academy) ──→ MR-5 (Excellence) ──→ MR-6 (UX Polish)
```

**MR-1 primeiro** porque o dashboard da ExcellencePage está completamente ilegível em mobile.
**MR-6 por último** porque são melhorias de polimento, não correções de bugs.

---

## Decisões Arquiteturais

### 1. Abordagem Mobile-First vs Desktop-First
**Decisão:** Manter Desktop-First (já é o padrão atual com `md:` breakpoints).
**Razão:** Reescrever para mobile-first exigiria inverter todas as classes Tailwind existentes — risco alto e pouco benefício dado que o site já está em produção.

### 2. Dashboard StratOS em Mobile
**Opção A (Recomendada):** Versão simplificada mobile
- Mostra KPIs como cards
- Esconde chart e sidebar complexos
- Usa `md:hidden` / `hidden md:block`

**Opção B:** Scroll horizontal
- Mantém dashboard completo
- Container com `overflow-x-auto` e `min-width`
- Experiência inferior (pinch-zoom, scroll lateral)

**Opção C:** Redesign responsivo completo
- Reestruturar layout para colapsar progressivamente
- Maior esforço, melhor resultado
- Não recomendado nesta fase

### 3. Breakpoints Adicionais
**Decisão:** Adicionar `sm:` (640px) seletivamente.
**Razão:** Preencher o gap entre mobile (< 640px) e `md:` (768px) para grids de 2 colunas.

### 4. Viewport Mínimo Suportado
**Decisão:** 320px (iPhone SE / dispositivos Android compactos).
**Razão:** Ainda há share de mercado relevante em telas pequenas no Brasil.

---

## Viewport Test Matrix

| Viewport | Dispositivo Ref | Prioridade |
|----------|----------------|------------|
| 320px | iPhone SE | HIGH |
| 375px | iPhone 12/13/14 | HIGH |
| 390px | iPhone 14 Pro | HIGH |
| 414px | iPhone 14 Plus | MEDIUM |
| 768px | iPad Mini | MEDIUM |
| 1024px | iPad Pro | LOW |

---

## Métricas de Sucesso

1. **Zero overflow horizontal** em todas as viewports (320px - 1920px)
2. **Todos os textos legíveis** sem zoom em viewport 320px
3. **Touch targets ≥ 44px** em todos os elementos interativos
4. **Dashboard Excellence** legível e funcional em mobile
5. **Footer** não corta conteúdo em nenhuma viewport
6. **Build sem erros** após todas as mudanças

---

## Estimativa Total

| Story | Esforço | Estimativa |
|-------|---------|------------|
| MR-1 | M | ~45 min |
| MR-2 | S | ~15 min |
| MR-3 | S | ~15 min |
| MR-4 | S | ~20 min |
| MR-5 | S | ~15 min |
| MR-6 | M | ~30 min |
| **Total** | | **~2h 20min** |

---

## Sign-Off

**Architect:** Aria (@architect)
**Data:** 2026-02-05
**Confiança:** 90% (Alta)

---

*Planejamento arquitetural completo.* 🏗️

— Aria, arquiteta de sistemas
