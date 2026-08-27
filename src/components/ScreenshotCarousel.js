import { useState, useCallback } from 'react';
import './ScreenshotCarousel.css';

function IconChevron({ dir }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {dir === 'left' ? <polyline points="15 18 9 12 15 6" /> : <polyline points="9 18 15 12 9 6" />}
    </svg>
  );
}

function slideStyle(offset) {
  const abs = Math.abs(offset);
  const scale = abs === 0 ? 1 : abs === 1 ? 0.8 : 0.62;
  return {
    transform: `translateX(${offset * 58}%) scale(${scale})`,
    opacity: abs === 0 ? 1 : abs === 1 ? 0.42 : 0,
    filter: abs === 0 ? 'none' : 'blur(1.5px)',
    zIndex: 10 - abs,
    pointerEvents: abs <= 1 ? 'auto' : 'none',
  };
}

function ScreenshotCarousel({ screenshots }) {
  const [index, setIndex] = useState(0);
  const count = screenshots.length;

  const go = useCallback(
    (step) => setIndex((i) => (i + step + count) % count),
    [count]
  );

  return (
    <div
      className="sc-carousel"
      role="group"
      aria-roledescription="carousel"
      aria-label="Screenshots"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
        if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
      }}
    >
      <div className="sc-stage">
        {screenshots.map((shot, i) => {
          let offset = i - index;
          if (offset > count / 2) offset -= count;
          if (offset < -count / 2) offset += count;
          return (
            <button
              key={shot.src}
              type="button"
              className="sc-slide"
              style={slideStyle(offset)}
              tabIndex={offset === 0 ? -1 : 0}
              aria-hidden={offset !== 0}
              aria-label={offset === 0 ? undefined : `Show ${shot.caption}`}
              onClick={() => offset !== 0 && setIndex(i)}
            >
              <img src={shot.src} alt={offset === 0 ? shot.caption : ''} draggable="false" />
            </button>
          );
        })}

        {count > 1 && (
          <button className="sc-arrow sc-arrow-left" onClick={() => go(-1)} aria-label="Previous screenshot">
            <IconChevron dir="left" />
          </button>
        )}
        {count > 1 && (
          <button className="sc-arrow sc-arrow-right" onClick={() => go(1)} aria-label="Next screenshot">
            <IconChevron dir="right" />
          </button>
        )}
      </div>

      <p className="sc-caption">{screenshots[index].caption}</p>

      {count > 1 && (
        <div className="sc-dots">
          {screenshots.map((shot, i) => (
            <button
              key={shot.src}
              className={`sc-dot${i === index ? ' is-active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to screenshot ${i + 1}: ${shot.caption}`}
              aria-current={i === index}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ScreenshotCarousel;
