import axios from 'axios';
import React, { Component } from 'react';
import {connect} from 'react-redux'
import {add_cart} from '../src/actions.js/index'

import { Link } from 'react-router-dom';
export class Detail extends Component {
  state = {
    obj: [],
  };
  componentWillMount = () => {
    const login = this.props.match.params.login;
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${login}`)
      .then((res) => {
        this.setState({
          obj: res.data.meals,
        });
      });
  };
 
  render() {
    return (
      <div className="container-fluid mx-0 my-5">
        {this.state.obj.map((gitDATA) => (
          <div className="row">
            <div className="col-lg-4">
              <img className="card-img-top" src={gitDATA.strMealThumb} alt="" />
            </div>
            <div className="col-lg-8 compenent">
              <h4 className="">
                {gitDATA.strMeal}
                
              </h4>
              <h2>Their components</h2>
              <b>
                {gitDATA.strIngredient1} ,{gitDATA.strMeasure1},<br/>{gitDATA.strIngredient2},{gitDATA.strMeasure2},<br/>
                {gitDATA.strIngredient3} ,{gitDATA.strMeasure3},<br/>{gitDATA.strIngredient4},{gitDATA.strMeasure4},<br/>
                {gitDATA.strIngredient9} ,{gitDATA.strMeasure9},<br/>{gitDATA.strIngredient5},{gitDATA.strMeasure5},<br/>
                {gitDATA.strIngredient6},{gitDATA.strMeasure6},<br/>{gitDATA.strIngredient7},{gitDATA.strMeasure7},<br/>
                {gitDATA.strIngredient8},{gitDATA.strMeasure8},<br/>{gitDATA.strIngredient10},{gitDATA.strMeasure10},<br/>
              </b>
              <h2>Preparation method</h2>

              <h6> {gitDATA.strInstructions}</h6>
             <Link> <input type="submit" onClick={ () =>this.props.add_cart( this.state.obj)} value="Add" className="btn btn-success wh-5" width="30px"/></Link>  

            </div>

          </div>
          
        ))}
      </div>
    );
  }
}


export default connect(state => {
  return{
    reminders: state
  }
},{add_cart})(Detail);