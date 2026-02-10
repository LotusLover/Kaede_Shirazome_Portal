import { Project, Technology, SocialLink } from './types';

// 技術タグの定義
export const TECHNOLOGIES: Record<string, Technology> = {
  unity: { name: 'Unity', color: 'bg-gray-800 text-white' },
  webgl: { name: 'WebGL', color: 'bg-red-600 text-white' },
  csharp: { name: 'C#', color: 'bg-purple-600 text-white' },
  cpp: { name: 'C++', color: 'bg-blue-600 text-white' },
  python: { name: 'Python', color: 'bg-yellow-500 text-black' },
  dxlib: { name: 'DxLib', color: 'bg-green-600 text-white' },
  network: { name: 'ネットワーク', color: 'bg-cyan-600 text-white' },
  multiplayer: { name: 'マルチプレイ', color: 'bg-indigo-600 text-white' },
  sync: { name: '同期処理', color: 'bg-pink-600 text-white' },
  emotion: { name: '感情認識', color: 'bg-rose-500 text-white' },
  multimodal: { name: 'マルチモーダル', color: 'bg-amber-600 text-white' },
  danmaku: { name: '弾幕システム', color: 'bg-orange-600 text-white' },
  graphics: { name: 'グラフィックス', color: 'bg-teal-600 text-white' },
  multimedia: { name: 'マルチメディア', color: 'bg-violet-600 text-white' },
  gamelogic: { name: 'ゲームロジック', color: 'bg-emerald-600 text-white' },
  c: { name: 'C', color: 'bg-gray-600 text-white' },
  openmp: { name: 'OpenMP', color: 'bg-fuchsia-600 text-white' },
  numerical: { name: '数値計算', color: 'bg-emerald-500 text-white' },
  uiux: { name: 'UI/UX', color: 'bg-sky-600 text-white' },
};

// プロジェクトデータ
export const PROJECTS: Project[] = [
  {
    id: 'reversi',
    title: 'リアルタイムオセロ',
    titleEn: 'Real-Time Reversi',
    shortDescription: 'ターン制ではなく、リアルタイムで素早くピースを配置・反転する新感覚オセロ',
    thumbnail: '/images/projects/reversi-hero.png',
    technologies: [
      TECHNOLOGIES.unity,
      TECHNOLOGIES.webgl,
      TECHNOLOGIES.csharp,
      TECHNOLOGIES.gamelogic,
      TECHNOLOGIES.uiux,
    ],
    status: 'in-progress',
    type: 'playable',
    fullDescription: `
      従来のターン制オセロとは異なり、プレイヤーが自由なタイミングでピースを配置できる
      リアルタイム対戦型オセロゲームです。素早い判断力と戦略性が求められます。
    `,
    developmentBackground: `
      WebGL を活用したブラウザゲームの開発スキルを示すために新規開発。
      クライアント側でのゲームロジック実装とリアルタイム入力処理の実装経験を積むことが目的。
    `,
    teamSize: '1人（個人開発）',
    developmentPeriod: '開発中',
    challenges: [
      'リアルタイム入力と盤面更新の同期',
      'スムーズな反転アニメーション',
      'WebGL ビルドサイズの最適化',
    ],
    solutions: [
      'Unity の Update ループを活用した入力処理',
      'コルーチンによるアニメーション制御',
      '最適化は動作確認後に段階的に実施予定',
    ],
    lessonsLearned: '開発中のため、完成後に追記予定',
    gameEmbedUrl: '/games/reversi/index.html',
    screenshots: [],
    githubUrl: '',
  },
  {
    id: 'rts',
    title: 'オンライン RTS',
    titleEn: 'PieceCrash! Online RTS',
    shortDescription: 'WW2 をモチーフとしたオンラインリアルタイムストラテジーゲーム',
    thumbnail: '/images/projects/Sumbnail_RTS.png',
    technologies: [
      TECHNOLOGIES.unity,
      TECHNOLOGIES.webgl,
      TECHNOLOGIES.csharp,
      TECHNOLOGIES.network,
      TECHNOLOGIES.multiplayer,
      TECHNOLOGIES.sync,
    ],
    status: 'in-progress',
    type: 'playable',
    fullDescription: `
      WW2 の日米の戦いをモチーフとしたオンラインリアルタイムストラテジーゲーム。
      複数プレイヤーがリアルタイムで対戦し、戦略的なユニット配置と操作で勝利を目指します。
    `,
    developmentBackground: `
      ネットワークプログラミングとマルチプレイヤー同期処理の経験を積むために開発。
      リアルタイム通信における遅延対策や状態同期の課題に取り組んでいます。
    `,
    teamSize: '1人（個人開発）',
    developmentPeriod: '開発中（同期処理調整中）',
    challenges: [
      '複数クライアント間の状態同期',
      'ネットワーク遅延への対応',
      'ゲームバランスの調整',
    ],
    solutions: [
      'サーバー権威型のアーキテクチャ採用',
      'クライアント予測と補間処理の実装',
      'プレイテストを通じた継続的な調整',
    ],
    lessonsLearned: 'ネットワーク同期の複雑さと、それに対する様々なアプローチを学習中',
    gameEmbedUrl: '/games/rts/index.html',
    screenshots: ['/images/projects/Sumbnail_RTS.png'],
    githubUrl: '',
  },
  {
    id: 'action',
    title: '感情操作アクション',
    titleEn: 'Emotion-Controlled Action',
    shortDescription: '表情・声色から推測した感情でキャラクターを操作して戦うアクションゲーム',
    thumbnail: '/images/projects/Sumbnail_3DAction.png',
    technologies: [
      TECHNOLOGIES.unity,
      TECHNOLOGIES.csharp,
      TECHNOLOGIES.python,
      TECHNOLOGIES.cpp,
      TECHNOLOGIES.emotion,
      TECHNOLOGIES.multimodal,
    ],
    status: 'in-progress',
    type: 'video',
    fullDescription: `
      プレイヤーの顔の表情や声色をリアルタイムで解析し、推測された感情に応じて
      キャラクターの動きや攻撃が変化するアクションゲームです。
      研究プロジェクトとして開発中。
      AIがさらに進化する未来も見据え、製作に積極的にAIを用いて効率化をどのように進めるかも同時に研究しています。
    `,
    developmentBackground: `
      マルチモーダル入力（画像・音声）を活用したゲーム操作システムの研究として開発。
      感情認識技術とゲームプレイの融合による新しいゲーム体験の創出を目指しています。
    `,
    teamSize: '2人（研究開発） もう一人は音声感情認識モデル担当 自分はそれ以外のすべて',
    developmentPeriod: '開発中（操作システム調整中）',
    challenges: [
      '感情認識の精度向上',
      'Python/C++ と Unity の連携',
      'リアルタイム処理のパフォーマンス最適化',
    ],
    solutions: [
      '機械学習モデルのチューニング',
      'プロセス間通信による言語間連携',
      '処理の並列化と最適化',
    ],
    lessonsLearned: '異なる技術スタック（Python・C++・C#）の統合と、リアルタイム処理の難しさを実感',
    youtubeVideoId: 'VnsfBGetYkU', // YouTube アップロード後に設定
    screenshots: ['/images/projects/Sumbnail_3DAction.png'],
    githubUrl: '',
  },
  {
    id: 'shooting',
    title: '夢幻暁紅談',
    titleEn: 'The Eastean Sun In Phantasy Stars',
    shortDescription: '完全自作の弾幕シューティング。立ち絵・背景・音楽・シナリオも自作',
    thumbnail: '/images/projects/SS_gyoukoudan5.png',
    technologies: [
      TECHNOLOGIES.cpp,
      TECHNOLOGIES.dxlib,
      TECHNOLOGIES.danmaku,
      TECHNOLOGIES.graphics,
      TECHNOLOGIES.multimedia,
    ],
    status: 'in-progress',
    type: 'video',
    fullDescription: `
      完全に自力でコーディングした弾幕シューティングゲーム。
      プログラムだけでなく、立ち絵・背景・音楽・シナリオまで全て自作しています。
      大規模なゲームを一人で完全実装する挑戦。
    `,
    developmentBackground: `
      ゲームプログラミングの基礎から応用まで、全ての工程を一人で経験するために開発。
      C++ と DxLib を使用し、低レイヤーからのゲーム開発スキルを磨いています。
    `,
    teamSize: '1人（完全個人開発）',
    developmentPeriod: 'プログラム完成済み（ステージ・音楽制作中）',
    challenges: [
      '大量の弾幕オブジェクトの効率的な管理',
      '高専4年以降のモダン C++ と以前の従来 C スタイルの混在から成長が見える',
      'マルチメディアコンテンツの自作',
    ],
    solutions: [
      'オブジェクトプールによるメモリ管理最適化',
      '段階的なコードリファクタリング',
      'フリーツールと自作ツールの組み合わせ',
    ],
    lessonsLearned: '大規模プロジェクトの管理と、マルチメディア制作を含む総合的なゲーム開発経験を獲得',
    youtubeVideoId: 'Kgr82Xwmqvk', // YouTube アップロード後に設定
    screenshots: ['/images/projects/SS_gyoukoudan5.png'],
    githubUrl: '',
  },
  {
    id: 'pi',
    title: '高精度円周率計算プログラム',
    titleEn: 'High-Precision Pi Calculator',
    shortDescription: '授業課題を拡張し、Cで独自の多倍長整数演算とOpenMP並列化を実装して4000桁以上を計算',
    thumbnail: '/images/projects/Thumbnail_Pi.png',
    technologies: [
      TECHNOLOGIES.c,
      TECHNOLOGIES.openmp,
      TECHNOLOGIES.numerical,
    ],
    status: 'completed',
    type: 'video',
    fullDescription: `
      高専の授業課題（Adamchik-Wagon公式で円周率1000桁）を拡張し、C言語で多倍長整数演算ライブラリを自作して
      4000桁以上のπを計算しました。OpenMPによる並列化を行い、性能改善にも取り組みました。
      あえてFFTやGPUを使わない実装に挑戦しました。
    `,
    developmentBackground: `
      授業の指定は「1変数1桁の実装」でしたが、効率と拡張性を求めて32ビット単位の多倍長表現と基数変換を実装しました。
      数値アルゴリズムの実装と並列化の実験が主な目的です。
    `,
    teamSize: '1人（授業課題の拡張）',
    developmentPeriod: '高専3年（授業プロジェクト）',
    challenges: [
      '多倍長整数の正確なキャリー/ボロー処理の実装',
      '2進数↔10進数の基数変換とその性能',
      '計算精度と並列化の両立',
    ],
    solutions: [
      '32ビット配列に基づく効率的なキャリー処理の実装',
      '段階的な基数変換処理の実装・検証',
      'OpenMP を用いた並列処理と結果検証',
    ],
    lessonsLearned: 'FFTなしの限界を体感し、高精度計算には高速乗算アルゴリズムの重要性を理解しました。',
    youtubeVideoId: '', // 後でデモ動画をアップロードして設定
    screenshots: ['/images/projects/Thumbnail_Pi.png'],
    githubUrl: 'https://github.com/LotusLover/algo_py',
  },
];

// ソーシャルリンク
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/LotusLover',
    icon: 'github',
  },
  // 必要に応じて追加
];

// サイト情報
export const SITE_CONFIG = {
  title: 'Kaede Shirazome Portfolio',
  description: 'ポートフォリオサイト',
  author: 'Kaede Shirazome',
  url: 'https://kaede-shirazome-portal.vercel.app', // Vercel デプロイ後に更新
};
