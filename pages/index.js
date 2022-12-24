import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import {
    Box,
    Button,
    Container,
    Grid,
    IconButton,
    InputAdornment,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import Link from "next/link";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Head>
                <title>Pickaxe</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/img/logo.png" />
            </Head>
            <Container
                sx={{
                    marginTop: "26px",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Image
                    src={"/img/logo.png"}
                    alt={"pickaxe_logo"}
                    width={32}
                    height={32}
                />
                <Typography
                    sx={{
                        fontSize: "32px",
                        margin: " 0 10px",
                        fontWeight: "600",
                    }}
                >
                    Pickaxe
                </Typography>
            </Container>
            <Container sx={{ textAlign: "center", margin: "70px auto" }}>
                <Typography
                    variant="h1"
                    component={"h1"}
                    sx={{
                        marginBottom: "10px",
                    }}
                >
                    Pickaxe is under construction
                </Typography>
                <Typography
                    variant="h3"
                    sx={{
                        lineHeight: "30px",
                        margin: "0 auto",
                        maxWidth: "570px",
                        marginBottom: "26px",
                        "@media (max-width:600px)": {
                            padding: "0 50px",
                        },
                    }}
                >
                    But the beta version is open to anyone who asks. It&apos;s
                    free and (semi)-ready to be tested!
                </Typography>
                <a
                    href="//beta.pickaxeproject.com"
                    target={"_blank"}
                    rel="noreferrer"
                >
                    <Button
                        variant="contained"
                        sx={{
                            fontWeight: "800",
                            textTransform: "unset",
                            fontSize: "16px",
                            padding: "16px 46px",
                        }}
                    >
                        Visit beta
                    </Button>
                </a>
            </Container>
            <Footer />
        </>
    );
}
