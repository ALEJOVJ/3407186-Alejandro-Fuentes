// ============================================
// PROYECTO SEMANA 07 — Librería de Funciones
// Dominio: [Tu dominio asignado]
// ============================================

// NOTA PARA EL APRENDIZ:
// Adapta este proyecto a tu dominio asignado.
// Todos los nombres genéricos (item, value, category, etc.)
// deben reemplazarse con nombres específicos de tu dominio.
//
// Ejemplos de adaptación:
// - Biblioteca: book, author, available, fine
// - Farmacia: medicine, price, stock, laboratory
// - Gimnasio: member, plan, active, bmi
// - Restaurante: dish, price, available, category
// - Banco: account, balance, interest, active
// - Hospital: patient, age, hasAppointment, doctor

"use strict"; // activa el modo estricto — mejores errores

// ============================================
// SECCIÓN 1: Constantes y datos del dominio
// ============================================

const DOMAIN_NAME = "Tienda de ropa infantil";
const VALUE_LABEL = "precio";
const CURRENCY = "$";
const TAX_RATE = 0.19;

const items = [
  { id: 1, name: "Camiseta Spider Niño", category: "camisetas", value: 45, active: true },
  { id: 2, name: "Vestido Princesa", category: "vestidos", value: 80, active: true },
  { id: 3, name: "Pantalón Jeans Niño", category: "pantalones", value: 60, active: false },
  { id: 4, name: "Zapatos Deportivos", category: "calzado", value: 90, active: true },
  { id: 5, name: "Sandalias Niña", category: "calzado", value: 35, active: true }
];

// ============================================
// SECCIÓN 2: Función de formato
// ============================================

const formatItem = (product) =>
  `👕 ${product.name} [${product.category}] — ${CURRENCY}${product.value}`;

// ============================================
// SECCIÓN 3: Función de cálculo (pura)
// ============================================

// Calcula precio con impuesto
const calculateValue = (price, taxRate = TAX_RATE) =>
  +(price * (1 + taxRate)).toFixed(2);

// ============================================
// SECCIÓN 4: Función de validación
// ============================================

const isValid = (product) => product.active === true;

// ============================================
// SECCIÓN 5: Función con parámetro por defecto
// ============================================

const formatWithDefault = (value, label = VALUE_LABEL, currency = CURRENCY) =>
  `${label}: ${currency}${value}`;

// ============================================
// SECCIÓN 6: Reporte
// ============================================

console.log(`\n${"═".repeat(45)}`);
console.log(`   REPORTE — ${DOMAIN_NAME}`);
console.log(`${"═".repeat(45)}`);

if (items.length === 0) {
  console.log("\n⚠️ No hay productos disponibles.");
} else {
  // --- Listado ---
  console.log("\n📋 Listado de productos:");
  let lineNumber = 1;

  for (const product of items) {
    console.log(`  ${lineNumber}. ${formatItem(product)}`);
    lineNumber++;
  }

  // --- Validación ---
  let validCount = 0;

  for (const product of items) {
    if (isValid(product)) {
      validCount++;
    }
  }

  console.log(`\n✅ Productos disponibles: ${validCount} / ${items.length}`);

  // --- Cálculo ---
  let totalValue = 0;

  for (const product of items) {
    totalValue += calculateValue(product.value ?? 0);
  }

  console.log(formatWithDefault(totalValue, `Total ${VALUE_LABEL} con IVA`));
}

console.log(`\n${"═".repeat(45)}\n`);
