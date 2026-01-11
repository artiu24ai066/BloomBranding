import { useRef, useState, useEffect } from "react";
import "./ReviewCard.css";

export default function ReviewCard({ review, boundsRef, initialPos }) {
  const cardRef = useRef(null);
  const [position, setPosition] = useState(initialPos);
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });


  const startDrag = (clientX, clientY) => {
    setIsDragging(true);
    const rect = cardRef.current.getBoundingClientRect();
    setOffset({ x: clientX - rect.left, y: clientY - rect.top });
  };

  const onMouseDown = (e) => startDrag(e.clientX, e.clientY);
  const onTouchStart = (e) => startDrag(e.touches[0].clientX, e.touches[0].clientY);

//   const moveCard = (clientX, clientY) => {
//     // setDragBoxPos({ x: clientX, y: clientY });

//     if (!isDragging) return;

//     const bounds = boundsRef.current.getBoundingClientRect();
//     let x = clientX - bounds.left - offset.x;
//     let y = clientY - bounds.top - offset.y;

//     x = Math.max(0, Math.min(x, bounds.width - cardRef.current.offsetWidth));
//     y = Math.max(0, Math.min(y, bounds.height - cardRef.current.offsetHeight));

//     setPosition({ x, y });
//   };

//   const onMouseMove = (e) => moveCard(e.clientX, e.clientY);
//   const onTouchMove = (e) => moveCard(e.touches[0].clientX, e.touches[0].clientY);

  const endDrag = () => setIsDragging(false);

  useEffect(() => {
    window.addEventListener("mouseup", endDrag);
    window.addEventListener("touchend", endDrag);
    window.addEventListener("touchcancel", endDrag);
    return () => {
      window.removeEventListener("mouseup", endDrag);
      window.removeEventListener("touchend", endDrag);
      window.removeEventListener("touchcancel", endDrag);
    };
  }, []);

  useEffect(() => {
  if (!isDragging) return;
  const handleMove = (e) => {
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    const bounds = boundsRef.current.getBoundingClientRect();

    let x = clientX - bounds.left - offset.x;
    let y = clientY - bounds.top - offset.y;

    x = Math.max(0, Math.min(x, bounds.width - cardRef.current.offsetWidth));
    y = Math.max(0, Math.min(y, bounds.height - cardRef.current.offsetHeight));

    setPosition({ x, y });
  };

  window.addEventListener("mousemove", handleMove);
  window.addEventListener("touchmove", handleMove, { passive: false });

  return () => {
    window.removeEventListener("mousemove", handleMove);
    window.removeEventListener("touchmove", handleMove);
  };
}, [isDragging, offset]);

  return (
  <div
    ref={cardRef}
    className="review-card"
    style={{ left: position.x, top: position.y }}
    onMouseDown={onMouseDown}
    onTouchStart={onTouchStart}
    
  >
    {/* TOP IMAGE */}
    {review.image && (
      <img
        src={review.image}
        alt={review.name}
        className="review-image"
      />
    )}
    
    {/* REVIEW TEXT & AUTHOR */}
    <p>“{review.text}”</p>
    <div className="author">
      <strong>{review.name}</strong>
      <span>{review.role}</span>
    </div>
  </div>
);

}
