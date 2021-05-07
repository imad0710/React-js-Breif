import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {add_cart} from './actions.js/index';

export class Favorites extends Component {

  
 

  render() {

    let data=this.props.obj;
    console.log("ddd",data)
    let table=[];
      for(let i=0;i<data.length;i++){
      table.push(data[i].data);
    }
  
   

    return (
      <div>
        <div className="row">
          {table[0].map((resp) => (
            <div className="col-md-4" key={resp.idMeal}>
              <div className="card text-white bg-secondary mb-3">
                <img className="card-img-top" src={resp.strMealThumb} alt="" />
                <div className="card-body">
                  <h4 className="card-title">{resp.strMeal}</h4>
                  <p className="card-text">
                    <Link
                      to={'/Favorites/' + resp.idMeal}
                      className="btn btn-danger">
                        Dellet
                    </Link>
                    {console.log("ff",resp)}
                   
                    
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
       
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    obj: state,
    
  };
}
export default connect(mapStateToProps,{add_cart})(Favorites);