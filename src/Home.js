
import './App.css';
import React, { Component } from 'react'
import axios from 'axios'
import Searsh from './Searsh'

export class Home extends Component{
    state = {
        obj: [],
      };
      GitDATAsearch = (data) => {
        if (data != '') {
          axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${data}`)
            .then((Response) => {
              this.setState({
                obj: Response.data.meals,
              });
            });
        }
    }
    render () {
        return(  <div>   
              <div className="container-fluid home" >
        <div className="row">
            <div className="col">
               <p id="ph">
                    <h1>YOUR FOOD</h1>
                    <h3>Delious and delicious foods</h3>
               </p>
               
          <div className="col-lg-8 ">
            <Searsh getSearsh={this.GitDATAsearch} />
          </div>
          </div>
 </div></div>

          <div className="afficher mt-5">
            <div className="row">
              {this.state.obj.map((gitDATA) => (
                <div className="col-md-4">
                  <div className="card text-white bg-secondary mb-3">
                    <img
                      className="card-img-top"
                      src={gitDATA.strMealThumb}
                      alt=""
                    />
                    <div className="card-body">
                      <h4 className="card-title">{gitDATA.strMeal}</h4>
                      <p className="card-text">
                        <a
                          href={'show/' + gitDATA.idMeal}
                          className="btn btn-danger">
                          show more
                        </a>
                        <a className="favori" href="/favori">
                          <i className="fas fa-heart"></i>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        
               
            </div>
            
   
   
        );
              }
            }
        
        export default Home;
    
        