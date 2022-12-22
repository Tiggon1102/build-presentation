import React from 'react';
import ResizeDetector from 'react-resize-detector';

import { getMyStyle } from './Element.style.js';
import useStyle from '../hooks/useStyle';
import useDragAndDrop from '../hooks/useDragAndDrop';
import useResize from '../hooks/useResize';

const Component = ({ element, updateElement, index }) => {
	const { style } = useStyle(getMyStyle);

	const { mouseDown } = useDragAndDrop(element, updateElement, index);

	const { elementRef, resize } = useResize(element, updateElement, index);

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
					overflow: 'hidden',
					width: element.type === 'image' ? 'auto' : element.width,
					height: element.height,
				}}
			>
				{element.type === 'headline' && (
					<h1 style={style.headlineElement} onMouseDown={(e) => mouseDown(e)}>
						{element.value}
					</h1>
				)}
				{element.type === 'text' && (
					<textarea
						onMouseDown={(e) => mouseDown(e)}
						value={element.value}
						style={style.textElement}
						onChange={(e) => {
							updateElement(index, { ...element, value: e.target.value });
						}}
					/>
				)}
				{element.type === 'image' && <img onMouseDown={(e) => mouseDown(e)} src={element.value} style={style.imageElement} />}
			</div>
		</ResizeDetector>
	);
};

export default Component;
