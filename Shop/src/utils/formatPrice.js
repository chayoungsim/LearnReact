export function formatPrice(value) {
  if (value === null || value === undefined || value === '') return '';
  const num = typeof value === 'number' ? value : Number(String(value).replace(/,/g, ''));
  if (Number.isNaN(num)) return String(value);
  // Use Korean locale for thousands separator (comma)
  return new Intl.NumberFormat('ko-KR').format(num);
}
