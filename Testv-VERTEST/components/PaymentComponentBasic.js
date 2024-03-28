import React from 'react';

const PaymentComponentBasic = () => {
  return (
    <>
<section class="mb-28 text-center">

<div className="container">
<div className="card">
        <div className="card-header">
          <h4 className="title">Tax Planning(DIY)</h4>
          <h3 className="original-price">&#8377; 499 </h3>
    <h3 className="discounted-price">&#8377; Free</h3> 
        </div>
        <div className="card-body">
          <ul className="features">
          <li className="feature">Maximize your financial potintial with  <mark>capital Tax Plus</mark></li>
          <li className="feature">Your Execlusive access to tax planning.</li>
          

          </ul>
        </div>
        <div>
        <button className="btn-hover color-1">Start Tax Planning</button>
        </div>
      </div>

      <style jsx>{`
    .container {
      display: flex;
      justify-content:  space-evenly; /* Add space between cards */
      align-items: center;
      margin-left:10vh;
      height: 100vh;
      padding: 0 20px; /* Add padding to container */
    }

    .card {
      border-radius: 2px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      border: 1px solid #b3ffff;
      width: 300px;
      padding: 20px;
      text-align: center;
      transition: transform 0.3s ease;
    }

    .feature mark {
        background-color: #b3ffff; /* Change this to the desired color */
        color: black; /* Change this to the desired text color */
    }

    .vlue{
      font-size: 1 rem;
      font-weight: bold;
      text-transform: uppercase;
      margin-bottom: 10px;
      background-image: linear-gradient(to right, #25aae1, #40e495, #30dd8a, #2bb673); /* Gradient colors */
      -webkit-background-clip: text; /* Apply text as a mask */
      -webkit-text-fill-color: transparent; /* Hide the original text color */
    }

    .card:hover {
      transform: translateY(-20px);
    }
    .price-container {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .original-price {
      margin-right: 10px;
      font-size: 1.5rem;
      font-weight: bold;
      color: #ff8d03;
      text-decoration: line-through;
    }
    
    .discounted-price {
      font-size: 2rem;
      font-weight: bold;
      color: #6666ff;
    }
    .title {
      font-size: 1.2rem;
      font-weight: bold;
      text-transform: uppercase;
      margin-bottom: 10px;
    }

    .price {
      font-size: 2rem;
      font-weight: bold;
    }

    .term {
      font-size: 10px;
      color: #777777;
    }

    .features {
      list-style: none;
      padding: 0;
      margin-top: 20px;
      text-align: left;
    }

    .feature {
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      font-size: 10px; /* Adjust text size as needed */
    }

    .feature1 {
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      font-size: 20px; /* Adjust text size as needed */
    }

    .feature svg {
      width: 24px;
      height: 24px;
      margin-right: 10px;
    }

    .buttons {
      margin: 10%;
      text-align: center;
  }
  
  .btn-hover {
    display: block;
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 30px;
    background-color: #3333ff;
    color: #ffffff;
    font-size: 10px;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 20px;
      background-size: 300% 100%;
  
      border-radius: 50px;
      moz-transition: all .4s ease-in-out;
      -o-transition: all .4s ease-in-out;
      -webkit-transition: all .4s ease-in-out;
      transition: all .4s ease-in-out;
  }
  
  .btn-hover:hover {
      background-position: 100% 0;
      moz-transition: all .4s ease-in-out;
      -o-transition: all .4s ease-in-out;
      -webkit-transition: all .4s ease-in-out;
      transition: all .4s ease-in-out;
  }
  
  .btn-hover:focus {
      outline: none;
  }
  
  .btn-hover.color-1 {
      background-image: linear-gradient(to right, #25aae1, #40e495, #30dd8a, #2bb673);
      box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);
  }
  `}</style>
    </div>
</section>
    </>
         );
};



export default PaymentComponentBasic;
