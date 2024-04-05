import React from 'react';

const FullScreenLoader = () => {
    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-2 mt-5">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FullScreenLoader;