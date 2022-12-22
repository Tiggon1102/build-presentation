import { useEffect, useRef } from 'react';

const hook = (element, updateElement, index) => {
	const mouseDown = (e) => {
		const initialX = e.clientX - element.x;
		const initialY = e.clientY - element.y;
		const handleMouseMove = (e) => {
			const newX = e.clientX - initialX;
			const newY = e.clientY - initialY;
			let xyData = element;
			if (newX < 0) xyData.x = 0;
			if (newX >= 0 && newX <= 800 - element.width) xyData.x = newX;
			if (newX > 800) xyData.x = 800 - element.width;
			if (newY < 0) xyData.y = 0;
			if (newY >= 0 && newY <= 500 - element.height) xyData.y = newY;
			if (newY > 500) xyData.y = 500 - element.height;
			updateElement(index, xyData);
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
