import { useEffect, useRef } from 'react';

const hook = (element, updateElement, index) => {
	const mouseDown = (ele) => {
		const initialX = ele.clientX - element.x;
		const initialY = ele.clientY - element.y;
		const slideWidth = document.getElementById('slide').clientWidth;
		const slideHeight = document.getElementById('slide').clientHeight;
		const handleMouseMove = (e) => {
			let x = e.clientX - initialX;
			let y = e.clientY - initialY;

			// Check if the right edge of the element is outside of the slide
			if (x + ele.target.clientWidth > slideWidth) {
				x = slideWidth - ele.target.clientWidth;
			}
			// Check if the bottom edge of the element is outside of the slide
			if (y + ele.target.clientHeight > slideHeight) {
				y = slideHeight - ele.target.clientHeight;
			}
			// Check if the left edge of the element is outside of the slide
			if (x < 0) {
				x = 0;
			}
			// Check if the top edge of the element is outside of the slide
			if (y < 0) {
				y = 0;
			}
			updateElement(index, { ...element, x, y });
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
