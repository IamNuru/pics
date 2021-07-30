import React from 'react';
import LoadingImg from '../../loading.gif'

const Loading = () => {

    return (
        <div className="w-full min-h-screen">
            <img src={LoadingImg} alt="Loading" className="max-w-96 m-auto max-h-96" />
        </div>
    )
}

export default Loading
