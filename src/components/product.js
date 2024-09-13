import img1 from "../assets/images/one.jpg"
import img2 from "../assets/images/two.jpg"
import img3 from "../assets/images/three.jpg"

function Product(){
    return(
      
         <div className="products">
              
              <div className="box">
                
                          <img src={img1} alt="perfume"></img>
                          <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>    
              </div>
              
              <div className="box">
                  <img src={img2} alt="villain"></img>
                  <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p> 
              </div>
              <div className="box">
                  <img src={img3} alt="Designs Club"></img>
                  <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
              </div>
  
            
              
          </div>
      
    )
  }
  export default Product