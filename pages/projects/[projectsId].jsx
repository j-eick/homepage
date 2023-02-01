import { useRouter } from "next/router";

export default function ProjectList() {
  const router = useRouter();

  console.log(router.query.projectsId);

  return (
    <>
      <p>This is another projects page</p>
    </>
  );
}
