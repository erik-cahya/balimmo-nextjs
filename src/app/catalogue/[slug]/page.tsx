export function generateStaticParams() {
  return [
    { slug: "book" },
    { slug: "laptop" },
    { slug: "phone" },
  ];
}

const CatalogueDetail = ({ params }: { params: { slug: string } }) => {
  return <h1>Halaman untuk {params.slug}</h1>;
};

export default CatalogueDetail;
