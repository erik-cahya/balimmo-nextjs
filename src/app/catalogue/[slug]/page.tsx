import { notFound } from "next/navigation";
import { CATALOGUE } from '@/constants/villa';
import CatalogueClient from "./CatalogueClient";

// Pastikan generateStaticParams mengembalikan array objek slug
export async function generateStaticParams() {
  return CATALOGUE.map((item) => ({
    slug: item.slug,
  }));
}

// Tipe Params yang diharapkan oleh Next.js
type Params = {
  slug: string;
};

export default function CatalogueDetail({ params }: { params: Params }) {
  const { slug } = params;

  const catalogue = CATALOGUE.find((item) => item.slug === slug);

  if (!catalogue) {
    return notFound();
  }

  return <CatalogueClient catalogue={catalogue} />;
};
