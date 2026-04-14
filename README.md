# 商品ページ二次元コード作成ツール

出版社の商品ページの二次元コードを作成するツールです。

https://edi-tool.github.io/sku-to-qr/

## 概要
社内用の **SKU番号** を入力するだけで、ECサイト商品ページの **二次元コード** を作成するツールです。
**GitHub Pages** でホストされており、スマホやタブレットのブラウザから直接利用できます。
（機密情報など含まないので公開していますが、）社内での利用を想定しています。

## 使用技術
- **JavaScript Library**: [node-qrcode](https://github.com/soldair/node-qrcode) (v1.4.4 via cdnjs)
- **Languages**: HTML5, CSS3, JavaScript (ES6+)

## 仕様

本ツールは印刷物（チラシ、POP等）への利用を想定し、以下の設定をプリセットしています。

| 項目 | 設定値 | 理由 |
| :--- | :--- | :--- |
| **誤り訂正レベル** | **H (High)** | 30%の汚損でも読み取り可能な最高レベルを選択。 |
| **マージン** | **4 blocks** | 国際規格に基づき、読み取り精度を確保するための余白を保持。 |
| **出力解像度** | **高解像度** | `scale: 40` を指定し、DTP配置時も劣化しないサイズで生成。 |
| **配色** | **モノクロ2階調** | 印刷時のK100%での再現性を高めるため、純粋な黒と白を指定。 |

## 参考文献 / References

本プロジェクトの開発にあたり、以下の資料およびデータを参照・利用させていただきました。

### システム

* [soldair/node-qrcode](https://github.com/soldair/node-qrcode)
　* 本ツールの画像出力機能の参考

### デザイン
* [kzhrknt/awesome-design-md-jp](https://github.com/kzhrknt/awesome-design-md-jp)
  * 本ツール（index）のデザインの参考

## 注意事項
- **URL形式**: `https://www.toyokan.co.jp/products/[SKU]` の形式で自動生成します。
- **商標**: 「QRコード」は株式会社デンソーウェーブの登録商標です。
- **免責事項**: 生成されたコードは、印刷前に必ず実機での読み取りテストを行ってください。

---
© 2026 ISHIKAWA, Natsuki
