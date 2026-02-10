import Link from 'next/link';
import { SOCIAL_LINKS } from '@/lib/projects';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* ロゴ・説明 */}
          <div className="col-span-1">
            <Link href="/" className="text-xl font-bold text-white hover:text-purple-400 transition-colors">
              🎮 Kaede Portfolio
            </Link>
            <p className="mt-4 text-gray-400 text-sm">
              LotusLoverのポートフォリオサイト。
              Unity、C++、WebGL を使用したゲーム開発プロジェクトを紹介しています。
            </p>
          </div>

          {/* ナビゲーション */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">ナビゲーション</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  ホーム
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="text-gray-400 hover:text-white transition-colors text-sm">
                  プロジェクト
                </Link>
              </li>
              <li>
                <Link href="/#tech-stack" className="text-gray-400 hover:text-white transition-colors text-sm">
                  技術スタック
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  自己紹介
                </Link>
              </li>
            </ul>
          </div>

          {/* ソーシャルリンク */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">リンク</h3>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={link.name}
                >
                  {link.icon === 'github' && (
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* コピーライト */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400 text-sm">
            © {currentYear} Kaede Shirazome. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
