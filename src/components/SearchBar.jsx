export default function SearchBar({ value, onChange, placeholder = 'Search products...' }) {
  return (
    <div className="search">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="search"
      />
    </div>
  )
}
