import React from 'react'

const categories = ['general','business','entertainment','health','science','sports','technology'];

const Categories = ({active, onChange}) => {

  return (
    <nav>
      {categories.map(c => (
        <button
          key={c}
          onClick={() => onChange(c)}
          aria-pressed={c === active}
          style={{ marginRight: 8, fontWeight: c===active ? '600' : '400' }}
        >
          {c}
        </button>
      ))}
    </nav>
  )
}

export default Categories