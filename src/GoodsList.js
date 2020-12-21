import React from 'react';
import './GoodsCard.css';
import { db } from './dbinit';
import GoodsCard from './GoodsCard';

export default class GoodsList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			goodsList: [],
			cardList: []
		};
	}

	componentDidMount() {
		this.setState({goodsList: []});
		db.ref("goods").on("value", snapshot => {
			snapshot.forEach((snap) => {
				// console.log('snap', snap);
				// console.log('snap key', snap.key);
				this.state.goodsList.push(snap.val());
			});
			console.log("Component mounted, goodsList:", this.state.goodsList);
			this.createCards();
		});
	}

	createCards() {
		this.setState({cardList: []});
		for (let i = 0; i < this.state.goodsList.length; i++) {
			const card = new GoodsCard();
			card.state.photoURL = this.state.goodsList[i].photoURL;
			card.state.name = this.state.goodsList[i].name;
			card.state.description = this.state.goodsList[i].description;
			card.state.hasDiscount = this.state.goodsList[i].hasDiscount;
			card.state.price = this.state.goodsList[i].price;
			card.state.discountPrice = this.state.goodsList[i].discountPrice;
			card.state.discountPercent = this.state.goodsList[i].discountPercent;
			card.state.discountEndDate = this.state.goodsList[i].discountEndDate;
			this.state.cardList.push(card);
		}
		console.log("Card list:", this.state.cardList);
	}

	render() {
		return (
			<div id="list_container" className="goods_container">
				{
					this.state.cardList
				}
			</div>
		)
	}
}