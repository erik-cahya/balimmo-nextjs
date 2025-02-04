import { use } from "react";

export function generateStaticParams() {
  return [
    { slug: "book" },
    { slug: "laptop" },
    { slug: "phone" },
  ];
}

const CatalogueDetail = ({ params }: { params: Promise<{ slug: string }>}) => {
    const {variable} = use(params);
    return <h1>Halaman untuk {variable}</h1>;
};

export default CatalogueDetail;
