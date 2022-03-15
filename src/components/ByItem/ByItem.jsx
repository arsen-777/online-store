import React from "react";
import yeeStyle from "./ByItem.module.css";
import plus from "../../asets/images/plus.svg";
import minus from "../../asets/images/minus.svg";
import closeBtn from "../../asets/images/close.svg";

export default function ByItem({
	price,
	title,
	images,
	count,
	id,
	countItemPlus,
	countItemMinus,
	deleteItem,
}) {
	const addItem = () => {
		countItemPlus(id);
	};

	const minusItem = () => {
		countItemMinus(id);
	};
	const delItem = () => {
		deleteItem(id);
	};
	return (
		<div>
			<div className={yeeStyle.modal_item_block}>
				<div className={yeeStyle.img_block}>
					<img src={images[0]} alt=""></img>
				</div>
				<div>
					<h4>{title}</h4>
					<p>{price} $</p>
				</div>
				<div className={yeeStyle.plus_minus}>
					<div>
						<img src={plus} onClick={addItem} alt="" />
					</div>
					<span>
						<h3>{count}</h3>
					</span>

					<div>
						<img src={minus} onClick={minusItem} alt="" />
					</div>
				</div>

				<div>
					<p>
						Total:<small>{count * price} $</small>
					</p>
				</div>
				<div className={yeeStyle.close_item}>
					<img src={closeBtn} onClick={delItem} alt="" />
				</div>
			</div>
		</div>
	);
}
