import image from "./image.jpg"; 
import image2 from "./About-Us.png"; 
import "./AboutUs.css";
function AboutUS() {
  const mystyle = {
    color: "black",
    //padding: "10px",
    fontFamily: "Arial",
    position: "absolute",
    top: "50%",
    left: "30%"
  };

  const mystyle3={
    position:"relative"
  }
  const mystyle4={
    float:"right",
    align:"right",
    width:"40%",
    height:"50%",
    marginTop:"-25%"
  }

  const mystyle5={
    width:"40%",
    height:"50%",
    marginTop:"-25%"
  }

    return (
    //     <div>
    //   <div style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", 
    //   width:'100%',
    //   height:'1000px',
    //   }}>
    //   </div>
    //   About Us
    //   </div>

/* <div className="container">
  <div style={{background:`url(${AboutUs})`, backgroundRepeat:"no-repeat", width:'100%'}}></div>
  <div className="centered">Centered</div>
</div> */

<div>
<div  style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", 
    width:'100%',
    height:'1000px',
    opacity:'0.7'
    }}>
      <h1 style={mystyle}>Our mission, Our Goal! </h1>
      <br/>
      <h5>An innovative way to tackle the needs of students as well as our teachers to ease the process of educating our future:)</h5>
</div>
<div>
  <div>
  <div style={mystyle5}>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
    <div>
  <img style={mystyle4} src={image2}  className={image}/>
  </div>
  </div>
</div>
</div>
    
    );
  }
  
  export default AboutUS;