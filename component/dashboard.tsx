import { Card, CardBody, Group, Stack } from 'livi-poc-core';
import dynamic from 'next/dynamic';

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