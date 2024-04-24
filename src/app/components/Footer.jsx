import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
      <Link href="/">
          <div className="profile-container d-flex align-items-center">
            <Image
              src="/images/profile.png" // Replace with your profile image path
              alt="Profile Image"
              className="profile-image rounded-full"
              width={40}
              height={40}
            />
          </div>
        </Link>
        <p className="text-slate-200">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;