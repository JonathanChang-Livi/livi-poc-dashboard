import { Card, CardBody, Group, Stack, Title } from 'livi-poc-core';
import { Widget1, Widget2, Widget3 } from './widgets';

const Dashboard = () => {
    return (
        // <Card>
        //     <CardBody>
                <Stack spacing='xl'>
                    <Title className=' text-2xl text-primary font-black' override>Dashboard</Title>
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
        //     </CardBody>
        // </Card>
    )
}

export default Dashboard