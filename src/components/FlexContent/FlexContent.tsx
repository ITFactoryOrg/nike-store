import React from 'react';
import {ISneakersType} from "../../data";

interface IProps {
	endpoint: ISneakersType
	ifExists?:boolean | undefined
}

const FlexContent: React.FC<IProps> = ( {ifExists,endpoint: {img, btn, url, text, heading, title}}) => {
	console.log()
	return (
		<div className={`flex items-center justify-between lg:flex-col lg:justify-center nike-container ${ifExists?'flex-row-reverse':'flex-row'}`}>
			<div className={'max-w-lg lg:max-w-none w-full md:text-center grid items-center lg:justify-items-center'}>
				<h3 className={'text-4xl sm:text-3xl font-bold text-gradient'}>{heading}</h3>
				<h3 className={'text-5xl lg:4xl md:text-3xl sm:2xl font-bold text-slate-900 filter drop-shadow-lg'}>{title}</h3>
				<p className={'xl:text-sm my-4 text-slate-900'}>{text}</p>
				<a className={'flex items-center '} href={url} target={'_blank'} role={'button'}>
					<button
						className={'button-theme bg-slate-900 shadow-slate-900 text-slate-100 py-1.5'}
						type={'button'}>{btn}</button>
				</a>
			</div>
			<div className={'flex items-center justify-center max-w-none w-full'}>
				<img
					className={`w-auto  object-fill transitions-theme ${ifExists?'h-60 lg:h-56 md:h-52 sm:h-44 xs:h-36 rotate-6 hover:-rotate-12':'h-72 lg:h-64 md:h-60 sm:h-h-48 xs:h-40 rotate-[19deg] hover:rotate-12'}`}
					src={img}
					alt={title}/>
			</div>
		</div>
	);
};

export default FlexContent;
