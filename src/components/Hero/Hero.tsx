import React, {FC} from 'react';
import {IHeroApiType} from "../../data";
import {IVideo} from "../../data";
import {Clips, SocialLink} from "../utils";


interface IProps {
	heroApi: IHeroApiType
}

const Hero:FC<IProps> = ({heroApi:{title, subtitle, btnText, img, videos, socialLinks}}) => {

	return (
		<div className={'relative h-auto w-auto flex flex-col'}>
			<div className={'bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] w-auto absolute top-0 right-0 left-0 opacity-100 z-10'}></div>
			<div className={'relative opacity-100 z-20 grid items-center justify-items-center nike-container'}>
				<div className={'grid items-center justify-items-center mt-28 md:mt-24'}>
					<h1 className={'text-6xl lg:5xl md:4xl sm:3xl xs:2xl font-extrabold filter drop-shadow-sm text-slate-200'}>{title}</h1>
					<h2 className={'text-6xl lg:5xl md:4xl sm:3xl xs:2xl font-extrabold filter drop-shadow-sm text-slate-200'}>{subtitle}</h2>
					<button className={'button-theme bg-slate-200 shadow-slate-200 rounded-xl my-5'} type={'button'}>{btnText}</button>
					<div className={'grid items-center gap-5 md:gap-3 absolute top-[10vh] lg:top-[27vh] left-[5%] xl:left-0 w-auto h-auto' }>
						{videos?.map((video:IVideo, i:number ) =>(
							<Clips
								key={i}
								imgSrc={video.imgSrc}
								clip={video.clip}
							/>
						))}
					</div>
					<div className={'grid items-center absolute top-[33vh] lg:top-[27vh] right-0 gap-3'}>
						{socialLinks?.map((link,i) =>(
								<SocialLink
									key={i}
									icon={link.icon}
								/>
							))}
					</div>
				</div>
				<div className='flex items-center'>
					<img
						src={img}
						alt='hero-img/img'
						className='w-auto h-[45vh] lg:h-[35vh] md:h-[31vh] sm:h-[21vh] xsm:h-[19vh] transitions-theme -rotate-[25deg] hover:rotate-0 cursor-pointer object-fill'
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
