import { ReactNode } from 'react';

interface POIInfoProps {
  children: ReactNode;
  id: string;
  setFocus: any;
}

export default function POIInfo({ children, id, setFocus }: POIInfoProps) {
  return (
    <section className="flex flex-col gap-4 cursor-pointer ml-[50%] p-10 text-left hover:bg-indigo-100 transition-colors" id={id} onClick={() => setFocus(id)}>
      {children}
    </section>
  );
}
