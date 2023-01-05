import dynamic from "next/dynamic";

const Widget = (src: string) => dynamic(() => import(src), {ssr: false,});

export default Widget