import React, { Component, CSSProperties, useState } from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext, Droppable, Draggable, DropResult, DraggingStyle, NotDraggingStyle } from 'react-beautiful-dnd';
import { WidgetProps } from './widgets';

const grid = 8;

const getItemStyle = (isDragging: boolean, draggableStyle: DraggingStyle | NotDraggingStyle | undefined): CSSProperties => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    // padding: grid * 2,
    // margin: `0 ${grid}px 0 0`,

    // change background colour if dragging
    // background: isDragging ? 'lightgreen' : 'grey',

    // styles we need to apply on draggables
    ...draggableStyle,
});

const getListStyle = (isDraggingOver: boolean): CSSProperties => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    display: 'grid',
    gridAutoFlow: 'row',
    gridColumn: 6,
    padding: grid,
});

interface WidgetLayoutProps {
    list: WidgetProps[]
    spacing?: 1 | 2 | 3 | 4 | 5
    editMode: boolean
}
const orderList = (l: WidgetProps[]): WidgetProps[] => {
    return l.map((x, i) => { return { size: x.size, order: i, widget: x.widget } })
}

const DraggableWidgetLayout = ({ list, spacing, editMode }: WidgetLayoutProps) => {
    const [items, setItems] = useState(orderList(list))

    const reorderList = (sourceIndex: number, destinationIndex: number) => {
        if (destinationIndex === sourceIndex) {
            return;
        }
        const newList = items;
        if (destinationIndex === 0) {
            newList[sourceIndex].order = newList[0].order!! - 1;
            setItems(orderList(newList))
            return;
        }
        if (destinationIndex === newList.length - 1) {
            newList[sourceIndex].order = newList[list.length - 1].order!! + 1;
            setItems(orderList(newList))
            return;
        }
        if (destinationIndex < sourceIndex) {
            newList[sourceIndex].order = (newList[destinationIndex].order!! + newList[destinationIndex - 1].order!!) / 2;
            setItems(orderList(newList))
            return;
        }
        newList[sourceIndex].order = (newList[destinationIndex].order!! + newList[destinationIndex + 1].order!!) / 2;
        setItems(orderList(newList))
    }

    const onDragEnd = (result: DropResult) => {
        // dropped outside the list
        if (!result.destination) {
            return;
        }
        reorderList(result.source.index, result.destination.index)
    }
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable" direction="horizontal">
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        style={getListStyle(snapshot.isDraggingOver)}
                        {...provided.droppableProps}
                    >
                        {items.map((item, index) => (
                            <Draggable key={`draggable-widget-${index}`} draggableId={`draggable-widget-${index}`} index={index}>
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={getItemStyle(
                                            snapshot.isDragging,
                                            provided.draggableProps.style
                                        )}
                                        className={`col-span-${item.size}`}
                                    >
                                        {item.widget}
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    )
}

export default DraggableWidgetLayout