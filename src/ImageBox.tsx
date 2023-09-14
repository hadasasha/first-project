interface ImageProps {
    image : string

}

export default function ImageBox({image} : ImageProps) {
  return (
    <div>
<img src={image}/>
    </div>
  )
}
