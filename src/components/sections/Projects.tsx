import { PROJECTS } from '@/lib/projects';
import ProjectCard from '@/components/common/ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            プロジェクト
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            開発中および完成したゲームプロジェクトを紹介します。
            ブラウザで直接プレイできるものや、動画で紹介しているものがあります。
          </p>
        </div>

        {/* プロジェクトグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
