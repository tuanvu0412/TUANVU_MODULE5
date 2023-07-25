import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import User from "./components/UserList";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;