export default async function CoachPage({
  params,
}: {
  params: Promise<{ subdomain: string }>;
}) {
  const { subdomain } = await params;
  return <div>Coach {subdomain}</div>;
}
