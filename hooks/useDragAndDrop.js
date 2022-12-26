import { useEffect, useRef } from 'react';

const hook = (element, updateElement, index) => {
	const mouseDown = (e, slideWidth, slideHeight) => {
		const initialX = e.clientX - element.x;
		const initialY = e.clientY - element.y;
		const handleMouseMove = (e) => {
			let newX = e.clientX - initialX;
			let newY = e.clientY - initialY;
			if (newX < 0) newX = 0;
			if (newX >= 0 && newX <= slideWidth - element.width) newX = newX;
			if (newX > slideWidth) newX = slideWidth - element.width;
			if (newY < 0) newY = 0;
			if (newY >= 0 && newY <= slideHeight - element.height) newY = newY;
			if (newY > slideHeight) newY = slideHeight - element.height;
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
