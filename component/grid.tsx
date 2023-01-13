// @flow
import * as React from "react";
import ReactGridLayout, { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export interface GridItemProps {
    id: string
    height: number
    width: number
    order: number
    widget: React.ReactNode
}
interface GridLayoutProps {
    items: GridItemProps[],
    editMode: boolean
}
export const DraggableGridLayout = ({ items, editMode }: GridLayoutProps) => {
    //   static defaultProps: Props = {
    //     className: "layout",
    //     rowHeight: 30,
    //     onLayoutChange: function() {},
    //     cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
    //   };

    //   state: State = {
    //     currentBreakpoint: "lg",
    //     compactType: "vertical",
    //     mounted: false,
    //     layouts: { lg: generateLayout() }
    //   };
    // onBreakpointChange = (breakpoint): void => {
    //     this.setState({
    //         currentBreakpoint: breakpoint
    //     });
    // }
    const list = items.sort((a, b) => a.order > b.order ? 1 : -1)
    const generateLayout = (l: GridItemProps[]): { i: string, w: number, h: number, x: number, y: number }[] => {
        return l.map((x, i, a) => {
            return {
                i: x.id,
                w: x.width,
                h: x.height,
                x: i === 0 ? 0 : a.filter((n, m) => m < i).map((y) => y.width).reduce((a, b) => a + b) % 6,
                y: i === 0 ? 0 : a.filter((n, m) => m < i).map((y) => y.height).reduce((a, b) => a + b) / 6,
            }
        })
    }
    const layout = generateLayout(list)

    // const [list, setList] = React.useState(generateLayout(items.sort((a, b) => a.order > b.order ? 1 : -1)))

    // const onLayoutChange = (layout: ReactGridLayout.Layout[]) => {
    //     // alert(JSON.stringify(layout))
    //     setList(tidyLayout(layout))
    // }

    // const tidyLayout = (layout: ReactGridLayout.Layout[]) => {
    //     const sorted = layout.sort((a, b) => (a.y < b.y) || (a.y >= b.y && a.x < b.x) ? -1 : 1)
    //     const newLayout: {i: string, x: number, y: number, h: number, w: number }[]= sorted.map((x, i, a) => {
    //         return {
    //             i: x.i,
    //             h: x.h,
    //             w: x.w,
    //             x: i === 0 ? 0 : a.filter((n, m) => m < i).map((y) => y.w).reduce((a, b) => a + b) % 6,
    //             y: i === 0 ? 0 : a.filter((n, m) => m < i).map((y) => y.h).reduce((a, b) => a + b) / 6,
    //         }
    //     })
    //     alert(JSON.stringify(newLayout))
    //     return newLayout
    // }
    return (
        <ReactGridLayout
            layout={layout}
            cols={6}
            // onBreakpointChange={onBreakpointChange}
            // onLayoutChange={onLayoutChange}
            // onDrop={this.onDrop}
            // WidthProvider option
            // measureBeforeMount={true}
            compactType={'vertical'}
            isBounded
            // useCSSTransforms
            isDraggable={editMode}
            width={900}
        >
            {layout.map((x, i) => {
                return (
                    <div key={x.i}>
                        {list[i].widget}
                    </div>
                )
            })

            }
        </ReactGridLayout>
    )
}