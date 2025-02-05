import { notFound } from "next/navigation";
import { CATALOGUE } from '@/constants/villa';
import CatalogueClient from "./CatalogueClient";

// Fungsi untuk menghasilkan params secara statis
export async function generateStaticParams() {
  return CATALOGUE.map((item) => ({
    slug: item.slug,
  }));
}

export default function CatalogueDetail({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const catalogue = CATALOGUE.find((item) => item.slug === slug);

  if (!catalogue) {
    return notFound();
  }

  return <CatalogueClient catalogue={catalogue} />;
};
