export default function Register() {
  return (
    <div className="w-full h-screen bg-[url(/pics/cheers.jpg)] bg-cover">
      <main className="w-full h-full flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center w-fit h-fit bg-white/80 px-10 py-15 rounded-lg gap-7 shadow-md">
          <div className="flex flex-col gap-2 items-center">
            <h1 className="font-serif p-0 m-0 text-3xl font-bold">
              Create an Account
            </h1>
            <p className="text-sm">
              Ready to book some fun? Log in and let’s go!
            </p>
          </div>

          <div className="flex flex-col gap-4 w-[80%]">
            <div className="flex flex-col gap-2 w-full">
              <input
                type="text"
                className="w-full text-black text-sm px-3 py-1.5 placeholder:black border border-1 border-black 
            rounded-sm focus:outline focus:outline-gray-500"
                placeholder="Name"
              />
              <input
                type="text"
                className="w-full text-black text-sm px-3 py-1.5 placeholder:black border border-1 border-black 
            rounded-sm focus:outline focus:outline-gray-500"
                placeholder="Email"
              />
              <div className="flex flex-row w-full gap-2">
                <input
                  type="text"
                  className="w-[70%] text-black text-sm px-3 py-1.5 placeholder:black border border-1 border-black 
            rounded-sm focus:outline focus:outline-gray-500"
                  placeholder="Tel"
                />
                <select className="text-black text-sm px-3 py-1.5 placeholder:black border border-1 border-black 
            rounded-sm focus:outline focus:outline-gray-500" name="role" id="role">
                  <option className="rounded-md" value="User">User</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>

              <input
                type="text"
                className="w-full text-black text-sm px-3 py-1.5 placeholder:black border border-1 border-black 
            rounded-sm focus:outline focus:outline-gray-500"
                placeholder="Password"
              />
              <input
                type="text"
                className="w-full text-black text-sm px-3 py-1.5 placeholder:black border border-1 border-black 
            rounded-sm focus:outline focus:outline-gray-500"
                placeholder="Confirm Password"
              />
            </div>

            <button
              className="w-full bg-black text-white font-medium px-3 py-1.5 rounded-md border border-1
            hover:bg-white hover:text-black hover:border hover:border-1 hover:border-black transition duration-200"
            >
              Sign in
            </button>
          </div>

          <div className="flex flex-row gap-2">
            <p className="text-sm">Already have an account?</p>
            <a className="text-sm font-semibold hover:underline active:font-bold cursor-pointer"
            href="/login">
              Login
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
