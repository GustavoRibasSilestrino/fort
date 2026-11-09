# Fort Build

Jogo 3D no navegador para treinar construção estilo Fortnite, feito com Three.js.

## Modos
- **Freebuild**: mundo plano com grade de 4 m, materiais e munição infinitos, boneco de treino.
- **Duelo 1v1**: você contra um bot que atira, constrói e se cura. Primeiro a 5 eliminações.

## Como jogar
Abra `FortBuild.html` (arquivo único, não precisa de servidor) ou `index.html`.

## Recursos
- Peças de construção: parede, piso, escada e cone, todas editáveis (grade 3x3; escada 2x2).
- A peça é colocada onde a mira aponta.
- Deslizar (Shift correndo), corrida automática, mira diferente por arma.
- Teclas remapeáveis, sensibilidade geral/mira/luneta, distância da câmera e modo de confirmar edição em Configurações.

## Desenvolvimento
```bash
npm install
npm run build   # gera game.js a partir de src/
```
O `FortBuild.html` é o `index.html` com o `game.js` embutido.
