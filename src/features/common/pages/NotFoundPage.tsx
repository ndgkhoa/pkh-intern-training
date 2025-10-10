import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center text-center">
      <motion.h1
        className="text-9xl font-extrabold text-blue-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        404
      </motion.h1>

      <motion.h2
        className="mt-4 text-2xl font-semibold text-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Oops! Trang bạn tìm không tồn tại
      </motion.h2>

      <motion.p
        className="mt-2 mb-6 max-w-md text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Có thể đường dẫn đã bị thay đổi hoặc bạn nhập sai. Hãy quay lại trang chủ để tiếp tục.
      </motion.p>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
        <Link to="/" className="rounded-xl bg-blue-600 px-6 py-3 text-white shadow transition-colors hover:bg-blue-700">
          Quay lại trang chủ
        </Link>
      </motion.div>
    </div>
  );
}
