import React from 'react';

const Song = ({title, duration}) => {
    return (
        <div className="item" >
            <div className="right floated content">
                <button className="ui button primary">
                    Select
                </button>
            </div>
            <div className="content">{title}</div>
        </div>
    );
}

export default Song;