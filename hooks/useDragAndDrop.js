import { useEffect, useRef } from 'react';

const hook = (element, updateElement, index) => {
	const mouseDown = (e) => {
		const initialX = e.clientX - element.x;
		const initialY = e.clientY - element.y;
		const paneWidth = Number(document.getElementById('pane').style.width.slice(0, -2));
		const paneHeight = Number(document.getElementById('pane').style.height.slice(0, -2));
		const handleMouseMove = (e) => {
			const newX = e.clientX - initialX;
			const newY = e.clientY - initialY;
			let xyData = element;
			if (newX < 0) xyData.x = 0;
			if (newX >= 0 && newX <= paneWidth - element.width) xyData.x = newX;
			if (newX > paneWidth) xyData.x = paneWidth - element.width;
			if (newY < 0) xyData.y = 0;
			if (newY >= 0 && newY <= paneHeight - element.height) xyData.y = newY;
			if (newY > paneHeight) xyData.y = paneHeight - element.height;
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
