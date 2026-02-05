# Plano Consolidado: Responsividade Mobile 100%

**Autores:** Aria (@architect) + Uma (@ux-design-expert)
**Data:** 2026-02-05
**Versão:** 2.0 (Consolidado Arquitetura + UX)
**Status:** APROVADO PARA IMPLEMENTAÇÃO

---

## Resumo Executivo

Plano consolidado unificando a auditoria arquitetural (23 problemas estruturais) com a auditoria UX (9 gaps adicionais de usabilidade, acessibilidade e performance). Total: **32 items** organizados em **7 stories**.

**Score atual mobile: 42/80 (52%)**
**Score projetado após implementação: 69/80 (86%)**

---

## Decisões Arquiteturais (ADRs)

| # | Decisão | Razão |
|---|---------|-------|
| ADR-1 | Manter desktop-first | Inverter para mobile-first em produção é alto risco sem benefício proporcional |
| ADR-2 | Dashboard StratOS: versão simplificada mobile (hidden/shown) | Scroll horizontal é UX inferior; redesign completo é overengineering |
| ADR-3 | Viewport mínimo: 320px | Mercado brasileiro ainda tem share em telas compactas |
| ADR-4 | Adicionar `sm:` (640px) seletivamente | Preencher gap entre mobile e `md:` sem reescrever tudo |
| ADR-5 | `prefers-reduced-motion` global em CSS | WCAG 2.3.3 compliance com esforço mínimo (5 linhas CSS) |
| ADR-6 | Espaçamento responsivo sistemático | Todas as classes `py-32`/`mb-32`/`p-12`/`p-24` ganham versão mobile |

---

## Stories de Implementação

### MR-1: Dashboard Excellence Mobile [P0 CRITICAL]
**Esforço:** M | **Arquivo:** `pages/ExcellencePage.tsx`

| # | Task | Fonte |
|---|------|-------|
| 1.1 | Envolver dashboard existente (linhas 46-195) em `<div className="hidden md:block">` | Aria |
| 1.2 | Criar bloco `<div className="md:hidden">` com 3 KPIs empilhados (cards verticais) | Aria + Uma wireframe |
| 1.3 | Mobile KPIs: `text-exc-text` nos labels (não `text-exc-muted` — falha contraste AA) | Uma UX-4 |
| 1.4 | Mobile: incluir lista "Active Agents" simplificada | Uma wireframe |
| 1.5 | Esconder chart complexo e sidebar em mobile | Aria |
| 1.6 | Adicionar `overflow-hidden` no container pai para gear SVG background | Aria E-5 |
| 1.7 | Gear SVG decorativo: `right-[-10%]` → `right-0` com `overflow-hidden` no pai | Aria E-5 |

**Critérios de aceite:**
- Dashboard legível em 320px
- Sem scroll horizontal
- KPIs com contraste AA (≥ 4.5:1)

---

### MR-2: Layout Global, Footer & Acessibilidade [P0 HIGH]
**Esforço:** S | **Arquivos:** `components/Footer.tsx`, `components/Navbar.tsx`, `App.tsx`, `index.html`

| # | Task | Fonte |
|---|------|-------|
| 2.1 | Footer: `py-20 px-10` → `py-12 px-4 md:py-20 md:px-10` | Aria F-1 + Uma UX-2 |
| 2.2 | Footer: `flex gap-16` → `flex flex-col sm:flex-row gap-6 sm:gap-16` | Aria F-2 |
| 2.3 | Footer: SVG logo → adicionar `max-w-[200px]` em mobile | Aria F-3 |
| 2.4 | Footer: Links → adicionar `py-2` para touch target ≥ 44px | Uma UX-1 |
| 2.5 | Navbar: lang button `w-10 h-8` → `w-10 h-10` (44px mínimo com gap) | Uma UX-1 |
| 2.6 | Navbar: mobile menu button `w-10 h-10` → `w-11 h-11` (44px) | Uma UX-1 |
| 2.7 | index.html: Adicionar `prefers-reduced-motion` CSS | Uma UX-3 |
| 2.8 | index.html: Adicionar `safe-area-inset` para notch | Aria G-2 |
| 2.9 | App.tsx: Watermark `w-10 h-10 md:w-14 md:h-14` → adicionar `hidden sm:block` ou reduzir | Aria G-1 |

**Critérios de aceite:**
- Footer sem overflow em 320px
- Links do footer com touch area ≥ 44px
- Animações respeitam prefers-reduced-motion
- Conteúdo não fica sob notch no iPhone

---

### MR-3: HomePage Mobile [P1 HIGH]
**Esforço:** S | **Arquivo:** `pages/HomePage.tsx`

| # | Task | Fonte |
|---|------|-------|
| 3.1 | Hero header `flex justify-between items-end` → `flex flex-col gap-4 md:flex-row md:justify-between md:items-end` | Aria H-1 |
| 3.2 | Methodology grid `grid-cols-2` → `grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6` | Aria H-3 |
| 3.3 | Excellence card `min-h-[360px]` → `min-h-[280px] md:min-h-[360px]` | Aria H-5 |
| 3.4 | CTA section `py-32` → `py-16 md:py-32` | Uma UX-2 |
| 3.5 | Bento grid `min-h-[400px]` → `min-h-[300px] md:min-h-[400px]` nos cards Studio | Uma UX-2 |

**Critérios de aceite:**
- Hero header empilha corretamente em mobile
- Grid de metodologia 1 coluna em <640px
- Sem espaçamento excessivo em mobile

---

### MR-4: StudioPage & AcademyPage Mobile [P1 HIGH]
**Esforço:** S | **Arquivos:** `pages/StudioPage.tsx`, `pages/AcademyPage.tsx`

| # | Task | Fonte |
|---|------|-------|
| 4.1 | Studio: stat `text-8xl` → `text-6xl md:text-8xl` (75% stat) | Aria S-2 + Uma UX-7 |
| 4.2 | Studio: process numbers `text-6xl` → `text-4xl md:text-6xl` | Aria S-3 |
| 4.3 | Studio: CTA `p-12 md:p-24` → `p-6 md:p-12 lg:p-24` | Uma UX-2 |
| 4.4 | Studio: sections `mb-32` → `mb-16 md:mb-32` | Uma UX-2 |
| 4.5 | Academy: hero title `text-6xl` → `text-5xl md:text-6xl lg:text-9xl` | Aria A-1 |
| 4.6 | Academy: buttons container → adicionar `flex-wrap` | Aria A-2 |
| 4.7 | Academy: module badge posição segura com `overflow-visible` no card pai | Aria A-3 |
| 4.8 | Academy: sections `mb-32` → `mb-16 md:mb-32` | Uma UX-2 |

**Critérios de aceite:**
- "75%" legível sem dominar a tela em 320px
- Botões Academy wrap sem overflow
- Espaçamento confortável em mobile

---

### MR-5: ExcellencePage Refinamentos [P2 MEDIUM]
**Esforço:** S | **Arquivo:** `pages/ExcellencePage.tsx`

| # | Task | Fonte |
|---|------|-------|
| 5.1 | Integration section: verificar/adicionar `flex-col md:flex-row` | Aria E-6 |
| 5.2 | Network nodes SVG container: `h-[300px]` → `h-[200px] md:h-[300px]` | Aria |
| 5.3 | Handwriting tags: ajustar posição responsiva | Aria |
| 5.4 | KPI grid: verificar `grid-cols-1 md:grid-cols-3` | Aria |
| 5.5 | Contraste: `text-exc-muted` em `bg-float` (labels KPI) → `text-exc-text` onde <`text-lg` | Uma UX-4 |
| 5.6 | Sections `mb-32` → `mb-16 md:mb-32` | Uma UX-2 |
| 5.7 | KPI section `p-12` → `p-6 md:p-12` | Uma UX-2 |

**Critérios de aceite:**
- Todos os textos em cards passam AA (≥ 4.5:1)
- Integration section empilha em mobile
- Espaçamento confortável

---

### MR-6: Acessibilidade & Touch Targets [P2 MEDIUM]
**Esforço:** S | **Arquivos:** `components/Navbar.tsx`, `pages/ContactPage.tsx`

| # | Task | Fonte |
|---|------|-------|
| 6.1 | Navbar: mobile overlay → adicionar `overflow-y-auto` | Aria N-3 |
| 6.2 | Contact: frequency buttons `px-2` → `px-3` para mais área de toque | Uma UX-1 |
| 6.3 | Todas as páginas: verificar font-size ≥ 12px em elementos de texto | Uma |

**Critérios de aceite:**
- Menu mobile scrollável quando necessário
- Todos os touch targets ≥ 44px

---

### MR-7: UX Polish & Enhancements [P3 LOW]
**Esforço:** M | **Arquivos:** Vários

| # | Task | Fonte |
|---|------|-------|
| 7.1 | Navbar: animação de transição no menu mobile (opacity + transform) | Aria N-4 |
| 7.2 | Adicionar breakpoint `sm:` onde necessário (grids, flex) | Aria |
| 7.3 | Considerar `@media (hover: none)` para hover effects em touch | Aria |
| 7.4 | Testar e ajustar em viewports: 320px, 375px, 414px, 768px | Aria + Uma |

**Critérios de aceite:**
- Menu mobile com transição suave
- Zero overflow horizontal em todas as viewports da test matrix

---

## Ordem de Execução

```
MR-1 (Dashboard CRITICAL)
  │
  ▼
MR-2 (Global/Footer/A11y)  ──→  MR-3 (HomePage)
                                    │
                                    ▼
                                 MR-4 (Studio/Academy)
                                    │
                                    ▼
                                 MR-5 (Excellence)  ──→  MR-6 (Touch/A11y)
                                                            │
                                                            ▼
                                                         MR-7 (Polish)
```

---

## Métricas de Sucesso

| Métrica | Valor Alvo |
|---------|-----------|
| Overflow horizontal | Zero em 320px-1920px |
| Touch targets | ≥ 44px em todos os interativos |
| WCAG AA contraste | ≥ 4.5:1 em todo texto normal |
| prefers-reduced-motion | Suportado |
| Safe area insets | Suportado |
| Dashboard Excellence mobile | Legível e funcional |
| Footer mobile | Sem overflow ou cortes |
| Build | Zero erros TypeScript |
| Score UX Mobile | ≥ 69/80 (86%) |

---

## Viewport Test Matrix

| Viewport | Device | Prioridade |
|----------|--------|------------|
| 320px | iPhone SE | HIGH |
| 375px | iPhone 12/13/14 | HIGH |
| 390px | iPhone 14 Pro | HIGH |
| 414px | iPhone 14 Plus | MEDIUM |
| 768px | iPad Mini | MEDIUM |
| 1024px | iPad Pro | LOW |

---

## Contagem Final

| Severidade | Aria Original | + Uma UX | Total |
|-----------|--------------|----------|-------|
| CRITICAL | 2 | 0 | **2** |
| HIGH | 6 | 3 | **9** |
| MEDIUM | 7 | 4 | **11** |
| LOW | 6 | 2 | **8** |
| INFO | 4 | 0 | **4** |
| **Total** | **25** | **9** | **34** |

### Distribuição por Story

| Story | Tasks | Prioridade | Esforço |
|-------|-------|-----------|---------|
| MR-1 | 7 | P0 CRITICAL | M |
| MR-2 | 9 | P0 HIGH | S |
| MR-3 | 5 | P1 HIGH | S |
| MR-4 | 8 | P1 HIGH | S |
| MR-5 | 7 | P2 MEDIUM | S |
| MR-6 | 3 | P2 MEDIUM | S |
| MR-7 | 4 | P3 LOW | M |
| **Total** | **43 tasks** | | |

---

## Referências

- `docs/architecture/MOBILE_RESPONSIVENESS_PLAN.md` — Plano original (Aria v1.0)
- `docs/ux/UX_MOBILE_AUDIT_AND_PLAN_REVIEW.md` — Auditoria UX (Uma)

---

## Sign-Off

| Agente | Role | Status |
|--------|------|--------|
| Aria (@architect) | Arquitetura & Estrutura | APROVADO |
| Uma (@ux-design-expert) | UX & Acessibilidade | APROVADO |

**Decisão:** APROVADO PARA IMPLEMENTAÇÃO
**Confiança:** 92% (Alta)
**Próximo passo:** Ativar @dev (Dex) para executar MR-1 → MR-7

---

— Aria, arquitetando o futuro
— Uma, desenhando com empatia
