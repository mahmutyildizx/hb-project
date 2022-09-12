import store from "../src/store/";
import { Provider } from "react-redux";
import "../styles/globals.scss";
import "../styles/reset.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
