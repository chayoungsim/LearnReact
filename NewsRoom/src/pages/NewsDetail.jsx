import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom' 

const NewsDetail = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const article = location.state?.article || null


    // 만약 직접 URL로 진입했다면 article 데이터가 없을 수 있습니다.
    // 이 경우 사용자에게 안내하고 홈으로 되돌아가도록 합니다.


    if (!article) {
        return (
            <div>
                <p>이 페이지는 직접 접근할 수 없습니다. 뉴스 목록에서 항목을 클릭해 주세요.</p>
                <button onClick={() => navigate(-1)} style={{ padding: '8px 12px', borderRadius: 6 }}>
                뒤로
                </button>
            </div>
            )
    }


    const { title, content, description, urlToImage, url, source, publishedAt, author } = article


    return (
    <article style={{ maxWidth: 900, margin: '0 auto' }}>
        <button onClick={() => navigate(-1)} style={{ marginBottom: 12, padding: '6px 10px', borderRadius: 6 }}>목록으로</button>
        {urlToImage && <img src={urlToImage} alt={title} style={{ width: '100%', height: 360, objectFit: 'cover', borderRadius: 8 }} />}
        <h1 style={{ marginTop: 12 }}>{title}</h1>
        <div style={{ color: '#666', marginBottom: 12 }}>
        <span>{source?.name}</span>
        {author && <span> · {author}</span>}
        <span> · {new Date(publishedAt).toLocaleString()}</span>
        </div>
        <p style={{ fontSize: 18 }}>{description}</p>
        <div style={{ whiteSpace: 'pre-wrap', lineHeight: 1.6 }}>{content || '전체 내용은 원문을 눌러 확인하세요.'}</div>
        <div style={{ marginTop: 16 }}>
        <a href={url} target="_blank" rel="noopener noreferrer">
        <button style={{ padding: '8px 12px', borderRadius: 6, background: '#2b6cb0', color: '#fff', border: 'none' }}>원문 보기</button>
        </a>
        </div>
    </article>
    )
}

export default NewsDetail