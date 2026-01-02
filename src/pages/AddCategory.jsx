import React, { useState } from 'react'
import { API_URL } from '../services/api'
import '../styles/admin.css'
import { useNavigate } from 'react-router-dom'

export default function AddCategory() {
  const [name, setName] = useState('')
  const [status, setStatus] = useState(null)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus(null)
    const category = { name }
    try {
      const res = await fetch(`${API_URL}/addcategory`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(category),
      })
      if (!res.ok) throw new Error('Failed to add category')
      setStatus('Category added')
      setName('')
    } catch (err) {
      console.error(err)
      setStatus('Error adding category')
    }
  }

  return (
    <div className="admin-page">
      <div className="admin-card">
        <h2>Add Category (Admin)</h2>
        <form className="admin-form" onSubmit={handleSubmit}>
          <div style={{ position: 'relative', zIndex: 99999, pointerEvents: 'auto' }}>
            <label>Category Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} required />

            <div className="admin-actions">
              <button className="btn primary" type="submit">
                Add Category
              </button>
              <button
                type="button"
                className="btn secondary"
                onClick={() => setName('')}
              >
                Reset
              </button>
              <button
                type="button"
                className="btn secondary"
                onClick={() => navigate('/admin/add-item')}
              >
                Go to Add Item
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
