const Shimmer = ()=> (
    <div className="shimmer-container">
      {Array(10).fill("").map( (e,index) =>  (<div className="shimmer" key={index}>
        </div> ))}
    </div>
)

export default Shimmer