// ============================================
// PROYECTO SEMANA 09: Catálogo de Elementos
// ============================================
//
// INSTRUCCIONES:
// 1. Define tu dominio en DOMAIN_NAME y VALUE_LABEL
// 2. Completa el array `items` con datos de tu dominio
// 3. Implementa cada función siguiendo los TODOs
// 4. Ejecuta con: node script.js
//
// Tu catálogo debe tener:
//   - Mínimo 6 objetos con al menos 5 propiedades cada uno
//   - Al menos 1 propiedad numérica, 1 booleana y 1 opcional
// ============================================

// ============================================
// CONFIGURACIÓN DEL DOMINIO
// ============================================

// TODO: Reemplaza con el nombre de tu dominio
// Ejemplos: "Biblioteca", "Farmacia", "Gimnasio", "Restaurante"
const DOMAIN_NAME = "Catálogo de Ropa Infantil";

// TODO: Reemplaza con el nombre del tipo de elemento
// Ejemplos: "libros", "medicamentos", "equipos", "platillos"
const VALUE_LABEL = "Productos";

// ============================================
// DATOS DEL CATÁLOGO
// ============================================

// TODO: Define al menos 6 objetos con mínimo 5 propiedades cada uno
// Incluye:
//   - id (número)
//   - name (string)
//   - Al menos 1 propiedad numérica (price, pages, duration, capacity, etc.)
//   - Al menos 1 propiedad booleana (available, active, inStock, visible, etc.)
//   - Al menos 1 propiedad opcional (no todos los objetos la tienen)

const items = [
  { id: 1, name: "Camiseta Spider", price: 45, stock: 10, active: true, category: "camisetas", color: "rojo" },
  { id: 2, name: "Vestido Princesa", price: 80, stock: 5, active: true, category: "vestidos" },
  { id: 3, name: "Jeans Niño", price: 60, stock: 0, active: false, category: "pantalones", size: "L" },
  { id: 4, name: "Zapatos Deportivos", price: 90, stock: 8, active: true, category: "calzado", brand: "Nike" },
  { id: 5, name: "Sandalias", price: 35, stock: 15, active: true, category: "calzado" },
  { id: 6, name: "Chaqueta", price: 120, stock: 3, active: true, category: "chaquetas", color: "azul" }
];

// ============================================
// INSPECCIÓN CON Object.*
// ============================================

/**
 * Muestra las claves y valores de un objeto usando Object.entries()
 * @param {Object} item - El objeto a inspeccionar
 */
const inspectItem = (item) => {
  console.log(`\n📋 Detalle de: ${item.name}`);
  Object.entries(item).forEach(([key, value]) => {
    console.log(`${key.padEnd(12)}: ${value}`);
  });
};


const calculateStats = (numericKey) => {
  const values = items.map(item => item[numericKey] ?? 0);

  const total = values.reduce((a, b) => a + b, 0);
  const avg = total / values.length;
  const max = Math.max(...values);
  const min = Math.min(...values);

  console.log(`\n📊 Estadísticas de ${numericKey}:`);
  console.log(`Total: ${total}`);
  console.log(`Promedio: ${avg.toFixed(2)}`);
  console.log(`Máximo: ${max}`);
  console.log(`Mínimo: ${min}`);
};

// ============================================
// VERIFICACIÓN CON Object.hasOwn()
// ============================================

/**
 * Muestra el detalle de un elemento, incluyendo propiedades opcionales
 * si existen en ese objeto
 * @param {Object} item - El objeto a mostrar
 */
const showWithOptionals = (item) => {
  console.log(`\n→ ${item.name}`);
  console.log(`Precio: $${item.price}`);

  if (Object.hasOwn(item, "color")) {
    console.log(`Color: ${item.color}`);
  }
  if (Object.hasOwn(item, "size")) {
    console.log(`Talla: ${item.size}`);
  }
  if (Object.hasOwn(item, "brand")) {
    console.log(`Marca: ${item.brand}`);
  }
};


// ============================================
// ITERACIÓN CON for...in
// ============================================

/**
 * Imprime todas las propiedades de un objeto usando for...in
 * @param {Object} item - El objeto a recorrer
 */
const printAllProperties = (item) => {
  console.log(`\n🔍 Propiedades de "${item.name}":`);
  for (const key in item) {
    if (Object.hasOwn(item, key)) {
      console.log(`${key}: ${item[key]}`);
    }
  }
};

// ============================================
// SPREAD OPERATOR
// ============================================

/**
 * Aplica una actualización inmutable a un elemento
 * @param {Object} item - El objeto original
 * @param {Object} changes - Las propiedades a actualizar
 * @returns {Object} Nuevo objeto con los cambios aplicados
 */
const updateItem = (item, changes) => {
  return { ...item, ...changes };
};


// ============================================
// OPERACIONES CON EL ARRAY
// ============================================

/**
 * Filtra los elementos disponibles/activos
 * @returns {Object[]} Array de elementos disponibles
 */
const getAvailable = () => {
  return items.filter(item => item.active);
};


/**
 * Busca un elemento por su id
 * @param {number} id - El id a buscar
 * @returns {Object|undefined} El elemento encontrado o undefined
 */
const findById = (id) => {
  return items.find(item => item.id === id);
};

/**
 * Agrega una propiedad calculada a cada elemento
 * @returns {Object[]} Nuevo array con la propiedad adicional
 */
const addCalculatedProp = () => {
  return items.map(item => ({
    ...item,
    priceWithIVA: +(item.price * 1.19).toFixed(2)
  }));
};

/**
 * Ordena los elementos por valor numérico (sin mutar el original)
 * @param {boolean} ascending - true para ascendente, false para descendente
 * @returns {Object[]} Nuevo array ordenado
 */
const sortByNumericProp = (ascending = true) => {
  return [...items].sort((a, b) =>
    ascending ? a.price - b.price : b.price - a.price
  );
};


// ============================================
// REPORTE FINAL
// ============================================

/**
 * Imprime el reporte completo del catálogo
 */
const buildReport = () => {
  console.log("\n" + "=".repeat(50));
  console.log(`📦 CATÁLOGO: ${DOMAIN_NAME.toUpperCase()}`);
  console.log("=".repeat(50));

  console.log(`Total: ${items.length}`);
  console.log(`Activos: ${getAvailable().length}`);

  calculateStats("price");

  const sorted = sortByNumericProp();
  console.log("\n📋 Productos ordenados:");
  sorted.forEach(item => console.log(`- ${item.name} ($${item.price})`));

  const max = sorted[sorted.length - 1];
  const min = sorted[0];

  console.log(`\nMás caro: ${max.name} ($${max.price})`);
  console.log(`Más barato: ${min.name} ($${min.price})`);

  console.log("=".repeat(50));
};

// ============================================
// EJECUCIÓN PRINCIPAL
// ============================================

console.log(`\n🚀 Iniciando catálogo: ${DOMAIN_NAME}`);
console.log(`Total: ${items.length}`);

inspectItem(items[0]);
calculateStats("price");
items.forEach(showWithOptionals);
printAllProperties(items[0]);

const updated = updateItem(items[0], { price: 50 });
console.log("\nActualizado:", updated);

console.log("\nDisponibles:", getAvailable().length);

console.log("\nBuscar ID 2:", findById(2));
console.log("Buscar ID 99:", findById(99));

console.log("\nCon IVA:", addCalculatedProp());

console.log("\nOrdenados:", sortByNumericProp());

buildReport();
