import React, { Component } from 'react';
import Card from './Card'
import './CardList.css'
import {connect} from 'react-redux'
import 'react-router-redux'
import {groupSelect} from './actions/Group'
import {removeArticle} from './actions/Article'

class CardList extends Component {
  componentWillMount(){
    const {dispatch,groupName} = this.props;
    dispatch(groupSelect(groupName));
  }
  handleRemove(item){
    const {dispatch}= this.props;
    dispatch(removeArticle(item));
  }
  createCard(item,index){
    return(<li className="list_row" key={item.key}>
              <pre className="common_margin grey_text">{item.content}</pre>
              {
                (item.cardInfo)?<Card cardInfo={item.cardInfo}/>:""
              }
            </li>);
  }
  render() {
    const {articles} = this.props;
    return(
      <div>
        {articles && articles.length > 0 &&
          <ul>{ articles.map(
            (item,index)=>{
              return <li className="list_row" key={item.key}>
              <pre className="common_margin grey_text">{item.content}</pre>
              {
                (item.cardInfo)?<Card cardInfo={item.cardInfo}/>:""
              }
              <div className="remove">
                <span onClick={(e)=>this.handleRemove(item)}>삭제하기</span>
              </div>
            </li>
            }

          ) }</ul>
        }
      </div>
    );
  }
}
let mapStateToProps = (state, ownProps ) => {
  return {...state.default,...ownProps}
}
export default connect(mapStateToProps)(CardList);