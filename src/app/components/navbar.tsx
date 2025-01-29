"use client";

import Image from "next/image";

import { useState } from "react";
import { XMarkIcon, Square2StackIcon } from "@heroicons/react/24/outline";
import { Dialog, DialogPanel } from "@headlessui/react";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      {" "}
      <nav className="flex justify-between items-center p-4 bg-background text-white relative">
        <div className="text-xl lg:text-2xl font-bold flex flex-col items-center order-1">
          <span className="text-primary">Affordable</span>{" "}
          <span className="">Wrecker Service, LLC</span>
        </div>
        <div className="flex lg:hidden order-4 fixed bottom-5 right-2 bg-background rounded-lg p-2 z-10">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Square2StackIcon aria-hidden="true" className="size-6 " />
          </button>
        </div>
        <div className="hidden text-foreground lg:flex flex-col items-end gap-1 order-2">
          <div className="flex gap-3">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm/6 font-semibold"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 text-sm items-center order-3">
          <h3>Call Us Today!</h3>
          <a
            className="font-bold border-2 border-gray-300 rounded-full p-2"
            href="tel:+14796751865"
          >
            479-675-1865
          </a>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                alt="Logo"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
                height={25}
                width={25}
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  );
}
