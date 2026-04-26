import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
    return (
        <div className='flex justify-between bg-gray-200 py-2 px-2 container gap-2 mx-auto'>
            <button className='btn btn-error rounded-md'>Latest News</button>
            <Marquee pauseOnHover={true}>
              Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet. Tucker Carlson Swears Vladimir Putin Is Winning The War In Ukraine. Joe Biden announces $3B in new military aid to Ukraine. Tucker Carlson Swears Vladimir Putin Is Winning The War In Ukraine
            </Marquee>
        </div>
    );
};

export default BreakingNews;