import dynamic from "next/dynamic";

const Widget = (src: string) => dynamic(() => import(src), {ssr: false,});

// export const Widget1 = dynamic(() => import('widget1/demo'), {ssr: false,});
// export const Widget2 = () => Widget('widget2/demo')
// export const Widget3 = () => Widget('widget3/demo')