# 進捗: QRコードさん（sku-to-qr）

## 2026-07-14 セッション

- **入力改善**: SKU入力に `inputmode="numeric"`・`autocomplete="off"` と Enterキーでの生成を追加。
- **デザイン統一**: `:root` に共通デザイントークンを導入し色を変数化。フォントを実効スタックへ。
  生成ボタンにホバー時のシャドウとクリック時の沈み込みを追加。
  `:focus-visible`・`prefers-reduced-motion`・`theme-color` 追加。
- **SEO**: 社内用ツールのため `noindex, nofollow`＋`sitemap: false` を維持（意図的にSEO対象外）。
  組織ハブおよびルート sitemap にも含めない。

## 関連

- 組織ハブ: https://edi-tool.github.io/ （社内用のため一覧には非掲載）
