import React, { Component } from "react";
import "./Card.css";
class Card extends React.Component {
  render() {
    return (
      <>
      <div className="container">
        <div className="card-img">
          <img
            src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F19%2Fcd%2F19cd7e04ce8761fc95070e42737b82187a84ad18.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
            alt="Sample Image" className="img"
          />
        </div>
       
        <div className="card-img">
          <img
            src="https://image.hm.com/assets/hm/19/9c/199c3950e1af6d69e915c37ab4884f34391ace62.jpg?imwidth=1536"
            alt="Sample Image" className="img"
          />
                 
        </div>
        <div className="card-img">
          <img
            src="https://image.hm.com/assets/hm/21/11/21111f0db70d0f94e98b1de9dcf015cbd836d1ab.jpg?imwidth=1536"
            alt="Sample Image" className="img"
          />
        </div>
        <div className="card-img">
          <img
            src="https://image.hm.com/assets/hm/50/c4/50c4744cb99a63c84d8235db944fffafd53d8302.jpg?imwidth=1536"
            alt="Sample Image" className="img"
          />
        </div>
        <div className="card-img">
          <img  src="https://image.hm.com/assets/hm/91/ea/91eaba6a5ea4df2cba256917a612417f00589f02.jpg?imwidth=1536"
            alt="Sample Image" className="img"
          />
        </div>
        </div> 
      </>
    );
  }
}

export default Card;
