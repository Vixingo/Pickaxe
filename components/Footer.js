import Image from "next/image";
import {
    Box,
    Button,
    Container,
    Grid,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import { useState } from "react";

function Footer() {
    const [ask, setAsk] = useState(false);

    return (
        <>
            {" "}
            <Box
                sx={{
                    background: "url(/img/footer_bg.png)",
                    padding: "90px 0px",
                }}
            >
                <Container>
                    <Grid container>
                        <Grid item xs={4}>
                            <Image
                                src={"/img/footer.png"}
                                width={262}
                                height={262}
                                alt={"footer img"}
                                style={{
                                    borderRadius: "50%",
                                    margin: "0 auto",
                                }}
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <Typography
                                sx={{ fontSize: "14px", fontWeight: "700" }}
                            >
                                CHATBOT
                            </Typography>
                            <Typography
                                variant="h4"
                                component={"h1"}
                                fontWeight={700}
                            >
                                Pickaxe FAQ Receptionist
                            </Typography>
                            <Typography fontWeight={300} component={"h6"}>
                                Ask me anything about Pickaxe and the new beta!
                            </Typography>
                            <Box
                                sx={{
                                    background: "#fff",
                                    display: "flex",
                                    width: "100%",
                                    borderRadius: "4px",
                                    boxShadow: "inset 0 0 0px 2px #112f45",
                                    border: "1px solid #112f45",
                                }}
                            >
                                <TextField
                                    placeholder="How can I help?"
                                    focused
                                    sx={{
                                        flex: "1",
                                        border: "none",
                                    }}
                                />
                                <Button
                                    onClick={() => {
                                        setAsk(true);
                                    }}
                                    variant={
                                        ask == false ? "outlined" : "contained"
                                    }
                                    sx={{
                                        border: "2px solid #112f45",
                                        marginLeft: "-1px",
                                        "&:hover": {
                                            border: "2px solid #112f45",
                                        },
                                    }}
                                >
                                    {ask == false ? "Ask" : "Asking"}
                                </Button>
                            </Box>
                            <Paper
                                elevation={3}
                                sx={{
                                    py: 1,
                                    px: 2,
                                    mt: 2,
                                    width: "100%",
                                    background: "rgba(255, 255, 255, 0.8)",
                                    border: "none",
                                    borderRadius: "2px",
                                    minHeight: "100px",
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "inline",
                                    }}
                                >
                                    {" "}
                                    <Image
                                        src={"/img/logo.png"}
                                        width={20}
                                        height={20}
                                        alt="logo"
                                    />
                                    <Typography
                                        sx={{
                                            marginLeft: "10px",
                                            display: "inline",
                                            color: "rgba(0, 0, 0, 0.5)",
                                        }}
                                    >
                                        {" "}
                                        AI Output
                                    </Typography>
                                </Box>{" "}
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default Footer;
