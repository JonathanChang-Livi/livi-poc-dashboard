// @flow
import * as React from "react";
import ReactGridLayout, { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export interface GridItemProps {
    id: string
    height: number
    width?: undefined | { [key in WindowSize]: number }
    position: {
        x: number,
        y: number
    }
    widget: React.ReactNode
}
interface GridLayoutProps {
    items: GridItemProps[],
    editMode: boolean
}
type WindowSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg'
const full = { lg: 6, md: 1, sm: 1, xs: 1, xxs: 1 }
export const DraggableGridLayout = ({ items, editMode }: GridLayoutProps) => {
    const list = items
    // .sort((a, b) => a.order > b.order ? 1 : -1)
    const generateLayout = (l: GridItemProps[], size: WindowSize): { i: string, w: number, h: number, x: number, y: number }[] => {
        return l.map((x, i, a) => {
            return {
                i: x.id,
                w: x.width === undefined ? full[size] : x.width[size],
                h: x.height,
                x: i === 0 ? 0 : a.filter((n, m) => m < i).map((y) => y.width === undefined ? full[size] : y.width[size]).reduce((a, b) => a + b) % 6,
                y: i === 0 ? 0 : a.filter((n, m) => m < i).map((y) => y.height).reduce((a, b) => a + b) / 6,
            }
        })
    }
    const newLayout = (list: GridItemProps[]) => {
        return {
            lg: generateLayout(list, 'lg'),
            md: generateLayout(list, 'md'),
            sm: generateLayout(list, 'sm'),
            xs: generateLayout(list, 'xs')
        }
    }

    const [layouts, setLayouts] = React.useState(newLayout(list))

    const onLayoutChange = (layout: ReactGridLayout.Layout[]) => {
        // alert(JSON.stringify(layout))
        setLayouts(newLayout(tidyLayout(layout)))
    }

    const tidyLayout = (layout: ReactGridLayout.Layout[]) => {
        const sorted = layout.map(x => x.i).map(x => list.find(y => y.id === x)!!)
        // console.log(JSON.stringify(layout))
        return sorted
    }

    return (
        <ResponsiveReactGridLayout
            layouts={layouts}
            cols={full}
            // onBreakpointChange={onBreakpointChange}
            onLayoutChange={onLayoutChange}
            // onDrop={this.onDrop}
            // WidthProvider option
            // measureBeforeMount={true}
            breakpoints={{ lg: 1000, md: 800, sm: 600, xs: 400, xxs: 0 }}
            compactType={'vertical'}
            isBounded
            // useCSSTransforms
            isDraggable={editMode}
        >
            {list.map((x, i) => {
                return (
                    <div key={x.id}>
                        {list[i].widget}
                    </div>
                )
            })

            }
        </ResponsiveReactGridLayout>
    )
}