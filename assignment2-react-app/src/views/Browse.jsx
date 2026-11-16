
const Browse = (props) => {
    return(
        <div>
            <h1>BROWSE</h1>
            <ul>
                {props.data.map((e) => (
                    <li key={e.paintingId}>{e.title}</li>
                ))}
            </ul>
        </div>
)}

export default Browse;