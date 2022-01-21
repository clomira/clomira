import Link from "next/link";
import Image from "next/image";
import useAuth from "../firebase/GlobalAuth/ContextProvider";

function NavBar() {
  const { error, user, logout } = useAuth();
  return (
    <div className="sticky top-0 z-50">
      <div className="bg-white shadow">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2">
            <Link href="/" passHref>
              <div>
                <Image
                  src="/clomira_logo.jpg"
                  alt="Clomira Logo"
                  className="h-10 w-30"
                  height="40px"
                  width="80px"
                />
              </div>
            </Link>
            <div className="hidden sm:flex sm:items-center">
              <Link href="/" passHref>
                <div className="text-gray-800 text-sm font-semibold hover:text-purple-600 cursor-pointer mr-4">
                  Home
                </div>
              </Link>
              <Link href="/doubt" passHref>
                <div className="text-gray-800 text-sm font-semibold hover:text-purple-600 cursor-pointer mr-4">
                  Doubts
                </div>
              </Link>
              <Link href="/study_material" passHref>
                <div className="text-gray-800 text-sm font-semibold hover:text-purple-600 cursor-pointer mr-4">
                  Study Material
                </div>
              </Link>
              <Link href="/college" passHref>
                <div className="text-gray-800 text-sm font-semibold hover:text-purple-600 cursor-pointer mr-4">
                  College Guide
                </div>
              </Link>
            </div>
            <div className="hidden sm:flex sm:items-center">
              <Link href="/" passHref>
                <div
                  className="text-gray-800 ml-2 text-sm font-semibold border px-4 py-2 rounded-lg hover:text-purple-600 cursor-pointer hover:border-purple-600"
                  onClick={logout}
                >
                  Sign Out
                </div>
              </Link>
              <Link href="/login" passHref>
                <div className="text-gray-800 ml-2 text-sm font-semibold border px-4 py-2 rounded-lg hover:text-purple-600 cursor-pointer hover:border-purple-600">
                  LogIn
                </div>
              </Link>
              <Link href="/signup" passHref>
                <div className="text-gray-800 ml-2 text-sm font-semibold border px-4 py-2 rounded-lg hover:text-purple-600 cursor-pointer hover:border-purple-600">
                  SignUp
                </div>
              </Link>

              <Link href="/profile" passHref>
                <div className="text-gray-800 ml-2 text-sm font-semibold border px-4 py-2 rounded-lg hover:text-purple-600 cursor-pointer hover:border-purple-600">
                  {" "}
                  Profile
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
