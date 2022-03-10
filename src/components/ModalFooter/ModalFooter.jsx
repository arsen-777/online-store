import React from "react";
import FooterStyle from "./ModalFooter.module.css";

export default function ModalFooter({ basket, clearAllItems }) {
	const totalCount = basket.reduce((accl, val) => {
		return accl + val.count * val.price;
	}, 0);
	return (
		<div className={FooterStyle.modal_footer_block}>
			<div>
				<button onClick={clearAllItems}>Clear Cart</button>
			</div>

			<h3>{totalCount} $</h3>
		</div>
	);
}
