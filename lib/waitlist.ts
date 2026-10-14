/** Remove tudo que não é dígito. */
export function normalizeWhatsapp(value: string): string {
  return value.replace(/\D/g, "").slice(0, 11);
}

/**
 * Valida celular brasileiro: DDD (2 dígitos) + 9 + 8 dígitos.
 * Ex.: 67 9 9999-9999 → "67999999999".
 */
export function isValidWhatsapp(digits: string): boolean {
  if (!/^[1-9]\d9\d{8}$/.test(digits)) return false;
  // Rejeita sequências repetidas como 00000000000, 11111111111...
  if (/^(\d)\1{10}$/.test(digits)) return false;
  return true;
}

/** (00) 00000-0000 progressiva para digitação. */
export function maskWhatsapp(digits: string): string {
  const d = digits.slice(0, 11);
  if (d.length === 0) return "";
  if (d.length <= 2) return `(${d}`;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7, 11)}`;
}
