import React from 'react';

import { getMyStyle } from './Element.style.js';
import useStyle from '../hooks/useStyle';
import useDragAndDrop from '../hooks/useDragAndDrop';

const Component = ({ element, index, currentSlide, setCurrentSlide }) => {
	const { style } = useStyle(getMyStyle);

	const { mouseDown } = useDragAndDrop(currentSlide, setCurrentSlide);

	return (
		<div
			key={index}
			style={{
				position: 'absolute',
				top: element.y,
				left: element.x,
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
