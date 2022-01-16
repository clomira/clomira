import Link from "next/link";

function NavBar() {

  return (
    <div className="sticky top-0 z-50">
      <div className="bg-white shadow">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2">
            <div>
              <img src="/clomira_logo.jpg" alt="Clomira Logo" className="h-10 w-30" />
            </div>

            <div className="hidden sm:flex sm:items-center">
              <a href="/" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Home</a>
              <a href="/faq" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Doubts</a>
              <a href="/study_material" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Study Material</a>
              <a href="/" className="text-gray-800 text-sm font-semibold hover:text-purple-600">College Guide</a>
            </div>

            <div className="hidden sm:flex sm:items-center">
              <a href="/login" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">LogIn</a>
              <a href="/signup" className="text-gray-800 text-sm font-semibold border px-4 py-2 rounded-lg hover:text-purple-600 hover:border-purple-600">SignUp</a>
              <a href="/profile" className="text-gray-800 ml-2 text-sm font-semibold border px-4 py-2 rounded-lg hover:text-purple-600 hover:border-purple-600">Profile</a>
            </div>
          </div>

          <div className="block sm:hidden bg-white border-t-2 py-2">
            <div className="flex flex-col">
              <a href="/" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mb-1">Products</a>
              <a href="/faq" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mb-1">Marketplace</a>
              <a href="/study_material" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mb-1">Partners</a>
              <a href="/" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mb-1">Pricing</a>
              <div className="flex justify-between items-center border-t-2 pt-2">
                <a href="/login" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">LogIn</a>
                <a href="/signup" className="text-gray-800 text-sm font-semibold border px-4 py-1 rounded-lg hover:text-purple-600 hover:border-purple-600">SignUp</a>
                <a href="/profile" className="text-gray-800 ml-1 text-sm font-semibold border px-4 py-1 rounded-lg hover:text-purple-600 hover:border-purple-600">Profile</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar;