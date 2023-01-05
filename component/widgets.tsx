import dynamic from "next/dynamic"

//@ts-ignore
export const Widget1 = dynamic(() => import('widget1/demo'), { ssr: false, });
//@ts-ignore
export const Widget2 = dynamic(() => import('widget2/demo'), { ssr: false, });
//@ts-ignore
export const Widget3 = dynamic(() => import('widget3/demo'), { ssr: false, });