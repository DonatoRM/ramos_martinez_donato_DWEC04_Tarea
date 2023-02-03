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
    window.alert(`construido nuevo edificio en la calle ${this._calle}, nº: ${this._numero}, CP: ${this._codigoPostal}.`);
    this._plantasEdificio = []; // Array en donde se almacenarán el número de pisos, el número de puertas y los propietarios
    /**
     * Método Para dotar al edificio de un número de plantas y un número de puertas
     * @param {number} numplantas Número entero de Plantas que tendrá el edificio
     * @param {number} puertas Número de Puertas que tendrá el edificio
     */
    this.agregarPlantasYPuertas = function (numplantas, puertas) {
        if (isNaN(Number(numplantas)) == false && Number.isInteger(numplantas) && numplantas > 0) {
            if (isNaN(Number(puertas)) == false && Number.isInteger(puertas) && puertas > 0) {
                for (let contador = 0; contador < numplantas; contador++) {
                    this._plantasEdificio.push(new Array(puertas));
                }
            } else {
                throw console.log("El Número de Puertas es incorrecto");
            }
        } else {
            throw console.log("El Número de Plantas es incorrecto");
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
     * Método que el Nombre de la calle en donde está ubicado el edificio
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
            if (
                isNaN(Number(planta)) == false &&
                Number.isInteger(planta) &&
                planta > 0 &&
                planta <= this._plantasEdificio.length
            ) {
                if (
                    isNaN(Number(puerta)) == false &&
                    Number.isInteger(puerta) &&
                    puerta > 0 &&
                    puerta <= this._plantasEdificio[planta - 1].length
                ) {
                    this._plantasEdificio[planta - 1][puerta - 1] = nombre;
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
        for (let contador1 = 0; contador1 < this._plantasEdificio.length; contador1++) {
            for (let contador2 = 0; contador2 < this._plantasEdificio[contador1].length; contador2++) {
                resultado += encabezado + (contador2 + 1) + " de la planta " + (contador1 + 1) + ": ";
                if (this._plantasEdificio[contador1][contador2] == undefined) {
                    resultado += "\n";
                } else {
                    resultado += `${this._plantasEdificio[contador1][contador2]}\n`;
                }
            }
        }
        return resultado;
    };
    /**
     * Método para eliminar un Número de Planta entera
     * @param {number} planta Número entero positivo correspondiente al número de planta a eliminar
     */
    this.eliminarPlanta = function (planta) {
        if (
            isNaN(Number(planta)) == false &&
            Number.isInteger(planta) &&
            planta > 0 &&
            planta <= this._plantasEdificio.length
        ) {
            datosPlanta = this._plantasEdificio.splice(planta - 1, 1);
        }
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
// Mostramos por pantalla que el código postal del edificio A es: 15706.
window.alert(`El código postal del edificio A es ${edificioA.imprimeCodigoPostal()}.`);
// Mostramos por pantalla que la calle del edificio C es: San Clemente.
window.alert(`La calle del edificio C es: ${edificioC.imprimeCalle()}.`);
// Mostramos por pantalla que el edificio B está situado en la calle Camino Caneiro número 29.
window.alert(`El edificio B está situado en la calle ${edificioB.imprimeCalle()} número ${edificioB.imprimeNumero()}.`);
// Agregamos 2 plantas y 3 puertas por planta al edificio A...
edificioA.agregarPlantasYPuertas(2, 3);
// Agregamos 4 propietarios al edificio A...
edificioA.agregarPropietario("Jose Antonio López", 1, 1);
edificioA.agregarPropietario("Luisa Martínez", 1, 2);
edificioA.agregarPropietario("Marta Castellón", 1, 3);
edificioA.agregarPropietario("Antonio Pereira", 2, 2);
// Mostramos por pantalla el listado de propietarios del edificio calle García Prieto número 58
window.alert(edificioA.imprimePlantas());
/*
 * Revisando el último apartado de la Tarea en donde se muestra el listado de propietarios del
 * edificio de la calle García Prieto número 58, se ve claramente que se ha eliminado  el
 * segundo piso anterior (y por lo tanto al usuario Antonio Pereira) y se han añadido  2
 *  plantas nuevas de 2 números cada una. Para ello, me he visto obligado a generar un
 * nuevo método llamado eliminarPlanta(planta) que se usará para eliminar una planta
 * anteriormente añadida
 */
// Elimino la planta 2 por completo
edificioA.eliminarPlanta(2);
// Agregamos una planta más al edificio A...
/*
 * Como eliminé la planta 2 anterior, en vez de añadir 1 única planta, añado las plantas 2 y 3
 * al mismo tiempo pero, esta vez, con 2 pisos por cada planta
 */
edificioA.agregarPlantasYPuertas(2, 2);
// Agregamos un propietario más al edificio A planta 3, puerta 2...
// Pedro Meijide es ahora el propietario de la puerta 2 de la planta 3.
edificioA.agregarPropietario("Pedro Meijide", 3, 2);
// Listado de propietarios del edificio calle García Prieto número 58
window.alert(edificioA.imprimePlantas());
