import { kyivDistricts } from "@/lib/data/kyiv-districts";
import { generateLocationMeta } from "@/lib/generateMeta";

type Props = {
  params: Promise<{ district: string }>;
};

export async function generateStaticParams() {
  return kyivDistricts.map((d) => ({ district: d.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { district: slug } = await params;
  const district = kyivDistricts.find((d) => d.slug === slug);
  if (!district) return {};
  return generateLocationMeta(district.name, district.nameGen);
}

export default async function DistrictPage({ params }: Props) {
  const { district: slug } = await params;
  const district = kyivDistricts.find((d) => d.slug === slug);
  if (!district) return <div>Район не знайдено</div>;

  return (
    <main>
      <h1>Евакуатор {district.name} район — виклик 24/7</h1>
    </main>
  );
}