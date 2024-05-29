import Image from "next/image";
import React from "react";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
const Blog = () => {
  return (
    <section>
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <h1 className="text-3xl text-black font-extrabold">
          Unleash Your Wild Side: Explore Passion Playground
        </h1>
        <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
          <div className=" mt-5">
            <Image
              className="object-cover object-center w-full mb-8 lg:h-[55vh] md:h-36 rounded-xl"
              src={p1}
              alt="blog"
            />
            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
              Free Access: Your 30-Day Trial Awaits
            </h1>
            <p className="mx-auto text-base leading-relaxed text-gray-500">
              Are you ready to ignite a spark in your life? We understand the
              yearning for connection, for intimacy that transcends the
              superficial. Our adult dating platform fosters a space where you
              can explore your desires and discover compatible partners who
              share your passions.
            </p>{" "}
          </div>
          <div className="mt-5">
            <Image
              className="object-cover object-center w-full mb-8 lg:h-[55vh] md:h-36 rounded-xl"
              src={p2}
              alt="blog"
            />
            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
              Only Authentic and Approved Matches
            </h1>
            <p className="mx-auto text-base leading-relaxed text-gray-500">
              Tired of the dating game? We understand. Ditch the endless swiping
              and fake profiles. Our rigorous approval process ensures you meet
              authentic people ready to build something real. Let's create a
              space where meaningful encounters thrive.
            </p>{" "}
          </div>
          <div className="mt-5">
            <Image
              className="object-cover object-center w-full mb-8 lg:h-[55vh] md:h-36 rounded-xl"
              src={p3}
              alt="blog"
            />
            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
              5 Million+ Wealthy Single Partners
            </h1>
            <p className="mx-auto text-base leading-relaxed text-gray-500">
              Where Connection Takes Center Stage! Dive into a vibrant adult
              community of over 5 million and growing. With new members joining
              daily,this is the perfect place to spark exciting connections.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
