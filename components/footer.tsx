import Link from "next/link";
export default function Footer() {
  return (
    <div className=" h-[30%] flex flex-row justify-end justify-center p-50">
      <div className="w-[60%] flex flex-row justify-center">

      <div className=" flex flex-col gap-5">
        <h1 className="text-5xl font-medium">Dilmi <br />abderrahmane</h1>
        <div className="text-lg  flex flex-row gap-6">
        <Link href={""}>Linked In</Link>
          <Link href={""}>Twitter</Link>
          <Link href={""}>Facebook</Link>
        </div>
      </div>
      </div>
    </div>
  );
}
