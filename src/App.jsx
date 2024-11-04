import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  // Es6
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

    const getData= ()=>{

      
    }
  return (
    <>
      <h1></h1>
    </>
  );
}

export default App;
