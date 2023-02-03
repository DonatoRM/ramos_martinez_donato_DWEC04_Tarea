# ramos_martinez_donato_DWEC04_Tarea

<h1>Tarea 4 para DWEC04</h1>
<p>Queremos hacer una aplicación en JavaScript para gestionar edificios con la información de la situación del edificio y de los propietarios de cada piso. Para ello queremos almacenar la siguiente información de cada edificio:</p>
<ul>
<li>calle.</li>
<li>número.</li>
<li>código postal.</li>
<li>plantas del edificio (dentro de cada planta tendremos un número de puertas y para cada puerta almacenaremos el nombre del propietario).</li>
</ul>
<p>Se pide:</p>
<ul>
<li>Crear un objeto que nos permita instanciar edificios. Cada vez que instanciemos un edificio le pasaremos la calle, número y código postal como parámetros. Se pide además crear los siguientes métodos para el objeto Edificio:</li>
<ul>
<li><strong><code>agregarPlantasYPuertas(numplantas, puertas)</code></strong> // Se le pasa el número de plantas que queremos crear en el piso y el número de puertas por planta. Cada vez que se llame a este método, añadirá el número de plantas y puertas indicadas en los parámetros, a las que ya están creadas en el edificio.</li>
<li><strong><code>modificarNumero(numero)</code></strong> // Se le pasa el nuevo número del edificio para que lo actualice.</li>
<li><strong><code>modificarCalle(calle)</code></strong> // Se le pasa el nuevo nombre de la calle para que lo actualice.</li>
<li><strong><code>modificarCodigoPostal(codigo)</code></strong> // Se le pasa el nuevo número de código postal del edificio.</li>
<li><strong><code>imprimeCalle</code></strong> // Devuelve el nombre de la calle del edificio.</li>
<li><strong><code>imprimeNumero</code></strong> // Devuelve el número del edificio.</li>
<li><strong><code>imprimeCodigoPostal</code></strong> // Devuelve el código postal del edificio.</li>
<li><strong><code>agregarPropietario(nombre,planta,puerta)</code></strong> // Se le pasa un nombre de propietario, un número de planta y un número de puerta y lo asignará como propietario de ese piso.</li>
<li><strong><code>imprimePlantas</code></strong> // Recorrerá el edificio e imprimirá todos los propietarios de cada puerta.</li>
</ul>
<li>Cada vez que se crea un edificio que muestre automáticamente un mensaje del estilo:</li>
<ul>
<li><<strong>construido nuevo edificio en calle: xxxxxx, nº: xx, CP: xxxxx.</strong></li>
</ul>
<li>Cada vez que se añada un propietario a un piso de un edificio que muestre un mensaje del estilo:</li>
<ul>
<li><strong>xxxxxxxx es ahora el propietario de la puerta x de la planta x.</strong></li>
</ul>
</ul>
<p>Aquí se muestra un ejemplo de lo que tendría que mostrar la aplicación:</p>
<p>Trabajando con objetos Javascript:</p>
<p>Instanciamos 3 objetos edificioA, edificioB y edificioC con estos datos:</p>
<ul>
<li>Construido nuevo edificio en calle: Garcia Prieto, nº: 58, CP: 15706.</li>
<li>Construido nuevo edificio en calle: Camino Caneiro, nº: 29, CP: 32004.</li>
<li>Construido nuevo edificio en calle: San Clemente, nº: s/n, CP: 15705.</li>
<li>El código postal del edificio A es: 15706.</li>
<li>La calle del edificio C es: San Clemente.</li>
<li>El edificio B está situado en la calle Camino Caneiro número 29.</li>
</ul>
<p>Agregamos 2 plantas y 3 puertas por planta al edificio A...</p>
<p>Agregamos 4 propietarios al edificio A...</p>
<ul>
<li>Jose Antonio Lopez es ahora el propietario de la puerta 1 de la planta 1.</li>
<li>Luisa Martinez es ahora el propietario de la puerta 2 de la planta 1.</li>
<li>Marta Castellón es ahora el propietario de la puerta 3 de la planta 1.</li>
<li>Antonio Pereira es ahora el propietario de la puerta 2 de la planta 2.</li>
</ul>
<p><strong>Listado de propietarios del edificio calle García Prieto número 58</strong></p>
<ul>
<li>Propietario del piso 1 de la planta 1: Jose Antonio Lopez.</li>
<li>Propietario del piso 2 de la planta 1: Luisa Martinez.</li>
<li>Propietario del piso 3 de la planta 1: Marta Castellón.</li>
<li>Propietario del piso 1 de la planta 2:</li>
<li>Propietario del piso 2 de la planta 2: Antonio Pereira.</li>
<li>Propietario del piso 3 de la planta 2:</li>
</ul>
<p>Agregamos 1 planta más al edificio A...</p>
<p>Agregamos 1 propietario más al edificio A planta 3, puerta 2...</p>
<ul>
<li>Pedro Meijide es ahora el propietario de la puerta 2 de la planta 3.</li>
</ul>
<p><strong>Listado de propietarios del edificio calle García Prieto número 58</strong></p>
<ul>
<li>Propietario del piso 1 de la planta 1: Jose Antonio Lopez.</li>
<li>Propietario del piso 2 de la planta 1: Luisa Martinez.</li>
<li>Propietario del piso 3 de la planta 1: Marta Castellón.</li>
<li>Propietario del piso 1 de la planta 2:</li>
<li>Propietario del piso 2 de la planta 2:</li>
<li>Propietario del piso 1 de la planta 3:</li>
<li>Propietario del piso 2 de la planta 3: Pedro Meijide.</li>
</ul>
