
import React, { Component } from 'react'

import axios from 'axios'

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

                            <div className="card text-white bg-secondary mb-3">
                                <img className="card-img-top" src={res.strMealThumb} alt="" />
                                <div className="card-body">
                                    <h4 className="card-title">{res.strMeal}</h4>
                                    <p className="card-text">
                                        <a href={res.strYoutube} className="btn btn-success">show more</a>

                                    </p>
                                </div>
                            </div>

                        </div>

                    ))}

                </div>
            </div>


        )
    }
}
export default Menu;