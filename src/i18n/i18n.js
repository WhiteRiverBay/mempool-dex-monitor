import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector).use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                "Connect Wallet": "Connect Wallet",
                "Wallet Connected": "Wallet Connected",
                "Wallet Disconnected": "Wallet Disconnected",
                "Wallet Connecting": "Wallet Connecting",
                "Wallet Connection Failed": "Wallet Connection Failed",
                "Wallet Connection Failed, Please Try Again": "Wallet Connection Failed, Please Try Again",
                "Wallet Connection Failed, Please Switch Network to BSC": "Wallet Connection Failed, Please Switch Network to BSC",   
                
                "swap": "{{address}} is swapping {{token0}} for {{token1}} at price {{price0}} (paying {{amount0}} {{token0}}), expecting to receive {{amount1}} {{token1}}",
                "addLiquidity": "{{address}} is adding liquidity for {{token0}} (expecting {{amount0desired}}, minimum {{amount0min}}) and {{token1}} (expecting {{amount1desired}}, minimum {{amount1min}}), LP address: {{lpAddress}}",
                "removeLiquidity": "{{address}} is removing liquidity for {{token0}} and {{token1}}",
                "createPair": "{{address}} is creating pair for {{token0}} and {{token1}}",
            },
        },
        zh: {
            translation: {
                "Connect Wallet": "连接钱包",
                "Wallet Connected": "钱包已连接",
                "Wallet Disconnected": "钱包已断开",
                "Wallet Connecting": "钱包连接中",
                "Wallet Connection Failed": "钱包连接失败",
                "Wallet Connection Failed, Please Try Again": "钱包连接失败，请重试",
                "Wallet Connection Failed, Please Switch Network to BSC": "钱包连接失败，请切换到BSC网络",

                "swap": "{{address}} 正在卖出{{token0}}买入{{token1}}, 价格{{price0}} (支付{{amount0}} {{token0}}), 期望获得{{amount1}} {{token1}}",
                "addLiquidity": "{{address}} 正在添加流动性{{token0}}(期望{{amount0desired}}, 最小{{amount0min}})和{{token1}}(期望{{amount1desired}},最小{{amount1min}}), LP地址: {{lpAddress}}",
                "removeLiquidity": "{{address}} 正在移除流动性{{token0}}和{{token1}}",
                "createPair": "{{address}} 正在创建交易对{{token0}}和{{token1}}",
            },
        },
        id: {
            translation: {
                "Connect Wallet": "Sambungkan Dompet",
                "Wallet Connected": "Dompet Tersambung",
                "Wallet Disconnected": "Dompet Terputus",
                "Wallet Connecting": "Dompet Menyambung",
                "Wallet Connection Failed": "Koneksi Dompet Gagal",
                "Wallet Connection Failed, Please Try Again": "Koneksi Dompet Gagal, Silakan Coba Lagi",
                "Wallet Connection Failed, Please Switch Network to BSC": "Koneksi Dompet Gagal, Silakan Beralih ke Jaringan BSC",

                "swap": "{{address}} sedang menukar {{token0}} untuk {{token1}} dengan harga {{price0}} (membayar {{amount0}} {{token0}}), mengharapkan menerima {{amount1}} {{token1}}",
                "addLiquidity": "{{address}} sedang menambahkan likuiditas untuk {{token0}} (mengharapkan {{amount0desired}}, minimum {{amount0min}}) dan {{token1}} (mengharapkan {{amount1desired}}, minimum {{amount1min}}), alamat LP: {{lpAddress}}",
                "removeLiquidity": "{{address}} sedang menghapus likuiditas untuk {{token0}} dan {{token1}}",
                "createPair": "{{address}} sedang membuat pasangan untuk {{token0}} dan {{token1}}",
            },
        }
    },
    fallbackLng: 'en',
    debug: false,
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
                