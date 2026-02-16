"use client";

import { useUser } from "@clerk/nextjs";
import {
  ChevronRight,
  Trash2,
  Eye,
  VideoIcon,
  FolderOpen,
  Copy,
  Check,
  MoveUpRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const videos = [
  {
    id: "vid123",
    title: "React Basics",
    description: "This is a testing description!",
    playlist: "Frontend Development",
    views: 1245,
    thumbnail:
      "https://ik.imagekit.io/sjbr5usgh/Banners/WhatsApp%20Image%202025-04-08%20at%203.51.12%20PM.jpeg?updatedAt=1744410635917",
  },
  {
    id: "vid124",
    title: "Node.js Crash Course",
    description: "This is a testing description!",
    playlist: "Backend Tips",
    views: 980,
    thumbnail:
      "https://ik.imagekit.io/sjbr5usgh/Banners/WhatsApp%20Image%202025-04-08%20at%203.51.12%20PM.jpeg?updatedAt=1744410635917",
  },
  {
    id: "vid125",
    title: "Intro to AI Agents",
    description:
      "This is a testing description! This is a testing description!",
    playlist: "AI & Machine Learning",
    views: 2210,
    thumbnail:
      "https://ik.imagekit.io/sjbr5usgh/Banners/WhatsApp%20Image%202025-04-08%20at%203.51.12%20PM.jpeg?updatedAt=1744410635917",
  },
];

const Page = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const { isLoaded } = useUser();

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

  const openDeleteModal = (id: string) => {
    setSelectedVideoId(id);
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
    setSelectedVideoId(null);
  };

  const handleConfirmDelete = () => {
    console.log("Delete video:", selectedVideoId);
    closeDeleteModal();
  };

  const handleCopy = (id: string) => {
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  return (
    <>
      {!isLoaded ? (
        <div></div>
      ) : (
        <div className="text-black dark:text-white">
          {/* Breadcrumb */}
          <nav className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
            <Link href="/" className="hover:underline">
              Dashboard
            </Link>
            <ChevronRight size={16} className="mx-2" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              My Videos
            </span>
          </nav>

          {/* Title & Subtitle */}
          <div className="space-y-1 mb-8">
            <h1 className="text-2xl font-semibold">My Videos</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-100">
              View and manage your published videos
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left">
              <thead>
                <tr className="text-xs uppercase text-gray-400 border-b dark:border-[#2a2a2a]">
                  <th className="px-4 py-3">Video</th>
                  <th className="px-4 py-3">Video ID</th>
                  <th className="px-4 py-3">Playlist</th>
                  <th className="px-4 py-3">Views</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {videos.map((video) => (
                  <tr
                    key={video.id}
                    className="border-b border-slate-200 dark:border-[#1f1f1f] hover:bg-gray-50 dark:hover:bg-[#1a1b1f]"
                  >
                    {/* Thumbnail + Title */}
                    <td className="px-4 py-4 flex items-center gap-3">
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        width={48}
                        height={32}
                        className="w-12 h-8 rounded-sm object-cover border border-gray-300 dark:border-gray-700"
                      />
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2 font-medium text-gray-800 dark:text-white">
                          <VideoIcon size={14} />
                          {video.title}
                        </div>
                        <p
                          className="text-xs line-clamp-1 text-gray-500 dark:text-gray-400 max-w-40"
                          title={video?.description}
                        >
                          {video.description}
                        </p>
                      </div>
                    </td>

                    {/* ID */}
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                        <span>{video.id}</span>
                        <button
                          onClick={() => handleCopy(video.id)}
                          className="text-gray-400 hover:text-blue-500 transition"
                          title={
                            copiedId === video.id ? "Copied!" : "Copy Video ID"
                          }
                        >
                          {copiedId === video.id ? (
                            <Check
                              size={14}
                              className="text-green-500 scale-110"
                            />
                          ) : (
                            <Copy size={14} />
                          )}
                        </button>
                      </div>
                    </td>

                    {/* Playlist */}
                    <td className="px-4 py-4">
                      <span className="inline-flex items-center gap-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs px-2 py-1 rounded-md font-medium">
                        <FolderOpen size={12} />
                        {video.playlist}
                      </span>
                    </td>

                    {/* Views */}
                    <td className="px-4 py-4 font-medium text-indigo-500 dark:text-blue-400 flex items-center gap-1">
                      <Eye size={14} />
                      {video.views.toLocaleString()}
                    </td>

                    {/* Actions */}
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <Link href={`/video/${video.id}`}>
                          <button
                            className="text-gray-400 cursor-pointer hover:text-blue-500"
                            title="Analytics"
                          >
                            <MoveUpRight size={16} />
                          </button>
                        </Link>
                        <button
                          className="text-red-500 hover:text-red-600"
                          onClick={() => openDeleteModal(video.id)}
                          title="Delete"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {videos.length === 0 && (
              <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                No videos found.
              </div>
            )}

            {showDeleteModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
                <div className="w-full max-w-md bg-slate-800 text-white rounded-md shadow-2xl border border-slate-700">
                  {/* Title */}
                  <div className="px-6 pt-5 pb-3 border-b border-slate-700">
                    <h2 className="text-base font-semibold tracking-wide">
                      Confirm Video Deletion
                    </h2>
                  </div>

                  {/* Body */}
                  <div className="px-6 py-4 text-sm text-gray-300 space-y-3">
                    <div className="flex items-start gap-2">
                      <span className="text-yellow-400 text-lg mt-0.5">⚠️</span>
                      <p className="leading-relaxed">
                        This action will move the video to a deleted state. It
                        will be
                        <span className="text-red-400 font-medium">
                          {" "}
                          permanently deleted after 31 days
                        </span>
                        . You will not be able to recover it once the grace
                        period ends.
                      </p>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex justify-end items-center gap-3 px-6 pb-5">
                    <button
                      onClick={closeDeleteModal}
                      className="px-4 cursor-pointer py-1.5 text-sm rounded-md border border-slate-600 text-gray-300 hover:bg-slate-700 transition"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleConfirmDelete}
                      className="px-4 cursor-pointer py-1.5 text-sm rounded-md bg-red-600 hover:bg-red-700 text-white font-semibold transition"
                    >
                      Confirm Delete
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
