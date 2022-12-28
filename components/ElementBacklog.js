import React from 'react';

import { getMyStyle } from './ElementBacklog.style.js';
import useStyle from '../hooks/useStyle';

const Component = ({ texts }) => {
	const { style } = useStyle(getMyStyle);

	const loremIpsumText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

	return (
		<div style={style.elementBacklog}>
			<p style={style.title}>Add elements</p>
			<div style={style.inputFields}>
				<input type="text" value={loremIpsumText} style={style.input} />
				<input type="text" value={loremIpsumText} style={style.input} />
				<input type="text" value={loremIpsumText} style={style.input} />
			</div>
			<div style={style.images}>
				<img
					alt="img1"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKr5wT7rfkjkGvNeqgXjBmarC5ZNoZs-H2uMpML8O7Q4F9W-IlUQibBT6IPqyvX45NOgw&usqp=CAU"
					style={style.image}
				/>
				<img
					alt="img2"
					src="https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
					style={style.image}
				/>
				<img
					alt="img3"
					src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
					style={style.image}
				/>
			</div>
		</div>
	);
};

export default Component;
