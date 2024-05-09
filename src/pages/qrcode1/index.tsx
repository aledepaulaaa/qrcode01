import { Grid } from "@mui/material"

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
                    src="/img/coca.jpg"
                    alt="Coca Cola"
                    width={200}
                    height={200}
                />
            </Grid>
        </Grid>
    )
}