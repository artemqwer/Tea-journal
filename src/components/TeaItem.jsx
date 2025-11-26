export default function TeaItem({ tea, onDelete }) {
  return (
    <div className="tea-item">
      <span>
        {tea.date} — {tea.name} ({tea.type})
      </span>

      <button onClick={() => onDelete(tea.id)}>Delete</button>
    </div>
  );
}
