# Auditoria UX Mobile + Validação do Plano de Responsividade

**UX Designer:** Uma (@ux-design-expert)
**Data:** 2026-02-05
**Escopo:** Auditoria completa de usabilidade mobile + Revisão do plano da Aria
**Metodologia:** Heurísticas de Nielsen + WCAG 2.1 AA + Material Design touch guidelines

---

## PARTE 1: Auditoria UX Mobile

### 1.1 Touch Targets (Mínimo recomendado: 44x44px)

| Elemento | Tamanho Atual | Status | Arquivo:Linha |
|----------|--------------|--------|---------------|
| Navbar logo | `w-10 h-10` (40x40px) | ⚠️ ABAIXO | Navbar.tsx:36 |
| Navbar lang button | `w-10 h-8` (40x32px) | ❌ FALHA | Navbar.tsx:67 |
| Navbar mobile menu | `w-10 h-10` (40x40px) | ⚠️ ABAIXO | Navbar.tsx:104 |
| Dashboard sidebar icons | `w-8 h-8` (32x32px) | ❌ FALHA | ExcellencePage.tsx:73 |
| Footer text links | ~16px height (sem padding) | ❌ FALHA | Footer.tsx:42-49 |
| Frequency buttons | `py-3 px-2` (~44x~30px) | ⚠️ APERTADO | ContactPage.tsx:241 |
| Module card tags | `text-[10px]` com `px-2 py-1` | ❌ FALHA (não clicável, OK) | AcademyPage.tsx:151 |
| Bento cards (links) | Área grande | ✅ OK | Todos |
| CTA buttons (rounded-full) | `py-4 px-8+` | ✅ OK | Todos |
| Mobile menu links | `text-3xl` + gap-8 | ✅ OK | Navbar.tsx:128-136 |

**Veredito:** 3 elementos interativos **críticos** abaixo de 44px no mobile (navbar lang, navbar menu, footer links). O dashboard sidebar é irrelevante pois deve ser escondido em mobile.

**Impacto:** Frustração com taps errados, especialmente no language switcher (40x32px) que é o menor touch target interativo.

---

### 1.2 Hierarquia Visual em Mobile (320px - 375px)

#### Tamanhos de Fonte Problemáticos em Mobile

| Classe | Pixels | Viewport 320px | Problema |
|--------|--------|----------------|----------|
| `text-[11vw]` | 35px @320 / 41px @375 | OK | Escala bem com viewport |
| `text-[7vw]` (md) | N/A mobile | - | Só desktop |
| `text-9xl` | **128px** | ❌ OVERFLOW | Ultrapassa tela em 320px |
| `text-8xl` | **96px** | ❌ OVERFLOW | Muito grande para 320px |
| `text-6xl` | **60px** | ⚠️ APERTADO | Funciona mas sem margem |
| `text-5xl` | 48px | ✅ OK | Bom para headings mobile |
| `text-4xl` | 36px | ✅ OK | Bom para subheadings |
| `text-8xl` (75% stat) | **96px** | ⚠️ GRANDE | Stat visual, aceitável |

**Páginas com `text-9xl` em mobile (PROBLEMA):**
- `AcademyPage.tsx:27` — `text-6xl md:text-9xl` — **6xl em mobile = 60px** (borderline OK)
- `ExcellencePage.tsx:35` — `text-6xl md:text-9xl` — **6xl em mobile = 60px** (borderline OK)

**Páginas com `text-8xl` em mobile (PROBLEMA):**
- `StudioPage.tsx:28` — `text-6xl md:text-8xl` — **6xl em mobile = 60px** (borderline OK)
- `StudioPage.tsx:67` — `text-8xl` SEM breakpoint — **96px em TODAS as telas** ❌
- `HomePage.tsx:345` — `text-5xl md:text-8xl` — **5xl em mobile = 48px** ✅

**Issue Crítico:** `StudioPage.tsx:67` usa `text-8xl` sem breakpoint responsivo. O "75%" terá 96px em mobile 320px, que com 3 caracteres ("75%") ocupa ~144px de largura — cabe, mas é excessivamente dominante.

---

### 1.3 Espaçamento em Mobile

| Classe | Pixels | Problema em Mobile |
|--------|--------|--------------------|
| `px-10` | 40px cada lado | 320px - 80px = **240px** de conteúdo útil ❌ |
| `py-32` | 128px cada lado | Scroll excessivo, CTA section com 256px de espaço vazio |
| `mb-32` | 128px | Gap enorme entre seções em mobile |
| `p-24` | 96px | Studio CTA com 192px de padding total |
| `p-12` | 48px | Cards CTA com 96px total — OK em desktop, muito em mobile |
| `gap-16` | 64px | Footer links separadas por 64px — overflow horizontal |

**Cálculo de conteúdo útil em 320px:**
- Com `px-10`: 320 - 80 = **240px** (75% aproveitamento) ❌
- Com `px-4`: 320 - 32 = **288px** (90% aproveitamento) ✅
- Com `px-4 md:px-10`: Melhor dos dois mundos ✅

**Recomendação:** Todo `px-10` fixo deve virar `px-4 md:px-10`. Todo `py-32` deve virar `py-16 md:py-32`. Todo `mb-32` deve virar `mb-16 md:mb-32`. Todo `p-12` em cards deve virar `p-6 md:p-12`.

---

### 1.4 Fluxos de Navegação Mobile

| Fluxo | Estado | Problema |
|-------|--------|----------|
| Menu hamburger → Links | ✅ Funcional | Sem animação de saída |
| Menu → Language switch | ✅ Funcional | Duplicado (dropdown + overlay) |
| Scroll longo → Voltar ao topo | ❌ AUSENTE | Páginas longas sem "back to top" |
| Orientação landscape | ⚠️ NÃO TESTADO | Hero pode quebrar em landscape |
| Swipe entre seções | ❌ AUSENTE | Não há gestos de navegação |
| Deep link → Seção | ❌ AUSENTE | Sem anchor links para seções |

**Issue UX principal:** Páginas como Academy e Excellence são muito longas. Em mobile, sem "back to top" ou navegação interna, o usuário precisa fazer scroll extenso para voltar.

---

### 1.5 Contraste e Legibilidade (WCAG 2.1)

| Cor / Background | Ratio | AA Normal | AA Large | Uso |
|-----------------|-------|-----------|----------|-----|
| #888 / #050505 | 5.75:1 | ✅ Pass | ✅ Pass | text-secondary — corpo de texto |
| #5A7B94 / #050505 | 4.56:1 | ✅ Pass | ✅ Pass | exc-muted — labels Excellence |
| **#5A7B94 / #0A0C10** | **4.38:1** | **❌ Fail** | ✅ Pass | exc-muted em cards — **PROBLEMA** |
| #D4FF00 / #050505 | 17.57:1 | ✅ Pass | ✅ Pass | accent-primary — excelente |
| #497EBD / #050505 | 4.86:1 | ✅ Pass | ✅ Pass | exc-blue — borderline |
| #CDD5DA / #050505 | 13.71:1 | ✅ Pass | ✅ Pass | exc-text — muito bom |
| #FFD700 / #050505 | 14.53:1 | ✅ Pass | ✅ Pass | aca-orange — excelente |
| #FFF / #050505 | 20.38:1 | ✅ Pass | ✅ Pass | white — perfeito |

**Issue:** `exc-muted` (#5A7B94) em `bg-card` (#0A0C10) **falha AA para texto normal**. Usado no dashboard para labels como "Global OEE", "Hoshin Goals", "Value Leakage", "Uptime". Em mobile, onde o texto já é menor, isso é ainda mais problemático.

**Recomendação:** Substituir `text-exc-muted` por `text-exc-text` (#CDD5DA) em textos menores que `text-lg`, ou clarear exc-muted para `#6D8FA8` (~5.5:1).

---

### 1.6 Animações e Performance Mobile

| Animação | Tipo | Impacto Mobile |
|----------|------|---------------|
| `animate-pulse-slow` | Opacidade | ✅ Leve |
| `animate-float` | Transform Y | ✅ Leve |
| `animate-spin-slow` | Rotação contínua | ⚠️ GPU em SVGs grandes |
| `animate-fade-in` | Opacidade | ✅ Leve |
| `animate-fade-in-up` | Opacidade + Transform | ✅ Leve |
| `animate-draw` | SVG stroke | ✅ Leve |
| Gears SVG rotation (Excellence) | 3 SVGs rotativos contínuos | ⚠️ Battery drain em mobile |
| `backdrop-filter: blur(16px)` | Blur compositing | ⚠️ Performance em Android low-end |

**Ausências:**
- ❌ Sem `@media (prefers-reduced-motion: reduce)` — violação WCAG 2.3.3
- ❌ Sem IntersectionObserver — todas as animações rodam mesmo fora do viewport
- ❌ Gears na HomePage/Excellence rodando infinitamente — desperdício de bateria

**Recomendação:** Adicionar ao `index.html`:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

### 1.7 Formulário de Contato — UX Mobile

| Aspecto | Estado | Nota |
|---------|--------|------|
| Input font size | `text-base` (16px) | ✅ Evita zoom no iOS |
| Input padding | `py-4 px-4` | ✅ Confortável |
| Labels | `text-xs` font-mono | ⚠️ 12px pode ser apertado |
| Error messages | `text-xs` font-mono red | ⚠️ Legível mas pequeno |
| Keyboard type `tel` | ✅ Correto | Abre teclado numérico |
| Keyboard type `email` | ✅ Correto | Abre teclado com @ |
| Submit disabled state | ✅ Funcional | `opacity-50 cursor-not-allowed` |
| Success/Error states | ✅ Full-page feedback | Bom padrão mobile |
| Frequency selector | `grid-cols-2` | ✅ Funcional em mobile |

**Issue UX:** Mensagens de validação em inglês ("Name is required") enquanto o site suporta PT/ES/IT. Em mobile, onde o usuário provavelmente é brasileiro, isso é mais impactante.

---

## PARTE 2: Validação do Plano da Aria

### 2.1 Concordâncias (o que está excelente no plano)

| Item | Avaliação UX |
|------|-------------|
| Dashboard StratOS como P0 CRITICAL | ✅ Correto — é o pior problema UX |
| Recomendação de versão simplificada mobile | ✅ Abordagem certa |
| Manter desktop-first | ✅ Pragmático para produção |
| Viewport mínimo 320px | ✅ Correto para mercado BR |
| Adicionar `sm:` seletivamente | ✅ Equilibrado |
| Footer como P1 HIGH | ✅ Impacta todas as páginas |

### 2.2 Gaps Identificados (o que falta no plano)

| # | Gap | Impacto UX | Severidade | Recomendação |
|---|-----|-----------|-----------|--------------|
| UX-1 | **Touch targets < 44px** não mencionados como items específicos | Frustração com taps errados | HIGH | Adicionar task específica em MR-6 ou MR-2 |
| UX-2 | **Espaçamento excessivo em mobile** (py-32, mb-32, p-24) não mapeado | Scroll excessivo, conteúdo parece vazio | HIGH | Adicionar como nova story ou incorporar em cada MR |
| UX-3 | **`prefers-reduced-motion`** não mencionado | Acessibilidade WCAG 2.3.3 | MEDIUM | Adicionar em MR-6 ou MR-2 (é 1 bloco CSS) |
| UX-4 | **Contraste `exc-muted` em `bg-card`** falha AA | Legibilidade | MEDIUM | Adicionar em MR-5 |
| UX-5 | **Padding responsivo** (`px-10` fixo em páginas internas) | Conteúdo espremido em 320px | HIGH | StudioPage, AcademyPage, ExcellencePage, ContactPage usam `px-4 md:px-10` (OK) mas Footer usa `px-10` fixo |
| UX-6 | **Animações contínuas** draining battery em mobile | Performance / bateria | LOW | Pausar animações fora do viewport |
| UX-7 | **StudioPage stat `text-8xl`** sem breakpoint responsivo | Visual desproporcional | MEDIUM | Adicionar `text-6xl md:text-8xl` |
| UX-8 | **Sem "back to top"** em páginas longas | Navegabilidade | LOW | Considerar para MR-6 |
| UX-9 | **Safe area insets** para iPhone com notch | Conteúdo sob notch | MEDIUM | Correto no plano da Aria (MR-2) ✅ |

### 2.3 Prioridades — Concordância e Ajuste

| Story Aria | Prioridade Aria | Prioridade UX | Ajuste? |
|-----------|----------------|---------------|---------|
| MR-1 (Dashboard) | P0 CRITICAL | P0 CRITICAL | ✅ Concordo |
| MR-2 (Footer/Global) | P1 HIGH | **P0 HIGH** | ⬆️ Footer quebrado impacta TODAS as páginas |
| MR-3 (HomePage) | P1 HIGH | P1 HIGH | ✅ Concordo |
| MR-4 (Studio/Academy) | P1 HIGH | P1 HIGH | ✅ Concordo, adicionar flex-wrap Academy |
| MR-5 (Excellence) | P2 MEDIUM | P2 MEDIUM | ✅ Concordo, adicionar fix de contraste |
| MR-6 (UX Polish) | P3 LOW | **P2 MEDIUM** | ⬆️ Touch targets e prefers-reduced-motion são acessibilidade, não polish |

### 2.4 Items que Recomendo Adicionar

#### Ao MR-2 (Global):
```
- [ ] Adicionar CSS `prefers-reduced-motion` no index.html (WCAG 2.3.3)
- [ ] Touch target: Navbar lang button de w-10 h-8 → w-10 h-10 mínimo
- [ ] Touch target: Navbar mobile menu → mínimo w-11 h-11 (44px)
- [ ] Footer links: adicionar py-2 para touch target adequado
```

#### Ao MR-4 (Studio/Academy):
```
- [ ] StudioPage stat "75%": text-8xl → text-6xl md:text-8xl
- [ ] AcademyPage buttons: adicionar flex-wrap
```

#### Ao MR-5 (Excellence):
```
- [ ] Corrigir contraste: exc-muted em bg-card (4.38:1 → precisa 4.5:1)
```

#### Novo em MR-6 ou distribuído:
```
- [ ] Adicionar espaçamento responsivo global:
      py-32 → py-16 md:py-32
      mb-32 → mb-16 md:mb-32
      p-12 → p-6 md:p-12
      p-24 → p-8 md:p-24
```

---

## PARTE 3: Recomendação Final de UX para Dashboard Mobile (MR-1)

### Wireframe Conceitual — Dashboard StratOS Mobile

```
┌─────────────────────────┐
│     StratOS Dashboard   │
│     ── Mobile View ──   │
├─────────────────────────┤
│ ┌─────────────────────┐ │
│ │ Global OEE          │ │
│ │ ████████████░░  87% │ │
│ │            ↑ +2.4%  │ │
│ └─────────────────────┘ │
│ ┌─────────────────────┐ │
│ │ Hoshin Goals        │ │
│ │ ██████████░░  12/15 │ │
│ │         On Track    │ │
│ └─────────────────────┘ │
│ ┌─────────────────────┐ │
│ │ Value Leakage       │ │
│ │ $0    [OPTIMAL]     │ │
│ │ Last: 42 days ago   │ │
│ └─────────────────────┘ │
│                         │
│ Active Agents           │
│ ● GembaWalker_v2  99.9%│
│ ● Predictive_Mai  99.8%│
│ ● Quality_Guard   99.7%│
│                         │
│ [Chart hidden on mobile │
│  — too complex for      │
│  small viewport]        │
└─────────────────────────┘
```

**Decisões de design:**
1. **Esconder:** Window chrome (dots), sidebar nav, chart complexo, time filter (D/W/M)
2. **Manter:** 3 KPIs empilhados + lista de agents
3. **Padrão:** Cards com border radius, progress bars, status badges
4. **Interação:** Tap em KPI pode expandir detalhes (future enhancement)

### Implementação Sugerida (pseudo-código):

```tsx
{/* Desktop: Dashboard completo */}
<div className="hidden md:block">
  {/* ... dashboard existente ... */}
</div>

{/* Mobile: KPIs simplificados */}
<div className="md:hidden flex flex-col gap-4 px-4">
  {/* Window chrome simplificado */}
  <div className="flex items-center gap-2 py-3">
    <span className="w-2 h-2 rounded-full bg-exc-blue animate-pulse" />
    <span className="text-xs font-mono text-exc-muted">StratOS_Enterprise_View</span>
  </div>

  {/* KPIs empilhados */}
  <div className="flex flex-col gap-3">
    {/* KPI Card pattern */}
    <div className="bg-bg-float border border-white/5 rounded-lg p-4">
      <h4 className="text-exc-text text-xs font-mono uppercase mb-2">Global OEE</h4>
      <div className="flex items-end justify-between">
        <div className="text-3xl text-white font-display font-bold">87.4%</div>
        <div className="text-green-400 text-xs">↑ +2.4%</div>
      </div>
      <div className="w-full bg-gray-800 h-1.5 mt-3 rounded-full">
        <div className="bg-exc-blue h-full w-[87%] rounded-full" />
      </div>
    </div>
    {/* ... repeat for other KPIs ... */}
  </div>

  {/* Agents list */}
  <div className="bg-bg-float border border-white/5 rounded-lg p-4">
    <h4 className="text-white text-sm font-bold mb-3">Active Agents</h4>
    {/* ... agent items ... */}
  </div>
</div>
```

---

## Resumo Executivo

### Estado atual da UX mobile: **5/10**

| Critério | Score | Nota |
|----------|-------|------|
| Touch Targets | 4/10 | 3 elementos críticos abaixo de 44px |
| Hierarquia Visual | 6/10 | Fontes grandes demais em alguns locais |
| Espaçamento | 4/10 | Padding/margin excessivos em mobile |
| Navegação | 6/10 | Funcional mas sem "back to top" |
| Contraste/Acessibilidade | 7/10 | 1 falha AA, sem prefers-reduced-motion |
| Formulário | 8/10 | Bom, mas validação não i18n |
| Dashboard Excellence | 1/10 | Completamente ilegível |
| Performance Animações | 6/10 | Animações infinitas em SVGs |

### Score atual vs projetado após implementação:

| Critério | Atual | Após MR-1→6 (Aria) | Após MR-1→6 + UX fixes |
|----------|-------|--------------------|-----------------------|
| Touch Targets | 4/10 | 6/10 | **9/10** |
| Hierarquia | 6/10 | 8/10 | **9/10** |
| Espaçamento | 4/10 | 7/10 | **9/10** |
| Navegação | 6/10 | 7/10 | **8/10** |
| Contraste | 7/10 | 7/10 | **9/10** |
| Formulário | 8/10 | 8/10 | **8/10** |
| Dashboard | 1/10 | 8/10 | **9/10** |
| Animações | 6/10 | 6/10 | **8/10** |
| **TOTAL** | **42/80 (52%)** | **57/80 (71%)** | **69/80 (86%)** |

O plano da Aria **eleva de 52% para 71%**. Com os ajustes UX recomendados, chegamos a **86%** — muito próximo de "100% responsivo".

---

## Sign-Off

**UX Designer:** Uma (@ux-design-expert)
**Data:** 2026-02-05
**Confiança:** 92% (Alta)

---

*Auditoria UX mobile completa.* 💝

— Uma, desenhando com empatia 💝
