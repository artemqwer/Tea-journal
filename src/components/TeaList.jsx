import TeaItem from "./TeaItem";

export default function TeaList({ teas, onDelete }) {
  return (
    <div className="tea-list">
      {teas.map((tea) => (
        <TeaItem key={tea.id} tea={tea} onDelete={onDelete} />
      ))}
    </div>
  );
}
