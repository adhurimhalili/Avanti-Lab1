import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import banner from '../components/Media/banner.png';
import '../components/Style/Home.css';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
                <div>
                <div class="bannerdiv">
                    <img src={banner} alt="Food Banner Image" class="banner"/>
                </div>

                    <main style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <section class="homeblocks" id="about" style={{ backgroundColor: 'black', padding: '20px' }}>
                            <h2 class="fa-regular fa-calendar">Order</h2>
                            <p>Order food from our restaurant.</p>
                            <Link to="/Order">Order</Link>
                        </section>
                    <section class="homeblocks" id="contact" style={{ backgroundColor: 'black', padding: '20px' }}>
                            <h2>Reserve</h2>
                            <p>Reserve a table.</p>
                            <Link to="/Reserve">Reserve</Link>
                        </section>
                    </main>
                </div>
        );
    }
}
