// ============================================
// PROYECTO INTEGRADOR — ETAPA 0
// Semana 10 — JavaScript ES2023 Bootcamp
// ============================================
//
// INSTRUCCIONES:
// 1. Reemplaza DOMAIN_NAME y los datos de ejemplo con tu dominio asignado
// 2. Implementa cada TODO siguiendo las instrucciones de los comentarios
// 3. Ejecuta con: node 3-proyecto/starter/app.js
// 4. Valida el checklist del README antes de entregar
//
// DOMINIO ASIGNADO: [completar con tu dominio]
// ============================================

// ============================================
// SECCIÓN 1: Configuración y Constantes (Semanas 01–02)
// ============================================

// TODO: Renombrar con el nombre de tu dominio (en inglés, UPPER_SNAKE_CASE)
const DOMAIN_NAME = "Inventario de Tienda infantil";
const VALUE_LABEL = "productos";
const MAX_ITEMS = 1_000;

// ============================================
// SECCIÓN 2: Datos — Array Principal (Semanas 01–02)
// ============================================

// TODO: Definir el array con MÍNIMO 6 objetos
// Requisitos:
// - Mínimo 5 propiedades por objeto (tipos mixtos)
// - Al menos 1 propiedad numérica (para calcular estadísticas)
// - Al menos 1 propiedad booleana (para filtrar activos/inactivos)
// - Al menos 1 propiedad OPCIONAL (no todos los objetos la tienen)
//
// Nota para el aprendiz — Adaptaciones por dominio:
// - Biblioteca:    { id, title, author, year, pages, available, notes? }
// - Farmacia:      { id, name, price, stock, laboratory, active, prescription? }
// - Gimnasio:      { id, name, memberType, fee, joinDate, active, plan? }
// - Restaurante:   { id, name, category, price, calories, available, allergens? }
// - Banco:         { id, owner, type, balance, rate, active, creditLimit? }

const items = [
  { id: 1, name: "Camiseta", value: 50, active: true, category: "ropa" },
  { id: 2, name: "Pantalón", value: 80, active: true, category: "ropa", notes: "En descuento" },
  { id: 3, name: "Zapatos", value: 120, active: false, category: "calzado" },
  { id: 4, name: "Gorra", value: 30, active: true, category: "accesorios" },
  { id: 5, name: "Chaqueta", value: 150, active: false, category: "ropa", notes: "Nueva colección" },
  { id: 6, name: "Medias", value: 10, active: true, category: "ropa" }
];

// ============================================
// SECCIÓN 3: Funciones CRUD (Semanas 07–08)
// ============================================

/**
 * Agrega un nuevo elemento al array principal
 * @param {Object} item - El elemento a agregar
 */
const addItem = (item) => {
  if (items.length >= MAX_ITEMS) {
    console.log("❌ No se pueden agregar más elementos");
    return;
  }
  items.push(item);
  console.log(`✅ Agregado: ${item.name}`);
};

/**
 * Busca un elemento por su id
 * @param {number} id - El id a buscar
 * @returns {Object|undefined} - El elemento encontrado o undefined
 */
const findById = (id) => {
  return items.find(item => item.id === id);
};

/**
 * Retorna todos los elementos activos
 * @returns {Object[]}
 */
const getActive = () => {
  return items.filter(item => item.active);
};

/**
 * Filtra elementos por el valor de un campo
 * @param {string} field - El nombre de la propiedad
 * @param {*} value - El valor a buscar
 * @returns {Object[]}
 */
const filterByField = (field, value) => {
  return items.filter(item => item[field] === value);
};

// ============================================
// SECCIÓN 4: Funciones de Análisis (Semanas 08–09)
// ============================================

/**
 * Actualiza un elemento de forma inmutable usando spread
 * @param {number} id - Id del elemento a actualizar
 * @param {Object} changes - Objeto con los cambios a aplicar
 * @returns {Object[]} - Nuevo array con el elemento actualizado
 */
const updateItem = (id, changes) => {
  return items.map(item =>
    item.id === id
      ? { ...item, ...changes }
      : item
  );
};

/**
 * Calcula estadísticas de un campo numérico
 * @param {string} field - El nombre de la propiedad numérica
 * @returns {{ min: number, max: number, avg: number, total: number }}
 */
const calculateStats = (field) => {
  const values = items.map(i => i[field]);

  const total = values.reduce((acc, val) => acc + val, 0);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const avg = total / values.length;

  return { min, max, avg, total };
};

// ============================================
// SECCIÓN 5: Funciones de Display (Semanas 04–07)
// ============================================

/**
 * Formatea un elemento para mostrar en consola (una línea)
 * @param {Object} item - El elemento a formatear
 * @returns {string}
 */
const formatItem = (item) => {
  return `${item.name.padEnd(12)} | $${item.value.toString().padEnd(5)} | ${item.active ? "✔" : "❌"} | ${item.category.padEnd(10)} | ${item.notes ?? "Sin nota"}`;
};

/**
 * Genera el reporte completo del dominio
 * Usa: Object.entries, forEach, filter, map, calculateStats
 */
const buildReport = () => {
  console.log("\n" + "=".repeat(40));
  console.log(`📦 REPORTE: ${DOMAIN_NAME}`);
  console.log("=".repeat(40));

  // Listado
  items.forEach(item => console.log(formatItem(item)));

  // Activos
  const active = getActive();
  console.log(`\n✔ Activos: ${active.length}`);
  console.log(`❌ Inactivos: ${items.length - active.length}`);

  // Estadísticas
  const stats = calculateStats("value");
  console.log(`\n📊 Estadísticas:`);
  console.log(`Min: ${stats.min}`);
  console.log(`Max: ${stats.max}`);
  console.log(`Promedio: ${stats.avg.toFixed(2)}`);
  console.log(`Total: ${stats.total}`);

  // Object.entries
  console.log("\n🔍 Propiedades del primer elemento:");
  Object.entries(items[0]).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });

  console.log("\nTotal de elementos:", items.length);
  console.log("=".repeat(40));
};

// ============================================
// SECCIÓN 6: Ejecución Principal
// ============================================
//
// TODO: Descomentar a medida que implementes cada función
//

console.log("=".repeat(40));
console.log(`  ${DOMAIN_NAME.toUpperCase()}`);
console.log("=".repeat(40));
console.log(`Total de ${VALUE_LABEL}: ${items.length} / ${MAX_ITEMS}\n`);


// Paso 1: Buscar por id
const found = findById(1);
console.log("Encontrado id=1:", found?.name ?? "no encontrado\n");

// Paso 2: Listar activos
const active = getActive();
console.log(`Activos: ${active.length}`);
active.forEach(item => console.log(" ", formatItem(item)));
console.log("");

// Paso 3: Filtrar por campo
const filtered = filterByField("category", "ropa");
console.log(`Filtro category=ropa: ${filtered.length} resultados\n`);


// Paso 4: Actualizar con spread
const updated = updateItem(1, { value: 999 });
console.log(`Actualizado id=1: value=${updated.find(i => i.id === 1)?.value}\n`);

// Paso 5: Estadísticas
const stats = calculateStats("value");
console.log(`Estadísticas (value): min=${stats.min} max=${stats.max} avg=${stats.avg.toFixed(2)}\n`);

// Paso 6: Reporte completo
buildReport();

// TODO: Agregar un nuevo elemento usando addItem
addItem({ id: 7, name: "Bufanda", value: 40, active: true, category: "accesorios" });