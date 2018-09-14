import Cow from './cow';
import Animal from './animal';

{
    let cow = new Cow();


    /**
     * @throws "No meat exception"
     */
    const isWorldLegit = () => { 
        if (!cow.isEdibleByHumans()) {
            throw 'No eating meat!';
        }
    };

    isWorldLegit();
}