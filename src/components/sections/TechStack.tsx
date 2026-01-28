import { TECHNOLOGIES } from '@/lib/projects';

// 技術スタックをカテゴリ別に整理
const techCategories = [
  {
    name: 'ゲームエンジン',
    items: [TECHNOLOGIES.unity, TECHNOLOGIES.dxlib],
  },
  {
    name: 'プログラミング言語',
    items: [TECHNOLOGIES.csharp, TECHNOLOGIES.cpp, TECHNOLOGIES.python],
  },
  {
    name: 'Web 技術',
    items: [TECHNOLOGIES.webgl],
  },
  {
    name: '専門分野',
    items: [
      TECHNOLOGIES.network,
      TECHNOLOGIES.multiplayer,
      TECHNOLOGIES.sync,
      TECHNOLOGIES.gamelogic,
      TECHNOLOGIES.danmaku,
      TECHNOLOGIES.graphics,
    ],
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            技術スタック
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            ゲーム開発で使用している技術とツール
          </p>
        </div>

        {/* カテゴリ別技術表示 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category) => (
            <div
              key={category.name}
              className="bg-gray-800/50 rounded-xl p-6 border border-gray-700"
            >
              <h3 className="text-lg font-semibold text-white mb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((tech, index) => (
                  <span
                    key={index}
                    className={`${tech.color} px-3 py-1.5 rounded-lg text-sm font-medium transition-transform hover:scale-105`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* スキルレベルインジケーター（オプション） */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">4+</div>
            <div className="text-gray-400">開発プロジェクト</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">5+</div>
            <div className="text-gray-400">使用言語・エンジン</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">2+</div>
            <div className="text-gray-400">WebGL ゲーム</div>
          </div>
        </div>
      </div>
    </section>
  );
}
