import React, {Component} from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import './scss/custom.scss';

export default function Header() {
    return (
        <ReactBootstrap.Navbar expand="lg" variant="light" bg="color5">
            <ReactBootstrap.Container>
                <ReactBootstrap.Navbar.Brand href="#home"><b>Music Diary</b></ReactBootstrap.Navbar.Brand>
                <ReactBootstrap.Navbar.Toggle />
                <ReactBootstrap.Navbar.Collapse>
                    <ReactBootstrap.Nav>
                        <ReactBootstrap.Nav.Link href="#music-list" class="header-item">Music List</ReactBootstrap.Nav.Link>
                    </ReactBootstrap.Nav>
                </ReactBootstrap.Navbar.Collapse>
                <ReactBootstrap.Nav.Link href="#profile" class="header-item">
                    <img src="https://brandguide.tamu.edu/assets/img/logos/tam-logo.png" style={{height:40}} />
                </ReactBootstrap.Nav.Link>
            </ReactBootstrap.Container>
        </ReactBootstrap.Navbar>
        //<button>Profile</button>
    )
}
