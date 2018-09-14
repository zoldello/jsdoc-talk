/**
 * @file Animating Phil's world
 * @author Phil example@example.com
 * @license MIT
 * @since 0.0.1
 * @copyright Copyright Phil
 */

import Cow from './cow';
//import Animal from './animal';

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