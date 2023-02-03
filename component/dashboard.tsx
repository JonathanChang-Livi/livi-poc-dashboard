import { Button, Group, Stack, Title } from 'livi-poc-core';
import { useState } from 'react';
import { DraggableGridLayout, GridItemProps } from './grid';
import { Widget1, Widget2, Widget3 } from './widgets';

const Dashboard = () => {
    const [editMode, setEditMode] = useState(false)
    const widgetList: GridItemProps[] = [
        { id: 'livi-poc-widget1', order: 0, width: { lg: 4, md: 4, sm: 1, xs: 1, xxs: 1 }, height: 2, widget: <Widget1 /> },
        { id: 'livi-poc-widget2', order: 1, width: { lg: 2, md: 2, sm: 1, xs: 1, xxs: 1 }, height: 2, widget: <Widget2 /> },
        { id: 'livi-poc-widget3', order: 2, height: 4, widget: <Widget3 /> },
    ]
    return (
        <Stack spacing='xl'>
            <Group className='justify-between'>
                <Title className=' text-xl text-primary font-black' override>Dashboard</Title>
                {
                    !editMode ?
                        <Button set='primary' className=' min-w-[80px]' onClick={() => setEditMode(true)}>Edit</Button>
                        :
                        <Button set='secondary' className=' min-w-[80px]' onClick={() => setEditMode(false)}>Save</Button>
                }
            </Group>
            <DraggableGridLayout items={widgetList} editMode={editMode}/>
        </Stack>
    )
}

export default Dashboard