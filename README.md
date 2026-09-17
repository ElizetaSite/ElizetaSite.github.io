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

## Imagens

Coloque as fotos em `images/` e use o caminho correspondente na propriedade `image`, por exemplo `images/luiz.jpg`. JPG, PNG e WebP são aceitos pelos navegadores. Enquanto uma foto não existir, a página mostra as iniciais da pessoa como um fallback elegante.

## Publicar no GitHub Pages

1. Envie os arquivos para o repositório no GitHub.
2. Em **Settings → Pages**, escolha **Deploy from a branch**.
3. Selecione a branch de publicação (normalmente `main`) e a pasta `/(root)`.
4. Salve e aguarde a URL do GitHub Pages ficar disponível.
5. Para usar um domínio próprio, configure-o em **Settings → Pages** e crie os registros DNS necessários no seu provedor. Para subdomínios, cada um pode apontar para a página ou host desejado conforme a configuração de DNS.

Abra `index.html` diretamente para uma prévia local ou use qualquer servidor estático simples.
