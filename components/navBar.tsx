export default function NavBar() {
    return (
      <>
        <div className=" flex-row justify-between px-10 py-5 relative w-full">
          {/* Logo container made sticky */}
          <div className=" fixed top-10 left-10  w-[50%]">
            <h1
              className="font-semibold text-4xl"
              style={{ fontFamily: "var(--font-allura)" }}
            >
              A.D
            </h1>
          </div>
  
          <div className="flex flex-row justify-end pt-5">
            <ul className="flex flex-row gap-8">
              <li className="relative inline-block pb-1 border-b-2 border-transparent hover:border-black transition duration-200 cursor-pointer">
                projects
              </li>
              <li className="relative inline-block pb-1 border-b-2 border-transparent hover:border-black transition duration-200 cursor-pointer">
                contacts
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
  