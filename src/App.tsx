import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes";
import { Theme } from '@radix-ui/themes';

function App() {
  return <>
  <Theme accentColor="crimson" grayColor="sand" radius="large" scaling="95%">
   <RouterProvider router={router} />
  </Theme>
  </>
}

export default App;
