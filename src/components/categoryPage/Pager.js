import React from 'react';
import { Link } from 'react-router-dom';

function Pager(props) {
    const { category } = props;

    return (
        <div className="pager">
            <div><a href="next" className="next">&#8592; Prev</a></div>
            <ul className='counter'>
                <li><Link to={category + '?page=' + 1} >1</Link></li>
                <li><Link to={category + '?page=' + 2} >2</Link></li>
                <li><Link to={category + '?page=' + 3} >3</Link></li>
                <li><Link to={category + '?page=' + 4} >4</Link></li>
                <li><Link to={category + '?page=' + 5} >5</Link></li>
                <li><Link to={category + '?page=' + 6} >6</Link></li>
                <li><Link to={category + '?page=' + 7} >7</Link></li>
                <li><Link to={category + '?page=' + 8} >8</Link></li>
                <li><Link to={category + '?page=' + 9} >9</Link></li>
            </ul>
            <div><a href="next" className="next">Next  	&#8594;</a></div>
        </div>
    )
}

export default Pager;