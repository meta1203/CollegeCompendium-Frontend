import { Container } from "react-bootstrap";
import { Route, Routes, Switch } from "react-router-dom";
import NewUserForm from "./forms/NewUserForm";
import CollegeManagement from "./forms/CollegeManagement";
import ProfileManagement from "./forms/ProfileManagement";
import PlaceholderIframe from './PlaceholderIframe';
import HomePage from "./forms/HomePage"
import useAPI from "./useAPI";
import Search from "./Search";
import Favorites from "./Favorites";

export default function Content(props) {
    const { user } = useAPI();
    return (
        <Container fluid className="pt-3" style={{
            "overflowY": "scroll",
        }}>
            <Routes>
                {/* only show New User Experience
                    if the user does not exist. */}
                {user.id ?
                    <>
                        <Route path="/" exact={true} element={
                            <>
                                <HomePage/>
                            </>
                        } />
                        {user.college ? 
                        <>
                        <Route path="/manage_school" element={
                            <CollegeManagement />
                        } />
                        <Route path="/interested" element={
                            <PlaceholderIframe src="https://public.meta1203.com/videos/Le%20KAISER%20Has%20Arrived.mp4" />
                        } />
                        </> 
                        : 
                        <>
                        <Route path="/search" element={
                            <Search />
                        } />
                        <Route path="/profile" element={
                            <ProfileManagement/>
                        } />
                        <Route path="/favorites" element={
                            <Favorites />
                        } />
                        </>}
                        
                    </>
                    :
                    <Route path="/" element={
                        <NewUserForm />
                    } />
                }
            </Routes>
        </Container>
    );
}
