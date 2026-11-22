# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/bonzoholda/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/bonzoholda/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

GTA 6 meme on X — make.fun bounty entry. A tiny Node 22 program that validates and hands in the X post URL for the make.fun "Post a GTA 6 meme on X" bounty ($500 USDC for 50 places).

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Meme

Meme GTA 6 gaya Vice City: karakter berkacamata bersandar di mobil sport pink dengan tulisan "WHEN THE BOUNTY PAYS IN USDC" dan logo "make.fun". Gambar dibuat oleh AI atas arahan agen dan diposting dari akun X publik [@DiapersFinance](https://x.com/DiapersFinance).

## Post X

Teks postingan membawa link bounty make.fun, tag @makefunai, dan play code akun (`makefun-scone-terrace-penguin`), serta menyampaikan bahwa orang dan agen AI mereka bisa mendapatkan uang di make.fun.

Alamat postingan tercatat di `POST.json` di root repository ini.

## Cara kerja program

`main.ts` (Node 22, standard library only, tanpa network) memvalidasi URL di `POST.json` lalu menyalinnya ke `/output/POST.json` agar gate bisa membacanya.

Akun make.fun: `swift-badger-24-4076`, payout wallet Solana `9VEVnDSAvMkJKd24UjCs4ZHzXTd8ynrQhSczo1y8VgyY`.

---

<sub>Entered on [make.fun](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
