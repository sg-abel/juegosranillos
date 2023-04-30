function Jugador(nombre){
    this.nombre = nombre;
    this.pv = 100;
    this.sp = 100;

    this.curar = function( jugadorObjetivo ){

        if( this.sp >=40){

            this.sp -= 10;
            jugadorObjetivo.pv += 20;

        }else{
            console.info(this.nombre + " no tiene SP");
        }
        this.estado( jugadorObjetivo );
    }

    this.tirarFlecha = function( jugadorObjetivo ){

        if( jugadorObjetivo.pv > 40){
            jugadorObjetivo.pv -= 40;
        }else{
            jugadorObjetivo.pv = 0;
            console.error( jugadorObjetivo.nombre + " murio!!!");
        }        
        this.estado( jugadorObjetivo );
    }

    this.tirarEspada = function ( jugadorObjetivo ){

        if(jugadorObjetivo.pv > 45){
            jugadorObjetivo.pv -= 45;
        }else{
            jugadorObjetivo.pv = 0;
            console.error ( jugadorObjetivo.nombre + " ya le tocaba!!!");
        }        
        this.estado( jugadorObjetivo );
    }

    this.estado = function(jugadorObjetivo){
        console.info(this);
        console.info(jugadorObjetivo);
    }
};

var gandalf = new Jugador("gandalf");
var legolas = new Jugador("legolas");
var aragon = new Jugador("aragon");

console.log( gandalf);
console.log(legolas);
console.log(aragon);


gandalf.curar(legolas);
gandalf.curar(aragon);




