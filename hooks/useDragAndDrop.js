import { useEffect, useRef } from 'react';

const hook = (currentSlide, setCurrentSlide) => {
	const mouseDown = (index, e) => {
		const initialX = e.clientX - currentSlide.elements[index].x;
		const initialY = e.clientY - currentSlide.elements[index].y;
		const handleMouseMove = (e) => {
			const newX = e.clientX - initialX;
			const newY = e.clientY - initialY;
			setCurrentSlide({
				...currentSlide,
				elements: [...currentSlide.elements.slice(0, index), { ...currentSlide.elements[index], x: newX, y: newY }, ...currentSlide.elements.slice(index + 1)],
			});
		};
		handleMouseMoveRef.current = handleMouseMove;
		document.addEventListener('mousemove', handleMouseMove);
		document.addEventListener('mouseup', () => {
			document.removeEventListener('mousemove', handleMouseMove);
		});
	};

	const handleMouseMoveRef = useRef();

	useEffect(() => {
		return () => {
			document.removeEventListener('mousemove', handleMouseMoveRef.current);
		};
	}, []);

	return { mouseDown };
};

export default hook;
