// Allows markdown imports
declare module '*.md' {
    const value: string; // markdown is just a string
    export default value;
}

// Allows txt imports
declare module '*.txt' {
    const value: string; // txt is just a string
    export default value;
}