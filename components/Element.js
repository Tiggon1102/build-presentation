import React, { useRef } from 'react';
import ResizeDetector from 'react-resize-detector';

import { getMyStyle } from './Element.style.js';
import useStyle from '../hooks/useStyle';
import useDragAndDrop from '../hooks/useDragAndDrop';
import useResize from '../hooks/useResize';

const Component = ({ element, updateElement, index }) => {
	const { style } = useStyle(getMyStyle, { element }, [element]);

	const { mouseDown } = useDragAndDrop(element, updateElement, index);

	const { elementRef, resize } = useResize(element, updateElement, index);

	return (
		<ResizeDetector handleWidth handleHeight onResize={resize}>
			<div
				key={index}
				ref={elementRef}
				onMouseDown={(e) =>
					mouseDown(e, Number(document.getElementById('slide').style.width.slice(0, -2)), Number(document.getElementById('slide').style.height.slice(0, -2)))
				}
				style={style.elementContainer}
			>
				{element.type === 'headline' && <h1 style={style.headlineElement}>{element.value}</h1>}
				{element.type === 'text' && (
					<textarea
						value={element.value}
						style={style.textElement}
						onChange={(e) => {
							updateElement(index, { ...element, value: e.target.value });
						}}
					/>
				)}
				{element.type === 'image' && <img src={element.value} style={style.imageElement} />}
			</div>
		</ResizeDetector>
	);
};

export default Component;
