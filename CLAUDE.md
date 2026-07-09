# sku-to-qr

社内用 SKU 番号から EC サイト商品ページの二次元コードを作成するツール。印刷物（チラシ・POP等）への利用を想定。
公開URL: https://edi-tool.github.io/sku-to-qr/ （GitHub Pages）

## 実行コマンド

- プレビュー: `python -m http.server 8000`
- 整形: `npx prettier --write .`

## プロジェクト方針

- 依存は同梱の `qrcode.min.js`（node-qrcode v1.4.4 / MIT）のみ。他のライブラリを追加しない。
- QR生成プリセット（誤り訂正レベル H、マージン 4、`scale: 40`、モノクロ2階調）は印刷用途の要件。変更時は README の仕様表も更新。
- 軽微な修正での push 禁止。ローカルサーバーで検証し、複数修正を1コミットに集約（GitHub Actions 節約）。
- セッション終了時に `progress.md` を更新。
