import { useRef } from 'react';

const hook = (element, updateElement, index) => {
	const elementRef = useRef(null);
	const initialX = element.x;
	const conX = element.x;
	const slideWidth = document.getElementById('slide').clientWidth;
	const slideHeight = document.getElementById('slide').clientHeight;
	let prevChange = {};
	const resize = (e, state, ele, change) => {
		let x, y;
		const { width, height } = elementRef.current.getBoundingClientRect();
		console.log(initialX);
		switch (state) {
			case 'topLeft':
				x = initialX + -1;
				break;
			case 'bottomLeft':
				break;
			case 'topRight':
				break;
			case 'bottomRight':
				break;
			default:
				break;
		}
		prevChange = change;
		updateElement(index, { ...element, width, height });
	};
	return { elementRef, resize };
};

export default hook;
