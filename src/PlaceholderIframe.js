export default function PlaceHolderIframe(props) {
    return (
        <video autoplay controls src={props.src} style={{
            width: "100%",
            height: "100%",
        }}>
            <source src={props.src} />
        </video>
    );
    /* return (
        <iframe src={props.src} style={{
            width: "100%",
            height: "100%",
        }}></iframe>
    ); */
}