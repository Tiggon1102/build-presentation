import { useEffect, useRef } from 'react';

const hook = (element, updateElement, index) => {
	const mouseDown = (e, slideWidth, slideHeight) => {
		const initialX = e.clientX - element.x;
		const initialY = e.clientY - element.y;
		const handleMouseMove = (e) => {
			let newX = e.clientX - initialX;
			let newY = e.clientY - initialY;

			// Check if the right edge of the element is outside of the slide
			if (newX + element.width > slideWidth) {
				newX = slideWidth - element.width;
			}
			// Check if the bottom edge of the element is outside of the slide
			if (newY + element.height > slideHeight) {
				newY = slideHeight - element.height;
			}
			// Check if the left edge of the element is outside of the slide
			if (newX < 0) {
				newX = 0;
			}
			// Check if the top edge of the element is outside of the slide
			if (newY < 0) {
				newY = 0;
			}

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
