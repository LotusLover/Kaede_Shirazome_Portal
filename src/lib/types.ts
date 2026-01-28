// プロジェクトデータの型定義

export interface Technology {
  name: string;
  icon?: string;
  color: string; // Tailwind 色クラス名
}

export interface Project {
  id: string;
  title: string;
  titleEn?: string;
  shortDescription: string;
  thumbnail: string;
  technologies: Technology[];
  status: 'in-progress' | 'completed' | 'prototype';
  type: 'playable' | 'video';

  // 詳細ページ用
  fullDescription: string;
  developmentBackground: string;
  teamSize: string;
  developmentPeriod: string;
  challenges: string[];
  solutions: string[];
  lessonsLearned: string;

  // ゲーム埋め込み or 動画
  gameEmbedUrl?: string;
  youtubeVideoId?: string;

  // メディア
  screenshots: string[];

  // リンク
  githubUrl?: string;
  liveUrl?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
