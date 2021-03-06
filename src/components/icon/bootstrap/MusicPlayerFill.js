import * as React from 'react';

function SvgMusicPlayerFill(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M8 12a1 1 0 100-2 1 1 0 000 2z' />
			<path d='M4 0a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V2a2 2 0 00-2-2H4zm1 2h6a1 1 0 011 1v2.5a1 1 0 01-1 1H5a1 1 0 01-1-1V3a1 1 0 011-1zm3 12a3 3 0 110-6 3 3 0 010 6z' />
		</svg>
	);
}

export default SvgMusicPlayerFill;
