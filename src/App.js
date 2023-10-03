import Property from "./components/property";
import { data } from "./datas/data";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import PropertyDetail from "./components/propertyDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Property data={data} />} />
        <Route
          path="/property/:id"
          exact
          element={<PropertyDetail data={data} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
