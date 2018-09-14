/**
 * @file Animal- A type of living thing
 * @author Phil example@example.com
 * @license MIT
 * @since 0.0.1
 * @copyright Copyright Phil
 */


 /**
  * Animal template
  */
 export default class Animal {

    constructor(denotation) { 
        /**
         * @type {string} species
         */
        self.species = denotation.species;
        
        /** @type {number} age */
        self.age = denotation.age;

        /** @type {string | number}  Name of animal */
        self.name = null; 
    }

    /**
     * Vocal expression
     */
    speak() {
        return "hiss";
    }


    /**
     * Name the Animal
     * 
     * @param {string | number} Name of animal  
     */
    giveName(name) {
        if (name === 'terrible name' || !name) {
            return; 
        } 
        self.name = name.trim();
    }

 }