import { useLayoutEffect, useState } from 'react';

export default function useWindowPosition(element) {
    const [animation, setAnimation] = useState(false);

    useLayoutEffect(() => {
        function updatePosition() {
            const offsetSetHeight = element.offsetHeight;

            if (window.pageYOffset > offsetSetHeight * 0.7 || window.pageYOffset === 0) {
                setAnimation(true);
            }
        }
        window.addEventListener('scroll', updatePosition);
        updatePosition();
        return () => window.removeEventListener('scroll', updatePosition);
    }, [element]);
    return animation;
}