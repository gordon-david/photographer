export default function GalleryImage(props: {
  src: string;
  alt: string;
  title: string;
  className:string;
}) {
  return (
    <div className={props.className + " flex flex-col justify-center"}>
      <img className="w-full" src={props.src} alt={props.alt} />
      <small className="self-end italic m-2 mr-4"> {props.title} </small>
    </div>
  );
}
