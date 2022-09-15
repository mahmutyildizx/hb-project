import store from "../src/store/";
import { Provider } from "react-redux";
import "../styles/globals.scss";
import "../styles/reset.scss";
import { ModalProvider } from "../src/context/modal-context";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
    </Provider>
  );
}

export default MyApp;
