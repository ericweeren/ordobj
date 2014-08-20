
(function() {

/*****************************************************************************
/*****************************************************************************

 .d88888b.               888  .d88888b.  888         d8b 
d88P" "Y88b              888 d88P" "Y88b 888         Y8P 
888     888              888 888     888 888             
888     888 888d888  .d88888 888     888 88888b.    8888 
888     888 888P"   d88" 888 888     888 888 "88b   "888 
888     888 888     888  888 888     888 888  888    888 
Y88b. .d88P 888     Y88b 888 Y88b. .d88P 888 d88P    888 
 "Y88888P"  888      "Y88888  "Y88888P"  88888P"     888 
                                                     888 
                                                    d88P 
                                                  888P"  
/*****************************************************************************
/*****************************************************************************/
var OrdObj = (function(){       //create a private namespace for class

    //class declaration
    var CLASS = {};

    /* Class-Private variables and functions */
    //example: var x = 0;

    /* Class variables and functions */
    //example: CLASS.x = 0;
    //example: CLASS.func = function(){};

    /* constructor */
    CLASS.new = function ( /* constructor parameters */ ){
        return (function (){        //create a private name space for INSTANCE
            var CLASS = {};                 //give it an internal name

            /* private instance variables and functions */
            //example: CLASS.x = 0;

            //instance declaration (can be an {} or other class )
            var INSTANCE = [];

                /* instance variables and functions */
                //example: INSTANCE.x = 0;
                //example: INSTANCE.func = function(){};

            // instructions for constructor

            return INSTANCE;
        })();
    };
    return CLASS;
})();



/*****************************************************************************
/*****************************************************************************

 .d88888b.               888  .d88888b.  888         d8b 8888888888 888                        
d88P" "Y88b              888 d88P" "Y88b 888         Y8P 888        888                        
888     888              888 888     888 888             888        888                        
888     888 888d888  .d88888 888     888 88888b.    8888 8888888    888  .d88b.  88888b.d88b.  
888     888 888P"   d88" 888 888     888 888 "88b   "888 888        888 d8P  Y8b 888 "888 "88b 
888     888 888     888  888 888     888 888  888    888 888        888 88888888 888  888  888 
Y88b. .d88P 888     Y88b 888 Y88b. .d88P 888 d88P    888 888        888 Y8b.     888  888  888 
 "Y88888P"  888      "Y88888  "Y88888P"  88888P"     888 8888888888 888  "Y8888  888  888  888 
                                                     888                                       
                                                    d88P                                       
                                                  888P"                                        


/*****************************************************************************
/*****************************************************************************/
var OrdObjElem = (function(){       //create a private namespace for class

    //class declaration
    var CLASS = {};

    /* Class-Private variables and functions */
    //example: var x = 0;

    /* Class variables and functions */
    //example: CLASS.x = 0;
    //example: CLASS.func = function(){};

    /* constructor */
    CLASS.new = function ( /* constructor parameters */ ){
        return (function (){        //create a private name space for INSTANCE
            var CLASS = {};                 //give it an internal name

            /* private instance variables and functions */
            //example: CLASS.x = 0;


            //instance declaration (can be an {} or other class )
            var INSTANCE = {};

                /* instance variables */
                INSTANCE.key            = null;
                INSTANCE.value          = null;
                INSTANCE.ordObj         = null;
                INSTANCE.selected       = false;

                 /* instance functions */
                 INSTANCE.isSelected = function( _bool ){
                    if( _bool !== undefined )
                        INSTANCE.selected = _bool;

                    return INSTANCE.selected;
                 };






           // instructions for constructor

            return INSTANCE;
        })();
    };
    return CLASS;
})();


(function test_OrdObjElem(){
    var a = OrdObjElem.new();

    console.log('*************** start tests');

    if( a.isSelected() !== false )          console.log( 'Fail: OrdObjElem  test1'  );
    if( a.isSelected(true) !== true )       console.log( 'Fail: OrdObjElem  test2'  );
    if( a.isSelected() !== true )           console.log( 'Fail: OrdObjElem  test3'  );
    if( a.isSelected(false) !== false )     console.log( 'Fail: OrdObjElem  test4'  );
    if( a.isSelected() !== false )          console.log( 'Fail: OrdObjElem  test5'  );

    console.log('*************** end tests');


})();


})(this));
