import * as React from 'react';

function SvgRecordCircleFill(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M16 8A8 8 0 110 8a8 8 0 0116 0zm-8 3a3 3 0 100-6 3 3 0 000 6z' />
		</svg>
	);
}

export default SvgRecordCircleFill;
