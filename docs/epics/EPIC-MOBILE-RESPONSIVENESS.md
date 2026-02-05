# Epic: Mobile Responsiveness 100%

**Epic ID:** EPIC-MR-001
**Status:** Ready for Implementation
**Created:** 2026-02-05
**Last Updated:** 2026-02-05
**Source Plan:** `docs/architecture/MOBILE_RESPONSIVENESS_FINAL_PLAN.md`

---

## Executive Summary

Este epic consolida a implementacao completa de responsividade mobile para o site EximIA Ventures. Baseado em auditorias independentes de arquitetura (@architect Aria) e UX (@ux-design-expert Uma), com validacao QA (@qa Quinn), o plano aborda **34 problemas** organizados em **7 stories** com **43 tasks**.

**Score UX Mobile Atual:** 42/80 (52%)
**Score Projetado Apos Implementacao:** 69/80 (86%)

**Total Estimated Effort:** ~3 horas

---

## Business Objectives

### Primary Goals
1. **Acessibilidade Mobile** — Tornar todas as paginas funcionais e legíveis em viewports 320px-768px
2. **WCAG 2.1 AA Compliance** — Corrigir falhas de contraste e adicionar prefers-reduced-motion
3. **Touch Usability** — Garantir touch targets minimos de 44px em todos os elementos interativos
4. **Dashboard Excellence** — Criar versao mobile legivel do dashboard StratOS (atualmente ilegível)

### Business Impact
- **User Experience:** Site acessivel para ~60% dos visitantes que usam mobile no Brasil
- **SEO:** Google Mobile-First indexing penaliza sites nao responsivos
- **Conversao:** Footer e CTA buttons funcionais em mobile aumentam taxa de contato
- **Acessibilidade:** Conformidade WCAG 2.1 AA reduz risco legal e amplia audiencia
- **Brand Perception:** Site profissional em qualquer dispositivo

---

## Decisoes Arquiteturais (ADRs)

| # | Decisao | Razao |
|---|---------|-------|
| ADR-1 | Manter desktop-first | Inverter para mobile-first em producao e alto risco sem beneficio proporcional |
| ADR-2 | Dashboard StratOS: versao simplificada mobile | Scroll horizontal e UX inferior; redesign completo e overengineering |
| ADR-3 | Viewport minimo: 320px | Mercado brasileiro ainda tem share em telas compactas (iPhone SE) |
| ADR-4 | Adicionar `sm:` (640px) seletivamente | Preencher gap entre mobile e `md:` (768px) para grids |
| ADR-5 | `prefers-reduced-motion` global em CSS | WCAG 2.3.3 compliance com esforco minimo (5 linhas CSS) |
| ADR-6 | Espacamento responsivo sistematico | Todas as classes py-32/mb-32/p-12/p-24 ganham versao mobile |

---

## Epic Structure

### Phase 1: Critical Fixes (P0)
**Duration:** 1 sessao | **Effort:** ~1h | **Risk:** Low-Medium

Corrigir os 2 problemas CRITICAL que tornam o site inutilizavel em mobile.

---

#### Story MR-1: Dashboard Excellence Mobile
**Prioridade:** P0 CRITICAL | **Esforco:** M | **Arquivo:** `pages/ExcellencePage.tsx`
**Predicted Agents:** @dev, @ux-design-expert (wireframe referencia)
**Quality Gates:**
- Pre-Commit: Build pass, zero horizontal overflow em 320px
- Pre-PR: Contraste AA verificado nos labels mobile

**Tasks:**

| # | Task | Detalhes |
|---|------|---------|
| 1.1 | Envolver dashboard existente (linhas 46-195) em `hidden md:block` | Esconde dashboard complexo em mobile |
| 1.2 | Criar bloco `md:hidden` com 3 KPIs empilhados verticalmente | Cards: OEE, Hoshin Goals, Value Leakage |
| 1.3 | Mobile KPIs: usar `text-exc-text` nos labels (nao `text-exc-muted`) | Correcao contraste AA: 4.38:1 → 13.71:1 |
| 1.4 | Incluir lista "Active Agents" simplificada no bloco mobile | 3 agents com status e uptime |
| 1.5 | Esconder chart complexo e sidebar em mobile | Contidos no bloco `hidden md:block` |
| 1.6 | Adicionar `overflow-hidden` no container pai do gear SVG | Previne scroll horizontal |
| 1.7 | Gear SVG: `right-[-10%]` → `right-0` com overflow-hidden | Elimina overflow |

**Acceptance Criteria:**
- [ ] Dashboard legivel em viewport 320px
- [ ] Zero scroll horizontal em qualquer viewport
- [ ] Labels KPI com contraste >= 4.5:1 (AA)
- [ ] Build passa sem erros

**QA Notes (Quinn):**
- Extrair dados KPI para const/array para evitar duplicacao de JSX entre desktop/mobile
- 7 labels + 1 texto uptime precisam de `text-exc-text` no bloco mobile

---

#### Story MR-2: Layout Global, Footer & Acessibilidade
**Prioridade:** P0 HIGH | **Esforco:** S | **Arquivos:** `Footer.tsx`, `Navbar.tsx`, `App.tsx`, `index.html`
**Predicted Agents:** @dev
**Quality Gates:**
- Pre-Commit: Build pass, footer sem overflow 320px
- Pre-PR: Touch targets medidos >= 44px

**Tasks:**

| # | Task | Detalhes |
|---|------|---------|
| 2.1 | Footer: `py-20 px-10` → `py-12 px-4 md:py-20 md:px-10` | Espacamento responsivo |
| 2.2 | Footer: `flex gap-16` → `flex flex-col sm:flex-row gap-6 sm:gap-16` | Links empilham em mobile |
| 2.3 | Footer: SVG logo → `max-w-[200px]` em mobile | Previne corte do logo |
| 2.4 | Footer: Links → adicionar `py-2` | Touch target >= 44px |
| 2.5 | Navbar: lang button `w-10 h-8` → `w-10 h-10` | Touch target 40x40 → 40x40 (minimo com gap) |
| 2.6 | Navbar: mobile menu `w-10 h-10` → `w-11 h-11` | Touch target 44x44px |
| 2.7 | index.html: Adicionar `prefers-reduced-motion` CSS | WCAG 2.3.3 compliance |
| 2.8 | index.html: Adicionar `safe-area-inset` CSS | Suporte notch iPhone |
| 2.9 | App.tsx: Watermark → `hidden sm:block` ou reduzir tamanho | Evita sobreposicao em mobile |

**Acceptance Criteria:**
- [ ] Footer sem overflow em 320px
- [ ] Links do footer com touch area >= 44px
- [ ] Animacoes respeitam prefers-reduced-motion
- [ ] Conteudo nao fica sob notch no iPhone
- [ ] Build passa sem erros

---

### Phase 2: Page Fixes (P1)
**Duration:** 1 sessao | **Effort:** ~1h | **Risk:** Low

Corrigir problemas HIGH nas paginas individuais.

---

#### Story MR-3: HomePage Mobile
**Prioridade:** P1 HIGH | **Esforco:** S | **Arquivo:** `pages/HomePage.tsx`
**Predicted Agents:** @dev
**Quality Gates:**
- Pre-Commit: Build pass, hero empilha em 320px

**Tasks:**

| # | Task | Detalhes |
|---|------|---------|
| 3.1 | Hero header: → `flex flex-col gap-4 md:flex-row md:justify-between md:items-end` | Empilha em mobile |
| 3.2 | Methodology grid: → `grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6` | 1 col <640px |
| 3.3 | Excellence card: → `min-h-[280px] md:min-h-[360px]` | Reduz altura mobile |
| 3.4 | CTA section: `py-32` → `py-16 md:py-32` | Menos scroll em mobile |
| 3.5 | Bento Studio card: → `min-h-[300px] md:min-h-[400px]` | Reduz altura mobile |

**Acceptance Criteria:**
- [ ] Hero header empilha corretamente em mobile
- [ ] Grid metodologia 1 coluna em <640px
- [ ] Sem espacamento excessivo (max 64px vertical gap)
- [ ] Build passa sem erros

---

#### Story MR-4: StudioPage & AcademyPage Mobile
**Prioridade:** P1 HIGH | **Esforco:** S | **Arquivos:** `StudioPage.tsx`, `AcademyPage.tsx`
**Predicted Agents:** @dev
**Quality Gates:**
- Pre-Commit: Build pass, sem overflow 320px

**Tasks:**

| # | Task | Detalhes |
|---|------|---------|
| 4.1 | Studio stat "75%": `text-8xl` → `text-6xl md:text-8xl` | Proporcional em mobile |
| 4.2 | Studio process numbers: `text-6xl` → `text-4xl md:text-6xl` | Proporcional em mobile |
| 4.3 | Studio CTA: `p-12 md:p-24` → `p-6 md:p-12 lg:p-24` | Espacamento responsivo |
| 4.4 | Studio sections: `mb-32` → `mb-16 md:mb-32` (4 ocorrencias) | Menos scroll mobile |
| 4.5 | Academy hero: `text-6xl` → `text-5xl md:text-6xl lg:text-9xl` | Safe para 320px |
| 4.6 | Academy buttons: adicionar `flex-wrap` | Previne overflow |
| 4.7 | Academy module badge: `overflow-visible` no card pai | Badge nao cortado |
| 4.8 | Academy sections: `mb-32` → `mb-16 md:mb-32` (2 ocorrencias) | Menos scroll mobile |

**Acceptance Criteria:**
- [ ] "75%" legível sem dominar a tela em 320px
- [ ] Botoes Academy wrap corretamente sem overflow
- [ ] Espacamento confortavel em mobile (sem scroll-x, sem corte de texto)
- [ ] Build passa sem erros

---

### Phase 3: Refinements (P2-P3)
**Duration:** 1 sessao | **Effort:** ~1h | **Risk:** Minimal

Polimento e conformidade de acessibilidade.

---

#### Story MR-5: ExcellencePage Refinamentos
**Prioridade:** P2 MEDIUM | **Esforco:** S | **Arquivo:** `pages/ExcellencePage.tsx`
**Predicted Agents:** @dev
**Quality Gates:**
- Pre-Commit: Build pass, contraste AA validado

**Tasks:**

| # | Task | Detalhes |
|---|------|---------|
| 5.1 | Integration section: verificar `flex-col md:flex-row` | **JA EXISTE** (linha 210) — apenas verificar |
| 5.2 | Network SVG: `h-[300px]` → `h-[200px] md:h-[300px]` | Reduz altura mobile |
| 5.3 | Handwriting tags: ajustar posicao responsiva | Evitar corte em mobile |
| 5.4 | KPI grid: verificar `grid-cols-1 md:grid-cols-3` | **JA EXISTE** (linha 265) — apenas verificar |
| 5.5 | Contraste: `text-exc-muted` → `text-exc-text` em labels < text-lg | Fix AA: 4.38:1 → 13.71:1 |
| 5.6 | Sections: `mb-32` → `mb-16 md:mb-32` (2 ocorrencias) | Menos scroll mobile |
| 5.7 | KPI section: `p-12` → `p-6 md:p-12` | Espacamento responsivo |

**QA Notes:** Tasks 5.1 e 5.4 ja estao corretas no codigo. Marcar como "verificado, sem alteracao".

**Acceptance Criteria:**
- [ ] Todos os textos em cards passam AA (>= 4.5:1)
- [ ] Integration section empilha em mobile
- [ ] Build passa sem erros

---

#### Story MR-6: Acessibilidade & Touch Targets
**Prioridade:** P2 MEDIUM | **Esforco:** S | **Arquivos:** `Navbar.tsx`, `ContactPage.tsx`
**Predicted Agents:** @dev
**Quality Gates:**
- Pre-Commit: Build pass, touch targets medidos

**Tasks:**

| # | Task | Detalhes |
|---|------|---------|
| 6.1 | Navbar: mobile overlay → `overflow-y-auto` | Menu scrollavel se necessario |
| 6.2 | Contact: frequency buttons `px-2` → `px-3` | Mais area de toque |
| 6.3 | Todas as paginas: verificar font-size >= 12px | Legibilidade minima |

**Acceptance Criteria:**
- [ ] Menu mobile scrollavel quando conteudo excede viewport
- [ ] Todos os touch targets >= 44px
- [ ] Build passa sem erros

---

#### Story MR-7: UX Polish & Enhancements
**Prioridade:** P3 LOW | **Esforco:** M | **Arquivos:** Varios
**Predicted Agents:** @dev
**Quality Gates:**
- Pre-Commit: Build pass, zero overflow-x em toda a test matrix

**Tasks:**

| # | Task | Detalhes |
|---|------|---------|
| 7.1 | Navbar: animacao de transicao no menu mobile | opacity + transform transition |
| 7.2 | Adicionar breakpoint `sm:` onde necessario | Grids e flex seletivos |
| 7.3 | Considerar `@media (hover: none)` | Remove hover em touch devices |
| 7.4 | Testar em viewports: 320, 375, 414, 768px | Validacao final completa |

**Acceptance Criteria:**
- [ ] Menu mobile com transicao suave
- [ ] Zero overflow horizontal em todos os viewports da test matrix
- [ ] Build passa sem erros

---

## Execution Order

```
Phase 1 (P0):   MR-1 → MR-2
Phase 2 (P1):   MR-3 → MR-4
Phase 3 (P2-3): MR-5 → MR-6 → MR-7
```

---

## Compatibility Requirements

- [x] Nenhuma API backend afetada (site estatico)
- [x] Nenhuma mudanca de schema de dados
- [x] UI desktop permanece identica (apenas adiciona breakpoints mobile)
- [x] Performance: mudancas sao apenas classes CSS, zero impacto em bundle
- [x] Build TypeScript continua passando com strict mode

---

## Risk Mitigation

| Risco | Probabilidade | Impacto | Mitigacao |
|-------|-------------|---------|-----------|
| Dashboard mobile duplica JSX | MEDIUM | MEDIUM | Extrair KPI data para const reutilizavel |
| `sm:` breakpoint cria inconsistencias | LOW | LOW | Usar seletivamente, documentar |
| Safe-area dificil de testar sem device | MEDIUM | LOW | Safari Responsive Design Mode |
| Build falha com classes Tailwind CDN | LOW | HIGH | Testar build apos cada story |

**Rollback Plan:** Cada story e um commit atomico. `git revert <commit-hash>` reverte qualquer story individualmente sem afetar as demais.

---

## Quality Assurance Strategy

**Pre-validated by:**
- Aria (@architect): Auditoria estrutural — 23 problemas mapeados
- Uma (@ux-design-expert): Auditoria UX — 9 gaps adicionais + contraste WCAG
- Quinn (@qa): Validacao do plano — 87/100, 20/20 referencias corretas

**QA Recommendations:**
1. Build incremental: `npm run build` apos cada story
2. Testar cada story em 320px e 375px no DevTools
3. MR-1: Extrair dados KPI para const (evitar duplicacao)
4. MR-5: Tasks 5.1 e 5.4 sao "verificar apenas" — codigo ja correto
5. Espacamento: 9 ocorrencias de `mb-32` em 4 arquivos
6. Um commit por story para facilitar rollback

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

## Success Metrics

| Metrica | Valor Alvo | Como Medir |
|---------|-----------|------------|
| Overflow horizontal | Zero | DevTools em todos os viewports |
| Touch targets | >= 44px | DevTools element inspector |
| WCAG AA contraste | >= 4.5:1 | Ferramenta de contraste |
| prefers-reduced-motion | Suportado | Toggle em OS settings |
| Safe area insets | Suportado | Safari iPhone simulator |
| Dashboard mobile | Legivel e funcional | Visual check 320px |
| Footer mobile | Sem overflow | Visual check 320px |
| Build | Zero erros | `npm run build` |
| Score UX Mobile | >= 69/80 (86%) | Re-auditoria apos implementacao |

---

## Definition of Done

- [ ] Todas as 7 stories implementadas com acceptance criteria met
- [ ] Build passa sem erros (`npm run build`)
- [ ] Zero scroll horizontal em viewports 320px-1920px
- [ ] Todos os touch targets >= 44px
- [ ] Footer funcional em todas as viewports
- [ ] Dashboard Excellence legivel em mobile
- [ ] `prefers-reduced-motion` implementado
- [ ] Safe-area insets implementados
- [ ] Commits atomicos por story (facilitam rollback)
- [ ] QA review final aprovado

---

## Story Manager Handoff

"Please develop detailed user stories for this mobile responsiveness epic. Key considerations:

- This is an enhancement to an existing React + TypeScript SPA with Tailwind CSS via CDN
- Integration points: All 5 page components + 2 shared components (Navbar, Footer) + index.html
- Existing patterns to follow: `md:` breakpoint system, responsive Tailwind utilities
- Critical compatibility requirements: Desktop layout must remain 100% identical
- Each story must include verification that existing desktop layout remains intact
- Reference the consolidated plan: `docs/architecture/MOBILE_RESPONSIVENESS_FINAL_PLAN.md`
- Reference QA validation: `docs/qa/QA_PLAN_REVIEW_MOBILE_RESPONSIVENESS.md`

The epic should maintain system integrity while delivering full mobile responsiveness (86% UX score target)."

---

## References

| Document | Path |
|----------|------|
| Plano Arquitetural v1.0 | `docs/architecture/MOBILE_RESPONSIVENESS_PLAN.md` |
| Auditoria UX | `docs/ux/UX_MOBILE_AUDIT_AND_PLAN_REVIEW.md` |
| Plano Consolidado Final | `docs/architecture/MOBILE_RESPONSIVENESS_FINAL_PLAN.md` |
| QA Review do Plano | `docs/qa/QA_PLAN_REVIEW_MOBILE_RESPONSIVENESS.md` |
| Epic anterior (referencia formato) | `docs/epics/EPIC-TECHNICAL-DEBT-REMEDIATION.md` |

---

## Sign-Off

| Agente | Role | Status | Score |
|--------|------|--------|-------|
| Aria (@architect) | Arquitetura | APROVADO | 92% |
| Uma (@ux-design-expert) | UX/A11y | APROVADO | 92% |
| Quinn (@qa) | Qualidade | PASS | 87% |
| Morgan (@pm) | Product | APROVADO | - |

**Epic Status:** READY FOR IMPLEMENTATION
**Next Step:** Ativar @dev (Dex) para executar MR-1 → MR-7

---

— Morgan, planejando o futuro
