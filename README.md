# Teste e teste Advocacia - Site Institucional

Projeto institucional premium e contemporâneo para escritório de advocacia em Franca-SP, construído com foco em credibilidade, clareza e experiência de navegação acessível para público amplo (incluindo 40+).

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Framer Motion
- Lucide Icons

## Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Scripts

```bash
npm run dev     # ambiente local
npm run lint    # validação de código
npm run build   # build de produção
npm run start   # servir build
```

## Estrutura principal

```txt
src/
  app/
    page.tsx                             # Home
    sobre/page.tsx                       # Sobre o Escritório
    areas-de-atuacao/page.tsx            # Áreas de Atuação
    areas-de-atuacao/[slug]/page.tsx     # Página individual da área
    equipe/page.tsx                      # Equipe
    equipe/[slug]/page.tsx               # Página individual do advogado(a)
    faq/page.tsx                         # FAQ
    contato/page.tsx                     # Contato
    politica-de-privacidade/page.tsx     # Política de Privacidade
    sitemap.ts                           # Sitemap dinâmico
    robots.ts                            # Robots
    opengraph-image.tsx                  # OG image
    twitter-image.tsx                    # Twitter image
    icon.svg                             # Ícone base da marca
  components/
    common/                              # Blocos reutilizáveis (hero, heading, placeholder, CTA)
    layout/                              # Header, nav mobile e footer
    cards/                               # Cards de área e equipe
    contact/contact-form.tsx             # Formulário com validação e estados
    ui/                                  # Componentes shadcn/ui
  content/
    site.ts                              # Conteúdo institucional centralizado
  lib/
    seo.ts                               # Helpers de metadata/SEO
```

## Onde editar textos

Todo o conteúdo institucional (nome do escritório, áreas, equipe, FAQ, contatos, CTAs, bios e SEO base) está em:

- `src/content/site.ts`

Esse arquivo foi feito para facilitar manutenção sem precisar alterar múltiplas páginas.

## Onde editar cores, tipografia e design system

- `src/app/globals.css`

Tokens principais:

- Paleta base: `--background`, `--foreground`, `--muted`, `--border`
- Cor de apoio premium: `--accent-strong` e `--accent-soft`
- Raios/bordas: `--radius`
- Classes utilitárias de seção: `.section-space` e `.surface-panel`

Fontes carregadas no layout:

- Corpo: `Manrope`
- Títulos: `Source Serif 4`

## Onde trocar placeholders de imagem

Atualmente o projeto utiliza placeholders estilizados para manter unidade visual até a entrada de fotos reais.

- Componente base: `src/components/common/image-placeholder.tsx`
- Uso em páginas: Home, Sobre, Áreas, Equipe, Perfil, Contato

Para substituir por fotos reais:

1. Adicione imagens em `public/images/...`
2. Troque `ImagePlaceholder` por `next/image` nos blocos desejados
3. Mantenha tratamento visual sóbrio (P&B/dessaturado) para coerência institucional

## SEO técnico implementado

- Metadata por página
- Open Graph e Twitter Card
- `sitemap.xml`
- `robots.txt`
- `manifest.webmanifest`
- Ícones/favicons configurados
- HTML semântico e headings estruturados

## Acessibilidade e UX

- Skip link para conteúdo principal
- Contraste alto e tipografia legível
- Foco visível em elementos interativos
- Navegação responsiva com menu mobile
- Formulário de contato com validação e feedback de sucesso/erro

## Observações para evolução

- Integrar envio real de formulário (API Route, Resend, SMTP ou CRM)
- Adicionar integração real de mapa
- Substituir contatos placeholder pelos dados oficiais
- Ajustar domínio final em `src/lib/seo.ts`
