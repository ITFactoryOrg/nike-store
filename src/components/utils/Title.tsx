import React from 'react';

interface IProps {
	title:string
}
const Title = ({title}:IProps) => {
	return (
		<div className={'grid items-center'}>
			<h2 className={'text-5xl lg:text-4xl md:text-3xl font-bold text-slate-900 filter drop-shadow-lg'}>
				{title}
			</h2>
		</div>
	);
};

export default Title;
