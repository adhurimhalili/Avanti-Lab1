import React, { Component } from 'react';
import banner from '../components/Media/banner.png';


export class Contact extends Component {
    static displayName = Contact.name;

    render() {
        return (
            <><div class="bannerdiv">
                <img src={banner} alt="Food Banner Image" class="banner" />
            </div><div>
                    <h1>Contact Us</h1>
                </div></>
        );
    }
}