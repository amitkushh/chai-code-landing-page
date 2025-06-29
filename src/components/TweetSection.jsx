import React from "react";
import { TweetCard } from "@/components/magicui/tweet-card";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

function TweetSection() {
  const tweetIds = [
    "1905574126112153860",
    "1906390359841640771",
    "1906393735203836076",
  ];

  return (
    <div className="py-20 px-5 md:px-20 border-t-2 flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <span className="py-2 px-4 rounded-full border">Tweet</span>
        <h2 className="text-3xl text-center md:text-5xl font-extrabold bg-linear-90 from-orange-500 via-orange-400 to-white text-transparent bg-clip-text my-5">
          Tweet Love
        </h2>
        <p className="md:max-w-[600px] text-center mb-12 text-[16px] md:text-xl">
          Love that we get from our community
        </p>
      </div>

      {/* Tweet card */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto p-4">
          {tweetIds.map((id, index) => (
            <div className="w-full max-w-md" key={id}>
              <TweetCard
                id={id}
                className="shadow-lg"
                onError={(error) =>
                  console.error("Tweet loading error:", error)
                }
              />
            </div>
          ))}
        </div>
      </div>
      <div>
        <InteractiveHoverButton className="mt-5">
          Join Cohort Live Classes
        </InteractiveHoverButton>
      </div>
    </div>
  );
}

export default TweetSection;
