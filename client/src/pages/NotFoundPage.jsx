import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { StateMessage } from "../components/common/stateMessage";

const NotFoundPage = () => {
  return (
    <StateMessage
      title="Page Not Found"
      message="The page you are looking for does not exist or may have moved."
    >
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-xs font-semibold bg-[#27221D] hover:bg-[#3E372F] text-white px-5 py-2.5 rounded-full transition-all"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to Home</span>
      </Link>
    </StateMessage>
  );
};

export default NotFoundPage;
