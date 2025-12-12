import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom' 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createPost, fetchPost, updatePost } from "../api/posts";

const NewPost = ({ editMode = false }) => {
    const { id } = useParams();
    // If route includes an `id` (e.g. /edit/:id), treat component as edit mode
    const isEditMode = editMode || Boolean(id);
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
    if (isEditMode && id) {
        setLoading(true);
        fetchPost(id)
            .then((p) => {
                setTitle(p.title);
                setBody(p.body);
            })
            .catch((e) => {
                console.error(e);
                alert("데이터 로드 실패");
            })
            .finally(() => setLoading(false));
        }
    }, [isEditMode, id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (isEditMode) {
                await updatePost(id, { id, title, body });
                alert("수정 요청 전송 완료(더미 API).");
            } else {
                await createPost({ title, body, userId: 1 });
                alert("작성 요청 전송 완료(더미 API).");
            }
            navigate("/");
        } catch (e) {
            console.error(e);
            alert("요청 실패");
        } finally {
            setLoading(false);
        }
  };


  return (
    <div>
        <h1>{editMode ? "글 수정" : "새 글 작성"}</h1>
        <Form onSubmit={handleSubmit} className='form-wrap'>
            <Form.Group className="mb-3">
                <Form.Label>제목:</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="제목을 입력하세요"                     
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>내용:</Form.Label>
                <Form.Control as="textarea" rows={3} 
                    placeholder="내용을 입력하세요"   
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                />
            </Form.Group>
            <div className='btns'>
                <Button variant="primary" type="submit" disabled={loading}>{loading ? "요청중..." : editMode ? "수정" : "작성"}</Button>
                <Button variant="secondary" type="button" onClick={() => navigate(-1)}> 취소 </Button>
            </div>    
        </Form>
    </div>
  )
}

export default NewPost