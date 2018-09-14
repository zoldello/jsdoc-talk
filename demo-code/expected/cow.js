/**
 * @file Cow- Template for a cow
 * @author Phil example@example.com
 * @license MIT
 * @since 0.0.1
 * @copyright Copyright Phil
 */

import Animal from './animal';

/**
 * Cow
 * @extends @see Animal
 */
export default class Cow extends Animal {
    /**
     * Constructor
     * @param {object} denotation 
     */
    constructor(denotation) {
        super(denotation);
    }

    /**
     * Determines if the Animal is edicble by humans
     * @deprecated Irrelevant since everyone here is now a vegan
     * @return {boolean} True if edible, false otherwise
     */
    isEdibleByHumans() {
        return false;
    }

    /**
     * Communication
     *  @returns {string} Vocalization
     */
    speak() {
        return "meow";        
    }
}