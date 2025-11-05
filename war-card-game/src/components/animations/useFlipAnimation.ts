import { useEffect, useRef } from 'react';

const useFlipAnimation = (isFlipped: boolean) => {
    const cardRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (cardRef.current) {
            cardRef.current.style.transition = 'transform 0.6s';
            cardRef.current.style.transform = isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)';
        }
    }, [isFlipped]);

    return cardRef;
};

export default useFlipAnimation;