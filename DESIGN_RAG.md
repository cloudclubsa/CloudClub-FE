# Design RAG — AWS Cloud Club GO

Referência analisada: `https://startupweekendanapolis.com.br/`
Objetivo: recuperar a gramática visual e estrutural da referência e adaptá-la à identidade e ao conteúdo do Cloud Club, sem reproduzir a marca ou os textos do evento original.

## Padrões recuperados

### 1. Linguagem visual

- Neo-brutalismo editorial: bordas pretas de 4 px, sombras duras, formas ligeiramente rotacionadas e poucos arredondamentos.
- Fundo base quente `#f4f4f0` com grade pontilhada regular.
- Tipografia sans-serif muito pesada, em caixa alta, com títulos de 72–96 px no desktop.
- Paleta curta e contrastante. A referência usa preto, branco, amarelo e verde; a adaptação usa roxo Cloud Club, verde menta, amarelo e rosa.
- Componentes com aparência física: folhas empilhadas, etiquetas, stickers, painéis e janelas de sistema.

### 2. Arquitetura da página

1. Faixa contínua de anúncio.
2. Hero dividido em duas metades por uma borda vertical.
3. Headline grande + texto em caixa + dois CTAs.
4. Painel visual com camadas, imagem central, números e progresso.
5. Marquee de apoiadores.
6. Jornada narrativa em etapas.
7. Seção de eventos em alto contraste.
8. Blocos de papéis/benefícios.
9. Pessoas apresentadas como janelas de sistema.
10. FAQ de linhas grandes.
11. CTA final de cor sólida e rodapé preto.

### 3. Comportamento

- Marquees lentos para informações repetitivas e parceiros.
- Botões deslocam a sombra no hover, simulando pressão física.
- Cards do time usam rolagem horizontal com snap em desktop e mobile.
- FAQ funciona como acordeão e o modal de evento fecha por clique externo ou `Esc`.
- Movimento é desativado quando `prefers-reduced-motion` está ativo.

## Tradução para o Cloud Club

| Padrão da referência | Implementação no Cloud Club |
| --- | --- |
| Verde Techstars | Roxo Cloud Club como cor principal |
| Status de vagas | Status da comunidade: eventos, time e progresso |
| Jornada de 54 horas | Descobrir, construir, conectar e liderar |
| Papéis do evento | Aprender, construir e conectar |
| Organizadores em janelas | Time GO em cards `*.EXE` |
| Compra de ingresso | Agenda no Meetup e entrada na comunidade |

## Tokens aplicados

- Papel: `#f4f4f0`
- Preto: `#0a0a0a`
- Roxo: `#9147ff`
- Menta: `#69d47a`
- Amarelo: `#f8d447`
- Rosa: `#dc4d9b`
- Borda: `4px solid #0a0a0a`
- Sombra: `8px 8px 0 #0a0a0a`
- Display: `Arial Black / Helvetica Neue`
- Texto: `Helvetica Neue / Helvetica / Arial`

## Critérios para evoluções futuras

- Manter títulos curtos, verbais e em caixa alta.
- Cada seção deve ter uma ideia dominante e uma cor funcional.
- Evitar gradientes decorativos e sombras suaves.
- Usar imagens reais ou assets oficiais dentro de molduras brutais.
- Preservar contraste AA, foco visível, navegação por teclado e layouts responsivos.
