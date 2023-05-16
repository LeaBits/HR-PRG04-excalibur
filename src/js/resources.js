import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import fishImage from '../images/fish.png'
import guineaPigImage from '../images/guinea-pig.png'
import swordImage from '../images/sword.png'

const Resources = {
    Fish: new ImageSource(fishImage),
    GuineaPig: new ImageSource(guineaPigImage),
    Sword: new ImageSource(swordImage)
}
const ResourceLoader = new Loader([
    Resources.Fish,
    Resources.GuineaPig,
    Resources.Sword
])

export { Resources, ResourceLoader }