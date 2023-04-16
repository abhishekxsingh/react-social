import { Fragment } from 'react';
import './index.css';

function profile (props) {
    return(
       <Fragment>
         <div className="container">
        <h1>User Profile</h1>
        {/* <div className="image">
            <img className="circular-square" id="profile-image" />
        </div> */}
            <div className="user-details">
                <div>
                    <label for="Name">Name</label>
                    <div id="firstName" className="API"></div>
                </div>
                <div>
                    <label for="name">Email</label>
                    <div id="Email" className="API"></div>
                </div>
                <div>
                    <label for="mobile Number">Mobile</label>
                    <div id="mobileNo" className="API"></div>
                </div>
                <div>
                    <label for="Address">Address</label>
                    <div id="Address" className="API"></div>
                </div>
            </div>
            <button className="change" onclick="changeMe()">changeMe</button>
    </div>
       </Fragment>
    );
}

export default profile;