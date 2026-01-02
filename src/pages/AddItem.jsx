import React, { useEffect, useState } from 'react'
import { API_URL } from '../services/api'
import '../styles/admin.css'
import { useNavigate } from 'react-router-dom'

export default function AddItem() {
  const [itemCode, setItemCode] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [brand, setBrand] = useState('')
  const [price, setPrice] = useState('')
  const [imgUrl, setImgUrl] = useState('')
  const [categories, setCategories] = useState([])
  const [status, setStatus] = useState(null)
  const [imgError, setImgError] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    async function loadCategories() {
      try {
        const res = await fetch(`${API_URL}/getcategorylist`)
        if (!res.ok) throw new Error('Failed to fetch categories')
        const data = await res.json()
        const list = Array.isArray(data) ? data.map((c) => (typeof c === 'string' ? c : c.name || '')) : []
        setCategories(list)
        if (list.length) setCategory(list[0])
      } catch (err) {
        console.error(err)
      }
    }

    loadCategories()
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus(null)
    const item = {
      itemCode: parseInt(itemCode, 10),
      name,
      description,
      category,
      brand,
      price: parseFloat(price),
      imgUrl,
    }

    try {
      const res = await fetch(`${API_URL}/additem`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item),
      })
      if (!res.ok) throw new Error('Failed to add item')
      setStatus('Item added successfully')
      setItemCode('')
      setName('')
      setDescription('')
      setBrand('')
      setPrice('')
      setImgUrl('')
      setCategory(categories[0] || '')
    } catch (err) {
      console.error(err)
      setStatus('Error adding item')
    }
  }

  return (
    <div className="admin-page">
      <div className="admin-card">
        <h2>Add Item (Admin)</h2>
        <form className="admin-form" onSubmit={handleSubmit}>
          <div style={{ position: 'relative', zIndex: 99999, pointerEvents: 'auto' }}>
          <label>Item Code (integer)</label>
          <input type="number" value={itemCode} onChange={(e) => setItemCode(e.target.value)} required />

          <label>Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} required />

          <label>Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={4} />

          <label>Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="" disabled>
              -- Select category --
            </option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          <label>Brand</label>
          <input value={brand} onChange={(e) => setBrand(e.target.value)} />

          <label>Price</label>
          <input type="number" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} />

          <label>Image URL</label>
          <input
            value={imgUrl}
            onChange={(e) => {
              setImgUrl(e.target.value)
              setImgError(false)
            }}
          />

          <div className="image-preview">
            {imgUrl ? (
              <img
                src={imgUrl}
                alt="Preview"
                onError={() => setImgError(true)}
                onLoad={() => setImgError(false)}
              />
            ) : (
              <div className="image-placeholder">No image</div>
            )}

            {imgError && <div className="image-error">Unable to load image</div>}
          </div>

          <div className="admin-actions">
            <button className="btn primary" type="submit">
              Add Item
            </button>
            <button
              type="button"
              className="btn secondary"
              onClick={() => {
                setItemCode('')
                setName('')
                setDescription('')
                setBrand('')
                setPrice('')
                setImgUrl('')
                setImgError(false)
                setCategory(categories[0] || '')
              }}
            >
              Reset
            </button>
            <button
              type="button"
              className="btn secondary"
              onClick={() => navigate('/admin/add-category')}
            >
              Go to Add Category
            </button>
          </div>
          </div>
        </form>

        {status && (
          <div className="status">
            <strong>{status}</strong>
          </div>
        )}
      </div>
    </div>
  )
}
