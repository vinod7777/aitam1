import React, { useRef, useEffect } from 'react';

const MatrixRain = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        let animationFrameId;
        let drops = [];
        let columns = 0;
        const font_size = 15;
        const english = "1001010101110101010101010010101000101011101111010101010110101010101010101110000101".split('');

        const setup = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            columns = canvas.width / font_size;
            drops = [];
            for (let x = 0; x < columns; x++) {
                drops[x] = 1;
            }
        };

        const draw = () => {
            context.fillStyle = "rgba(0, 0, 0, 0.05)";
            context.fillRect(0, 0, canvas.width, canvas.height);

            context.fillStyle = "#0F0"; // green text
            context.font = font_size + "px arial";

            for (let i = 0; i < drops.length; i++) {
                const text = english[Math.floor(Math.random() * english.length)];
                context.fillText(text, i * font_size, drops[i] * font_size);

                if (drops[i] * font_size > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
            animationFrameId = window.requestAnimationFrame(draw);
        };

        setup();
        window.addEventListener('resize', setup);
        draw();

        return () => {
            window.removeEventListener('resize', setup);
            window.cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} style={{ display: 'block' }} />;
};

export default MatrixRain;