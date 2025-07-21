import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [C1, setC1] = useState(0);
  const [C2, setC2] = useState(0);
  const [C3, setC3] = useState(0);
  const [leader, setLeader] = useState("");

  useEffect(() => {
    if (C1 > C2 && C1 > C3) setLeader("🟦 Candidate 1");
    else if (C2 > C3 && C2 > C1) setLeader("🟩 Candidate 2");
    else if (C3 > C2 && C3 > C1) setLeader("🟥 Candidate 3");
    else setLeader("🤝 No clear leader");
  }, [C1, C2, C3]);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#2b1055] via-[#7597de] to-[#2b1055] text-white flex flex-col items-center justify-center px-4 py-10">
      {/* 🖼️ Voting Image */}
      <motion.img
        src="https://undraw.co/api/illustrations/undraw_voting_nvu7.svg"
        alt="Voting Illustration"
        className="w-full max-w-sm sm:max-w-md md:max-w-lg mb-8 drop-shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* 🏷️ Title */}
      <motion.h1
        className="text-5xl font-extrabold text-center mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        🌟 Supreme Voting Arena
      </motion.h1>

      {/* 🗳️ Voting Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Candidate 1 */}
        <motion.div
          className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-6 flex flex-col items-center hover:scale-105 transition duration-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-5xl">🟦</p>
          <h2 className="text-2xl mt-3 font-bold text-blue-300">Candidate 1</h2>
          <motion.p
            className="text-4xl font-extrabold mt-3 text-blue-200"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2, repeatDelay: 2 }}
          >
            {C1}
          </motion.p>

          {/* 🎯 Beautiful Vote Button */}
          <button
            onClick={() => setC1((v) => v + 1)}
            className="relative mt-6 inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-br from-blue-500 to-blue-700 rounded-full shadow-lg shadow-blue-800/40 hover:scale-105 hover:shadow-xl active:scale-95 transition-all duration-300 ease-in-out group"
          >
            <span className="absolute inset-0 bg-white/10 blur-md rounded-full opacity-30 group-hover:opacity-50 transition-all"></span>
            <span className="relative z-10">Vote Here</span>
          </button>
        </motion.div>

        {/* Candidate 2 */}
        <motion.div
          className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-6 flex flex-col items-center hover:scale-105 transition duration-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-5xl">🟩</p>
          <h2 className="text-2xl mt-3 font-bold text-green-300">Candidate 2</h2>
          <motion.p
            className="text-4xl font-extrabold mt-3 text-green-200"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2, repeatDelay: 2 }}
          >
            {C2}
          </motion.p>
          <button
            onClick={() => setC2((v) => v + 1)}
            className="relative mt-6 inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-br from-green-500 to-green-700 rounded-full shadow-lg shadow-green-800/40 hover:scale-105 hover:shadow-xl active:scale-95 transition-all duration-300 ease-in-out group"
          >
            <span className="absolute inset-0 bg-white/10 blur-md rounded-full opacity-30 group-hover:opacity-50 transition-all"></span>
            <span className="relative z-10"> Vote Here</span>
          </button>
        </motion.div>

        {/* Candidate 3 */}
        <motion.div
          className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-6 flex flex-col items-center hover:scale-105 transition duration-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-5xl">🟥</p>
          <h2 className="text-2xl mt-3 font-bold text-rose-300">Candidate 3</h2>
          <motion.p
            className="text-4xl font-extrabold mt-3 text-rose-200"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2, repeatDelay: 2 }}
          >
            {C3}
          </motion.p>
          <button
            onClick={() => setC3((v) => v + 1)}
            className="relative mt-6 inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-br from-rose-500 to-rose-700 rounded-full shadow-lg shadow-rose-800/40 hover:scale-105 hover:shadow-xl active:scale-95 transition-all duration-300 ease-in-out group"
          >
            <span className="absolute inset-0 bg-white/10 blur-md rounded-full opacity-30 group-hover:opacity-50 transition-all"></span>
            <span className="relative z-10">Vote Here</span>
          </button>
        </motion.div>
      </div>

      {/* 🏆 Leader Section */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p className="text-xl mb-2 text-gray-200 font-medium">🏆 Current Leader:</p>
        <h2 className="text-4xl font-bold text-yellow-300">{leader}</h2>
      </motion.div>
    </div>
  );
}
