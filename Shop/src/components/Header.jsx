
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useSearchParams } from 'react-router-dom';
import CategoryMenu from './CategoryMenu';

const Header = () => {

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const search = (e) => {
      if(e.key == "Enter") {
          let keyword = e.target.value

        // 기존 쿼리 파라미터 유지
        const params = new URLSearchParams(searchParams);
        
        if (keyword.trim()) {
          params.set("q", keyword);
        } else {
          params.delete("q");
        }
        navigate(`/products?q=${keyword}`)
      }
  }

  return (
    <header>
      <h1>
        <Link to="/">
          <img
            width={100}
            src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-1999-present.jpg"
          />
        </Link></h1>
        <CategoryMenu />
        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="제품검색"  onKeyDown={(e) => search(e)} />
        </div>
    </header>
  )
}

export default Header