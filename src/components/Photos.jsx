import Image from "./Image.jsx";

export default function Photos () {
    return (
        <div className="photos-container">
            <p>Photos</p>
            {Image({src: '/photography/los-feliz-3.jpg', alt: 'Palm Tree in Los Feliz'})}
        </div>
    )
}