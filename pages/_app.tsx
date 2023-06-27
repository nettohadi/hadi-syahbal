import Link from "next/link";
import Layout from "../components/Layout";
import "./global.css";

const App = ({ Component, pageProps }) => (
  <Layout title="Abdul Hadi Syahbal">
    <Component {...pageProps} />
  </Layout>
);

export default App;
