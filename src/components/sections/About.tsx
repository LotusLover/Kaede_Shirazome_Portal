import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* プロフィール画像エリア */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl overflow-hidden border border-gray-700">
              {/* プロフィール画像 */}
              <Image
                src="/images/projects/Kaede_S_icon.png"
                alt="Kaede Shirazome Profile"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            {/* デコレーション */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/30 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-500/20 rounded-full blur-2xl"></div>
          </div>

          {/* テキストコンテンツ */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              自己紹介
            </h2>
            
            <div className="space-y-4 text-gray-300">
              <p>
                ゲームプログラマーとして、Unity や C++ を使用したゲーム開発に取り組んでいます。
              </p>
              
              <p>
                リアルタイム処理、ネットワーク同期、弾幕システムなど、
                ゲーム開発における様々な技術的課題に挑戦し、解決してきました。
              </p>

              <p>
                「夢幻暁紅談」では、プログラムだけでなく立ち絵・背景・音楽・シナリオまで
                全て自作するなど、ゲーム制作の全工程を経験しています。
              </p>

              <p>
                研究では、感情認識を活用したゲーム操作システムの開発にも取り組み、
                Python・C++・C# といった複数の技術スタックを統合するスキルを磨いています。
              </p>
            </div>

            {/* スキルハイライト */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <div className="text-purple-400 font-semibold mb-1">得意分野</div>
                <div className="text-gray-400 text-sm">
                  ゲームロジック、リアルタイム処理、ネットワーク同期
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <div className="text-pink-400 font-semibold mb-1">開発スタイル</div>
                <div className="text-gray-400 text-sm">
                  全工程を一人で完遂できる総合力
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
