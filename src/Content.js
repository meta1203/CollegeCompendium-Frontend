import { Container } from "react-bootstrap";
import { Route, Routes, Switch } from "react-router-dom";
import PlaceholderIframe from './PlaceholderIframe';

export default function Content(props) {
    return (
        <Container fluid className="pt-3" style={{
            "overflow-y": "scroll",
            }}>
            <Routes>
                <Route path="/" exact={true} element={
                    <h1>Hi! I'm the Index!</h1>
                } />
                <Route path="/search" element={
                    <PlaceholderIframe src="https://public.meta1203.com/videos/rickroll.mp4" />
                } />
                <Route path="/profile" element={
                    <PlaceholderIframe src="https://public.meta1203.com/videos/bad_apple_in_the_ocean.mp4" />
                } />
                <Route path="/course_work" element={
                    <PlaceholderIframe src="https://public.meta1203.com/videos/Le%20KAISER%20Has%20Arrived.mp4" />
                } />
                <Route path="/extracurriculars" element={
                    <PlaceholderIframe src="https://public.meta1203.com/videos/one_through_ten.mp4" />
                } />
            </Routes>
        </Container>
    );
}