"use client";

export default function Navbar() {
  return (
    <div>
      {" "}
      <nav className="flex justify-between items-center p-4 bg-background text-white relative">
        <div className="text-xl lg:text-2xl font-bold flex flex-col items-center">
          <span className="text-primary">Affordable</span>{" "}
          <span className="">Wrecker Service, LLC</span>
        </div>
        <div className="flex flex-col gap-3 text-sm items-center">
          <h3>Call Us Today!</h3>
          <a
            className="font-bold border-2 border-gray-300 rounded-full p-2"
            href="tel:+14796751865"
          >
            479-675-1865
          </a>
        </div>
      </nav>
    </div>
  );
}
