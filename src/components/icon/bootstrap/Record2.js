import * as React from 'react';

function SvgRecord2(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M8 12a4 4 0 110-8 4 4 0 010 8zm0 1A5 5 0 108 3a5 5 0 000 10z' />
			<path d='M10 8a2 2 0 11-4 0 2 2 0 014 0z' />
		</svg>
	);
}

export default SvgRecord2;
