import { useRouter } from "next/router";

function ClientsProjectPage() {
  const router = useRouter();
  console.log(router.query);

  function loadProjectHandler() {
    //load data
    //router.push("/clients/max/projectA");
    router.push({
      pathname: "/clients/[id]/[clientprojectod]",
      query: {
        id: "zxc",
        clientprojectid: "projectA",
      },
    });
  }
  return (
    <div>
      <h1>The projects of a given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}
export default ClientsProjectPage;
