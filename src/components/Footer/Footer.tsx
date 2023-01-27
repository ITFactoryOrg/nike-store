import React from 'react';
import {IFooterAPIType} from "../../data";

interface IProps {
	footerAPI:IFooterAPIType
}
const Footer:React.FC<IProps> = ({footerAPI:{titles,links}}) => {
	return (
		<footer className={'bg-theme pt-7 pb-5'}>
			<div className={'nike-container text-slate-200'}>
				<div className={'grid item-start grid-cols-3 max-w-2xl w-full m-auto md:max-w-none md:gap-5'}>
					{titles.map(({title}, i) =>{
						return (
							<div className={'grid items-center'} key={i}>
								<h3 className={'text-lg lg:text-base md:text-sm uppercase font-semibold'}>{title}</h3>
							</div>
						)
					})}
					{links.map((list,i) =>{
						return (
							<ul className={'grid items-center gap-1'} key={i}>
								{list.map((item,i) =>{
									return (
										<li className={'text-sm sm:text-sm'} key={i}>{item.link}</li>
									)
								})}
							</ul>
						)
					})}
				</div>
				<div className={'mt-5 text-center'}>
					<p className={'text-sm md:text-center'}>
						Copyright
						<sup className={'text-base font-bold'}>&copy;</sup>
						All Reserved Rights {new Date().getFullYear()}
						<span className={'font-semibold'}> ElvinDEV</span>
					</p>

				</div>
			</div>
		</footer>
	);
};

export default Footer;
