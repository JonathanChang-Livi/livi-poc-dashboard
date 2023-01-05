import dynamic from "next/dynamic";
import Script from "next/script";
import path from "path";

interface WidgetProps {
    src: string
    itemKey: string
}
const Widget = ({ src, itemKey }: WidgetProps) => {
    const Wd = dynamic(() => import(itemKey), { ssr: false })
    return (
        <>
            <script src={src} />
            < Wd />
        </>
    )
}

export default Widget