# 進捗: QRコードさん（sku-to-qr）

## 2026-11-06 セッション（edi-tool 共通デザインの適用・ブックマーク名の統一）

- edi-tool 全ツールのブックマーク名を「短い用途｜ツール名」にそろえるのに合わせ、`<title>` を「SKU→QRコード作成｜QRコードさん」にした。
- 画面を edi-tool 共通デザイン（案C ソフト面×蛍光オレンジ、ダーク対応）で書き直した。処理と要素の id は変えていない（テスト6件そのまま合格）。
  - 上部バー、見出しを h1・800 に、「社内向け」の札、ラベルを `<label for>` に、入力欄は 3:1 以上の枠・大きめの等幅数字。
  - 主ボタンは蛍光オレンジに墨の文字（旧: 白文字 2.4:1）。ダウンロードはボタンをリンクの中に入れていた入れ子をやめ、枠付きのリンクボタンに（`#downloadBtn` は囲みの要素）。
  - エラーの「※」を警告の線アイコンに（CSS の `:not(:empty)::before`。処理は変えない）。10〜12px の文字をなくした。
  - `meta description` を追加（check-static の警告を解消）、`theme-color` を2行に。
- ファビコン（QR の線アイコン）と `ogp.png` をハブの `scripts/ogp/` で作って配置。
- 他社ブランドの分析資料だった `DESIGN.md` を、共通デザインの正本への案内に差し替えた。
- ユーザー判断（東洋館の写真以外には実用的でないため控えめに）で、ハブの一覧の下の「社内向け」欄に（社名は出さずツール名だけ） `rel="nofollow"` で載せた。sitemap と noindex は従来どおり。AGENTS.md の規則も改めた。

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
