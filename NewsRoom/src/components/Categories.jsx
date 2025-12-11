import { NavLink } from 'react-router-dom';

const categories = [
  { name: "general", text: "일반" },
  { name: "business", text: "비즈니스" },
  { name: "entertainment", text: "엔터테인먼트" },
  { name: "health", text: "건강" },
  { name: "science", text: "과학" },
  { name: "sports", text: "스포츠" },
  { name: "technology", text: "기술" },
];

const Categories = () => {
  return (
    <nav className="categories">
        {categories.map((c) => (
            <NavLink 
              key={c.name} 
              to={`/category/${c.name}`}
              className={({isActive})=>(isActive ? 'category active' : "category")}>
                {c.text}
            </NavLink>
        ))}
    </nav>
  )
}

export default Categories