import { PROJECTS } from '@/lib/projects';
import ProjectCard from '@/components/common/ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">作品と技術</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            ゲームの試遊準備と、技術を再現できるサンプルを紹介します。
            開発中のものは、確認できたことと未確認のことを分けて案内しています。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <article className="rounded-2xl border border-emerald-700/60 bg-emerald-950/40 p-6 sm:p-8">
            <p className="text-sm text-emerald-300 mb-3">ゲームを体験したい方へ</p>
            <h3 className="text-2xl font-bold text-white mb-3">ActionTri：身体入力と街の陣取り</h3>
            <p className="text-gray-300 leading-relaxed mb-5">
              身体の動き・手・声を操作につなぎ、都市の中で陣地を競う試作です。
              紹介資料と試遊条件を整理しています。身体入力や別PCの受入は個別に確認します。
            </p>
            <a href="https://github.com/LotusLover/Phantasma/issues/1" target="_blank" rel="noopener noreferrer"
              className="inline-flex rounded-lg bg-emerald-300 px-4 py-3 font-semibold text-emerald-950 hover:bg-emerald-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-200">
              試遊準備と確認状況を見る ↗
            </a>
          </article>
          <article className="rounded-2xl border border-sky-700/60 bg-sky-950/40 p-6 sm:p-8">
            <p className="text-sm text-sky-300 mb-3">技術を試したい方へ</p>
            <h3 className="text-2xl font-bold text-white mb-3">API費用を、推計できる形に</h3>
            <p className="text-gray-300 leading-relaxed mb-5">
              使用量と単価から費用を計算する、小さな独立サンプルを準備しています。
              API通信なしで動き、同梱データは仮想例です。現行の価格や実測請求ではありません。
            </p>
            <a href="https://github.com/LotusLover/Phantasma/pull/8" target="_blank" rel="noopener noreferrer"
              className="inline-flex rounded-lg bg-sky-300 px-4 py-3 font-semibold text-sky-950 hover:bg-sky-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-200">
              サンプルと資料の変更案を見る ↗
            </a>
            <p className="text-sm text-gray-400 mt-4">レビュー中・販売前の資料です。</p>
          </article>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {PROJECTS.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </div>
    </section>
  );
}
