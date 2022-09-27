import "crisp-game-lib";

const title = "Uranai";

const description = `
[tap]: Uranau
`;

const characters: string[] = [];

const kikkyo = ["USAKICHI!", "AGYA!", "BO-...", "MUZUI!"];
const don: SoundEffectType = "hit";
const finish: SoundEffectType = "jump";
const x = 20;

let kekka: string;

function update() {
  if (!ticks) {
    kekka = "";
    return;
  }
  if (ticks >= 60) {
    if (ticks === 60) {
      play(don);
    }
    text("KYO NO", x, 25);
  }
  if (ticks >= 120) {
    if (ticks === 120) {
      play(don);
    }
    text("ANATA NO", x, 35);
  }
  if (ticks >= 180) {
    if (ticks === 180) {
      play(don);
    }
    text("UNSEI WA", x, 45);
  }
  if (ticks >= 240) {
    if (ticks === 240) {
      play(don);
    }
    text("        .", x, 45);
  }
  if (ticks >= 300) {
    if (ticks === 300) {
      play(don);
    }
    text("         .", x, 45);
  }
  if (ticks >= 360) {
    if (ticks === 360) {
      play(don);
    }
    text("          .", x, 45);
  }
  if (ticks >= 480) {
    if (ticks === 480) {
      play(finish);
      kekka = kikkyo[rndi(kikkyo.length)];
    }
    text(`"${kekka}"`, x, 65);
  }
}

init({
  update,
  title,
  description,
  characters,
  options: {
    seed: 5,
    isPlayingBgm: true,
    theme: "crt",
  },
});
