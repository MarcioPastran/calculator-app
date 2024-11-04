Calculator App
Description
This is a simple calculator application built with HTML, CSS, and JavaScript. It allows users to perform basic mathematical operations like addition, subtraction, multiplication, and division, along with additional features such as sign toggle, percentage calculation, and a backspace button.

Features
Basic Operations: Addition, subtraction, multiplication, and division.
Sign Toggle: Switch between positive and negative values.
Percentage Calculation: Calculate the percentage of a number.
Backspace: Delete the last entered digit.
Decimal Support: Add decimal points to numbers.
Expression and Result Display: Shows the current expression and calculated result in real-time.
Project Structure
The project includes the following files:

index.html: Contains the HTML structure of the calculator.
style.css: Defines the design and style of the calculator.
script.js: Contains the JavaScript logic and functions for the calculator’s operation.
Installation
Clone the repository:
bash
Copiar código
git clone https://github.com/your-username/calculator-app.git
Navigate to the project folder:
bash
Copiar código
cd calculator-app
Open the index.html file in your browser to use the calculator.
Functionality and Code Explanation
HTML
The index.html file defines the calculator’s structure, containing two main sections:

output: Displays the mathematical expression and the result.
input: Contains the calculator buttons, each with specific data-action and data-value attributes to differentiate actions.
CSS
The style.css file defines the calculator’s visual style, including:

Colors and sizes for the buttons.
Styling for the display sections (expression and result).
Distinctive colors for numeric and operator buttons.
JavaScript (script.js)
The script.js file defines the calculator logic with several functions:

buttonClick: Main event handler that listens for button clicks and executes the appropriate action.
addValue: Adds a number or symbol to the current expression.
updateDisplay: Updates the calculator display with the current expression and result.
clear: Clears the expression and result.
backspace: Deletes the last character in the expression.
submit: Calculates the result of the expression using evaluateExpression.
evaluateExpression: Evaluates the mathematical expression and returns the result, handling errors like division by zero.
negate: Toggles the sign of the expression or result.
percentage: Calculates the percentage of the current number.
decimal: Adds a decimal point if one hasn’t been added to the current number.
Usage Example
Click on numbers and operators to form an expression.
Press = to see the result.
Use C to clear the display and start a new calculation.
Use the +/- button to toggle the sign of the expression or result.
Use % to calculate the percentage of the current number.
Contributions
To contribute:

Fork this repository.
Create a new branch for your feature: git checkout -b branch-name.
Make your changes and commit them: git commit -m 'Description of change'.
Push the changes: git push origin branch-name.
Create a Pull Request on GitHub.
License
This project is licensed under the MIT License. See the LICENSE file for more details.

ESPAÑOL

Calculator App

Descripción:
Esta es una aplicación de calculadora simple hecha con HTML, CSS y JavaScript. Permite realizar operaciones matemáticas básicas como suma, resta, multiplicación y división, y también incluye funcionalidades adicionales como cambio de signo, porcentaje, y un botón de retroceso.

Características
Operaciones Básicas: Suma, resta, multiplicación y división.
Cambio de Signo: Permite alternar entre valores positivos y negativos.
Porcentaje: Calcula el porcentaje de un número.
Retroceso: Permite borrar el último dígito ingresado.
Soporte para Decimales: Añade puntos decimales a los números.
Visualización de Expresión y Resultado: Muestra la expresión actual y el resultado calculado en tiempo real.
Estructura del Proyecto
El proyecto consta de los siguientes archivos:

index.html: Contiene la estructura HTML de la calculadora.
style.css: Define el diseño y estilo de la calculadora.
script.js: Contiene la lógica y funciones en JavaScript para el funcionamiento de la calculadora.
Instalación
Clona el repositorio:
bash
Copiar código
git clone https://github.com/usuario/calculator-app.git
Navega a la carpeta del proyecto:
bash
Copiar código
cd calculator-app
Abre el archivo index.html en tu navegador para ver la calculadora en funcionamiento.
Funcionalidades y Explicación del Código
HTML
El archivo index.html define la estructura de la calculadora. Contiene dos secciones:

output: Muestra la expresión matemática y el resultado.
input: Incluye los botones de la calculadora, cada uno con propiedades específicas en sus atributos data-action y data-value para diferenciar las acciones.
CSS
En style.css se define el estilo visual de la calculadora, incluyendo:

Colores y tamaños de los botones.
Estilos de las secciones de pantalla (expresión y resultado).
Colores distintivos para botones numéricos y operadores.
JavaScript (script.js)
El archivo script.js define la lógica de la calculadora mediante varias funciones:

buttonClick: Manejador de eventos principal que escucha los clics en los botones y ejecuta la acción adecuada.
addValue: Agrega un número o símbolo a la expresión actual.
updateDisplay: Actualiza la pantalla de la calculadora con la expresión y el resultado actuales.
clear: Limpia la expresión y el resultado.
backspace: Elimina el último carácter de la expresión.
submit: Calcula el resultado de la expresión usando evaluateExpression.
evaluateExpression: Evalúa la expresión matemática y devuelve el resultado, manejando errores como divisiones por cero.
negate: Cambia el signo de la expresión o el resultado.
percentage: Calcula el porcentaje del número actual.
decimal: Añade un punto decimal si aún no se ha introducido en el número actual.
Ejemplo de Uso
Haz clic en los números y operadores para formar una expresión.
Presiona = para ver el resultado.
Usa C para limpiar la pantalla y empezar una nueva operación.
Usa el botón +/- para cambiar el signo de la expresión o resultado.
Usa % para calcular el porcentaje del número actual.
Contribuciones
Si quieres contribuir, puedes:

Hacer un fork de este repositorio.
Crear una rama para tu característica: git checkout -b nombre-rama.
Hacer tus cambios y confirmar: git commit -m 'Descripción del cambio'.
Subir los cambios: git push origin nombre-rama.
Crear un Pull Request en GitHub.
