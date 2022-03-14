import React from "react";
import bubuStyle from "./Header.module.css";
import cart from "../../asets/images/cart.svg";
function Header(props) {
	return (
		<div>
			<header className={bubuStyle.header_block}>
				<ul>
					<li>
						<a href="#">About</a>
					</li>
					<li>
						<a href="#">Gallery</a>
					</li>
					<li>
						<a href="#">Services</a>
					</li>
					<li>
						<a href="#">Contact</a>
					</li>
				</ul>
				<div>
					<div onClick={props.openModal} className={bubuStyle.header_btn}>
						<img src={cart} alt="" />
						<p className={bubuStyle.count_ctyle}>
							{props.basket.filter((item) => item.count > 0).length}
						</p>
					</div>
				</div>
			</header>
		</div>
	);
}

export default Header;
