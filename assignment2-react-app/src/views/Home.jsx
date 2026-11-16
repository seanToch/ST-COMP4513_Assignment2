
const Home = (props) => {
    return(
        <div>
            <h1>HOME</h1>
            <ul>
                {props.data.map((p) => (
                    <li key={p.paintingId}>{p.title}</li>
                ))}
            </ul>
        </div>
)}

export default Home;