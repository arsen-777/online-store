import React from "react";
import cardsStyle from "./Cards.module.css";

import GetProducts from "../Hooks/GetProducts";

export default function Cards(props) {
	return (
		<div className={cardsStyle.cards}>
			{props.data.length > 0 &&
				props.data.map(({ id, title, price, images, brand, count }) => {
					return (
						<GetProducts
							key={id}
							id={id}
							title={title}
							price={price}
							images={images}
							brand={brand}
							onBasket={props.onBasket}
							countItemPlus={props.countItemPlus}
							countItemMinus={props.countItemMinus}
							counter={count}
						/>
					);
				})}
		</div>
	);
}
