export default function CategoryFilter({ categories = [], value, onChange }) {
  return (
    <div className="category-filter">
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">All Categories</option>
        {categories.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
    </div>
  )
}
