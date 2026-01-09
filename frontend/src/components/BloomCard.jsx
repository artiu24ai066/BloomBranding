function BloomCard({ title, paragraphs, variant, index }) {
  return (
    <div
      className={`value-card ${variant}`}
      style={{ animationDelay: `${index * 1}s` }}
    >
      <h3>{title}</h3>
      {paragraphs.map((text, i) => (
        <p key={i}>{text}</p>
      ))}
    </div>
  );
}

export default BloomCard;
