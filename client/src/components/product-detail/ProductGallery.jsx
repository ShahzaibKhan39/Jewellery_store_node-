import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X } from "lucide-react";

export const ProductGallery = ({ imageUrl, name }) => {
  const [imageFailed, setImageFailed] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    if (!lightboxOpen) return undefined;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setLightboxOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxOpen]);

  const showImage = imageUrl && !imageFailed;

  return (
    <div className="space-y-4">
      <div className="relative aspect-square bg-white rounded-3xl border border-[#EDE7DD] overflow-hidden flex items-center justify-center p-6 group">
        {showImage ? (
          <>
            <img
              src={imageUrl}
              alt={name}
              onError={() => setImageFailed(true)}
              className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-102"
            />
            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              className="absolute bottom-4 right-4 bg-white/90 p-3 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity text-[#27221D] hover:bg-white"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </>
        ) : (
          <span className="text-sm text-[#A3998E]">Image unavailable</span>
        )}
      </div>

      <AnimatePresence>
        {lightboxOpen && showImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#27221D]/95 p-4 sm:p-6 flex items-center justify-center"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
            <img src={imageUrl} alt={name} className="max-h-full max-w-full object-contain rounded-xl" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
