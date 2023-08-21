export default function Image({src, alt}) {
    return (
        <img src={`https://zebsola-8010.imgix.net/${src}?auto=compress?auto=compress&fit=crop&w=1200`} alt={alt}/>
    )
}