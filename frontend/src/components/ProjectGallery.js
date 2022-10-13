import React from "react";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
];

function ProjectGallery() {
    return(
        <div id="ProjectGallery">
            <ImageGallery items={images}
                          infinite={true}
                          showNav={false}
                          showFullscreenButton={false}
                          showPlayButton={false}
                          showBullets={true}
                          showThumbnails={false}
                          autoPlay={true}
            />
        </div>
    );
}

export default ProjectGallery;
