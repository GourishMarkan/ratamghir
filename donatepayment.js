import React from "react";
import "./donatepayment.css";
export default function Donatepayment() {
  return (
    <>
      <div className="payment-container">
        <div className="donation-des">
          <div className="donation-des-cont"></div>
          <div>
            <p>
              RITAMBHARA is not just another research institute; it's a unique
              <br></br>
              platform and a research arm of Ritanveshi Yogayan <br></br>
              foundation (RYF) that aims to bridge the gap between <br></br>{" "}
              ancient Indigenous or Vedic research methodologies and <br></br>
              modern techniques. We firmly believe that by harmonizing
            </p>
          </div>
          <div>
            <p>
              the wisdom of the past with the advancements of the present,
              <br></br> we can unlock new dimensions of knowledge<br></br> and
              understanding.
            </p>
          </div>
        </div>
        <div className="payment">
          <div className="payment-head">
            <h2>Donate Ritambhara Foundation</h2>
          </div>
          <div className="payment-option-cont">
            <div className="payment-options">
              <div className="payment-option1">
                <button>One Time</button>
              </div>
              <div className="payment-option2">
                <button>Monthly</button>
              </div>
            </div>
            <div className="payment-amount-choice">
              <div className="payment-amount">
                <button>$100</button>
              </div>
              <div className="payment-amount">
                <button>$200</button>
              </div>
            </div>
            <div className="payment-amount-choice">
              <div className="payment-amount">
                <button>$500</button>
              </div>
              <div className="payment-amount">
                <button>$1000</button>
              </div>
            </div>
            <div className="payment-amount-choice2">
              <div className="payment-amount">
                <button>$50</button>
              </div>
            </div>
            <div className="custom-payment">
              <input type="text" placeholder="$" />
            </div>
            <div className="proceed">
              <button>NEXT</button>
            </div>
            <div>
              <h4>Ritambhara.com</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
