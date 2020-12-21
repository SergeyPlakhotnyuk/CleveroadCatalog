import React from 'react';
import './login.css';
import './GoodsCard.css'
import firebase from 'firebase';
import { db } from './dbinit';
import GoodsList from './GoodsList';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      hasAccount: props.hasAccount,
    }
    this.hasAccount = this.state.hasAccount;
    this.storageKey = 'catalogUserData';
  }

  componentDidMount() {
    console.log("Database:", db);
  }

  saveUserDataToLocalStorage() {
    localStorage.setItem('catalogUserData', JSON.stringify(this.state));
  }

  getuserDataFromLocalStorage() {
    const data = localStorage.getItem('cataloguserData');
    return JSON.parse(data);
  }

  authChangesHandler = ({ target: { value, id } }) => {
    this.setState({
      [id]: value
    });
  }

  createAccountHandler = () => {
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
        this.setState({ hasAccount: true });
        console.log('Authorization response:', response);
        if(!localStorage.getItem('catalogUserData')){
          this.saveUserDataToLocalStorage();
        }
        else {
          const userData = this.getuserDataFromLocalStorage();
          this.setState(userData);
        }
      }
      )
      .catch(error => console.log(error));
  }


  render() {
    const { hasAccount } = this.state;
    return (
      hasAccount ?
        (
          //TODO: отрисовать страницу товаров с "карточками"
          <GoodsList />
        )
        :
        (
          <div id="background">
            <div id="login_form">
              <p id="greeting">Добро пожаловать в Каталог</p>
              <div className="login_block">
                <label for="login" className="login_block-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="login_block-textbox"
                  onChange={this.authChangesHandler}>
                </input>
                <label for="password" className="login_block-label">Пароль</label>
                <input
                  type="password"
                  id="password" name="password"
                  className="login_block-textbox"
                  onChange={this.authChangesHandler}>
                </input>
                <input
                  type="submit"
                  value="Вход/Регистрация"
                  id="login_block-submit"
                  onClick={this.createAccountHandler}>
                </input>
              </div>
            </div>
          </div>
        )
    )
  }
}