import image from "./image.jpg"; 

function Home() {
    return (
      <div style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", 
      width:'100%',
      height:'1000px',
      }}>
      </div>
    );
  }
  
  export default Home;