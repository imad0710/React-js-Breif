import React, { Component } from 'react'
import './App.css';


export class Footer extends Component{
    render(){
        return(
            <footer className="py-3 text-center">
            <ul className="css" >
                <li className="csss" >
                    <a href="">
                        <span></span>
                        <span></span>
                       
                       
                        <span><i className="fab fa-facebook-f  mr-4"></i></span>
                    </a>
                </li>
                <li className="csss" >
                 <a href="">
                     <span></span>
                     <span></span>
                    
                    
                     <span className="fab fa-twitter"></span>
                 </a>
             </li>
             <li className="csss" >
                 <a href="https://www.instagram.com/ma.r.lo.n">
                     <span></span>
                     <span></span>
                    
                    
                     <span className="fab fa-instagram"></span>
                 </a>
             </li>
             <li className="csss" >
                 <a href="https://github.com/imad0710/My-porfolio">
                     <span></span>
                     <span></span>
                    
                    
                     <span className="fab fa-github-square "></span>
                 </a>
             </li>
            </ul>
        
            <p>Copy Right 2021 &copy; By All Rights Reserved</p>
            
     </footer>
        )
    }
}
export default Footer;