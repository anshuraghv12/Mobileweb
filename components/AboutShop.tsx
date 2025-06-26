"use client";
import { useRef, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutShop() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Set up autoplay when component mounts
  useEffect(() => {
    if (videoRef.current) {
      // Set video to autoplay, mute, and loop
      videoRef.current.autoplay = true;
      videoRef.current.muted = true; // Must be muted for autoplay to work in most browsers
      videoRef.current.loop = true;
      videoRef.current.playsInline = true; // For better mobile experience
      
      // Attempt to play the video
      const playPromise = videoRef.current.play();
      
      // Handle potential play() rejection (common in some browsers)
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Autoplay prevented:", error);
        });
      }
    }
  }, []);

  const handleLearnMoreClick = () => {
    // Navigate to next page
    window.location.href = "/repair-services";
    // Alternative using router if you're using Next.js
    // router.push('/repair-services');
  };

  return (
    <div className="w-full bg-gray-100 py-12 px-4 md:px-0">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left side video - now with autoplay */}
        <div className="md:w-1/2 rounded-lg overflow-hidden shadow-xl">
          <div className="relative aspect-video">
            <video 
              ref={videoRef}
              className="w-full h-full object-cover"
              muted  // Required for autoplay
              loop   // Will loop the video like a GIF
              playsInline // Better mobile support
              // No onClick handler needed since we're autoplaying
            >
              {/* Update the source to your actual video file */}
              <source src="/assets/video/Videoshop (1).mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Captions */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
              <div className="text-white">
                <p className="text-lg font-medium">Broken for months.</p>
                <p className="text-xl font-bold text-red-500">Fixed in Minutes</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right side content */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-gray-600 text-xl font-medium">Professional Repair Technicians</h2>
          <h1 className="text-red-600 text-3xl font-bold">Your Device In Safe Hands</h1>
          
          <p className="text-gray-800">
            Here at Mobile-Yard we repair hundreds of devices a month, so rest assured you're in safe hands sending 
            your devices to us for repair.
          </p>
          
          <p className="text-gray-800">
            Mobile-yard are capable of repairing any electronic device on the market now and those manufactured in 
            the last 10 years. We have all the right tools for the job so we can open up your device, repair it and 
            assemble it all back together without ever knowing it had been touched.
          </p>
          
          <div className="pt-4">
            <Button 
              onClick={handleLearnMoreClick}
              className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-full flex items-center gap-2 transition-all duration-300"
            >
              Learn More
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}