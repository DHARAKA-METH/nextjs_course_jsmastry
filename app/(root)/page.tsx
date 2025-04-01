import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

export default async function Home() {
  const session = await auth();
  console.log(session);
  return (
    <>
      <h1 className="text-3xl font-black">Hellow Next Js mastry</h1>
      <h1 className="font-space-grotesk text-3xl font-black">
        Hellow Next Js mastry
      </h1>
      <form
        className="px-10 pt-[100px]"
        action={async () => {
          "use server";
          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <Button type="submit" className="">
          Log Out
        </Button>
      </form>
    </>
  );
}
