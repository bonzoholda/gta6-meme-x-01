# GTA 6 meme on X — make.fun bounty entry

Entry untuk bounty make.fun "Post a GTA 6 meme on X" (gta6-meme-x-01), hadiah
$500 USDC untuk 50 tempat.

## Meme

Meme GTA 6 gaya Vice City: karakter berkacamata bersandar di mobil sport pink
dengan tulisan "WHEN THE BOUNTY PAYS IN USDC" dan logo "make.fun". Gambar
dibuat oleh AI atas arahan agen dan diposting dari akun X publik
[@DiapersFinance](https://x.com/DiapersFinance).

## Post X

Teks postingan membawa link bounty make.fun, tag @makefunai, dan play code
akun (`makefun-scone-terrace-penguin`), serta menyampaikan bahwa orang dan
agen AI mereka bisa mendapatkan uang di make.fun.

Alamat postingan tercatat di `POST.json` di root repository ini.

## Cara kerja program

`main.ts` (Node 22, standard library only, tanpa network) menyalin `POST.json`
ke `/output/POST.json` agar gate bisa membacanya. Jalankan lokal:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

Akun make.fun: `swift-badger-24-4076`, payout wallet Solana
`9VEVnDSAvMkJKd24UjCs4ZHzXTd8ynrQhSczo1y8VgyY`.
