import React from 'react';

function Blobs() {
    const blobRef = React.useRef(null);
    React.useEffect(() => {
        document.addEventListener('mousemove', (event) => {
            const { clientX, clientY } = event;
            const blobsX = clientX - blobRef.current.clientWidth / 2;
            const blobsY = clientY - blobRef.current.clientHeight / 2;
            blobRef.current.style.transform = `translate3d(${blobsX}px, ${blobsY}px, 0)`;
        });
    }, []);
    const blobContainer = 'blob';
    return (
        <>
            <div className={blobContainer} ref={blobRef}>
                <div className='blob1'></div>
                <div className='blob2'></div>
                <div className='blob3'></div>
                <div className='blob4'></div>
            </div>
        </>
    )
}

export default Blobs;
