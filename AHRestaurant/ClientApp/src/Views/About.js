import React, { Component } from 'react';
import banner from '../components/Media/banner.png';


export class About extends Component {
    static displayName = About.name;

    render() {
        return (
            <><div class="bannerdiv">
                <img src={banner} alt="Food Banner Image" class="banner" />
            </div>

                <div>
                    <h1>About Us</h1>
                </div></>
        );
    }
}