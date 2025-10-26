import React, { useMemo, useState, useEffect } from 'react'

export default function Title({ text = ' AVISHKAAR' }) {
  // Split text into characters so we can animate each letter.
  const chars = Array.from(text);

  // Pre-generate random scatter offsets so each render uses the same values
  // during the component lifetime. These control the initial scattered state.
  const offsets = useMemo(() => {
    return chars.map(() => {
      // Range tuned for a visible scatter; tweak as needed
      const x = Math.round((Math.random() - 0.5) * 5020); // px
      const y = Math.round((Math.random() - 0.5) * 3020); // px
      const r = Math.round((Math.random() - 0.5) * 60); // deg
      return { x, y, r };
    });
  }, [text]);

  // Track when gather animation has completed for all characters.
  // We listen for the animationend on the last character and also set
  // a timeout fallback in case the event is missed.
  const [gatherComplete, setGatherComplete] = useState(false);

  useEffect(() => {
    // conservative fallback timeout: gather duration (0.9s) + per-char stagger (0.04s)
    const gatherDuration = 0.9;
    const perCharDelay = 0.04;
    const total = gatherDuration + perCharDelay * Math.max(0, chars.length - 1) + 0.08; // small buffer
    const t = setTimeout(() => setGatherComplete(true), total * 1000);
    return () => clearTimeout(t);
  }, [chars.length]);

  // subtitle shows shortly after the gather+glitch start
  const [subtitleVisible, setSubtitleVisible] = useState(false);

  useEffect(() => {
    if (gatherComplete) {
      const id = setTimeout(() => setSubtitleVisible(true), 350); // small delay after glitch begins
      return () => clearTimeout(id);
    }
    // hide if text changes
    setSubtitleVisible(false);
  }, [gatherComplete, text]);

  return (
    <div className="title-wrap">
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
              // When the gather animation on the last char finishes, mark gatherComplete
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
