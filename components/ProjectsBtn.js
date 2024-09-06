import { sendGAEvent } from "@next/third-parties/google";
import Image from "next/image";
import Link from "next/link";
const ProjectsBtn = () => {
  return (
    <div className="relative inline-flex  group">
      <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
      <Link
        href={"/work"}
        onClick={() => sendGAEvent("event", "buttonClicked", { value: "xyz" })}
        className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-full focus:none focus:ring-gray-900"
      >
        My Projects
      </Link>
    </div>
  );
};

export default ProjectsBtn;
