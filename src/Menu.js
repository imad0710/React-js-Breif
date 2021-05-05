
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {add_cart} from '../src/actions.js/index'
import { Link } from 'react-router-dom';
import axios from 'axios'
import './App.css'


export class Menu extends Component {


    state = {
        menu: []
    }
    componentDidMount() {
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
            .then(res => {
                console.log(res);
                this.setState({
                    menu: res.data.meals
                })

            })
    }

    render() {

        return (

      
            <div className="container-fluid menu">
                <div className="row">
                    {this.state.menu.map(res => (
                        <div className="col-lg-3 col-md-6 mt-5">

                            <div className="card S mx-4 col-md-3 my-2">
                                <img className="card-img-top" src={res.strMealThumb} alt="" />
                                <div className="card-body">
                                    <h4 className="card-title">{res.strMeal}</h4>
                                    <p className="card-text">
                                        <a href={'/Detail/' + res.idMeal} className="btn btn-success">show more</a>

                                    </p>
                                    <Link> <input type="submit" onClick={ () =>this.props.add_cart( this.state.obj)} value="Add" className="btn btn-success wh-5" width="30px"/></Link>  
                                </div>
                            </div>

                        </div>

                    ))}

                </div>
            </div>

  
        )
    }
}
export default connect(state => {
    return{
      reminders: state
    }
  },{add_cart})(Menu);