/**
 * @file Animal- Template for a living thing
 * @author Phil example@example.com
 * @license MIT
 * @since 0.0.1
 * @copyright Copyright Phil
 */


 /**
  * Animal template
  */
 export default class Animal {

    /**
     * @param {object} Animal annotation information
     */
    constructor(label) { 
        this.species = label.species;
        this.age = label.age;
        this.name = null; 
    }

    /**
     * Name the Animal
     * @param {string | number} Name of animal  
     */
    giveName(name) {
        if (name === 'terrible name' || !name) {
            return; 
        } 
        this.name = name.trim();
    }

    /**
     * Vocal expression
     *  @returns {string} Vocalization
     */
    speak() {
        return "hiss";
    }
 }