import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LoginMenu } from './api-authorization/LoginMenu';
import './NavMenu.css';

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true,
            isAdmin: false // Initialize isAdmin state to false
        };
    }

    async componentDidMount() {
        const response = await fetch('/api/user', {
            headers: !this.props.token ? {} : { 'Authorization': `Bearer ${this.props.token}` }
        });

        if (!response.ok) {
            // Handle error
            return;
        }

        const data = await response.json();

        this.setState({
            isAdmin: data.role === 'Admin' // Set isAdmin state to true if user has admin role
        });
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-red box-shadow mb-3" container light>
                    <NavbarBrand className="text-dark" tag={Link} to="/">Avanti Due Amici</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                        <ul className="navbar-nav flex-grow">
                            <NavItem>
                                <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} className="text-dark" to="/Contact">Contact Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} className="text-dark" to="/About">About Us</NavLink>
                            </NavItem>
                            {this.state.isAdmin && // Render Dashboard link only if isAdmin state is true
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/Dashboard">Dashboard</NavLink>
                                </NavItem>
                            }
                            <LoginMenu>
                            </LoginMenu>
                        </ul>
                    </Collapse>
                </Navbar>
            </header>
        );
    }
}
