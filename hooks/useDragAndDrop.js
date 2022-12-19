import { useEffect, useRef } from 'react';

const hook = (element, updateElement, index) => {
	const mouseDown = (e) => {
		const initialX = e.clientX - element.x;
		const initialY = e.clientY - element.y;
		const handleMouseMove = (e) => {
			const newX = e.clientX - initialX;
			const newY = e.clientY - initialY;
			updateElement(index, { ...element, x: newX, y: newY });
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
