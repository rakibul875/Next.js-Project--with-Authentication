import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
    return (
        <div className='flex justify-between bg-gray-200 py-2 px-2 container gap-2 mx-auto'>
            <button className='btn btn-error rounded-md'>Latest News</button>
            <Marquee pauseOnHover={true}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim incidunt, ad placeat, recusandae obcaecati tenetur necessitatibus temporibus alias similique iure, ea facilis beatae. Ullam expedita odio itaque autem sequi quisquam?
            </Marquee>
        </div>
    );
};

export default BreakingNews;