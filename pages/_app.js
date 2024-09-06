import "../styles/globals.css";
import Layout from "../components/Layout";
import Transition from "../components/Transition";
import { GoogleTagManager } from "@next/third-parties/google";

import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Transition />
          <Component {...pageProps} />
          <GoogleTagManager gtmId="GTM-KGKBMJND" />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
