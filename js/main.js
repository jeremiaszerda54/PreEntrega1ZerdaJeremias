let autos= Number(prompt("Igrese la cantidad de autos que decea comprar"));
console.log("La cantidad de autos elegida es: " + autos);
let c=1;
let marca1=0; //peugeot
let marca2=0; //mercedez
let marca3=0; //fiat
let color1=0; //celeste
let color2=0; //azul
let color3=0; //rojo
let total=0;
let totalmas=0;
let elegido=0;
let elegido1=0;
let elegido2=0;
let cuotas=0;
let cuotasmas=0;
let Peugeot=100000;
let Mercedez=1000000;
let fiat=50000;
const porce1=(Peugeot)=>{return (10*Peugeot)/100}
const porce2=(Mercedez)=>{return (15*Mercedez)/100}
const porce3=(fiat)=>{return (10*fiat)/100}

while(c<=autos)
{
    console.log("AUTO NUMERO" + "" + c);
    elegido=Number(prompt("Eliga cual auto decea comprar 1-Peugeot 2-Mercedez 3-Fiat"));
    console.log("El auto elegido de los 3 1-Peugeot 2-Mercedez 3-Fiat, es: " + elegido);
    switch(elegido)
    {
        case 1:
                alert("El auto elegido es un Peugeot")
                marca1=marca1+1;
                console.log("El auto elegido es un Peugeot")

                cuotas=Number(prompt("Ingrese la cantidad de cuotas que desea pagar"));
                console.log("La cantidad de cuotas a pagar es de:" + cuotas);

                total=Peugeot/cuotas;
                alert("Por cada cuota debera de pagar un total de:" + total);
                console.log("Por cada cuota debera de pagar un total de:" + total);
                if(cuotas>24)
                {
                    alert("Porcer mas de 24 cuotas, a las siguientes se les suma un 10% del valor de cada cuota");
                    cuotasmas=cuotas-24;
                    cuotas=cuotas-cuotasmas;
                    console.log("El porcenta que se le agrega a la cuota es:" + porce1(Peugeot));
                    console.log("dicho porcentaje sumado a la cuota superiores a 24 es de:")
                    //dudoso el calculo..
                    totalmas=cuotasmas*porce1(Peugeot);
                    totalmas=cuotas+totalmas
                    //fijarme arriba
                    alert("Por las siguientes cuotas a la 24 debera de pagar por cuota:" + totalmas)
                    
                }
            break
            ;
            case 2:
                alert("El auto elegido es un Mercedez")
                marca2=marca2+1;
                console.log("El auto elegido es un Mercedez")
                console.log("El porcenta 1 es:" + porce2(Mercedez));
                cuotas=Number(prompt("Ingrese la cantidad de cuotas que desea pagar"));
                console.log("La cantidad de cuotas a pagar es de:" + cuotas);

                total=Mercedez/cuotas;
                alert("Por cada cuota debera de pagar un total de:" + total);
                console.log("Por cada cuota debera de pagar un total de:" + total);
                if(cuotas>24)
                {
                    alert("Porcer mas de 24 cuotas, a las siguientes se les suma un 15% del valor de cada cuota");
                    cuotasmas=cuotas-24;
                    cuotas=cuotas-cuotasmas;
                    console.log("El porcenta que se le agrega a la cuota es:" + porce2(Mercedez));
                    console.log("dicho porcentaje sumado a la cuota superiores a 24 es de:")
                    //dudoso el calculo..
                    totalmas=cuotasmas*porce2(Mercedez);
                    totalmas=cuotas+totalmas
                    //fijarme arriba
                    alert("Por las siguientes cuotas a la 24 debera de pagar por cuota:" + totalmas)
                    
                }
                break
            ;
            case 3:
                alert("El auto elegido es un Fiat")
                marca3=marca3+1;
                console.log("El auto elegido es un Fiat")
                console.log("El porcenta 1 es:" + porce3(fiat));
                cuotas=Number(prompt("Ingrese la cantidad de cuotas que desea pagar"));
                console.log("La cantidad de cuotas a pagar es de:" + cuotas);
                total=fiat/cuotas;
                alert("Por cada cuota debera de pagar un total de:" + total);
                console.log("Por cada cuota debera de pagar un total de:" + total);
                if(cuotas>24)
                {
                    alert("Porcer mas de 24 cuotas, a las siguientes se les suma un 10% del valor de cada cuota");
                    cuotasmas=cuotas-24;
                    cuotas=cuotas-cuotasmas;
                    console.log("El porcenta que se le agrega a la cuota es:" + porce3(fiat));
                    console.log("dicho porcentaje sumado a la cuota superiores a 24 es de:")
                    //dudoso el calculo..
                    totalmas=cuotasmas*porce3(fiat);
                    totalmas=cuotas+totalmas
                    //fijarme arriba
                    alert("Por las siguientes cuotas a la 24 debera de pagar por cuota:" + totalmas)
                    
                }
                break
            ;
            default:
                elegido=Number(prompt("Debe de elegir uno de los 3 autos propuestos"));
                c--;
                break
            ;
    }

    elegido1=Number(prompt("Eliga de que color decea el auto 1-celeste 2-azul 3-rojo"));
    switch(elegido1)
    {
        case 1:
            alert("El color elegido es celeste")
            color1=color1+1;
            console.log("El color elegido es celeste")
            break
        ;
        case 2:
            alert("El color elgido es azul")
            color2=color2+1;
            console.log("El color elgido es azul")
            break
        ;
        case 3:
            alert("El color elegido es rojo")
            color3=color3+1;
            console.log("El color elegido es rojo")
            break
        ;
    }

    cuotas=0;
    cuotasmas=0;
    total=0;
    totalmas=0;
    c=c+1;
    console.log("")
}
console.log("Hay un total de:" + marca1 + " " +  "De autos marca Peugeot");
console.log("Hay un total de:" + marca2 + " " +  "De autos marca Mercez");
console.log("Hay un total de:" + marca3 + " " +  "De autos marca Fiat");
console.log("Hay un total de:" + color1 + " " +  "autos de color celeste");
console.log("Hay un total de:" + color2 + " " +  "autos de color azul");
console.log("Hay un total de:" + color3 + " " +  "autos de color rojo");