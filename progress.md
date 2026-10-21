# 進捗: QRコードさん（sku-to-qr）

## 2026-10-21 セッション（エージェント向け規則の一本化）

- `CLAUDE.md` と `AGENTS.md` に規則が別々に書かれ、内容がずれていた（Claude Code は `CLAUDE.md` があると `AGENTS.md` を自動では読まず、Codex は `CLAUDE.md` を読まない）。両方の規則を `AGENTS.md` に統合し、`CLAUDE.md` は `@AGENTS.md` の取り込みだけにした。
- org 共通の取り決めと検査は edi-tool/.github#1（`PRINCIPLES.md`・`templates/CLAUDE.template.md`・`tools/check-template-sync.mjs`）。

## 2026-07-14 セッション

- **入力改善**: SKU入力に `inputmode="numeric"`・`autocomplete="off"` と Enterキーでの生成を追加。
- **デザイン統一**: `:root` に共通デザイントークンを導入し色を変数化。フォントを実効スタックへ。
  生成ボタンにホバー時のシャドウとクリック時の沈み込みを追加。
  `:focus-visible`・`prefers-reduced-motion`・`theme-color` 追加。
- **SEO**: 社内用ツールのため `noindex, nofollow`＋`sitemap: false` を維持（意図的にSEO対象外）。
  組織ハブおよびルート sitemap にも含めない。

## 関連

- 組織ハブ: https://edi-tool.github.io/ （社内用のため一覧には非掲載）
