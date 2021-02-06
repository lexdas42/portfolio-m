import React from 'react';

const Title = (props) => {
    return ( <div>
        <h1 style={{ color: '#7c795d', fontFamily: 'Trocchi' , fontSize: '55px', fontWeight: 'normal', lineHeight: '48px', margin: 0 }}>{props.name}</h1>
    </div> );
}
 
export default Title;