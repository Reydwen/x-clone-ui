"use client";
import Image from 'next/image';
import { IKImage } from "imagekitio-next";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

const Homepage = () => {
  return (
    <div className="homepage-feed">
      <div className="post">
        <Image src="/general/post.jpeg" alt="Post image" width={600} height={200} />
        <p className="post-description">This is a sample post description.</p>
      </div>
    </div>
  );
}

export default Homepage;