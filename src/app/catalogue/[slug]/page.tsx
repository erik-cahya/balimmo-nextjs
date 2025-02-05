import { notFound } from "next/navigation";
import { CATALOGUE } from '@/constants/villa';
import CatalogueClient from "./CatalogueClient";

export function generateStaticParams() {
  return CATALOGUE.map((item) => ({
      slug: item.slug,
  }));
}

const CatalogueDetail = async ({ params }: { params: { slug: string } }) => {
    const { slug } = params;

    const catalogue = CATALOGUE.find((item) => item.slug === slug);

    if (!catalogue) {
        return notFound();
    }

    return <CatalogueClient catalogue={catalogue} />;
};

export default CatalogueDetail;
