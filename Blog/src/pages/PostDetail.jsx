import React from 'react'
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { fetchPost } from "../api/posts";

const PostDetail = () => {
  const { id } = useParams(); //URL에서 id 추출
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const data = await fetchPost(id);
        if (mounted) setPost(data);
      } catch (e) {
        console.error(e);
        alert("데이터 로드 실패");
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => (mounted = false);
  }, [id]);

  if (loading) return <div>로딩중...</div>;
  if (!post) return <div>포스트를 찾을 수 없습니다.</div>;

  const handleList = () => {
    navigate(`/`);
  }


  

  return (
    <div>
      <h1>{post.title}</h1>
      <div className='post-contents'>        
        <p>{post.body}</p>
      </div>      
      <div className='btns'>
          {/* <Button variant="danger" onClick={handleDelete}>삭제하기</Button> */}
          <Button variant="warning" onClick={() => navigate(`/edit/${id}`)}>수정하기</Button>
          <Button variant="success" onClick={handleList}>목록으로</Button>      
      </div>
      
    </div>
  )
}

export default PostDetail