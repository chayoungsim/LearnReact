import React from 'react'
import { Newspaper, Clock, TrendingUp, ArrowLeft } from 'lucide-react';

const NewsDetail = ({ article, onBack }) => {
  const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

  return (
    <div className="news-detail">
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            <ArrowLeft size={20} />
            목록으로 돌아가기
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className='photo-dt'>
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt={article.title}
                className="w-full h-96 object-cover"
              />
            )}
          </div>
          
          <div className="p-8">
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <span className="flex items-center gap-1">
                <Clock size={16} />
                {formatDate(article.publishedAt)}
              </span>
              {article.author && (
                <span>작성자: {article.author}</span>
              )}
            </div>
            
            <h1 className="text-4xl font-bold mb-6 text-gray-900">
              {article.title}
            </h1>
            
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              {article.description}
            </p>
            
            <div className="prose max-w-none text-gray-800 mb-8">
              {article.content ? (
                <p className="text-lg leading-relaxed">{article.content}</p>
              ) : (
                <p className="text-lg leading-relaxed">전체 기사는 원문 링크에서 확인하실 수 있습니다.</p>
              )}
            </div>
            
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              원문 보기 →
            </a>
            
            {article.source?.name && (
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-gray-600">
                  출처: <span className="font-semibold">{article.source.name}</span>
                </p>
              </div>
            )}
          </div>
        </article>
      </main>
    </div>
  )
}

export default NewsDetail