import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import banner from '../components/Media/banner.png';
import '../components/Style/Home.css';

export class Order extends Component {
    static displayName = Order.name;

    render() {
        return (
            <div>
                <div class="bannerdiv">
                    <img src={banner} alt="Food Banner Image" class="banner" />
                </div>

                <div class="form-div form-group row">
                <form>
                    <label for="name" class="text-light">Name</label><br />
                    <input type="text" id="name" name="name" placeholder="Name" class="form-control"/><br/>

                    <label for="address" class="text-light">Adress</label><br />
                        <input type="text" id="address" name="address" placeholder="Address" class="form-control" /><br/>

                    <label for="number" class="text-light">Phone Number</label><br />
                        <input type="text" id="number" name="number" placeholder="Phone Number" class="form-control" /><br/>

                    <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}