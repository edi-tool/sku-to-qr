# Changelog

このプロジェクトの主な変更を記録します。形式は [Keep a Changelog](https://keepachangelog.com/ja/1.1.0/)、
バージョンは [Semantic Versioning](https://semver.org/lang/ja/) に従います。
1.x 以前の履歴は、この CHANGELOG を作成した時点で Git の履歴からまとめ直したものです。

## [Unreleased]

## [1.2.0] - 2026-09-25

### Added

- テスト（`npm test`）と HTML 静的チェック（`npm run check`）、GitHub Actions の CI
- `_config.yml`：開発用ファイル（CLAUDE.md・DESIGN.md・progress.md・tests など）を GitHub Pages の公開ビルドから除外

### Fixed

- README の出力解像度の記載（`scale: 40`）を実装（`width: 1600`）に合わせた

## [1.1.0] - 2026-04-20

### Changed

- 出力サイズを 1890px から 1600px に変更

## [1.0.1] - 2026-04-16

### Changed

- パフォーマンス・セキュリティ・アクセシビリティの改善

## [1.0.0] - 2026-04-14

- 初回公開：4 桁の SKU から商品ページの二次元コード（誤り訂正 H・モノクロ）を作成
