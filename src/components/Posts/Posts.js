import React from 'react';

import './Posts.css';

const Posts = ({index, item, check}) => (
        <ul className={`${check ? 'Post-blog2': 'Post-blog' } `}>
            <li >{ index + 1 } - {item}</li>
        </ul>


);

export default Posts;
