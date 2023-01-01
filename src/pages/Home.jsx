import { useEffect, useRef, useCallback } from "react";

import { Box, Typography } from "@mui/material";
import Typed from "typed.js";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

import { hexagon, links } from "../constants/particles";
import bg02 from "../assets/bg02.jpeg";

const Home = () => {
    const nameEl = useRef(null);
    const infoEl = useRef(null);

    const strings = [
        "من یک توسعه دهنده فول استک هستم",
        "من یک مدرس برنامه نویسی هستم",
        "من یک فریلنسر هستم",
        "من یک محتواساز دنیای برنامه نویسی هستم",
    ];

    useEffect(() => {
        const typedName = new Typed(nameEl.current, {
            strings: ["[[ یونس قربانی ]]"],
            typeSpeed: 50,
            backSpeed: 20,
            backDelay: 10,
            showCursor: false,
        });

        const typedInfo = new Typed(infoEl.current, {
            strings: strings,
            startDelay: 1500,
            typeSpeed: 80,
            backSpeed: 50,
            backDelay: 50,
            loop: true,
            showCursor: false,
        });

        return () => {
            typedName.destroy();
            typedInfo.destroy();
        };
    }, []);

    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);
    return (
        <Box
            sx={{
                backgroundImage: `url(${bg02})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={links}
            />
            <Typography ref={nameEl} variant="h3" color="tomato"></Typography>
            <Typography
                ref={infoEl}
                variant="h4"
                color="whitesmoke"
                sx={{
                    textDecoration: "underline",
                    textDecorationColor: "#1976d2",
                }}
            ></Typography>
        </Box>
    );
};

export default Home;
