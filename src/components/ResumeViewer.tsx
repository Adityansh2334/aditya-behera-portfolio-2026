import { motion } from "framer-motion";
import { useEffect } from "react";
import { useUI } from "../context/UIContext";

export default function ResumeViewer({ onClose }: { onClose: () => void }) {
    const fileId = "14llYbN33-3fJakhkL88vJ2yaFnx8BNCl";
    const { setModalOpen } = useUI();

    useEffect(() => {
        setModalOpen(true);
        document.body.style.overflow = "hidden";

        return () => {
            setModalOpen(false);
            document.body.style.overflow = "auto";
        };
    }, [setModalOpen]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center
                 bg-black/60 backdrop-blur"
        >
            <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                className="relative bg-card/90 backdrop-blur
                   border border-borderc rounded-2xl
                   w-[90vw] h-[85vh] max-w-5xl overflow-hidden"
            >
                {/* Header */}
                <div className="flex justify-between items-center px-4 py-3
                        border-b border-borderc">
                    <h3 className="font-semibold">Resume – Aditya Kumar Behera</h3>

                    <div className="flex gap-3">
                        {/* Download */}
                        <a
                            href={`https://drive.google.com/uc?export=download&id=${fileId}`}
                            className="cursor-hover px-3 py-1 rounded-md
                         border border-borderc
                         hover:border-cyan-400 transition"
                        >
                            Download
                        </a>

                        {/* Close */}
                        <button
                            onClick={onClose}
                            className="cursor-hover text-muted hover:text-cyan-400"
                        >
                            ✕
                        </button>
                    </div>
                </div>

                {/* PDF Viewer */}
                <iframe
                    title="Resume PDF"
                    src={`https://drive.google.com/file/d/${fileId}/preview`}
                    className="w-full h-full"
                    allow="autoplay"
                />
            </motion.div>
        </motion.div>
    );
}
