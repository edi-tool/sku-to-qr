# sku-to-qr

社内用 SKU 番号から EC サイト商品ページの二次元コードを作成するブラウザツール。印刷物（チラシ・POP等）への利用を想定（社内向け・noindex・ハブ未掲載）。
公開URL: https://edi-tool.github.io/sku-to-qr/ （GitHub Pages）
共通方針は [edi-tool 開発原則](https://github.com/edi-tool/.github/blob/main/PRINCIPLES.md)。`CLAUDE.md` はこのファイルを取り込むだけなので、エージェント共通の規則はここに書く。

## 実行コマンド

- プレビュー: `python -m http.server 8000`
- 整形: `npx prettier --write .`
- テスト: `npm test`（Node.js 22 以上、依存なし）
- HTML 静的チェック: `npm run check`

## 守ること

- 社内向けのため、edi-tool.github.io のハブ・sitemap.xml には載せない。noindex を外さない。
- 依存は同梱の `qrcode.min.js`（node-qrcode v1.4.4 / MIT）のみ。他のライブラリを追加しない。
- QR生成プリセット（誤り訂正レベル H、マージン 4、`width: 1600`、モノクロ2階調）は印刷用途の要件。変えたら README の仕様表とテストを同時に更新する。
- `scripts/check-static.mjs` と `tests/helpers.js` は edi-tool/.github の templates からのコピー。直すときは原本も直す。
- 軽微な修正での push 禁止。ローカルサーバーで検証し、複数修正を1コミットに集約する（GitHub Actions 節約）。
- セッション終了時に `progress.md` を更新。
