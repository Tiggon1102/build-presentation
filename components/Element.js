import React, { useRef } from 'react';
import { Resizable } from 're-resizable';

import { getMyStyle } from './Element.style.js';
import useStyle from '../hooks/useStyle';
import useDragAndDrop from '../hooks/useDragAndDrop';
import useResize from '../hooks/useResize';

const SouthEastArrow = () => (
	<svg height="22" width="22">
		<circle cx="10" cy="10" r="7" stroke="green" stroke-width="3" fill="white" />
		Sorry, your browser does not support inline SVG.
	</svg>
);

const CustomHandle = (props) => (
	<div
		style={{
			background: '#fff',
			borderRadius: '10px',
			height: '100%',
			width: '100%',
			padding: 0,
		}}
		className={'SomeCustomHandle'}
		{...props}
	/>
);
const BottomRightHandle = () => (
	<CustomHandle>
		<SouthEastArrow />
	</CustomHandle>
);

const Component = ({ element, updateElement, index }) => {
	const { style } = useStyle(getMyStyle, { element }, [element]);

	const { mouseDown } = useDragAndDrop(element, updateElement, index);

	const { elementRef, resize } = useResize(element, updateElement, index);

	return (
		<div key={index} ref={elementRef} className="present-img" style={style.elementContainer}>
			<Resizable
				style={{ height: 'auto' }}
				onResize={resize}
				enable={{ top: false, left: false, right: false, bottom: false, bottomLeft: true, bottomRight: true, topLeft: true, topRight: true }}
				handleComponent={{
					bottomRight: <BottomRightHandle />,
					bottomLeft: <BottomRightHandle />,
					topLeft: <BottomRightHandle />,
					topRight: <BottomRightHandle />,
				}}
			>
				{element.type === 'headline' && (
					<textarea
						onMouseDown={(e) => mouseDown(e)}
						value={element.value}
						style={style.headlineElement}
						onChange={(e) => {
							updateElement(index, { ...element, value: e.target.value });
						}}
					/>
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
			</Resizable>
		</div>
	);
};

export default Component;
