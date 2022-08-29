import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import routes from "./routes";

function App() {
  return (
    <div className="App">
      			<Header />
            <div className="pages">
              <Routes>
              {/* <Switch> */}
                {routes.map((item) => {
                  return (
                    <Route
                      key={item.id}
                      path={item.path}
                      element={item.component}
                    />
                  )
                })}
                {/* <Redirect to="/404" /> */}
              {/* </Switch> */}
              </Routes>
            </div>
            <Footer  />
    </div>
  );
}

export default App;