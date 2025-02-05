import { notFound } from "next/navigation";
import { CATALOGUE } from '@/constants/villa';
import CatalogueClient from "./CatalogueClient";

// Ensure generateStaticParams returns a promise
export async function generateStaticParams() {
  return Promise.resolve(
    CATALOGUE.map((item) => ({
      slug: item.slug,
    }))
  );
}

const CatalogueDetail = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const catalogue = CATALOGUE.find((item) => item.slug === slug);

  if (!catalogue) {
    return notFound();
  }

  return <CatalogueClient catalogue={catalogue} />;
};

export default CatalogueDetail;
