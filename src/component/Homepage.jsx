
function Homepage(data) {
    console.log(data.data);
    const clickme = data.data;

    return (
        <>
        <div className="HomePage">
            <button onClick={() => clickme()} className="text-4xl font-bold">Click Me!</button>
        </div>
      
        </>
    )
}
export default Homepage;