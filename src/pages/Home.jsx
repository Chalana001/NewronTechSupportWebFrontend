import { useEffect, useState } from 'react'
import HeroSlider from '../components/HeroSlider'
import { API_URL } from '../services/api'

export default function Home() {
	const [items, setItems] = useState([])

	useEffect(() => {
		let mounted = true
		fetch(`${API_URL}/getallitems`)
			.then((r) => r.json())
			.then((data) => {
				if (!mounted) return
				setItems(Array.isArray(data) ? data : [])
			})
			.catch(() => {})
		return () => (mounted = false)
	}, [])

	const featured = items.slice(0, 6)

	return (
		<main className="page">
			<HeroSlider items={featured} />
			<section className="home-intro">
				<div className="container">
					<h2>Fast repairs • Trusted parts • Expert support</h2>
					<p className="muted">Shop PC parts, mobile accessories, earbuds, power banks, chargers and more.</p>
				</div>
			</section>
		</main>
	)
}

