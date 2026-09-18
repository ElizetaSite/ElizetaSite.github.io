# Hub pessoal Elizeta

Página inicial estática, minimalista e compatível com GitHub Pages para reunir os subdomínios da família `*.elizeta.com.br`. Não há dependências, etapa de compilação ou framework.

## Personalizar o cabeçalho

No início de `script.js`, altere os valores de `page`:

```js
const page = { ownerName: "Elizeta", subdomain: "hub.elizeta.com.br" };
```

`ownerName` é o nome exibido no topo e `subdomain` é o endereço mostrado logo abaixo.

## Adicionar ou editar cards

Todos os destinos ficam no único array `cards` em `script.js`. Copie um objeto, ajuste seus dados e salve:

```js
{
  name: "Ana Elizeta",
  description: "Página pessoal e principais links.",
  image: "images/ana.jpg",
  url: "https://ana.elizeta.com.br"
}
```

O card inteiro abre `url` na mesma aba. A descrição é limitada visualmente a duas linhas.

## Personalização visual dos cards

Cada card pode combinar três camadas: a cor base, a imagem de fundo e o conteúdo (foto, nome e descrição). Altere apenas estas propriedades no objeto correspondente em `script.js`; não é preciso modificar HTML ou CSS.

- `background`: caminho da imagem exibida sobre a cor base. É opcional.
- `backgroundOpacity`: opacidade somente da imagem, de `0` a `1`. Quando há imagem e este valor não é informado, o padrão é `0.35`.
- `backgroundBaseColor`: cor CSS abaixo da imagem. Aceita `#hex`, `rgb()`, `hsl()` e qualquer outra cor CSS válida. Quando omitida, o card usa uma cor neutra apropriada ao modo claro ou escuro.

Por exemplo, inclua as propriedades junto aos dados normais do card:

```js
{
  name: "Ana Elizeta",
  description: "Página pessoal e principais links.",
  image: "images/ana.jpg",
  background: "images/backgrounds/ana.jpg",
  backgroundOpacity: 0.5,
  backgroundBaseColor: "hsl(18 45% 28%)",
  url: "https://ana.elizeta.com.br"
}
```

Outras combinações, sem nenhuma alteração estrutural:

```js
// Fundo azul escuro e imagem discreta.
{ background: "images/backgrounds/luiz.jpg", backgroundOpacity: 0.25, backgroundBaseColor: "#1f2937" }

// Apenas uma cor, sem imagem de fundo.
{ backgroundBaseColor: "rgb(44 62 80)" }
```

A opacidade nunca é aplicada à foto, ao nome ou à descrição: ela afeta exclusivamente a camada da imagem de fundo.

## Tema da página

O botão no canto superior direito do cabeçalho alterna entre **Automático** (ícone 🖥️) e **Claro** (ícone ☀️). No modo Automático, a página acompanha a preferência de tema do sistema em tempo real. No modo Claro, ela permanece clara mesmo que o sistema esteja no modo escuro.

A escolha é salva automaticamente no navegador e restaurada nas próximas visitas. Para voltar ao comportamento automático, clique no botão quando o ícone de sol estiver visível.

## Imagens

Coloque as fotos em `images/` e use o caminho correspondente na propriedade `image`, por exemplo `images/luiz.jpg`. JPG, PNG e WebP são aceitos pelos navegadores. Enquanto uma foto não existir, a página mostra as iniciais da pessoa como um fallback elegante.

## Publicar no GitHub Pages

1. Envie os arquivos para o repositório no GitHub.
2. Em **Settings → Pages**, escolha **Deploy from a branch**.
3. Selecione a branch de publicação (normalmente `main`) e a pasta `/(root)`.
4. Salve e aguarde a URL do GitHub Pages ficar disponível.
5. Para usar um domínio próprio, configure-o em **Settings → Pages** e crie os registros DNS necessários no seu provedor. Para subdomínios, cada um pode apontar para a página ou host desejado conforme a configuração de DNS.

Abra `index.html` diretamente para uma prévia local ou use qualquer servidor estático simples.
