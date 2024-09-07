import "../styles/globals.css";
import Layout from "../components/Layout";
import Transition from "../components/Transition";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

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
          <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
