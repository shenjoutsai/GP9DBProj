import { Container } from "@material-ui/core";
import { Row, Col } from 'styled-bootstrap-grid';
import Box from '@material-ui/core/Box';
import { grey } from "@material-ui/core/colors";

const styles = {
 col1:{
   backgroundColor: "grey",
   padding: "100px",
   margin: "50px",
   borderRadius: "25px",
   opacity: "90%",
   
 },
 col2:{
  backgroundColor: "grey",
  
  padding: "100px",
  float: "right",
  margin: "50px",
  width: "600px",
  borderRadius: "25px",
  opacity: "90%",
  
},
col3:{
  backgroundColor: "grey",
  //float: "right",
  padding: "100px",
  marginTop:"100px",
  margin: "50px",
  width: "600px",
  borderRadius: "25px",
  opacity: "90%",
  right: "150px",
  
},

 
}

function Home() {
    return (
      
        <div className="Home">
          <div style = {styles.col1}> 
            <h1>Our Purpose</h1>
          </div>
        
          <div  style = {styles.col2}>
            <h1>Our Finding</h1>
          </div>

          <div  style = {styles.col3}>
            <h1>About us</h1>
          </div>
        
         
       
      </div>
     
      
    );
  }
  
  export default Home;
  