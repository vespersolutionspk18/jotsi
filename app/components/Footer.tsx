import React from "react";

const PreFooter = () => {
  return (
    <div className=" py-14 px-6 border-b-[1px] border-b-stone-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10  text-[#737373] ">
        <div>
          <h3 className=" font-bold text-lg text-black mb-4">Useful Links</h3>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg text-black mb-4 "> Careers</h3>
          <ul className="space-y-2">
            <li>Blog</li>
            <li>Press</li>
            <li>Partnerships</li>
            <li>Support</li>
            <li>Help Center</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg text-black mb-4">Resources</h3>
          <ul className="space-y-2">
          <li>Events</li>
          <li>Community</li>
          <li>Social Media</li>
          <li>NewsLetter</li>
          <li>Subscribe</li>
          </ul>
        </div>
        <div >
          <h3 className="font-bold text-lg  text-black mb-4">Subscribe</h3>
          <p className="mb-4 text-sm whitespace-nowrap md:whitespace-normal ">Join our community to receive updates</p>
          <div className="flex items-center gap-2 ">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent px-4 py-2 w-full outline-none placeholder:text-[#737373] text-sm"
            />
            <div className="bg-yellow-400 text-[#e6f0ff] w-fit px-4 py-2 rounded-full hover:bg-yellow-300 cursor-pointer whitespace-nowrap text-sm font-medium">
              {" "}
              Subscribe
            </div>
            </div>
          
          <p className="text-sm mt-2  text-gray-400">
            By subscribing, you agree to our
            <span className="underline cursor-pointer whitespace-nowrap">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PreFooter;
