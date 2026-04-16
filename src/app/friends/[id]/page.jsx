import DetailsSidebar from '@/components/ui/friendDetails/FriendDetails';
import Interactions from '@/components/ui/friendDetails/Interactions';
import { friendsPromise } from '@/lib/friendsPromise';
import { notFound } from 'next/navigation';
import React from 'react';

const FriendDetails = async({params}) => {
    const friends = await friendsPromise();
    const {id} = await params;
    const friend = friends.find((friend) => friend.id === Number(id))
    if(!friend){
        notFound()
    }

    return (
        <div className=' py-10 md:py-20 bg-[#F8FAFC]'>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-6 w-11/12 max-w-7xl mx-auto'>
            <div id='left' className='md:col-span-4'>
                <DetailsSidebar friend={friend}/>
            </div>
            <div id="right" className='md:col-span-8'>
                <Interactions friend={friend}/>
            </div>
            </div>
        </div>
    );
};

export default FriendDetails;