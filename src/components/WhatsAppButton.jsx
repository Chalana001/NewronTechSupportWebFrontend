export default function WhatsAppButton({ message = '', phone = '', small = false }) {
  const url = `https://wa.me/${phone || ''}?text=${encodeURIComponent(message)}`
  return (
    <a className={`whatsapp ${small ? 'small' : ''}`} href={url} target="_blank" rel="noreferrer" onClick={(e)=>{e.stopPropagation()}}>
      Buy
    </a>
  )
}
