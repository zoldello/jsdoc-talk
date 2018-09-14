import Cow from './cow';
import Animal from './animal';

{
    let cow = new Cow();

    /**
     * @throws "No meat exception"
     */
    const isWorldLegig = () => { 
        if (!cow.isEdibleByHumans()) {
            throw 'No eating meat!';
        }
    };

    isWorldLegig();
}