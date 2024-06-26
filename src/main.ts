import { Engine, FadeInOut } from "excalibur";
import { welcomeScene } from "./scenes/welcomeScene";
import { loader } from "./resources";
import { historyScene } from "./scenes/historyScene";

const game = new Engine({
  width: 1200,
  height: 800,
  canvasElementId: "jogo"
})

game.addScene("bemvindo", new welcomeScene())
game.addScene("historia", new historyScene())

game.start(loader).then(() => {
  game.goToScene("historia", {
    // Adiciona transição lenta ao ir para a welcomeScene
    sourceOut: new FadeInOut({ duration: 1000 })
  })
})
