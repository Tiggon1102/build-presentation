import React, { useRef, useEffect } from 'react';
import ResizeDetector from 'react-resize-detector';

import { getMyStyle } from './Element.style.js';
import useStyle from '../hooks/useStyle';
import useDragAndDrop from '../hooks/useDragAndDrop';
import useResize from '../hooks/useResize';

const Component = ({ element, index, currentSlide, setCurrentSlide }) => {
	const { style } = useStyle(getMyStyle);

	const { mouseDown } = useDragAndDrop(currentSlide, setCurrentSlide);

	const { elementRef, resize } = useResize(currentSlide, setCurrentSlide, index);

	return (
		<ResizeDetector handleWidth handleHeight onResize={resize}>
			<div
				key={index}
				ref={elementRef}
				style={{
					position: 'absolute',
					top: element.y,
					left: element.x,
					resize: 'both',
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
		</ResizeDetector>
	);
};

export default Component;
