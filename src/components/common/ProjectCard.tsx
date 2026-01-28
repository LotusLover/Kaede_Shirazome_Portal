import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/lib/types';
import TechBadge from './TechBadge';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
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

  const typeLabels = {
    playable: '🎮 プレイ可能',
    video: '🎬 動画紹介',
  };

  return (
    <Link href={`/projects/${project.id}`}>
      <div className="group relative bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1">
        {/* サムネイル */}
        <div className="relative h-48 bg-gray-700 overflow-hidden">
          {project.thumbnail ? (
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          )}

          {/* ステータスバッジ */}
          <div className="absolute top-3 left-3 flex gap-2">
            <span className={`${statusColors[project.status]} text-white text-xs px-2 py-1 rounded-full font-medium`}>
              {statusLabels[project.status]}
            </span>
          </div>

          {/* タイプラベル */}
          <div className="absolute top-3 right-3">
            <span className="bg-gray-900/80 text-white text-xs px-2 py-1 rounded-full">
              {typeLabels[project.type]}
            </span>
          </div>
        </div>

        {/* コンテンツ */}
        <div className="p-5">
          <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
            {project.title}
          </h3>
          {project.titleEn && (
            <p className="text-xs text-gray-500 mt-0.5">{project.titleEn}</p>
          )}
          <p className="text-gray-400 text-sm mt-2 line-clamp-2">
            {project.shortDescription}
          </p>

          {/* 技術タグ */}
          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.technologies.slice(0, 4).map((tech, index) => (
              <TechBadge key={index} tech={tech} size="sm" />
            ))}
            {project.technologies.length > 4 && (
              <span className="text-gray-500 text-xs px-2 py-0.5">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* 詳細を見るボタン */}
          <div className="mt-4 flex items-center text-purple-400 text-sm font-medium group-hover:text-purple-300">
            詳細を見る
            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
