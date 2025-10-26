import React, { useEffect, useState } from 'react'
import './Title.css';

const languages = [
  "AVISHKAAR",    // English
  "आविष्कार",      // Hindi
  "అవిష్కార్",      // Telugu
  "ஆவிஷ்கார்",      // Tamil
  "ಆವಿಷ್ಕಾರ್",      // Kannada
  "ആവിഷ്കാർ",      // Malayalam
  "আবিষ্কার",      // Bengali
  "આવિષ્કાર",      // Gujarati
  "ਆਵਿਸ਼ਕਾਰ",      // Punjabi
];

// The three zone titles to show with typing effect
const ZONE_WORDS = [
  { text: 'INNOVATION', color: '#00ffff' },
  { text: 'TECHNOLOGY', color: '#ff00ff' },
  { text: 'FUTURE', color: '#00ff00' },
];

export default function Title() {
  // typed string for the main multilingual title (we'll type & delete each language)
  const [mainTyped, setMainTyped] = useState('');
  // typed string for the zones (kept as before)
  const [typed, setTyped] = useState('');

  // Typing + deleting loop for the main languages array
  useEffect(() => {
    let mounted = true;

    const run = async () => {
      let i = 0;
      while (mounted) {
        const word = languages[i % languages.length];

        // type
        for (let j = 0; j <= word.length; j++) {
          if (!mounted) return;
          setMainTyped(word.slice(0, j));
          await new Promise(r => setTimeout(r, 120));
        }

        // pause on full word
        await new Promise(r => setTimeout(r, 900));

        // delete
        for (let j = word.length; j >= 0; j--) {
          if (!mounted) return;
          setMainTyped(word.slice(0, j));
          await new Promise(r => setTimeout(r, 60));
        }

        // small pause before next
        await new Promise(r => setTimeout(r, 200));
        i++;
      }
    };

    run();
    return () => { mounted = false };
  }, []);

  // Sequentially type the ZONE_WORDS one after another (append, no deletion)
  

  return (
    <div className="title-root">
      <h1 className="main-title">{mainTyped}<span className='cursor' /></h1>

     
    </div>
  )
}
