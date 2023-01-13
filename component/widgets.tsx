import dynamic from "next/dynamic"
import { CSSProperties, useState } from "react";
import { DragDropContext, Draggable, DraggingStyle, Droppable, DropResult, NotDraggingStyle } from "react-beautiful-dnd";
import { uuid } from "uuidv4";

//@ts-ignore
export const Widget1 = dynamic(() => import('widget1/demo'), { ssr: false, });
//@ts-ignore
export const Widget2 = dynamic(() => import('widget2/demo'), { ssr: false, });
//@ts-ignore
export const Widget3 = dynamic(() => import('widget3/demo'), { ssr: false, });


const getItemStyle = (isDragging: boolean, draggableStyle: DraggingStyle | NotDraggingStyle | undefined): CSSProperties => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: 8 * 2,
  margin: `0 ${8}px 0 0`,

  // change background colour if dragging
  background: isDragging ? 'lightgreen' : 'grey',

  // styles we need to apply on draggables
  ...draggableStyle,
});

export interface WidgetProps {
  size: 1 | 2 | 3 | 4 | 5 | 6
  widget: JSX.Element
  order?: number
}
interface WidgetParams {
  index: number
  editMode: boolean
}
export type WidgetWrapper = JSX.Element
const WidgetWrapper = ({ size, editMode, widget, index }: WidgetProps & WidgetParams): WidgetWrapper => {
  // const W = dynamic(() => import(src), { ssr: false, });
  const id = `widget-${uuid()}`
  return (
    <Draggable key={id} draggableId={id} index={index} isDragDisabled={!editMode}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={getItemStyle(
            snapshot.isDragging,
            provided.draggableProps.style
          )}
          // className={`relative col-span-${size} ${editMode ? ' border-4 rounded-lg border-dashed border-slate-400 p-2 hover:border-secondary' : ''}`}
        >
          <div>

            {/* {editMode ? <div className="absolute z-10 opacity-50 rounded-lg  top-0 left-0 right-0 bottom-0 select-none hover:bg-black hover:cursor-grab focus:cursor-grabbing"></div> : <></>} */}
            {widget}
          </div>
        </div>
      )}
    </Draggable>
  )
}