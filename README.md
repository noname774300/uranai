# cgl-boilerplate

A boilerplate to use [crisp-game-lib](https://github.com/abagames/crisp-game-lib), write code in TypeScript, lint, format and install the game as PWA.

## How to use

Clone or fork this repository.

```sh
git clone https://github.com/noname774300/cgl-boilerplate.git <your project directory>
```

If your repository `https://github.com/<your account>/<your repository>.git` is created

```sh
cd <your project directory>
git remote set-url origin https://github.com/<your account>/<your repository>.git
```

Install dependencies.

```sh
yarn
```

Replace the word "cgl-boilerplate" in the whole of this project directory with your title or description for your game, and icons in the `public` directory with your icons.

Open a browser.

```sh
yarn dev
```

Write your code in `src/main.ts`.

And then

```sh
yarn deploy
```
