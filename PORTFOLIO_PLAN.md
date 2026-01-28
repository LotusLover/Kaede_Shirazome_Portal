# ゲームプログラマー向けポートフォリオサイト構築計画

## 📋 プロジェクト概要

**Kaede_Shirazome_Portal** は、ゲームプログラマー（枫白雪）のスキルと開発経歴を展示するポートフォリオサイトです。
複数のゲーム開発プロジェクトをブラウザで直接体験でき、技術スタックと成果を採用企業に効果的にアピールします。

---

## 🎮 ポートフォリオに掲載するゲーム

### **1. リアルタイムオセロ（Reversi） - 新規開発**
- **技術**: Unity + WebGL
- **特徴**: ターン制ではなく、リアルタイムで素早くピースを配置・反転
- **ステータス**: 開発中
- **公開方式**: ブラウザ内埋め込み（iframe）でプレイ可能
- **技術タグ**: `Unity` `WebGL` `C#` `ゲームロジック` `UI/UX`
- **説明**: WebGL を活用したクライアント側でのゲームロジック実装とリアルタイム入力処理の実装

### **2. オンライン RTS（Real-Time Strategy）**
- **フォルダ**: `C:\gakkouyou\2025_comp_visualizer\simuv2`
- **技術**: Unity + WebGL + ネットワーク通信
- **特徴**: WW2 の日米戦闘をベースとしたオンラインストラテジーゲーム
- **ステータス**: 開発中（同期ずれ調整中）
- **公開方式**: ブラウザ内埋め込み（iframe）でプレイ可能
- **技術タグ**: `Unity` `WebGL` `C#` `ネットワーク` `マルチプレイ` `同期処理`
- **説明**: 複数プレイヤー同期の課題に直面し、解決アプローチを検討中。ネットワークプログラミング経験を示す

### **3. 感情操作アクション - スクリーンショット・動画紹介**
- **フォルダ**: `C:\gakkouyou\2025_action_tri_proto`
- **技術**: Unity + Python + C++ （外部連携の感情認識）
- **特徴**: 顔の表情や声色から感情を推測し、キャラクターを操作して戦うアクションゲーム
- **ステータス**: 開発中（操作システム調整中）
- **公開方式**: YouTube 動画 + スクリーンショット紹介（WebGL ビルド非対応）
- **技術タグ**: `Unity` `C#` `Python` `C++` `感情認識` `マルチモーダル`
- **説明**: 複数の技術スタック（Python・C++）を統合し、感情認識とゲーム操作を連携させるシステム設計

### **4. 弾幕シューティング「夢幻暁紅談」（Gyoukoudan）- スクリーンショット・動画紹介**
- **フォルダ**: `C:\gyoukoudan`
- **技術**: C++（DxLib）
- **特徴**: 自力で全てコーディング。立ち絵・背景・音楽・シナリオも自作
- **ステータス**: プログラム完成（ステージ・音楽制作中）
- **公開方式**: YouTube 動画 + スクリーンショット紹介
- **技術タグ**: `C++` `DxLib` `弾幕システム` `グラフィックス` `マルチメディア`
- **説明**: 大規模なシューティングゲームを一人で完全実装。モダン C++ と従来 C のハイブリッド開発経験を示す

---

## 🏗️ ポートフォリオサイト構造

```
Kaede_Shirazome_Portal/
├── README.md
├── PORTFOLIO_PLAN.md (このファイル)
├── package.json
├── next.config.js
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
│
├── /public
│   ├── /games
│   │   ├── /reversi
│   │   │   ├── index.html
│   │   │   ├── Build/
│   │   │   │   └── [Unity WebGL ビルド出力]
│   │   │   └── TemplateData/
│   │   │
│   │   └── /rts
│   │       ├── index.html
│   │       ├── Build/
│   │       │   └── [Unity WebGL ビルド出力]
│   │       └── TemplateData/
│   │
│   ├── /images
│   │   ├── /projects
│   │   │   ├── reversi-hero.png
│   │   │   ├── rts-screenshot.png
│   │   │   ├── action-screenshot.png
│   │   │   └── shooting-screenshot.png
│   │   └── /social
│   │       └── og-image.png
│   │
│   └── /videos
│       └── [動画サムネイル等]
│
├── /src
│   ├── /pages
│   │   ├── index.tsx (ホーム)
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   ├── _404.tsx
│   │   │
│   │   └── /projects
│   │       ├── index.tsx (プロジェクト一覧)
│   │       ├── [id].tsx (プロジェクト詳細ページ)
│   │       ├── reversi.tsx (または [id].tsx で動的生成)
│   │       ├── rts.tsx
│   │       ├── action.tsx
│   │       └── shooting.tsx
│   │
│   ├── /components
│   │   ├── /layout
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navigation.tsx
│   │   │
│   │   ├── /sections
│   │   │   ├── Hero.tsx (ヒーロー画面)
│   │   │   ├── Projects.tsx (プロジェクト一覧)
│   │   │   ├── TechStack.tsx (技術スタック)
│   │   │   ├── About.tsx (自己紹介)
│   │   │   └── Contact.tsx (連絡先)
│   │   │
│   │   ├── /project-details
│   │   │   ├── ProjectHeader.tsx
│   │   │   ├── GameEmbed.tsx (iframe 埋め込み)
│   │   │   ├── VideoEmbed.tsx (YouTube 埋め込み)
│   │   │   ├── ScreenshotGallery.tsx
│   │   │   ├── TechBadges.tsx (技術タグ表示)
│   │   │   └── ProjectDescription.tsx
│   │   │
│   │   └── /common
│   │       ├── TechTag.tsx
│   │       ├── ProjectCard.tsx
│   │       └── SocialLinks.tsx
│   │
│   ├── /lib
│   │   ├── projects.ts (プロジェクトデータ定義)
│   │   ├── types.ts (型定義)
│   │   └── constants.ts
│   │
│   ├── /styles
│   │   └── globals.css (Tailwind CSS 基本)
│   │
│   └── utils/
│       └── [ユーティリティ関数]
│
├── .github/
│   └── workflows/
│       └── deploy.yml (GitHub Actions 自動デプロイ設定)
│
├── .gitignore
└── vercel.json (Vercel 設定)
```

---

## 🎨 ページ構成

### **ホーム（`/`）**
1. **ナビゲーション**: ロゴ + メニュー（プロジェクト、技術、自己紹介、連絡先）
2. **ヒーロー画面**: ゲーム画面の背景画像 + メインメッセージ + CTA ボタン
3. **プロジェクト一覧**: 4 つのゲームカード（タイトル、サムネイル、1 行説明、"詳細を見る" ボタン）
4. **技術スタック**: アイコン付きバッジ（Unity, WebGL, C#, C++, Python 等）
5. **自己紹介セクション**: 簡潔な経歴・スキル説明
6. **連絡先**: Email, GitHub, LinkedIn へのリンク
7. **フッター**: コピーライト・ソーシャルリンク

### **プロジェクト詳細ページ（`/projects/[id]`）**
各プロジェクトに対応するページ構成：

#### **オセロ・RTS（プレイ可能版）**
- プロジェクトタイトル + 説明
- **ゲーム埋め込み**: `<iframe>` で Unity WebGL ゲームを埋め込み
- 技術タグ / バッジ
- 詳細説明：
  - 開発背景
  - 技術的な課題・解決方法
  - 学んだことと今後の改善点
- **関連リンク**:
  - GitHub リポジトリ
  - ソースコード閲覧
- 関連プロジェクトへのナビゲーション

#### **感情操作アクション・シューティング（動画紹介版）**
- プロジェクトタイトル + 説明
- **プレイ動画**: YouTube iframe 埋め込み
- **スクリーンショットギャラリー**: 複数の画像スライダー
- 技術タグ / バッジ
- 詳細説明：
  - 開発背景
  - 技術的な課題・解決方法
  - マルチプラットフォーム対応の工夫
- **関連リンク**:
  - GitHub リポジトリ
  - YouTube チャンネル
- 関連プロジェクトへのナビゲーション

---

## 🛠️ 技術スタック

### **フロントエンド**
- **フレームワーク**: Next.js 14+ (TypeScript)
- **スタイリング**: Tailwind CSS + PostCSS
- **UI コンポーネント**: 自作（複雑さを避けるため、必要に応じて Headless UI）
- **アニメーション**: Framer Motion（軽量）
- **画像最適化**: Next.js Image コンポーネント

### **ホスティング・デプロイ**
- **ホスティング**: Vercel
- **DNS**: カスタムドメイン対応
- **CI/CD**: GitHub Actions（自動デプロイ）
- **CDN**: Vercel グローバルネットワーク

### **ゲームビルド**
- **オセロ・RTS**: Unity WebGL Export
- **感情操作アクション**: 外部連携（Python + C++）のため WebGL 非対応
- **シューティング**: C++ DxLib（Windows 実行ファイル）

### **動画・メディア**
- **プレイ動画ホスティング**: YouTube
- **画像**: Vercel `public/` ディレクトリ + Next.js Image 最適化

### **その他**
- **バージョン管理**: Git + GitHub
- **タイプチェック**: TypeScript Strict Mode
- **フォーマット**: Prettier + ESLint

---

## 📊 プロジェクトデータ定義

`/src/lib/projects.ts` に以下の構造でプロジェクトデータを一元管理：

```typescript
interface Project {
  id: string;                    // 'reversi', 'rts', 'action', 'shooting'
  title: string;
  shortDescription: string;      // ホーム画面用
  thumbnail: string;             // /images/projects/...
  technologies: Technology[];    // タグ/バッジ
  status: 'in-progress' | 'completed' | 'prototype';
  type: 'playable' | 'video';   // ブラウザ埋め込み or 動画紹介
  
  // 詳細ページ用
  fullDescription: string;       // 長い説明
  developmentBackground: string;
  teamSize: string;
  developmentPeriod: string;
  challenges: string[];
  solutions: string[];
  lessonsLearned: string;
  
  // ゲーム埋め込み or 動画
  gameEmbedUrl?: string;         // /games/reversi など
  youtubeVideoId?: string;
  
  // メディア
  screenshots: string[];         // 複数のスクリーンショット
  
  // リンク
  githubUrl: string;
  liveUrl?: string;
}

interface Technology {
  name: string;                  // 'Unity', 'WebGL', 'C#' 等
  icon?: string;                 // アイコン URL or emoji
  color?: string;                // バッジ色（Tailwind 色名）
}
```

---

## 🎬 動画アップロード計画

### **YouTube にアップロード予定**
1. **感情操作アクション** - プレイ動画（1～3 分）
2. **シューティング「夢幻暁紅談」** - プレイ動画（2～5 分）

**動画要件:**
- 解像度: 1080p（または 720p 以上）
- フォーマット: MP4
- タイトル: `[ゲームタイトル] - プレイ動画 - ゲームプログラマーポートフォリオ`
- 説明: 簡潔な概要 + リンク（ポートフォリオサイト、GitHub）
- タグ: ゲーム、プログラミング、ポートフォリオ、Unity, C++ 等

---

## 🚀 実装スケジュール

| フェーズ | 内容 | 想定期間 |
|---------|------|--------|
| **フェーズ 1** | Next.js 初期設定 + ディレクトリ構造 | 1 日 |
| **フェーズ 2** | ホーム・ナビゲーション・フッター実装 | 2～3 日 |
| **フェーズ 3** | プロジェクト詳細ページ実装 | 3～4 日 |
| **フェーズ 4** | Unity オセロ開発 + WebGL ビルド | 1～2 週間 |
| **フェーズ 5** | オセロ・RTS ゲーム埋め込みテスト | 2～3 日 |
| **フェーズ 6** | YouTube 動画アップロード + 埋め込み | 1～2 日 |
| **フェーズ 7** | Vercel デプロイ + 最終テスト | 1 日 |

---

## ✅ チェックリスト

### **サイト構築**
- [ ] Next.js プロジェクト初期化
- [ ] Tailwind CSS セットアップ
- [ ] ナビゲーション・ヘッダー・フッター実装
- [ ] プロジェクトカード実装
- [ ] 詳細ページテンプレート作成
- [ ] TechBadge コンポーネント実装
- [ ] レスポンシブ対応（モバイル・タブレット・PC）
- [ ] ダークモード対応
- [ ] SEO 最適化（メタタグ、OpenGraph）

### **ゲーム関連**
- [ ] Unity オセロ開発完了
- [ ] Unity オセロ WebGL ビルド出力
- [ ] オセロ・RTS iframe 埋め込みテスト
- [ ] YouTube 動画（アクション）アップロード
- [ ] YouTube 動画（シューティング）アップロード
- [ ] スクリーンショット取得・最適化

### **デプロイ・運用**
- [ ] GitHub リポジトリに全ファイルプッシュ
- [ ] Vercel と GitHub を連携
- [ ] Vercel 自動デプロイ設定
- [ ] カスタムドメイン設定（CNAME）
- [ ] HTTPS 確認
- [ ] ライティングテスト（リンク・埋め込み検証）
- [ ] パフォーマンス測定（Lighthouse）

---

## 📝 注記

- **表に出せないゲーム**: 政治ネタのミニゲーム「遺憾の意」は掲載なし（採用企業への印象配慮）
- **未実装機能**: AI 対戦機能は MVP 完成後の改善フェーズで検討
- **WebGL ビルド最適化**: 初回は動作確認を優先；ビルドサイズ・読み込み速度の最適化は段階的に実施

---

*Last Updated: 2026-01-26*
