import Image from "./Image.jsx";

export default function Photos () {
    return (
        <section>
            <p>Photos</p>
            {Image({src: 'https://miro.medium.com/v2/resize:fit:1400/1*Nf4aJCyqn1qxBe-FDAW6Aw.png', alt:'hi'})}
        </section>
    )
}