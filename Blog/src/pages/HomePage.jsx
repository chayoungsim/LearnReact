import React, { useState, useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { Button } from 'react-bootstrap';
import usePosts from "../hooks/usePosts";
import { deletePost } from "../api/posts";

const HomePage = () => {

  const { posts, isLoading, error, reload } = usePosts();
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    if (!confirm("삭제하시겠습니까?")) return;
    try {
      await deletePost(id);
      // JSONPlaceholder은 실제 삭제를 영구 저장하지 않지만, UI상에서 제거
      alert("삭제 요청 전송 완료(더미 API). 리스트 새로고침합니다.");
      reload();
    } catch (e) {
      console.error(e);
      alert("삭제 실패");
    }
  };

  if (isLoading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;


    const handleClickNew = () => {
        navigate("/new");
    }

  return (
    <div className='blog-wrap'>
        <h1>블로그 게시물</h1>
        <div className='btns'>            
            <Button variant="info" onClick={handleClickNew}>새글작성</Button>
        </div> 
        <ul className="post-list">
        {posts.slice(0, 20).map((p) => ( // JSONPlaceholder 데이터가 많으니 일부만 표시
          <li key={p.id} className="post-item">
            <Link to={`/posts/${p.id}`}>
              {p.title}
            </Link>
            {/* <div className="post-actions">
              <button onClick={() => navigate(`/edit/${p.id}`)}>수정</button>
              <button onClick={() => handleDelete(p.id)}>삭제</button>
            </div> */}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HomePage