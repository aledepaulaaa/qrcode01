import React from "react"
import { Grid } from "@mui/material"
import { QRCodeSVG } from "qrcode.react"
import { useRouter } from "next/router"

export default function Home() {
    const router = useRouter()

    const handleScan = (data: string | any) => {
        if (data) {
            window.open(data, "_blank") // Abrir a URL do QR code em uma nova aba
            router.push("https://qrcode-gules-tau.vercel.app/qrcode1") // Redirecionar para a rota /qrcode
        }
    }

    const handleError = (error: any) => {
        console.error("Ocorreu algum erro ao escanear o QR code: ", error)
    }

    return (
        <Grid container spacing={2}>
            <Grid
                item xs={12}
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
            >
                <QRCodeSVG
                    style={{ width: 200, height: 200, marginTop: 50 }}
                    value="https://qrcode-six-chi.vercel.app/qrcode1"
                    onError={handleError}
                    onLoad={handleScan}
                />
            </Grid>
            <Grid
                item xs={12}
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
            >
                <QRCodeSVG
                    style={{ width: 200, height: 200, marginTop: 50 }}
                    value="https://qrcode-six-chi.vercel.app/qrcode2"
                    onError={handleError}
                    onLoad={handleScan}
                />
            </Grid>
        </Grid>
    )
}
