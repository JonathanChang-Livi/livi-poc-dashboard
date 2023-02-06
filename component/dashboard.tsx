import { Button } from 'livi-poc-core';
import { useState } from 'react';
import { DraggableGridLayout, GridItemProps } from './grid';
import { Widget1, Widget2, Widget3, Widget4, Widget5 } from './widgets';

const Dashboard = () => {
    const [editMode, setEditMode] = useState(false)
    const widgetList: GridItemProps[] = [
        { id: 'livi-poc-widget1', position: { x: 0, y: 0 }, width: { lg: 4, md: 1, sm: 1, xs: 1, xxs: 1 }, height: 2, widget: <Widget1 /> },
        { id: 'livi-poc-widget2', position: { x: 4, y: 0 }, width: { lg: 2, md: 1, sm: 1, xs: 1, xxs: 1 }, height: 3, widget: <Widget2 /> },
        { id: 'livi-poc-widget3', position: { x: 0, y: 2 }, width: { lg: 4, md: 1, sm: 1, xs: 1, xxs: 1 }, height: 2, widget: <Widget3 /> },
        { id: 'livi-poc-widget4', position: { x: 3, y: 0 }, width: { lg: 2, md: 1, sm: 1, xs: 1, xxs: 1 }, height: 3, widget: <Widget4 /> },
        { id: 'livi-poc-widget5', position: { x: 3, y: 0 }, width: { lg: 4, md: 1, sm: 1, xs: 1, xxs: 1 }, height: 2, widget: <Widget5 /> },
    ]
    return (
        // <Stack spacing='xl'>
        //     <Group className='justify-between'>
        //         <Title className=' text-xl text-primary font-black' override>Dashboard</Title>
        //         {
        //             !editMode ?
        //                 <Button set='primary' className=' min-w-[80px]' onClick={() => setEditMode(true)}>Edit</Button>
        //                 :
        //                 <Button set='secondary' className=' min-w-[80px]' onClick={() => setEditMode(false)}>Save</Button>
        //         }
        //     </Group>
        <div className='flex flex-col w-full'>
            <div className='flex flex-row justify-end w-full my-2'>
                {
                    !editMode ?
                        <Button set='primary' className=' min-w-[80px]' onClick={() => setEditMode(true)}>Edit</Button>
                        :
                        <Button set='secondary' className=' min-w-[80px]' onClick={() => setEditMode(false)}>Save</Button>
                }
            </div>
            <DraggableGridLayout items={widgetList} editMode={editMode} />
        </div>
        // </Stack>
    )
}

export default Dashboard