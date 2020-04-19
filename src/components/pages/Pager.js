import React from 'react';

function Pager(props) {
    return (
        <div className="pager">
            <div><a href="next" className="next">&#8592; Prev</a></div>
            <ul className='counter'>
                <li><a href="#1">1</a></li>
                <li><a href="#2">2</a></li>
                <li><a href="#3">3</a></li>
                <li><a href="#4">4</a></li>
                <li><a href="#5">5</a></li>
                <li><a href="#6">6</a></li>
                <li><a href="#7">7</a></li>
                <li><a href="#8">8</a></li>
                <li><a href="#9">9</a></li>
            </ul>
            <div><a href="next" className="next">Next  	&#8594;</a></div>
        </div>
    )
}

export default Pager;