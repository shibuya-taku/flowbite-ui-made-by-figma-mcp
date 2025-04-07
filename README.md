# Flowbite UI

Figmaデザインを元にしたFlowbiteコンポーネントを使用したUIの実装です。

## デモページ

GitHub Pages: https://[YOUR_USERNAME].github.io/figma_mcp/

## 開発方法

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# 静的ファイルの生成（GitHub Pages用）
npm run export
```

## GitHub Pagesへのデプロイ方法

### 自動デプロイ（GitHub Actions）

1. リポジトリの "Settings" タブに移動
2. 左メニューから "Pages" を選択
3. "Source" セクションで "GitHub Actions" を選択
4. メインブランチにプッシュすると自動的にデプロイされます

### 手動デプロイ

```bash
# 静的ファイルを生成
npm run export

# 生成されたoutディレクトリをコミットしてプッシュ
git add out/
git commit -m "Deploy to GitHub Pages"
git push origin main
```
