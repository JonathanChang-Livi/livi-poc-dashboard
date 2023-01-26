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
type WindowSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
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
    const generateLayout = (l: GridItemProps[], size: WindowSize): { i: string, w: number, h: number, x: number, y: number }[] => {
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

    const layout = { 
        lg: generateLayout(list, 'lg'),
        md: generateLayout(list, 'md'), 
        sm: generateLayout(list, 'sm'), 
        xs: generateLayout(list, 'xs')
    }
    return (
        <ResponsiveReactGridLayout
            layouts={layout}
            cols={{ lg: 6,  md: 6, sm: 2, xs: 1, xxs: 1 }}
            // onBreakpointChange={onBreakpointChange}
            // onLayoutChange={onLayoutChange}
            // onDrop={this.onDrop}
            // WidthProvider option
            // measureBeforeMount={true}
            compactType={'vertical'}
            isBounded
            // useCSSTransforms
            isDraggable={editMode}
        >
            {layout.md.map((x, i) => {
                return (
                    <div key={x.i}>
                        {list[i].widget}
                    </div>
                )
            })

            }
        </ResponsiveReactGridLayout>
    )
}