import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        cors: {
            // the origin you will be accessing via browser
            origin: "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft",
        },
        // proxy: {
        //     "/api": {
        //         target: "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft",
        //         changeOrigin: true,
        //     },
        // },
    },
});
