import clsx from 'clsx';

export function cn(...classes: (string | undefined | null | boolean)[]) {
  return clsx(classes);
}