function NavBar() {
  return (
    <div className="bg-slate-50 grid grid-cols-2">
      <div className="pl-32 p-3">
        <img src="/clomira_logo.jpg" alt="Clomira Logo" className="h-20 w-44" />
      </div>
      <div className="flex flex-row justify-center items-center">
        <div className="mr-20">Home</div>
        <div>Login</div>
      </div>
    </div>
  );
}

export default NavBar;
