export const toPascalCase = (input: string): string => {
    return input
        .replace(/[_\- ]+/g, ' ')
        .trim()
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join('');
};
