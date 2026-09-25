# sku-to-qr

SKU 番号から商品ページの二次元コードを作成するブラウザツール（社内向け・noindex・ハブ未掲載）。公開URL: https://edi-tool.github.io/sku-to-qr/
詳しい方針は CLAUDE.md、共通方針は [edi-tool 開発原則](https://github.com/edi-tool/.github/blob/main/PRINCIPLES.md)。

## 実行コマンド

- プレビュー: `python -m http.server 8000`
- テスト: `npm test`（Node.js 22 以上、依存なし）
- HTML 静的チェック: `npm run check`

## 守ること

- 社内向けのため、edi-tool.github.io のハブ・sitemap.xml には載せない。noindex を外さない。
- 印刷用プリセット（誤り訂正 H・マージン 4・width 1600・モノクロ）を変えたら、README の仕様表とテストを同時に更新する。
- `scripts/check-static.mjs` と `tests/helpers.js` は edi-tool/.github の templates からのコピー。直すときは原本も直す。
- 軽微な修正での push 禁止。複数修正をまとめてから push する。
