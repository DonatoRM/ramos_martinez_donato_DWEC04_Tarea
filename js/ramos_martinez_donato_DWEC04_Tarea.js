/**
 * Función Constructora de la cual se van a instanciar cada uno de los objetos Edificio
 * @param {string} calle Nombre de la calle en donde está situado el Edificio
 * @param {string} numero Número del Edificio dentro de la calle. Se puede indicar sin número
 * @param {string} codigoPostal Código Postal de de la zona en donde está ubicado el edificio
 */
const Edificio = function (calle, numero, codigoPostal) {
    if (typeof calle === "string" && calle.length > 0) {
        this._calle = calle;
    } else {
        throw console.log("Nombre de la Calle incorrecto");
    }
    if (typeof numero === "string" && numero != "") {
        this._numero = numero;
    } else {
        throw console.log("Número de la Calle incorrecto");
    }
    const regex = /^[0-5]{1}\d{4}$|^0[7-8][0-1]$/; // Expresión regular para el Código Postal
    if (regex.test(codigoPostal)) {
        this._codigoPostal = codigoPostal;
    } else {
        throw console.log("El Código Postal es incorrecto");
    }
    this._propietarios = new Array(); // Propiedad que será un Array de Objetos Propietarios
    window.alert(`construido nuevo edificio en la calle ${this._calle}, nº: ${this._numero}, CP: ${this._codigoPostal}.`);
    /**
     * Método Para dotar al edificio de un número de plantas y un número de puertas
     * @param {number} numplantas Número entero de Plantas que tendrá el edificio
     * @param {number} puertas Número de Puertas que tendrá el edificio
     */
    this.agregarPlantasYPuertas = function (numplantas, puertas) {
        if (isNaN(Number(numplantas)) == false && Number.isInteger(numplantas) && numplantas > 0) {
            this._plantasEdificio = numplantas;
        } else {
            throw console.log("El Número de Plantas es incorrecto");
        }
        if (isNaN(Number(puertas)) == false && Number.isInteger(puertas) && puertas > 0) {
            this._numeroPuertas = puertas;
        } else {
            throw console.log("El Número de Puertas es incorrecto");
        }
    };
    /**
     * Método para actualizar el número del edificio
     * @param {number} numero Nuevo número del edificio a actualizar
     */
    this.modificarNumero = function (numero) {
        if (isNaN(Number(numero)) == false && Number.isInteger(numero) && numero > 0) {
            this._numero = numero;
        } else {
            throw console.log("El Número de la Calle es incorrecto");
        }
    };
    /**
     * Método para actualizar el nombre de la calle en donde está ubicado el edificio
     * @param {string} calle Nuevo nombre de la calle para actualizar
     */
    this.modificarCalle = function (calle) {
        if (typeof calle === "string" && calle.length > 0) {
            this._calle = calle;
        } else {
            throw console.log("Nombre de la Calle incorrecto");
        }
    };
    /**
     * Método para actualizar al nuevo Código Postal del edificio
     * @param {string} codigo Nuevo código postal del edificio
     */
    this.modificarCodigoPostal = function (codigo) {
        if (regex.test(codigo)) {
            this._codigoPostal = codigo;
        } else {
            throw console.log("El Código Postal es incorrecto");
        }
    };
    /**
     * Método que devuelve un <code>string</code> con el Nombre de la calle en donde está ubicado el edificio
     * @returns Devuelve en <code>string</code> con el nombre de la calle
     */
    this.imprimeCalle = function () {
        return this._calle;
    };
    /**
     * Método que devuelve el Número de la calle del edificio
     * @returns Devuelve un <code>string</code> con el número del edificio
     */
    this.imprimeNumero = function () {
        return this._numero;
    };
    /**
     * Método que devuelve el Código Postal del la zona en donde está situado el edificio
     * @returns Devuelve un <code>string</code> con el Código Postal de la zona
     */
    this.imprimeCodigoPostal = function () {
        return this._codigoPostal;
    };
    /**
     * Método que permite agregar un propietario de un piso del edificio
     * @param {string} nombre Nombre del propietario
     * @param {number} planta Planta del propietario
     * @param {number} puerta Puerta del propietario
     */
    this.agregarPropietario = function (nombre, planta, puerta) {
        if (typeof nombre === "string") {
            if (isNaN(Number(planta)) == false && Number.isInteger(planta) && planta <= this._plantasEdificio) {
                if (
                    isNaN(Number(puerta)) == false &&
                    Number.isInteger(puerta) &&
                    puerta > 0 &&
                    puerta <= this._numeroPuertas
                ) {
                    this._propietarios.push({
                        nombre: nombre,
                        planta: planta,
                        puerta: puerta,
                    });
                    window.alert(`${nombre} es ahora el propietario de la puerta ${puerta} de la planta ${planta}.`);
                } else {
                    throw console.log("El Número de Puerta es incorrecto");
                }
            } else {
                throw console.log("El Número de Planta es incorrecto");
            }
        } else {
            throw console.log("Nombre de Propietario incorrecto");
        }
    };
    /**
     * Método que permite devolver un listado de los dueños de los pisos del edificio
     * @returns Devuelve un <code>string</code> con el listado de todos los dueños de los pisos del edificio
     */
    this.imprimePlantas = function () {
        let resultado = "";
        let encabezado = "Propietario del piso ";
        for (let contador1 = 1; contador1 <= this._plantasEdificio; contador1++) {
            for (let contador2 = 1; contador2 <= this._numeroPuertas; contador2++) {
                let nombre = "";
                this._propietarios.forEach((seleccionado) => {
                    if (seleccionado["puerta"] == contador2 && seleccionado["planta"] == contador1) {
                        nombre = seleccionado["nombre"];
                    }
                });
                resultado += encabezado + contador2 + " de la planta " + contador1 + `: ${nombre}\n`;
            }
        }
        return resultado;
    };
};
// Instanciamos 3 objetos edificioA,edificioB y edificioC con los datos:
/*
 * Construido nuevo edificio en calle: Garcia Prieto, nº: 58, CP: 15706.
 * Construido nuevo edificio en calle: Camino Caneiro, nº: 29, CP: 32004.
 * Construido nuevo edificio en calle: San Clemente, nº: s/n, CP: 15705.
 */
const edificioA = new Edificio("García Prieto", "58", "15706");
const edificioB = new Edificio("Camino Caneiro", "29", "32004");
const edificioC = new Edificio("San Clemente", "s/n", "15705");
// El código postal del edificio A es: 15706.
window.alert(`El código postal del edificio A es ${edificioA.imprimeCodigoPostal()}.`);
// La calle del edificio C es: San Clemente.
window.alert(`La calle del edificio C es: ${edificioC.imprimeCalle()}.`);
// El edificio B está situado en la calle Camino Caneiro número 29.
window.alert(`El edificio B está situado en la calle ${edificioB.imprimeCalle()} número ${edificioB.imprimeNumero()}.`);
// Agregamos 2 plantas y 3 puertas por planta al edificio A...
edificioA.agregarPlantasYPuertas(2, 3);
// Agregamos 4 propietarios al edificio A...
edificioA.agregarPropietario("Jose Antonio López", 1, 1);
edificioA.agregarPropietario("Luisa Martínez", 1, 2);
edificioA.agregarPropietario("Marta Castellón", 1, 3);
edificioA.agregarPropietario("Antonio Pereira", 2, 2);
// Listado de propietarios del edificio calle García Prieto número 58
window.alert(edificioA.imprimePlantas());
// Agregamos una planta más al edificio A...
edificioA.agregarPlantasYPuertas(3, 3);
// Agregamos un propietario más al edificio A planta 3, puerta 2...
// Pedro Meijide es ahora el propietario de la puerta 2 de la planta 3.
// En el enunciado desaparece Antonio Pereira. Luego el piso queda vacío
edificioA.agregarPropietario("", 2, 2);
edificioA.agregarPropietario("Pedro Meijide", 3, 2);
// Listado de propietarios del edificio calle García Prieto número 58
window.alert(edificioA.imprimePlantas());
/* Observo que en el enunciado del problema, el primer piso tiene 3 viviendas. Sin embargo,
el segundo y el tercer piso de este apartado únicamente tienen 2 viviendas. Con los métodos 
que se indican en el enunciado no es posible realizar esta operación. */
