import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { Divider, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import MainWrapper from "../wrappers/MainWrapper";
import MainCardWrapper from "../wrappers/MainCardWrapper";
import PostForm from "./form/PostForm";
import { Loading } from "react-loading-dot";
import { MobileStepperClassKey } from "@mui/material";
import useGetActiveServiceEndpoint from "../hooks/useGetActiveServiceEndpoint";
import { useAlert } from "react-alert";
import { SuccessModal } from "./SuccessModal";
import { useEffect } from "react";

// const MainPage = () => {
//   const theme = useTheme();
//   const matchDownSM = useMediaQuery(theme.breakpoints.down("md"));

//   const { isLoading, isLoadingPost, postForm, open, setOpen } =
//     useGetActiveServiceEndpoint();

//   return (
//     <MainWrapper>
//       <Grid
//         container
//         direction="column"
//         justifyContent="flex-end"
//         sx={{ minHeight: "100vh" }}
//       >
//         <Grid item xs={12}>
//           <Grid
//             container
//             justifyContent="center"
//             alignItems="center"
//             sx={{ minHeight: "calc(100vh - 68px)" }}
//           >
//             {isLoading ? (
//               <Loading background="purple" />
//             ) : (
//               <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
//                 <MainCardWrapper>
//                   <Grid
//                     container
//                     spacing={2}
//                     alignItems="center"
//                     justifyContent="center"
//                   >
//                     <Grid item xs={12}>
//                       <Grid
//                         container
//                         direction={matchDownSM ? "column-reverse" : "row"}
//                         alignItems="center"
//                         justifyContent="center"
//                       >
//                         <Grid item>
//                           <Stack
//                             alignItems="center"
//                             justifyContent="center"
//                             spacing={1}
//                           >
//                             <Typography
//                               textAlign={"center"}
//                               color={theme.palette.secondary.main}
//                               gutterBottom
//                               variant={matchDownSM ? "h3" : "h2"}
//                             >
//                               Zəhmət olmasa elektron poçtunuzu daxil edin
//                             </Typography>
//                           </Stack>
//                         </Grid>
//                       </Grid>
//                     </Grid>
//                     <Grid item xs={12}>
//                       <PostForm isLoading={isLoadingPost} postFunc={postForm} />
//                     </Grid>
//                   </Grid>
//                 </MainCardWrapper>
//               </Grid>
//             )}
//           </Grid>
//         </Grid>
//       </Grid>
//       <SuccessModal open={open} setOpen={setOpen} />
//     </MainWrapper>
//   );
// };

const MainPage = () => {
  // const theme = useTheme();
  // const matchDownSM = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(()=>{
    window.location.replace('https://www.surveymonkey.com/r/Preview/?sm=7RQ6iLA2EK_2Bxzf_2BZmdvfW4faIYmiUIJUiYOka7xxmcvF6YizjauYPWjOWNGhfdro')
  },[])

  return (
    <>
      <Loading background="purple" />
    </>
  );
};

export default MainPage;
