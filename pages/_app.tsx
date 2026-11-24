import {useEffect} from "react";
import type {AppProps} from "next/app";

export default function App({Component, pageProps, router}: AppProps) {
  const {basePath} = router;

  useEffect(() => {
    if (process.env.NODE_ENV !== "production" || !("serviceWorker" in navigator)) {
      return;
    }

    // 既存インストールを更新できるように登録先とスコープを引き継ぐ。
    const scope = `${basePath}/`;
    navigator.serviceWorker.register(`${scope}sw.js`, {scope}).catch((error) => {
      console.error("サービスワーカーの登録に失敗しました", error);
    });
  }, [basePath]);

  return <Component {...pageProps}/>;
}
