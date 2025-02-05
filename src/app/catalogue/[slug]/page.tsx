import { notFound } from "next/navigation";
import { CATALOGUE } from '@/constants/villa';
import CatalogueClient from "./CatalogueClient";

// Pastikan generateStaticParams mengembalikan array objek slug
export async function generateStaticParams() {
  return CATALOGUE.map((item) => ({
    slug: item.slug,
  }));
}

// type Params = {
//   slug: string;
// };

type tParams = Promise<{ slug: string[] }>;


export default async function CatalogueDetail(props: { params: tParams }) {
  const { slug } = await props.params;

  const catalogue = CATALOGUE.find((item) => item.slug = slug);

  if (!catalogue) {
    return notFound();
  }

  return <CatalogueClient catalogue={catalogue} />;
};

// export default CatalogueDetail;
