# 商品ページ二次元コード作成ツール（二次元コードさん）

社内用の SKU 番号（4 桁）を入力するだけで、EC サイト商品ページの印刷用二次元コードを作成するツールです。

🔗 https://edi-tool.github.io/sku-to-qr/

## 概要

社内用の **SKU番号** を入力するだけで、ECサイト商品ページの **二次元コード** を作成するツールです。
**GitHub Pages** でホストされており、スマホやタブレットのブラウザから直接利用できます。
機密情報を含まないため公開していますが、社内での利用を想定しています。
そのため検索エンジンには登録せず（`noindex`）、[edi-tool のツール一覧](https://edi-tool.github.io/)にも掲載していません。

## 使い方

1. 4 桁の SKU 番号を入力する（全角数字も可）
2. 二次元コードと、リンク先の URL が表示されます。リンク先を開いて商品ページを確認してください
3. 「画像をダウンロード (PNG)」で `QR_SKU{番号}.png` を保存します

## データの扱い

- 入力した SKU 番号はブラウザ内で二次元コードに変換し、外部へ送信しません。
- 二次元コードの生成には、リポジトリに同梱した [node-qrcode](https://github.com/soldair/node-qrcode)（`qrcode.min.js`）を使います。外部 CDN は読み込みません。

## 仕様

本ツールは印刷物（チラシ、POP等）への利用を想定し、以下の設定をプリセットしています。

| 項目 | 設定値 | 理由 |
| :--- | :--- | :--- |
| **URL形式** | `https://www.toyokan.co.jp/products/[SKU]` | SKU は 4 桁の数字のみ受け付けます。 |
| **誤り訂正レベル** | **H (High)** | 30%の汚損でも読み取り可能な最高レベルを選択。 |
| **マージン** | **4 blocks** | 国際規格に基づき、読み取り精度を確保するための余白を保持。 |
| **出力解像度** | **1600 px 四方** | `width: 1600` を指定し、DTP配置時も劣化しないサイズで生成。 |
| **配色** | **モノクロ2階調** | 印刷時のK100%での再現性を高めるため、純粋な黒と白を指定。 |

## 注意事項

- **商標**: 「QRコード」は株式会社デンソーウェーブの登録商標です。
- **免責事項**: 生成されたコードは、印刷前に必ず実機での読み取りテストを行ってください。

## 開発

ビルド工程はありません。`index.html` をそのまま GitHub Pages が配信します。

```bash
python -m http.server 8000   # プレビュー
npm test                     # テスト（Node.js 22 以上、依存パッケージなし）
npm run check                # HTML の静的チェック
```

- テスト（`tests/`）は URL の組み立て・入力検証・上記の仕様表の設定値と、同梱ライブラリでシンボルを作れることを確認します。設定値を変えたら仕様表とテストを同時に更新してください。
- 変更履歴は [CHANGELOG.md](CHANGELOG.md) を参照してください。
- 開発方針は [edi-tool 開発原則](https://github.com/edi-tool/.github/blob/main/PRINCIPLES.md) に従います。

## 参考文献 / References

本プロジェクトの開発にあたり、以下の資料およびデータを参照・利用させていただきました。

### システム

- [soldair/node-qrcode](https://github.com/soldair/node-qrcode)
  - 本ツールの画像出力機能に使用（`qrcode.min.js`）

### デザイン

- [kzhrknt/awesome-design-md-jp](https://github.com/kzhrknt/awesome-design-md-jp)
  - 本ツール（index）のデザインの参考

## ライセンス

MIT License © 2026 ISHIKAWA, Natsuki（[LICENSE](LICENSE)）

同梱の node-qrcode は MIT License です。
