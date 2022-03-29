import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export function formatDate(date: string, withTime = false): string {
  return format(parseISO(date), withTime ? "d MMM y, 'às' HH:mm" : 'd MMM y', {
    locale: ptBR,
  });
}
