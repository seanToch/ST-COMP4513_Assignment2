
const Browse = (props) => {
    return(
        <div>
            <h1>BROWSE</h1>
            <ul>
                {props.data.map((p) => (
                    <li key={p.paintingId}>{p.title}</li>
                ))}
            </ul>
        </div>
)}

export default Browse;