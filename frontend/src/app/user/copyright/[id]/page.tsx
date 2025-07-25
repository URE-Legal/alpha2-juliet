import IPDetails from "@/components/IPDetails";
import Searchbar from "@/components/Searchbar";

export default async function CopyrightPage({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;

  return (
    <div className='ml-[5vw]'>
      <Searchbar ip='Copyright' />
      <IPDetails id={id} />
    </div>
  );
}
