import React from 'react';

interface IProps {
	icon:string
}
const SocialLink = ({icon}:IProps) => {
	return (
		<div>
			<img
				className={'w-8 h-8 flex items-center cursor-pointer md:w-6 sm:w-5 sm:h-5 transition-all duration-200 hover:scale-110'}
				src={icon}
				alt="icon/social"/>
		</div>
	);
};

export default SocialLink;
