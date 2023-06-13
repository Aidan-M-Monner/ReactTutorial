import { useState } from "react";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/button";

function App() {
//   let items = [
//     'New York',
//     'San Francisco',
//     'Tokyo',
//     'London',
//     'Paris'
// ]

// const handleSelectedItem = (item: string) => {
//   console.log(item);
// }

  const [alertVisible, setAlertVisibility] = useState(false);

  return( 
    <div>
      {/* <ListGroup items={items} heading="Cities" onSelectItem={handleSelectedItem}/> */}
      {/* <Alert>Hello World!</Alert> */}

      { alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert> }
      <Button color="primary" onClick={() => setAlertVisibility(true)}>My Button</Button>
    </div>
    );
}

export default App;