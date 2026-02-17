import { motion } from 'motion/react'

export default function WeChatFloat() {
    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="fixed bottom-6 left-6 z-50 flex flex-col items-center gap-2"
        >
            <a href="weixin://dl/chat?jflytravel" target="_blank" rel="noopener noreferrer">
                <div className="bg-white p-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                    <img
                        src="/images/wcht.jpeg"
                        alt="WeChat QR Code"
                        className="w-24 h-24 md:w-32 md:h-32 object-contain"
                    />
                </div>
                <div className="bg-slate-800/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg mt-2">
                    <p className="text-white text-xs md:text-sm font-medium whitespace-nowrap text-center">
                        id wechat : jflytravel
                    </p>
                </div>
            </a>
        </motion.div>
    )
}
