// ============================================
// PROYECTO SEMANA 02: Ficha de Datos del Dominio
// ============================================

const DOMAIN_NAME = "Mi Tienda de Ropa Infantil";

const itemName = "Conjunto para bebé";
const itemCategory = "Ropa para bebé";
const itemQuantity = 35;
const isItemAvailable = true;
const supplierValue = null;

// ============================================
// SECCIÓN 2: MOSTRAR FICHA DE DATOS
// ============================================

console.log("===========================");
console.log(`FICHA DE DATOS: ${DOMAIN_NAME}`);
console.log("===========================");
console.log("");

console.log(`Nombre:     ${itemName}`);
console.log(`Categoría:  ${itemCategory}`);
console.log(`Cantidad:   ${itemQuantity}`);
console.log(`Disponible: ${isItemAvailable}`);
console.log(`Proveedor:  ${supplierValue}`);
console.log("");

// ============================================
// SECCIÓN 3: VERIFICACIÓN DE TIPOS
// ============================================

console.log("--- Tipos de datos ---");

console.log("typeof itemName:        ", typeof itemName);
console.log("typeof itemQuantity:    ", typeof itemQuantity);
console.log("typeof isItemAvailable: ", typeof isItemAvailable);

console.log("");

// ============================================
// SECCIÓN 4: CONVERSIONES
// ============================================

console.log("--- Conversiones ---");

const quantityAsText = String(itemQuantity);

console.log("Cantidad como texto:", quantityAsText);
console.log("typeof (convertido):", typeof quantityAsText);

console.log("");

// ============================================
// SECCIÓN 5: VALOR NULL
// ============================================

console.log("--- Valor nulo ---");

console.log("Proveedor asignado:", supplierValue);
console.log("typeof null:", typeof supplierValue);
console.log("¿Es null?:", supplierValue === null);

console.log("");

// ============================================
// CIERRE
// ============================================

console.log("===========================");
console.log("FIN DE FICHA");
console.log("===========================");
