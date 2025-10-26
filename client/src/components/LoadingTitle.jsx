import React, { useMemo, useState, useEffect } from 'react'

export default function LoadingTitle({ text = ' AVISHKAAR' }) {
  const chars = Array.from(text);

  const offsets = useMemo(() => {
    return chars.map(() => {
      const x = Math.round((Math.random() - 0.5) * 5020); // px
      const y = Math.round((Math.random() - 0.5) * 3020); // px
      const r = Math.round((Math.random() - 0.5) * 60); // deg
      return { x, y, r };
    });
  }, [text]);

  const [gatherComplete, setGatherComplete] = useState(false);

  useEffect(() => {
    const gatherDuration = 0.9;
    const perCharDelay = 0.04;
    const total = gatherDuration + perCharDelay * Math.max(0, chars.length - 1) + 0.08; // small buffer
    const t = setTimeout(() => setGatherComplete(true), total * 1000);
    return () => clearTimeout(t);
  }, [chars.length]);

  const [subtitleVisible, setSubtitleVisible] = useState(false);

  useEffect(() => {
    if (gatherComplete) {
      const id = setTimeout(() => setSubtitleVisible(true), 350);
      return () => clearTimeout(id);
    }
    setSubtitleVisible(false);
  }, [gatherComplete, text]);

  return (
    <div className="title-wrap loading-title">
      <h1 className={`wave title ${gatherComplete ? 'glitch' : ''}`} data-text={text} aria-label={text}>
      {chars.map((ch, i) => {
        const { x, y, r } = offsets[i] || { x: 0, y: 0, r: 0 };
        const isLast = i === chars.length - 1;
        return (
          <span
            key={i}
            className="char"
            style={{ ['--i']: i, ['--x']: `${x}px`, ['--y']: `${y}px`, ['--r']: `${r}deg` }}
            aria-hidden={ch === ' ' ? 'true' : 'false'}
            onAnimationEnd={isLast ? (e) => {
              if (e && e.animationName === 'gather') setGatherComplete(true);
            } : undefined}
          >
            <span className="char-inner">{ch === ' ' ? '\u00A0' : ch}</span>
          </span>
        );
      })}
      </h1>
      <div className={`subtitle ${subtitleVisible ? 'visible' : ''}`} aria-hidden={!subtitleVisible}>season - 3</div>
    </div>
  )
}