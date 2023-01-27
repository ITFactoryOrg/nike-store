import React from 'react';
import {Cart, FlexContent, Footer, Hero, Navbar, Sales, Stories} from "./components";
import {heroApi, popularSales, topRateSales, highlight, sneaker,story, footerAPI} from "./data";

const App = () => {
	return (
		<>
			<Navbar/>
			<Cart/>
			<main className={'flex flex-col gap-16 relative'}>
				<Hero heroApi={heroApi}/>
				<Sales endpoint={popularSales} ifExists/>
				<FlexContent endpoint={highlight} ifExists/>
				<Sales endpoint={topRateSales} />
				<FlexContent endpoint={sneaker}/>
				<Stories story={story}/>
			</main>
			<Footer footerAPI={footerAPI}/>
		</>
	);
};

export default App;
