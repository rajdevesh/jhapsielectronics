import React from "react";
import Apple1 from "./Apple1.jpg"

const Checkout =() =>
{
    return(

        <>

  <div className="bg-light">
    <div className="container">
      <div className="py-5 text-center">
        <img className="d-block mx-auto mb-4" src={Apple1} alt="" width="72" height="72"/>
        <h2>Checkout form</h2>
        <p className="lead">Fill your details for Checkout.</p>
      </div>

      <div className="row">
        <div className="col-md-4 order-md-2 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Your cart</span>
            <span className="badge badge-secondary badge-pill">3</span>
          </h4>
          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">Apple</h6>
                <small className="text-muted">iPhone 13</small>
              </div>
              <span className="text-muted">$1200</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">One Plus</h6>
                <small className="text-muted">9R 5G</small>
              </div>
              <span className="text-muted">$800</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">Panasonic</h6>
                <small className="text-muted">Eluga RAY600</small>
              </div>
              <span className="text-muted">$500</span>
            </li>
            <li className="list-group-item d-flex justify-content-between bg-light">
              <div className="text-success">
                <h6 className="my-0">Promo code</h6>
                <small>DEVESH20</small>
              </div>
              <span className="text-success">-$500</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>$2000</strong>
            </li>
          </ul>

          <form className="card p-2">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Promo code"/>
              <div className="input-group-append">
                <button type="submit" className="btn btn-secondary">Redeem</button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-8 order-md-1">
          <h4 className="mb-3">Billing address</h4>
          <form className="needs-validation" novalidate>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label for="firstName">First name</label>
                <input type="text" className="form-control" id="firstName" placeholder="" value="" required/>
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label for="lastName">Last name</label>
                <input type="text" className="form-control" id="lastName" placeholder="" value="" required/>
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label for="username">Username</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">@</span>
                </div>
                <input type="text" className="form-control" id="username" placeholder="Username" required/>
                <div className="invalid-feedback" style={{width: "100%"}}>
                  Your username is required.
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label for="email">Email <span className="text-muted">(Optional)</span></label>
              <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div className="mb-3">
              <label for="address">Address</label>
              <input type="text" className="form-control" id="address" placeholder="1234 Main St" required/>
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div className="mb-3">
              <label for="address2">Address 2 <span className="text-muted">(Optional)</span></label>
              <input type="text" className="form-control" id="address2" placeholder="Apartment or suite"/>
            </div>

            <div className="row">
              <div className="col-md-5 mb-3">
                <label for="country">Country</label>
                <select className="custom-select d-block w-100" id="country" required>
                  <option value="">Choose...</option>
                  <option>India</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Germany</option>
                  <option>France</option>
                  <option>Japan</option>
                  <option>Russia</option>
                  <option>Switzerland</option>
                  <option>Canada</option>
                  <option>Belgium</option>
                  <option>Netherlands</option>
                  <option>Italy</option>
                  <option>Ireland</option>
                  <option>Iceland</option>
                  <option>Denmark</option>
                  <option>Norway</option>
                  <option>Finland</option>
                  <option>Sweden</option>
                  <option>Egypt</option>
                  <option>Greece</option>
                  <option>Croatia</option>
                  <option>Spain</option>
                  <option>China</option>
                  <option>Australia</option>
                  <option>Indonesnia</option>
                  <option>Nepal</option>
                  <option>Srilanka</option>
                  <option>Bhutan</option>
                  <option>Thailand</option>
                  <option>Phillipines</option>
                  <option>Taiwan</option>
                  <option>Brazil</option>
                  <option>Argentina</option>
                  <option>Chile</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <label for="state">State</label>
                <select className="custom-select d-block w-100" id="state" required>
                  <option value="">Choose...</option>
                  <option>Andaman and Nicobar</option>
                  <option>Andhra Pradesh</option>
                  <option>Arunachal Pradesh</option>
                  <option>Assam</option>
                  <option>Bihar</option>
                  <option>Chandigarh</option>
                  <option>Chhatisgarh</option>
                  <option>Delhi</option>
                  <option>Dadar and Nagar Haveli</option>
                  <option>Daman and Diu</option>
                  <option>Goa</option>
                  <option>Gujrat</option>
                  <option>Haryana</option>
                  <option>Himachal Pradesh</option>
                  <option>Jammu and Kashmir</option>
                  <option>Jharkhand</option>
                  <option>Karnatka</option>
                  <option>Madhya Pradesh</option>
                  <option>Maharastra</option>
                  <option>Kerala</option>
                  <option>Ladakh</option>
                  <option>Lakshdeep</option>
                  <option>Manipur</option>
                  <option>Meghalya</option>
                  <option>Mizoram</option>
                  <option>Nagaland</option>
                  <option>Orissa</option>
                  <option>Podichery</option>
                  <option>Punjab</option>
                  <option>Rajasthan</option>
                  <option>Sikkim</option>
                  <option>Tamil Nadu</option>
                  <option>Telangana</option>
                  <option>Tripura</option>
                  <option>Uttar Pradesh</option>
                  <option>Uttrakhand</option>
                  <option>West Bengal</option>
                  

                </select>
                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label for="zip">Zip</label>
                <input type="text" className="form-control" id="zip" placeholder="" required/>
                <div className="invalid-feedback">
                  Zip code required.
                </div>
              </div>
            </div>
            <hr className="mb-4"/>
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="same-address"/>
              <label className="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
            </div>
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="save-info"/>
              <label className="custom-control-label" for="save-info">Save this information for next time</label>
            </div>
            <hr className="mb-4"/>

            <h4 className="mb-3">Payment</h4>

            <div className="d-block my-3">
              <div className="custom-control custom-radio">
                <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" checked required/>
                <label className="custom-control-label" for="credit">Credit card</label>
              </div>
              <div className="custom-control custom-radio">
                <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required/>
                <label className="custom-control-label" for="debit">Debit card</label>
              </div>
              <div className="custom-control custom-radio">
                <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required/>
                <label className="custom-control-label" for="paypal">Paypal</label>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label for="cc-name">Name on Card</label>
                <input type="text" className="form-control" id="cc-name" placeholder="" required/>
                <small className="text-muted">Full name as displayed on Card</small>
                <div className="invalid-feedback">
                  Name on Card is required
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label for="cc-number"> Card number</label>
                <input type="text" className="form-control" id="cc-number" placeholder="" required/>
                <div className="invalid-feedback">
                  Card number is required
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 mb-3">
                <label for="cc-expiration">Expiration</label>
                <input type="text" className="form-control" id="cc-expiration" placeholder="" required/>
                <div className="invalid-feedback">
                  Expiration date required
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label for="cc-expiration">CVV</label>
                <input type="text" className="form-control" id="cc-cvv" placeholder="" required/>
                <div className="invalid-feedback">
                  Security code required
                </div>
              </div>
            </div>
            <hr className="mb-4"/>
            <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
            </form>
        </div>
    </div>
      
        <footer className="my-5 pt-5 text-muted text-center text-small">
        <p className="mb-1">&copy; 2021 Devesh Raj</p>
        <ul className="list-inline">
          <li className="list-inline-item"><a href="#">Privacy</a></li>
          <li className="list-inline-item"><a href="#">Terms</a></li>
          <li className="list-inline-item"><a href="#">Support</a></li>
        </ul>
      </footer>
    </div>
</div>


</>
    );

};
export default Checkout;