import { Grid, Typography } from "@mui/material"

export default function QrCode1() {
    return (
        <Grid container spacing={2}>
            <Grid
                item
                xs={12}
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
            >
                <img
                    src="/img/img_01.jpg"
                    alt="Puc-Tec"
                    width="300"
                    height="100%"
                    style={{ marginTop: 25 }}
                />
            </Grid>
        </Grid>
    )
}