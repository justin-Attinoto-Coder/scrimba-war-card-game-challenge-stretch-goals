import { useEffect, useRef } from 'react';

const useShuffleAnimation = (isShuffling: boolean) => {
    const animationRef = useRef<Animation | null>(null);

    useEffect(() => {
        if (isShuffling) {
            const shuffleAnimation = document.createElement('div');
            shuffleAnimation.className = 'shuffle-animation';
            document.body.appendChild(shuffleAnimation);

            animationRef.current = shuffleAnimation.animate(
                [
                    { transform: 'rotate(0deg)' },
                    { transform: 'rotate(360deg)' },
                ],
                {
                    duration: 1000,
                    iterations: Infinity,
                }
            );

            return () => {
                animationRef.current?.cancel();
                document.body.removeChild(shuffleAnimation);
            };
        }
    }, [isShuffling]);

    return animationRef;
};

export default useShuffleAnimation;