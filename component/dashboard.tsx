import { Card, CardBody, Group, Stack } from 'livi-poc-core';
import dynamic from 'next/dynamic';

const path = {
    widget1: 'widget1/demo',
    widget2: 'widget2/demo',
    widget3: 'widget3/demo',
}

const Widget1 = dynamic(() => import(path.widget1), { ssr: false, });
const Widget2 = dynamic(() => import(path.widget2), { ssr: false, });
const Widget3 = dynamic(() => import(path.widget3), { ssr: false, });

const Dashboard = () => {
    return (
        <Card className=' flex flex-col rounded-lg filter drop-shadow-md bg-white pt-8' override>
            <CardBody className='p-4' override>
                <div style={{ display: 'none' }} className='text-2xl text-primary font-extrabold'></div>
                <Stack spacing='xl'>
                    <Group spacing='xl' className='w-full'>
                        <div className='w-2/3'>
                            <Widget1 />
                        </div>
                        <div className='w-1/3'>
                            <Widget2 />
                        </div>
                    </Group>
                    <Widget3 />
                </Stack>
            </CardBody>
        </Card>
    )
}

export default Dashboard