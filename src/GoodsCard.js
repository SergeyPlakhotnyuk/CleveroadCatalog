import React from 'react';
import './GoodsCard.css';
// import { db } from './dbinit';

export default class GoodsCard extends React.Component {
	constructor(props) {
		super(props);
		// this.state = {
		// 	photoURL: "",
		// 	name: "",
		// 	description: "",
		// 	price: 0,
		// 	hasDiscount: false,
		// 	discountEndDate: 0,
		//	discountPercent: 0,
		// 	discountPrice: 0
		// };
		this.state = {
			photoURL: "https://i1.rozetka.ua/goods/5569359/44655296_images_5569359872.jpg",
			name: "Полиуретан модельный литьевой Axson F32",
			description: "Модельный литьевой полиуретан Axson F32 идеален для прототипирования сложных тонкостенных миниатюр. Благодаря своей текучести проливается в мельчайшие складки рельефа формы. Самый прочный. Один из лучших в мире пластиков для литья от французской фирмы Axson. Идеален для литья сложных тонкостенных миниатюр (машинки, танчики, детальки, фигурки, статуэтки) и негабаритной сувенирной продукции.",
			price: 426,
			hasDiscount: true,
			discountEndDate: 0,
			discountPercent: 15,
			discountPrice: 404.7
		};
	}

	componentDidMount() {
		this.render();
	}

	render() {
		return (
			<div id="good_card" className="card">
				<img id="good_photo" className="photo" src={this.state.photoURL} alt={this.state.name}></img>
				<div id="good_name" className="name">{this.state.name}</div>
				<div id="good_desc" className="desc">{this.state.description}</div>
				<div className="price">
					{
						this.state.hasDiscount ?
							(
								<>
									<div id="good_price" className="actual_price">
										Цена: ${(this.state.price * ((100 - this.state.discountPercent) / 100)).toFixed(2)} <span className="old_price">-{this.state.discountPercent}%</span>
									</div>
								</>
							)
							:
							(
								<>
								<div id="good_price" className="actual_price">
									Цена: ${this.state.price}
								</div>
								</>
							)
					}
				</div>
				<div className="buttons">
					<button className="btn_add">Редактировать</button>
					<button className="btn_delete">Удалить</button>
				</div>
			</div>
		);
	}

}