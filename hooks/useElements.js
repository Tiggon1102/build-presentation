const hook = (currentSlide, setCurrentSlide, slideRef) => {
	const addElement = (e) => {
		setCurrentSlide({
			...currentSlide,
			elements: [
				...currentSlide.elements,
				{
					x: e.clientX - slideRef.current.offsetLeft,
					y: e.clientY - slideRef.current.offsetTop,
					type: 'text',
					value: '',
					width: 400,
					height: 100,
				},
			],
		});
	};

	const updateElement = (index, element) => {
		setCurrentSlide({
			...currentSlide,
			elements: [...currentSlide.elements.slice(0, index), element, ...currentSlide.elements.slice(index + 1)],
		});
	};

	return { addElement, updateElement };
};

export default hook;
