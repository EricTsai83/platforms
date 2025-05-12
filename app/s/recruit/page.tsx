export default async function RecruitPage({
  params,
}: {
  params: Promise<{ subdomain: string }>;
}) {
  const { subdomain } = await params;
  return <div>Recruit {subdomain}</div>;
}
