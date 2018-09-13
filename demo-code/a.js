

/**
 * This is an animal
 */
class Animal {
    
   /**
    * 
    * @param {*} x 
    */
    constructor(x) {
        self.x = x; 

        /**
        * The name of the person.
        * @type {string}
        */
        var i = 0; 
    }
    
 
    /**
     * 
     * @param {*} x 
     * @param {*} y 
     * @param {*} z 
     * @mimi {number} TT
     */
    grow(x, y, z) {

        return x + 1; 
    }


    /**
     * @
     * @param {*} x 
     * @param {*} y 
     * @param {*} z 
     * @returns {string} Something
     */
    speak(x, y, z){
        return 'bark';
    }

}

/**
 * A dog
 * @extends Animals
 */
class Dog extends Animaal {
    constructor() {

    }
}