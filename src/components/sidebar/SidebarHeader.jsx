import { Avatar, Typography } from "@mui/material";

import avatar from "../../assets/avatar.jpg";

const SidebarHeader = () => {
    return (
        <>
            <Avatar
                src={avatar}
                variant="rounded"
                sx={{
                    height: 200,
                    width: 200,
                    margin: "0 auto",
                    display: {
                        xl: "block",
                        lg: "block",
                        md: "block",
                        sm: "none",
                        xs: "none",
                    },
                }}
            >
                YG
            </Avatar>
            <Typography variant="h6" color="whitesmoke">
                یونس قربانی
            </Typography>

            <Typography variant="caption" color="whitesmoke">
                مدرس برنامه نویسی و توسعه دهنده فول استک
            </Typography>
        </>
    );
};

export default SidebarHeader;
