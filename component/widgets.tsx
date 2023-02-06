import dynamic from "next/dynamic"

//@ts-ignore
export const Widget1 = dynamic(() => import('widget1/demo'), { ssr: false, });
//@ts-ignore
export const Widget2 = dynamic(() => import('widget2/demo'));
//@ts-ignore
export const Widget3 = dynamic(() => import('widget3/demo'));
//@ts-ignore
export const Widget4 = dynamic(() => import('widget4/demo'));
//@ts-ignore
export const Widget5 = dynamic(() => import('widget5/demo'));