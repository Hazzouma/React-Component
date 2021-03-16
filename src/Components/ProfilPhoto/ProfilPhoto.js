import React from 'react';
import { Fragment } from 'react';
import img from './Hazem.jpg';
import './ProfilPhoto.css';

export default function ProfilPhoto (){
    return(
        <Fragment>
            <div className='hazem'><img src={img} alt='Hazem' className='imge' /></div>
        </Fragment>
    )
}