import { ImageSource, Sound, Resource, Loader } from 'excalibur';
import greenFishImage from '../images/greenfish.png';
import purpleFishImage from '../images/purplefish.png';
import redFishImage from '../images/redfish.png';
import yellowFishImage from '../images/yellowfish.png';
import skeletonFishImage from '../images/skeletonfish.png';
import backgroundImage from '../images/sea.jpg';

const Resources = {
    GreenFish: new ImageSource(greenFishImage),
    PurpleFish: new ImageSource(purpleFishImage),
    RedFish: new ImageSource(redFishImage),
    YellowFish: new ImageSource(yellowFishImage),
    SkeletonFish: new ImageSource(skeletonFishImage),
    Background: new ImageSource(backgroundImage)
};
const ResourceLoader = new Loader([
    Resources.GreenFish,
    Resources.PurpleFish,
    Resources.RedFish,
    Resources.YellowFish,
    Resources.SkeletonFish,
    Resources.Background
])

export { Resources, ResourceLoader }