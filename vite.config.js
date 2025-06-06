import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        cors: {
            // the origin you will be accessing via browser
            origin: "https://clicks.aweber.com/y/ct/?l=eNKMKn&m=8kKiA5Xs4lyuOBlr&b=LN4zdPOCY2wffjE5vH.B0w",
        },
        proxy: {
            "/api": {
                target: "https://clicks.aweber.com/y/ct/?l=eNKMKn&m=8kKiA5Xs4lyuOBlr&b=LN4zdPOCY2wffjE5vH.B0w",
                changeOrigin: true,
            },
        },
    },
});
