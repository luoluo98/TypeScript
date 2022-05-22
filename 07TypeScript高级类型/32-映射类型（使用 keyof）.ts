type Props = { a: number; b: string; c: boolean }

type Type3 = { [key in keyof Props]: number }
