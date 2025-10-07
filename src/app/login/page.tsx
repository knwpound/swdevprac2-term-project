export default function Login() {
  return (
    <div className="w-full h-screen bg-[url(/pics/cheers.jpg)] bg-cover">
      <main className="w-full h-full flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center w-fit h-fit bg-white/80 px-10 py-15 rounded-lg gap-7 shadow-md">
          <div className="flex flex-col gap-2 items-center">
            <h1 className="font-serif p-0 m-0 text-3xl font-bold">
              Sign in with Email
            </h1>
            <p className="text-sm">
              Welcome! Let’s make new memories together.
            </p>
          </div>

          <div className="flex flex-col gap-4 w-[80%]">
            <div className="flex flex-col gap-2 w-full">
              <input
              type="text"
              className="w-full text-black text-sm px-3 py-1.5 placeholder:black border border-1 border-black 
            rounded-sm focus:outline focus:outline-gray-500"
              placeholder="Enter your Email"
            />
            <input
              type="text"
              className="w-full text-black text-sm px-3 py-1.5 placeholder:black border border-1 border-black 
            rounded-sm focus:outline focus:outline-gray-500"
              placeholder="Enter your Password"
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
            <p className="text-sm">Don't have an account?</p>
            <a className="text-sm font-semibold hover:underline active:font-bold cursor-pointer transition duration-150"
            href="/register">
              Register
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
