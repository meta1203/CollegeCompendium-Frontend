import React from 'react';
import Sidebar from 'react-bootstrap-sidebar-menu';
import { MdSearch, MdOutlineAccountCircle, MdSportsSoccer } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";
import { Link } from 'react-router-dom';
import useAPI from './useAPI';

// take a look at https://ivp-dev.github.io/react-bootstrap-sidebar-menu/
// for documentation on this portion

const textStyle = {
    "fontSize": "0.75em",
    "lineHeight": "1px",
    "textAlign": "center",
};

export default function OurSidebar(props) {
    const { user } = useAPI();
    return (
        <Sidebar variant="dark" bg="dark" expand="md">
            <Sidebar.Collapse>
                <Sidebar.Header>
                    <Sidebar.Brand>
                        <img src="/college_compendium.svg"
                            style={{ height: "1.5em", "padding-left": "1rem" }}
                            alt="The CollegeCompendium logo" />
                        <div style={{ height: "1.5em" }}>
                            <span style={textStyle}>College<br />Compendium</span>
                        </div>
                    </Sidebar.Brand>
                    <Sidebar.Toggle />
                </Sidebar.Header>
                <Sidebar.Body>
                    <Sidebar.Nav>
                        {user && user.id ?
                            <>
                                <Sidebar.Nav.Link as={Link} to="/search">
                                    <Sidebar.Nav.Icon><MdSearch /></Sidebar.Nav.Icon>
                                    <Sidebar.Nav.Title>Find Schools</Sidebar.Nav.Title>
                                </Sidebar.Nav.Link>
                                <Sidebar.Nav.Link as={Link} to="/profile">
                                    <Sidebar.Nav.Icon><MdOutlineAccountCircle /></Sidebar.Nav.Icon>
                                    <Sidebar.Nav.Title>My Profile</Sidebar.Nav.Title>
                                </Sidebar.Nav.Link>
                                <Sidebar.Nav.Link as={Link} to="/course_work">
                                    <Sidebar.Nav.Icon><HiOutlineDocumentText /></Sidebar.Nav.Icon>
                                    <Sidebar.Nav.Title>My Course Work</Sidebar.Nav.Title>
                                </Sidebar.Nav.Link>
                                <Sidebar.Nav.Link as={Link} to="/extracurriculars">
                                    <Sidebar.Nav.Icon><MdSportsSoccer /></Sidebar.Nav.Icon>
                                    <Sidebar.Nav.Title>My Extracurriculars</Sidebar.Nav.Title>
                                </Sidebar.Nav.Link>
                            </>
                            :
                            undefined
                        }
                    </Sidebar.Nav>
                </Sidebar.Body>
            </Sidebar.Collapse>
        </Sidebar>
    );
}