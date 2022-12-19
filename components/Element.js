import React, { useRef, useEffect } from 'react';

import { getMyStyle } from './Element.style.js';
import useStyle from '../hooks/useStyle';
import useDragAndDrop from '../hooks/useDragAndDrop';

const Component = ({ element, index, currentSlide, setCurrentSlide }) => {
	const { style } = useStyle(getMyStyle);

	const { mouseDown } = useDragAndDrop(currentSlide, setCurrentSlide);

	const elementRef = useRef(null);

	useEffect(() => {
		elementRef.current.style.resize = 'both';
	}, []);

	useEffect(() => {
		elementRef.current.addEventListener('resize', handleResize);
		return () => elementRef.current.removeEventListener('resize', handleResize);
	}, []);

	const handleResize = () => {
		const { width, height } = elementRef.current.getBoundingClientRect();
		//setCurrentSlide() ???
	};

	return (
		<div
			key={index}
			ref={elementRef}
			style={{
				position: 'absolute',
				top: element.y,
				left: element.x,
				overflow: 'auto',
				width: element.width,
				height: element.height,
			}}
			onMouseDown={(e) => mouseDown(index, e)}
		>
			{element.type === 'headline' && <h1>{element.value}</h1>}
			{element.type === 'text' && (
				<input
					type="text"
					value={element.value}
					style={style.textElement}
					onChange={(e) => {
						setCurrentSlide({
							...currentSlide,
							elements: [
								...currentSlide.elements.slice(0, index),
								{
									...element,
									value: e.target.value,
								},
								...currentSlide.elements.slice(index + 1),
							],
						});
					}}
				/>
			)}
			{element.type === 'image' && <img src={element.value} style={style.imageElement} />}
		</div>
	);
};

export default Component;
