import React, { useState } from 'react';
import { Resizable } from 're-resizable';

import ResizeHandler from './ResizeHandler';
import { getMyStyle } from './Element.style';
import useStyle from '../hooks/useStyle';
import useDragAndDrop from '../hooks/useDragAndDrop';
import useResize from '../hooks/useResize';

const Component = ({ element, updateElement, index, current, setCurrent, currentSlideIndex }) => {
	const { style } = useStyle(getMyStyle, { element }, [element]);

	const { mouseDown } = useDragAndDrop(element, updateElement, index);
	const { elementRef, resize } = useResize(element, updateElement, index);

	return (
		<div key={currentSlideIndex + index} ref={elementRef} className="present-img" style={style.elementContainer}>
			<Resizable
				style={{ width: element.width, height: element.height }}
				key={currentSlideIndex + index}
				onResize={resize}
				enable={{
					top: false,
					left: false,
					right: false,
					bottom: false,
					bottomLeft: !(current - index),
					bottomRight: !(current - index),
					topLeft: !(current - index),
					topRight: !(current - index),
				}}
				handleComponent={{
					bottomRight: <ResizeHandler />,
					bottomLeft: <ResizeHandler />,
					topLeft: <ResizeHandler />,
					topRight: <ResizeHandler />,
				}}
			>
				{element.type === 'headline' && (
					<textarea
						onClick={() => setCurrent(index)}
						onMouseDown={mouseDown}
						value={element.value}
						style={style.headlineElement}
						onChange={(e) => {
							updateElement(index, { ...element, value: e.target.value });
						}}
					/>
				)}
				{element.type === 'text' && (
					<textarea
						onClick={() => setCurrent(index)}
						onMouseDown={mouseDown}
						value={element.value}
						style={style.textElement}
						onChange={(e) => {
							updateElement(index, { ...element, value: e.target.value });
						}}
					/>
				)}
				{element.type === 'image' && <img alt="" onClick={() => setCurrent(index)} onMouseDown={mouseDown} src={element.value} style={style.imageElement} />}
			</Resizable>
		</div>
	);
};

export default Component;
