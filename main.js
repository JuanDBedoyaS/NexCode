const PY_EX = [
  // ── VARIABLES ──────────────────────────────────────
  { cat:'variables', diff:'facil', title:'Declara y muestra variables',
    desc:'Crea tres variables: tu nombre (texto), tu edad (número entero) y tu estatura en metros (decimal). Imprime los tres valores en una sola línea usando f-string.',
    hint:'Para f-strings escribe: f"Mi nombre es {nombre} y tengo {edad} años"',
    keywords:['nombre','edad','estatura','print','f"'],
    solution:
`nombre = "Juan Pablo"
edad = 19
estatura = 1.75
print(f"Me llamo {nombre}, tengo {edad} años y mido {estatura}m")`,
    doc:`<strong>Variables en Python:</strong><br>
• No necesitas declarar el tipo — Python lo detecta solo.<br>
• <code>nombre = "texto"</code> → tipo <code>str</code> (cadena de texto)<br>
• <code>edad = 19</code> → tipo <code>int</code> (número entero)<br>
• <code>estatura = 1.75</code> → tipo <code>float</code> (número decimal)<br>
• <strong>f-string:</strong> forma moderna y elegante de unir texto con variables: <code>f"Hola {variable}"</code>` },

  { cat:'variables', diff:'facil', title:'Intercambio de variables',
    desc:'Crea dos variables a = 10 y b = 20. Intercambia sus valores (a debe quedar con 20 y b con 10) usando la forma elegante de Python en una sola línea. Imprime el resultado.',
    hint:'En Python puedes hacer: a, b = b, a — ¡en una sola línea!',
    keywords:['a','b','=','print'],
    solution:
`a = 10
b = 20
a, b = b, a
print(f"a = {a}, b = {b}")`,
    doc:`<strong>Intercambio de variables (swap):</strong><br>
• En otros lenguajes necesitas variable temporal: <code>temp = a; a = b; b = temp</code><br>
• Python permite el intercambio directo: <code>a, b = b, a</code><br>
• Esto se llama <strong>desempaquetado de tuplas</strong>, un superpoder de Python.<br>
• Python evalúa todo el lado derecho ANTES de hacer las asignaciones.` },

  { cat:'variables', diff:'medio', title:'Conversión de tipos',
    desc:'Tienes la variable texto = "42". Conviértela a entero y a flotante. Luego convierte el número 3.99 a entero (observa qué pasa con los decimales). Imprime cada conversión con su tipo usando type().',
    hint:'Funciones de conversión: int(), float(), str(). Para ver el tipo: type(variable)',
    keywords:['int','float','type','print'],
    solution:
`texto = "42"
como_entero = int(texto)
como_float  = float(texto)
truncado    = int(3.99)

print(f"'{texto}' como int:   {como_entero} — tipo: {type(como_entero)}")
print(f"'{texto}' como float: {como_float}  — tipo: {type(como_float)}")
print(f"3.99 como int:        {truncado}    — tipo: {type(truncado)}")`,
    doc:`<strong>Conversión de tipos (casting) en Python:</strong><br>
• <code>int("42")</code> → convierte el string "42" al entero 42<br>
• <code>float("42")</code> → convierte al decimal 42.0<br>
• <code>int(3.99)</code> → <strong>trunca</strong> (no redondea): resultado = 3<br>
• <code>type(x)</code> → devuelve el tipo del dato: &lt;class 'int'&gt;, &lt;class 'float'&gt;, etc.<br>
• Si intentas <code>int("hola")</code> obtendrás un error — no toda cadena es convertible.` },

  // ── CONDICIONALES ───────────────────────────────────
  { cat:'condicionales', diff:'facil', title:'¿Mayor de edad?',
    desc:'Guarda una edad en una variable. Usa if/elif/else para imprimir: "Edad inválida" si es negativa, "Menor de edad" si es menor de 18, y "Mayor de edad" si tiene 18 o más.',
    hint:'Evalúa primero el caso negativo, luego if edad < 18, luego else',
    keywords:['if','elif','else','edad','print'],
    solution:
`edad = 20

if edad < 0:
    print("Edad inválida")
elif edad < 18:
    print("Menor de edad")
else:
    print("Mayor de edad")`,
    doc:`<strong>Condicionales if / elif / else:</strong><br>
• <code>if condición:</code> → ejecuta el bloque si la condición es <code>True</code><br>
• <code>elif condición:</code> → "else if" — se evalúa solo si el if anterior fue falso<br>
• <code>else:</code> → se ejecuta si ninguna condición anterior fue verdadera<br>
• ⚠️ Python usa <strong>indentación</strong> (4 espacios) para definir bloques — ¡no hay llaves {}!` },

  { cat:'condicionales', diff:'medio', title:'Calculadora de calificaciones',
    desc:'Crea una variable nota entre 0 y 10. Usa condicionales para imprimir: 9-10 → "Excelente ⭐", 7-8 → "Bueno 👍", 5-6 → "Regular 😐", menos de 5 → "Reprobado ❌". Valida que la nota esté en rango.',
    hint:'Recuerda: elif nota >= 7 ya implica que es menor de 9 (porque la condición anterior cubrió eso)',
    keywords:['if','elif','else','nota','print'],
    solution:
`nota = 8

if nota < 0 or nota > 10:
    print("Nota fuera de rango")
elif nota >= 9:
    print("Excelente ⭐")
elif nota >= 7:
    print("Bueno 👍")
elif nota >= 5:
    print("Regular 😐")
else:
    print("Reprobado ❌")`,
    doc:`<strong>Operadores lógicos en Python:</strong><br>
• <code>or</code>  → verdadero si AL MENOS UNA condición es verdadera<br>
• <code>and</code> → verdadero si AMBAS condiciones son verdaderas<br>
• <code>not</code> → invierte la condición<br>
• <strong>Tip Python:</strong> puedes encadenar comparaciones: <code>5 <= nota <= 10</code> es válido y más legible que <code>nota >= 5 and nota <= 10</code>` },

  { cat:'condicionales', diff:'dificil', title:'Clasificador de triángulos',
    desc:'Dado los lados a=3, b=4, c=5, determina si forman un triángulo válido (la suma de dos lados cualesquiera debe ser mayor que el tercero) y clasifícalo: equilátero (3 lados iguales), isósceles (2 lados iguales) o escaleno (todos diferentes).',
    hint:'Primero verifica si es triángulo válido con and, luego clasifica en el else',
    keywords:['if','elif','else','a','b','c','and','print'],
    solution:
`a, b, c = 3, 4, 5

if a + b <= c or a + c <= b or b + c <= a:
    print("No forman un triángulo válido")
elif a == b == c:
    print("Triángulo Equilátero")
elif a == b or b == c or a == c:
    print("Triángulo Isósceles")
else:
    print("Triángulo Escaleno")`,
    doc:`<strong>Condicionales anidados y comparaciones múltiples:</strong><br>
• <code>a == b == c</code> → Python permite encadenar igualdades directamente<br>
• <code>or</code> conecta múltiples condiciones — si cualquiera es verdadera, el bloque se ejecuta<br>
• El orden importa: verifica el caso más restrictivo primero (equilátero antes que isósceles)<br>
• Este ejercicio combina validación de datos con clasificación lógica — patrón muy común en programación.` },

  // ── FUNCIONES ──────────────────────────────────────
  { cat:'funciones', diff:'facil', title:'Tu primera función',
    desc:'Crea una función llamada saludar(nombre) que reciba un nombre y retorne el texto "¡Hola, [nombre]! Bienvenido al mundo de Python 🐍". Llámala con dos nombres diferentes e imprime los resultados.',
    hint:'def nombre_funcion(parametro):  →  return "texto"  — no olvides los dos puntos',
    keywords:['def','saludar','return','print'],
    solution:
`def saludar(nombre):
    return f"¡Hola, {nombre}! Bienvenido al mundo de Python 🐍"

print(saludar("Juan Pablo"))
print(saludar("María"))`,
    doc:`<strong>Funciones en Python:</strong><br>
• Se definen con la palabra clave <code>def</code><br>
• Estructura: <code>def nombre(parametros):</code> → bloque con indentación → <code>return valor</code><br>
• <code>return</code> devuelve el resultado al lugar donde se llamó la función<br>
• Sin <code>return</code>, la función devuelve <code>None</code> por defecto<br>
• Las funciones permiten <strong>reutilizar código</strong>: escríbela una vez, úsala mil veces.` },

  { cat:'funciones', diff:'medio', title:'Función: suma de lista sin sum()',
    desc:'Crea una función suma_lista(numeros) que reciba una lista de números y retorne la suma de todos sus elementos usando un bucle for, SIN usar la función sum() de Python. Pruébala con [5, 10, 3, 8, 2].',
    hint:'Inicializa total = 0 antes del bucle, luego total += numero en cada iteración',
    keywords:['def','suma_lista','for','return','total'],
    solution:
`def suma_lista(numeros):
    total = 0
    for numero in numeros:
        total += numero
    return total

mi_lista = [5, 10, 3, 8, 2]
resultado = suma_lista(mi_lista)
print(f"La suma de {mi_lista} es: {resultado}")`,
    doc:`<strong>Funciones con listas como parámetros:</strong><br>
• Puedes pasar cualquier tipo de dato como parámetro — incluyendo listas.<br>
• <strong>Acumulador:</strong> variable que guarda el resultado parcial (aquí <code>total</code>).<br>
• <code>total += numero</code> es equivalente a <code>total = total + numero</code> (forma compacta).<br>
• <code>for numero in numeros:</code> → itera sobre cada elemento de la lista automáticamente.` },

  { cat:'funciones', diff:'dificil', title:'Función recursiva: factorial',
    desc:'Crea una función recursiva factorial(n) que calcule n! sin usar bucles. El factorial de n es: n * (n-1) * ... * 1. Caso base: factorial(0) = 1. Prueba con factorial(5) = 120.',
    hint:'Una función recursiva se llama a sí misma. SIEMPRE necesita un caso base para no caer en bucle infinito.',
    keywords:['def','factorial','return','if','else'],
    solution:
`def factorial(n):
    if n == 0 or n == 1:   # Caso base
        return 1
    else:
        return n * factorial(n - 1)  # Llamada recursiva

print(f"factorial(0) = {factorial(0)}")  # 1
print(f"factorial(5) = {factorial(5)}")  # 120
print(f"factorial(3) = {factorial(3)}")  # 6`,
    doc:`<strong>Recursividad en Python:</strong><br>
• Una función recursiva es la que <strong>se llama a sí misma</strong>.<br>
• Siempre necesita un <strong>caso base</strong> (condición de parada) para no entrar en bucle infinito.<br>
• Traza de <code>factorial(4)</code>: 4 × factorial(3) → 4 × 3 × factorial(2) → 4 × 3 × 2 × factorial(1) → 4 × 3 × 2 × 1 = 24<br>
• Útil para: árboles, búsquedas, algoritmos de divide y vencerás.` },

  // ── BUCLES ─────────────────────────────────────────
  { cat:'bucles', diff:'facil', title:'Cuenta del 1 al 10 con for',
    desc:'Usa un bucle for con range() para imprimir los números del 1 al 10. Luego imprime también la suma total de esos números.',
    hint:'range(1, 11) genera del 1 al 10. El segundo número en range es EXCLUSIVO.',
    keywords:['for','range','print'],
    solution:
`suma = 0
for i in range(1, 11):
    print(i)
    suma += i

print(f"Suma total: {suma}")`,
    doc:`<strong>Bucle for con range() en Python:</strong><br>
• <code>range(inicio, fin)</code> → genera números desde <em>inicio</em> hasta <em>fin - 1</em><br>
• <code>range(10)</code> → del 0 al 9 — <code>range(1, 11)</code> → del 1 al 10<br>
• <code>range(0, 10, 2)</code> → 0, 2, 4, 6, 8 (tercer parámetro es el paso)<br>
• <code>i</code> es la variable de iteración — cambia en cada vuelta del bucle.` },

  { cat:'bucles', diff:'medio', title:'FizzBuzz clásico',
    desc:'Imprime los números del 1 al 30. Pero: si el número es múltiplo de 3 imprime "Fizz", si es múltiplo de 5 imprime "Buzz", si es múltiplo de ambos (15) imprime "FizzBuzz". Este ejercicio es uno de los más pedidos en entrevistas de trabajo.',
    hint:'Evalúa primero el caso de múltiplo de AMBOS (15), luego el de 3, luego el de 5',
    keywords:['for','range','if','elif','else','%','print'],
    solution:
`for i in range(1, 31):
    if i % 15 == 0:
        print("FizzBuzz")
    elif i % 3 == 0:
        print("Fizz")
    elif i % 5 == 0:
        print("Buzz")
    else:
        print(i)`,
    doc:`<strong>FizzBuzz — ejercicio clásico de lógica:</strong><br>
• <code>%</code> es el operador <strong>módulo</strong>: da el residuo de la división.<br>
• <code>15 % 3 == 0</code> → verdadero (15 es múltiplo de 3)<br>
• El orden importa: debes verificar múltiplo de 15 PRIMERO, o los casos de Fizz y Buzz lo capturarán antes.<br>
• Este ejercicio es famoso porque muchos programadores novatos lo fallan por el orden de condiciones.` },

  { cat:'bucles', diff:'medio', title:'Bucle while: adivina el número',
    desc:'Usa while para simular un juego de adivinanza. El número secreto es 7. Una variable intento empieza en 1 y sube de uno en uno. El bucle para cuando adivina. Muestra cada intento y cuántos intentos tomó.',
    hint:'while intento != secreto: — ¡no olvides incrementar intento dentro del bucle o será infinito!',
    keywords:['while','intento','print'],
    solution:
`secreto = 7
intento = 1
contador = 0

while intento != secreto:
    print(f"  Intento {contador+1}: probé {intento}... no es 🤔")
    intento += 1
    contador += 1

print(f"✅ ¡Adiviné! El número es {intento}. Tardé {contador+1} intentos.")`,
    doc:`<strong>Bucle while en Python:</strong><br>
• <code>while condición:</code> → se repite mientras la condición sea <code>True</code><br>
• ⚠️ CUIDADO: si la condición nunca se vuelve <code>False</code>, el programa corre para siempre.<br>
• Siempre asegúrate de modificar algo dentro del bucle que eventualmente haga falsa la condición.<br>
• <code>break</code> sale del bucle inmediatamente — <code>continue</code> salta a la siguiente iteración.` },

  // ── LISTAS ─────────────────────────────────────────
  { cat:'listas', diff:'facil', title:'Operaciones básicas con listas',
    desc:'Crea una lista de 5 frutas. Luego: (1) imprime la lista completa, (2) accede al primer y último elemento, (3) agrega una fruta al final, (4) elimina la segunda fruta, (5) imprime cuántas frutas hay ahora.',
    hint:'Usa: lista[0] primer elemento, lista[-1] último, .append() agregar, .pop(índice) eliminar, len() contar',
    keywords:['frutas','append','pop','len','print'],
    solution:
`frutas = ["manzana", "banano", "naranja", "uva", "fresa"]

print("Lista:", frutas)
print("Primera:", frutas[0])
print("Última:", frutas[-1])

frutas.append("mango")
frutas.pop(1)  # Elimina "banano" (índice 1)

print("Actualizada:", frutas)
print("Total:", len(frutas))`,
    doc:`<strong>Listas en Python:</strong><br>
• Se crean con corchetes: <code>lista = [1, 2, 3]</code><br>
• Los índices empiezan en <strong>0</strong>: el primer elemento es <code>lista[0]</code><br>
• <code>lista[-1]</code> → último elemento (los negativos cuentan desde el final)<br>
• <code>.append(x)</code> → agrega al final — <code>.pop(i)</code> → elimina y retorna el elemento en posición i<br>
• <code>len(lista)</code> → devuelve la cantidad de elementos` },

  { cat:'listas', diff:'medio', title:'Filtrar números pares',
    desc:'Dada la lista numeros = [1, 4, 7, 2, 9, 8, 3, 6, 5, 10], crea una nueva lista con SOLO los pares usando un bucle for. Luego muestra ambas listas y la suma de los pares.',
    hint:'Un número es par si numero % 2 == 0 (residuo de dividir entre 2 es cero)',
    keywords:['numeros','pares','for','if','append','%','print'],
    solution:
`numeros = [1, 4, 7, 2, 9, 8, 3, 6, 5, 10]
pares = []

for numero in numeros:
    if numero % 2 == 0:
        pares.append(numero)

print("Lista original:", numeros)
print("Solo pares:   ", pares)
print("Suma de pares:", sum(pares))`,
    doc:`<strong>Filtrado de listas:</strong><br>
• Patrón común: crear lista vacía → iterar → agregar condicionalmente.<br>
• <code>%</code> operador módulo → residuo de la división.<br>
• <strong>List comprehension</strong> (forma pythónica avanzada): <code>pares = [n for n in numeros if n % 2 == 0]</code> hace lo mismo en una línea.<br>
• <code>sum(lista)</code> → suma todos los elementos de la lista.` },

  // ── CADENAS ────────────────────────────────────────
  { cat:'cadenas', diff:'facil', title:'Manipulación de cadenas',
    desc:'Crea la variable frase = "Python es increíble". Imprime: (1) en MAYÚSCULAS, (2) en minúsculas, (3) cuántas letras tiene, (4) si contiene la palabra "increíble", (5) reemplaza "increíble" por "poderoso", (6) la frase al revés.',
    hint:'Métodos: .upper(), .lower(), len(), "x" in texto, .replace(), texto[::-1]',
    keywords:['frase','upper','lower','len','in','replace','[::-1]','print'],
    solution:
`frase = "Python es increíble"

print(frase.upper())              # PYTHON ES INCREÍBLE
print(frase.lower())              # python es increíble
print(len(frase))                 # 19
print("increíble" in frase)       # True
print(frase.replace("increíble", "poderoso"))
print(frase[::-1])                # elbíercni se nohtyP`,
    doc:`<strong>Métodos de cadenas (strings) en Python:</strong><br>
• <code>.upper()</code> / <code>.lower()</code> → convierte a mayúsculas / minúsculas<br>
• <code>len(texto)</code> → cuenta caracteres (incluyendo espacios)<br>
• <code>"x" in texto</code> → devuelve <code>True</code> si la subcadena existe en el texto<br>
• <code>.replace(viejo, nuevo)</code> → reemplaza todas las ocurrencias<br>
• <code>texto[::-1]</code> → invierte la cadena (slicing con paso -1)<br>
• Las cadenas son <strong>inmutables</strong>: los métodos no modifican el original, retornan uno nuevo.` },

  // ── POO ────────────────────────────────────────────
  { cat:'poo', diff:'medio', title:'Crea tu primera clase',
    desc:'Crea una clase Persona con atributos nombre y edad, y un método presentarse() que imprima "Hola, soy [nombre] y tengo [edad] años. ¡Encantado!". Crea 2 objetos y llama al método en cada uno.',
    hint:'class Persona:  →  def __init__(self, nombre, edad):  →  self.nombre = nombre',
    keywords:['class','Persona','def','__init__','self','presentarse'],
    solution:
`class Persona:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad   = edad
    
    def presentarse(self):
        print(f"Hola, soy {self.nombre} y tengo {self.edad} años. ¡Encantado!")

persona1 = Persona("Juan Pablo", 19)
persona2 = Persona("María", 25)

persona1.presentarse()
persona2.presentarse()`,
    doc:`<strong>POO — Clases y objetos en Python:</strong><br>
• <code>class</code> define una <strong>plantilla</strong> (molde) para crear objetos.<br>
• <code>__init__</code> es el <strong>constructor</strong>: se ejecuta automáticamente al crear el objeto con <code>Persona(...)</code>.<br>
• <code>self</code> hace referencia al objeto actual — siempre es el primer parámetro de cualquier método.<br>
• <code>self.nombre</code> → <strong>atributo de instancia</strong>: cada objeto tiene su propia copia independiente.<br>
• Crear objeto: <code>p = Persona("Ana", 20)</code>` },

  { cat:'poo', diff:'dificil', title:'Herencia en Python',
    desc:'Crea una clase Animal con nombre, sonido y método hablar(). Crea una clase Perro que herede de Animal, tenga raza como atributo adicional y sobreescriba hablar() para incluir la raza. Agrega también un método exclusivo ladrar().',
    hint:'class Perro(Animal):  →  super().__init__(nombre, sonido) para llamar al padre',
    keywords:['class','Animal','Perro','super','__init__','self','hablar'],
    solution:
`class Animal:
    def __init__(self, nombre, sonido):
        self.nombre = nombre
        self.sonido = sonido
    
    def hablar(self):
        print(f"{self.nombre} dice: {self.sonido}")

class Perro(Animal):
    def __init__(self, nombre, raza):
        super().__init__(nombre, "¡Guau!")
        self.raza = raza
    
    def hablar(self):
        print(f"{self.nombre} ({self.raza}) dice: {self.sonido} 🐕")
    
    def ladrar(self):
        print(f"{self.nombre} está ladrando fuerte: ¡GUAU GUAU!")

mi_perro = Perro("Rex", "Pastor Alemán")
mi_perro.hablar()
mi_perro.ladrar()`,
    doc:`<strong>Herencia en Python:</strong><br>
• <code>class Hija(Padre):</code> → la clase Hija hereda todos los métodos y atributos de Padre.<br>
• <code>super().__init__()</code> → llama al constructor de la clase padre.<br>
• La clase hija puede: <strong>(1)</strong> usar métodos del padre, <strong>(2)</strong> agregar nuevos métodos, <strong>(3)</strong> sobreescribir métodos existentes (override).<br>
• Principio "ES-UN": un Perro ES UN Animal → relación de herencia correcta.` },
];

// ======================================================
// BASE DE DATOS DE EJERCICIOS — JAVA
// ======================================================
const JAVA_EX = [
  { cat:'variables', diff:'facil', title:'Tipos de datos en Java',
    desc:'Declara en el método main: un int con tu edad, un double con tu estatura, un String con tu nombre, y un boolean indicando si eres estudiante. Imprime cada variable con System.out.println().',
    hint:'En Java DEBES declarar el tipo: int edad = 20; — String va con mayúscula',
    keywords:['int','double','String','boolean','System.out.println','main'],
    solution:
`public class Variables {
    public static void main(String[] args) {
        int    edad        = 19;
        double estatura    = 1.75;
        String nombre      = "Juan Pablo";
        boolean esEstu     = true;
        
        System.out.println("Nombre: "      + nombre);
        System.out.println("Edad: "        + edad);
        System.out.println("Estatura: "    + estatura);
        System.out.println("Estudiante: "  + esEstu);
    }
}`,
    doc:`<strong>Tipos de datos en Java:</strong><br>
• <code>int</code> → enteros (-2B a 2B) — <code>long</code> para números muy grandes<br>
• <code>double</code> → decimales (64 bits) — <code>float</code> es de 32 bits<br>
• <code>String</code> → cadenas de texto (¡con S mayúscula! Es una clase)<br>
• <code>boolean</code> → <code>true</code> o <code>false</code> (en minúscula, a diferencia de otros lenguajes)<br>
• A diferencia de Python, Java es de <strong>tipado estático</strong>: debes declarar el tipo siempre.` },

  { cat:'variables', diff:'medio', title:'Operaciones aritméticas en Java',
    desc:'Declara dos enteros a = 17 y b = 5. Calcula e imprime: suma, resta, multiplicación, división entera, residuo (%), y el resultado de la división como decimal (necesitarás hacer un cast).',
    hint:'Para división decimal: (double) a / b — el cast convierte el int a double antes de dividir',
    keywords:['int','double','System.out.println','a','b','+','-','*','/',`%`],
    solution:
`public class Operaciones {
    public static void main(String[] args) {
        int a = 17, b = 5;
        
        System.out.println("Suma:            " + (a + b));
        System.out.println("Resta:           " + (a - b));
        System.out.println("Multiplicación:  " + (a * b));
        System.out.println("División entera: " + (a / b));
        System.out.println("Residuo:         " + (a % b));
        System.out.println("División real:   " + ((double) a / b));
    }
}`,
    doc:`<strong>Operadores y casting en Java:</strong><br>
• <code>17 / 5</code> con dos <code>int</code> → resultado <code>int</code> = 3 (trunca los decimales)<br>
• <code>(double) a / b</code> → <strong>cast explícito</strong>: convierte a a double antes de dividir, resultado = 3.4<br>
• <code>%</code> → módulo (residuo): <code>17 % 5 = 2</code><br>
• En Java las operaciones entre tipos siguen reglas de <strong>promoción de tipos</strong>: el tipo más pequeño se convierte al más grande.` },

  { cat:'condicionales', diff:'facil', title:'if-else en Java',
    desc:'Declara int temperatura = 25. Usa if/else if/else para imprimir: menor de 0 → "Hace mucho frío", 0 a 15 → "Frío", 16 a 25 → "Templado", mayor de 25 → "Caliente".',
    hint:'En Java: if (condición) { } — nota los paréntesis en la condición y las llaves para el bloque',
    keywords:['if','else','temperatura','System.out.println'],
    solution:
`public class Temperatura {
    public static void main(String[] args) {
        int temperatura = 25;
        
        if (temperatura < 0) {
            System.out.println("Hace mucho frío 🥶");
        } else if (temperatura <= 15) {
            System.out.println("Frío 🧥");
        } else if (temperatura <= 25) {
            System.out.println("Templado 😊");
        } else {
            System.out.println("Caliente 🌞");
        }
    }
}`,
    doc:`<strong>Condicionales Java vs Python:</strong><br>
• Java: <code>if (condicion)</code> — Python: <code>if condicion:</code><br>
• Java usa <strong>llaves {}</strong> para delimitar bloques — Python usa indentación<br>
• Java dice <code>else if</code> — Python dice <code>elif</code><br>
• Los operadores de comparación son iguales: <code>==, !=, <, >, <=, >=</code><br>
• Operadores lógicos Java: <code>&&</code> (y), <code>||</code> (o), <code>!</code> (no)` },

  { cat:'condicionales', diff:'medio', title:'Switch en Java',
    desc:'Declara int dia = 3. Usa switch para imprimir el nombre del día: 1→Lunes, 2→Martes, 3→Miércoles... 7→Domingo. Si el número está fuera del rango 1-7, imprime "Día inválido".',
    hint:'switch(variable) { case valor: System.out.println(...); break; default: ... }',
    keywords:['switch','case','break','default','dia','System.out.println'],
    solution:
`public class DiaSemana {
    public static void main(String[] args) {
        int dia = 3;
        
        switch (dia) {
            case 1: System.out.println("Lunes");     break;
            case 2: System.out.println("Martes");    break;
            case 3: System.out.println("Miércoles"); break;
            case 4: System.out.println("Jueves");    break;
            case 5: System.out.println("Viernes");   break;
            case 6: System.out.println("Sábado");    break;
            case 7: System.out.println("Domingo");   break;
            default: System.out.println("Día inválido");
        }
    }
}`,
    doc:`<strong>Switch en Java:</strong><br>
• Útil cuando comparas una variable contra muchos valores fijos.<br>
• <code>case valor:</code> → si la variable coincide, ejecuta hasta el siguiente <code>break</code><br>
• ⚠️ <code>break;</code> es VITAL — sin él el programa sigue ejecutando los siguientes cases ("fall-through")<br>
• <code>default:</code> → se ejecuta si ningún case coincide (como el <code>else</code>)<br>
• Java 14+ tiene switch expressions con sintaxis más moderna.` },

  { cat:'metodos', diff:'facil', title:'Tu primer método en Java',
    desc:'Crea una clase con un método estático saludar(String nombre) que retorne "¡Hola, [nombre]! Bienvenido a Java ☕". En el main llama el método e imprime el resultado.',
    hint:'static String saludar(String nombre) { return "..."; } — static permite llamarlo desde main sin crear un objeto',
    keywords:['static','String','saludar','return','main','System.out.println'],
    solution:
`public class Saludo {
    
    // Método estático: pertenece a la clase, no a una instancia
    static String saludar(String nombre) {
        return "¡Hola, " + nombre + "! Bienvenido a Java ☕";
    }
    
    public static void main(String[] args) {
        String resultado = saludar("Juan Pablo");
        System.out.println(resultado);
    }
}`,
    doc:`<strong>Métodos en Java:</strong><br>
• En Java se llaman <strong>métodos</strong> (no funciones).<br>
• Estructura: <code>tipoRetorno nombreMetodo(tipo param) { ... return valor; }</code><br>
• <code>static</code> → el método pertenece a la clase (no necesitas crear un objeto para usarlo)<br>
• <code>void</code> → el método no retorna nada<br>
• <code>String</code> → el método retorna una cadena de texto<br>
• El tipo de <code>return</code> debe coincidir con el tipo declarado en el método.` },

  { cat:'metodos', diff:'medio', title:'Método: calcular potencia',
    desc:'Crea un método estático int potencia(int base, int exponente) que calcule base^exponente usando un bucle for, SIN usar Math.pow(). En el main, prueba con potencia(2, 8) y potencia(3, 4).',
    hint:'Inicializa int resultado = 1; y multiplica por base tantas veces como indica el exponente',
    keywords:['static','int','potencia','for','return','resultado'],
    solution:
`public class Potencia {
    
    static int potencia(int base, int exponente) {
        int resultado = 1;
        for (int i = 0; i < exponente; i++) {
            resultado = resultado * base;
        }
        return resultado;
    }
    
    public static void main(String[] args) {
        System.out.println("2^8 = " + potencia(2, 8));  // 256
        System.out.println("3^4 = " + potencia(3, 4));  // 81
    }
}`,
    doc:`<strong>Métodos con retorno en Java:</strong><br>
• El método declara el tipo que va a retornar: <code>int potencia(...)</code><br>
• <strong>Bucle for Java:</strong> <code>for (int i = 0; i < limite; i++)</code><br>
  - <code>int i = 0</code> → inicialización (se ejecuta una vez)<br>
  - <code>i < exponente</code> → condición (evaluada antes de cada iteración)<br>
  - <code>i++</code> → incremento (al final de cada iteración)<br>
• <code>Math.pow(base, exp)</code> → la forma nativa de Java (retorna double).` },

  { cat:'bucles', diff:'facil', title:'Bucle for en Java',
    desc:'Usa un bucle for para imprimir los números del 1 al 15. Si el número es múltiplo de 3, imprime "Fizz" en su lugar. Usa el operador módulo (%).',
    hint:'for (int i = 1; i <= 15; i++) — para verificar múltiplo: i % 3 == 0',
    keywords:['for','int','i','System.out.println','if','%'],
    solution:
`public class FizzParcial {
    public static void main(String[] args) {
        for (int i = 1; i <= 15; i++) {
            if (i % 3 == 0) {
                System.out.println("Fizz");
            } else {
                System.out.println(i);
            }
        }
    }
}`,
    doc:`<strong>Bucle for en Java:</strong><br>
• Estructura: <code>for (inicialización; condición; incremento) { }</code><br>
• <code>int i = 1</code> → variable de control declarada e inicializada<br>
• <code>i <= 15</code> → condición: mientras sea verdadera, el bucle continúa<br>
• <code>i++</code> → equivalente a <code>i = i + 1</code>, se ejecuta al final de cada iteración<br>
• <code>%</code> → operador módulo: <code>9 % 3 == 0</code> (9 es múltiplo de 3)` },

  { cat:'bucles', diff:'medio', title:'Tabla de multiplicar con for',
    desc:'Crea un método estático tablaMultiplicar(int numero) que imprima la tabla de multiplicar del número recibido (del 1 al 10). Llama el método con el número 7.',
    hint:'Usa for de 1 a 10. El resultado de cada fila es numero * i',
    keywords:['static','void','tablaMultiplicar','for','System.out.println'],
    solution:
`public class TablaMultiplicar {
    
    static void tablaMultiplicar(int numero) {
        System.out.println("=== Tabla del " + numero + " ===");
        for (int i = 1; i <= 10; i++) {
            System.out.println(numero + " x " + i + " = " + (numero * i));
        }
    }
    
    public static void main(String[] args) {
        tablaMultiplicar(7);
    }
}`,
    doc:`<strong>Métodos void y bucles anidados:</strong><br>
• <code>void</code> → el método no retorna nada, solo ejecuta acciones (como imprimir)<br>
• La concatenación en Java con <code>+</code> convierte automáticamente los números a String<br>
• ⚠️ <code>numero * i</code> entre paréntesis para que Java sepa que debe multiplicar antes de concatenar: <code>"texto" + (2 * 3)</code> → "texto6"<br>
• Sin paréntesis: <code>"texto" + 2 * 3</code> → aun así funciona por precedencia, pero los paréntesis son más claros.` },

  { cat:'arrays', diff:'facil', title:'Arrays en Java',
    desc:'Crea un array int[] con los valores {10, 25, 3, 47, 8}. Usa un bucle for para imprimir cada elemento con su índice. Con un segundo bucle, encuentra e imprime el valor mayor del array.',
    hint:'int[] numeros = {10, 25, 3, 47, 8}; — accede con numeros[i] — usa numeros.length para la longitud',
    keywords:['int[]','numeros','for','length','System.out.println'],
    solution:
`public class ArrayEjemplo {
    public static void main(String[] args) {
        int[] numeros = {10, 25, 3, 47, 8};
        
        // Imprimir todos los elementos
        System.out.println("Elementos del array:");
        for (int i = 0; i < numeros.length; i++) {
            System.out.println("  [" + i + "] = " + numeros[i]);
        }
        
        // Encontrar el mayor
        int mayor = numeros[0];
        for (int i = 1; i < numeros.length; i++) {
            if (numeros[i] > mayor) {
                mayor = numeros[i];
            }
        }
        System.out.println("El mayor es: " + mayor);
    }
}`,
    doc:`<strong>Arrays en Java:</strong><br>
• Se declaran: <code>tipo[] nombre = {valores};</code> o <code>int[] arr = new int[5];</code><br>
• Los índices van de <strong>0</strong> a <code>length - 1</code><br>
• <code>numeros.length</code> → propiedad del array (¡sin paréntesis! No es un método)<br>
• Los arrays tienen <strong>tamaño fijo</strong> — para tamaño dinámico usa <code>ArrayList&lt;Integer&gt;</code><br>
• También puedes usar el bucle for-each: <code>for (int n : numeros)</code>` },

  { cat:'arrays', diff:'medio', title:'Buscar elemento en array',
    desc:'Crea un array con los nombres {"Ana", "Carlos", "María", "Pedro", "Luis"}. Crea un método estático int buscar(String[] arr, String objetivo) que retorne el índice donde está el objetivo, o -1 si no está. Prueba buscando "María" y "Roberto".',
    hint:'Recorre el array con for, compara con arr[i].equals(objetivo) (en Java los String se comparan con .equals())',
    keywords:['static','int','buscar','String[]','for','equals','return'],
    solution:
`public class BuscarArray {
    
    static int buscar(String[] arr, String objetivo) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i].equals(objetivo)) {
                return i;  // Retorna el índice donde lo encontró
            }
        }
        return -1;  // No encontrado
    }
    
    public static void main(String[] args) {
        String[] nombres = {"Ana", "Carlos", "María", "Pedro", "Luis"};
        
        int idx1 = buscar(nombres, "María");
        int idx2 = buscar(nombres, "Roberto");
        
        System.out.println("María encontrada en índice: " + idx1);
        System.out.println("Roberto encontrado en índice: " + idx2);
    }
}`,
    doc:`<strong>Comparación de Strings en Java:</strong><br>
• ⚠️ NUNCA uses <code>==</code> para comparar Strings — compara referencias, no contenido.<br>
• USA siempre <code>.equals()</code>: <code>"hola".equals(variable)</code><br>
• <code>.equalsIgnoreCase()</code> → igual pero sin distinguir mayúsculas/minúsculas<br>
• El patrón de retornar <code>-1</code> para "no encontrado" es una convención clásica en programación.` },

  { cat:'poo', diff:'medio', title:'Clase y objetos en Java',
    desc:'Crea una clase Estudiante con atributos privados nombre, edad y promedio. Agrega un constructor y un método público void mostrarInfo() que imprima los datos. En el main crea 2 objetos y llama mostrarInfo() en cada uno.',
    hint:'private String nombre; — public Estudiante(String n, int e, double p) { this.nombre = n; }',
    keywords:['class','Estudiante','private','public','this','new','mostrarInfo','System.out.println'],
    solution:
`class Estudiante {
    private String nombre;
    private int    edad;
    private double promedio;
    
    // Constructor
    public Estudiante(String nombre, int edad, double promedio) {
        this.nombre   = nombre;   // this diferencia el atributo del parámetro
        this.edad     = edad;
        this.promedio = promedio;
    }
    
    public void mostrarInfo() {
        System.out.println("Nombre:   " + nombre);
        System.out.println("Edad:     " + edad);
        System.out.println("Promedio: " + promedio);
        System.out.println("----------");
    }
}

public class Main {
    public static void main(String[] args) {
        Estudiante e1 = new Estudiante("Juan Pablo", 19, 4.2);
        Estudiante e2 = new Estudiante("María", 21, 4.8);
        
        e1.mostrarInfo();
        e2.mostrarInfo();
    }
}`,
    doc:`<strong>POO en Java — Clases y objetos:</strong><br>
• <code>private</code> → atributo solo accesible desde dentro de la clase (<strong>encapsulamiento</strong>)<br>
• <code>public</code> → accesible desde cualquier parte del código<br>
• <strong>Constructor:</strong> mismo nombre de la clase, sin tipo de retorno, se ejecuta con <code>new</code><br>
• <code>this.nombre</code> → hace referencia al atributo del objeto (no al parámetro)<br>
• <code>new Estudiante(...)</code> → reserva memoria y crea el objeto` },

  { cat:'poo', diff:'dificil', title:'Herencia en Java',
    desc:'Crea una clase base Vehiculo con marca y velocidad, y un método describir(). Luego crea una clase Moto que herede de Vehiculo, tenga el atributo adicional cilindrada, y sobreescriba describir() para incluir la cilindrada. Crea un objeto Moto en el main.',
    hint:'class Moto extends Vehiculo { ... } — @Override sobre el método — super(marca, vel) en constructor',
    keywords:['extends','Vehiculo','Moto','super','Override','describir','new'],
    solution:
`class Vehiculo {
    protected String marca;
    protected int    velocidad;
    
    public Vehiculo(String marca, int velocidad) {
        this.marca     = marca;
        this.velocidad = velocidad;
    }
    
    public void describir() {
        System.out.println("Vehículo: " + marca + " | Vel. máx: " + velocidad + " km/h");
    }
}

class Moto extends Vehiculo {
    private int cilindrada;
    
    public Moto(String marca, int velocidad, int cilindrada) {
        super(marca, velocidad);   // Llama al constructor de Vehiculo
        this.cilindrada = cilindrada;
    }
    
    @Override
    public void describir() {
        super.describir();         // Ejecuta el describir() del padre
        System.out.println("Cilindrada: " + cilindrada + "cc");
    }
}

public class Main {
    public static void main(String[] args) {
        Moto moto = new Moto("Yamaha", 180, 600);
        moto.describir();
    }
}`,
    doc:`<strong>Herencia en Java:</strong><br>
• <code>extends</code> → establece la herencia: <code>class Hija extends Padre</code><br>
• <code>protected</code> → accesible desde la clase y sus subclases (más permisivo que private)<br>
• <code>super(args)</code> → llama al constructor del padre (debe ser la PRIMERA línea del constructor hijo)<br>
• <code>@Override</code> → anotación que le dice al compilador que estamos sobreescribiendo un método<br>
• <code>super.metodo()</code> → llama al método original del padre desde la clase hija` },
];

// ======================================================
// DATOS — EXTENSIONES VS CODE
// ======================================================
const EXTS = {
  python: [
    { ico:'🐍', bg:'rgba(0,212,255,.1)', name:'Python (Microsoft)', id:'ms-python.python',
      desc:'Extensión oficial. Autocompletado inteligente, linting, depuración, ejecución de código. IMPRESCINDIBLE.', must:true },
    { ico:'🔍', bg:'rgba(0,150,255,.1)', name:'Pylance', id:'ms-python.vscode-pylance',
      desc:'Motor de análisis semántico. Hace el autocompletado mucho más inteligente con información de tipos.' },
    { ico:'⚡', bg:'rgba(255,100,0,.1)',  name:'Python Indent', id:'KevinRose.vsc-python-indent',
      desc:'Corrige automáticamente la indentación de Python. Vital porque Python usa indentación para definir bloques.' },
    { ico:'📓', bg:'rgba(100,0,255,.1)',  name:'Jupyter', id:'ms-toolsai.jupyter',
      desc:'Crea y ejecuta notebooks (.ipynb). Ideal para experimentar, aprender y ciencia de datos.' },
    { ico:'🧹', bg:'rgba(0,200,100,.1)',  name:'autopep8', id:'ms-python.autopep8',
      desc:'Formatea tu código Python automáticamente al guardar, siguiendo el estándar PEP 8.' },
  ],
  java: [
    { ico:'☕', bg:'rgba(255,200,0,.1)',  name:'Extension Pack for Java', id:'vscjava.vscode-java-pack',
      desc:'Pack oficial con todo: soporte Java, depurador, Maven, Spring. TODO EN UNO — instala este y ya.', must:true },
    { ico:'🔧', bg:'rgba(200,50,0,.1)',   name:'Language Support for Java', id:'redhat.java',
      desc:'Motor de lenguaje Java. Autocompletado, navegación de código, refactoring y diagnósticos.' },
    { ico:'🐛', bg:'rgba(255,0,80,.1)',   name:'Debugger for Java', id:'vscjava.vscode-java-debug',
      desc:'Depura programas Java con breakpoints, inspección de variables y paso a paso.' },
    { ico:'📦', bg:'rgba(0,100,255,.1)',  name:'Maven for Java', id:'vscjava.vscode-maven',
      desc:'Gestiona proyectos Maven, descarga dependencias y facilita la compilación de proyectos complejos.' },
    { ico:'🧪', bg:'rgba(0,200,150,.1)',  name:'Test Runner for Java', id:'vscjava.vscode-java-test',
      desc:'Ejecuta pruebas JUnit directamente desde el editor con indicadores visuales de éxito/fallo.' },
  ],
  general: [
    { ico:'🌑', bg:'rgba(100,0,200,.1)',  name:'One Dark Pro', id:'zhuangtongfa.Material-theme',
      desc:'Tema oscuro más popular de VS Code. Cómodo para los ojos en sesiones largas de programación.' },
    { ico:'📁', bg:'rgba(0,150,255,.1)',  name:'Material Icon Theme', id:'PKief.material-icon-theme',
      desc:'Iconos coloridos para archivos y carpetas. Identifica a golpe de vista el tipo de cada archivo.' },
    { ico:'✅', bg:'rgba(0,200,100,.1)',  name:'GitLens', id:'eamodio.gitlens',
      desc:'Potencia el soporte de Git en VS Code. Muestra historial de cambios, quién escribió cada línea y más.' },
    { ico:'💬', bg:'rgba(255,100,200,.1)',name:'Better Comments', id:'aaron-bond.better-comments',
      desc:'Colorea los comentarios: TODOs en naranja, alertas en rojo, preguntas en azul. Mucho más legible.' },
    { ico:'🔤', bg:'rgba(255,200,0,.1)',  name:'Bracket Pair Colorizer', id:'CoenraadS.bracket-pair-colorizer-2',
      desc:'Colorea los pares de paréntesis y llaves con colores diferentes. Evita confundirse con código anidado.' },
    { ico:'🚀', bg:'rgba(0,200,255,.1)',  name:'Live Server', id:'ritwickdey.LiveServer',
      desc:'Servidor local con recarga automática para HTML/CSS/JS. Útil para proyectos web.' },
  ],
};

// ======================================================
// ESTADO DE LA APLICACIÓN
// ======================================================
const state = {
  pyFilter:'all', javaFilter:'all',
  py:   { total:0, ok:0, att:0, rendered:[] },
  java: { total:0, ok:0, att:0, rendered:[] },
};

// ======================================================
// NAVEGACIÓN
// ======================================================
function showSection(name) {
  // Ocultar todas las secciones
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById('sec-' + name).classList.add('active');

  // Actualizar tabs activos
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  const labels = { home:'Inicio', python:'Python', java:'Java', vscode:'VS Code', conceptos:'Conceptos', faq: 'Preguntas Frecuentes', ayudas: 'Otras Ayudas' };
  document.querySelectorAll('.nav-tab').forEach(t => {
    if (t.textContent.trim() === labels[name]) t.classList.add('active');
  });

  // Generar ejercicios la primera vez
  if (name === 'python' && state.py.rendered.length === 0)  generateEx('python');
  if (name === 'java'   && state.java.rendered.length === 0) generateEx('java');
  // Renderizar extensiones
  if (name === 'vscode') renderExtensions();

  // Cerrar menú hamburguesa automáticamente
  const navCenter = document.querySelector('.nav-center');
  if (navCenter) {
      navCenter.classList.remove('open');
  }
}

// Modal del desarrollador
function openDev()  { document.getElementById('devModal').classList.add('open'); }
function closeDev(e){ if (e.target.id==='devModal') document.getElementById('devModal').classList.remove('open'); }

// ======================================================
// FILTROS
// ======================================================
function setFilter(lang, cat, btn) {
  if (lang==='python') state.pyFilter = cat;
  else state.javaFilter = cat;

  const cls = lang==='python' ? '.filter-btn.py-f' : '.filter-btn.java-f';
  document.querySelectorAll(cls).forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  generateEx(lang);
}

// ======================================================
// GENERAR EJERCICIOS
// ======================================================
function generateEx(lang) {
  const pool   = lang==='python' ? PY_EX : JAVA_EX;
  const filter = lang==='python' ? state.pyFilter : state.javaFilter;
  const listId = lang==='python' ? 'py-list' : 'java-list';
  const s      = state[lang==='python'?'py':'java'];

  // Filtrar por categoría
  let filtered = filter==='all' ? pool : pool.filter(e => e.cat===filter);
  if (filtered.length===0) {
    document.getElementById(listId).innerHTML =
      '<div style="color:var(--text2);padding:2rem;text-align:center;background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius)">No hay ejercicios en esta categoría aún. ¡Próximamente!</div>';
    return;
  }

  // Mezclar y tomar hasta 6
  let selected = [...filtered].sort(() => Math.random()-.5).slice(0, Math.min(filtered.length, 6));
  s.rendered = selected;
  s.total = selected.length;
  s.ok = 0; s.att = 0;

  // Actualizar stats
  const pfx = lang==='python' ? 'py' : 'java';
  document.getElementById(pfx+'-stats').style.display = 'flex';
  document.getElementById(pfx+'-total').textContent = s.total;
  document.getElementById(pfx+'-ok').textContent = 0;
  document.getElementById(pfx+'-att').textContent = 0;

  // Renderizar cards
  document.getElementById(listId).innerHTML = selected.map((ex, i) => renderCard(ex, i, lang)).join('');
}

// ======================================================
// RENDERIZAR CARD DE EJERCICIO
// ======================================================
function renderCard(ex, idx, lang) {
  const id = lang + '_' + idx;
  const isPy = lang === 'python';

  const catLabels = {
    variables:'Variables', condicionales:'Condicionales', funciones:'Funciones',
    metodos:'Métodos', bucles:'Bucles', listas:'Listas', arrays:'Arrays',
    cadenas:'Cadenas', poo:'POO', general:'General'
  };
  const diffLabels = { facil:'Fácil 🟢', medio:'Medio 🟡', dificil:'Difícil 🔴' };

  return `
<div class="ex-card" id="card_${id}" data-title="${ex.title.replace(/"/g,'&quot;')}" data-lang="${lang}">
  <div class="ex-top">
    <div class="ex-meta">
      <span class="ex-num">#${String(idx+1).padStart(2,'0')}</span>
      <span class="cat-tag cat-${ex.cat}">${catLabels[ex.cat]||ex.cat}</span>
      <span class="diff-tag diff-${ex.diff}">${diffLabels[ex.diff]||ex.diff}</span>
      <span class="${isPy?'lang-pill-py':'lang-pill-java'}">${isPy?'Python':'Java'}</span>
    </div>
    <div class="ex-title">${ex.title}</div>
    <div class="ex-desc">${ex.desc}</div>
    <div class="hint-box ${!isPy?'java':''}">
      💡 <strong>Pista:</strong> ${ex.hint}
    </div>
  </div>
  <div class="ex-code-area">
    <div class="code-label">✏️ Tu respuesta</div>
    <textarea
      class="code-input ${!isPy?'java-mode':''}"
      id="inp_${id}"
      rows="7"
      placeholder="${isPy?'# Escribe tu código Python aquí...':'// Escribe tu código Java aquí...'}"
    ></textarea>
    <div class="code-actions">
      <button class="btn-check" onclick="checkAnswer('${id}')">✓ Verificar</button>
      <button class="btn-sol"   onclick="toggleSol('${id}')">👁 Ver Solución</button>
      <button class="btn-docbtn" onclick="toggleDoc('${id}')">📖 Documentación</button>
    </div>
    <div class="feedback" id="fb_${id}"></div>
    <div class="solution-box" id="sol_${id}">
      <div class="sol-header">
        <span>Solución correcta</span>
        <span>✓ Código documentado</span>
      </div>
      <div class="sol-code">${escHtml(ex.solution)}</div>
      <div class="sol-doc" id="doc_${id}">
        <strong>📖 ¿Qué hace este código y por qué?</strong><br><br>
        ${ex.doc}
      </div>
    </div>
  </div>
</div>`;
}

// ======================================================
// VERIFICAR RESPUESTA
// ======================================================
function checkAnswer(id) {
  const [lang, idx] = id.split('_');
  const s      = state[lang==='python'?'py':'java'];
  const ex     = s.rendered[parseInt(idx)];
  if (!ex) return;

  const userInput = document.getElementById('inp_'+id).value.trim().toLowerCase();
  const fb        = document.getElementById('fb_'+id);

  if (userInput.length < 5) {
    showFeedback(fb, 'err', '⚠️ Escribe tu solución antes de verificar.');
    return;
  }

  s.att++;
  document.getElementById((lang==='python'?'py':'java')+'-att').textContent = s.att;

  // Contar palabras clave encontradas
  const kws    = ex.keywords.map(k => k.toLowerCase());
  const found  = kws.filter(k => userInput.includes(k));
  const score  = found.length / kws.length;
  const missing= kws.filter(k => !userInput.includes(k));

  if (score >= 0.8) {
    showFeedback(fb, 'ok',
      '🎉 ¡Excelente trabajo! Tu solución contiene todos los elementos clave. ¡Sigue así!');
    s.ok++;
    document.getElementById((lang==='python'?'py':'java')+'-ok').textContent = s.ok;
    document.getElementById('card_'+id).classList.add('solved-card');
  } else if (score >= 0.5) {
    showFeedback(fb, 'warn',
      `🤔 Vas por buen camino, pero faltan algunos elementos: <strong>${missing.join(', ')}</strong>. ¡Revisa la pista y vuelve a intentarlo!`);
  } else {
    showFeedback(fb, 'err',
      `❌ La solución no parece completa. Elementos que no encontré: <strong>${missing.join(', ')}</strong>.<br>Revisa el enunciado y la pista. Si te rindes, usa "Ver Solución" y lee la documentación para entenderlo.`);
  }
}

function showFeedback(el, type, msg) {
  el.className = 'feedback ' + type;
  el.innerHTML = msg;
  el.style.display = 'block';
}

function toggleSol(id) {
  const s = document.getElementById('sol_'+id);
  s.style.display = s.style.display==='block' ? 'none' : 'block';
}

function toggleDoc(id) {
  const sol = document.getElementById('sol_'+id);
  const doc = document.getElementById('doc_'+id);
  sol.style.display = 'block';
  doc.style.display = doc.style.display==='block' ? 'none' : 'block';
}

function escHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

// ======================================================
// RENDERIZAR EXTENSIONES
// ======================================================
function renderExtensions() {
  if (document.getElementById('ext-py').innerHTML) return;
  renderExtGroup('ext-py',   EXTS.python);
  renderExtGroup('ext-java', EXTS.java);
  renderExtGroup('ext-gen',  EXTS.general);
}

function renderExtGroup(containerId, exts) {
  document.getElementById(containerId).innerHTML = exts.map(e => `
    <div class="ext-card">
      <div class="ext-ico" style="background:${e.bg}">${e.ico}</div>
      <div class="ext-info">
        <h3>${e.name} ${e.must?'<span class="ext-must">★ ESENCIAL</span>':''}</h3>
        <p>${e.desc}</p>
        <div class="ext-id">${e.id}</div>
      </div>
    </div>`).join('');
}


/* =============================================
   FAQ ACCORDION
============================================= */

document.addEventListener("click", function(e){

  if(e.target.classList.contains("faq-question")){

    const item = e.target.parentElement;

    item.classList.toggle("active");

  }

});

/** Para el botón hamburguesa */
function toggleMenu() {
    const navCenter = document.querySelector(".nav-center");

    if (navCenter) {
        navCenter.classList.toggle("open");
    }
}