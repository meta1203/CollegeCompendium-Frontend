import { Container } from "react-bootstrap";
import { Route, Routes, Switch } from "react-router-dom";
import NewUserForm from "./forms/NewUserForm";
import ProfileManagement from "./forms/ProfileManagement";
import PlaceholderIframe from './PlaceholderIframe';
import HomePage from "./forms/HomePage"
import useAPI from "./useAPI";

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
                        <Route path="/search" element={
                            <PlaceholderIframe src="https://public.meta1203.com/videos/rickroll.mp4" />
                        } />
                        <Route path="/profile" element={
                            <ProfileManagement/>
                        } />
                        <Route path="/course_work" element={
                            <PlaceholderIframe src="https://public.meta1203.com/videos/Le%20KAISER%20Has%20Arrived.mp4" />
                        } />
                        <Route path="/extracurriculars" element={
                            <PlaceholderIframe src="https://public.meta1203.com/videos/one_through_ten.mp4" />
                        } />
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
