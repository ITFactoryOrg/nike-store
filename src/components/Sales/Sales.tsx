import React from 'react';
import {Item, Title} from "../utils";
import {IItemsType} from "../../data";


interface IProps {
	endpoint:IItemsType
	ifExists?: boolean | undefined
}
const Sales:React.FC<IProps> = ({ifExists, endpoint: {title, items}}) => {
	return (
		<div className={'nike-container mt-10'}>
			<Title title={title} />
			<div className={`grid items-center justify-items-center   mt-7 gap-10 ${ifExists? 'grid-cols-3 xl:grid-cols-2 sm:grid-cols-1':'grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 '}`}>
				{items?.map(item =>{
					return <Item key={item.id} {...item} ifExists={ifExists}/>
				})}
			</div>
		</div>
	);
};

export default Sales;
