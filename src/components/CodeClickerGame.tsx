import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CodeClickerGame() {
    const [score, setScore] = useState(0);
    const [time, setTime] = useState(15);
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        if (!playing) return;

        if (time === 0) {
            setPlaying(false);
            return;
        }

        const timer = setTimeout(() => setTime(time - 1), 1000);
        return () => clearTimeout(timer);
    }, [time, playing]);

    const startGame = () => {
        setScore(0);
        setTime(15);
        setPlaying(true);
    };

    return (
        <div className="text-center space-y-4">
            <h3 className="text-lg font-semibold">
                Code Clicker 💻
            </h3>

            {!playing ? (
                <>
                    <p className="text-sm text-muted">
                        Click as fast as you can in 15 seconds!
                    </p>
                    <button
                        onClick={startGame}
                        className="cursor-hover px-6 py-2 rounded-full
                       bg-gradient-to-r from-cyan-400 to-purple-500
                       text-black font-medium"
                    >
                        Start Game
                    </button>
                </>
            ) : (
                <>
                    <p className="text-sm text-muted">
                        Time Left: <span className="text-cyan-400">{time}s</span>
                    </p>

                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setScore(score + 1)}
                        className="cursor-hover text-4xl px-6 py-4 rounded-xl
                       bg-card/70 backdrop-blur
                       border border-borderc
                       shadow-lg shadow-cyan-500/20"
                    >
                        💻
                    </motion.button>

                    <p className="font-medium">
                        Score: <span className="text-purple-400">{score}</span>
                    </p>
                </>
            )}
        </div>
    );
}
