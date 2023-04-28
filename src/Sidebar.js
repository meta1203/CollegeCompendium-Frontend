import React from 'react';
import Sidebar from 'react-bootstrap-sidebar-menu';
import { MdSearch, MdOutlineAccountCircle, MdFavorite, MdSchool } from "react-icons/md";
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
    const shouldShow = user.id &&
        ((typeof user.approved) === "undefined" || user.approved);
    return (
        <Sidebar variant="dark" bg="dark" expand="md">
            <Sidebar.Collapse>
                <Sidebar.Header>
                    <Sidebar.Brand>
                        <img src="/college_compendium.svg"
                            style={{ height: "1.5em", "padding-left": "1rem" }}
                            alt="The CollegeCompendium logo" />
                        
                    </Sidebar.Brand>
                    <Sidebar.Toggle />
                </Sidebar.Header>
                <Sidebar.Body>
                    <Sidebar.Nav>
                        {shouldShow ?
                            (user.college ?
                                <>
                                    <Sidebar.Nav.Link as={Link} to="/manage_school">
                                        <Sidebar.Nav.Icon><MdSchool /></Sidebar.Nav.Icon>
                                        <Sidebar.Nav.Title>Manage School</Sidebar.Nav.Title>
                                    </Sidebar.Nav.Link>
                                    <Sidebar.Nav.Link as={Link} to="/interested">
                                        <Sidebar.Nav.Icon><MdFavorite /></Sidebar.Nav.Icon>
                                        <Sidebar.Nav.Title>Interested Students</Sidebar.Nav.Title>
                                    </Sidebar.Nav.Link>
                                </>
                                :
                                <>
                                    <Sidebar.Nav.Link as={Link} to="/search">
                                        <Sidebar.Nav.Icon><MdSearch /></Sidebar.Nav.Icon>
                                        <Sidebar.Nav.Title>Find Schools</Sidebar.Nav.Title>
                                    </Sidebar.Nav.Link>
                                    <Sidebar.Nav.Link as={Link} to="/profile">
                                        <Sidebar.Nav.Icon><MdOutlineAccountCircle /></Sidebar.Nav.Icon>
                                        <Sidebar.Nav.Title>My Profile</Sidebar.Nav.Title>
                                    </Sidebar.Nav.Link>
                                    <Sidebar.Nav.Link as={Link} to="/favorites">
                                        <Sidebar.Nav.Icon><MdFavorite /></Sidebar.Nav.Icon>
                                        <Sidebar.Nav.Title>My Favorites</Sidebar.Nav.Title>
                                    </Sidebar.Nav.Link>
                                </>
                            )
                            :
                            undefined
                        }
                    </Sidebar.Nav>
                </Sidebar.Body>
            </Sidebar.Collapse>
        </Sidebar>
    );
}