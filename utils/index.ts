import { twMerge } from "tailwind-merge"
import { clsx } from "clsx"
import type { ClassValue } from "clsx"

interface CnFunction {
    (...inputs: ClassValue[]): string;
}

export const cn: CnFunction = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
  