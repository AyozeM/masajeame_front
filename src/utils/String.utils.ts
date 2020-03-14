const accentMarks = [
  {
    original: 'á',
    expected: 'a'
  },
  {
    original: 'é',
    expected: 'e'
  },
  {
    original: 'í',
    expected: 'i'
  },
  {
    original: 'ó',
    expected: 'o'
  },
  {
    original: 'ú',
    expected: 'u'
  },
];

/**
 * Elimina las tildes de un texto dado (útil en las búsquedas y filtrados)
 * @param text texto original
 * @returns texto modificado
 */
export const removeAccentMarks = (text: string): string => accentMarks.reduce((prev: string, actual: any) => {
  return prev.replace(new RegExp(actual.original,'g'),actual.expected);
}, text)