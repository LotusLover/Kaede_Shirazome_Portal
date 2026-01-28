import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { PROJECTS } from '@/lib/projects';
import TechBadge from '@/components/common/TechBadge';

interface PageProps {
  params: Promise<{ id: string }>;
}

// 静的パスを生成
export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }));
}

// メタデータ生成
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);
  
  if (!project) {
    return {
      title: 'プロジェクトが見つかりません',
    };
  }

  return {
    title: `${project.title} | Kaede Portfolio`,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const statusLabels = {
    'in-progress': '開発中',
    completed: '完成',
    prototype: 'プロトタイプ',
  };

  const statusColors = {
    'in-progress': 'bg-yellow-500',
    completed: 'bg-green-500',
    prototype: 'bg-blue-500',
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      {/* ヘッダー */}
      <section className="py-12 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* パンくずリスト */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  ホーム
                </Link>
              </li>
              <li>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li>
                <Link href="/#projects" className="hover:text-white transition-colors">
                  プロジェクト
                </Link>
              </li>
              <li>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li className="text-white">{project.title}</li>
            </ol>
          </nav>

          {/* タイトルとステータス */}
          <div className="flex flex-wrap items-start gap-4 mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              {project.title}
            </h1>
            <span className={`${statusColors[project.status]} text-white text-sm px-3 py-1 rounded-full font-medium`}>
              {statusLabels[project.status]}
            </span>
          </div>

          {project.titleEn && (
            <p className="text-gray-400 text-lg mb-4">{project.titleEn}</p>
          )}

          <p className="text-gray-300 text-lg mb-6">{project.shortDescription}</p>

          {/* 技術タグ */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <TechBadge key={index} tech={tech} size="md" />
            ))}
          </div>
        </div>
      </section>

      {/* ゲーム埋め込み / 動画 */}
      <section className="py-12 bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {project.type === 'playable' && project.gameEmbedUrl ? (
            <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700">
              <div className="bg-gray-900 px-4 py-3 border-b border-gray-700 flex items-center justify-between">
                <span className="text-white font-medium">🎮 ゲームをプレイ</span>
                <span className="text-gray-400 text-sm">
                  ※ WebGL ビルド配置後に表示されます
                </span>
              </div>
              <div className="aspect-video bg-gray-900 flex items-center justify-center">
                {/* Unity WebGL ビルド配置後にコメントを解除 */}
                {/* <iframe
                  src={project.gameEmbedUrl}
                  className="w-full h-full"
                  allowFullScreen
                /> */}
                <div className="text-center text-gray-500 p-8">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-lg mb-2">ゲーム準備中</p>
                  <p className="text-sm">Unity WebGL ビルドを配置すると、ここでプレイできるようになります</p>
                </div>
              </div>
            </div>
          ) : project.type === 'video' ? (
            <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700">
              <div className="bg-gray-900 px-4 py-3 border-b border-gray-700">
                <span className="text-white font-medium">🎬 プレイ動画</span>
              </div>
              <div className="aspect-video bg-gray-900 flex items-center justify-center">
                {project.youtubeVideoId ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${project.youtubeVideoId}`}
                    className="w-full h-full"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                ) : (
                  <div className="text-center text-gray-500 p-8">
                    <svg className="w-16 h-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <p className="text-lg mb-2">動画準備中</p>
                    <p className="text-sm">YouTube にプレイ動画をアップロード後、ここに表示されます</p>
                  </div>
                )}
              </div>
            </div>
          ) : null}
        </div>
      </section>

      {/* プロジェクト詳細 */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* メインコンテンツ */}
            <div className="lg:col-span-2 space-y-8">
              {/* 概要 */}
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h2 className="text-xl font-bold text-white mb-4">概要</h2>
                <p className="text-gray-300 whitespace-pre-line">{project.fullDescription.trim()}</p>
              </div>

              {/* 開発背景 */}
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h2 className="text-xl font-bold text-white mb-4">開発背景</h2>
                <p className="text-gray-300 whitespace-pre-line">{project.developmentBackground.trim()}</p>
              </div>

              {/* 技術的な課題と解決 */}
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h2 className="text-xl font-bold text-white mb-4">技術的な課題と解決</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-purple-400 mb-2">課題</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {project.challenges.map((challenge, index) => (
                        <li key={index}>{challenge}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-green-400 mb-2">解決策</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {project.solutions.map((solution, index) => (
                        <li key={index}>{solution}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* 学んだこと */}
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h2 className="text-xl font-bold text-white mb-4">学んだこと</h2>
                <p className="text-gray-300">{project.lessonsLearned}</p>
              </div>
            </div>

            {/* サイドバー */}
            <div className="space-y-6">
              {/* プロジェクト情報 */}
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-4">プロジェクト情報</h3>
                <dl className="space-y-3">
                  <div>
                    <dt className="text-gray-400 text-sm">チーム規模</dt>
                    <dd className="text-white">{project.teamSize}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-400 text-sm">開発期間</dt>
                    <dd className="text-white">{project.developmentPeriod}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-400 text-sm">ステータス</dt>
                    <dd className="text-white">{statusLabels[project.status]}</dd>
                  </div>
                </dl>
              </div>

              {/* リンク */}
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-4">リンク</h3>
                <div className="space-y-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      GitHub リポジトリ
                    </a>
                  )}
                  {!project.githubUrl && (
                    <p className="text-gray-500 text-sm">
                      リポジトリは非公開または準備中です
                    </p>
                  )}
                </div>
              </div>

              {/* 他のプロジェクトへのリンク */}
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-4">他のプロジェクト</h3>
                <div className="space-y-2">
                  {PROJECTS.filter((p) => p.id !== project.id).slice(0, 3).map((p) => (
                    <Link
                      key={p.id}
                      href={`/projects/${p.id}`}
                      className="block text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      → {p.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 戻るボタン */}
      <section className="py-8 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/#projects"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            プロジェクト一覧に戻る
          </Link>
        </div>
      </section>
    </div>
  );
}
