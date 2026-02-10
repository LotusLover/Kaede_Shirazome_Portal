import { SOCIAL_LINKS } from '@/lib/projects';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          {/* セクションヘッダー */}
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            連絡先
          </h2>
          <p className="text-gray-400 mb-8">
            お仕事のご依頼やご質問など、お気軽にお問い合わせください。
          </p>

          {/* コンタクトカード */}
          <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
            {/* メールアドレス */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-full mb-4">
                <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">メール</h3>
              <a
                href="mailto:kaedeshirazome.0th.ssk@gmail.com"
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                kaedeshirazome.0th.ssk@gmail.com
              </a>
              <p className="text-gray-500 text-sm mt-1">
                ※ メールアドレスは後で更新してください
              </p>
            </div>

            {/* ソーシャルリンク */}
            <div className="border-t border-gray-700 pt-8">
              <h3 className="text-lg font-semibold text-white mb-4">SNS</h3>
              <div className="flex justify-center space-x-6">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center"
                  >
                    <div className="w-12 h-12 bg-gray-700 group-hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors">
                      {link.icon === 'github' && (
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                    <span className="text-gray-400 text-sm mt-2 group-hover:text-white transition-colors">
                      {link.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* 追加メッセージ */}
          <p className="text-gray-500 text-sm mt-8">
            ゲーム開発のお仕事、共同開発のご相談など、お待ちしております。SEGAいきたい
          </p>
        </div>
      </div>
    </section>
  );
}
