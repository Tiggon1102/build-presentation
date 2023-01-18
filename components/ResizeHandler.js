const HandlerIcon = () => (
	<svg height="22" width="22">
		<circle cx="10" cy="10" r="7" stroke="green" strokeWidth="3" fill="white" />
		Sorry, your browser does not support inline SVG.
	</svg>
);

const ResizeHandler = () => (
	<div
		style={{
			background: '#fff',
			borderRadius: '10px',
			height: '100%',
			width: '100%',
			padding: 0,
		}}
	>
		<HandlerIcon />
	</div>
);

export default ResizeHandler;
