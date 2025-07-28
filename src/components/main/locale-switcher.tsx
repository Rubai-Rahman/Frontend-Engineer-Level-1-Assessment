'use client';

import { useTransition } from 'react';
import { useLocale } from 'next-intl';
import { Locale } from '@/i18n/config';
import { setUserLocale } from '@/lib/services/locale';
import { Button } from '@/components/ui/button'; // shadcn button

type Props = {
  defaultValue?: Locale;
  items: Array<{ value: Locale; label: string }>;
};

export default function LocaleSwitcherToggle({ items }: Props) {
  const [isPending, startTransition] = useTransition();
  const currentLocale = useLocale() as Locale;

  const nextLocale = currentLocale === items[0].value ? items[1] : items[0];

  const handleToggle = () => {
    startTransition(() => {
      setUserLocale(nextLocale.value);
    });
  };

  return (
    <Button
      onClick={handleToggle}
      variant="outline"
      size="sm"
      disabled={isPending}
      className="w-1/2 md:w-auto justify-start"
    >
      {isPending ? 'Switching...' : nextLocale.label}
    </Button>
  );
}
