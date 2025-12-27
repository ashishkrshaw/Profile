import { useRef, useEffect, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

// Import Lottie JSON files
import linkedinAnimation from '../assets/linkedin.json';
import githubAnimation from '../assets/github (1).json';
import gmailAnimation from '../assets/gmail.json';

interface LottieSocialIconProps {
    type: 'linkedin' | 'github' | 'gmail';
    size?: number;
    className?: string;
}

const animations: Record<string, object> = {
    linkedin: linkedinAnimation,
    github: githubAnimation,
    gmail: gmailAnimation,
};

export default function LottieSocialIcon({ type, size = 40, className }: LottieSocialIconProps) {
    const playerRef = useRef<Player>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [hasPlayed, setHasPlayed] = useState(false);

    useEffect(() => {
        // Stop animation initially to ensure visibility
        if (playerRef.current) {
            try {
                // @ts-ignore - setSeeker handles frame-based seeking
                playerRef.current.setSeeker(1);
            } catch (e) {
                console.warn('Lottie seeker failed', e);
            }
        }
    }, [playerRef]);

    useEffect(() => {
        // Intersection Observer to play animation once when in view
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasPlayed && playerRef.current) {
                        playerRef.current.play();
                        setHasPlayed(true);
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, [hasPlayed]);

    return (
        <div ref={containerRef} className={className} style={{ width: size, height: size }}>
            <Player
                ref={playerRef}
                src={animations[type]}
                style={{ width: '100%', height: '100%' }}
                loop={false}
                autoplay={false}
                keepLastFrame={true}
                onEvent={(event) => {
                    if (event === 'complete' && playerRef.current) {
                        playerRef.current.pause();
                        if (type === 'linkedin') {
                            // Definitive fix for disappearing LinkedIn icon
                            // @ts-ignore
                            playerRef.current.setSeeker(1);
                        }
                    }
                }}
            />
        </div>
    );
}
