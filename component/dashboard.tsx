import { Card, CardBody, Group, Stack } from 'livi-poc-core';
import dynamic from 'next/dynamic';
import Widget from './widget';

const path = {
    widget1: 'widget1/demo',
    widget2: 'widget2/demo',
    widget3: 'widget3/demo',
}

const Widget1 = dynamic(() => import('widget1/demo'), { ssr: false, });
const Widget2 = dynamic(() => import('widget2/demo'), { ssr: false, });
const Widget3 = dynamic(() => import('widget3/demo'), { ssr: false, });

const Dashboard = () => {
    return (
        <Card className=' flex flex-col rounded-lg filter drop-shadow-md bg-white pt-8' override>
            <CardBody className='p-4' override>
                <div style={{ display: 'none' }} className='text-2xl text-primary font-extrabold'></div>
                <Stack spacing='xl'>
                    <Group spacing='xl' className='w-full'>
                        <div className='w-2/3'>
                            <Widget1 />
                            {/* <Widget src='https://livi-poc-widget1.vercel.app/_next/static/chunks/remoteEntry.js' itemKey='widget1/demo' /> */}
                        </div>
                        <div className='w-1/3'>
                            {/* <Widget src='https://livi-poc-widget2.vercel.app/_next/static/chunks/remoteEntry.js' itemKey='widget2/demo' /> */}
                            <Widget2 />
                        </div>
                    </Group>
                    {/* <Widget src='https://livi-poc-widget3.vercel.app/_next/static/chunks/remoteEntry.js' itemKey='widget3/demo' /> */}
                    <Widget3 />
                </Stack>
            </CardBody>
        </Card>
    )
}

export default Dashboard